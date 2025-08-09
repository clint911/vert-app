"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, BarChart3, Search, Zap, Factory, Wheat, Fuel, Coffee, Gem } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Categorized commodity markets
const commodityMarkets = [
  // Energy Sector
  {
    id: 1,
    question: "Will Brent Crude Oil hit $90 before February 2024?",
    description: "Oil price prediction amid geopolitical tensions",
    category: "Energy",
    sector: "energy",
    currentPrice: 82.45,
    targetPrice: 90,
    endDate: "2024-02-29T23:59:00Z",
    yesPrice: 0.35,
    noPrice: 0.65,
    volume: 150000,
    traders: 289,
    liquidity: 45000,
    icon: Fuel,
  },
  {
    id: 2,
    question: "Will Natural Gas exceed $4.50 this winter?",
    description: "Natural gas price surge due to winter demand",
    category: "Energy",
    sector: "energy",
    currentPrice: 3.85,
    targetPrice: 4.5,
    endDate: "2024-03-20T23:59:00Z",
    yesPrice: 0.58,
    noPrice: 0.42,
    volume: 95000,
    traders: 178,
    liquidity: 28000,
    icon: Zap,
  },

  // Agriculture Sector
  {
    id: 3,
    question: "Will Nairobi Maize price exceed KES 5,000 by March 2024?",
    description: "Maize price prediction based on seasonal trends and supply",
    category: "Agriculture",
    sector: "agriculture",
    currentPrice: 4500,
    targetPrice: 5000,
    endDate: "2024-03-31T23:59:00Z",
    yesPrice: 0.42,
    noPrice: 0.58,
    volume: 85000,
    traders: 156,
    liquidity: 25000,
    icon: Wheat,
  },
  {
    id: 4,
    question: "Will Coffee Arabica prices drop below $1.70 this quarter?",
    description: "Coffee market volatility due to weather conditions",
    category: "Agriculture",
    sector: "agriculture",
    currentPrice: 1.85,
    targetPrice: 1.7,
    endDate: "2024-03-31T23:59:00Z",
    yesPrice: 0.28,
    noPrice: 0.72,
    volume: 65000,
    traders: 134,
    liquidity: 18000,
    icon: Coffee,
  },

  // Precious Metals
  {
    id: 5,
    question: "Will Gold exceed $2,100 per ounce by year-end?",
    description: "Gold price prediction amid economic uncertainty",
    category: "Precious Metals",
    sector: "metals",
    currentPrice: 2045,
    targetPrice: 2100,
    endDate: "2024-12-31T23:59:00Z",
    yesPrice: 0.67,
    noPrice: 0.33,
    volume: 220000,
    traders: 445,
    liquidity: 67000,
    icon: Gem,
  },
  {
    id: 6,
    question: "Will Silver reach $30 per ounce this year?",
    description: "Silver price rally following industrial demand",
    category: "Precious Metals",
    sector: "metals",
    currentPrice: 24.5,
    targetPrice: 30,
    endDate: "2024-12-31T23:59:00Z",
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: 78000,
    traders: 198,
    liquidity: 22000,
    icon: Gem,
  },

  // Industrial Metals
  {
    id: 7,
    question: "Will Copper prices exceed $9,000 per ton?",
    description: "Copper demand surge from renewable energy projects",
    category: "Industrial Metals",
    sector: "industrial",
    currentPrice: 8450,
    targetPrice: 9000,
    endDate: "2024-06-30T23:59:00Z",
    yesPrice: 0.52,
    noPrice: 0.48,
    volume: 125000,
    traders: 267,
    liquidity: 38000,
    icon: Factory,
  },
]

export default function CommoditiesPage() {
  const [selectedMarkets, setSelectedMarkets] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSector, setSelectedSector] = useState("all")

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

  const filteredMarkets = commodityMarkets.filter((market) => {
    const matchesSearch =
      market.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSector = selectedSector === "all" || market.sector === selectedSector
    return matchesSearch && matchesSector
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Commodity Markets</h1>
                  <p className="text-gray-600">Predict price movements in global commodities</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 rounded-lg">
                    Phase 2 - Beta
                  </Badge>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-4 h-4" />
                    <Input
                      placeholder="Search markets..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-gray-50 border-gray-200 rounded-xl w-64 text-emerald-700 placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Tabs */}
            <Tabs value={selectedSector} onValueChange={setSelectedSector} className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-white border border-slate-200 rounded-xl p-2 shadow-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-slate-900/25 rounded-lg font-medium transition-all duration-200 hover:bg-slate-50 text-slate-700"
                >
                  All Sectors
                </TabsTrigger>
                <TabsTrigger
                  value="energy"
                  className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-red-50 text-red-600"
                >
                  <Fuel className="w-4 h-4 mr-2" />
                  Energy
                </TabsTrigger>
                <TabsTrigger
                  value="agriculture"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-green-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-green-50 text-green-600"
                >
                  <Wheat className="w-4 h-4 mr-2" />
                  Agriculture
                </TabsTrigger>
                <TabsTrigger
                  value="metals"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-yellow-50 text-yellow-600"
                >
                  <Gem className="w-4 h-4 mr-2" />
                  Metals
                </TabsTrigger>
                <TabsTrigger
                  value="industrial"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 text-blue-600"
                >
                  <Factory className="w-4 h-4 mr-2" />
                  Industrial
                </TabsTrigger>
              </TabsList>

              <TabsContent value={selectedSector} className="space-y-6 mt-6">
                {filteredMarkets.map((market) => (
                  <CommodityMarketCard key={market.id} market={market} onTrade={addToPortfolio} />
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Trading Portfolio */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Portfolio</h2>

              {selectedMarkets.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-gray-400" />
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

function CommodityMarketCard({
  market,
  onTrade,
}: { market: any; onTrade: (market: any, position: "yes" | "no", price: number) => void }) {
  const Icon = market.icon
  const priceChange = ((market.currentPrice - market.targetPrice) / market.targetPrice) * 100
  const isAboveTarget = market.currentPrice > market.targetPrice

  return (
    <Card className="bg-white border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 rounded-lg">{market.category}</Badge>
              </div>
              <CardTitle className="text-gray-900 text-lg leading-tight mb-2">{market.question}</CardTitle>
              <p className="text-gray-600 text-sm">{market.description}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-bold text-gray-900 mb-1">${market.currentPrice}</div>
            <div className={`flex items-center space-x-1 text-sm ${isAboveTarget ? "text-green-600" : "text-red-600"}`}>
              {isAboveTarget ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{Math.abs(priceChange).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-3 bg-gray-50 rounded-xl">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Current Price</span>
            <span>${market.currentPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Target Price</span>
            <span>${market.targetPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Ends</span>
            <span>{new Date(market.endDate).toLocaleDateString()}</span>
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
