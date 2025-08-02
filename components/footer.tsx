import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#14CC60]/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-bold">TechSetu</div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#14CC60] to-green-500 hover:from-[#14CC60]/90 hover:to-green-500/90 text-white rounded-full"
            >
              <Link href="mailto:work.techsetu@gmail.com">Book a Call</Link>
            </Button>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-[#14CC60]">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/services" className="hover:text-[#14CC60] transition-colors duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#14CC60] transition-colors duration-300">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#14CC60] transition-colors duration-300">
                  Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-[#14CC60]">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="#about" className="hover:text-[#14CC60] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#14CC60] transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#footer" className="hover:text-[#14CC60] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-[#14CC60]">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li>work.techsetu@gmail.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                <Link
                  href="mailto:work.techsetu@gmail.com"
                  className="hover:text-[#14CC60] transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2024 TechSetu. All rights reserved. Built with passion and cutting-edge technology.</p>
        </div>
      </div>
    </footer>
  )
} 