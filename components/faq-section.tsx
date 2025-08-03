"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "What is Lumia and who is it for?",
    answer:
      "Lumia is an AI assistant designed for developers, creators, and teams. Whether you're building, learning, or exploring ideas, Lumia offers smart, fast, and context-aware support across coding, writing, and reasoning tasks.",
  },
  {
    question: "How is Lumia different from other AI tools?",
    answer:
      "Lumia combines a large language model with task-specific memory, developer tools, code analysis, and creative support — all in one place. It’s not just a chatbot, it’s your personal development and ideation assistant.",
  },
  {
    question: "Does Lumia support real-time collaboration?",
    answer:
      "Yes. Lumia is built for both solo and team workflows. You can collaborate in real-time with shared chats, review suggestions, and even sync development insights across your workspace.",
  },
  {
    question: "Is Lumia free to use?",
    answer:
      "Lumia offers a forever free tier with basic features like GPT-3.5 support, limited requests, and community access. You can upgrade to unlock advanced models, extended context, and team features.",
  },
  {
    question: "What kind of models and features does Lumia include?",
    answer:
      "Lumia supports multiple models including GPT-4, context windows up to 128k tokens, parallel agents, and memory. It also offers code explanation, refactoring, writing tools, and API access.",
  },
  {
    question: "Is my data and code secure with Lumia?",
    answer:
      "Yes. Lumia uses encrypted channels, secure storage, and never trains on your data. We offer compliance with GDPR, SOC2, and enterprise deployment options for full control over data residency.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <motion.div
      className={`w-full bg-slate-50/80 shadow-[0px_2px_4px_rgba(0,0,0,0.06)] overflow-hidden rounded-[10px] border border-slate-200/60 transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <motion.div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <motion.section
      className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/5 blur-[100px] z-0" />
      <motion.div
        className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Learn how Lumia helps you code, create, and collaborate with intelligent tools designed for modern workflows.
          </p>
        </div>
      </motion.div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            index={index}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </motion.section>
  )
}
