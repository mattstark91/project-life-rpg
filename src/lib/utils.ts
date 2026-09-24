import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Helper standard per unire classi Tailwind in modo sicuro (pattern shadcn/ui)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Limita un valore statistico tra 0 e 100
export function clampStat(value: number): number {
  return Math.max(0, Math.min(100, value))
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric" })
}
