import { motion } from "framer-motion"
import { Clock, Coins, Star, MapPin, CheckCircle2, PlayCircle } from "lucide-react"
import type { Mission } from "@/types/mission"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { useMissionStore } from "@/store/useMissionStore"

const difficoltaTone: Record<Mission["difficulty"], "success" | "electric" | "gold" | "danger"> = {
  facile: "success",
  media: "electric",
  difficile: "gold",
  estrema: "danger",
}

const categoriaLabel: Record<Mission["categoria"], string> = {
  principale: "Principale",
  secondaria: "Secondaria",
  giornaliera: "Giornaliera",
}

export function MissionCard({ mission }: { mission: Mission }) {
  const { avviaMissione, completaMissione } = useMissionStore()
  const completata = mission.stato === "completata"

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="hud-panel flex flex-col gap-3 p-4"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display text-base font-semibold text-white">{mission.titolo}</p>
          <p className="mt-1 text-xs text-white/60">{mission.descrizione}</p>
        </div>
        <Badge tone={difficoltaTone[mission.difficulty]}>{mission.difficulty}</Badge>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted">
        <Badge tone="neutral">{categoriaLabel[mission.categoria]}</Badge>
        {mission.luogoId && (
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {mission.luogoId}</span>
        )}
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {mission.durataMinuti} min</span>
        <span className="flex items-center gap-1 text-electric-glow"><Star className="h-3 w-3" /> {mission.ricompensa.xp} XP</span>
        <span className="flex items-center gap-1 text-gold"><Coins className="h-3 w-3" /> {mission.ricompensa.denaro}</span>
      </div>

      <div className="mt-1 flex justify-end">
        {completata ? (
          <Badge tone="success" className="gap-1"><CheckCircle2 className="h-3 w-3" /> Completata</Badge>
        ) : mission.stato === "attiva" ? (
          <Button size="sm" onClick={() => completaMissione(mission.id)} className="gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" /> Completa
          </Button>
        ) : (
          <Button size="sm" variant="secondary" onClick={() => avviaMissione(mission.id)} className="gap-1.5">
            <PlayCircle className="h-3.5 w-3.5" /> Avvia
          </Button>
        )}
      </div>
    </motion.div>
  )
}
