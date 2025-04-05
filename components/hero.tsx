"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import AnimatedGradient from "@/components/animated-gradient"
import FloatingElements from "@/components/floating-elements"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16">
      {/* Animated background */}
      <AnimatedGradient />
      <FloatingElements />

      <div className="relative z-10 container mx-auto text-center">
        <div className="text-blue-600 mb-4 flex items-center justify-center">
          <span>Powered by</span>
          <AnimatedText text="Lumia LLC" className="font-bold mx-2" initialDelay={500} />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
          <AnimatedText text={<>Artificial <span className="text-blue-500">Intelligence</span></>} className="block" initialDelay={0} />
          <AnimatedText text={<>for your <span className="text-blue-500">success</span></>} className="block" initialDelay={200} />
        </h1>

        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Lumia AI - your reliable assistant for solving complex problems, generating ideas, and boosting productivity.
        </p>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg" onClick={() => window.open('https://lurenai.vercel.app', '_blank')}>
          Start Using Lumia
        </Button>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center">
            <Check className="text-blue-500 mr-2 h-5 w-5" />
            <span>Idea Generation</span>
          </div>
          <div className="flex items-center">
            <Check className="text-blue-500 mr-2 h-5 w-5" />
            <span>Instant Answers</span>
          </div>
          <div className="flex items-center">
            <Check className="text-blue-500 mr-2 h-5 w-5" />
            <span>Smart Solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
} 