import type { AnswerId, PublicResult } from "./types";

const ANSWER_IDS = new Set<AnswerId>(["A", "B", "C", "D"]);

export function encodeCorrectAnswerIds(correctAnswerIds: AnswerId[]): string | null {
  return correctAnswerIds.length > 0 ? correctAnswerIds.join("") : null;
}

export function getCorrectAnswerIds(
  result: Pick<PublicResult, "correctAnswerIds" | "correctAnswerId"> | null | undefined
): AnswerId[] {
  if (!result) return [];

  if (Array.isArray(result.correctAnswerIds) && result.correctAnswerIds.length > 0) {
    return result.correctAnswerIds.filter((id): id is AnswerId => ANSWER_IDS.has(id));
  }

  if (typeof result.correctAnswerId !== "string") return [];

  return result.correctAnswerId
    .split("")
    .filter((id): id is AnswerId => ANSWER_IDS.has(id as AnswerId));
}
