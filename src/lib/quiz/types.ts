export type QuestionCategory = "demo" | "general" | "leone";

export type AnswerId = "A" | "B" | "C" | "D";

export type Question = {
  id: string;
  category: QuestionCategory;
  text: string;
  answers: { id: AnswerId; text: string }[];
  correctAnswerId: AnswerId;
  explanation?: string;
};

export type GameStatus =
  | "lobby"
  | "demo"
  | "question"
  | "locked"
  | "answer"
  | "leaderboard"
  | "finished";

export type GameSettings = {
  answerSeconds: number;
  pointsCorrect: number;
  speedBonus: boolean;
};

export type PublicQuestion = {
  id: string;
  index: number;
  total: number;
  category: QuestionCategory;
  text: string;
  answers: { id: AnswerId; text: string }[];
};

export type PublicResult = {
  questionId: string;
  correctAnswerId: AnswerId;
  explanation: string | null;
};

export type GameState = {
  status: GameStatus;
  currentQuestionIndex: number;
  currentQuestionId: string | null;
  questionStartedAt: number | null;
  questionEndsAt: number | null;
  showResults: boolean;
  showLeaderboard: boolean;
  settings: GameSettings;
  publicCurrentQuestion: PublicQuestion | null;
  publicCurrentResult: PublicResult | null;
};

export type Player = {
  username: string;
  score: number;
  joinedAt: number;
  lastSeen: number;
  connected: boolean;
};

export type Answer = {
  answerId: AnswerId;
  answeredAt: number;
  isCorrect?: boolean;
  points?: number;
};

export type LeaderboardEntry = {
  username: string;
  score: number;
};
