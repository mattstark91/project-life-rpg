import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App"
import "@/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Registra il service worker (vedi public/sw.js) solo in produzione:
// in sviluppo (npm run dev) lo saltiamo per evitare che la cache "nasconda"
// le modifiche che stai facendo al codice.
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.error("Registrazione service worker fallita:", err)
    })
  })
}
