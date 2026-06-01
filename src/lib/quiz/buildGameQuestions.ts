import type { Question } from "./types";
import { demoQuestion } from "./questions.demo";
import { generalQuestions } from "./questions.general";
import { leoneQuestions } from "./questions.leone";
import { LEONE_SLOTS, GENERAL_QUESTION_COUNT, GENERAL_POOL_OFFSET } from "./config";

/**
 * Ordine delle sottocategorie generali per il round-robin.
 * 10 sottocategorie × 1 domanda ciascuna = 10 domande.
 * 11ª domanda: una seconda da "geografia".
 */
const SUBCATEGORY_ORDER = [
  "geografia",
  "storia-moderna",
  "arte",
  "musica",
  "fisica-chimica",
  "matematica",
  "tecnologia",
  "politica-italia",
  "storia-antica",
  "grammatica-italiana",
] as const;

/**
 * Seleziona le domande generali con round-robin per sottocategoria.
 * Usa GENERAL_POOL_OFFSET per variare le domande tra manche successive.
 * Garantisce max 2 per sottocategoria (1 × 10 subcategorie + 1 extra geografia).
 */
function buildGeneralSelection(): Question[] {
  // Raggruppa per sottocategoria
  const groups = new Map<string, Question[]>();
  for (const sub of SUBCATEGORY_ORDER) groups.set(sub, []);

  for (const q of generalQuestions) {
    const sub = q.subcategory ?? "";
    if (groups.has(sub)) groups.get(sub)!.push(q);
  }

  const result: Question[] = [];

  // 1 domanda da ognuna delle 10 sottocategorie
  for (const sub of SUBCATEGORY_ORDER) {
    const pool = groups.get(sub)!;
    if (pool.length > 0) {
      result.push(pool[GENERAL_POOL_OFFSET % pool.length]);
    }
  }

  // 11ª domanda: seconda da "geografia" (offset +1)
  const geoPool = groups.get("geografia")!;
  if (geoPool.length > 1) {
    result.push(geoPool[(GENERAL_POOL_OFFSET + 1) % geoPool.length]);
  } else if (geoPool.length === 1) {
    result.push(geoPool[0]);
  }

  return result.slice(0, GENERAL_QUESTION_COUNT);
}

/**
 * Costruisce la scaletta completa del gioco:
 * [demo, q1, q2, ..., q20]
 *
 * Distribuzione:
 *  - indice 0:  domanda demo (non vale punti)
 *  - indici 1-20: domande vere
 *    - posizioni LEONE_SLOTS {1,4,6,9,12,14,17,19,20}: domande su Leone
 *      (Q1 = opener, Q9 = grande finale)
 *    - posizioni rimanenti {2,3,5,7,8,10,11,13,15,16,18}: cultura generale
 *      con round-robin per sottocategoria
 */
export function buildGameQuestions(): Question[] {
  const selectedGeneral = buildGeneralSelection();

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
