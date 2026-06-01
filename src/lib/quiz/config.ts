export const GAME_ID = "battesimo-leone-2026";

export const DEMO_ANSWER_SECONDS = 30;
export const QUESTION_ANSWER_SECONDS = 20;

export const TOTAL_QUESTIONS = 20;
export const GENERAL_QUESTION_COUNT = 15;
export const LEONE_QUESTION_COUNT = 5;

/** Posizioni 1-indexed delle domande su Leone nel set da 20 */
export const LEONE_SLOTS = new Set([3, 7, 11, 15, 19]);

/** Offset round-robin per le domande generali (cambia tra manche) */
export const GENERAL_POOL_OFFSET = 0;

export const INITIAL_GAME_STATE = {
  status: "lobby",
  currentQuestionIndex: -1,
  currentQuestionId: null,
  questionStartedAt: null,
  questionEndsAt: null,
  showResults: false,
  showLeaderboard: false,
  settings: {
    answerSeconds: QUESTION_ANSWER_SECONDS,
    pointsCorrect: 1000,
    speedBonus: true,
  },
  publicCurrentQuestion: null,
  publicCurrentResult: null,
} as const;
