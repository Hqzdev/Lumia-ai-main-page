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
      {/* Animated background */}
      <AnimatedGradient />
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 pb-16">
        <div className="container mx-auto text-center">
          <div className="text-purple-600 mb-4 flex items-center justify-center">
            <span>Powered by advanced</span>
            <AnimatedText text="AI technology" className="font-bold mx-2" initialDelay={500} />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-tight">
            <AnimatedText text="Your intelligent AI assistant" className="block" initialDelay={0} />
            <AnimatedText text="for all your needs" className="block" initialDelay={200} />
          </h1>

          <p className="text-xl mb-12 max-w-2xl mx-auto">
            lumia.ai helps you answer questions, write code, generate content, and solve problems with human-like
            intelligence.
          </p>

          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8 py-6 text-lg" onClick={() => window.open('https://lurenai.vercel.app', '_blank')}>
            Try lumia AI Free
          </Button>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center">
              <Check className="text-purple-500 mr-2 h-5 w-5" />
              <span>Answer Questions</span>
            </div>
            <div className="flex items-center">
              <Check className="text-purple-500 mr-2 h-5 w-5" />
              <span>Write & Debug Code</span>
            </div>
            <div className="flex items-center">
              <Check className="text-purple-500 mr-2 h-5 w-5" />
              <span>Generate Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* Code Demo Section */}
      <section className="relative z-10 bg-white py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <AnimatedText text="Write, explain, and debug code" className="block" initialDelay={0} />
          </h2>

          <CodeDemo />

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-medium">Multiple languages</div>
            <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-medium">Syntax highlighting</div>
            <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-medium">Debugging help</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-gray-900 text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <AnimatedText text="Powerful capabilities at your fingertips" className="block" initialDelay={0} />
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              title="Answer Questions"
              description="Get accurate answers to your questions on any topic with detailed explanations."
              icon="MessageSquare"
            />
            <FeatureCard
              title="Code Assistant"
              description="Write, debug, and explain code in multiple programming languages."
              icon="Code"
            />
            <FeatureCard
              title="Content Creation"
              description="Generate articles, summaries, emails, and creative content."
              icon="FileText"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-medium mb-12">
            Trusted by thousands of users worldwide
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-4xl mx-auto">
            <AnimatedText text="Enhance your productivity" className="block" initialDelay={0} />
            <AnimatedText text="with intelligent assistance" className="block" initialDelay={200} />
          </h2>

          <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-8 py-6 text-lg" onClick={() => window.open('https://lurenai.vercel.app', '_blank')}>
            Get started for free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2"></div>
              <span className="text-2xl font-bold">lumia.ai</span>
            </div>

            <div className="flex space-x-8">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} lumia AI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

