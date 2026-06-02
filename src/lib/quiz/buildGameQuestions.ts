import type { Question } from "./types";
import { demoQuestion } from "./questions.demo";
import { generalQuestions } from "./questions.general";
import { leoneQuestions } from "./questions.leone";
import { LEONE_QUESTION_COUNT, TOTAL_QUESTIONS } from "./config";

export const SUBCATEGORY_ORDER = [
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
  "religione",
] as const;

export type BuildGameQuestionsOptions = {
  totalQuestions?: number;
  seed?: number;
};

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildLeoneSlots(totalQuestions: number): Set<number> {
  const slots = new Set<number>([1, totalQuestions]);
  const middleCount = Math.max(0, LEONE_QUESTION_COUNT - 2);

  for (let i = 1; i <= middleCount; i++) {
    const pos = Math.round(1 + (i * (totalQuestions - 1)) / (middleCount + 1));
    slots.add(Math.min(totalQuestions - 1, Math.max(2, pos)));
  }

  let candidate = 2;
  while (slots.size < LEONE_QUESTION_COUNT && candidate < totalQuestions) {
    slots.add(candidate++);
  }

  return slots;
}

function buildGeneralSelection(count: number, seed: number): Question[] {
  const random = seededRandom(seed);
  const groups = new Map<string, Question[]>();
  for (const sub of SUBCATEGORY_ORDER) groups.set(sub, []);

  for (const q of generalQuestions) {
    const sub = q.subcategory ?? "";
    if (groups.has(sub)) groups.get(sub)!.push(q);
  }

  const shuffledGroups = new Map<string, Question[]>();
  for (const sub of SUBCATEGORY_ORDER) {
    shuffledGroups.set(sub, shuffle(groups.get(sub) ?? [], random));
  }

  const result: Question[] = [];

  // Prima passa: almeno una domanda per materia, se c'è spazio.
  for (const sub of shuffle([...SUBCATEGORY_ORDER], random)) {
    const pool = shuffledGroups.get(sub) ?? [];
    if (pool.length > 0 && result.length < count) result.push(pool.shift()!);
  }

  // Seconda passa: riempi il basket in round-robin casuale tra le materie.
  while (result.length < count) {
    let added = false;
    for (const sub of shuffle([...SUBCATEGORY_ORDER], random)) {
      const pool = shuffledGroups.get(sub) ?? [];
      if (pool.length > 0 && result.length < count) {
        result.push(pool.shift()!);
        added = true;
      }
    }
    if (!added) break;
  }

  return result;
}

export function buildQuestionIndex(): Map<string, Question> {
  return new Map(
    [demoQuestion, ...leoneQuestions, ...generalQuestions].map((question) => [question.id, question])
  );
}

export function questionIdsFromQuestions(questions: Question[]): string[] {
  return questions.map((question) => question.id);
}

export function questionsFromIds(ids: string[]): Question[] {
  const index = buildQuestionIndex();
  return ids.map((id) => index.get(id)).filter(Boolean) as Question[];
}

/**
 * Costruisce la scaletta completa: [demo, q1, q2, ...]
 * Q1 e ultima domanda sono sempre le stesse domande su Leone.
 */
export function buildGameQuestions(options: BuildGameQuestionsOptions = {}): Question[] {
  const totalQuestions = Math.max(LEONE_QUESTION_COUNT, options.totalQuestions ?? TOTAL_QUESTIONS);
  const seed = options.seed ?? 1;
  const leoneSlots = buildLeoneSlots(totalQuestions);
  const selectedGeneral = buildGeneralSelection(totalQuestions - LEONE_QUESTION_COUNT, seed);

  const result: Question[] = [];
  let generalIndex = 0;
  let leoneIndex = 0;

  for (let round = 1; round <= totalQuestions; round++) {
    if (leoneSlots.has(round)) {
      result.push(leoneQuestions[leoneIndex++]);
    } else {
      result.push(selectedGeneral[generalIndex++]);
    }
  }

  return [demoQuestion, ...result.filter(Boolean)];
}
