import { motion } from "framer-motion"
import { Play, MapPin, Coins, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"
import type { Mission } from "@/types/mission"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

// Card "Continua Missione" in stile schermata di caricamento GTA
export function ContinueMissionCard({ mission }: { mission?: Mission }) {
  const navigate = useNavigate()

  if (!mission) {
    return (
      <div className="hud-panel flex flex-col items-center justify-center gap-2 p-8 text-center">
        <p className="font-display text-lg text-white">Nessuna missione principale attiva</p>
        <p className="text-sm text-muted">Vai al registro missioni per iniziarne una nuova.</p>
        <Button variant="secondary" onClick={() => navigate("/missioni")}>
          Vai alle Missioni
        </Button>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="hud-panel relative overflow-hidden p-6 md:p-8"
    >
      <div className="absolute inset-0 bg-grid-fade opacity-80" />
      <div className="absolute inset-0 bg-scanlines opacity-40" />
      <div className="relative">
        <Badge tone="violet">Missione Principale</Badge>
        <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">{mission.titolo}</h2>
        <p className="mt-2 max-w-xl text-sm text-white/70">{mission.descrizione}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted">
          {mission.luogoId && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {mission.luogoId}
            </span>
          )}
          <span className="flex items-center gap-1 text-electric-glow">
            <Star className="h-3.5 w-3.5" /> {mission.ricompensa.xp} XP
          </span>
          <span className="flex items-center gap-1 text-gold">
            <Coins className="h-3.5 w-3.5" /> {mission.ricompensa.denaro}
          </span>
        </div>

        <Button className="mt-6 gap-2" size="lg" onClick={() => navigate("/missioni")}>
          <Play className="h-4 w-4" /> Continua Missione
        </Button>
      </div>
    </motion.div>
  )
}
