"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Target, TrendingUp, TrendingDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryBadge } from "@/components/ui/category-badge"

// Polymarket-style options predictions
const optionsMarkets = [
  {
    id: 1,
    question: "Will MAIZE/KES call option (Strike: 4600) expire in-the-money?",
    description: "Maize call option expiring February 15, 2024",
    underlying: "MAIZE/KES",
    currentPrice: 4500,
    strike: 4600,
    expiry: "2024-02-15",
    type: "call",
    yesPrice: 0.25,
    noPrice: 0.75,
    volume: 12000,
    traders: 45,
    liquidity: 3500,
  },
  {
    id: 2,
    question: "Will BRENT/USD put option (Strike: $80) expire in-the-money?",
    description: "Brent crude put option expiring February 20, 2024",
    underlying: "BRENT/USD",
    currentPrice: 82.45,
    strike: 80,
    expiry: "2024-02-20",
    type: "put",
    yesPrice: 0.15,
    noPrice: 0.85,
    volume: 25000,
    traders: 78,
    liquidity: 8500,
  },
  {
    id: 3,
    question: "Will GOLD/USD call option (Strike: $2100) expire in-the-money?",
    description: "Gold call option expiring March 15, 2024",
    underlying: "GOLD/USD",
    currentPrice: 2045,
    strike: 2100,
    expiry: "2024-03-15",
    type: "call",
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: 35000,
    traders: 123,
    liquidity: 12000,
  },
]

export default function OptionsPage() {
  const [selectedMarkets, setSelectedMarkets] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const addToPortfolio = (market: any, position: "yes" | "no", price: number) => {
    const trade = {
      marketId: market.id,
      question: market.question,
      position,
      price,
      amount: 0,
    }
    setSelectedMarkets([...selectedMarkets.filter((t) => t.marketId !== market.id), trade])
  }

  const filteredMarkets = optionsMarkets.filter(
    (market) =>
      market.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.underlying.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-2">Options Markets</h1>
                  <p className="text-slate-600">Predict options contract outcomes with advanced derivatives</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CategoryBadge variant="options" size="md" className="shadow-sm">
                    Phase 3 - Coming Soon
                  </CategoryBadge>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-4 h-4" />
                    <Input
                      placeholder="Search options..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-50 border-slate-200 rounded-xl w-64 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-emerald-700 placeholder:text-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Create Option Market */}
            <Card className="bg-white border border-gray-200/50 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-gray-900">Create Options Market</CardTitle>
                <p className="text-gray-600">Propose a new options prediction market</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Underlying Asset</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                        <SelectValue placeholder="Select asset" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maize">MAIZE/KES</SelectItem>
                        <SelectItem value="brent">BRENT/USD</SelectItem>
                        <SelectItem value="coffee">COFFEE/USD</SelectItem>
                        <SelectItem value="gold">GOLD/USD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Option Type</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-xl">
                        <SelectValue placeholder="Call or Put" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="call">Call Option</SelectItem>
                        <SelectItem value="put">Put Option</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-700 font-medium">Strike Price</Label>
                    <Input
                      placeholder="Enter strike price"
                      className="bg-gray-50 border-gray-200 rounded-xl text-emerald-700 placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-700 font-medium">Expiry Date</Label>
                    <Input
                      type="date"
                      className="bg-gray-50 border-gray-200 rounded-xl text-emerald-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Propose Market</Button>
              </CardContent>
            </Card>

            {/* Available Options Markets */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Available Markets</h2>
              {filteredMarkets.map((market) => (
                <OptionsMarketCard key={market.id} market={market} onTrade={addToPortfolio} />
              ))}
            </div>
          </div>

          {/* Trading Portfolio */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Portfolio</h2>

              {selectedMarkets.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Select markets to start trading</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedMarkets.map((trade) => (
                    <div key={trade.marketId} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <div className="text-sm text-gray-600 pr-2">{trade.question}</div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600 h-6 w-6 p-0">
                          ×
                        </Button>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <Badge
                          className={
                            trade.position === "yes"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-red-100 text-red-800 border-red-200"
                          }
                        >
                          {trade.position.toUpperCase()}
                        </Badge>
                        <span className="font-semibold text-gray-900">{(trade.price * 100).toFixed(0)}¢</span>
                      </div>
                      <Input
                        placeholder="Amount (USDC)"
                        className="bg-white border-gray-200 rounded-lg text-emerald-700 placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  ))}

                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl">Execute Trades</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function OptionsMarketCard({
  market,
  onTrade,
}: { market: any; onTrade: (market: any, position: "yes" | "no", price: number) => void }) {
  const isCall = market.type === "call"
  const isInTheMoney = isCall ? market.currentPrice > market.strike : market.currentPrice < market.strike
  const daysToExpiry = Math.ceil((new Date(market.expiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card className="bg-white border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <div className="flex items-center space-x-2 mb-3">
              <Badge
                className={
                  isCall ? "bg-green-100 text-green-800 border-green-200" : "bg-red-100 text-red-800 border-red-200"
                }
              >
                {market.type.toUpperCase()}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">{market.underlying}</Badge>
              <Badge
                className={`${isInTheMoney ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100 text-gray-800 border-gray-200"}`}
              >
                {isInTheMoney ? "ITM" : "OTM"}
              </Badge>
            </div>
            <CardTitle className="text-gray-900 text-lg leading-tight mb-2">{market.question}</CardTitle>
            <p className="text-gray-600 text-sm">{market.description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-3 bg-gray-50 rounded-xl">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-500 mb-1">Current</div>
              <div className="font-semibold text-gray-900">${market.currentPrice}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Strike</div>
              <div className="font-semibold text-gray-900">${market.strike}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Expiry</div>
              <div className="font-semibold text-gray-900 flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {daysToExpiry}d
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto border-green-200 hover:bg-green-50 text-green-700 bg-green-50/50 rounded-xl"
            onClick={() => onTrade(market, "yes", market.yesPrice)}
          >
            <span className="text-xs text-green-600 mb-1">YES</span>
            <span className="font-bold text-lg">{(market.yesPrice * 100).toFixed(0)}¢</span>
            <div className="flex items-center text-xs text-green-600 mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              {(market.yesPrice * 100).toFixed(0)}%
            </div>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto border-red-200 hover:bg-red-50 text-red-700 bg-red-50/50 rounded-xl"
            onClick={() => onTrade(market, "no", market.noPrice)}
          >
            <span className="text-xs text-red-600 mb-1">NO</span>
            <span className="font-bold text-lg">{(market.noPrice * 100).toFixed(0)}¢</span>
            <div className="flex items-center text-xs text-red-600 mt-1">
              <TrendingDown className="w-3 h-3 mr-1" />
              {(market.noPrice * 100).toFixed(0)}%
            </div>
          </Button>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span>${(market.volume / 1000).toFixed(0)}k volume</span>
            <span>{market.traders} traders</span>
          </div>
          <span>Liquidity: ${(market.liquidity / 1000).toFixed(0)}k</span>
        </div>
      </CardContent>
    </Card>
  )
}
