import type { Player } from "@/types/player"

// Giocatore di default usato come stato iniziale / demo
export const mockPlayer: Player = {
  uid: "demo-user",
  nome: "Mattia",
  eta: 27,
  citta: "Milano",
  classe: "Stratega Urbano",
  professione: "Sviluppatore Software",
  livello: 12,
  xp: 340,
  xpProssimoLivello: 620,
  denaro: 2450,
  stats: {
    forza: 58,
    resistenza: 64,
    intelligenza: 82,
    carisma: 47,
    disciplina: 71,
    empatia: 60,
    energia: 76,
    stress: 38,
    salute: 80,
    felicita: 66,
    reputazione: 54,
  },
  skills: [
    { id: "sk-carriera", categoria: "carriera", nome: "Sviluppo Software", livello: 6, livelloMax: 10, xpCorrente: 240, xpProssimoLivello: 400, icona: "Code2" },
    { id: "sk-sociale", categoria: "sociale", nome: "Networking", livello: 3, livelloMax: 10, xpCorrente: 90, xpProssimoLivello: 220, icona: "Users" },
    { id: "sk-fitness", categoria: "fitness", nome: "Allenamento Funzionale", livello: 5, livelloMax: 10, xpCorrente: 180, xpProssimoLivello: 320, icona: "Dumbbell" },
    { id: "sk-finanza", categoria: "finanza", nome: "Gestione Capitale", livello: 4, livelloMax: 10, xpCorrente: 120, xpProssimoLivello: 260, icona: "PiggyBank" },
    { id: "sk-creativita", categoria: "creativita", nome: "Produzione Musicale", livello: 2, livelloMax: 10, xpCorrente: 40, xpProssimoLivello: 160, icona: "Palette" },
  ],
  createdAt: new Date().toISOString(),
}
