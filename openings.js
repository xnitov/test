// ═══════════════════════════════════════════════
//  OPENING BOOK
//  Moves stored as SAN strings (check symbols
//  are stripped during comparison so + / # are
//  optional here — just leave them out).
//  Each entry: { id, name, group, moves[] }
// ═══════════════════════════════════════════════

const OPENINGS = [

  { id:'free', name:'Free Play', group:'—', moves:[] },

  // ──────────────────────────────────────────
  //  1.e4 e5 openings
  // ──────────────────────────────────────────
  {
    id:'ruy_main',
    name:'Ruy López — Closed',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','Bb5','a6','Ba4','Nf6','O-O','Be7','Re1','b5','Bb3','d6','c3','O-O']
  },
  {
    id:'ruy_berlin',
    name:'Ruy López — Berlin',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','Bb5','Nf6','O-O','Nxe4','d4','Nd6','Bxc6','dxc6','dxe5','Nf5']
  },
  {
    id:'ruy_exchange',
    name:'Ruy López — Exchange',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','Bb5','a6','Bxc6','dxc6','Nxe5','Qd4','Nf3','Qxe4','Qe2','Qxe2','Kxe2']
  },
  {
    id:'italian_giuoco',
    name:'Italian — Giuoco Piano',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','Bc4','Bc5','c3','Nf6','d4','exd4','cxd4','Bb4','Nc3','Nxe4','O-O']
  },
  {
    id:'italian_two_knights',
    name:'Italian — Two Knights',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','Bc4','Nf6','Ng5','d5','exd5','Na5','Bb5','c6','dxc6','bxc6','Be2','h6','Nf3']
  },
  {
    id:'scotch',
    name:'Scotch Game',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','d4','exd4','Nxd4','Nf6','Nxc6','bxc6','e5','Qe7','Qe2','Nd5','c4','Ba6','b3']
  },
  {
    id:'scotch_gambit',
    name:'Scotch Gambit',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','d4','exd4','Bc4','Bc5','O-O','d6','c3','dxc3','Nxc3','Nf6']
  },
  {
    id:'kings_gambit',
    name:"King's Gambit",
    group:'1.e4 e5',
    moves:['e4','e5','f4','exf4','Nf3','d6','d4','g5','h4','g4','Ng5','h3','Nxf7','Kxf7','Bc4','Ke6','O-O']
  },
  {
    id:'vienna',
    name:'Vienna Game',
    group:'1.e4 e5',
    moves:['e4','e5','Nc3','Nf6','f4','d5','fxe5','Nxe4','Nf3','Bg4','Qe2','Nc5','d4','Ne6']
  },
  {
    id:'four_knights',
    name:'Four Knights Game',
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nc6','Nc3','Nf6','Bb5','Bb4','O-O','O-O','d3','d6','Bg5','Bxc3','bxc3','Qe7']
  },
  {
    id:'petroff',
    name:"Petrov's Defense",
    group:'1.e4 e5',
    moves:['e4','e5','Nf3','Nf6','Nxe5','d6','Nf3','Nxe4','d4','d5','Bd3','Nc6','O-O','Be7','c4']
  },

  // ──────────────────────────────────────────
  //  Sicilian Defense
  // ──────────────────────────────────────────
  {
    id:'sicilian_najdorf',
    name:'Sicilian — Najdorf',
    group:'Sicilian Defense',
    moves:['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','a6','Bg5','e6','f4','Be7','Qf3','Qc7']
  },
  {
    id:'sicilian_dragon',
    name:'Sicilian — Dragon (Yugoslav)',
    group:'Sicilian Defense',
    moves:['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','g6','Be3','Bg7','f3','O-O','Qd2','Nc6','Bc4']
  },
  {
    id:'sicilian_classical',
    name:'Sicilian — Classical (Richter-Rauzer)',
    group:'Sicilian Defense',
    moves:['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','Nc6','Bg5','e6','Qd2','Be7','O-O-O','O-O']
  },
  {
    id:'sicilian_scheveningen',
    name:'Sicilian — Scheveningen',
    group:'Sicilian Defense',
    moves:['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','e6','Be2','Be7','O-O','O-O','f4','Nc6']
  },
  {
    id:'sicilian_kan',
    name:'Sicilian — Kan / Taimanov',
    group:'Sicilian Defense',
    moves:['e4','c5','Nf3','e6','d4','cxd4','Nxd4','a6','Nc3','Qc7','Bd3','Nf6','O-O','Nc6','Nxc6','bxc6']
  },
  {
    id:'sicilian_alapin',
    name:'Sicilian — Alapin (2.c3)',
    group:'Sicilian Defense',
    moves:['e4','c5','c3','d5','exd5','Qxd5','d4','Nf6','Nf3','e6','Bd3','Nc6','O-O','cxd4','cxd4']
  },
  {
    id:'sicilian_closed',
    name:'Sicilian — Closed',
    group:'Sicilian Defense',
    moves:['e4','c5','Nc3','Nc6','g3','g6','Bg2','Bg7','d3','d6','Be3','e5','Nge2','Nge7','O-O']
  },

  // ──────────────────────────────────────────
  //  French Defense
  // ──────────────────────────────────────────
  {
    id:'french_advance',
    name:'French — Advance',
    group:'French Defense',
    moves:['e4','e6','d4','d5','e5','c5','c3','Nc6','Nf3','Qb6','a3','Nh6','b4','cxd4','cxd4']
  },
  {
    id:'french_winawer',
    name:'French — Winawer',
    group:'French Defense',
    moves:['e4','e6','d4','d5','Nc3','Bb4','e5','c5','a3','Bxc3','bxc3','Ne7','Qg4','O-O','Bd3']
  },
  {
    id:'french_classical',
    name:'French — Classical',
    group:'French Defense',
    moves:['e4','e6','d4','d5','Nc3','Nf6','Bg5','Be7','e5','Nfd7','Bxe7','Qxe7','f4','O-O','Nf3']
  },
  {
    id:'french_tarrasch',
    name:'French — Tarrasch',
    group:'French Defense',
    moves:['e4','e6','d4','d5','Nd2','Nf6','e5','Nfd7','Bd3','c5','c3','Nc6','Ne2','cxd4','cxd4']
  },

  // ──────────────────────────────────────────
  //  Caro-Kann Defense
  // ──────────────────────────────────────────
  {
    id:'caro_classical',
    name:'Caro-Kann — Classical',
    group:'Caro-Kann Defense',
    moves:['e4','c6','d4','d5','Nc3','dxe4','Nxe4','Bf5','Ng3','Bg6','h4','h6','Nf3','Nd7','h5','Bh7','Bd3']
  },
  {
    id:'caro_advance',
    name:'Caro-Kann — Advance',
    group:'Caro-Kann Defense',
    moves:['e4','c6','d4','d5','e5','Bf5','Nf3','e6','Be2','c5','Be3','cxd4','Nxd4','Ne7','Nd2']
  },
  {
    id:'caro_exchange',
    name:'Caro-Kann — Exchange',
    group:'Caro-Kann Defense',
    moves:['e4','c6','d4','d5','exd5','cxd5','Bd3','Nc6','c3','Nf6','Bf4','Bg4','Qb3','Qd7','Nd2']
  },
  {
    id:'caro_panov',
    name:'Caro-Kann — Panov Attack',
    group:'Caro-Kann Defense',
    moves:['e4','c6','d4','d5','exd5','cxd5','c4','Nf6','Nc3','e6','Nf3','Bb4','cxd5','Nxd5','Bd2']
  },

  // ──────────────────────────────────────────
  //  Other 1.e4 responses
  // ──────────────────────────────────────────
  {
    id:'pirc',
    name:'Pirc Defense — Classical',
    group:'Other 1.e4',
    moves:['e4','d6','d4','Nf6','Nc3','g6','Nf3','Bg7','Be2','O-O','O-O','c6','a4','a5','h3']
  },
  {
    id:'alekhine',
    name:"Alekhine's Defense",
    group:'Other 1.e4',
    moves:['e4','Nf6','e5','Nd5','d4','d6','Nf3','dxe5','Nxe5','g6','Bc4','c6','O-O','Bg7','Re1']
  },
  {
    id:'scandinavian',
    name:'Scandinavian Defense',
    group:'Other 1.e4',
    moves:['e4','d5','exd5','Qxd5','Nc3','Qa5','d4','Nf6','Nf3','Bf5','Bc4','e6','Bd2','Qb6','Qe2']
  },

  // ──────────────────────────────────────────
  //  1.d4 openings
  // ──────────────────────────────────────────
  {
    id:'qgd',
    name:"Queen's Gambit Declined — Orthodox",
    group:"Queen's Pawn",
    moves:['d4','d5','c4','e6','Nc3','Nf6','Bg5','Be7','e3','O-O','Nf3','h6','Bh4','b6','Bd3']
  },
  {
    id:'qga',
    name:"Queen's Gambit Accepted",
    group:"Queen's Pawn",
    moves:['d4','d5','c4','dxc4','Nf3','Nf6','e3','e6','Bxc4','c5','O-O','a6','Qe2','Nc6','dxc5']
  },
  {
    id:'slav',
    name:'Slav Defense',
    group:"Queen's Pawn",
    moves:['d4','d5','c4','c6','Nf3','Nf6','Nc3','dxc4','a4','Bf5','e3','e6','Bxc4','Bb4','O-O','O-O']
  },
  {
    id:'semi_slav',
    name:'Semi-Slav Defense',
    group:"Queen's Pawn",
    moves:['d4','d5','c4','c6','Nc3','Nf6','Nf3','e6','e3','Nbd7','Bd3','dxc4','Bxc4','b5','Bd3','Bb7']
  },
  {
    id:'nimzo_indian',
    name:'Nimzo-Indian — Classical',
    group:'Indian Defenses',
    moves:['d4','Nf6','c4','e6','Nc3','Bb4','e3','O-O','Bd3','d5','Nf3','c5','O-O','Nc6','a3','Bxc3']
  },
  {
    id:'queens_indian',
    name:"Queen's Indian Defense",
    group:'Indian Defenses',
    moves:['d4','Nf6','c4','e6','Nf3','b6','g3','Bb7','Bg2','Be7','O-O','O-O','Nc3','Ne4','Qc2','Nxc3']
  },
  {
    id:'kings_indian',
    name:"King's Indian Defense — Classical",
    group:'Indian Defenses',
    moves:['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','Nf3','O-O','Be2','e5','O-O','Nc6','d5','Ne7']
  },
  {
    id:'kings_indian_saemisch',
    name:"King's Indian Defense — Sämisch",
    group:'Indian Defenses',
    moves:['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','f3','O-O','Be3','e5','d5','Nh5','Qd2','Qh4','g3']
  },
  {
    id:'grunfeld',
    name:'Grünfeld Defense — Exchange',
    group:'Indian Defenses',
    moves:['d4','Nf6','c4','g6','Nc3','d5','cxd5','Nxd5','e4','Nxc3','bxc3','Bg7','Nf3','c5','Be3','Qa5']
  },
  {
    id:'benoni',
    name:'Modern Benoni',
    group:'Indian Defenses',
    moves:['d4','Nf6','c4','c5','d5','e6','Nc3','exd5','cxd5','d6','e4','g6','Nf3','Bg7','Be2','O-O','O-O']
  },
  {
    id:'dutch_leningrad',
    name:'Dutch Defense — Leningrad',
    group:"Queen's Pawn",
    moves:['d4','f5','g3','Nf6','Bg2','g6','Nf3','Bg7','O-O','O-O','c4','d6','Nc3','Qe8','d5']
  },
  {
    id:'london',
    name:'London System',
    group:"Queen's Pawn",
    moves:['d4','d5','Nf3','Nf6','Bf4','e6','e3','Bd6','Bg3','O-O','Nbd2','c5','c3','Nc6','Bd3']
  },
  {
    id:'trompowsky',
    name:'Trompowsky Attack',
    group:"Queen's Pawn",
    moves:['d4','Nf6','Bg5','d5','Bxf6','exf6','e3','Bd6','c4','c6','Nc3','O-O','Bd3','Re8']
  },

  // ──────────────────────────────────────────
  //  Flank & hypermodern openings
  // ──────────────────────────────────────────
  {
    id:'english',
    name:'English Opening — Symmetrical',
    group:'Flank Openings',
    moves:['c4','c5','Nc3','Nf6','Nf3','Nc6','g3','g6','Bg2','Bg7','O-O','O-O','d4','cxd4','Nxd4']
  },
  {
    id:'english_reversed_sicilian',
    name:'English Opening — Reversed Sicilian',
    group:'Flank Openings',
    moves:['c4','e5','Nc3','Nf6','Nf3','Nc6','g3','d5','cxd5','Nxd5','Bg2','Nb6','O-O','Be7','b3']
  },
  {
    id:'reti',
    name:'Réti Opening',
    group:'Flank Openings',
    moves:['Nf3','d5','g3','c6','Bg2','Bg4','b3','Nd7','Bb2','e5','O-O','Bd6','d3','Ngf6','Nbd2']
  },
  {
    id:'catalan',
    name:'Catalan Opening — Open',
    group:'Flank Openings',
    moves:['d4','Nf6','c4','e6','g3','d5','Bg2','Be7','Nf3','O-O','O-O','dxc4','Qc2','a6','Qxc4','b5']
  },
  {
    id:'kings_indian_attack',
    name:"King's Indian Attack",
    group:'Flank Openings',
    moves:['Nf3','d5','g3','Nf6','Bg2','c6','O-O','Bg4','d3','Nbd7','Nbd2','e5','e4','dxe4','dxe4']
  },

];
