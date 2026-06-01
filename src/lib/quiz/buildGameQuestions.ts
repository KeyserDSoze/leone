import type { Question } from "./types";
import { demoQuestion } from "./questions.demo";
import { generalQuestions } from "./questions.general";
import { leoneQuestions } from "./questions.leone";
import {
  LEONE_SLOTS,
  GENERAL_QUESTION_COUNT,
  GENERAL_POOL_OFFSET,
} from "./config";

function takeRoundRobin<T>(items: T[], count: number, offset: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(items[(offset + i) % items.length]);
  }
  return result;
}

/**
 * Costruisce la scaletta completa del gioco:
 * [demo, q1, q2, ..., q20]
 *
 * Distribuzione:
 *  - indice 0: domanda demo (non vale punti)
 *  - indici 1-20: domande vere
 *    - posizioni LEONE_SLOTS (3,7,11,15,19): domande su Leone
 *    - posizioni restanti: cultura generale (round-robin dal pool)
 */
export function buildGameQuestions(): Question[] {
  const selectedGeneral = takeRoundRobin(
    generalQuestions,
    GENERAL_QUESTION_COUNT,
    GENERAL_POOL_OFFSET
  );

  const result: Question[] = [];
  let generalIndex = 0;
  let leoneIndex = 0;

  for (let round = 1; round <= 20; round++) {
    if (LEONE_SLOTS.has(round)) {
      result.push(leoneQuestions[leoneIndex++]);
    } else {
      result.push(selectedGeneral[generalIndex++]);
    }
  }

  return [demoQuestion, ...result];
}
