// Tipi relativi al sistema economico

export type TransactionType = "entrata" | "spesa" | "investimento" | "risparmio"

export interface Transaction {
  id: string
  tipo: TransactionType
  categoria: string
  importo: number
  data: string
  descrizione: string
}
