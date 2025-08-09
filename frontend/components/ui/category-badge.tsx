"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface CategoryBadgeProps {
  variant: "sports" | "commodities" | "options" | "politics" | "crypto" | "technology"
  size?: "sm" | "md" | "lg"
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
  isActive?: boolean
  onClick?: () => void
}

const categoryStyles = {
  sports: {
    inactive: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 hover:border-blue-300",
    active: "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/25",
  },
  commodities: {
    inactive: "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100 hover:border-orange-300",
    active: "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/25",
  },
  options: {
    inactive: "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100 hover:border-purple-300",
    active: "bg-purple-500 text-white border-purple-500 shadow-lg shadow-purple-500/25",
  },
  politics: {
    inactive: "bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300",
    active: "bg-indigo-500 text-white border-indigo-500 shadow-lg shadow-indigo-500/25",
  },
  crypto: {
    inactive: "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300",
    active: "bg-yellow-500 text-white border-yellow-500 shadow-lg shadow-yellow-500/25",
  },
  technology: {
    inactive: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:border-green-300",
    active: "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/25",
  },
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

export function CategoryBadge({
  variant,
  size = "md",
  icon: Icon,
  children,
  className,
  isActive = false,
  onClick,
}: CategoryBadgeProps) {
  const Component = onClick ? "button" : "span"

  return (
    <Component
      onClick={onClick}
      className={cn(
        "inline-flex items-center font-medium border rounded-full transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        isActive ? categoryStyles[variant].active : categoryStyles[variant].inactive,
        sizeStyles[size],
        onClick && "cursor-pointer active:scale-95 active:shadow-md",
        className,
      )}
    >
      {Icon && <Icon className={cn("mr-2", size === "sm" ? "w-3 h-3" : size === "lg" ? "w-5 h-5" : "w-4 h-4")} />}
      {children}
    </Component>
  )
}
