// Sistema di progressione XP / Livelli
// Formula progressiva: ogni livello richiede più esperienza del precedente.
// xpRichiesta(n) = base * n^esponente  -> crescita non lineare "da RPG"

const BASE_XP = 100
const ESPONENTE = 1.45

/** Calcola quanta XP serve per salire dal livello n a n+1 */
export function xpPerLivello(livello: number): number {
  return Math.round(BASE_XP * Math.pow(livello, ESPONENTE))
}

/** Applica XP guadagnata al player, gestendo eventuali level up multipli */
export function applicaXp(
  livelloAttuale: number,
  xpAttuale: number,
  xpGuadagnata: number
): { livello: number; xp: number; xpProssimoLivello: number; leveledUp: boolean } {
  let livello = livelloAttuale
  let xp = xpAttuale + xpGuadagnata
  let soglia = xpPerLivello(livello)
  let leveledUp = false

  while (xp >= soglia) {
    xp -= soglia
    livello += 1
    leveledUp = true
    soglia = xpPerLivello(livello)
  }

  return { livello, xp, xpProssimoLivello: soglia, leveledUp }
}

/** Percentuale di completamento verso il prossimo livello, per le progress bar */
export function percentualeXp(xp: number, xpProssimoLivello: number): number {
  return Math.min(100, Math.round((xp / xpProssimoLivello) * 100))
}
