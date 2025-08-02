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
      title: "RetailPlus E-commerce Platform",
      category: "Web Development",
      description:
        "Complete e-commerce solution with AI-powered product recommendations and automated inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "LogiFlow Automation Suite",
      category: "Automation",
      description:
        "Comprehensive workflow automation system that streamlined operations and reduced manual processing time.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Zapier", "AWS Lambda", "PostgreSQL", "React"],
    },
    {
      id: 3,
      title: "GreenTech AI Analytics",
      category: "AI Solutions",
      description:
        "Machine learning platform for predictive maintenance and energy optimization in renewable energy systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "TensorFlow", "AWS", "React", "D3.js"],
    },
    {
      id: 4,
      title: "HealthCare Connect Portal",
      category: "Web Development",
      description: "Patient management system with telemedicine capabilities and automated appointment scheduling.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
    },
    {
      id: 5,
      title: "SmartFinance AI Advisor",
      category: "AI Solutions",
      description:
        "Intelligent financial advisory platform with personalized investment recommendations and risk assessment.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "scikit-learn", "React", "Node.js", "MongoDB"],
    },
    {
      id: 6,
      title: "ManufacturingFlow Optimizer",
      category: "Automation",
      description: "IoT-enabled production line automation with real-time monitoring and quality control systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "IoT Sensors", "React", "InfluxDB", "Docker"],
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
              100+ Successful Projects
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform their operations through
              innovative technology solutions.
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#14CC60]/10 text-[#14CC60] border-[#14CC60]/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
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
                  <div className="flex gap-3">
                    <Button asChild className="flex-1 bg-[#14CC60] hover:bg-[#14CC60]/90 rounded-full">
                      <Link href="/#contact">
                        Start Similar Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-[#14CC60]/50 text-[#14CC60] hover:bg-[#14CC60]/10 bg-transparent rounded-full"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
