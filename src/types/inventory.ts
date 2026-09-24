// Tipi relativi allinventario del giocatore

export type ItemCategory = "auto" | "vestiti" | "tecnologia" | "collezioni" | "speciale"
export type ItemRarity = "comune" | "raro" | "epico" | "leggendario"

export interface InventoryItem {
  id: string
  nome: string
  categoria: ItemCategory
  rarita: ItemRarity
  descrizione: string
  iconUrl?: string
  valore: number
  equipaggiato?: boolean
  acquisitoIl: string
}
