"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Wallet, Plus, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/sports", label: "Sports" },
    { href: "/commodities", label: "Commodities" },
    { href: "/options", label: "Options" },
    { href: "/create", label: "Create" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">StarkBet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "px-4 py-2 rounded-xl font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            {/* Wallet Balance */}
            <div className="hidden sm:flex bg-slate-50 rounded-xl px-4 py-2 border border-slate-200">
              <div className="flex items-center space-x-2">
                <Wallet className="w-4 h-4 text-slate-500" />
                <span className="text-slate-900 font-semibold text-sm">$1,250.00</span>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700 text-xs px-2 py-0.5 font-medium">
                  USDC
                </Badge>
              </div>
            </div>

            {/* Deposit Button */}
            <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-4 font-medium">
              <Plus className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Deposit</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start px-4 py-3 rounded-xl font-medium",
                      pathname === item.href
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              {/* Mobile Wallet */}
              <div className="sm:hidden bg-slate-50 rounded-xl px-4 py-3 border border-slate-200 mx-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Wallet className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-900 font-semibold text-sm">$1,250.00</span>
                  <Badge variant="secondary" className="bg-slate-200 text-slate-700 text-xs px-2 py-0.5 font-medium">
                    USDC
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
