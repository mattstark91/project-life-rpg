import { RouterProvider } from "react-router-dom"
import { router } from "@/router"

// Componente radice dellapplicazione
export default function App() {
  return <RouterProvider router={router} />
}
