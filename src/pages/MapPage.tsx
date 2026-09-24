import { useState } from "react"
import { motion } from "framer-motion"
import {
  Home, Briefcase, Dumbbell, Music, Goal, Clapperboard, Beer, ShoppingCart, type LucideIcon,
} from "lucide-react"
import { mockPlaces } from "@/data/mockPlaces"
import { useMissionStore } from "@/store/useMissionStore"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

const icone: Record<string, LucideIcon> = {
  Home, Briefcase, Dumbbell, Music, Goal, Clapperboard, Beer, ShoppingCart,
}

// Mappa open world: marker posizionati su una griglia stile GTA, ogni luogo puo contenere missioni
export default function MapPage() {
  const { missions } = useMissionStore()
  const [attivo, setAttivo] = useState<string | null>(null)
  const luogo = mockPlaces.find((p) => p.id === attivo)

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Mappa della Citta</h1>
        <p className="text-sm text-muted">Esplora i luoghi disponibili e le missioni collegate.</p>
      </div>

      <div className="hud-panel relative aspect-[4/3] w-full overflow-hidden bg-panel/40">
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {mockPlaces.map((p) => {
          const Icon = icone[p.icona] ?? Home
          const numMissioni = missions.filter((m) => p.missioniDisponibili.includes(m.id) && m.stato !== "completata").length
          return (
            <motion.button
              key={p.id}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAttivo(p.id)}
              style={{ left: `${p.coordinate.x}%`, top: `${p.coordinate.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 shadow-lg"
                style={{ borderColor: p.colore, backgroundColor: `${p.colore}22` }}
              >
                <Icon className="h-5 w-5" style={{ color: p.colore }} />
                {numMissioni > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[9px] font-bold">
                    {numMissioni}
                  </span>
                )}
              </div>
              <p className="mt-1 text-center text-[10px] font-medium text-white/80">{p.nome}</p>
            </motion.button>
          )
        })}
      </div>

      {luogo && (
        <Card>
          <h3 className="font-display text-lg font-semibold text-white">{luogo.nome}</h3>
          <p className="mt-1 text-sm text-white/60">{luogo.descrizione}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {luogo.missioniDisponibili.length === 0 && <Badge tone="neutral">Nessuna missione qui al momento</Badge>}
            {luogo.missioniDisponibili.map((mid) => {
              const m = missions.find((x) => x.id === mid)
              if (!m) return null
              return <Badge key={mid} tone={m.stato === "completata" ? "success" : "electric"}>{m.titolo}</Badge>
            })}
          </div>
        </Card>
      )}
    </div>
  )
}
