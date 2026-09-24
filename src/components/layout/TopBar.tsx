import { Bell, Coins, Zap } from "lucide-react"
import { usePlayerStore } from "@/store/usePlayerStore"
import { formatMoney } from "@/lib/utils"
import { percentualeXp } from "@/lib/xp"
import { ProgressBar } from "@/components/ui/ProgressBar"

// Barra HUD superiore sempre visibile: livello, XP, denaro, energia, notifiche
export function TopBar() {
  const { player } = usePlayerStore()
  const percXp = percentualeXp(player.xp, player.xpProssimoLivello)

  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b border-white/5 bg-panel/60 px-4 backdrop-blur-md md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet font-display text-sm font-bold shadow-glow">
          {player.livello}
        </div>
        <div className="min-w-0 w-40 sm:w-56">
          <p className="truncate font-display text-sm font-semibold text-white">{player.nome}</p>
          <ProgressBar value={percXp} colorClass="from-electric to-violet" showValue={false} height="sm" />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden items-center gap-1.5 text-gold sm:flex">
          <Coins className="h-4 w-4" />
          <span className="font-mono text-sm">{formatMoney(player.denaro)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-electric-glow">
          <Zap className="h-4 w-4" />
          <span className="font-mono text-sm">{player.stats.energia}</span>
        </div>
        <button className="relative rounded-full p-2 text-muted hover:bg-white/5 hover:text-white">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
        </button>
      </div>
    </header>
  )
}
