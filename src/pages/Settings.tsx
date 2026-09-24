import { useAuth } from "@/hooks/useAuth"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { usePlayerStore } from "@/store/usePlayerStore"
import { LogOut, RotateCcw } from "lucide-react"

export default function Settings() {
  const { user, logout } = useAuth()
  const { player, resetPlayer } = usePlayerStore()

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 animate-slide-up">
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Impostazioni</h1>
        <p className="text-sm text-muted">Gestisci il tuo account e i dati di gioco.</p>
      </div>

      <Card className="flex items-center gap-4">
        {user?.photoURL ? (
          <img src={user.photoURL} alt={player.nome} className="h-14 w-14 rounded-full border border-white/10" />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet font-display text-lg font-bold">
            {player.nome.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-display text-base font-semibold text-white">{user?.displayName ?? player.nome}</p>
          <p className="text-xs text-muted">{user?.email ?? "Account demo locale"}</p>
        </div>
      </Card>

      <Card className="flex flex-col gap-3">
        <p className="eyebrow">Dati di Gioco</p>
        <Button variant="secondary" className="w-fit gap-2" onClick={resetPlayer}>
          <RotateCcw className="h-4 w-4" /> Reimposta progressi demo
        </Button>
      </Card>

      <Card className="flex flex-col gap-3">
        <p className="eyebrow">Account</p>
        <Button variant="danger" className="w-fit gap-2" onClick={logout}>
          <LogOut className="h-4 w-4" /> Esci
        </Button>
      </Card>
    </div>
  )
}
