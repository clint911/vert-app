import { TrendingUp, Github, Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">StarkBet</span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-sm">
              The future of prediction markets on StarkNet. Trade on real-world events with zero gas fees and instant
              settlement.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Twitter className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-slate-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Markets */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Markets</h4>
              <div className="space-y-3">
                <Link href="/sports" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Sports
                </Link>
                <Link
                  href="/commodities"
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  Commodities
                </Link>
                <Link href="/options" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Options
                </Link>
                <Link href="/create" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Create Market
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <div className="space-y-3">
                <Link href="/docs" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Documentation
                </Link>
                <Link href="/api" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  API Reference
                </Link>
                <Link href="/guides" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Trading Guides
                </Link>
                <Link href="/faq" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
              <div className="space-y-3">
                <Link href="/help" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Contact Us
                </Link>
                <Link href="/status" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  System Status
                </Link>
                <Link
                  href="/bug-report"
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  Report Bug
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <div className="space-y-3">
                <Link href="/privacy" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="block text-slate-600 hover:text-slate-900 transition-colors text-sm">
                  Cookie Policy
                </Link>
                <Link
                  href="/compliance"
                  className="block text-slate-600 hover:text-slate-900 transition-colors text-sm"
                >
                  Compliance
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">&copy; {currentYear} StarkBet. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <span className="text-slate-500 text-sm">Built on</span>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg"></div>
                <span className="text-slate-700 font-medium text-sm">StarkNet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
