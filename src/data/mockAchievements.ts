import type { Achievement } from "@/types/achievement"

export const mockAchievements: Achievement[] = [
  { id: "a1", titolo: "Primo Passo", descrizione: "Completa la tua prima missione.", tier: "bronzo", sbloccato: true, sbloccatoIl: new Date().toISOString(), progresso: 100, icona: "Footprints" },
  { id: "a2", titolo: "Settimana di Ferro", descrizione: "Completa 7 missioni giornaliere consecutive.", tier: "argento", sbloccato: false, progresso: 60, icona: "Flame" },
  { id: "a3", titolo: "Rete di Contatti", descrizione: "Raggiungi rapporto 80 con 3 NPC diversi.", tier: "oro", sbloccato: false, progresso: 33, icona: "Users" },
  { id: "a4", titolo: "Leggenda Vivente", descrizione: "Raggiungi il livello 50.", tier: "platino", sbloccato: false, progresso: 24, icona: "Crown" },
  { id: "a5", titolo: "???", descrizione: "Achievement segreto.", tier: "oro", sbloccato: false, progresso: 0, icona: "HelpCircle", segreto: true },
]
