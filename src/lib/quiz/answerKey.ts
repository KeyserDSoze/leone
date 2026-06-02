export function buildAnswerKey(gameSession: string | null | undefined, questionId: string): string {
  return gameSession ? `${gameSession}__${questionId}` : questionId;
}
