import { useState } from "react"
import { mockInventory } from "@/data/mockInventory"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { cn, formatMoney } from "@/lib/utils"
import type { ItemCategory } from "@/types/inventory"
import { Car, Shirt, Cpu, Gem, Star } from "lucide-react"

const categorie: { id: ItemCategory | "tutti"; label: string; icon: typeof Car }[] = [
  { id: "tutti", label: "Tutti", icon: Star },
  { id: "auto", label: "Auto", icon: Car },
  { id: "vestiti", label: "Vestiti", icon: Shirt },
  { id: "tecnologia", label: "Tecnologia", icon: Cpu },
  { id: "collezioni", label: "Collezioni", icon: Gem },
  { id: "speciale", label: "Speciali", icon: Star },
]

const raritaTone: Record<string, "neutral" | "electric" | "violet" | "gold"> = {
  comune: "neutral",
  raro: "electric",
  epico: "violet",
  leggendario: "gold",
}

export default function Inventory() {
  const [filtro, setFiltro] = useState<ItemCategory | "tutti">("tutti")
  const items = mockInventory.filter((i) => filtro === "tutti" || i.categoria === filtro)

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Inventario</h1>
        <p className="text-sm text-muted">Auto, vestiti, tecnologia e oggetti raccolti nel corso della partita.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categorie.map((c) => (
          <button
            key={c.id}
            onClick={() => setFiltro(c.id)}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              filtro === c.id ? "border-electric/50 bg-electric/15 text-white" : "border-white/10 text-muted hover:text-white"
            )}
          >
            <c.icon className="h-3.5 w-3.5" /> {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <p className="font-display text-base font-semibold text-white">{item.nome}</p>
              <Badge tone={raritaTone[item.rarita]}>{item.rarita}</Badge>
            </div>
            <p className="text-xs text-white/60">{item.descrizione}</p>
            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-gold">{formatMoney(item.valore)}</span>
              {item.equipaggiato && <Badge tone="success">Equipaggiato</Badge>}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
