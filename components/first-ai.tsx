"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FirstAI() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section className="py-16 w-full">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl font-bold leading-tight mb-6">
  The first AI sales agent that thinks and acts like a real pro
</h2>
<p className="text-gray-600 mb-8">
  Traditional AI tools send bland, one-size-fits-all emails. ORBIT is different. It's Lumia’s intelligent sales agent — capable of thinking, planning, and adapting like a human, only faster and smarter. Every lead gets a message tailored specifically to them — relevant, personal, and impactful.
</p>

                       
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-md">
                            <div className="relative w-full aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-50 rounded-full opacity-60"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Neural network nodes visualization */}
                                    <div className="relative w-4/5 h-4/5">
                                        {/* Center node */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-200 rounded-full shadow-lg"></div>
                                        
                                        {/* Outer nodes */}
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-100 rounded-full shadow-md"></div>
                                        <div className="absolute top-1/4 right-0 w-5 h-5 bg-yellow-100 rounded-full shadow-md"></div>
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-100 rounded-full shadow-md"></div>
                                        <div className="absolute top-1/4 left-0 w-5 h-5 bg-yellow-100 rounded-full shadow-md"></div>
                                        <div className="absolute bottom-1/4 right-1/5 w-5 h-5 bg-yellow-100 rounded-full shadow-md"></div>
                                        <div className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-yellow-100 rounded-full shadow-md"></div>
                                        
                                        {/* Connecting lines */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            <line x1="50" y1="50" x2="50" y2="0" stroke="#fda4af" strokeWidth="0.5" />
                                            <line x1="50" y1="50" x2="100" y2="25" stroke="#fda4af" strokeWidth="0.5" />
                                            <line x1="50" y1="50" x2="50" y2="100" stroke="#fda4af" strokeWidth="0.5" />
                                            <line x1="50" y1="50" x2="0" y2="25" stroke="#fda4af" strokeWidth="0.5" />
                                            <line x1="50" y1="50" x2="80" y2="75" stroke="#fda4af" strokeWidth="0.5" />
                                            <line x1="50" y1="50" x2="20" y2="66" stroke="#fda4af" strokeWidth="0.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
