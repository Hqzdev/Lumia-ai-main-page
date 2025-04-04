"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import AnimatedGradient from "@/components/animated-gradient"

export default function CodeHelp() {
  return (
    <main className="relative min-h-screen">
      <AnimatedGradient />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full p-6">
        <Link 
          href="/" 
          className="inline-flex items-center px-4 py-2 rounded-lg bg-white/80 hover:bg-blue-500 text-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm
        ">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to  <span className="text-blue-500 ml-1"> Home</span>
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Code <span className="text-blue-500">Help</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Get expert assistance with coding, debugging, and understanding complex programming concepts.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Code <span className="text-blue-500">Review</span>
            </h3>
            <p className="text-gray-600">Get your code reviewed for best practices, performance, and potential improvements.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Debugging <span className="text-blue-500">Support</span>
            </h3>
            <p className="text-gray-600">Find and fix bugs in your code with expert guidance and solutions.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Code <span className="text-blue-500">Optimization</span>
            </h3>
            <p className="text-gray-600">Improve your code's performance, readability, and maintainability.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Architecture <span className="text-blue-500">Design</span>
            </h3>
            <p className="text-gray-600">Get help with designing scalable and maintainable software architecture.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Learning <span className="text-blue-500">Resources</span>
            </h3>
            <p className="text-gray-600">Access tutorials, documentation, and learning materials for various technologies.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">
              Best <span className="text-blue-500">Practices</span>
            </h3>
            <p className="text-gray-600">Learn and implement coding standards and industry best practices.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 