/**
 * Calcola i punti per una risposta con decadimento esponenziale.
 *
 * - Nessuna risposta / demo: 0 punti
 * - Corretto veloce:  fino a +1000; corretto lento: ~+80 all'ultimo secondo
 * - Sbagliato veloce: fino a  -600; sbagliato lento: ~-50 all'ultimo secondo
 *
 * Formula: decay = e^(-2.5 × t/T)
 *   dove t = tempo impiegato, T = durata totale della domanda
 *   → decay = 1 al volo, ~0.47 a 6s su 20s, ~0.08 all'ultimo secondo
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
  if (totalTime <= 0) return isCorrect ? 1000 : -600;

  const usedTime = Math.min(Math.max(0, answeredAt - questionStartedAt), totalTime);
  const ratio = usedTime / totalTime; // 0 = risposta immediata, 1 = risposta all'ultimo secondo

  // Decadimento esponenziale: rispondere prima vale molto di più
  const decay = Math.exp(-2.5 * ratio);

  if (isCorrect) {
    return Math.round(1000 * decay); // ~+1000 … ~+82
  } else {
    return Math.round(-600 * decay); // ~-600 … ~-49
  }
}
