import type { Place } from "@/types/place"

export const mockPlaces: Place[] = [
  { id: "casa", nome: "Casa", descrizione: "Il tuo rifugio. Riposa e pianifica.", icona: "Home", coordinate: { x: 20, y: 30 }, missioniDisponibili: ["m-giornaliera-2"], colore: "#2E6BFF" },
  { id: "lavoro", nome: "Ufficio", descrizione: "Dove costruisci la tua carriera.", icona: "Briefcase", coordinate: { x: 55, y: 20 }, missioniDisponibili: ["m-principale-1"], colore: "#8B3CFF" },
  { id: "palestra", nome: "Palestra", descrizione: "Forgia il tuo corpo.", icona: "Dumbbell", coordinate: { x: 75, y: 45 }, missioniDisponibili: ["m-giornaliera-1"], colore: "#FF3B5C" },
  { id: "scuola-ballo", nome: "Scuola di Ballo", descrizione: "Migliora carisma e portamento.", icona: "Music", coordinate: { x: 35, y: 60 }, missioniDisponibili: ["m-secondaria-2"], colore: "#FFC24B" },
  { id: "campo-calcio", nome: "Campo da Calcio", descrizione: "Sport di squadra e sfogo.", icona: "Goal", coordinate: { x: 15, y: 75 }, missioniDisponibili: [], colore: "#33E2A0" },
  { id: "cinema", nome: "Cinema", descrizione: "Relax e ricarica mentale.", icona: "Clapperboard", coordinate: { x: 65, y: 70 }, missioniDisponibili: [], colore: "#A868FF" },
  { id: "bar", nome: "Bar", descrizione: "Ritrovo sociale con gli amici.", icona: "Beer", coordinate: { x: 50, y: 85 }, missioniDisponibili: ["m-secondaria-1"], colore: "#FFC24B" },
  { id: "supermercato", nome: "Supermercato", descrizione: "Spese quotidiane.", icona: "ShoppingCart", coordinate: { x: 85, y: 80 }, missioniDisponibili: [], colore: "#5C8BFF" },
]
