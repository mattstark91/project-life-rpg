import { create } from "zustand"

interface UIState {
  sidebarAperta: boolean
  toggleSidebar: () => void
  levelUpVisibile: boolean
  mostraLevelUp: () => void
  nascondiLevelUp: () => void
}

// Stato di interfaccia puro (non persistito): apertura sidebar, modali, toast di livello
export const useUIStore = create<UIState>((set) => ({
  sidebarAperta: true,
  toggleSidebar: () => set((state) => ({ sidebarAperta: !state.sidebarAperta })),
  levelUpVisibile: false,
  mostraLevelUp: () => set({ levelUpVisibile: true }),
  nascondiLevelUp: () => set({ levelUpVisibile: false }),
}))
