import { ref, get, set, update } from "firebase/database";
import { db } from "../firebase";
import { GAME_ID, INITIAL_GAME_STATE, DEMO_ANSWER_SECONDS, QUESTION_ANSWER_SECONDS } from "./config";
import type {
  Question,
  GameStatus,
  PublicQuestion,
  PublicAnswerStats,
  PublicQuestionLeaderboardEntry,
  AnswerId,
  Player,
} from "./types";
import { calculatePoints } from "./scoring";
import { encodeCorrectAnswerIds } from "./publicResult";

function sortQuestionLeaderboard(
  a: PublicQuestionLeaderboardEntry,
  b: PublicQuestionLeaderboardEntry
): number {
  if (a.isCorrect !== b.isCorrect) {
    return Number(b.isCorrect) - Number(a.isCorrect);
  }

  const aAnswered = a.answeredAt ?? Number.POSITIVE_INFINITY;
  const bAnswered = b.answeredAt ?? Number.POSITIVE_INFINITY;
  if (aAnswered !== bAnswered) {
    return aAnswered - bAnswered;
  }

  if (a.points !== b.points) {
    return b.points - a.points;
  }

  return a.username.localeCompare(b.username, "it");
}

type ResetGameOptions = {
  questionIds?: string[];
  questionCount?: number;
  questionSeed?: number;
};

/** Reset completo della partita */
export async function resetGame(options: ResetGameOptions = {}): Promise<void> {
  const newSession = Date.now().toString();

  // Reset game state (new session ID)
  await set(ref(db, `games/${GAME_ID}`), {
    ...INITIAL_GAME_STATE,
    gameSession: newSession,
    questionIds: options.questionIds ?? INITIAL_GAME_STATE.questionIds,
    questionCount: options.questionCount ?? INITIAL_GAME_STATE.questionCount,
    questionSeed: options.questionSeed ?? INITIAL_GAME_STATE.questionSeed,
  });

  // Clear leaderboard
  await set(ref(db, `leaderboards/${GAME_ID}`), null);
}

/** Rimuove un giocatore (offline) dalla partita e dalla classifica.
 * I record sotto players/ sono scrivibili solo dal giocatore stesso, quindi
 * marchiamo l'uid come "kicked" nello stato di gioco (scrivibile dall'host)
 * e rimuoviamo la sua voce di classifica. */
export async function kickPlayer(uid: string, username?: string): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    [`kickedUids/${uid}`]: true,
    ...(username ? { [`kickedUsernames/${uid}`]: username } : {}),
  });
  await update(ref(db, `leaderboards/${GAME_ID}`), { [uid]: null });
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
  index: number,
  total: number
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
    publicCurrentQuestion: toPublicQuestion(question, index, total),
    publicCurrentResult: null,
    publicAnswerStats: null,
    publicQuestionLeaderboard: null,
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
    publicQuestionLeaderboard: null,
  });
}

/**
 * Chiude la domanda: calcola punti (con penalità per risposte sbagliate veloci),
 * pubblica distribuzione risposte e risposte corrette.
 * Idempotente: se publicCurrentResult per questa domanda è già settato,
 * ri-pubblica solo lo stato "answer" senza ricalcolare i punteggi.
 * Supporta correctAnswerIds[] (risposta multipla).
 * Le risposte vengono lette da players/.../{uid}/currentAnswer* perché
 * answers/... non è leggibile dalle rules correnti.
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

  const playersSnap = await get(ref(db, `players/${GAME_ID}`));
  const players = (playersSnap.val() ?? {}) as Record<string, Player>;
  const leaderboardSnap = await get(ref(db, `leaderboards/${GAME_ID}`));
  const leaderboard = (leaderboardSnap.val() ?? {}) as Record<
    string,
    { score: number }
  >;

  const isDemo = question.category === "demo";

  // Calcola distribuzione risposte (solo giocatori con username)
  const stats: PublicAnswerStats = { A: 0, B: 0, C: 0, D: 0, total: 0 };
  const leaderboardUpdates: Record<string, { username: string; score: number }> = {};
  const questionLeaderboard: PublicQuestionLeaderboardEntry[] = [];

  for (const [uid, player] of Object.entries(players)) {
    // Salta record senza username (es. host che ha chiamato setupPresence)
    if (!player.username) continue;

    const answer =
      player.currentAnswerGameSession === gameSession &&
      player.currentAnswerQuestionId === question.id &&
      player.currentAnswerAnswerId
        ? {
            answerId: player.currentAnswerAnswerId,
            answeredAt: player.currentAnswerAnsweredAt,
          }
        : null;

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

    questionLeaderboard.push({
      uid,
      username: player.username,
      answerId: (answer?.answerId ?? null) as AnswerId | null,
      isCorrect,
      points,
      answeredAt: answer?.answeredAt ?? null,
      responseMs: answer?.answeredAt
        ? Math.max(0, answer.answeredAt - game.questionStartedAt)
        : null,
    });

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
    publicQuestionLeaderboard: questionLeaderboard.sort(sortQuestionLeaderboard),
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

/** Mostra la classifica della singola domanda appena conclusa */
export async function showQuestionLeaderboard(): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    status: "question-leaderboard" as GameStatus,
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
