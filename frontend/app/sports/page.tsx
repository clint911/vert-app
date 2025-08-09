"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketCard } from "@/components/ui/market-card"
import { Search, Clock, Trophy, Flame } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sports markets data
const sportsMarkets = [
  {
    id: 1,
    question: "Will AFC Leopards beat Gor Mahia?",
    description: "AFC Leopards vs Gor Mahia - KPL Match on January 15th",
    category: "Football",
    endDate: "2024-01-15T15:00:00Z",
    status: "live",
    yesPrice: 0.65,
    noPrice: 0.35,
    volume: 45000,
    traders: 234,
    liquidity: 12000,
  },
  {
    id: 2,
    question: "Will Arsenal finish in the top 4 this season?",
    description: "Arsenal to finish in Champions League positions for 2023/24 season",
    category: "Football",
    endDate: "2024-05-19T23:59:00Z",
    status: "active",
    yesPrice: 0.78,
    noPrice: 0.22,
    volume: 120000,
    traders: 567,
    liquidity: 35000,
  },
  {
    id: 3,
    question: "Will Lakers make the NBA playoffs?",
    description: "Los Angeles Lakers to qualify for 2024 NBA playoffs",
    category: "Basketball",
    endDate: "2024-04-14T23:59:00Z",
    status: "active",
    yesPrice: 0.72,
    noPrice: 0.28,
    volume: 89000,
    traders: 445,
    liquidity: 28000,
  },
]

export default function SportsPage() {
  const [selectedMarkets, setSelectedMarkets] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

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

  const filteredMarkets = sportsMarkets.filter(
    (market) =>
      market.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="bg-white border border-slate-200">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Sports Markets</h1>
                    <p className="text-slate-600">Predict the outcomes of sporting events worldwide</p>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-4 h-4" />
                    <Input
                      placeholder="Search markets..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-slate-50 border-slate-200 rounded-xl w-64 text-emerald-700 placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white border border-slate-200 rounded-xl p-2 shadow-sm">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-slate-900/25 rounded-lg font-medium transition-all duration-200 hover:bg-slate-50 text-slate-700"
                >
                  All Markets
                </TabsTrigger>
                <TabsTrigger
                  value="live"
                  className="data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-red-50 text-red-600"
                >
                  <Flame className="w-4 h-4 mr-2" />
                  Live
                </TabsTrigger>
                <TabsTrigger
                  value="ending"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-amber-50 text-amber-600"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Ending Soon
                </TabsTrigger>
                <TabsTrigger
                  value="popular"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 text-blue-600"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Popular
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4 mt-6">
                {filteredMarkets.map((market) => (
                  <MarketCard key={market.id} market={market} onTrade={addToPortfolio} />
                ))}
              </TabsContent>

              <TabsContent value="live" className="space-y-4 mt-6">
                {filteredMarkets
                  .filter((m) => m.status === "live")
                  .map((market) => (
                    <MarketCard key={market.id} market={market} onTrade={addToPortfolio} />
                  ))}
              </TabsContent>

              <TabsContent value="ending" className="space-y-4 mt-6">
                {filteredMarkets
                  .sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime())
                  .slice(0, 3)
                  .map((market) => (
                    <MarketCard key={market.id} market={market} onTrade={addToPortfolio} />
                  ))}
              </TabsContent>

              <TabsContent value="popular" className="space-y-4 mt-6">
                {filteredMarkets
                  .sort((a, b) => b.volume - a.volume)
                  .map((market) => (
                    <MarketCard key={market.id} market={market} onTrade={addToPortfolio} />
                  ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Trading Portfolio */}
          <div className="lg:col-span-1">
            <Card className="bg-white border border-slate-200 sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Your Portfolio</h2>

                {selectedMarkets.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-slate-500">Select markets to start trading</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedMarkets.map((trade) => (
                      <div key={trade.marketId} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <div className="flex justify-between items-start mb-3">
                          <div className="text-sm text-slate-600 pr-2 line-clamp-2">{trade.question}</div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-slate-600 h-6 w-6 p-0 flex-shrink-0"
                          >
                            ×
                          </Button>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              trade.position === "yes" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {trade.position.toUpperCase()}
                          </span>
                          <span className="font-semibold text-slate-900">{(trade.price * 100).toFixed(0)}¢</span>
                        </div>
                        <Input
                          placeholder="Amount (USDC)"
                          className="bg-white border-slate-200 rounded-lg text-emerald-700 placeholder:text-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                      </div>
                    ))}

                    <div className="border-t border-slate-200 pt-4">
                      <div className="flex justify-between text-slate-600 mb-2 text-sm">
                        <span>Total Investment:</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between text-slate-900 font-semibold mb-4">
                        <span>Potential Return:</span>
                        <span>$0.00</span>
                      </div>
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium">
                        Execute Trades
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
