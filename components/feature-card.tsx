"use client"

import { useState } from "react"
import { MessageSquare, Code, FileText, Brain, ArrowRight } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "MessageSquare":
        return <MessageSquare className="h-8 w-8" />
      case "Code":
        return <Code className="h-8 w-8" />
      case "FileText":
        return <FileText className="h-8 w-8" />
      case "Brain":
        return <Brain className="h-8 w-8" />
      default:
        return <MessageSquare className="h-8 w-8" />
    }
  }

  return (
    <div
      className="bg-gray-800 p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center mb-4">{getIcon()}</div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div
        className={`flex items-center text-purple-400 transition-all duration-300 ${isHovered ? "translate-x-2" : ""}`}
      >
        <span className="mr-2">Learn more</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  )
}

