import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { usePlayerStore } from "@/store/usePlayerStore"
import { mockTransactions } from "@/data/mockEconomy"
import { Card } from "@/components/ui/Card"
import { formatMoney } from "@/lib/utils"

// Storico XP simulato per il grafico (in produzione arriverebbe da Firestore)
const storicoXp = [
  { giorno: "Lun", xp: 40 }, { giorno: "Mar", xp: 65 }, { giorno: "Mer", xp: 30 },
  { giorno: "Gio", xp: 90 }, { giorno: "Ven", xp: 55 }, { giorno: "Sab", xp: 120 }, { giorno: "Dom", xp: 75 },
]

export default function Stats() {
  const { player } = usePlayerStore()
  const entrate = mockTransactions.filter((t) => t.importo > 0).reduce((s, t) => s + t.importo, 0)
  const uscite = mockTransactions.filter((t) => t.importo < 0).reduce((s, t) => s + Math.abs(t.importo), 0)

  const datiEconomia = [
    { nome: "Entrate", valore: entrate },
    { nome: "Spese", valore: uscite },
  ]

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Statistiche Generali</h1>
        <p className="text-sm text-muted">Landamento del tuo progresso nel tempo.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Card className="text-center"><p className="eyebrow">Livello</p><p className="font-display text-2xl font-bold text-white">{player.livello}</p></Card>
        <Card className="text-center"><p className="eyebrow">Denaro</p><p className="font-display text-2xl font-bold text-gold">{formatMoney(player.denaro)}</p></Card>
        <Card className="text-center"><p className="eyebrow">Skill Attive</p><p className="font-display text-2xl font-bold text-white">{player.skills.length}</p></Card>
        <Card className="text-center"><p className="eyebrow">Reputazione</p><p className="font-display text-2xl font-bold text-violet-soft">{player.stats.reputazione}</p></Card>
      </div>

      <Card>
        <h3 className="mb-4 font-display text-lg font-semibold text-white">XP Guadagnata negli Ultimi 7 Giorni</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={storicoXp}>
            <defs>
              <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2E6BFF" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#2E6BFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#26263a" />
            <XAxis dataKey="giorno" stroke="#8A8AA3" fontSize={12} />
            <YAxis stroke="#8A8AA3" fontSize={12} />
            <Tooltip contentStyle={{ background: "#12121b", border: "1px solid #26263a", borderRadius: 8 }} />
            <Area type="monotone" dataKey="xp" stroke="#2E6BFF" fill="url(#xpGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card>
        <h3 className="mb-4 font-display text-lg font-semibold text-white">Entrate vs Spese</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={datiEconomia}>
            <CartesianGrid strokeDasharray="3 3" stroke="#26263a" />
            <XAxis dataKey="nome" stroke="#8A8AA3" fontSize={12} />
            <YAxis stroke="#8A8AA3" fontSize={12} />
            <Tooltip contentStyle={{ background: "#12121b", border: "1px solid #26263a", borderRadius: 8 }} />
            <Bar dataKey="valore" fill="#FFC24B" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
