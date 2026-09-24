import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import type { Player } from "@/types/player"

// Scheda identita del personaggio: nome, classe, professione, citta
export function IdentityCard({ player }: { player: Player }) {
  return (
    <Card className="flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-electric via-violet to-gold text-xl font-display font-bold shadow-glow">
        {player.nome.charAt(0)}
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-xl font-bold text-white">{player.nome}</p>
        <p className="truncate text-sm text-muted">{player.professione} - {player.citta}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Badge tone="electric">{player.classe}</Badge>
          <Badge tone="neutral">{player.eta} anni</Badge>
        </div>
      </div>
    </Card>
  )
}
