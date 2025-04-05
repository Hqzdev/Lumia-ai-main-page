"use client"

import { Check } from "lucide-react"
import AnimatedGradient from "@/components/animated-gradient"
import FeatureCard from "@/components/feature-card"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import FloatingElements from "@/components/floating-elements"
import CodeDemo from "@/components/code-demo"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Metrics from "@/components/metrics"
import Footer from "@/components/footer"
import AIRoadmap from "@/components/ai-roadmap"
import ExamplePrompts from "@/components/example-prompts"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <Testimonials />
      <Metrics />
      <AIRoadmap />
      <ExamplePrompts />
      <Footer />
    </main>
  )
}
