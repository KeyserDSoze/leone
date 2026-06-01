import type { Question } from "./types";

/**
 * 9 domande su Leone — distribuite in posizioni fisse nel set da 20
 * (posizioni: 1, 4, 6, 9, 12, 14, 17, 19, 20).
 * Q1 è sempre la PRIMA (opener facile/divertente),
 * Q9 è sempre l'ULTIMA (grande finale).
 */
export const leoneQuestions: Question[] = [
  // ── Q1 — posizione 1 (opener) ────────────────────────────────────────────
  {
    id: "leone_001",
    category: "leone",
    subcategory: "leone",
    text: "Perché il piccolo Leone si chiama Leone?",
    answers: [
      { id: "A", text: "Perché è forte e coraggioso come un leone 🦁" },
      { id: "B", text: "Perché è il re della famiglia" },
      { id: "C", text: "Perché è nato con i capelli già da leonessa" },
      { id: "D", text: "Perché papà e mamma lo hanno deciso così" },
    ],
    // Tutte le risposte sono corrette: domanda aperta e divertente!
    correctAnswerIds: ["A", "B", "C", "D"],
    explanation:
      "Tutte le risposte sono corrette! Non esiste una risposta sbagliata per questa domanda. Leone si chiama Leone perché… è Leone! 🦁",
  },

  // ── Q2 — posizione 4 ─────────────────────────────────────────────────────
  {
    id: "leone_002",
    category: "leone",
    subcategory: "leone",
    text: "Quando viene battezzato Leone?",
    answers: [
      { id: "A", text: "7 giugno 2026" },
      { id: "B", text: "14 giugno 2026" },
      { id: "C", text: "1 giugno 2026" },
      { id: "D", text: "21 giugno 2026" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "Il battesimo di Leone è il 7 giugno 2026 — esattamente oggi! Siete tutti qui a festeggiarlo.",
  },

  // ── Q3 — posizione 6 ─────────────────────────────────────────────────────
  {
    id: "leone_003",
    category: "leone",
    subcategory: "leone",
    text: "In quale quartiere di Roma cresce Leone?",
    answers: [
      { id: "A", text: "Pineta Sacchetti" },
      { id: "B", text: "Aurelio" },
      { id: "C", text: "Prati" },
      { id: "D", text: "Parioli" },
    ],
    // A e B entrambe accettabili: Pineta Sacchetti è nel Municipio XIV (Aurelio)
    correctAnswerIds: ["A", "B"],
    explanation:
      "Leone cresce a Pineta Sacchetti, un quartiere nel Municipio XIV di Roma, spesso chiamato anche Aurelio. Entrambe le risposte erano corrette!",
  },

  // ── Q4 — posizione 9 ─────────────────────────────────────────────────────
  {
    id: "leone_004",
    category: "leone",
    subcategory: "leone",
    text: "Qual è il sito web dedicato a Leone?",
    answers: [
      { id: "A", text: "leone2026.it" },
      { id: "B", text: "leonerapiti.com" },
      { id: "C", text: "ilbattesimodileone.it" },
      { id: "D", text: "babyleone.org" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Il sito ufficiale di Leone è leonerapiti.com — potete visitarlo per scoprire la sua storia e lasciare un messaggio nella Scatola del Tempo!",
  },

  // ── Q5 — posizione 12 ────────────────────────────────────────────────────
  {
    id: "leone_005",
    category: "leone",
    subcategory: "leone",
    text: "In quale città viene battezzato Leone?",
    answers: [
      { id: "A", text: "Roma" },
      { id: "B", text: "Orvieto" },
      { id: "C", text: "Viterbo" },
      { id: "D", text: "Rieti" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Il battesimo di Leone si celebra a Viterbo, nella splendida chiesa di San Silvestro Papa.",
  },

  // ── Q6 — posizione 14 ────────────────────────────────────────────────────
  {
    id: "leone_006",
    category: "leone",
    subcategory: "leone",
    text: "Come si chiama il casale dove si festeggia oggi dopo il battesimo?",
    answers: [
      { id: "A", text: "Villa Rapiti" },
      { id: "B", text: "Casale dei Leoni" },
      { id: "C", text: "Agriturismo Leone" },
      { id: "D", text: "Casale Aderio" },
    ],
    correctAnswerIds: ["D"],
    explanation:
      "Il ricevimento si svolge al Casale Aderio, lungo la Strada Teverina — un posto meraviglioso per festeggiare Leone!",
  },

  // ── Q7 — posizione 17 ────────────────────────────────────────────────────
  {
    id: "leone_007",
    category: "leone",
    subcategory: "leone",
    text: "Cosa hai potuto lasciare a Leone nella Scatola del Tempo sul suo sito?",
    answers: [
      { id: "A", text: "Un messaggio per il futuro" },
      { id: "B", text: "Una chiave di casa" },
      { id: "C", text: "Una schedina del Superenalotto" },
      { id: "D", text: "Un buono benzina" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "La Scatola del Tempo raccoglie messaggi e auguri che Leone leggerà quando sarà grande. Hai lasciato il tuo?",
  },

  // ── Q8 — posizione 19 ────────────────────────────────────────────────────
  {
    id: "leone_008",
    category: "leone",
    subcategory: "leone",
    text: "Qual è il gioco interattivo presente sul sito di Leone?",
    answers: [
      { id: "A", text: "Tetris" },
      { id: "B", text: "Forza 4" },
      { id: "C", text: "Scacchi" },
      { id: "D", text: "Pacman" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Sul sito di Leone c'è una versione di Forza 4 dove puoi sfidare Leone stesso — anche se ora è ancora piccolo!",
  },

  // ── Q9 — posizione 20 (grande finale) ────────────────────────────────────
  {
    id: "leone_009",
    category: "leone",
    subcategory: "leone",
    text: "Quale animale simboleggia Leone nel suo sito e nella sua storia?",
    answers: [
      { id: "A", text: "Tigre 🐯" },
      { id: "B", text: "Orso 🐻" },
      { id: "C", text: "Leone 🦁" },
      { id: "D", text: "Elefante 🐘" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Ovviamente il leone! Come potrebbe essere altrimenti? Benvenuto nel mondo, Leone! 🦁👑",
  },
];
