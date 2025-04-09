"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqItems = [
  {
    id: 1,
    question: "Which languages does Lumia.AI support?",
    answer: "Lumia.AI supports multiple languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese, Japanese, and more. The AI model is trained to generate natural-sounding copy in all these languages, ensuring your outreach is effective globally."
  },
  {
    id: 2,
    question: "I am not experienced in cold outreaches; is that a problem?",
    answer: "Not at all! Lumia.AI is designed to help users of all experience levels. The platform provides guidance, templates, and AI-powered assistance to help you create effective cold outreach campaigns even if you're just getting started. Our system will help you avoid common pitfalls and follow best practices."
  },
  {
    id: 3,
    question: "How quickly can I get started?",
    answer: "With our forever-free plan, you can get started right away! The onboarding takes only a few minutes. After you indicate your target audience (location, job title, industry, etc.), Lumia.AI can already start reaching out to prospects.\n\nBased on your website and the social media profiles of your prospects, Lumia.AI will know precisely how to write effective cold emails. Of course, you can provide Lumia.AI with additional information about your businesses so it can incorporate this into the emails."
  },
  {
    id: 4,
    question: "Are there any required third party software tools?",
    answer: "No, Lumia.AI is an all-in-one solution that doesn't require any additional third-party software. Everything you need is built into our platform, including lead generation, email management, and campaign analytics. However, we do offer integrations with popular CRM tools and email providers if you wish to connect your existing workflow."
  },
  {
    id: 5,
    question: "How can Lumia.AI write my copy?",
    answer: "Lumia.AI uses advanced natural language processing to write personalized, effective copy for your campaigns. It analyzes your prospect's data, your business information, and successful patterns from millions of emails to create compelling messages. The AI customizes each email to the recipient, ensuring higher engagement rates and responses."
  },
  {
    id: 6,
    question: "How does Lumia.AI find my leads?",
    answer: "Lumia.AI leverages its database of over 275 million verified leads and uses various methods to find the right prospects for your business. It can identify potential leads based on your target criteria such as industry, job title, company size, and location. Additionally, Lumia.AI can analyze your website visitors, social media followers, and existing customers to identify similar high-quality prospects."
  }
]

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-2">Try Lumia Dashboard</h3>
          <p className="mb-4">Experience the power of Lumia AI in our interactive dashboard</p>
          <a
            href="https://lumia-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            Go to Dashboard
          </a>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>

          <div className="space-y-4 ">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="border-2 bg-white border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between text-lg font-medium focus:outline-none"
                    >
                      <span>{item.question}</span>
                    </button>
                  </div>
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="px-6 py-4 flex-shrink-0 focus:outline-none"
                    aria-label={activeIndex === index ? "Close answer" : "Show answer"}
                  >
                    {activeIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Answer */}
                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-[500px] py-4 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 whitespace-pre-line">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
