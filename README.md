# 🎮 Project Life RPG

Trasforma la tua vita reale in un videogioco. Dashboard in stile GTA V,
menu in stile Persona 5, simulazione alla The Sims, sistema di missioni
alla Habitica, organizzato con la pulizia di Notion.

## Stack

React 18 · TypeScript · Vite · TailwindCSS · Framer Motion · React Router 6 ·
Zustand (con persistenza locale) · Firebase (Auth + Firestore + Storage) · Recharts

## Avvio rapido

```bash
npm install
npm run dev
```

L'app parte in modalità **demo** con dati mock (nessun account Firebase
richiesto): puoi navigare tutte le sezioni, completare missioni, vedere
XP e statistiche cambiare in tempo reale — tutto salvato in `localStorage`.

## Collegare Firebase (login Google + salvataggio cloud)

1. Crea un progetto su [Firebase Console](https://console.firebase.google.com).
2. Abilita **Authentication → Sign-in method → Google**.
3. Crea un **Firestore Database** (modalità produzione o test).
4. Abilita **Storage** (per le foto del diario).
5. Copia `.env.example` in `.env.local` e incolla le chiavi del tuo progetto.
6. Riavvia `npm run dev`.

> Nota: nella versione consegnata l'autenticazione Google e gli hook Firebase
> (`src/lib/firebase.ts`, `src/hooks/useAuth.ts`) sono già cablati. Player,
> missioni e NPC oggi vivono in Zustand + localStorage con dati mock realistici:
> il passo successivo naturale è collegare `usePlayerStore` / `useMissionStore`
> a Firestore (subscribe `onSnapshot` + `setDoc`) per rendere i dati persistenti
> sul cloud legati all'utente autenticato.

## Struttura del progetto

```
src/
  types/        # Tutte le entità di dominio (Player, Mission, Npc, ...)
  data/         # Dati mock per l'esperienza demo
  store/        # Stato globale Zustand (player, missioni, npc, ui)
  lib/          # firebase.ts, formula XP, utility
  hooks/        # useAuth
  components/
    ui/         # Design system: Button, Card, ProgressBar, Badge
    layout/     # Sidebar, TopBar, MobileNav, AppLayout
    dashboard/  # Componenti della Home
    missions/   # Componenti del registro missioni
  pages/        # Una pagina per ogni voce di menu
  router/       # Definizione rotte + ProtectedRoute
```

## Sezioni incluse

Dashboard · Missioni (principali/secondarie/giornaliere) · Albero Abilità
(carriera, sociale, fitness, finanza, creatività) · Inventario (auto, vestiti,
tecnologia, collezioni, oggetti speciali) · Achievement (bronzo/argento/oro/platino)
· NPC (rapporto, affinità, cronologia dialoghi) · Mappa open world (8 luoghi) ·
Statistiche (grafici XP ed economia) · Diario giornaliero · Impostazioni.

## Sistema XP

Formula progressiva in `src/lib/xp.ts`: `xpRichiesta(n) = 100 * n^1.45`,
con gestione automatica dei level-up multipli.

## 📱 Installarla su iPhone (come una vera app)

L'app e' ora una **PWA** (Progressive Web App): significa che puoi "installarla"
sulla Home dell'iPhone senza passare dall'App Store. Si apre a schermo intero,
senza barra di Safari, con la sua icona, e funziona anche offline.

**Come funziona, in breve:** hai bisogno che l'app sia raggiungibile da un
indirizzo web vero (`https://qualcosa.it`), non basta averla solo sul computer.
iOS installa le PWA solo da un sito online, e per motivi di sicurezza deve
essere `https` (non `http`).

### Passo 1 — Metti l'app online
Il modo piu semplice, gratuito, senza configurazioni server:
1. Vai su [vercel.com](https://vercel.com) o [netlify.com](https://netlify.com) e crea un account gratuito.
2. Carica la cartella del progetto (o collega il repository GitHub, se ne crei uno).
3. Imposta come comando di build `npm run build` e cartella di output `dist`.
4. Premi "Deploy". In un paio di minuti ottieni un indirizzo tipo `project-life-rpg.vercel.app`.

### Passo 2 — Installala sull'iPhone
1. Apri quell'indirizzo con **Safari** sull'iPhone (deve essere Safari, non Chrome: solo Safari puo' installare PWA su iOS).
2. Tocca l'icona di condivisione (il quadrato con la freccia verso l'alto), in basso al centro.
3. Scorri e tocca **"Aggiungi a Home"**.
4. Conferma il nome (gia' precompilato: "Life RPG") e tocca **"Aggiungi"**.

Ora hai un'icona sulla Home, con il gradiente blu-viola-oro del tema. Aprendola,
l'app parte a schermo intero, senza barra degli indirizzi, come qualsiasi app scaricata.

### Cosa ottieni con questo approccio (e cosa no)
✅ Icona sulla Home, apertura a schermo intero, funziona offline dopo il primo caricamento, aggiornamenti automatici (basta ripubblicare, l'utente non deve fare nulla)
❌ Non compare nell'App Store, non puo' usare notifiche push "vere" di iOS (Apple le limita molto sulle PWA), non ha accesso a funzioni avanzate del telefono come la fotocamera nativa per il diario (nel browser puoi comunque caricare foto dalla galleria)

Se in futuro vuoi le notifiche push reali o pubblicarla sull'App Store, il passo
successivo e' avvolgere questo stesso codice con **Capacitor**, che lo trasforma
in un'app nativa vera senza doverlo riscrivere.

## Prossimi passi consigliati

- Persistenza su Firestore per player/missioni/npc/diario (oggi in localStorage)
- Upload foto diario su Firebase Storage
- Notifiche push per le missioni giornaliere (Web Push API / Firebase Cloud Messaging)
- Generatore di eventi casuali schedulato (Cloud Functions)
