// Tipi relativi alla mappa / open world

export interface Place {
  id: string
  nome: string
  descrizione: string
  icona: string
  coordinate: { x: number; y: number }
  missioniDisponibili: string[]
  colore: string
}
