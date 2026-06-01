/**
 * Calcola i punti per una risposta.
 *
 * - Demo: chiamare con isDemo=true → 0 punti
 * - Nessuna risposta: 0 punti
 * - Risposta corretta veloce: fino a +1000, corretta lenta: min +500
 * - Risposta sbagliata veloce: fino a -500, sbagliata lenta: 0
 *
 * Il totale del punteggio non scende mai sotto 0 (Math.max gestito dall'host).
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
  if (!answeredAt) return 0;

  const totalTime = questionEndsAt - questionStartedAt;
  const usedTime = Math.min(Math.max(0, answeredAt - questionStartedAt), totalTime);
  const speedRatio = Math.max(0, 1 - usedTime / totalTime); // 1 = più veloce, 0 = più lento

  if (isCorrect) {
    return Math.round(500 + speedRatio * 500); // +500 … +1000
  } else {
    return Math.round(-speedRatio * 500); // -500 … 0
  }
}
