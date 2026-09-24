// Tipi relativi al sistema missioni

export type MissionCategory = "principale" | "secondaria" | "giornaliera"
export type MissionStatus = "disponibile" | "attiva" | "completata" | "fallita" | "bloccata"
export type MissionDifficulty = "facile" | "media" | "difficile" | "estrema"

export interface MissionReward {
  xp: number
  denaro: number
  statBoost?: Partial<Record<string, number>>
  itemId?: string
}

export interface Mission {
  id: string
  titolo: string
  descrizione: string
  categoria: MissionCategory
  luogoId?: string
  ricompensa: MissionReward
  durataMinuti: number
  stato: MissionStatus
  difficulty: MissionDifficulty
  scadenza?: string
  npcId?: string
}
