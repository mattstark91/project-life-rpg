import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold" | "danger"
  size?: "sm" | "md" | "lg"
}

// Bottone di gioco: bordi netti, glow al hover, feedback tattile su tap
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants: Record<string, string> = {
      primary: "bg-electric text-white hover:shadow-glow hover:bg-electric-soft",
      secondary: "bg-panel-light text-white border border-white/10 hover:border-electric/50",
      ghost: "bg-transparent text-muted hover:text-white hover:bg-white/5",
      gold: "bg-gold text-void font-semibold hover:shadow-glow-gold hover:bg-gold-soft",
      danger: "bg-danger/90 text-white hover:bg-danger",
    }
    const sizes: Record<string, string> = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2.5",
      lg: "text-base px-6 py-3.5",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "font-display font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
