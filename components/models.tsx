"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Brain, Zap, Rocket, ChevronLeft, ChevronRight } from "lucide-react"

const modelData = {
    v1Max: {
        name: "Lumia V1 Max",
        color: "#8B5CF6",
        speed: 65,
        power: 85,
        tokens: 75,
        description: "Deep analytics and reasoning",
        icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    v2: {
        name: "Lumia V2",
        color: "#3B82F6",
        speed: 85,
        power: 85,
        tokens: 65,
        description: "Balance of speed and power",
        icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    v2Pro: {
        name: "Lumia V2 Pro",
        color: "#6366F1",
        speed: 100,
        power: 100,
        tokens: 50,
        description: "Maximum performance",
        icon: <Rocket className="w-8 h-8 text-blue-500" />
    }
};

const GraphBar = ({ value, color, label }: { value: number; color: string; label: string }) => (
    <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-gray-600">{label}</span>
        <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
            />
        </div>
        <span className="w-12 text-sm font-medium text-gray-700">{value}%</span>
    </div>
);

export default function Models() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const nextCard = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % Object.keys(modelData).length)
        setTimeout(() => setIsAnimating(false), 800)
    }

    const prevCard = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev - 1 + Object.keys(modelData).length) % Object.keys(modelData).length)
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
        <section className=" hidden md:flex py-16 bg-gradient-to-b from-gray-50 to-white w-full">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Lumia AI Models Comparison
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Detailed analysis of performance and efficiency
                    </p>

                    <div 
                        ref={containerRef}
                        className="relative h-[600px] w-full flex items-center justify-center overflow-hidden"
                    >
                        <AnimatePresence mode="popLayout">
                            {Object.entries(modelData).map(([key, model], index) => {
                                const position = (index - currentIndex + Object.keys(modelData).length) % Object.keys(modelData).length
                                const isVisible = position <= 2 || position >= Object.keys(modelData).length - 1
                                
                                if (!isVisible) return null

                                const xPosition = position * 800 - 800
                                const scale = position === 1 ? 1 : 0.9
                                const opacity = position === 1 ? 1 : 0.3
                                const zIndex = position === 1 ? 10 : 0

                                return (
                                    <motion.div
                                        key={key}
                                        initial={{
                                            x: xPosition,
                                            scale: 0.8,
                                            opacity: 0.4,
                                            filter: "blur(8px)"
                                        }}
                                        animate={{
                                            x: xPosition,
                                            scale,
                                            opacity,
                                            filter: position === 1 ? "blur(0px)" : "blur(8px)"
                                        }}
                                        exit={{
                                            x: xPosition,
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
                                        className={`absolute w-[800px] bg-white rounded-2xl shadow-lg p-8`}
                                        style={{ zIndex }}
                                    >
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${model.color}20` }}>
                                                {model.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold">{model.name}</h3>
                                                <p className="text-gray-600">{model.description}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                    <Zap className="w-5 h-5 text-yellow-500" />
                                                    Response Speed
                                                </h4>
                                                <GraphBar value={model.speed} color={model.color} label="Speed" />
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                    <Brain className="w-5 h-5 text-purple-500" />
                                                    Power and Analysis Depth
                                                </h4>
                                                <GraphBar value={model.power} color={model.color} label="Power" />
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                    <Rocket className="w-5 h-5 text-blue-500" />
                                                    Token Usage Efficiency
                                                </h4>
                                                <GraphBar value={model.tokens} color={model.color} label="Tokens" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>

                        
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
