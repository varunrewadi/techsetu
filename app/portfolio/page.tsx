import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ExternalLink, Code, Brain, Zap, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Travix",
      category: "Web Development",
      description:
        "A travel booking website with user-friendly interface, featuring two-factor authentication and real-time price updates. Built with PostgreSQL for secure database management and travel APIs.",
      image: "/travix.png",
      technologies: ["EJS", "TailwindCSS", "Google-OAuth", "PostgreSQL", "Supabase"],
    },
    {
      id: 2,
      title: "Image Processing Application",
      category: "AI Solutions",
      description:
        "A GUI-based application for image editing with features like grayscale, blur, and pencil sketch filters. Includes real-time effects and image capture functionality using OpenCV and Tkinter.",
      image: "/image-processing.png",
      technologies: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy", "GUI Programming"],
    },
    {
      id: 3,
      title: "IETE Website",
      category: "Web Development",
      description:
        "A responsive website for IETE-SF MPSTME built using no-code platforms. Showcases organizational information with smooth navigation, mobile support, and an engaging user interface.",
      image: "/iete.png",
      technologies: ["Figma", "Wix/Wix-Studio", "UI/UX Design"],
    },
    {
      id: 4,
      title: "Itinerary Planner UiPath Bot",
      category: "Automation",
      description:
        "Created a UiPath automation bot that generates personalized travel plans. It collects user input, fetches durations and images via Google Maps API, and emails a polished Word itinerary.",
      image: "uipath",
      technologies: ["UiPath Studio", "Google Maps API", "Word Automation", "SMTP"],
    },
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements (copied from HomePage hero) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#14CC60]/5 via-transparent to-green-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14CC60]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-[#14CC60]/10 text-[#14CC60] hover:bg-[#14CC60]/20">
              New Agency, Fresh Ideas
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Driven by passion and creativity, we craft digital products through personal and demo projects that highlight our potential—ready to collaborate and build something exceptional with you.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 border-slate-200 bg-white/80 overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 p-4">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-contain"
                    />
                  </div>
                </div>
                <CardContent className="p-8">
                  <Badge className="mb-3 bg-[#14CC60]/10 text-[#14CC60] border-[#14CC60]/20">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14CC60] to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-[#14CC60] hover:bg-green-50 rounded-full">
              <Link href="/#contact">
                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-[#14CC60] bg-transparent rounded-full"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
