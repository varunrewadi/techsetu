"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  // Only show Services and Portfolio in nav
  const navItems = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-6">
      {/* Main Navigation Pill */}
      <div className="relative">
        {/* Glassmorphism Pill Container */}
        <div className="bg-white/20 backdrop-blur-2xl border border-[#14CC60]/60 rounded-full px-1 py-2">
          <div className="flex items-center justify-between px-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-7 h-7 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <div className="text-base font-bold text-slate-800 hidden sm:block">TechSetu</div>
            </Link>

            {/* Navigation (always visible, pill style) */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    pathname === item.href
                      ? "text-[#14CC60] bg-[#14CC60]/10"
                      : "text-slate-600 hover:text-[#14CC60] hover:bg-slate-100/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-gradient-to-r from-[#14CC60] to-green-500 hover:from-[#14CC60]/90 hover:to-green-500/90 text-white border-0 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              <Link href="#footer">Book a call</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
