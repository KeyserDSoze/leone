import { ref, get, set, update } from "firebase/database";
import { db } from "../firebase";
import { GAME_ID, INITIAL_GAME_STATE } from "./config";
import type { Question, GameStatus, PublicQuestion, PublicAnswerStats } from "./types";
import { calculatePoints } from "./scoring";

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
  const updates: Record<string, unknown> = {};

  updates[`games/${GAME_ID}`] = { ...INITIAL_GAME_STATE };
  updates[`answers/${GAME_ID}`] = null;
  updates[`leaderboards/${GAME_ID}`] = null;

  const playersSnap = await get(ref(db, `players/${GAME_ID}`));
  if (playersSnap.exists()) {
    const players = playersSnap.val() as Record<string, unknown>;
    for (const uid of Object.keys(players)) {
      updates[`players/${GAME_ID}/${uid}/score`] = 0;
    }
  }

  await update(ref(db), updates);
}

/** Inizializza la struttura di gioco se non esiste */
export async function initGameIfNeeded(): Promise<void> {
  const snap = await get(ref(db, `games/${GAME_ID}`));
  if (!snap.exists()) {
    await set(ref(db, `games/${GAME_ID}`), { ...INITIAL_GAME_STATE });
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
    text: question.text,
    answers: question.answers,
  };
}

/** Avvia una domanda */
export async function startQuestion(
  question: Question,
  index: number
): Promise<void> {
  const now = Date.now();
  const answerSeconds = question.category === "demo" ? 20 : 20;
  const status: GameStatus =
    question.category === "demo" ? "demo" : "question";

  await update(ref(db, `games/${GAME_ID}`), {
    status,
    currentQuestionIndex: index,
    currentQuestionId: question.id,
    questionStartedAt: now,
    questionEndsAt: now + answerSeconds * 1000,
    showResults: false,
    showLeaderboard: false,
    leaderboardRevealStep: -1,
    publicCurrentQuestion: toPublicQuestion(question, index, 20),
    publicCurrentResult: null,
    publicAnswerStats: null,
  });
}

/**
 * Chiude la domanda: calcola punti (con penalità per risposte sbagliate veloci),
 * pubblica distribuzione risposte e risposta corretta.
 */
export async function closeQuestion(question: Question): Promise<void> {
  await update(ref(db, `games/${GAME_ID}`), {
    status: "locked" as GameStatus,
  });

  const gameSnap = await get(ref(db, `games/${GAME_ID}`));
  const game = gameSnap.val() as {
    questionStartedAt: number;
    questionEndsAt: number;
  };

  const answersSnap = await get(
    ref(db, `answers/${GAME_ID}/${question.id}`)
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

  const isDemo = question.category === "demo";
  const updates: Record<string, unknown> = {};

  // Calcola distribuzione risposte (solo giocatori con username)
  const stats: PublicAnswerStats = { A: 0, B: 0, C: 0, D: 0, total: 0 };

  for (const [uid, player] of Object.entries(players)) {
    // Salta record senza username (es. host che ha chiamato setupPresence)
    if (!player.username) continue;

    const answer = answers[uid];
    const isCorrect =
      !isDemo && answer?.answerId === question.correctAnswerId;

    const points = isDemo
      ? 0
      : calculatePoints({
          isCorrect,
          answeredAt: answer?.answeredAt,
          questionStartedAt: game.questionStartedAt,
          questionEndsAt: game.questionEndsAt,
        });

    // Score non può scendere sotto 0
    const newScore = Math.max(0, Number(player.score ?? 0) + points);

    if (!isDemo) {
      updates[`players/${GAME_ID}/${uid}/score`] = newScore;
      updates[`leaderboards/${GAME_ID}/${uid}`] = {
        username: player.username,
        score: newScore,
      };
    }

    if (answer) {
      updates[`answers/${GAME_ID}/${question.id}/${uid}/isCorrect`] = isCorrect;
      updates[`answers/${GAME_ID}/${question.id}/${uid}/points`] = points;

      // Accumula stats
      const aid = answer.answerId as "A" | "B" | "C" | "D";
      if (["A", "B", "C", "D"].includes(aid)) {
        stats[aid]++;
        stats.total++;
      }
    }
  }

  updates[`games/${GAME_ID}/status`] = "answer" as GameStatus;
  updates[`games/${GAME_ID}/showResults`] = true;
  updates[`games/${GAME_ID}/publicCurrentResult`] = {
    questionId: question.id,
    correctAnswerId: question.correctAnswerId,
    explanation: question.explanation ?? null,
  };
  updates[`games/${GAME_ID}/publicAnswerStats`] = stats;

  await update(ref(db), updates);
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
