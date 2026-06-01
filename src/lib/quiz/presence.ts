import { ref, onValue, onDisconnect, set } from "firebase/database";
import { db } from "../firebase";
import { GAME_ID } from "./config";

/** Imposta la presenza del giocatore. Quando il browser si disconnette,
 *  Firebase setta automaticamente connected=false. */
export function setupPresence(uid: string): void {
  const connectedRef = ref(db, ".info/connected");
  const playerConnectedRef = ref(
    db,
    `players/${GAME_ID}/${uid}/connected`
  );
  const playerLastSeenRef = ref(
    db,
    `players/${GAME_ID}/${uid}/lastSeen`
  );

  onValue(connectedRef, (snap) => {
    if (snap.val() === true) {
      set(playerConnectedRef, true);
      set(playerLastSeenRef, Date.now());
      onDisconnect(playerConnectedRef).set(false);
      onDisconnect(playerLastSeenRef).set(Date.now());
    }
  });
}
