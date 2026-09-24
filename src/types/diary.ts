// Tipi relativi al diario / calendario giornaliero

export interface DiaryEntry {
  id: string
  data: string
  allenamento?: string
  lavoro?: string
  uscite?: string
  spese?: number
  umore: number
  note?: string
  fotoUrl?: string
}
