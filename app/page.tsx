import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  Brain,
  Zap,
  Users,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <Navigation />

      {/*MODIFIED HERO SECTION*/}
      <section className="relative flex items-center overflow-hidden min-h-[100svh]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#1aa153]/5 via-transparent to-green-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1aa153]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reverted sm: padding to original values */}
          <div className="text-center pt-24 pb-12 sm:pt-20 sm:pb-16">
            {/* Larger mobile font size, original desktop sizes restored */}

            <h1 className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              We Build What
              <span className="block bg-gradient-to-r from-[#1aa153]  to-[#1aa153] bg-clip-text text-transparent">
                the World Needs Next.
              </span>
            </h1>

            {/* Larger mobile font size, original desktop sizes & max-width restored */}
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-md sm:max-w-xl md:max-w-4xl mx-auto leading-relaxed">
              From MVPs to full-scale platforms, we help startups, creators, and
              nonprofits go digital — fast.
              <span className="font-semibold text-[#1aa153]">
                {" "}
                Let's create something real, together.
              </span>
            </p>

            {/* This mobile-first pattern correctly scopes changes to mobile view only */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 max-w-sm mx-auto sm:max-w-none">
              <Link href="#footer" className="flex items-center justify-center">
                <button className="group cursor-pointer slide-anime px-5 py-3 rounded-full w-[180px] border border-[#1aa153] bg-green-400 text-black dark:text-black flex justify-between items-center font-semibold ">
                  Schedule Call{" "}
                  <div className="group-hover:translate-x-2 transition-all">
                    <ArrowRight />
                  </div>
                </button>
              </Link>

              <Link
                href="/portfolio"
                className="flex items-center justify-center"
              >
                <button className="relative inline-flex h-12 w-[180px] overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 hover:scale-105 transition-transform duration-300">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a7f3d0_0%,#34d399_25%,#22c55e_50%,#16a34a_75%,#a7f3d0_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#6ee7b7_0%,#34d399_25%,#22c55e_50%,#16a34a_75%,#6ee7b7_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-[#070e41] bg-[#ffffff] px-8 py-1 text-lg font-semibold dark:text-gray-50 text-black backdrop-blur-3xl">
                    Our Work
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --- END OF MODIFIED SECTION --- */}

      {/* Modern Services Overview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#1aa153]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#1aa153] font-medium text-sm">
                Our Core Services
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Comprehensive Technology
              <span className="block bg-gradient-to-r from-[#1aa153] to-green-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Designed to accelerate your business growth and digital
              transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Web Development Card */}
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#1aa153]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1aa153]/5 to-green-500/5 opacity-0 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1aa153] to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Web Development
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Modern web experiences and advanced technologies for dynamic
                  digital solutions
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-[#1aa153]/50 text-[#1aa153] hover:bg-[#1aa153]/10 bg-transparent transition-all duration-300 rounded-full"
                >
                  <Link href="/services#web-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Solutions Card */}
            <Card className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-green-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-[#1aa153]/5 opacity-0 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-[#1aa153] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI Solutions
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Intelligent systems and machine learning solutions to optimize
                  your operations
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
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-[#1aa153]/5 opacity-0 transition-opacity duration-500"></div>
              <CardContent className="relative p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-[#1aa153] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Automation
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Streamline workflows and reduce manual tasks with intelligent
                  automation
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
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#1aa153]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#1aa153] font-medium text-sm">
                About TechSetu
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Excellence in Every
              <span className="block bg-gradient-to-r from-[#1aa153] to-green-500 bg-clip-text text-transparent">
                Detail
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a passionate team of technologists dedicated to helping
              businesses harness the power of modern technology
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose TechSetu?
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We bring together the best of modern technology and business
                expertise to deliver solutions that drive real results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/50 backdrop-blur-xl rounded-2xl border border-[#1aa153]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1aa153] to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Modern Technology Stack
                </h4>
                <p className="text-slate-600">
                  We use the latest technologies and frameworks to build fast,
                  scalable, and maintainable solutions
                </p>
              </div>

              <div className="text-center p-6 bg-white/50 backdrop-blur-xl rounded-2xl border border-[#1aa153]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-[#1aa153] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  AI-First Approach
                </h4>
                <p className="text-slate-600">
                  Leveraging artificial intelligence to create intelligent,
                  automated solutions that grow with your business
                </p>
              </div>

              <div className="text-center p-6 bg-white/50 backdrop-blur-xl rounded-2xl border border-[#1aa153]/20">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-[#1aa153] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Rapid Development
                </h4>
                <p className="text-slate-600">
                  Quick turnaround times without compromising quality, helping
                  you get to market faster
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
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#1aa153]/30 rounded-full px-6 py-3 mb-8">
              <span className="text-[#1aa153] font-medium text-sm">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Development
              <span className="block bg-gradient-to-r from-[#1aa153] to-green-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and
              exceptional results
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
                className="relative overflow-hidden bg-white/80 backdrop-blur-xl border border-[#1aa153]/30"
              >
                <CardContent className="relative p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1aa153] to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#1aa153]/30 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {process.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  );
}
