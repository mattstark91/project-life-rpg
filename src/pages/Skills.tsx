import { Code2, Users, Dumbbell, PiggyBank, Palette, type LucideIcon } from "lucide-react"
import { usePlayerStore } from "@/store/usePlayerStore"
import { Card } from "@/components/ui/Card"
import { ProgressBar } from "@/components/ui/ProgressBar"
import type { SkillCategory } from "@/types/player"

const icone: Record<string, LucideIcon> = { Code2, Users, Dumbbell, PiggyBank, Palette }

const categorie: { id: SkillCategory; label: string; color: string }[] = [
  { id: "carriera", label: "Carriera", color: "from-electric to-electric-soft" },
  { id: "sociale", label: "Sociale", color: "from-gold to-gold-soft" },
  { id: "fitness", label: "Fitness", color: "from-danger to-orange-400" },
  { id: "finanza", label: "Finanza", color: "from-success to-emerald-300" },
  { id: "creativita", label: "Creativita", color: "from-violet to-violet-soft" },
]

// Albero delle abilita, organizzato per le 5 macro-aree richieste
export default function Skills() {
  const { player } = usePlayerStore()

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Albero delle Abilita</h1>
        <p className="text-sm text-muted">Sviluppa le tue competenze in ogni area della vita.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {categorie.map((cat) => {
          const skill = player.skills.find((s) => s.categoria === cat.id)
          const Icon = skill ? icone[skill.icona] ?? Code2 : Code2
          return (
            <Card key={cat.id}>
              <div className="flex items-center gap-3">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${cat.color}`}>
                  <Icon className="h-5 w-5 text-void" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-semibold text-white">{cat.label}</p>
                  {skill ? (
                    <p className="text-xs text-muted">{skill.nome} - Livello {skill.livello}/{skill.livelloMax}</p>
                  ) : (
                    <p className="text-xs text-muted">Nessuna skill attiva</p>
                  )}
                </div>
              </div>
              {skill && (
                <div className="mt-4">
                  <ProgressBar value={(skill.xpCorrente / skill.xpProssimoLivello) * 100} colorClass={cat.color} showValue={false} />
                  <p className="mt-1 text-right text-[11px] text-muted">{skill.xpCorrente} / {skill.xpProssimoLivello} XP</p>
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
