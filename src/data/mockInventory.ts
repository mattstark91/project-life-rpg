import type { InventoryItem } from "@/types/inventory"

export const mockInventory: InventoryItem[] = [
  { id: "i1", nome: "Berlina Sportiva", categoria: "auto", rarita: "epico", descrizione: "Veloce e affidabile per gli spostamenti in citta.", valore: 18000, equipaggiato: true, acquisitoIl: new Date().toISOString() },
  { id: "i2", nome: "Giacca in Pelle", categoria: "vestiti", rarita: "raro", descrizione: "Aumenta il carisma percepito.", valore: 220, equipaggiato: true, acquisitoIl: new Date().toISOString() },
  { id: "i3", nome: "Laptop Pro", categoria: "tecnologia", rarita: "epico", descrizione: "Indispensabile per il lavoro da sviluppatore.", valore: 1800, equipaggiato: true, acquisitoIl: new Date().toISOString() },
  { id: "i4", nome: "Vinile Raro anni 70", categoria: "collezioni", rarita: "leggendario", descrizione: "Pezzo unico trovato al mercatino.", valore: 500, acquisitoIl: new Date().toISOString() },
  { id: "i5", nome: "Chiave del Successo", categoria: "speciale", rarita: "leggendario", descrizione: "Oggetto simbolico ottenuto completando la missione principale.", valore: 0, acquisitoIl: new Date().toISOString() },
]
