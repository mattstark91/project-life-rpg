import type { Npc } from "@/types/npc"

export const mockNpcs: Npc[] = [
  {
    id: "npc-luca",
    nome: "Luca Ferrari",
    ruolo: "Migliore Amico",
    rapporto: 82,
    affinita: 90,
    ultimoIncontro: new Date(Date.now() - 86400000).toISOString(),
    luogoId: "bar",
    cronologiaDialoghi: [
      { id: "d1", data: new Date(Date.now() - 86400000).toISOString(), testo: "Dai che stasera si esce, ne hai bisogno.", daNpc: true },
    ],
  },
  {
    id: "npc-sara",
    nome: "Sara Conti",
    ruolo: "Collega",
    rapporto: 55,
    affinita: 60,
    ultimoIncontro: new Date(Date.now() - 3 * 86400000).toISOString(),
    luogoId: "lavoro",
    cronologiaDialoghi: [],
  },
  {
    id: "npc-marco",
    nome: "Marco Belli",
    ruolo: "Personal Trainer",
    rapporto: 40,
    affinita: 50,
    ultimoIncontro: new Date(Date.now() - 2 * 86400000).toISOString(),
    luogoId: "palestra",
    cronologiaDialoghi: [],
  },
]
