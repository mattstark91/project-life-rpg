import type { PropsWithChildren } from "react"

// TEMPORANEO: il login Google è disattivato finché non colleghiamo
// un vero progetto Firebase. Per ora si entra direttamente con i dati demo.
// Per riattivarlo in futuro, basta ripristinare il controllo con useAuth.
export default function ProtectedRoute({ children }: PropsWithChildren) {
  return <>{children}</>
}
