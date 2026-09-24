// Tipi relativi agli eventi casuali

export interface RandomEvent {
  id: string
  titolo: string
  descrizione: string
  icona: string
  scaduto: boolean
  missioneSpecialeId?: string
}
