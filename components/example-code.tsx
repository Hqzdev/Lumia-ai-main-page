"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const exampleCode = [
    {
        id: 1,
        title: "Telegram Bot",
        description: "A simple telegram bot that sends a message to the user when they join a group.",
        code: `
        const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
        bot.onText(/\/start/, (msg) => {
            bot.sendMessage(msg.chat.id, 'Hello!')
        })
        `,
    },  
    {
        id: 2,
        title: "Web Application",
        description: "A simple web application that displays a list of users.",
        code: `
        const users = await fetch('https://api.example.com/users')
        const data = await users.json()
        return data
        `,
    },  
    {
        id: 3,
        title: "AI Model",
        description: "A simple AI model that generates a response to a user's message.",
        code: `
        const model = new OpenAI()
        const response = await model.generateText('Hello!')
        return response
        `,
    },
    {
        id: 4,
        title: "Serverless Function",
        description: "A simple serverless function that returns a message.",
        code: `
        export const handler = async (event) => {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Hello, world!' })
            }
        `,
    },
    {
        id: 5,
        title: "Cloud Service", 
        description: "A simple cloud service that returns a message.",
        code: `
        const service = new CloudService()
        const response = await service.getMessage()
        return response
        `,


    },

]

export default function ExampleCode() {
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
                    Code <span className="text-blue-500">Examples</span>
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Check out these code examples to see how our AI can help you write better code faster.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {exampleCode.map((example, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/50 rounded-2xl p-6 border-2 border-gray-200"
                        >
                            <pre className="bg-[#1e1e1e] rounded-xl p-4 overflow-x-auto">
                                <code className="text-gray-300 font-mono">
                                    {example.code.split('\n').map((line, i) => (
                                        <span key={i} className="block">
                                            {line.replace(/const|await|new|return|export/g, match => (
                                                `<span class="text-[#569cd6]">${match}</span>`
                                            )).replace(/=>/g, match => (
                                                `<span class="text-[#c586c0]">${match}</span>`
                                            )).replace(/'[^']*'|"[^"]*"/g, match => (
                                                `<span class="text-[#ce9178]">${match}</span>`
                                            ))}
                                        </span>
                                    ))}
                                </code>
                            </pre>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h3>
                                <p className="text-gray-600">{example.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
    )
} 