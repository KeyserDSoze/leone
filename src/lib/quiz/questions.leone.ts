import type { Question } from "./types";

/**
 * 9 domande su Leone — distribuite in posizioni fisse/equilibrate.
 * Q1 è sempre la PRIMA (opener facile/divertente),
 * Q9 è sempre l'ULTIMA (grande finale).
 */
export const leoneQuestions: Question[] = [
  {
    id: "leone_001",
    category: "leone",
    subcategory: "leone",
    text: "Perché abbiamo scelto il nome Leone?",
    answers: [
      { id: "A", text: "colpa della Ferragni" },
      { id: "B", text: "il Papa" },
      { id: "C", text: "il nome del bisnonno" },
      { id: "D", text: "segno zodiacale di entrambe le nonne" },
    ],
    correctAnswerIds: ["A", "B", "C", "D"],
    explanation:
      "Tutte e quattro vanno bene: era la domanda jolly per far divertire tutti fin dall'inizio.",
  },
  {
    id: "leone_002",
    category: "leone",
    subcategory: "leone",
    text: "A che mese Leone ha preso il suo primo attestato di nuoto?",
    answers: [
      { id: "A", text: "6 mesi" },
      { id: "B", text: "7 mesi" },
      { id: "C", text: "8 mesi" },
      { id: "D", text: "5 mesi" },
    ],
    correctAnswerIds: ["B"],
    explanation: "La risposta corretta era 7 mesi.",
    proof: {
      type: "video",
      src: "/media/leone-nuoto.mp4",
      caption: "Leone con il suo diploma di nuoto.",
    },
  },
  {
    id: "leone_003",
    category: "leone",
    subcategory: "leone",
    text: "Cos'è Pineta Sacchetti?",
    answers: [
      { id: "A", text: "luogo di nascita di Leone" },
      { id: "B", text: "miglior posizione per digerire fino ai primi due mesi" },
      { id: "C", text: "un parco di Milano" },
      { id: "D", text: "un parco a tema ispirato alle gesta di Riccardo cuor di Leone" },
    ],
    correctAnswerIds: ["A", "B"],
    explanation: "Andavano bene sia A che B.",
  },
  {
    id: "leone_004",
    category: "leone",
    subcategory: "leone",
    text: "Per Leone, qual è la cosa più divertente del mondo?",
    answers: [
      { id: "A", text: "il babbo che fa il pollo" },
      { id: "B", text: "i baci sul pancino" },
      { id: "C", text: "colpire delle foglie" },
      { id: "D", text: "bubù-settete" },
    ],
    correctAnswerIds: ["C"],
    explanation: "La risposta corretta era colpire delle foglie.",
  },
  {
    id: "leone_005",
    category: "leone",
    subcategory: "leone",
    text: "Qual è il nome storico dei piedi di Leone?",
    answers: [
      { id: "A", text: "piedozzo e piedazzo" },
      { id: "B", text: "piedino e piedone" },
      { id: "C", text: "left caciotta e right caciotta" },
      { id: "D", text: "mignolo e prof" },
    ],
    correctAnswerIds: ["A"],
    explanation: "La coppia storica era piedozzo e piedazzo.",
  },
  {
    id: "leone_006",
    category: "leone",
    subcategory: "leone",
    text: "Secondo i neonatologi del Gemelli, quanto era cresciuto Leone dopo un'ora dal parto?",
    answers: [
      { id: "A", text: "1cm" },
      { id: "B", text: "0cm" },
      { id: "C", text: "3cm" },
      { id: "D", text: "5cm" },
    ],
    correctAnswerIds: ["D"],
    explanation: "Secondo i neonatologi del Gemelli: 5 cm.",
  },
  {
    id: "leone_007",
    category: "leone",
    subcategory: "leone",
    text: "Al test d'ingresso nel mondo, che valore di APGAR aveva Leone dopo 5 minuti?",
    answers: [
      { id: "A", text: "8/10" },
      { id: "B", text: "9/10" },
      { id: "C", text: "10/10" },
      { id: "D", text: "11/10" },
    ],
    correctAnswerIds: ["C"],
    explanation: "Il valore corretto era 10/10.",
  },
  {
    id: "leone_008",
    category: "leone",
    subcategory: "leone",
    text: "A che mese Leone è andato al lago per la prima volta?",
    answers: [
      { id: "A", text: "1 mese" },
      { id: "B", text: "2 mesi" },
      { id: "C", text: "3 mesi" },
      { id: "D", text: "4 mesi" },
    ],
    correctAnswerIds: ["A"],
    explanation: "La risposta corretta era 1 mese.",
  },
  {
    id: "leone_009",
    category: "leone",
    subcategory: "leone",
    text: "Qual è la canzone preferita di Leone?",
    answers: [
      { id: "A", text: "Osanna" },
      { id: "B", text: "Nella vecchia fattoria" },
      { id: "C", text: "Alla fiera dell'est" },
      { id: "D", text: "44 gatti" },
    ],
    correctAnswerIds: ["C"],
    explanation: "La sua preferita è Alla fiera dell'est.",
  },
];
