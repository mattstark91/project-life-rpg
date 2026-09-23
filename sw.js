// Service Worker di Project Life RPG
//
// Cos'e', in parole semplici: e' uno "script guardiano" che il telefono tiene
// in esecuzione in background anche a browser chiuso. Il suo compito e':
//  1. Salvare una copia dei file dell'app sul telefono (cache)
//  2. La prossima volta che apri l'app, mostrarla ISTANTANEAMENTE usando la copia
//     salvata, invece di aspettare che scarichi tutto da internet
//  3. Aggiornare la copia salvata in background quando c'e' connessione
//
// Questo e' cio' che rende un'app "installata" diversa da un semplice sito:
// si apre subito, funziona anche senza rete, non ha la barra degli indirizzi.

const CACHE_NAME = "life-rpg-cache-v1"

// File "essenziali" da salvare subito all'installazione
const CORE_ASSETS = ["/", "/manifest.json", "/icon-192.png", "/icon-512.png"]

// Passo 1: installazione. Scarica e salva i file essenziali.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  )
  self.skipWaiting() // attiva subito la nuova versione, senza aspettare la chiusura dell'app
})

// Passo 2: attivazione. Elimina eventuali versioni vecchie della cache.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((chiavi) =>
      Promise.all(
        chiavi
          .filter((chiave) => chiave !== CACHE_NAME)
          .map((chiave) => caches.delete(chiave))
      )
    )
  )
  self.clients.claim()
})

// Passo 3: ogni volta che l'app chiede un file (una pagina, un'immagine, uno
// script), rispondiamo prima con la copia salvata (velocissima), poi in
// background andiamo a controllare se ce n'e' una piu' recente da salvare.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return

  event.respondWith(
    caches.match(event.request).then((rispostaSalvata) => {
      const richiestaDiRete = fetch(event.request)
        .then((rispostaFresca) => {
          if (rispostaFresca && rispostaFresca.status === 200) {
            const copia = rispostaFresca.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia))
          }
          return rispostaFresca
        })
        .catch(() => rispostaSalvata) // offline: usa la copia salvata

      return rispostaSalvata || richiestaDiRete
    })
  )
})
