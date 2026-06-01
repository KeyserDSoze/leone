import type { Question } from "./types";

export const demoQuestion: Question = {
  id: "demo_battesimo_leone",
  category: "demo",
  text: "Quando è stato battezzato Leone?",
  answers: [
    { id: "A", text: "5 giugno" },
    { id: "B", text: "6 giugno" },
    { id: "C", text: "7 giugno" },
    { id: "D", text: "8 giugno" },
  ],
  correctAnswerId: "C",
  explanation: "Era facile: siete tutti qui per il 7 giugno! 🦁",
};
