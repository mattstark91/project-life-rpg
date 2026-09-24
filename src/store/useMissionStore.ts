import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Mission } from "@/types/mission"
import { mockMissions } from "@/data/mockMissions"
import { usePlayerStore } from "@/store/usePlayerStore"

interface MissionState {
  missions: Mission[]
  avviaMissione: (id: string) => void
  completaMissione: (id: string) => void
  missioneAttivaPrincipale: () => Mission | undefined
}

export const useMissionStore = create<MissionState>()(
  persist(
    (set, get) => ({
      missions: mockMissions,

      avviaMissione: (id) => {
        set((state) => ({
          missions: state.missions.map((m) => (m.id === id ? { ...m, stato: "attiva" } : m)),
        }))
      },

      completaMissione: (id) => {
        const missione = get().missions.find((m) => m.id === id)
        if (!missione || missione.stato === "completata") return

        set((state) => ({
          missions: state.missions.map((m) => (m.id === id ? { ...m, stato: "completata" } : m)),
        }))

        // Applica le ricompense della missione al giocatore
        usePlayerStore.getState().guadagnaRicompensa(
          missione.ricompensa.xp,
          missione.ricompensa.denaro,
          missione.ricompensa.statBoost as never
        )
      },

      missioneAttivaPrincipale: () => {
        return get().missions.find((m) => m.categoria === "principale" && m.stato !== "completata")
      },
    }),
    { name: "plrpg-missions" }
  )
)
