import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Code,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Database,
  Bot,
  BarChart,
  Workflow,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
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
            <Badge className="mb-6 bg-[#14CC60]/10 text-[#14CC60] hover:bg-[#14CC60]/20">Comprehensive Solutions</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              Our
              <span className="block bg-gradient-to-r from-[#14CC60] to-green-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              From cutting-edge web development to intelligent AI solutions and seamless automation, we provide the
              technology services your business needs to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#14CC60]/10 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-[#14CC60]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Web Development</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                We create modern, responsive, and high-performance websites and web applications that drive business
                growth and provide exceptional user experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Custom Web Applications</h4>
                    <p className="text-slate-600">
                      Tailored solutions built with modern frameworks like React, Next.js, and Node.js
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">E-commerce Platforms</h4>
                    <p className="text-slate-600">
                      Full-featured online stores with payment integration and inventory management
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Progressive Web Apps</h4>
                    <p className="text-slate-600">App-like experiences that work seamlessly across all devices</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-[#14CC60] hover:bg-[#14CC60]/90 rounded-full">
                <Link href="#contact">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-[#14CC60]/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-[#14CC60] mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Responsive Design</h3>
                  <p className="text-sm text-slate-600">
                    Mobile-first approach ensuring perfect display on all devices
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#14CC60]/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-8 w-8 text-[#14CC60] mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Mobile Apps</h3>
                  <p className="text-sm text-slate-600">Cross-platform mobile applications using React Native</p>
                </CardContent>
              </Card>
              <Card className="border-[#14CC60]/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-[#14CC60] mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Backend Systems</h3>
                  <p className="text-sm text-slate-600">Scalable APIs and database architecture</p>
                </CardContent>
              </Card>
              <Card className="border-[#14CC60]/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-[#14CC60] mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Quality Assurance</h3>
                  <p className="text-sm text-slate-600">Comprehensive testing and optimization</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-green-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Bot className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">AI Chatbots</h3>
                    <p className="text-sm text-slate-600">Intelligent customer service automation</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <BarChart className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">Predictive Analytics</h3>
                    <p className="text-sm text-slate-600">Data-driven insights and forecasting</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Brain className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">Machine Learning</h3>
                    <p className="text-sm text-slate-600">Custom ML models for your business</p>
                  </CardContent>
                </Card>
                <Card className="border-green-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Database className="h-8 w-8 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">Data Processing</h3>
                    <p className="text-sm text-slate-600">Intelligent data analysis and insights</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                  <Brain className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">AI Solutions</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                Harness the power of artificial intelligence to automate processes, gain insights, and make smarter
                business decisions with our custom AI solutions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Intelligent Chatbots</h4>
                    <p className="text-slate-600">24/7 customer support with natural language processing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Predictive Analytics</h4>
                    <p className="text-slate-600">Forecast trends and make data-driven decisions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Process Optimization</h4>
                    <p className="text-slate-600">AI-powered workflow improvements and efficiency gains</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700 rounded-full">
                <Link href="#contact">
                  Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section id="automation" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Automation</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                Streamline your operations and eliminate repetitive tasks with our intelligent automation solutions that
                save time, reduce errors, and increase productivity.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Workflow Automation</h4>
                    <p className="text-slate-600">Automate complex business processes and approvals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Data Integration</h4>
                    <p className="text-slate-600">Connect and synchronize data across multiple systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#14CC60] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Report Generation</h4>
                    <p className="text-slate-600">Automated reporting and analytics dashboards</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-teal-600 hover:bg-teal-700 rounded-full">
                <Link href="#contact">
                  Automate Your Processes <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-teal-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Workflow className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Process Automation</h3>
                  <p className="text-sm text-slate-600">Streamline repetitive business workflows</p>
                </CardContent>
              </Card>
              <Card className="border-teal-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Data Sync</h3>
                  <p className="text-sm text-slate-600">Real-time data synchronization</p>
                </CardContent>
              </Card>
              <Card className="border-teal-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <BarChart className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Analytics</h3>
                  <p className="text-sm text-slate-600">Automated insights and reporting</p>
                </CardContent>
              </Card>
              <Card className="border-teal-500/20 bg-white/80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Integration</h3>
                  <p className="text-sm text-slate-600">Connect all your business tools</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#14CC60] to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which of our services can help you achieve your business goals
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
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
