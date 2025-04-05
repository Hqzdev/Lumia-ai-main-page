"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const metricsData = [
  {
    id: 1,
    title: "User Growth",
    description: "Monthly active users growth over the past year",
    data: [
      { month: 'Jan', users: 1000 },
      { month: 'Feb', users: 1500 },
      { month: 'Mar', users: 2200 },
      { month: 'Apr', users: 3000 },
      { month: 'May', users: 4000 },
      { month: 'Jun', users: 5200 },
      { month: 'Jul', users: 6500 },
      { month: 'Aug', users: 8000 },
      { month: 'Sep', users: 10000 },
      { month: 'Oct', users: 12500 },
      { month: 'Nov', users: 15000 },
      { month: 'Dec', users: 18000 },
    ],
    color: "#3B82F6"
  },
  {
    id: 2,
    title: "AI Performance",
    description: "AI model accuracy improvement over time",
    data: [
      { month: 'Jan', accuracy: 75 },
      { month: 'Feb', accuracy: 78 },
      { month: 'Mar', accuracy: 82 },
      { month: 'Apr', accuracy: 85 },
      { month: 'May', accuracy: 88 },
      { month: 'Jun', accuracy: 90 },
      { month: 'Jul', accuracy: 92 },
      { month: 'Aug', accuracy: 94 },
      { month: 'Sep', accuracy: 95 },
      { month: 'Oct', accuracy: 96 },
      { month: 'Nov', accuracy: 97 },
      { month: 'Dec', accuracy: 98 },
    ],
    color: "#10B981"
  },
  {
    id: 3,
    title: "Response Time",
    description: "Average response time in milliseconds",
    data: [
      { month: 'Jan', time: 1200 },
      { month: 'Feb', time: 1000 },
      { month: 'Mar', time: 850 },
      { month: 'Apr', time: 700 },
      { month: 'May', time: 600 },
      { month: 'Jun', time: 500 },
      { month: 'Jul', time: 450 },
      { month: 'Aug', time: 400 },
      { month: 'Sep', time: 350 },
      { month: 'Oct', time: 300 },
      { month: 'Nov', time: 250 },
      { month: 'Dec', time: 200 },
    ],
    color: "#F59E0B"
  }
]

export default function Metrics() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [isAnimating, setIsAnimating] = useState(false)

  const nextCard = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % metricsData.length)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const prevCard = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + metricsData.length) % metricsData.length)
    setTimeout(() => setIsAnimating(false), 800)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isAnimating) return
      
      if (e.deltaY > 0) {
        nextCard()
      } else if (e.deltaY < 0) {
        prevCard()
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [isAnimating])

  return (
    <section className="py-16">
      <div className="container w-[900px] mx-auto px-4 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our <span className="text-blue-500">Metrics</span>
        </motion.h2>
        
        <div 
          ref={containerRef}
          className="relative h-[700px] flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {metricsData.map((metric, index) => {
              const position = index - currentIndex
              const isVisible = Math.abs(position) <= 1
              
              if (!isVisible) return null

              return (
                <motion.div
                  key={metric.id}
                  initial={{ 
                    x: position * 100 + '%',
                    scale: 0.7,
                    opacity: 0,
                    filter: "blur(4px)"
                  }}
                  animate={{ 
                    x: position * 100 + '%',
                    scale: position === 0 ? 1 : 0.7,
                    opacity: position === 0 ? 1 : 0.2,
                    filter: position === 0 ? "blur(0px)" : "blur(4px)"
                  }}
                  exit={{ 
                    x: position * 100 + '%',
                    scale: 0.7,
                    opacity: 0,
                    filter: "blur(4px)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                    duration: 0.5
                  }}
                  className={`absolute inset-x-0 mx-auto bg-white border-2 border-gray-200 rounded-2xl p-8 cursor-grab active:cursor-grabbing ${
                    position === 0 ? "z-10" : "z-0"
                  }`}
                  style={{
                    transform: `translateX(${position * 100}%) scale(${position === 0 ? 1 : 0.7})`,
                    opacity: position === 0 ? 1 : 0.2,
                    pointerEvents: position === 0 ? 'auto' : 'none'
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">{metric.title}</h3>
                    <p className="text-gray-600 text-lg">{metric.description}</p>
                  </div>
                  <div className="h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={metric.data}
                        margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
                      >
                        <defs>
                          <linearGradient id={`gradient-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={metric.color} stopOpacity={0.3}/>
                            <stop offset="95%" stopColor={metric.color} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#6B7280"
                          fontSize={14}
                          tickLine={false}
                          axisLine={{ stroke: '#E5E7EB' }}
                        />
                        <YAxis 
                          stroke="#6B7280"
                          fontSize={14}
                          tickLine={false}
                          axisLine={false}
                          width={60}
                        />
                        <Tooltip 
                          contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #E5E7EB',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            padding: '0.75rem'
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey={metric.title === "Response Time" ? "time" : metric.title === "AI Performance" ? "accuracy" : "users"}
                          stroke={metric.color}
                          strokeWidth={3}
                          fill={`url(#gradient-${metric.id})`}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 