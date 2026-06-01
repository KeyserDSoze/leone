import type { Question } from "./types";

export const generalQuestions: Question[] = [
  {
    id: "gen_001",
    category: "general",
    text: "Quale pianeta è conosciuto come il Pianeta Rosso?",
    answers: [
      { id: "A", text: "Venere" },
      { id: "B", text: "Marte" },
      { id: "C", text: "Giove" },
      { id: "D", text: "Saturno" },
    ],
    correctAnswerId: "B",
    explanation:
      "Marte è chiamato Pianeta Rosso per il colore della sua superficie, dovuto all'ossido di ferro.",
  },
  {
    id: "gen_002",
    category: "general",
    text: "Chi ha affrescato la Cappella Sistina?",
    answers: [
      { id: "A", text: "Leonardo da Vinci" },
      { id: "B", text: "Raffaello" },
      { id: "C", text: "Michelangelo" },
      { id: "D", text: "Botticelli" },
    ],
    correctAnswerId: "C",
    explanation:
      "Michelangelo dipinse la Cappella Sistina tra il 1508 e il 1512 su commissione di Papa Giulio II.",
  },
  {
    id: "gen_003",
    category: "general",
    text: "In quale anno l'uomo è arrivato sulla Luna per la prima volta?",
    answers: [
      { id: "A", text: "1969" },
      { id: "B", text: "1965" },
      { id: "C", text: "1972" },
      { id: "D", text: "1961" },
    ],
    correctAnswerId: "A",
    explanation:
      "Il 20 luglio 1969, Neil Armstrong fu il primo uomo a camminare sulla Luna con la missione Apollo 11.",
  },
  {
    id: "gen_004",
    category: "general",
    text: "Qual è la capitale dell'Australia?",
    answers: [
      { id: "A", text: "Sydney" },
      { id: "B", text: "Canberra" },
      { id: "C", text: "Melbourne" },
      { id: "D", text: "Brisbane" },
    ],
    correctAnswerId: "B",
    explanation:
      "Canberra è la capitale dell'Australia, non Sydney come molti credono!",
  },
  {
    id: "gen_005",
    category: "general",
    text: "Quante regioni ha l'Italia?",
    answers: [
      { id: "A", text: "18" },
      { id: "B", text: "22" },
      { id: "C", text: "20" },
      { id: "D", text: "15" },
    ],
    correctAnswerId: "C",
    explanation: "L'Italia è divisa in 20 regioni, di cui 5 a statuto speciale.",
  },
  {
    id: "gen_006",
    category: "general",
    text: "Chi ha scritto la Divina Commedia?",
    answers: [
      { id: "A", text: "Dante Alighieri" },
      { id: "B", text: "Francesco Petrarca" },
      { id: "C", text: "Giovanni Boccaccio" },
      { id: "D", text: "Ludovico Ariosto" },
    ],
    correctAnswerId: "A",
    explanation:
      "Dante Alighieri scrisse la Divina Commedia tra il 1304 e il 1321, capolavoro assoluto della letteratura italiana.",
  },
  {
    id: "gen_007",
    category: "general",
    text: "Qual è il fiume più lungo del mondo?",
    answers: [
      { id: "A", text: "Amazzonia" },
      { id: "B", text: "Mississippi" },
      { id: "C", text: "Congo" },
      { id: "D", text: "Nilo" },
    ],
    correctAnswerId: "D",
    explanation:
      "Il Nilo, con circa 6.650 km, è tradizionalmente considerato il fiume più lungo del mondo.",
  },
  {
    id: "gen_008",
    category: "general",
    text: "Quante corde ha una chitarra classica?",
    answers: [
      { id: "A", text: "4" },
      { id: "B", text: "6" },
      { id: "C", text: "8" },
      { id: "D", text: "12" },
    ],
    correctAnswerId: "B",
    explanation: "La chitarra classica ha 6 corde: Mi, La, Re, Sol, Si, Mi.",
  },
  {
    id: "gen_009",
    category: "general",
    text: "In quale paese si trova Machu Picchu?",
    answers: [
      { id: "A", text: "Colombia" },
      { id: "B", text: "Ecuador" },
      { id: "C", text: "Perù" },
      { id: "D", text: "Bolivia" },
    ],
    correctAnswerId: "C",
    explanation:
      "Machu Picchu è un'antica città inca situata sulle Ande in Perù, a circa 2.430 metri di altitudine.",
  },
  {
    id: "gen_010",
    category: "general",
    text: "Chi ha composto la Quinta Sinfonia?",
    answers: [
      { id: "A", text: "Beethoven" },
      { id: "B", text: "Mozart" },
      { id: "C", text: "Bach" },
      { id: "D", text: "Vivaldi" },
    ],
    correctAnswerId: "A",
    explanation:
      'Ludwig van Beethoven compose la Quinta Sinfonia, celebre per il suo inizio "ta-ta-ta-taaaa".',
  },
  {
    id: "gen_011",
    category: "general",
    text: "Qual è il simbolo chimico dell'oro?",
    answers: [
      { id: "A", text: "Or" },
      { id: "B", text: "Ag" },
      { id: "C", text: "Cu" },
      { id: "D", text: "Au" },
    ],
    correctAnswerId: "D",
    explanation:
      "Il simbolo dell'oro è Au, dal latino Aurum.",
  },
  {
    id: "gen_012",
    category: "general",
    text: "Quanti lati ha un dodecagono?",
    answers: [
      { id: "A", text: "10" },
      { id: "B", text: "12" },
      { id: "C", text: "14" },
      { id: "D", text: "16" },
    ],
    correctAnswerId: "B",
    explanation: "Il dodecagono ha 12 lati. Dodeca- viene dal greco e significa 12.",
  },
  {
    id: "gen_013",
    category: "general",
    text: "Chi ha scoperto la penicillina?",
    answers: [
      { id: "A", text: "Louis Pasteur" },
      { id: "B", text: "Marie Curie" },
      { id: "C", text: "Alexander Fleming" },
      { id: "D", text: "Robert Koch" },
    ],
    correctAnswerId: "C",
    explanation:
      "Alexander Fleming scoprì la penicillina nel 1928 quasi per caso, osservando una muffa che uccideva i batteri.",
  },
  {
    id: "gen_014",
    category: "general",
    text: "Qual è l'oceano più grande del mondo?",
    answers: [
      { id: "A", text: "Pacifico" },
      { id: "B", text: "Atlantico" },
      { id: "C", text: "Indiano" },
      { id: "D", text: "Artico" },
    ],
    correctAnswerId: "A",
    explanation:
      "L'Oceano Pacifico copre circa il 46% della superficie acquatica della Terra.",
  },
  {
    id: "gen_015",
    category: "general",
    text: "In quale anno è caduto il Muro di Berlino?",
    answers: [
      { id: "A", text: "1987" },
      { id: "B", text: "1990" },
      { id: "C", text: "1988" },
      { id: "D", text: "1989" },
    ],
    correctAnswerId: "D",
    explanation:
      "Il Muro di Berlino cadde il 9 novembre 1989, segnando la fine della Guerra Fredda.",
  },
  {
    id: "gen_016",
    category: "general",
    text: "Quale sport si gioca a Wimbledon?",
    answers: [
      { id: "A", text: "Golf" },
      { id: "B", text: "Tennis" },
      { id: "C", text: "Cricket" },
      { id: "D", text: "Polo" },
    ],
    correctAnswerId: "B",
    explanation:
      "Wimbledon è il torneo di tennis più antico e prestigioso del mondo, fondato nel 1877.",
  },
  {
    id: "gen_017",
    category: "general",
    text: "Quanti continenti ci sono sulla Terra?",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
    correctAnswerId: "C",
    explanation:
      "I 7 continenti sono: Africa, Antartide, Asia, Australia/Oceania, Europa, America del Nord, America del Sud.",
  },
  {
    id: "gen_018",
    category: "general",
    text: "Chi ha composto La Traviata?",
    answers: [
      { id: "A", text: "Giuseppe Verdi" },
      { id: "B", text: "Giacomo Puccini" },
      { id: "C", text: "Gioachino Rossini" },
      { id: "D", text: "Gaetano Donizetti" },
    ],
    correctAnswerId: "A",
    explanation:
      "La Traviata fu composta da Giuseppe Verdi nel 1853, basata sul romanzo La signora delle camelie.",
  },
  {
    id: "gen_019",
    category: "general",
    text: "Qual è la moneta ufficiale del Giappone?",
    answers: [
      { id: "A", text: "Yuan" },
      { id: "B", text: "Won" },
      { id: "C", text: "Baht" },
      { id: "D", text: "Yen" },
    ],
    correctAnswerId: "D",
    explanation: "Lo Yen giapponese (¥) è una delle valute più scambiate al mondo.",
  },
  {
    id: "gen_020",
    category: "general",
    text: "Qual è il paese più grande del mondo per superficie?",
    answers: [
      { id: "A", text: "Russia" },
      { id: "B", text: "Canada" },
      { id: "C", text: "Cina" },
      { id: "D", text: "USA" },
    ],
    correctAnswerId: "A",
    explanation:
      "La Russia copre circa 17 milioni di km², oltre il doppio del Canada che è al secondo posto.",
  },
  {
    id: "gen_021",
    category: "general",
    text: "Chi ha dipinto la Gioconda?",
    answers: [
      { id: "A", text: "Michelangelo" },
      { id: "B", text: "Leonardo da Vinci" },
      { id: "C", text: "Raffaello" },
      { id: "D", text: "Caravaggio" },
    ],
    correctAnswerId: "B",
    explanation:
      "Leonardo da Vinci dipinse la Gioconda (Mona Lisa) tra il 1503 e il 1519. È esposta al Louvre di Parigi.",
  },
  {
    id: "gen_022",
    category: "general",
    text: "Quanti giorni ha un anno bisestile?",
    answers: [
      { id: "A", text: "365" },
      { id: "B", text: "367" },
      { id: "C", text: "366" },
      { id: "D", text: "364" },
    ],
    correctAnswerId: "C",
    explanation:
      "Un anno bisestile ha 366 giorni grazie al giorno extra del 29 febbraio.",
  },
  {
    id: "gen_023",
    category: "general",
    text: "Chi scrisse Romeo e Giulietta?",
    answers: [
      { id: "A", text: "William Shakespeare" },
      { id: "B", text: "Charles Dickens" },
      { id: "C", text: "Jane Austen" },
      { id: "D", text: "Oscar Wilde" },
    ],
    correctAnswerId: "A",
    explanation:
      "William Shakespeare scrisse Romeo e Giulietta intorno al 1595, la storia d'amore più famosa della letteratura mondiale.",
  },
  {
    id: "gen_024",
    category: "general",
    text: "Qual è la montagna più alta del mondo?",
    answers: [
      { id: "A", text: "K2" },
      { id: "B", text: "Monte Bianco" },
      { id: "C", text: "Kilimanjaro" },
      { id: "D", text: "Everest" },
    ],
    correctAnswerId: "D",
    explanation:
      "L'Everest, con i suoi 8.849 m, è la montagna più alta del mondo. Si trova sull'Himalaya.",
  },
  {
    id: "gen_025",
    category: "general",
    text: "Qual è la capitale del Brasile?",
    answers: [
      { id: "A", text: "Rio de Janeiro" },
      { id: "B", text: "San Paolo" },
      { id: "C", text: "Brasilia" },
      { id: "D", text: "Salvador" },
    ],
    correctAnswerId: "C",
    explanation:
      "Brasilia è la capitale del Brasile dal 1960. Molti pensano sia Rio de Janeiro, ma si sbagliano!",
  },
  {
    id: "gen_026",
    category: "general",
    text: "Chi è l'autrice della saga di Harry Potter?",
    answers: [
      { id: "A", text: "J.K. Rowling" },
      { id: "B", text: "Roald Dahl" },
      { id: "C", text: "C.S. Lewis" },
      { id: "D", text: "Philip Pullman" },
    ],
    correctAnswerId: "A",
    explanation:
      "J.K. Rowling ha scritto i 7 libri di Harry Potter tra il 1997 e il 2007.",
  },
  {
    id: "gen_027",
    category: "general",
    text: "Quante stelle ha la bandiera dell'Unione Europea?",
    answers: [
      { id: "A", text: "10" },
      { id: "B", text: "15" },
      { id: "C", text: "24" },
      { id: "D", text: "12" },
    ],
    correctAnswerId: "D",
    explanation:
      "La bandiera EU ha sempre 12 stelle dorate, indipendentemente dal numero di paesi membri.",
  },
  {
    id: "gen_028",
    category: "general",
    text: "Qual è la formula chimica dell'acqua?",
    answers: [
      { id: "A", text: "HO₂" },
      { id: "B", text: "H₂O" },
      { id: "C", text: "H₃O" },
      { id: "D", text: "OH₂" },
    ],
    correctAnswerId: "B",
    explanation:
      "H₂O: due atomi di idrogeno e uno di ossigeno. La molecola più importante sulla Terra.",
  },
  {
    id: "gen_029",
    category: "general",
    text: "In quale anno finì la Seconda Guerra Mondiale?",
    answers: [
      { id: "A", text: "1943" },
      { id: "B", text: "1944" },
      { id: "C", text: "1945" },
      { id: "D", text: "1946" },
    ],
    correctAnswerId: "C",
    explanation:
      "La Seconda Guerra Mondiale finì nel 1945: la Germania capitolò in maggio, il Giappone in settembre.",
  },
  {
    id: "gen_030",
    category: "general",
    text: "Quale pianeta ha gli anelli più famosi del sistema solare?",
    answers: [
      { id: "A", text: "Urano" },
      { id: "B", text: "Nettuno" },
      { id: "C", text: "Giove" },
      { id: "D", text: "Saturno" },
    ],
    correctAnswerId: "D",
    explanation:
      "Gli anelli di Saturno sono composti principalmente da ghiaccio e roccia, e si estendono per migliaia di km.",
  },
  {
    id: "gen_031",
    category: "general",
    text: "Chi fu il primo essere umano a viaggiare nello spazio?",
    answers: [
      { id: "A", text: "Neil Armstrong" },
      { id: "B", text: "Yuri Gagarin" },
      { id: "C", text: "Buzz Aldrin" },
      { id: "D", text: "Alan Shepard" },
    ],
    correctAnswerId: "B",
    explanation:
      "Yuri Gagarin il 12 aprile 1961 completò un'orbita intorno alla Terra a bordo della Vostok 1.",
  },
  {
    id: "gen_032",
    category: "general",
    text: "Qual è la capitale della Germania?",
    answers: [
      { id: "A", text: "Berlino" },
      { id: "B", text: "Monaco" },
      { id: "C", text: "Amburgo" },
      { id: "D", text: "Francoforte" },
    ],
    correctAnswerId: "A",
    explanation:
      "Berlino è la capitale e la città più grande della Germania con circa 3,7 milioni di abitanti.",
  },
  {
    id: "gen_033",
    category: "general",
    text: "Quanti mesi dell'anno hanno 31 giorni?",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
    correctAnswerId: "C",
    explanation:
      "I mesi con 31 giorni sono: gennaio, marzo, maggio, luglio, agosto, ottobre, dicembre.",
  },
  {
    id: "gen_034",
    category: "general",
    text: "Qual è il mammifero terrestre più veloce del mondo?",
    answers: [
      { id: "A", text: "Ghepardo" },
      { id: "B", text: "Leone" },
      { id: "C", text: "Tigre" },
      { id: "D", text: "Antilope" },
    ],
    correctAnswerId: "A",
    explanation:
      "Il ghepardo può raggiungere i 110 km/h in brevi scatti. È il più veloce sulla terraferma.",
  },
  {
    id: "gen_035",
    category: "general",
    text: "Dove si trova il David di Michelangelo?",
    answers: [
      { id: "A", text: "Roma" },
      { id: "B", text: "Milano" },
      { id: "C", text: "Firenze" },
      { id: "D", text: "Napoli" },
    ],
    correctAnswerId: "C",
    explanation:
      "Il David di Michelangelo si trova alla Galleria dell'Accademia di Firenze dal 1873.",
  },
  {
    id: "gen_036",
    category: "general",
    text: "Quanti colori ha l'arcobaleno?",
    answers: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" },
    ],
    correctAnswerId: "C",
    explanation:
      "L'arcobaleno ha 7 colori: rosso, arancione, giallo, verde, azzurro, indaco, violetto.",
  },
  {
    id: "gen_037",
    category: "general",
    text: "Qual è il vulcano più alto d'Europa?",
    answers: [
      { id: "A", text: "Vesuvio" },
      { id: "B", text: "Stromboli" },
      { id: "C", text: "Etna" },
      { id: "D", text: "Vulcano" },
    ],
    correctAnswerId: "C",
    explanation:
      "L'Etna, in Sicilia, con i suoi circa 3.340 m è il vulcano più alto d'Europa ed è ancora attivo.",
  },
  {
    id: "gen_038",
    category: "general",
    text: "In quale paese si trova il Canale di Panama?",
    answers: [
      { id: "A", text: "Colombia" },
      { id: "B", text: "Costa Rica" },
      { id: "C", text: "Nicaragua" },
      { id: "D", text: "Panama" },
    ],
    correctAnswerId: "D",
    explanation:
      "Il Canale di Panama collega l'Oceano Pacifico all'Oceano Atlantico attraverso il paese di Panama.",
  },
  {
    id: "gen_039",
    category: "general",
    text: "Chi ha cantato la celebre canzone 'Azzurro'?",
    answers: [
      { id: "A", text: "Lucio Battisti" },
      { id: "B", text: "Adriano Celentano" },
      { id: "C", text: "Mina" },
      { id: "D", text: "Lucio Dalla" },
    ],
    correctAnswerId: "B",
    explanation:
      "Adriano Celentano cantò Azzurro nel 1968, una delle canzoni italiane più iconiche di sempre.",
  },
  {
    id: "gen_040",
    category: "general",
    text: "Da quale paese proviene originariamente la pizza?",
    answers: [
      { id: "A", text: "Grecia" },
      { id: "B", text: "Spagna" },
      { id: "C", text: "Italia" },
      { id: "D", text: "Francia" },
    ],
    correctAnswerId: "C",
    explanation:
      "La pizza nasce a Napoli nel XVIII secolo. La Margherita fu creata nel 1889 in onore della regina.",
  },
];
