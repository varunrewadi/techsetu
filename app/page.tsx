import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Brain, Zap, Star, Users, Award, Target, Lightbulb, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <Navigation />

      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#14CC60]/5 via-transparent to-green-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14CC60]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-[#14CC60] via-green-500 to-[#14CC60] bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We help ambitious businesses grow through innovative web development, AI solutions, and intelligent
              automation.
              <span className="text-[#14CC60] font-medium"> Let's build something extraordinary together.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#14CC60] to-green-500 hover:from-[#14CC60]/90 hover:to-green-500/90 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-full"
              >
                <Link href="#footer" className="flex items-center">
                  Book a call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-[#14CC60]/50 text-[#14CC60] hover:bg-[#14CC60]/10 bg-white/80 backdrop-blur-xl px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-full"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Overview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#14CC60] font-medium text-sm">Our Core Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Comprehensive Technology
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14CC60]/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Web Development</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Modern, responsive websites and web applications built with cutting-edge technologies
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-[#14CC60]/50 text-[#14CC60] hover:bg-[#14CC60]/10 bg-transparent group-hover:bg-[#14CC60]/10 transition-all duration-300 rounded-full"
                >
                  <Link href="/services#web-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Solutions Card */}
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-green-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-[#14CC60]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-[#14CC60] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Solutions</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Intelligent systems and machine learning solutions to optimize your operations
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-green-500/50 text-green-600 hover:bg-green-500/10 bg-transparent group-hover:bg-green-500/10 transition-all duration-300 rounded-full"
                >
                  <Link href="/services#ai-solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Automation Card */}
            <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-teal-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-[#14CC60]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-[#14CC60] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Automation</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Streamline workflows and reduce manual tasks with intelligent automation
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-teal-500/50 text-teal-600 hover:bg-teal-500/10 bg-transparent group-hover:bg-teal-500/10 transition-all duration-300 rounded-full"
                >
                  <Link href="/services#automation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white/30 to-green-50/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,204,96,0.1),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#14CC60] font-medium text-sm">About TechSetu</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Excellence in Every
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Detail
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a passionate team of technologists dedicated to helping businesses harness the power of modern
              technology
            </p>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h3>
              <p className="text-lg text-slate-600 mb-6">
                TechSetu was born from a simple observation: small and medium-sized businesses often struggle to access
                the same cutting-edge technology solutions that large enterprises take for granted.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our founders, with combined experience of over 15 years in technology and business, decided to bridge
                this gap by making advanced web development, AI solutions, and automation accessible to businesses of
                all sizes.
              </p>
              <p className="text-lg text-slate-600">
                Today, we've helped over 100 businesses transform their operations, increase efficiency, and achieve
                sustainable growth through technology.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="TechSetu team working"
                className="rounded-2xl border border-[#14CC60]/20"
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To democratize access to cutting-edge technology solutions for businesses worldwide",
                color: "[#14CC60]",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We stay at the forefront of technology trends to provide the most advanced solutions",
                color: "green-500",
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "Building long-term partnerships with our clients, growing together and celebrating success",
                color: "teal-500",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Committed to delivering exceptional quality in every project, exceeding expectations",
                color: "[#14CC60]",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br from-${item.color} to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center mt-20">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#14CC60] mb-2">100+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">2+</div>
              <div className="text-slate-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#14CC60] mb-2">4.9/5</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#14CC60] font-medium text-sm">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              What Our Clients
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped transform
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "TechSetu transformed our online presence completely. The AI chatbot they built has reduced our customer service workload by 60%.",
                author: "Sarah Johnson",
                role: "CEO, RetailPlus",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "The automation solutions they implemented saved us 20 hours per week. ROI was achieved within 3 months.",
                author: "Michael Chen",
                role: "Operations Manager, LogiFlow",
                avatar: "/placeholder.svg?height=60&width=60",
              },
              {
                quote:
                  "Professional, reliable, and innovative. They delivered exactly what we needed and provided excellent ongoing support.",
                author: "Emily Rodriguez",
                role: "Founder, GreenTech Solutions",
                avatar: "/placeholder.svg?height=60&width=60",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#14CC60]/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="relative p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-[#14CC60]/50"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-[#14CC60]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
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
                <Link href="mailto:hello@techsetu.com">Book a Call</Link>
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
                <li>hello@techsetu.com</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  <Link
                    href="mailto:hello@techsetu.com"
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
    </div>
  )
}
