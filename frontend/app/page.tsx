import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Shield, Rocket, Zap, ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 rounded-full font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Now Live on StarkNet
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Predict the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Trade on real-world events with zero gas fees. Sports, commodities, and options markets powered by
              StarkNet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sports">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-4 rounded-xl font-medium"
                >
                  Start Trading <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-white text-lg px-8 py-4 rounded-xl font-medium"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose StarkBet?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Built for the next generation of prediction markets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Zero Gas Fees</h3>
                <p className="text-slate-600 leading-relaxed">
                  Trade without transaction costs using Account Abstraction technology
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Secure Oracles</h3>
                <p className="text-slate-600 leading-relaxed">
                  Pragma Oracle integration ensures tamper-proof market resolution
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">AI-Powered Markets</h3>
                <p className="text-slate-600 leading-relaxed">
                  Advanced algorithms for real-time pricing and market efficiency
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:shadow-md">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Lightning Fast</h3>
                <p className="text-slate-600 leading-relaxed">
                  Instant settlement and execution powered by StarkNet's speed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white border border-slate-200">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$2.1M</div>
                  <div className="text-slate-600 font-medium">Total Volume</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">15,420</div>
                  <div className="text-slate-600 font-medium">Active Traders</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">98.7%</div>
                  <div className="text-slate-600 font-medium">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$0</div>
                  <div className="text-slate-600 font-medium">Gas Fees</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
            <CardContent className="p-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Start Trading?</h2>
              <p className="text-xl text-slate-600 mb-10">Join thousands of traders already earning on StarkBet</p>
              <Link href="/sports">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-12 py-4 rounded-xl font-medium"
                >
                  Get Started Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
