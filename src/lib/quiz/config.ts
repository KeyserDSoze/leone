export const GAME_ID = "battesimo-leone-2026";

export const DEMO_ANSWER_SECONDS = 20;
export const QUESTION_ANSWER_SECONDS = 20;
export const START_JINGLE_DURATION_MS = 20_000;

export const TOTAL_QUESTIONS = 26;
export const MIN_TOTAL_QUESTIONS = 10;
export const MAX_TOTAL_QUESTIONS = 26;
export const LEONE_QUESTION_COUNT = 9;

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
  projectorCue: null,
  kickedUids: null,
  kickedUsernames: null,
  questionIds: null,
  questionCount: TOTAL_QUESTIONS,
  questionSeed: null,
} as const;
