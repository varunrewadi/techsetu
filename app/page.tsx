import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Brain, Zap, Users, Award, Target, Lightbulb } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

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
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14CC60]/5 to-green-500/5 opacity-0 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Web Development</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Modern web experiences and advanced technologies for dynamic digital solutions
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-[#14CC60]/50 text-[#14CC60] hover:bg-[#14CC60]/10 bg-transparent transition-all duration-300 rounded-full"
                >
                  <Link href="/services#web-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Solutions Card */}
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-green-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-[#14CC60]/5 opacity-0 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-[#14CC60] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Solutions</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Intelligent systems and machine learning solutions to optimize your operations
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-green-500/50 text-green-600 hover:bg-green-500/10 bg-transparent transition-all duration-300 rounded-full"
                >
                  <Link href="/services#ai-solutions">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Automation Card */}
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-teal-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-[#14CC60]/5 opacity-0 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-[#14CC60] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Automation</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Streamline workflows and reduce manual tasks with intelligent automation
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-teal-500/50 text-teal-600 hover:bg-teal-500/10 bg-transparent transition-all duration-300 rounded-full"
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

          {/* Our Approach */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Our development process"
                className="rounded-2xl border border-[#14CC60]/20"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h3>
              <p className="text-lg text-slate-600 mb-6">
                We believe in a collaborative, transparent approach to technology solutions. Every project starts with
                understanding your unique challenges and goals.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our process combines cutting-edge technology with proven methodologies to deliver solutions that not only
                meet your current needs but scale with your business growth.
              </p>
              <p className="text-lg text-slate-600">
                From initial consultation to final deployment, we work closely with you to ensure every solution aligns
                perfectly with your vision and objectives.
              </p>
            </div>
          </div>

          

          {/* Why Choose Us */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Why Choose TechSetu?</h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We bring together the best of modern technology and business expertise to deliver solutions that drive real results
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/50 backdrop-blur-xl rounded-2xl border border-[#14CC60]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Modern Technology Stack</h4>
                <p className="text-slate-600">
                  We use the latest technologies and frameworks to build fast, scalable, and maintainable solutions
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/50 backdrop-blur-xl rounded-2xl border border-[#14CC60]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#14CC60] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">AI-First Approach</h4>
                <p className="text-slate-600">
                  Leveraging artificial intelligence to create intelligent, automated solutions that grow with your business
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/50 backdrop-blur-xl rounded-2xl border border-[#14CC60]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-[#14CC60] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Rapid Development</h4>
                <p className="text-slate-600">
                  Quick turnaround times without compromising quality, helping you get to market faster
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#14CC60]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#14CC60] font-medium text-sm">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Development
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We start by understanding your business goals, challenges, and requirements to create a comprehensive project roadmap.",
                icon: Target,
              },
              {
                step: "02",
                title: "Design & Architecture",
                desc: "Our team designs intuitive user experiences and robust technical architectures that scale with your business.",
                icon: Lightbulb,
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "We build your solution using modern technologies, with rigorous testing to ensure quality and performance.",
                icon: Code,
              },
              {
                step: "04",
                title: "Deployment & Support",
                desc: "Smooth deployment followed by ongoing support and maintenance to keep your solution running optimally.",
                icon: Zap,
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#14CC60]/30"
              >
                <CardContent className="relative p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#14CC60] to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#14CC60]/30 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  )
}
