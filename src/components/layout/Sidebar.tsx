import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import {
  LayoutDashboard, Swords, BrainCircuit, Backpack, Trophy,
  Users, MapPinned, BarChart3, BookOpenText, Settings, ChevronLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useUIStore } from "@/store/useUIStore"

const voci = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/missioni", label: "Missioni", icon: Swords },
  { to: "/abilita", label: "Abilita", icon: BrainCircuit },
  { to: "/inventario", label: "Inventario", icon: Backpack },
  { to: "/achievement", label: "Achievement", icon: Trophy },
  { to: "/npc", label: "NPC", icon: Users },
  { to: "/mappa", label: "Mappa", icon: MapPinned },
  { to: "/statistiche", label: "Statistiche", icon: BarChart3 },
  { to: "/diario", label: "Diario", icon: BookOpenText },
  { to: "/impostazioni", label: "Impostazioni", icon: Settings },
]

// Sidebar di navigazione principale, in stile menu Persona 5 / GTA pause menu
export function Sidebar() {
  const { sidebarAperta, toggleSidebar } = useUIStore()

  return (
    <motion.aside
      animate={{ width: sidebarAperta ? 240 : 76 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="relative hidden shrink-0 flex-col border-r border-white/5 bg-panel/60 backdrop-blur-md md:flex"
    >
      <div className="flex h-16 items-center gap-2 border-b border-white/5 px-4">
        <div className="h-8 w-8 shrink-0 rounded bg-gradient-to-br from-electric to-violet shadow-glow" />
        {sidebarAperta && (
          <span className="truncate font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
            Life RPG
          </span>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-4">
        {voci.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-electric/15 text-white border-l-2 border-electric"
                  : "text-muted hover:bg-white/5 hover:text-white border-l-2 border-transparent"
              )
            }
          >
            <Icon className="h-[18px] w-[18px] shrink-0" />
            {sidebarAperta && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center gap-2 border-t border-white/5 py-3 text-muted hover:text-white"
      >
        <ChevronLeft className={cn("h-4 w-4 transition-transform", !sidebarAperta && "rotate-180")} />
        {sidebarAperta && <span className="text-xs">Comprimi</span>}
      </button>
    </motion.aside>
  )
}
