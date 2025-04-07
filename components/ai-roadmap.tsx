"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Cpu, Zap, Network, Code, Bot, Lock, Globe } from "lucide-react"

const roadmapItems = [
  {
    id: 1,
    icon: Brain,
    title: "Enhanced Language Understanding",
    description: "Advanced natural language processing capabilities for better context understanding and more accurate responses.",
    status: "completed",
    date: "Q1 2024",
    iconColor: "text-purple-500"
  },
  {
    id: 2,
    icon: Code,
    title: "Code Generation 2.0",
    description: "Improved code generation with better pattern recognition and support for more programming languages.",
    status: "completed",
    date: "Q2 2024",
    iconColor: "text-purple-500"
  },
  {
    id: 3,
    icon: Network,
    title: "Multi-Modal Processing",
    description: "Integration of image and text processing for comprehensive content understanding and generation.",
    status: "in-progress",
    date: "Q3 2024",
    iconColor: "text-purple-500"
  },
  {
    id: 4,
    icon: Cpu,
    title: "Advanced Neural Architecture",
    description: "Implementation of new neural network architectures for faster and more efficient processing.",
    status: "planned",
    date: "Q4 2024",
    iconColor: "text-purple-500"
  },
  {
    id: 5,
    icon: Bot,
    title: "Autonomous Learning",
    description: "Self-improving capabilities through continuous learning from user interactions.",
    status: "planned",
    date: "Q1 2025",
    iconColor: "text-purple-500"
  },
  {
    id: 6,
    icon: Lock,
    title: "Enhanced Security",
    description: "Advanced encryption and privacy features for secure data handling and user protection.",
    status: "planned",
    date: "Q2 2025",
    iconColor: "text-purple-500"
  }
]

export default function AIRoadmap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            Our AI <span className="text-blue-500">Development Path</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Continuous improvement and innovation in AI technology to provide better solutions for our users
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200" />

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "completed" 
                        ? "bg-green-100 text-green-800"
                        : item.status === "in-progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {item.date}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === "completed"
                        ? "bg-green-100"
                        : item.status === "in-progress"
                        ? "bg-blue-100"
                        : "bg-gray-100"
                    }`}>
                      {<item.icon className={`w-6 h-6 ${item.iconColor}`} />}
                    </div>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 