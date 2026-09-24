import { useState } from "react"
import { mockDiary } from "@/data/mockDiary"
import { Card } from "@/components/ui/Card"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { formatDate, formatMoney } from "@/lib/utils"
import { Dumbbell, Briefcase, MapPin, Coins, ImagePlus } from "lucide-react"

// Diario / calendario: una entry per giorno con allenamento, lavoro, uscite, spese, umore, note, foto
export default function Diary() {
  const [entries] = useState(mockDiary)

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Diario di Bordo</h1>
        <p className="text-sm text-muted">Registra come vivi ogni giornata della tua run.</p>
      </div>

      <div className="flex flex-col gap-4">
        {entries.map((e) => (
          <Card key={e.id}>
            <div className="flex items-center justify-between">
              <p className="font-display text-base font-semibold text-white">{formatDate(e.data)}</p>
              <span className="font-mono text-xs text-muted">Umore {e.umore}/100</span>
            </div>
            <div className="mt-2"><ProgressBar value={e.umore} colorClass="from-gold to-gold-soft" showValue={false} height="sm" /></div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {e.allenamento && (
                <p className="flex items-center gap-2 text-sm text-white/80"><Dumbbell className="h-4 w-4 text-danger" /> {e.allenamento}</p>
              )}
              {e.lavoro && (
                <p className="flex items-center gap-2 text-sm text-white/80"><Briefcase className="h-4 w-4 text-electric-glow" /> {e.lavoro}</p>
              )}
              {e.uscite && (
                <p className="flex items-center gap-2 text-sm text-white/80"><MapPin className="h-4 w-4 text-violet-soft" /> {e.uscite}</p>
              )}
              {typeof e.spese === "number" && (
                <p className="flex items-center gap-2 text-sm text-white/80"><Coins className="h-4 w-4 text-gold" /> {formatMoney(e.spese)}</p>
              )}
            </div>

            {e.note && <p className="mt-3 border-t border-white/5 pt-3 text-sm italic text-white/60">{e.note}</p>}

            <button className="mt-3 flex items-center gap-1.5 text-xs text-muted hover:text-white">
              <ImagePlus className="h-3.5 w-3.5" /> Aggiungi foto del giorno
            </button>
          </Card>
        ))}
      </div>
    </div>
  )
}
