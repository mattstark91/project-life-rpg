import { useState } from "react"
import { motion } from "framer-motion"
import { useMissionStore } from "@/store/useMissionStore"
import { MissionCard } from "@/components/missions/MissionCard"
import { cn } from "@/lib/utils"
import type { MissionCategory } from "@/types/mission"

const tabs: { id: MissionCategory; label: string }[] = [
  { id: "principale", label: "Missione Principale" },
  { id: "secondaria", label: "Missioni Secondarie" },
  { id: "giornaliera", label: "Missioni Giornaliere" },
]

export default function Missions() {
  const { missions } = useMissionStore()
  const [tab, setTab] = useState<MissionCategory>("principale")
  const filtrate = missions.filter((m) => m.categoria === tab)

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Registro Missioni</h1>
        <p className="text-sm text-muted">Gestisci obiettivi principali, secondari e la routine quotidiana.</p>
      </div>

      <div className="flex gap-2 border-b border-white/5">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "relative px-4 py-2.5 text-sm font-medium transition-colors",
              tab === t.id ? "text-white" : "text-muted hover:text-white/80"
            )}
          >
            {t.label}
            {tab === t.id && (
              <motion.div layoutId="tab-underline" className="absolute inset-x-0 -bottom-px h-0.5 bg-electric shadow-glow" />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtrate.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-muted">Nessuna missione in questa categoria al momento.</p>
        )}
        {filtrate.map((m) => (
          <MissionCard key={m.id} mission={m} />
        ))}
      </div>
    </div>
  )
}
