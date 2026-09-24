import { usePlayerStore } from "@/store/usePlayerStore"
import { useMissionStore } from "@/store/useMissionStore"
import { IdentityCard } from "@/components/dashboard/IdentityCard"
import { ContinueMissionCard } from "@/components/dashboard/ContinueMissionCard"
import { StatsGrid } from "@/components/dashboard/StatsGrid"
import { Card } from "@/components/ui/Card"
import { formatMoney } from "@/lib/utils"
import { percentualeXp } from "@/lib/xp"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { Coins, TrendingUp } from "lucide-react"

// Home / Dashboard: il "quartier generale" del giocatore, stile schermata GTA
export default function Dashboard() {
  const { player } = usePlayerStore()
  const { missioneAttivaPrincipale } = useMissionStore()
  const percXp = percentualeXp(player.xp, player.xpProssimoLivello)

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 animate-slide-up">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <IdentityCard player={player} />

        <Card>
          <p className="eyebrow mb-2">Livello {player.livello}</p>
          <ProgressBar value={percXp} colorClass="from-electric to-violet" label="Esperienza" glow />
          <p className="mt-1 text-right text-[11px] text-muted">{player.xp} / {player.xpProssimoLivello} XP</p>
        </Card>

        <Card className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-2 text-gold">
            <Coins className="h-5 w-5" />
            <span className="font-display text-2xl font-bold">{formatMoney(player.denaro)}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-success">
            <TrendingUp className="h-3.5 w-3.5" /> Patrimonio in crescita
          </span>
        </Card>
      </div>

      <ContinueMissionCard mission={missioneAttivaPrincipale()} />

      <StatsGrid stats={player.stats} />
    </div>
  )
}
