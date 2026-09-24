import type { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

// Blocca laccesso alle rotte di gioco finche lutente non ha effettuato il login
export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-void">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-electric border-t-transparent" />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}
