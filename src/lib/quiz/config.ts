export const GAME_ID = "battesimo-leone-2026";

export const DEMO_ANSWER_SECONDS = 20;
export const QUESTION_ANSWER_SECONDS = 20;

export const TOTAL_QUESTIONS = 20;
export const GENERAL_QUESTION_COUNT = 11;
export const LEONE_QUESTION_COUNT = 9;

/**
 * Posizioni 1-indexed delle domande su Leone nel set da 20.
 * Q1 sempre in posizione 1, Q9 sempre in posizione 20.
 */
export const LEONE_SLOTS = new Set([1, 4, 6, 9, 12, 14, 17, 19, 20]);

/** Offset round-robin per le domande generali (cambia tra manche) */
export const GENERAL_POOL_OFFSET = 0;

export const INITIAL_GAME_STATE = {
  gameSession: "",
  status: "lobby",
  currentQuestionIndex: -1,
  currentQuestionId: null,
  questionStartedAt: null,
  questionEndsAt: null,
  questionVisible: false,
  showResults: false,
  showStats: false,
  showLeaderboard: false,
  leaderboardRevealStep: -1,
  settings: {
    answerSeconds: QUESTION_ANSWER_SECONDS,
    pointsCorrect: 1000,
    speedBonus: true,
  },
  publicCurrentQuestion: null,
  publicCurrentResult: null,
  publicAnswerStats: null,
  publicQuestionLeaderboard: null,
} as const;
