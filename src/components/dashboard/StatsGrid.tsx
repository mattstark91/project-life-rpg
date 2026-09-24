import { Dumbbell, HeartPulse, BrainCircuit, Sparkles, Shield, Users2, Zap, Frown, Heart, Smile, Star } from "lucide-react"
import type { PlayerStats } from "@/types/player"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { Card } from "@/components/ui/Card"

const config: { key: keyof PlayerStats; label: string; icon: typeof Dumbbell; color: string }[] = [
  { key: "forza", label: "Forza", icon: Dumbbell, color: "from-danger to-orange-400" },
  { key: "resistenza", label: "Resistenza", icon: Shield, color: "from-success to-emerald-300" },
  { key: "intelligenza", label: "Intelligenza", icon: BrainCircuit, color: "from-electric to-electric-soft" },
  { key: "carisma", label: "Carisma", icon: Sparkles, color: "from-gold to-gold-soft" },
  { key: "disciplina", label: "Disciplina", icon: HeartPulse, color: "from-violet to-violet-soft" },
  { key: "empatia", label: "Empatia", icon: Users2, color: "from-pink-400 to-rose-300" },
  { key: "energia", label: "Energia", icon: Zap, color: "from-electric-soft to-electric-glow" },
  { key: "stress", label: "Stress", icon: Frown, color: "from-danger to-red-400" },
  { key: "salute", label: "Salute", icon: Heart, color: "from-success to-teal-300" },
  { key: "felicita", label: "Felicita", icon: Smile, color: "from-gold-soft to-yellow-200" },
  { key: "reputazione", label: "Reputazione", icon: Star, color: "from-violet-soft to-fuchsia-300" },
]

// Griglia completa delle 11 statistiche del giocatore, ognuna con barra animata
export function StatsGrid({ stats }: { stats: PlayerStats }) {
  return (
    <Card>
      <h3 className="mb-4 font-display text-lg font-semibold text-white">Statistiche del Personaggio</h3>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        {config.map(({ key, label, icon: Icon, color }) => (
          <div key={key} className="flex items-center gap-3">
            <Icon className="h-4 w-4 shrink-0 text-white/60" />
            <div className="flex-1">
              <ProgressBar value={stats[key]} colorClass={color} label={label} height="sm" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
