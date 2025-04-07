"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { CodeIcon, Bot, Brain, Cloud, Smartphone, Globe } from "lucide-react"
import { useRef } from "react"


const integrationItems = [
    {
        id: 1,
        title: "Web Development",
        description: "Build and deploy websites with HTML, CSS, and JavaScript.",
        icon: <Globe className="w-6 h-6 text-blue-500" />,
    },
    {
        id: 2,
        title: "Telegram Bot Development",
        description: "Build and deploy telegram bots with TypeScript, Tailwind CSS, and Next.js.",
        icon: <Bot className="w-6 h-6 text-purple-500" />,
    },
    {
        id: 3,
        title: "AI Development",
        description: "Build and deploy AI applications with Python, TensorFlow, and Keras.",
        icon: <Brain className="w-6 h-6 text-green-500" />,
    },
    {
        id: 4,
        title: "Serverless Development",
        description: "Build and deploy serverless applications with AWS Lambda and AWS API Gateway.",
        icon: <CodeIcon className="w-6 h-6 text-red-500" />,
    },
    {
        id: 5,
        title: "Cloud Development",
        description: "Build and deploy cloud applications with AWS, Azure, and Google Cloud.",
        icon: <Cloud className="w-6 h-6 text-yellow-500" />,
    },
    {
        id: 6,
        title: "Mobile Development",
        description: "Build and deploy mobile applications with React Native and Expo.",
        icon: <Smartphone className="w-6 h-6 text-pink-500" />,
    },
]

export default function Integration() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })



    return (
    <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-center mb-4">
                    Our <span className="text-blue-500">Integration</span>
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    We integrate with the latest and greatest tools and technologies to provide the best possible experience for our users.
                </p>

                <div className="grid md:grid-cols-2 bg-white lg:grid-cols-3 gap-8">
                    {integrationItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: item.id * 0.1 }}
                        >
                            <motion.div 
                                className="bg-white border-2 border-gray-200 rounded-2xl p-6 "
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center mb-4"
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
)

}
