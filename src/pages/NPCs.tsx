import { useState } from "react"
import { useNpcStore } from "@/store/useNpcStore"
import { Card } from "@/components/ui/Card"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { Badge } from "@/components/ui/Badge"
import { formatDate, cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"

export default function NPCs() {
  const { npcs, aggiungiDialogo } = useNpcStore()
  const [selezionato, setSelezionato] = useState(npcs[0]?.id)
  const npc = npcs.find((n) => n.id === selezionato)
  const [testo, setTesto] = useState("")

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up md:flex-row">
      <div className="flex flex-col gap-3 md:w-72 md:shrink-0">
        <h1 className="font-display text-2xl font-bold text-white">Relazioni</h1>
        {npcs.map((n) => (
          <button
            key={n.id}
            onClick={() => setSelezionato(n.id)}
            className={cn(
              "hud-panel flex items-center gap-3 p-3 text-left transition-colors",
              selezionato === n.id ? "border border-electric/40" : ""
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet font-display text-sm font-bold">
              {n.nome.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{n.nome}</p>
              <p className="truncate text-xs text-muted">{n.ruolo}</p>
            </div>
          </button>
        ))}
      </div>

      {npc && (
        <Card className="flex-1">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet font-display text-xl font-bold shadow-glow">
              {npc.nome.charAt(0)}
            </div>
            <div>
              <p className="font-display text-xl font-bold text-white">{npc.nome}</p>
              <Badge tone="electric">{npc.ruolo}</Badge>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <ProgressBar value={npc.rapporto} label="Rapporto" colorClass="from-electric to-violet" />
            <ProgressBar value={npc.affinita} label="Affinita" colorClass="from-gold to-gold-soft" />
          </div>

          {npc.ultimoIncontro && (
            <p className="mt-3 text-xs text-muted">Ultimo incontro: {formatDate(npc.ultimoIncontro)}</p>
          )}

          <div className="mt-5 border-t border-white/5 pt-4">
            <p className="eyebrow mb-2">Cronologia Dialoghi</p>
            <div className="flex max-h-48 flex-col gap-2 overflow-y-auto">
              {npc.cronologiaDialoghi.length === 0 && (
                <p className="text-xs text-muted">Nessun dialogo registrato ancora.</p>
              )}
              {npc.cronologiaDialoghi.map((d) => (
                <div key={d.id} className={cn("max-w-[80%] rounded-lg px-3 py-2 text-xs", d.daNpc ? "self-start bg-white/5" : "self-end bg-electric/20")}>
                  {d.testo}
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <input
                value={testo}
                onChange={(e) => setTesto(e.target.value)}
                placeholder="Scrivi un messaggio..."
                className="flex-1 rounded-md border border-white/10 bg-panel-light px-3 py-2 text-sm outline-none focus:border-electric/50"
              />
              <button
                onClick={() => { if (testo.trim()) { aggiungiDialogo(npc.id, testo.trim()); setTesto("") } }}
                className="flex items-center gap-1.5 rounded-md bg-electric px-3 py-2 text-sm font-medium hover:shadow-glow"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
