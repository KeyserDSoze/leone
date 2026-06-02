export type QuestionCategory = "demo" | "general" | "leone";

export type AnswerId = "A" | "B" | "C" | "D";

export type Question = {
  id: string;
  category: QuestionCategory;
  /** Sottocategoria per il round-robin generali (es. "geografia", "arte", …) */
  subcategory?: string;
  text: string;
  answers: { id: AnswerId; text: string }[];
  /** Uno o più ID corretti (risposta multipla supportata) */
  correctAnswerIds: AnswerId[];
  explanation?: string;
};

export type GameStatus =
  | "lobby"
  | "demo"
  | "question"
  | "locked"
  | "answer"
  | "question-leaderboard"
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
  subcategory?: string;
  text: string;
  answers: { id: AnswerId; text: string }[];
};

export type PublicResult = {
  questionId: string;
  /** Legacy-compatible string encoding: "A", "AB", "ABCD", ... */
  correctAnswerId?: string | null;
  /** Uno o più ID corretti */
  correctAnswerIds?: AnswerId[];
  explanation: string | null;
};

/** Distribuzione delle risposte di tutti i giocatori (pubblicata dall'host dopo chiusura) */
export type PublicAnswerStats = {
  A: number;
  B: number;
  C: number;
  D: number;
  total: number;
};

export type PublicQuestionLeaderboardEntry = {
  username: string;
  answerId: AnswerId | null;
  isCorrect: boolean;
  points: number;
  answeredAt: number | null;
  responseMs: number | null;
};

export type GameState = {
  /** Identificatore univoco della sessione di gioco; rigenerato ad ogni reset */
  gameSession: string;
  status: GameStatus;
  currentQuestionIndex: number;
  currentQuestionId: string | null;
  questionStartedAt: number | null;
  questionEndsAt: number | null;
  /** false = solo anteprima categoria (host non ha ancora avviato il timer) */
  questionVisible: boolean;
  showResults: boolean;
  /** true = mostra barre distribuzione risposte ai player */
  showStats: boolean;
  showLeaderboard: boolean;
  /** -1 = classifica non mostrata, 0 = mostrata senza top5, 1-5 = rivelazione progressiva */
  leaderboardRevealStep: number;
  settings: GameSettings;
  publicCurrentQuestion: PublicQuestion | null;
  publicCurrentResult: PublicResult | null;
  publicAnswerStats: PublicAnswerStats | null;
  publicQuestionLeaderboard: PublicQuestionLeaderboardEntry[] | null;
};

export type Player = {
  username: string;
  score: number;
  joinedAt: number;
  lastSeen: number;
  connected: boolean;
  currentAnswerGameSession?: string;
  currentAnswerQuestionId?: string;
  currentAnswerAnswerId?: AnswerId;
  currentAnswerAnsweredAt?: number;
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
