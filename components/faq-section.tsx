'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    title: "What technologies do you specialize in?",
    description: "We work with modern web technologies including React, Next.js, Node.js, Python, and AI/ML frameworks. Our stack is constantly evolving to include the latest tools and best practices for optimal performance and scalability."
  },
  {
    title: "How long does a typical project take?",
    description: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    title: "Do you provide ongoing support after launch?",
    description: "Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance. We believe in building long-term partnerships with our clients."
  },
  {
    title: "What is your development process?",
    description: "We follow an agile methodology with regular client communication. Our process includes discovery, design, development, testing, and deployment phases, with your feedback incorporated throughout."
  },
  {
    title: "How do you handle project communication?",
    description: "We maintain transparent communication through regular updates, video calls, and project management tools. You'll have direct access to our team and regular progress reports."
  },
  {
    title: "What makes TechSetu different from other agencies?",
    description: "We combine cutting-edge technology with a deep understanding of business needs. Our AI-first approach and focus on automation sets us apart, helping businesses not just build solutions, but optimize their entire operations."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-[#1aa153]/30 rounded-full px-6 py-3 mb-8">
            <span className="text-[#1aa153] font-medium text-sm">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Got Questions?
            <span className="block bg-gradient-to-r from-[#1aa153] to-green-500 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about working with TechSetu
          </p>
        </div>

        <div className="h-fit border border-[#1aa153]/30 rounded-2xl p-2 bg-white/80 backdrop-blur-xl">
          {faqData.map((tab, index) => (
            <div
              key={index}
              className={`overflow-hidden ${index !== faqData.length - 1 ? 'border-b border-[#1aa153]/20' : ''}`}
            >
              <button
                className="p-6 w-full cursor-pointer text-left text-lg font-semibold text-slate-900 hover:text-[#1aa153] transition-all duration-300 flex gap-3 items-center"
                onClick={() => handleClick(index)}
              >
                <Plus
                  className={`transition-transform ease-in-out w-5 h-5 text-[#1aa153] flex-shrink-0 ${
                    activeIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                />
                {tab.title}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 p-6 pt-0 leading-relaxed">
                  {tab.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Still have questions? We'd love to hear from you!</p>
          <Button
            asChild
            className="bg-gradient-to-r from-[#1aa153] to-green-500 hover:from-[#1aa153]/90 hover:to-green-500/90 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 rounded-full"
          >
            <Link href="mailto:hello@techsetu.com">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 