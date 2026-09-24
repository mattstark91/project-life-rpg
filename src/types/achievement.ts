// Tipi relativi al sistema achievement in stile PlayStation

export type AchievementTier = "bronzo" | "argento" | "oro" | "platino"

export interface Achievement {
  id: string
  titolo: string
  descrizione: string
  tier: AchievementTier
  sbloccato: boolean
  sbloccatoIl?: string
  progresso: number
  icona: string
  segreto?: boolean
}
