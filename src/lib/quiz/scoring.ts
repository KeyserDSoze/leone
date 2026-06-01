/**
 * Calcola i punti per una risposta.
 * - Demo: sempre 0
 * - Risposta sbagliata / non data: 0
 * - Risposta corretta: da 500 (lenta) a 1000 (velocissima)
 */
export function calculatePoints({
  isCorrect,
  answeredAt,
  questionStartedAt,
  questionEndsAt,
}: {
  isCorrect: boolean;
  answeredAt?: number;
  questionStartedAt: number;
  questionEndsAt: number;
}): number {
  if (!isCorrect || !answeredAt) return 0;

  const totalTime = questionEndsAt - questionStartedAt;
  const usedTime = Math.min(answeredAt - questionStartedAt, totalTime);
  const speedRatio = Math.max(0, 1 - usedTime / totalTime);

  return Math.round(500 + speedRatio * 500);
}
