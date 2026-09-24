import { createBrowserRouter } from "react-router-dom"
import { AppLayout } from "@/components/layout/AppLayout"
import ProtectedRoute from "@/router/ProtectedRoute"
import Login from "@/pages/Login"
import Dashboard from "@/pages/Dashboard"
import Missions from "@/pages/Missions"
import Skills from "@/pages/Skills"
import Inventory from "@/pages/Inventory"
import Achievements from "@/pages/Achievements"
import NPCs from "@/pages/NPCs"
import MapPage from "@/pages/MapPage"
import Stats from "@/pages/Stats"
import Diary from "@/pages/Diary"
import Settings from "@/pages/Settings"

// Definizione centralizzata delle rotte dellapplicazione
export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "missioni", element: <Missions /> },
      { path: "abilita", element: <Skills /> },
      { path: "inventario", element: <Inventory /> },
      { path: "achievement", element: <Achievements /> },
      { path: "npc", element: <NPCs /> },
      { path: "mappa", element: <MapPage /> },
      { path: "statistiche", element: <Stats /> },
      { path: "diario", element: <Diary /> },
      { path: "impostazioni", element: <Settings /> },
    ],
  },
])
