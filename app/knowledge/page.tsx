"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnimatedGradient from "@/components/animated-gradient"

export default function Knowledge() {
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
          Knowledge <span className="text-blue-500">on Demand</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Access instant answers and in-depth knowledge on any topic, powered by advanced AI.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Quick <span className="text-blue-500">Answers</span>
            </h3>
            <p className="text-gray-600">Get instant, accurate answers to your questions across various topics.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Research <span className="text-blue-500">Assistant</span>
            </h3>
            <p className="text-gray-600">Get help with research, fact-checking, and information gathering.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Topic <span className="text-blue-500">Exploration</span>
            </h3>
            <p className="text-gray-600">Dive deep into any subject with comprehensive explanations and insights.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Learning <span className="text-blue-500">Support</span>
            </h3>
            <p className="text-gray-600">Get assistance with learning new subjects and understanding complex topics.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Data <span className="text-blue-500">Analysis</span>
            </h3>
            <p className="text-gray-600">Get help interpreting data and understanding statistical information.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Expert <span className="text-blue-500">Insights</span>
            </h3>
            <p className="text-gray-600">Access expert-level knowledge and insights across various fields.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 