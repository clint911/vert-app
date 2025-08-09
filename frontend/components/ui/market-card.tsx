"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CategoryBadge } from "@/components/ui/category-badge"
import { TrendingUp, TrendingDown, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface MarketCardProps {
  market: {
    id: number
    question: string
    description: string
    category: string
    yesPrice: number
    noPrice: number
    volume: number
    traders: number
    endDate: string
    status?: string
  }
  onTrade: (market: any, position: "yes" | "no", price: number) => void
  className?: string
}

export function MarketCard({ market, onTrade, className }: MarketCardProps) {
  const getCategoryVariant = (category: string) => {
    const categoryMap: Record<string, any> = {
      Football: "sports",
      Basketball: "sports",
      Energy: "commodities",
      Agriculture: "commodities",
      "Precious Metals": "commodities",
      "Industrial Metals": "commodities",
      Options: "options",
    }
    return categoryMap[category] || "sports"
  }

  return (
    <Card
      className={cn(
        "bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <CategoryBadge variant={getCategoryVariant(market.category)} size="sm">
                {market.category}
              </CategoryBadge>
              {market.status === "live" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200 animate-pulse">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1.5"></div>
                  LIVE
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 leading-tight mb-2 line-clamp-2">{market.question}</h3>
            <p className="text-sm text-slate-600 line-clamp-2">{market.description}</p>
          </div>
          <div className="text-right text-sm text-slate-500 flex-shrink-0">
            <div className="flex items-center gap-1 mb-1">
              <Users className="w-3 h-3" />
              <span>{market.traders.toLocaleString()}</span>
            </div>
            <div className="font-medium">${(market.volume / 1000).toFixed(0)}k</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 hover:text-emerald-800 transition-colors"
            onClick={() => onTrade(market, "yes", market.yesPrice)}
          >
            <span className="text-xs font-medium text-emerald-600 mb-1">YES</span>
            <span className="text-lg font-bold">{(market.yesPrice * 100).toFixed(0)}¢</span>
            <div className="flex items-center text-xs text-emerald-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              {(market.yesPrice * 100).toFixed(0)}%
            </div>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto border-red-200 bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 transition-colors"
            onClick={() => onTrade(market, "no", market.noPrice)}
          >
            <span className="text-xs font-medium text-red-600 mb-1">NO</span>
            <span className="text-lg font-bold">{(market.noPrice * 100).toFixed(0)}¢</span>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingDown className="w-3 h-3 mr-1" />
              {(market.noPrice * 100).toFixed(0)}%
            </div>
          </Button>
        </div>

        <div className="flex justify-between items-center text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span>Volume: ${(market.volume / 1000).toFixed(0)}k</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{market.status === "live" ? "Live now" : new Date(market.endDate).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
