import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Npc } from "@/types/npc"
import { mockNpcs } from "@/data/mockNpcs"

interface NpcState {
  npcs: Npc[]
  aggiungiDialogo: (npcId: string, testo: string) => void
  aumentaRapporto: (npcId: string, delta: number) => void
}

export const useNpcStore = create<NpcState>()(
  persist(
    (set) => ({
      npcs: mockNpcs,

      aggiungiDialogo: (npcId, testo) => {
        set((state) => ({
          npcs: state.npcs.map((n) =>
            n.id === npcId
              ? {
                  ...n,
                  ultimoIncontro: new Date().toISOString(),
                  cronologiaDialoghi: [
                    ...n.cronologiaDialoghi,
                    { id: crypto.randomUUID(), data: new Date().toISOString(), testo, daNpc: false },
                  ],
                }
              : n
          ),
        }))
      },

      aumentaRapporto: (npcId, delta) => {
        set((state) => ({
          npcs: state.npcs.map((n) =>
            n.id === npcId ? { ...n, rapporto: Math.max(0, Math.min(100, n.rapporto + delta)) } : n
          ),
        }))
      },
    }),
    { name: "plrpg-npcs" }
  )
)
