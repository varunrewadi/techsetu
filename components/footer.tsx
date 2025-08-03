import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#14CC60]/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-8 h-8 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#14CC60]">TechSetu</span>
            </div>
            <span className="text-slate-400 text-sm mb-1">Transforming businesses through innovative technology solutions and exceptional digital experiences.</span>
            
            <span className="text-slate-400 text-xs mt-1">&copy; 2025 TechSetu. All rights reserved.</span>
          </div>
          <div className="flex flex-col w-full md:w-auto items-start md:items-start mt-2 md:mt-0">
            <span className="font-semibold text-white mb-2">Contact Us</span>
            <div className="flex items-center mb-2">
              <Link href="mailto:work.techsetu@gmail.com" aria-label="Email" className="mr-2">
                <Mail className="w-5 h-5 text-white hover:text-[#14CC60] transition-colors duration-200" />
              </Link>
              <span className="text-slate-400 text-sm">work.techsetu@gmail.com</span>
            </div>
            <div className="flex items-center mb-1">
              <Phone className="w-5 h-5 mr-2 text-white" />
              <span className="text-slate-400 text-sm">+91 91675 96705 , +91 96198 44342</span>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
} 