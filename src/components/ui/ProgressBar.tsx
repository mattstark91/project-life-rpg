import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number       // 0-100
  colorClass?: string // classe tailwind per il gradiente della barra
  label?: string
  showValue?: boolean
  height?: "sm" | "md" | "lg"
  glow?: boolean
}

// Barra statistica in stile HUD videoludico, con riempimento animato
export function ProgressBar({
  value,
  colorClass = "from-electric to-electric-soft",
  label,
  showValue = true,
  height = "md",
  glow = false,
}: ProgressBarProps) {
  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" }

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1 flex items-center justify-between">
          <span className="eyebrow">{label}</span>
          {showValue && <span className="font-mono text-xs text-white/70">{Math.round(value)}</span>}
        </div>
      )}
      <div className={cn("w-full overflow-hidden rounded-full bg-white/5 border border-white/5", heights[height])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.max(0, Math.min(100, value))}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("h-full rounded-full bg-gradient-to-r", colorClass, glow && "shadow-glow")}
        />
      </div>
    </div>
  )
}
