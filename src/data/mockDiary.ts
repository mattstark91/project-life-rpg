import type { DiaryEntry } from "@/types/diary"

export const mockDiary: DiaryEntry[] = [
  { id: "e1", data: new Date().toISOString(), allenamento: "Palestra - Push Day", lavoro: "8h - Sprint Review", uscite: "Cena con Luca", spese: 35, umore: 78, note: "Giornata produttiva, buona energia." },
  { id: "e2", data: new Date(Date.now() - 86400000).toISOString(), allenamento: "Riposo", lavoro: "6h - Bug fixing", spese: 12, umore: 55, note: "Un po di stress ma gestibile." },
]
