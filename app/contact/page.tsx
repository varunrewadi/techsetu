"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-800 text-emerald-100 hover:bg-emerald-700">
              Free Consultation Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with us today for a free
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-emerald-800 shadow-xl bg-slate-800">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                            <Input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="John Doe"
                              required
                              className="border-emerald-600 focus:border-emerald-500 bg-slate-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="john@company.com"
                              required
                              className="border-emerald-600 focus:border-emerald-500 bg-slate-700 text-white"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                            <Input
                              type="text"
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              placeholder="Your Company"
                              className="border-emerald-600 focus:border-emerald-500 bg-slate-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Service Needed *</label>
                            <Select
                              value={formData.service}
                              onValueChange={(value) => handleInputChange("service", value)}
                            >
                              <SelectTrigger className="border-emerald-600 focus:border-emerald-500 bg-slate-700 text-white">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 text-white">
                                <SelectItem value="web-development">Web Development</SelectItem>
                                <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                                <SelectItem value="automation">Automation</SelectItem>
                                <SelectItem value="consultation">Consultation</SelectItem>
                                <SelectItem value="multiple">Multiple Services</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Project Budget</label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="border-emerald-600 focus:border-emerald-500 bg-slate-700 text-white">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 text-white">
                              <SelectItem value="under-10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="over-100k">Over $100,000</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-2">Project Details *</label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                            rows={6}
                            required
                            className="border-emerald-600 focus:border-emerald-500 bg-slate-700 text-white"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                      <p className="text-slate-400 mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/">Return to Home</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-emerald-800 bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-slate-400">hello@techsetu.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-slate-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Office</p>
                        <p className="text-slate-400">San Francisco, CA</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                      <div>
                        <p className="font-medium text-white">Business Hours</p>
                        <p className="text-slate-400">Mon-Fri: 9AM-6PM PST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-800 bg-gradient-to-br from-emerald-900 to-green-900">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose TechSetu?</h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Free initial consultation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      24-hour response time
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Transparent pricing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dedicated project manager
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      100% satisfaction guarantee
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-800 bg-slate-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/services" className="block text-emerald-600 hover:text-emerald-800 transition-colors">
                      → View Our Services
                    </Link>
                    <Link href="/portfolio" className="block text-emerald-600 hover:text-emerald-800 transition-colors">
                      → See Our Work
                    </Link>
                    <Link href="/about" className="block text-emerald-600 hover:text-emerald-800 transition-colors">
                      → About Our Team
                    </Link>
                    <Link href="/blog" className="block text-emerald-600 hover:text-emerald-800 transition-colors">
                      → Read Our Blog
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-400">Quick answers to common questions about our services and process</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-2">How long does a typical project take?</h3>
              <p className="text-slate-400 mb-6">
                Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications
                can take 3-6 months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Do you provide ongoing support?</h3>
              <p className="text-slate-400 mb-6">
                Yes! We offer comprehensive maintenance and support packages to ensure your solution continues to
                perform optimally after launch.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">What's included in the consultation?</h3>
              <p className="text-slate-400 mb-6">
                Our free consultation includes project assessment, technology recommendations, timeline estimation, and
                a detailed proposal with transparent pricing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Can you work with our existing systems?</h3>
              <p className="text-slate-400 mb-6">
                We specialize in integrating with existing systems and can help modernize your current technology stack
                without disrupting operations.
              </p>
            </div>
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
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400">
                <li>hello@techsetu.com</li>
                <li>+1 (555) 123-4567</li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
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
