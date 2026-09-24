import { type HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

// Pannello HUD riutilizzabile con angolo tagliato in stile Persona 5
export function Card({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("hud-panel p-5", className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-3 flex items-center justify-between", className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-display text-lg font-semibold tracking-wide text-white", className)} {...props}>
      {children}
    </h3>
  )
}
