"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Peterson",
    role: "Web Developer",
    content: "Lumia.AI.AI has significantly accelerated my workflow. Now I can generate code faster and more efficiently. The AI suggestions are always relevant and help me write better code.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Johnson",
    role: "Copywriter",
    content: "An excellent tool for content creation! Helps overcome creative blocks and generate fresh ideas. The AI understands context perfectly and provides relevant suggestions.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    rating: 5
  },
  {
    id: 3,
    name: "David Smith",
    role: "Entrepreneur",
    content: "Using Lumia.AI.AI for market analysis and business idea generation. The results are impressive! It helps me make data-driven decisions and identify new opportunities.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 4
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "UX/UI Designer",
    content: "Helps quickly prototype interfaces and find unconventional design solutions. The AI suggestions have significantly improved our design process and user experience.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Data Scientist",
    content: "The AI-powered insights have transformed how I approach data analysis and visualization. It helps me identify patterns and trends that I might have missed otherwise.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 4
  },
  {
    id: 6,
    name: "Sarah Lee",
    role: "Product Manager",
    content: "Streamlines our product development process and helps us make data-driven decisions faster.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Marketing Director",
    content: "Revolutionized our content strategy. The AI suggestions are always on point and engaging.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 4
  },
  {
    id: 8,
    name: "Lisa Chen",
    role: "Software Engineer",
    content: "The code generation features are a game-changer. It's like having a senior developer by your side.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    rating: 5
  }
]

const StarRating = ({ rating = 5 }: { rating?: number }) => {
    return (
      <div className="hidden md:block flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    )
  }
  
  export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.1 })
    const [isAnimating, setIsAnimating] = useState(false)
  
    const nextCard = () => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setTimeout(() => setIsAnimating(false), 800)
    }
  
    const prevCard = () => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
  
      container.addEventListener("wheel", handleWheel, { passive: false })
      return () => container.removeEventListener("wheel", handleWheel)
    }, [isAnimating])
  
    return (
      // Секция на всю ширину, содержимое будет по центру
      <section className="py-16 w-full flex justify-center"> 
        {/* Контейнер с максимальной шириной и авто-маржинами */}
        <div className="max-w-[900px] w-full mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Our <span className="text-blue-500">Users</span> Say
          </motion.h2>
  
          {/* Сам блок со слайдером, центрируем через mx-auto */}
          <div 
            ref={containerRef}
            className="relative h-[400px] max-w-[900px] w-full mx-auto flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              {testimonials.map((testimonial, index) => {
                const position = index - currentIndex
                const isVisible = Math.abs(position) <= 1
                
                if (!isVisible) return null
  
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{
                      x: position * 400,
                      scale: 0.8,
                      opacity: 0.4,
                      filter: "blur(8px)"
                    }}
                    animate={{
                      x: position * 400,
                      scale: position === 0 ? 1 : 0.9,
                      opacity: position === 0 ? 1 : 0.3,
                      filter: position === 0 ? "blur(0px)" : "blur(8px)"
                    }}
                    exit={{
                      x: position * 400,
                      scale: 0.8,
                      opacity: 0.4,
                      filter: "blur(8px)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8,
                      duration: 0.8
                    }}
                    className={`absolute w-[600px] bg-white border-2 border-gray-200 rounded-xl p-8 cursor-grab active:cursor-grabbing ${
                      position === 0 ? "z-10" : "z-0"
                    }`}
                    style={{
                      transform: `translateX(${position * 400}px) scale(${position === 0 ? 1 : 0.9})`,
                      opacity: position === 0 ? 1 : 0.3,
                      pointerEvents: position === 0 ? "auto" : "none"
                    }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic">
                      "{testimonial.content}"
                    </p>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    )
  }