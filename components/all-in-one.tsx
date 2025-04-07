"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Search, Infinity, Zap, Mail, Globe, Database, Upload, Link } from "lucide-react"
import Image from "next/image"

const features = [
    {
        id: 1,
        title: "Advanced AI Model with 1.5В+ Parameters",
        description: "Lumia.AI is powered by a state-of-the-art language model trained on diverse datasets, enabling superior understanding and generation of human-like text across multiple languages and domains.",
        icon: <Database className="w-6 h-6 text-blue-500" />
    },
    {
        id: 2,
        title: "Unique Multi-Modal Capabilities",
        description: "Unlike traditional AI models, Lumia.AI can process and understand both text and images simultaneously, providing more comprehensive and accurate responses to complex queries.",
        icon: <Search className="w-12 h-12 text-blue-500" />,
        image: "/images/search.svg"
    },
    {
        id: 3,
        title: "Real-time Learning & Adaptation",
        description: "Our AI continuously learns from interactions and updates its knowledge base in real-time, ensuring you always have access to the most current and relevant information.",
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        image: "/images/personalization.svg"
    },
    {
        id: 4,
        title: "Enterprise-Grade Security",
        description: "Built with enterprise security standards, featuring end-to-end encryption, data isolation, and compliance with global privacy regulations.",
        icon: <Infinity className="w-12 h-12 text-blue-500" />,
        image: "/images/infinity.svg"
    },
    {
        id: 5,
        title: "Custom AI Model Training",
        description: "Train custom AI models tailored to your specific industry needs, with support for domain-specific knowledge and terminology.",
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        image: "/images/integrations.svg"
    },
    {
        id: 6,
        title: "Advanced Context Understanding",
        description: "Maintains context across long conversations and complex tasks, providing more coherent and relevant responses than traditional AI models.",
        icon: <Check className="w-6 h-6 text-blue-500" />,
        image: "/images/task.svg"
    },
    {
        id: 7,
        title: "Comprehensive API Integration",
        description: "Seamlessly integrate Lumia.AI into your existing workflows with our robust API, supporting multiple programming languages and frameworks.",
        icon: <Mail className="w-6 h-6 text-blue-500" />,
        image: "/images/email.svg"
    }
];

const methods = [
    {
        id: 1,
        title: "Natural Language Processing",
        description: "Advanced understanding and generation of human language with context awareness and emotional intelligence.",
        icon: <Database className="w-6 h-6 text-blue-500" />
    },
    {
        id: 2,
        title: "Image Recognition & Analysis",
        description: "Process and analyze images with high accuracy, identifying objects, text, and patterns in visual content.",
        icon: <Upload className="w-6 h-6 text-blue-500" />
    },
    {
        id: 3,
        title: "Code Generation & Review",
        description: "Generate, review, and optimize code across multiple programming languages with best practices.",
        icon: <Link className="w-6 h-6 text-blue-500" />
    },
    {
        id: 4,
        title: "Data Analysis & Insights",
        description: "Advanced analytics and insights generation from complex datasets with actionable recommendations.",
        icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
        id: 5,
        title: "Content Creation & Optimization",
        description: "Generate high-quality content across various formats with SEO optimization and style customization.",
        icon: <Search className="w-6 h-6 text-blue-500" />
    },
    {
        id: 6,
        title: "Multi-language Support",
        description: "Seamless translation and understanding across 100+ languages with cultural context awareness.",
        icon: <Globe className="w-6 h-6 text-blue-500" />
    }
];

export default function AllInOne() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Next-Generation AI Capabilities
                    </h2>

                    {/* Database feature with method options */}
                    <div className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8 mb-12">
                        <h3 className="text-xl font-semibold mb-4">
                            {features[0].title}
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-3xl">
                            {features[0].description}
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {methods.map((method) => (
                                <motion.div
                                    key={method.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: method.id * 0.1 }}
                                    className="bg-white rounded-2xl p-5 shadow-sm"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        {method.icon}
                                        <h4 className="font-medium">{method.title}</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm">{method.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Main features */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 rounded-2xl gap-6">
                        {features.slice(1).map((feature) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: feature.id * 0.1 }}
                                className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-6 relative overflow-hidden"
                            >
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 mb-12 max-w-lg">{feature.description}</p>
                                
                                <div className="flex justify-center mt-auto">
                                    {feature.icon && (
                                        <div className="text-blue-500">
                                            {feature.icon}
                                        </div>
                                    )}
                                </div>
                                
                                {feature.image && (
                                    <div className="mt-6 flex justify-center">
                                        <div className="w-full max-w-[250px] h-[120px] bg-blue-100 rounded-2xl flex items-center justify-center">
                                            {/* Replace with actual images */}
                                            <div className="text-blue-500 text-4xl">
                                                {feature.id === 2 && <Search size={48} />}
                                                {feature.id === 3 && (
                                                    <div className="flex">
                                                        <div className="w-10 h-10 rounded-2xl bg-blue-300 -mr-2"></div>
                                                        <div className="w-10 h-10 rounded-2xl bg-blue-400 -mr-2"></div>
                                                        <div className="w-10 h-10 rounded-2xl bg-blue-500"></div>
                                                    </div>
                                                )}
                                                {feature.id === 4 && <Infinity size={48} />}
                                                {feature.id === 5 && (
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="w-8 h-8 rounded-2xl bg-orange-400"></div>
                                                        <div className="w-8 h-8 rounded-2xl bg-blue-400"></div>
                                                        <div className="w-8 h-8 rounded-2xl bg-green-400"></div>
                                                        <div className="w-8 h-8 rounded-2xl bg-blue-400"></div>
                                                    </div>
                                                )}
                                                {feature.id === 6 && (
                                                    <div className="space-y-2">
                                                        <div className="w-24 h-3 bg-blue-300 rounded-2xl"></div>
                                                        <div className="w-24 h-3 bg-blue-300 rounded-2xl"></div>
                                                    </div>
                                                )}
                                                {feature.id === 7 && (
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 rounded-2xl bg-blue-300 mr-2"></div>
                                                        <div className="w-6 h-6 rounded-2xl bg-blue-500"></div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
