import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Player } from "@/types/player"
import { mockPlayer } from "@/data/mockPlayer"
import { applicaXp } from "@/lib/xp"
import { clampStat } from "@/lib/utils"

interface PlayerState {
  player: Player
  /** Aggiunge XP e denaro, gestendo automaticamente il level up */
  guadagnaRicompensa: (xp: number, denaro: number, statBoost?: Partial<Record<keyof Player["stats"], number>>) => void
  aggiornaStat: (stat: keyof Player["stats"], delta: number) => void
  spendiDenaro: (importo: number) => boolean
  resetPlayer: () => void
}

// Store del giocatore, persistito in localStorage cosi lo stato di gioco
// sopravvive ai refresh anche prima di collegare Firestore.
export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      player: mockPlayer,

      guadagnaRicompensa: (xp, denaro, statBoost) => {
        set((state) => {
          const risultato = applicaXp(state.player.livello, state.player.xp, xp)
          const nuoveStats = { ...state.player.stats }

          if (statBoost) {
            for (const chiave in statBoost) {
              const key = chiave as keyof Player["stats"]
              const delta = statBoost[key] ?? 0
              nuoveStats[key] = clampStat(nuoveStats[key] + delta)
            }
          }

          return {
            player: {
              ...state.player,
              livello: risultato.livello,
              xp: risultato.xp,
              xpProssimoLivello: risultato.xpProssimoLivello,
              denaro: state.player.denaro + denaro,
              stats: nuoveStats,
            },
          }
        })
      },

      aggiornaStat: (stat, delta) => {
        set((state) => ({
          player: {
            ...state.player,
            stats: { ...state.player.stats, [stat]: clampStat(state.player.stats[stat] + delta) },
          },
        }))
      },

      spendiDenaro: (importo) => {
        const { player } = get()
        if (player.denaro < importo) return false
        set({ player: { ...player, denaro: player.denaro - importo } })
        return true
      },

      resetPlayer: () => set({ player: mockPlayer }),
    }),
    { name: "plrpg-player" }
  )
)
