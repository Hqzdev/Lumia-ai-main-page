"use client"

import { useState } from "react"
import { MessageSquare, Code, FileText, Brain, ArrowRight } from "lucide-react"
import type { JSX, ReactNode } from "react"
import Link from "next/link"

interface FeatureCardProps {
  title: ReactNode
  description: string
  icon: string
  href: string
}

export default function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
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
      className="bg-white/60 backdrop-blur-md p-6 rounded-xl border-2 border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mb-4 text-white">{getIcon()}</div>

      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <Link 
        href={href}
        className={`inline-flex items-center text-blue-500 transition-all duration-300 ${isHovered ? "translate-x-2" : ""}`}
      >
        <span className="mr-2">Learn more</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}

