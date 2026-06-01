import type { Question } from "./types";

export const leoneQuestions: Question[] = [
  {
    id: "leone_001",
    category: "leone",
    text: "Cosa hai potuto lasciare a Leone nella Scatola del Tempo sul suo sito?",
    answers: [
      { id: "A", text: "Un messaggio per il futuro" },
      { id: "B", text: "Una chiave di casa" },
      { id: "C", text: "Una schedina del Superenalotto" },
      { id: "D", text: "Un buono benzina" },
    ],
    correctAnswerId: "A",
    explanation:
      "La Scatola del Tempo raccoglie messaggi e auguri che Leone leggerà quando sarà grande.",
  },
  {
    id: "leone_002",
    category: "leone",
    text: "In quale città si trova la chiesa dove è stato battezzato Leone?",
    answers: [
      { id: "A", text: "Roma" },
      { id: "B", text: "Viterbo" },
      { id: "C", text: "Orvieto" },
      { id: "D", text: "Terni" },
    ],
    correctAnswerId: "B",
    explanation:
      "Il battesimo si celebra nel Duomo di San Lorenzo a Viterbo.",
  },
  {
    id: "leone_003",
    category: "leone",
    text: "Come si chiama il casale dove si festeggia dopo il battesimo?",
    answers: [
      { id: "A", text: "Casale dei Leoni" },
      { id: "B", text: "Villa Rapiti" },
      { id: "C", text: "Casale Aderio" },
      { id: "D", text: "Agriturismo Leone" },
    ],
    correctAnswerId: "C",
    explanation:
      "Il ricevimento si svolge al Casale Aderio, lungo la Strada Teverina.",
  },
  {
    id: "leone_004",
    category: "leone",
    text: "Quale animale simboleggia Leone nel suo sito e nella sua storia?",
    answers: [
      { id: "A", text: "Tigre" },
      { id: "B", text: "Orso" },
      { id: "C", text: "Leone 🦁" },
      { id: "D", text: "Elefante" },
    ],
    correctAnswerId: "C",
    explanation:
      "Leone ha il leone come simbolo. Come potrebbe essere altrimenti? 🦁",
  },
  {
    id: "leone_005",
    category: "leone",
    text: "Qual è il gioco interattivo presente sul sito di Leone?",
    answers: [
      { id: "A", text: "Tetris" },
      { id: "B", text: "Forza 4" },
      { id: "C", text: "Scacchi" },
      { id: "D", text: "Pacman" },
    ],
    correctAnswerId: "B",
    explanation:
      "Sul sito di Leone c'è una versione di Forza 4 dove puoi sfidare Leone stesso!",
  },
];
