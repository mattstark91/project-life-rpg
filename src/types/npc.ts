// Tipi relativi agli NPC (personaggi non giocanti)

export interface DialogueEntry {
  id: string
  data: string
  testo: string
  daNpc: boolean
}

export interface Npc {
  id: string
  nome: string
  ruolo: string
  avatarUrl?: string
  rapporto: number
  affinita: number
  ultimoIncontro?: string
  luogoId?: string
  cronologiaDialoghi: DialogueEntry[]
}
