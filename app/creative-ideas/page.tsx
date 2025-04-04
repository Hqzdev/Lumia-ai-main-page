"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnimatedGradient from "@/components/animated-gradient"

export default function CreativeIdeas() {
  return (
    <main className="relative min-h-screen">
      <AnimatedGradient />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6">
        <Link 
          href="/" 
          className="inline-flex items-center px-4 py-2 rounded-lg bg-white/80 hover:bg-blue-500 text-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm "
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to  <span className="text-blue-500 ml-1"> Home</span>
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Creative <span className="text-blue-500">Ideas</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Get inspiration and creative suggestions for your projects, writing, and problem-solving tasks.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Writing <span className="text-blue-500">Assistance</span>
            </h3>
            <p className="text-gray-600">Get help with content creation, story ideas, and writing prompts for any genre.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Project <span className="text-blue-500">Brainstorming</span>
            </h3>
            <p className="text-gray-600">Generate innovative ideas and approaches for your projects and initiatives.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Problem <span className="text-blue-500">Solving</span>
            </h3>
            <p className="text-gray-600">Get creative solutions and strategies for tackling complex challenges.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Design <span className="text-blue-500">Inspiration</span>
            </h3>
            <p className="text-gray-600">Explore creative design concepts and visual ideas for your projects.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Content <span className="text-blue-500">Strategy</span>
            </h3>
            <p className="text-gray-600">Develop effective content plans and creative marketing approaches.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Innovation <span className="text-blue-500">Tools</span>
            </h3>
            <p className="text-gray-600">Access tools and techniques for creative thinking and innovation.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 