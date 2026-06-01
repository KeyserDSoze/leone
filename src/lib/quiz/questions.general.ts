import type { Question } from "./types";

/**
 * Pool di domande di cultura generale — 51 domande su 10 sottocategorie.
 * Sottocategorie: geografia, storia-antica, storia-moderna, tecnologia,
 *                 politica-italia, grammatica-italiana, matematica,
 *                 fisica-chimica, arte, musica
 */
export const generalQuestions: Question[] = [

  // ════════════════════════════════════════════════════════════════════════
  // GEOGRAFIA (12)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_004",
    category: "general",
    subcategory: "geografia",
    text: "Qual è la capitale dell'Australia?",
    answers: [
      { id: "A", text: "Sydney" },
      { id: "B", text: "Canberra" },
      { id: "C", text: "Melbourne" },
      { id: "D", text: "Brisbane" },
    ],
    correctAnswerIds: ["B"],
    explanation: "Canberra è la capitale dell'Australia, non Sydney come molti credono!",
  },
  {
    id: "gen_007",
    category: "general",
    subcategory: "geografia",
    text: "Qual è il fiume più lungo del mondo?",
    answers: [
      { id: "A", text: "Amazzonia" },
      { id: "B", text: "Mississippi" },
      { id: "C", text: "Congo" },
      { id: "D", text: "Nilo" },
    ],
    correctAnswerIds: ["D"],
    explanation:
      "Il Nilo, con circa 6.650 km, è tradizionalmente considerato il fiume più lungo del mondo.",
  },
  {
    id: "gen_009",
    category: "general",
    subcategory: "geografia",
    text: "In quale paese si trova Machu Picchu?",
    answers: [
      { id: "A", text: "Colombia" },
      { id: "B", text: "Ecuador" },
      { id: "C", text: "Perù" },
      { id: "D", text: "Bolivia" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Machu Picchu è un'antica città inca situata sulle Ande in Perù, a circa 2.430 m di altitudine.",
  },
  {
    id: "gen_014",
    category: "general",
    subcategory: "geografia",
    text: "Qual è l'oceano più grande del mondo?",
    answers: [
      { id: "A", text: "Pacifico" },
      { id: "B", text: "Atlantico" },
      { id: "C", text: "Indiano" },
      { id: "D", text: "Artico" },
    ],
    correctAnswerIds: ["A"],
    explanation: "L'Oceano Pacifico copre circa il 46% della superficie acquatica della Terra.",
  },
  {
    id: "gen_017",
    category: "general",
    subcategory: "geografia",
    text: "Quanti continenti ci sono sulla Terra?",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "I 7 continenti sono: Africa, Antartide, Asia, Australia/Oceania, Europa, America del Nord, America del Sud.",
  },
  {
    id: "gen_019",
    category: "general",
    subcategory: "geografia",
    text: "Qual è la moneta ufficiale del Giappone?",
    answers: [
      { id: "A", text: "Yuan" },
      { id: "B", text: "Won" },
      { id: "C", text: "Baht" },
      { id: "D", text: "Yen" },
    ],
    correctAnswerIds: ["D"],
    explanation: "Lo Yen giapponese (¥) è una delle valute più scambiate al mondo.",
  },
  {
    id: "gen_020",
    category: "general",
    subcategory: "geografia",
    text: "Qual è il paese più grande del mondo per superficie?",
    answers: [
      { id: "A", text: "Russia" },
      { id: "B", text: "Canada" },
      { id: "C", text: "Cina" },
      { id: "D", text: "USA" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "La Russia copre circa 17 milioni di km², oltre il doppio del Canada che è al secondo posto.",
  },
  {
    id: "gen_024",
    category: "general",
    subcategory: "geografia",
    text: "Qual è la montagna più alta del mondo?",
    answers: [
      { id: "A", text: "K2" },
      { id: "B", text: "Monte Bianco" },
      { id: "C", text: "Kilimanjaro" },
      { id: "D", text: "Everest" },
    ],
    correctAnswerIds: ["D"],
    explanation: "L'Everest, con i suoi 8.849 m, è la montagna più alta del mondo. Si trova sull'Himalaya.",
  },
  {
    id: "gen_025",
    category: "general",
    subcategory: "geografia",
    text: "Qual è la capitale del Brasile?",
    answers: [
      { id: "A", text: "Rio de Janeiro" },
      { id: "B", text: "San Paolo" },
      { id: "C", text: "Brasilia" },
      { id: "D", text: "Salvador" },
    ],
    correctAnswerIds: ["C"],
    explanation: "Brasilia è la capitale del Brasile dal 1960. Molti pensano sia Rio de Janeiro, ma si sbagliano!",
  },
  {
    id: "gen_032",
    category: "general",
    subcategory: "geografia",
    text: "Qual è la capitale della Germania?",
    answers: [
      { id: "A", text: "Berlino" },
      { id: "B", text: "Monaco" },
      { id: "C", text: "Amburgo" },
      { id: "D", text: "Francoforte" },
    ],
    correctAnswerIds: ["A"],
    explanation: "Berlino è la capitale e la città più grande della Germania con circa 3,7 milioni di abitanti.",
  },
  {
    id: "gen_037",
    category: "general",
    subcategory: "geografia",
    text: "Qual è il vulcano più alto d'Europa?",
    answers: [
      { id: "A", text: "Vesuvio" },
      { id: "B", text: "Stromboli" },
      { id: "C", text: "Etna" },
      { id: "D", text: "Vulcano" },
    ],
    correctAnswerIds: ["C"],
    explanation: "L'Etna, in Sicilia, con i suoi circa 3.340 m è il vulcano più alto d'Europa ed è ancora attivo.",
  },
  {
    id: "gen_038",
    category: "general",
    subcategory: "geografia",
    text: "In quale paese si trova il Canale di Panama?",
    answers: [
      { id: "A", text: "Colombia" },
      { id: "B", text: "Costa Rica" },
      { id: "C", text: "Nicaragua" },
      { id: "D", text: "Panama" },
    ],
    correctAnswerIds: ["D"],
    explanation:
      "Il Canale di Panama collega l'Oceano Pacifico all'Oceano Atlantico attraverso il paese di Panama.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // STORIA ANTICA (3)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_041",
    category: "general",
    subcategory: "storia-antica",
    text: "Chi fu il primo imperatore romano?",
    answers: [
      { id: "A", text: "Giulio Cesare" },
      { id: "B", text: "Augusto" },
      { id: "C", text: "Nerone" },
      { id: "D", text: "Traiano" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Augusto (Caio Ottavio Augusto) fu il primo imperatore di Roma dal 27 a.C. Giulio Cesare era un dittatore, non un imperatore.",
  },
  {
    id: "gen_042",
    category: "general",
    subcategory: "storia-antica",
    text: "In quale anno, secondo la tradizione, fu fondata Roma?",
    answers: [
      { id: "A", text: "510 a.C." },
      { id: "B", text: "753 a.C." },
      { id: "C", text: "264 a.C." },
      { id: "D", text: "146 a.C." },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Secondo la tradizione, Roma fu fondata da Romolo nel 753 a.C. il 21 aprile — il Natale di Roma.",
  },
  {
    id: "gen_043",
    category: "general",
    subcategory: "storia-antica",
    text: "Quale civiltà costruì le piramidi di Giza?",
    answers: [
      { id: "A", text: "Romani" },
      { id: "B", text: "Greci" },
      { id: "C", text: "Sumeri" },
      { id: "D", text: "Egizi" },
    ],
    correctAnswerIds: ["D"],
    explanation:
      "Le piramidi di Giza furono costruite dagli antichi Egizi circa 4.500 anni fa come tombe per i faraoni.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // STORIA MODERNA (7)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_003",
    category: "general",
    subcategory: "storia-moderna",
    text: "In quale anno l'uomo è arrivato sulla Luna per la prima volta?",
    answers: [
      { id: "A", text: "1969" },
      { id: "B", text: "1965" },
      { id: "C", text: "1972" },
      { id: "D", text: "1961" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "Il 20 luglio 1969, Neil Armstrong fu il primo uomo a camminare sulla Luna con la missione Apollo 11.",
  },
  {
    id: "gen_013",
    category: "general",
    subcategory: "storia-moderna",
    text: "Chi ha scoperto la penicillina?",
    answers: [
      { id: "A", text: "Louis Pasteur" },
      { id: "B", text: "Marie Curie" },
      { id: "C", text: "Alexander Fleming" },
      { id: "D", text: "Robert Koch" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Alexander Fleming scoprì la penicillina nel 1928 quasi per caso, osservando una muffa che uccideva i batteri.",
  },
  {
    id: "gen_015",
    category: "general",
    subcategory: "storia-moderna",
    text: "In quale anno è caduto il Muro di Berlino?",
    answers: [
      { id: "A", text: "1987" },
      { id: "B", text: "1990" },
      { id: "C", text: "1988" },
      { id: "D", text: "1989" },
    ],
    correctAnswerIds: ["D"],
    explanation: "Il Muro di Berlino cadde il 9 novembre 1989, segnando la fine della Guerra Fredda.",
  },
  {
    id: "gen_016",
    category: "general",
    subcategory: "storia-moderna",
    text: "Quale sport si gioca a Wimbledon?",
    answers: [
      { id: "A", text: "Golf" },
      { id: "B", text: "Tennis" },
      { id: "C", text: "Cricket" },
      { id: "D", text: "Polo" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Wimbledon è il torneo di tennis più antico e prestigioso del mondo, fondato nel 1877.",
  },
  {
    id: "gen_029",
    category: "general",
    subcategory: "storia-moderna",
    text: "In quale anno finì la Seconda Guerra Mondiale?",
    answers: [
      { id: "A", text: "1943" },
      { id: "B", text: "1944" },
      { id: "C", text: "1945" },
      { id: "D", text: "1946" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "La Seconda Guerra Mondiale finì nel 1945: la Germania capitolò in maggio, il Giappone in settembre.",
  },
  {
    id: "gen_031",
    category: "general",
    subcategory: "storia-moderna",
    text: "Chi fu il primo essere umano a viaggiare nello spazio?",
    answers: [
      { id: "A", text: "Neil Armstrong" },
      { id: "B", text: "Yuri Gagarin" },
      { id: "C", text: "Buzz Aldrin" },
      { id: "D", text: "Alan Shepard" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Yuri Gagarin il 12 aprile 1961 completò un'orbita intorno alla Terra a bordo della Vostok 1.",
  },
  {
    id: "gen_040",
    category: "general",
    subcategory: "storia-moderna",
    text: "Da quale città proviene originariamente la pizza?",
    answers: [
      { id: "A", text: "Roma" },
      { id: "B", text: "Palermo" },
      { id: "C", text: "Napoli" },
      { id: "D", text: "Milano" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "La pizza nasce a Napoli nel XVIII secolo. La Margherita fu creata nel 1889 in onore della regina Margherita di Savoia.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // TECNOLOGIA (3)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_044",
    category: "general",
    subcategory: "tecnologia",
    text: "In quale anno fu lanciato il primo iPhone?",
    answers: [
      { id: "A", text: "2005" },
      { id: "B", text: "2007" },
      { id: "C", text: "2009" },
      { id: "D", text: "2010" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Steve Jobs presentò il primo iPhone il 9 gennaio 2007, rivoluzionando il mercato degli smartphone.",
  },
  {
    id: "gen_045",
    category: "general",
    subcategory: "tecnologia",
    text: "Chi ha fondato Amazon?",
    answers: [
      { id: "A", text: "Steve Jobs" },
      { id: "B", text: "Elon Musk" },
      { id: "C", text: "Jeff Bezos" },
      { id: "D", text: "Mark Zuckerberg" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Jeff Bezos fondò Amazon nel 1994 come libreria online. Oggi è uno dei marketplace più grandi al mondo.",
  },
  {
    id: "gen_046",
    category: "general",
    subcategory: "tecnologia",
    text: "Cosa significa l'acronimo HTML?",
    answers: [
      { id: "A", text: "HyperText Markup Language" },
      { id: "B", text: "High Tech Machine Learning" },
      { id: "C", text: "HyperText Modern Layout" },
      { id: "D", text: "High Transfer Multimedia Language" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "HTML (HyperText Markup Language) è il linguaggio di markup standard per creare pagine web.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // POLITICA ITALIA (4)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_005",
    category: "general",
    subcategory: "politica-italia",
    text: "Quante regioni ha l'Italia?",
    answers: [
      { id: "A", text: "18" },
      { id: "B", text: "22" },
      { id: "C", text: "20" },
      { id: "D", text: "15" },
    ],
    correctAnswerIds: ["C"],
    explanation: "L'Italia è divisa in 20 regioni, di cui 5 a statuto speciale.",
  },
  {
    id: "gen_027",
    category: "general",
    subcategory: "politica-italia",
    text: "Quante stelle ha la bandiera dell'Unione Europea?",
    answers: [
      { id: "A", text: "10" },
      { id: "B", text: "15" },
      { id: "C", text: "24" },
      { id: "D", text: "12" },
    ],
    correctAnswerIds: ["D"],
    explanation:
      "La bandiera EU ha sempre 12 stelle dorate, indipendentemente dal numero di paesi membri.",
  },
  {
    id: "gen_049",
    category: "general",
    subcategory: "politica-italia",
    text: "In quale anno fu proclamata la Repubblica Italiana?",
    answers: [
      { id: "A", text: "1943" },
      { id: "B", text: "1945" },
      { id: "C", text: "1946" },
      { id: "D", text: "1948" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Il referendum del 2 giugno 1946 sancì la scelta della Repubblica. Da allora il 2 giugno è festa nazionale.",
  },
  {
    id: "gen_050",
    category: "general",
    subcategory: "politica-italia",
    text: "Chi è il capo dello Stato in Italia?",
    answers: [
      { id: "A", text: "Il Presidente del Consiglio" },
      { id: "B", text: "Il Presidente della Repubblica" },
      { id: "C", text: "Il Re" },
      { id: "D", text: "Il Presidente del Senato" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Il Presidente della Repubblica è il capo dello Stato. Il Presidente del Consiglio è il capo del governo.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // GRAMMATICA ITALIANA (3)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_006",
    category: "general",
    subcategory: "grammatica-italiana",
    text: "Chi ha scritto la Divina Commedia?",
    answers: [
      { id: "A", text: "Dante Alighieri" },
      { id: "B", text: "Francesco Petrarca" },
      { id: "C", text: "Giovanni Boccaccio" },
      { id: "D", text: "Ludovico Ariosto" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "Dante Alighieri scrisse la Divina Commedia tra il 1304 e il 1321, capolavoro assoluto della letteratura italiana.",
  },
  {
    id: "gen_047",
    category: "general",
    subcategory: "grammatica-italiana",
    text: "Quante lettere ha l'alfabeto italiano?",
    answers: [
      { id: "A", text: "26" },
      { id: "B", text: "21" },
      { id: "C", text: "23" },
      { id: "D", text: "28" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "L'alfabeto italiano ha 21 lettere. Mancano J, K, W, X, Y rispetto all'alfabeto latino internazionale.",
  },
  {
    id: "gen_048",
    category: "general",
    subcategory: "grammatica-italiana",
    text: "Quale articolo determinativo si usa davanti alla parola 'zaino'?",
    answers: [
      { id: "A", text: "il" },
      { id: "B", text: "lo" },
      { id: "C", text: "la" },
      { id: "D", text: "l'" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Si usa 'lo' davanti a parole maschili che iniziano per z, s+consonante, gn, pn, ps, x, y. Quindi: 'lo zaino'.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // MATEMATICA (4)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_012",
    category: "general",
    subcategory: "matematica",
    text: "Quanti lati ha un dodecagono?",
    answers: [
      { id: "A", text: "10" },
      { id: "B", text: "12" },
      { id: "C", text: "14" },
      { id: "D", text: "16" },
    ],
    correctAnswerIds: ["B"],
    explanation: "Il dodecagono ha 12 lati. Dodeca- viene dal greco e significa 12.",
  },
  {
    id: "gen_022",
    category: "general",
    subcategory: "matematica",
    text: "Quanti giorni ha un anno bisestile?",
    answers: [
      { id: "A", text: "365" },
      { id: "B", text: "367" },
      { id: "C", text: "366" },
      { id: "D", text: "364" },
    ],
    correctAnswerIds: ["C"],
    explanation: "Un anno bisestile ha 366 giorni grazie al giorno extra del 29 febbraio.",
  },
  {
    id: "gen_033",
    category: "general",
    subcategory: "matematica",
    text: "Quanti mesi dell'anno hanno 31 giorni?",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "I mesi con 31 giorni sono: gennaio, marzo, maggio, luglio, agosto, ottobre, dicembre.",
  },
  {
    id: "gen_051",
    category: "general",
    subcategory: "matematica",
    text: "Quanti numeri primi ci sono tra 1 e 10?",
    answers: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" },
    ],
    correctAnswerIds: ["B"],
    explanation: "I numeri primi tra 1 e 10 sono: 2, 3, 5, 7 — quattro in totale.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // FISICA E CHIMICA / SCIENZE (6)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_001",
    category: "general",
    subcategory: "fisica-chimica",
    text: "Quale pianeta è conosciuto come il Pianeta Rosso?",
    answers: [
      { id: "A", text: "Venere" },
      { id: "B", text: "Marte" },
      { id: "C", text: "Giove" },
      { id: "D", text: "Saturno" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Marte è chiamato Pianeta Rosso per il colore della sua superficie, dovuto all'ossido di ferro.",
  },
  {
    id: "gen_011",
    category: "general",
    subcategory: "fisica-chimica",
    text: "Qual è il simbolo chimico dell'oro?",
    answers: [
      { id: "A", text: "Or" },
      { id: "B", text: "Ag" },
      { id: "C", text: "Cu" },
      { id: "D", text: "Au" },
    ],
    correctAnswerIds: ["D"],
    explanation: "Il simbolo dell'oro è Au, dal latino Aurum.",
  },
  {
    id: "gen_028",
    category: "general",
    subcategory: "fisica-chimica",
    text: "Qual è la formula chimica dell'acqua?",
    answers: [
      { id: "A", text: "HO₂" },
      { id: "B", text: "H₂O" },
      { id: "C", text: "H₃O" },
      { id: "D", text: "OH₂" },
    ],
    correctAnswerIds: ["B"],
    explanation: "H₂O: due atomi di idrogeno e uno di ossigeno. La molecola più importante sulla Terra.",
  },
  {
    id: "gen_030",
    category: "general",
    subcategory: "fisica-chimica",
    text: "Quale pianeta ha gli anelli più famosi del sistema solare?",
    answers: [
      { id: "A", text: "Urano" },
      { id: "B", text: "Nettuno" },
      { id: "C", text: "Giove" },
      { id: "D", text: "Saturno" },
    ],
    correctAnswerIds: ["D"],
    explanation:
      "Gli anelli di Saturno sono composti principalmente da ghiaccio e roccia, e si estendono per migliaia di km.",
  },
  {
    id: "gen_034",
    category: "general",
    subcategory: "fisica-chimica",
    text: "Qual è il mammifero terrestre più veloce del mondo?",
    answers: [
      { id: "A", text: "Ghepardo" },
      { id: "B", text: "Leone" },
      { id: "C", text: "Tigre" },
      { id: "D", text: "Antilope" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "Il ghepardo può raggiungere i 110 km/h in brevi scatti. È il più veloce sulla terraferma.",
  },
  {
    id: "gen_036",
    category: "general",
    subcategory: "fisica-chimica",
    text: "Quanti colori ha l'arcobaleno?",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
    correctAnswerIds: ["C"],
    explanation: "L'arcobaleno ha 7 colori: rosso, arancione, giallo, verde, azzurro, indaco, violetto.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // ARTE E LETTERATURA (5)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_002",
    category: "general",
    subcategory: "arte",
    text: "Chi ha affrescato la Cappella Sistina?",
    answers: [
      { id: "A", text: "Leonardo da Vinci" },
      { id: "B", text: "Raffaello" },
      { id: "C", text: "Michelangelo" },
      { id: "D", text: "Botticelli" },
    ],
    correctAnswerIds: ["C"],
    explanation:
      "Michelangelo dipinse la Cappella Sistina tra il 1508 e il 1512 su commissione di Papa Giulio II.",
  },
  {
    id: "gen_021",
    category: "general",
    subcategory: "arte",
    text: "Chi ha dipinto la Gioconda?",
    answers: [
      { id: "A", text: "Michelangelo" },
      { id: "B", text: "Leonardo da Vinci" },
      { id: "C", text: "Raffaello" },
      { id: "D", text: "Caravaggio" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Leonardo da Vinci dipinse la Gioconda (Mona Lisa) tra il 1503 e il 1519. È esposta al Louvre di Parigi.",
  },
  {
    id: "gen_023",
    category: "general",
    subcategory: "arte",
    text: "Chi scrisse Romeo e Giulietta?",
    answers: [
      { id: "A", text: "William Shakespeare" },
      { id: "B", text: "Charles Dickens" },
      { id: "C", text: "Jane Austen" },
      { id: "D", text: "Oscar Wilde" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "William Shakespeare scrisse Romeo e Giulietta intorno al 1595, la storia d'amore più famosa della letteratura mondiale.",
  },
  {
    id: "gen_026",
    category: "general",
    subcategory: "arte",
    text: "Chi è l'autrice della saga di Harry Potter?",
    answers: [
      { id: "A", text: "J.K. Rowling" },
      { id: "B", text: "Roald Dahl" },
      { id: "C", text: "C.S. Lewis" },
      { id: "D", text: "Philip Pullman" },
    ],
    correctAnswerIds: ["A"],
    explanation: "J.K. Rowling ha scritto i 7 libri di Harry Potter tra il 1997 e il 2007.",
  },
  {
    id: "gen_035",
    category: "general",
    subcategory: "arte",
    text: "Dove si trova il David di Michelangelo?",
    answers: [
      { id: "A", text: "Roma" },
      { id: "B", text: "Milano" },
      { id: "C", text: "Firenze" },
      { id: "D", text: "Napoli" },
    ],
    correctAnswerIds: ["C"],
    explanation: "Il David di Michelangelo si trova alla Galleria dell'Accademia di Firenze dal 1873.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // MUSICA (4)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "gen_008",
    category: "general",
    subcategory: "musica",
    text: "Quante corde ha una chitarra classica?",
    answers: [
      { id: "A", text: "4" },
      { id: "B", text: "6" },
      { id: "C", text: "8" },
      { id: "D", text: "12" },
    ],
    correctAnswerIds: ["B"],
    explanation: "La chitarra classica ha 6 corde: Mi, La, Re, Sol, Si, Mi.",
  },
  {
    id: "gen_010",
    category: "general",
    subcategory: "musica",
    text: "Chi ha composto la Quinta Sinfonia?",
    answers: [
      { id: "A", text: "Beethoven" },
      { id: "B", text: "Mozart" },
      { id: "C", text: "Bach" },
      { id: "D", text: "Vivaldi" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      'Ludwig van Beethoven compose la Quinta Sinfonia, celebre per il suo inizio "ta-ta-ta-taaaa".',
  },
  {
    id: "gen_018",
    category: "general",
    subcategory: "musica",
    text: "Chi ha composto La Traviata?",
    answers: [
      { id: "A", text: "Giuseppe Verdi" },
      { id: "B", text: "Giacomo Puccini" },
      { id: "C", text: "Gioachino Rossini" },
      { id: "D", text: "Gaetano Donizetti" },
    ],
    correctAnswerIds: ["A"],
    explanation:
      "La Traviata fu composta da Giuseppe Verdi nel 1853, basata sul romanzo La signora delle camelie.",
  },
  {
    id: "gen_039",
    category: "general",
    subcategory: "musica",
    text: "Chi ha cantato la celebre canzone 'Azzurro'?",
    answers: [
      { id: "A", text: "Lucio Battisti" },
      { id: "B", text: "Adriano Celentano" },
      { id: "C", text: "Mina" },
      { id: "D", text: "Lucio Dalla" },
    ],
    correctAnswerIds: ["B"],
    explanation:
      "Adriano Celentano cantò Azzurro nel 1968, una delle canzoni italiane più iconiche di sempre.",
  },
];
