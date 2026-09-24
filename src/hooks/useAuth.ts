import { useEffect, useState } from "react"
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"

/**
 * Hook di autenticazione: espone lutente Firebase corrente e le azioni
 * di login/logout con Google. Utente unico: non e previsto un flusso
 * di registrazione separato, il primo login crea implicitamente il profilo.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const loginConGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
  }

  const logout = async () => {
    await signOut(auth)
  }

  return { user, loading, loginConGoogle, logout }
}
