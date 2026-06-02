import { ref, set, get } from "firebase/database";
import { db } from "../firebase";
import { GAME_ID } from "./config";
import { buildAnswerKey } from "./answerKey";
import type { AnswerId } from "./types";

/** Registra il giocatore nella lobby */
export async function joinGame(uid: string, username: string): Promise<void> {
  await set(ref(db, `players/${GAME_ID}/${uid}`), {
    username,
    score: 0,
    joinedAt: Date.now(),
    lastSeen: Date.now(),
    connected: true,
  });
}

/** Controlla se uno username è già preso */
export async function checkUsernameTaken(username: string): Promise<boolean> {
  const snap = await get(ref(db, `players/${GAME_ID}`));
  if (!snap.exists()) return false;
  const players = snap.val() as Record<string, { username: string }>;
  return Object.values(players).some(
    (p) => p?.username?.toLowerCase() === username.toLowerCase()
  );
}

/** Invia la risposta del giocatore (una sola per domanda/sessione, garantita dalle Firebase Rules) */
export async function submitAnswer(
  uid: string,
  gameSession: string,
  questionId: string,
  answerId: AnswerId
): Promise<void> {
  await set(ref(db, `answers/${GAME_ID}/${buildAnswerKey(gameSession, questionId)}/${uid}`), {
    answerId,
    answeredAt: Date.now(),
  });
}
