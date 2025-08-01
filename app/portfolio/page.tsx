import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ExternalLink, Code, Brain, Zap, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"

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
      results: [
        "300% increase in online sales",
        "60% reduction in cart abandonment",
        "40% improvement in user engagement",
      ],
      icon: Code,
      color: "emerald",
    },
    {
      id: 2,
      title: "LogiFlow Automation Suite",
      category: "Automation",
      description:
        "Comprehensive workflow automation system that streamlined operations and reduced manual processing time.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Zapier", "AWS Lambda", "PostgreSQL", "React"],
      results: ["20 hours/week time savings", "95% reduction in processing errors", "ROI achieved in 3 months"],
      icon: Zap,
      color: "teal",
    },
    {
      id: 3,
      title: "GreenTech AI Analytics",
      category: "AI Solutions",
      description:
        "Machine learning platform for predictive maintenance and energy optimization in renewable energy systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "TensorFlow", "AWS", "React", "D3.js"],
      results: [
        "25% reduction in maintenance costs",
        "15% improvement in energy efficiency",
        "Predictive accuracy of 94%",
      ],
      icon: Brain,
      color: "green",
    },
    {
      id: 4,
      title: "HealthCare Connect Portal",
      category: "Web Development",
      description: "Patient management system with telemedicine capabilities and automated appointment scheduling.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
      results: ["50% reduction in appointment no-shows", "80% increase in patient satisfaction", "HIPAA compliant"],
      icon: Code,
      color: "emerald",
    },
    {
      id: 5,
      title: "SmartFinance AI Advisor",
      category: "AI Solutions",
      description:
        "Intelligent financial advisory platform with personalized investment recommendations and risk assessment.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "scikit-learn", "React", "Node.js", "MongoDB"],
      results: [
        "35% improvement in investment returns",
        "90% user satisfaction rate",
        "Automated 70% of advisory tasks",
      ],
      icon: Brain,
      color: "green",
    },
    {
      id: 6,
      title: "ManufacturingFlow Optimizer",
      category: "Automation",
      description: "IoT-enabled production line automation with real-time monitoring and quality control systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "IoT Sensors", "React", "InfluxDB", "Docker"],
      results: [
        "30% increase in production efficiency",
        "50% reduction in defect rates",
        "Real-time quality monitoring",
      ],
      icon: Zap,
      color: "teal",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#14CC60]/10 text-[#14CC60] hover:bg-[#14CC60]/20">
              100+ Successful Projects
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform their operations through
              innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="default" className="bg-[#14CC60] hover:bg-[#14CC60]/90 rounded-full">
              All Projects
            </Button>
            <Button
              variant="outline"
              className="border-[#14CC60]/50 text-[#14CC60] hover:bg-[#14CC60]/10 bg-transparent rounded-full"
            >
              Web Development
            </Button>
            <Button
              variant="outline"
              className="border-green-500/50 text-green-600 hover:bg-green-500/10 bg-transparent rounded-full"
            >
              AI Solutions
            </Button>
            <Button
              variant="outline"
              className="border-teal-500/50 text-teal-600 hover:bg-teal-500/10 bg-transparent rounded-full"
            >
              Automation
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => {
              const IconComponent = project.icon
              const colorClasses = {
                emerald: "bg-[#14CC60]/10 text-[#14CC60] border-[#14CC60]/20",
                green: "bg-green-500/10 text-green-600 border-green-500/20",
                teal: "bg-teal-500/10 text-teal-600 border-teal-500/20",
              }

              return (
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
                      <Badge className={colorClasses[project.color as keyof typeof colorClasses]}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${colorClasses[project.color as keyof typeof colorClasses]}`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    </div>

                    <p className="text-slate-600 mb-6">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-slate-600">
                            <Star className="h-4 w-4 text-[#14CC60] mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

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
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Track Record</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#14CC60] mb-2">100+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">95%</div>
              <div className="text-slate-600">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#14CC60] mb-2">4.9/5</div>
              <div className="text-slate-600">Average Rating</div>
            </div>
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
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">TechSetu</div>
              <p className="text-slate-400 mb-4">Transforming businesses through innovative technology solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#14CC60]">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/services" className="hover:text-[#14CC60] transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#14CC60] transition-colors">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#14CC60] transition-colors">
                    Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#14CC60]">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/#about" className="hover:text-[#14CC60] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#14CC60] transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[#14CC60] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#14CC60]">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>hello@techsetu.com</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  <Link href="/#contact" className="hover:text-[#14CC60] transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TechSetu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
