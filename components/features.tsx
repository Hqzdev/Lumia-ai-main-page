"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedText from "@/components/animated-text"
import FeatureCard from "@/components/feature-card"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="relative py-24">
      <div className="container mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  )
} 