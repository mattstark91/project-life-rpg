// Tipi relativi al giocatore (Player) e alle sue statistiche

export interface PlayerStats {
  forza: number
  resistenza: number
  intelligenza: number
  carisma: number
  disciplina: number
  empatia: number
  energia: number
  stress: number
  salute: number
  felicita: number
  reputazione: number
}

export type SkillCategory = "carriera" | "sociale" | "fitness" | "finanza" | "creativita"

export interface Skill {
  id: string
  categoria: SkillCategory
  nome: string
  livello: number
  livelloMax: number
  xpCorrente: number
  xpProssimoLivello: number
  icona: string
}

export interface Player {
  uid: string
  nome: string
  eta: number
  citta: string
  classe: string
  professione: string
  avatarUrl?: string
  livello: number
  xp: number
  xpProssimoLivello: number
  denaro: number
  stats: PlayerStats
  skills: Skill[]
  createdAt: string
}
