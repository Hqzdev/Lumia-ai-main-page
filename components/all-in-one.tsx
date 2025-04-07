"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Search, Infinity, Zap, Mail, Globe, Database, Upload, Link } from "lucide-react"
import Image from "next/image"

const features = [
    {
        id: 1,
        title: "Database with 275M+ verified data points for AI",
        description: "Access Lumia.AI's vast database of over 275 million verified data points to train your AI models. Or upload your own datasets and manage them effortlessly in the cloud within seconds.",
        icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
        id: 2,
        title: "Advanced AI-powered data analysis",
        description: "Building effective AI models requires more than just basic information. Lumia.AI automatically scores and enriches data, providing deep insights that go beyond traditional tools to maximize AI personalization.",
        icon: <Search className="w-12 h-12 text-purple-500" />,
        image: "/images/search.svg"
    },
    {
        id: 3,
        title: "AI-driven personalization at scale",
        description: "Lumia.AI generates tailored datasets for AI training by analyzing websites, social profiles, and other sources. Get high-quality, personalized data optimized for your AI models.",
        icon: <Zap className="w-6 h-6 text-purple-500" />,
        image: "/images/personalization.svg"
    },
    {
        id: 4,
        title: "Unlimited AI accounts",
        description: "Connect as many accounts as you need and seamlessly rotate domains for maximum flexibility in managing your AI workflows.",
        icon: <Infinity className="w-12 h-12 text-purple-500" />,
        image: "/images/infinity.svg"
    },
    {
        id: 5,
        title: "AI integrations",
        description: "Integrate Lumia.AI with Salesforce, Hubspot, Pipedrive, or Zoho to sync your data and streamline AI model training.",
        icon: <Zap className="w-6 h-6 text-purple-500" />,
        image: "/images/integrations.svg"
    },
    {
        id: 6,
        title: "AI task management",
        description: "This feature ensures your AI pipelines and data workflows are always on track, so no opportunity is missed.",
        icon: <Check className="w-6 h-6 text-purple-500" />,
        image: "/images/task.svg"
    },
    {
        id: 7,
        title: "AI infrastructure: Everything you need for seamless data processing",
        description: "Multiple data-sending accounts, dedicated IPs, perfect data health, DKIM, SPF, DMARC, ongoing data validation, and more. Complex details made simple for your AI needs.",
        icon: <Mail className="w-6 h-6 text-purple-500" />,
        image: "/images/email.svg"
    }
];

const methods = [
    {
        id: 1,
        title: "Upload database for AI",
        description: "Access 275M+ verified data points for AI training within minutes.",
        icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
        id: 2,
        title: "CSV upload for AI",
        description: "Easily upload a CSV file and add your data to train personalized AI models.",
        icon: <Upload className="w-6 h-6 text-purple-500" />
    },
    {
        id: 3,
        title: "API / Zapier integration for AI",
        description: "A simple way to push real-time data via API or Zapier and sync it with your AI models.",
        icon: <Link className="w-6 h-6 text-purple-500" />
    },
    {
        id: 4,
        title: "Tech stack targeting for AI",
        description: "Specify companies using specific tools in their tech stacks. We'll find, verify, and populate the data for you.",
        icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
        id: 5,
        title: "Manual data mining for AI",
        description: "Locate companies, find contacts, and populate data with human-level accuracy for AI training.",
        icon: <Search className="w-6 h-6 text-purple-500" />
    },
    {
        id: 6,
        title: "Keyword search for AI",
        description: "Use keywords to search LinkedIn and other advanced platforms for data enrichment.",
        icon: <Globe className="w-6 h-6 text-purple-500" />
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
                        All-in-one prospecting solution
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
                                        <div className="text-purple-500">
                                            {feature.icon}
                                        </div>
                                    )}
                                </div>
                                
                                {feature.image && (
                                    <div className="mt-6 flex justify-center">
                                        <div className="w-full max-w-[250px] h-[120px] bg-purple-100 rounded-2xl flex items-center justify-center">
                                            {/* Replace with actual images */}
                                            <div className="text-purple-500 text-4xl">
                                                {feature.id === 2 && <Search size={48} />}
                                                {feature.id === 3 && (
                                                    <div className="flex">
                                                        <div className="w-10 h-10 rounded-2xl bg-purple-300 -mr-2"></div>
                                                        <div className="w-10 h-10 rounded-2xl bg-purple-400 -mr-2"></div>
                                                        <div className="w-10 h-10 rounded-2xl bg-purple-500"></div>
                                                    </div>
                                                )}
                                                {feature.id === 4 && <Infinity size={48} />}
                                                {feature.id === 5 && (
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="w-8 h-8 rounded-2xl bg-orange-400"></div>
                                                        <div className="w-8 h-8 rounded-2xl bg-blue-400"></div>
                                                        <div className="w-8 h-8 rounded-2xl bg-green-400"></div>
                                                        <div className="w-8 h-8 rounded-2xl bg-purple-400"></div>
                                                    </div>
                                                )}
                                                {feature.id === 6 && (
                                                    <div className="space-y-2">
                                                        <div className="w-24 h-3 bg-purple-300 rounded-2xl"></div>
                                                        <div className="w-24 h-3 bg-purple-300 rounded-2xl"></div>
                                                    </div>
                                                )}
                                                {feature.id === 7 && (
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 rounded-2xl bg-purple-300 mr-2"></div>
                                                        <div className="w-6 h-6 rounded-2xl bg-purple-500"></div>
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
