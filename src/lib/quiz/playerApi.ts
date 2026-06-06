import { ref, set, get, update, serverTimestamp } from "firebase/database";
import { db } from "../firebase";
import { GAME_ID } from "./config";
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

/**
 * Invia la risposta del giocatore salvandola sul suo record player.
 * Evitiamo answers/... perché le rules permettono write ma non read lato host.
 */
export async function submitAnswer(
  uid: string,
  gameSession: string,
  questionId: string,
  answerId: AnswerId
): Promise<void> {
  await update(ref(db, `players/${GAME_ID}/${uid}`), {
    currentAnswerGameSession: gameSession,
    currentAnswerQuestionId: questionId,
    currentAnswerAnswerId: answerId,
    currentAnswerAnsweredAt: serverTimestamp(),
  });
}
