import { mockAchievements } from "@/data/mockAchievements"
import { Card } from "@/components/ui/Card"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { Badge } from "@/components/ui/Badge"
import { Trophy, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { AchievementTier } from "@/types/achievement"

const tierStyle: Record<AchievementTier, { color: string; label: string }> = {
  bronzo: { color: "from-orange-700 to-orange-400", label: "Bronzo" },
  argento: { color: "from-slate-400 to-slate-200", label: "Argento" },
  oro: { color: "from-gold to-gold-soft", label: "Oro" },
  platino: { color: "from-electric-glow via-violet-soft to-white", label: "Platino" },
}

// Sistema achievement in stile PlayStation Trophies
export default function Achievements() {
  const sbloccati = mockAchievements.filter((a) => a.sbloccato).length

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-white">Achievement</h1>
          <p className="text-sm text-muted">{sbloccati} / {mockAchievements.length} sbloccati</p>
        </div>
        <Trophy className="h-8 w-8 text-gold" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {mockAchievements.map((a) => {
          const nascosto = a.segreto && !a.sbloccato
          const style = tierStyle[a.tier]
          return (
            <Card key={a.id} className={cn("flex items-center gap-4", !a.sbloccato && "opacity-70")}>
              <div className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br", style.color)}>
                {a.sbloccato ? <Trophy className="h-6 w-6 text-void" /> : <Lock className="h-5 w-5 text-void/70" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-display text-base font-semibold text-white">
                    {nascosto ? "Achievement Segreto" : a.titolo}
                  </p>
                  <Badge tone={a.tier === "oro" || a.tier === "platino" ? "gold" : "neutral"}>{style.label}</Badge>
                </div>
                <p className="text-xs text-white/60">{nascosto ? "Continua a giocare per scoprirlo." : a.descrizione}</p>
                {!a.sbloccato && <div className="mt-2"><ProgressBar value={a.progresso} height="sm" colorClass={style.color} showValue={false} /></div>}
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
