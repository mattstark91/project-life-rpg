import { motion } from "framer-motion"
import { Chrome } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/Button"

// Schermata di accesso: unico utente, login con Google.
// Stile "title screen" di un videogioco: sfondo scuro, logo centrale, glow.
export default function Login() {
  const { loginConGoogle } = useAuth()

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-void px-4">
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute inset-0 bg-scanlines opacity-30" />
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex w-full max-w-sm flex-col items-center text-center"
      >
        <div className="mb-6 h-16 w-16 rounded-xl bg-gradient-to-br from-electric via-violet to-gold shadow-glow" />
        <h1 className="font-display text-4xl font-bold uppercase tracking-[0.15em] text-white">
          Project Life <span className="text-gold">RPG</span>
        </h1>
        <p className="mt-3 text-sm text-muted">
          La tua vita reale, trasformata in un gioco di ruolo. Accedi per continuare la partita.
        </p>

        <Button size="lg" className="mt-8 w-full gap-3" onClick={loginConGoogle}>
          <Chrome className="h-5 w-5" /> Accedi con Google
        </Button>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/30">
          Premi Start per iniziare
        </p>
      </motion.div>
    </div>
  )
}
