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

      {/* Code Demo Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <AnimatedText text={<>Create with <span className="text-blue-500">ease</span></>} className="block" initialDelay={0} />
          </h2>

          <CodeDemo />

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full font-medium">Modern Technologies</div>
            <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full font-medium">Smart Suggestions</div>
            <div className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full font-medium">Code Explanation</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <AnimatedText text={<>AI that <span className="text-blue-500">works for you</span></>} className="block" initialDelay={0} />
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              title={<>Creative <span className="text-blue-500">Ideas</span></>}
              description="Get inspiration for writing, projects, and problem solving."
              icon="Brain"
              href="/creative-ideas"
            />
            <FeatureCard
              title={<>Code <span className="text-blue-500">Help</span></>}
              description="Receive assistance writing, editing, and understanding code."
              icon="Code"
              href="/code-help"
            />
            <FeatureCard
              title={<>Knowledge <span className="text-blue-500">on Demand</span></>}
              description="Quick and accurate answers on any topic."
              icon="MessageSquare"
              href="/knowledge"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-blue-50 text-blue-800 px-6 py-3 rounded-full font-medium mb-12">
            Join thousands of happy users
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-4xl mx-auto">
            <AnimatedText text={<>Do <span className="text-blue-500">more</span> in less time</>} className="block" initialDelay={0} />
            <AnimatedText text={<>with <span className="text-blue-500">Lumia AI</span></>} className="block" initialDelay={200} />
          </h2>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-6 text-lg" onClick={() => window.open('https://lurenai.vercel.app', '_blank')}>
            Try it now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 mr-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">L</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Lumia.ai</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Empowering your creativity and productivity with advanced AI technology.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="/creative-ideas" className="text-gray-400 hover:text-blue-400 transition-colors">Creative Ideas</a>
                <a href="/code-help" className="text-gray-400 hover:text-blue-400 transition-colors">Code Help</a>
                <a href="/knowledge" className="text-gray-400 hover:text-blue-400 transition-colors">Knowledge</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <a href="mailto:info@lumia.ai" className="text-gray-400 hover:text-blue-400 transition-colors block">
                info@lumia.ai
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://lurenai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
