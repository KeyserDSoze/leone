import { ref, get, set, update } from "firebase/database";
import { db } from "../firebase";
import { GAME_ID, INITIAL_GAME_STATE, DEMO_ANSWER_SECONDS, QUESTION_ANSWER_SECONDS } from "./config";
import type { Question, GameStatus, PublicQuestion, PublicAnswerStats, AnswerId } from "./types";
import { calculatePoints } from "./scoring";
import { encodeCorrectAnswerIds } from "./publicResult";

/** Controlla se l'uid corrente è admin */
export async function checkIsAdmin(uid: string): Promise<boolean> {
  try {
    const snap = await get(ref(db, `admins/${uid}`));
    return snap.val() === true;
  } catch {
    return false;
  }
}

/** Reset completo della partita */
export async function resetGame(): Promise<void> {
  const newSession = Date.now().toString();

  // Reset game state (new session ID)
  await set(ref(db, `games/${GAME_ID}`), { ...INITIAL_GAME_STATE, gameSession: newSession });

  // Clear leaderboard
  await set(ref(db, `leaderboards/${GAME_ID}`), null);
}

/** Inizializza la struttura di gioco se non esiste */
export async function initGameIfNeeded(): Promise<void> {
  const snap = await get(ref(db, `games/${GAME_ID}`));
  if (!snap.exists()) {
    await set(ref(db, `games/${GAME_ID}`), {
      ...INITIAL_GAME_STATE,
      gameSession: Date.now().toString(),
    });
  }
}

function toPublicQuestion(
  question: Question,
  index: number,
  total: number
): PublicQuestion {
  return {
    id: question.id,
    index,
    total,
    category: question.category,
    subcategory: question.subcategory,
    text: question.text,
    answers: question.answers,
  };
}

/**
 * Avvia una domanda con questionVisible:false.
 * I player vedono solo la sottocategoria finché l'host non chiama revealQuestion().
 */
export async function startQuestion(
  question: Question,
  index: number
): Promise<void> {
  const status: GameStatus =
    question.category === "demo" ? "demo" : "question";

  await update(ref(db, `games/${GAME_ID}`), {
    status,
    currentQuestionIndex: index,
    currentQuestionId: question.id,
    questionStartedAt: null,
    questionEndsAt: null,
    questionVisible: false,
    showResults: false,
    showLeaderboard: false,
    leaderboardRevealStep: -1,
    publicCurrentQuestion: toPublicQuestion(question, index, 20),
    publicCurrentResult: null,
    publicAnswerStats: null,
    showStats: false,
  });
}

/**
 * Rivela la domanda ai player e avvia il timer.
 * Va chiamata dopo startQuestion() quando l'host vuole avviare il conto alla rovescia.
 */
export async function revealQuestion(
  question: Question,
  seconds?: number
): Promise<void> {
  const now = Date.now();
  const answerSeconds =
    seconds ??
    (question.category === "demo" ? DEMO_ANSWER_SECONDS : QUESTION_ANSWER_SECONDS);

  await update(ref(db, `games/${GAME_ID}`), {
    questionVisible: true,
    questionStartedAt: now,
    questionEndsAt: now + answerSeconds * 1000,
  });
}

/**
 * Riapre una domanda già chiusa (es. clic accidentale su "Chiudi risposte").
 * Aggiunge 20s di finestra al timer e riporta la domanda visibile.
 * Le risposte già inviate restano valide (Firebase ".write: !data.exists()").
 */
export async function reopenQuestion(question: Question): Promise<void> {
  const now = Date.now();
  const status: GameStatus = question.category === "demo" ? "demo" : "question";
  await update(ref(db, `games/${GAME_ID}`), {
    status,
    questionVisible: true,
    questionStartedAt: now,
    questionEndsAt: now + 20 * 1000,
    publicCurrentResult: null,
    publicAnswerStats: null,
  });
}

/**
 * Chiude la domanda: calcola punti (con penalità per risposte sbagliate veloci),
 * pubblica distribuzione risposte e risposte corrette.
 * Idempotente: se publicCurrentResult per questa domanda è già settato,
 * ri-pubblica solo lo stato "answer" senza ricalcolare i punteggi.
 * Supporta correctAnswerIds[] (risposta multipla).
 */
export async function closeQuestion(question: Question, gameSession: string): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    status: "locked" as GameStatus,
  });

  // Idempotency: already scored this question → just show results again
  const existingResultSnap = await get(ref(db, `games/${GAME_ID}/publicCurrentResult`));
  const existingResult = existingResultSnap.val() as { questionId?: string } | null;
  if (existingResult?.questionId === question.id) {
    await update(ref(db, `games/${GAME_ID}`), {
      status: "answer" as GameStatus,
      showResults: true,
    });
    return;
  }

  const gameSnap = await get(ref(db, `games/${GAME_ID}`));
  const game = gameSnap.val() as {
    questionStartedAt: number;
    questionEndsAt: number;
  };

  const answersSnap = await get(
    ref(db, `answers/${GAME_ID}/${gameSession}/${question.id}`)
  );
  const answers = (answersSnap.val() ?? {}) as Record<
    string,
    { answerId: string; answeredAt: number }
  >;

  const playersSnap = await get(ref(db, `players/${GAME_ID}`));
  const players = (playersSnap.val() ?? {}) as Record<
    string,
    { username: string; score: number }
  >;
  const leaderboardSnap = await get(ref(db, `leaderboards/${GAME_ID}`));
  const leaderboard = (leaderboardSnap.val() ?? {}) as Record<
    string,
    { score: number }
  >;

  const isDemo = question.category === "demo";

  // Calcola distribuzione risposte (solo giocatori con username)
  const stats: PublicAnswerStats = { A: 0, B: 0, C: 0, D: 0, total: 0 };
  const leaderboardUpdates: Record<string, { username: string; score: number }> = {};

  for (const [uid, player] of Object.entries(players)) {
    // Salta record senza username (es. host che ha chiamato setupPresence)
    if (!player.username) continue;

    const answer = answers[uid];
    const isCorrect =
      !isDemo &&
      Boolean(answer?.answerId) &&
      question.correctAnswerIds.includes(answer.answerId as AnswerId);

    const points = isDemo
      ? 0
      : calculatePoints({
          isCorrect,
          answeredAt: answer?.answeredAt,
          questionStartedAt: game.questionStartedAt,
          questionEndsAt: game.questionEndsAt,
        });

    // Score non può scendere sotto 0
    const previousScore = Number(leaderboard[uid]?.score ?? player.score ?? 0);
    const newScore = Math.max(0, previousScore + points);

    if (!isDemo) {
      leaderboardUpdates[uid] = { username: player.username, score: newScore };
    }

    if (answer) {
      const aid = answer.answerId as "A" | "B" | "C" | "D";
      if (["A", "B", "C", "D"].includes(aid)) {
        stats[aid]++;
        stats.total++;
      }
    }
  }

  // Write the minimal result payload first so the quiz can continue even if
  // stricter rules reject optional stats or score mirrors.
  await update(ref(db, `games/${GAME_ID}`), {
    status: "answer" as GameStatus,
    showResults: true,
    showStats: false, // host clicca "Mostra statistiche" per rivelare le barre
    publicCurrentResult: {
      questionId: question.id,
      correctAnswerId: encodeCorrectAnswerIds(question.correctAnswerIds),
      explanation: question.explanation ?? null,
    },
  });

  try {
    await update(ref(db, `games/${GAME_ID}`), {
      publicAnswerStats: stats,
    });
  } catch (error) {
    console.warn("Unable to persist answer stats", error);
  }

  if (!isDemo && Object.keys(leaderboardUpdates).length > 0) {
    try {
      await update(ref(db, `leaderboards/${GAME_ID}`), leaderboardUpdates);
    } catch (error) {
      console.warn("Unable to persist leaderboard updates", error);
    }
  }
}

/** Rivela le barre distribuzione risposte a tutti i player */
export async function revealStats(): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    showStats: true,
  });
}

/** Passa allo stato classifica (step 0 = mostra tutti tranne top 5) */
export async function showLeaderboard(): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    status: "leaderboard" as GameStatus,
    showLeaderboard: true,
    leaderboardRevealStep: 0,
  });
}

/** Avanza di un passo nella rivelazione della classifica (step 1-5) */
export async function revealNextLeaderboardStep(currentStep: number): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    leaderboardRevealStep: currentStep + 1,
  });
}

/** Fine gioco */
export async function finishGame(): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    status: "finished" as GameStatus,
    showLeaderboard: true,
    leaderboardRevealStep: 5,
  });
}
