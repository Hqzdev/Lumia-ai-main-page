"use client"

import { Check } from "lucide-react"
import AnimatedGradient from "@/components/animated-gradient"
import FeatureCard from "@/components/feature-card"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import FloatingElements from "@/components/floating-elements"
import CodeDemo from "@/components/code-demo"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Анимированный фон */}
      <AnimatedGradient />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 pb-16">
        <div className="container mx-auto text-center">
          <div className="text-blue-600 mb-4 flex items-center justify-center">
            <span>Powered by</span>
            <AnimatedText text="Lumia LLC" className="font-bold mx-2" initialDelay={500} />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            <AnimatedText text="An AI companion" className="block" initialDelay={0} />
            <AnimatedText text="that boosts your creativity" className="block" initialDelay={200} />
          </h1>

          <p className="text-xl mb-12 max-w-2xl mx-auto">
            With Lumia AI, you can write smarter, solve faster, and think bigger — all with one powerful assistant.
          </p>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg" onClick={() => window.open('https://lurenai.vercel.app', '_blank')}>
            Start Using Lumia
          </Button>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <Check className="text-blue-500 mr-2 h-5 w-5" />
              <span>Creative Writing</span>
            </div>
            <div className="flex items-center">
              <Check className="text-blue-500 mr-2 h-5 w-5" />
              <span>Instant Answers</span>
            </div>
            <div className="flex items-center">
              <Check className="text-blue-500 mr-2 h-5 w-5" />
              <span>Smart Problem Solving</span>
            </div>
          </div>
        </div>
      </section>

      {/* Code Demo Section */}
      <section className="relative z-10 bg-white py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <AnimatedText text="Build apps with ease" className="block" initialDelay={0} />
          </h2>

          <CodeDemo />

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">Support for modern frameworks</div>
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">Smart suggestions</div>
            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">Code explanation</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-gray-900 text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <AnimatedText text="AI that works for you" className="block" initialDelay={0} />
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              title="Creative Ideas"
              description="Get inspiration for writing, projects, and problem solving."
              icon="Sparkles"
            />
            <FeatureCard
              title="Code Help"
              description="Receive assistance writing, editing, and understanding code."
              icon="Terminal"
            />
            <FeatureCard
              title="Knowledge on Demand"
              description="Quick and accurate answers on any topic."
              icon="BookOpen"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium mb-12">
            Join thousands of happy users
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-4xl mx-auto">
            <AnimatedText text="Do more in less time" className="block" initialDelay={0} />
            <AnimatedText text="with Lumia AI by your side" className="block" initialDelay={200} />
          </h2>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg" onClick={() => window.open('https://lurenai.vercel.app', '_blank')}>
            Try it now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-2"></div>
              <span className="text-2xl font-bold">Lumia.ai</span>
            </div>

            <div className="flex space-x-8">
              <a href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Lumia AI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
