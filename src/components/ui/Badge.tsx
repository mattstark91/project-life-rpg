import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "electric" | "violet" | "gold" | "danger" | "success" | "neutral"
}

export function Badge({ className, tone = "neutral", children, ...props }: BadgeProps) {
  const tones: Record<string, string> = {
    electric: "bg-electric/15 text-electric-glow border-electric/30",
    violet: "bg-violet/15 text-violet-soft border-violet/30",
    gold: "bg-gold/15 text-gold-soft border-gold/30",
    danger: "bg-danger/15 text-danger border-danger/30",
    success: "bg-success/15 text-success border-success/30",
    neutral: "bg-white/5 text-muted border-white/10",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
