"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryBadge } from "@/components/ui/category-badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, DollarSign, Users, Trophy, Vote, TrendingUp, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CreateMarketPage() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [question, setQuestion] = useState("")
  const [description, setDescription] = useState("")
  const [endDate, setEndDate] = useState("")
  const [initialLiquidity, setInitialLiquidity] = useState("")

  const categories = [
    {
      id: "sports",
      name: "Sports",
      icon: Trophy,
      description: "Football, Basketball, Tennis, etc.",
      variant: "sports" as const,
    },
    {
      id: "commodities",
      name: "Commodities",
      icon: TrendingUp,
      description: "Oil, Gold, Agricultural products",
      variant: "commodities" as const,
    },
    {
      id: "politics",
      name: "Politics",
      icon: Vote,
      description: "Elections, Policy decisions, Government",
      variant: "politics" as const,
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: DollarSign,
      description: "Bitcoin, Ethereum, DeFi protocols",
      variant: "crypto" as const,
    },
    {
      id: "technology",
      name: "Technology",
      icon: Zap,
      description: "Product launches, Company valuations",
      variant: "technology" as const,
    },
    {
      id: "options",
      name: "Options",
      icon: Users,
      description: "Derivatives and financial instruments",
      variant: "options" as const,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      category: selectedCategory,
      question,
      description,
      endDate,
      initialLiquidity,
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 font-['Poppins',sans-serif]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <Card className="bg-white border border-slate-200 shadow-sm mb-8">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Create Prediction Market</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Propose a new prediction market for the community to trade on. Your market will be reviewed before going
              live.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-slate-200 rounded-xl p-2 shadow-sm mb-8">
            <TabsTrigger
              value="create"
              className="data-[state=active]:bg-slate-900 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-slate-900/25 rounded-lg font-medium transition-all duration-200 hover:bg-slate-50 text-slate-700"
            >
              Create Market
            </TabsTrigger>
            <TabsTrigger
              value="examples"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 text-blue-600"
            >
              Examples & Guidelines
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-8">
            {/* Category Selection */}
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Select Category</CardTitle>
                <p className="text-slate-600">Choose the category that best fits your prediction market</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <div
                        key={category.id}
                        className={`p-6 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                          selectedCategory === category.id
                            ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/10"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className="flex flex-col items-center space-y-3 text-center">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                              selectedCategory === category.id
                                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div
                              className={`font-semibold transition-colors ${
                                selectedCategory === category.id ? "text-blue-700" : "text-slate-900"
                              }`}
                            >
                              {category.name}
                            </div>
                            <div className="text-sm text-slate-500 mt-1">{category.description}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Market Details */}
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Market Details</CardTitle>
                <p className="text-slate-600">Provide clear and specific information about your prediction market</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="question" className="text-slate-700 font-medium text-base">
                      Market Question *
                    </Label>
                    <Input
                      id="question"
                      placeholder="e.g., Will Bitcoin exceed $50,000 by December 2024?"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="mt-2 bg-slate-50 border-slate-200 rounded-xl text-base p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-emerald-700 placeholder:text-emerald-500"
                      required
                    />
                    <p className="text-sm text-slate-500 mt-2">Make it clear, specific, and answerable with Yes/No</p>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-slate-700 font-medium text-base">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Provide additional context, resolution criteria, and any relevant information..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="mt-2 bg-slate-50 border-slate-200 rounded-xl text-base p-4 min-h-[120px] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-emerald-700 placeholder:text-emerald-500"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="endDate" className="text-slate-700 font-medium text-base">
                        Resolution Date *
                      </Label>
                      <Input
                        id="endDate"
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-2 bg-slate-50 border-slate-200 rounded-xl text-base p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-emerald-700"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="liquidity" className="text-slate-700 font-medium text-base">
                        Initial Liquidity (USDC)
                      </Label>
                      <Input
                        id="liquidity"
                        type="number"
                        placeholder="1000"
                        value={initialLiquidity}
                        onChange={(e) => setInitialLiquidity(e.target.value)}
                        className="mt-2 bg-slate-50 border-slate-200 rounded-xl text-base p-4 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-emerald-700 placeholder:text-emerald-500"
                      />
                      <p className="text-sm text-slate-500 mt-2">Optional: Provide initial liquidity to your market</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Review Process</h4>
                    <p className="text-blue-800 text-sm">
                      Your market proposal will be reviewed by our team within 24-48 hours. We'll check for clarity,
                      feasibility, and compliance with our guidelines before approval.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white text-lg py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
                    disabled={!selectedCategory || !question || !description || !endDate}
                  >
                    Submit Market Proposal
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-8">
            {/* Guidelines */}
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Market Creation Guidelines</CardTitle>
                <p className="text-slate-600">Follow these guidelines to create successful prediction markets</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Clear and Specific</h4>
                      <p className="text-slate-600 text-sm">
                        Questions should be unambiguous and have a clear resolution criteria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Binary Outcomes</h4>
                      <p className="text-slate-600 text-sm">All markets must be answerable with Yes or No</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Verifiable Results</h4>
                      <p className="text-slate-600 text-sm">
                        Outcomes must be verifiable through reliable, public sources
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Reasonable Timeline</h4>
                      <p className="text-slate-600 text-sm">
                        Resolution dates should be at least 24 hours in the future
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Example Markets */}
            <Card className="bg-white border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Example Markets</CardTitle>
                <p className="text-slate-600">Well-structured prediction markets across different categories</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                    <CategoryBadge variant="sports" size="sm" className="mb-3">
                      Sports
                    </CategoryBadge>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Will Manchester City win the 2024 Premier League title?
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Resolves to "Yes" if Manchester City finishes first in the 2023-24 Premier League season.
                      Resolution based on official Premier League standings.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                    <CategoryBadge variant="crypto" size="sm" className="mb-3">
                      Cryptocurrency
                    </CategoryBadge>
                    <h4 className="font-semibold text-slate-900 mb-2">Will Bitcoin exceed $60,000 by March 2024?</h4>
                    <p className="text-slate-600 text-sm">
                      Resolves to "Yes" if Bitcoin (BTC) reaches or exceeds $60,000 USD on any major exchange before
                      March 31, 2024, 23:59 UTC.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition-colors">
                    <CategoryBadge variant="politics" size="sm" className="mb-3">
                      Politics
                    </CategoryBadge>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Will the US Federal Reserve cut interest rates in Q1 2024?
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Resolves to "Yes" if the Federal Reserve announces a reduction in the federal funds rate during
                      any FOMC meeting between January 1 and March 31, 2024.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
