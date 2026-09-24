import type { Transaction } from "@/types/economy"

export const mockTransactions: Transaction[] = [
  { id: "t1", tipo: "entrata", categoria: "Stipendio", importo: 1800, data: new Date(Date.now() - 2 * 86400000).toISOString(), descrizione: "Stipendio mensile" },
  { id: "t2", tipo: "spesa", categoria: "Affitto", importo: -650, data: new Date(Date.now() - 2 * 86400000).toISOString(), descrizione: "Affitto casa" },
  { id: "t3", tipo: "spesa", categoria: "Cibo", importo: -120, data: new Date(Date.now() - 86400000).toISOString(), descrizione: "Spesa settimanale" },
  { id: "t4", tipo: "investimento", categoria: "ETF", importo: -300, data: new Date(Date.now() - 86400000).toISOString(), descrizione: "PAC mensile" },
  { id: "t5", tipo: "risparmio", categoria: "Fondo Emergenza", importo: 150, data: new Date().toISOString(), descrizione: "Accantonamento" },
]
