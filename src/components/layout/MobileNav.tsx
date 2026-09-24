import { NavLink } from "react-router-dom"
import { LayoutDashboard, Swords, MapPinned, Trophy, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const voci = [
  { to: "/", label: "Home", icon: LayoutDashboard },
  { to: "/missioni", label: "Missioni", icon: Swords },
  { to: "/mappa", label: "Mappa", icon: MapPinned },
  { to: "/achievement", label: "Premi", icon: Trophy },
  { to: "/impostazioni", label: "Menu", icon: Menu },
]

// Barra di navigazione inferiore per mobile (iPhone / Android)
export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-around border-t border-white/5 bg-panel/95 py-2 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      {voci.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-medium uppercase tracking-wide",
              isActive ? "text-electric-glow" : "text-muted"
            )
          }
        >
          <Icon className="h-5 w-5" />
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
