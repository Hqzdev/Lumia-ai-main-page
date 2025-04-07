"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, HelpCircle, Wrench } from "lucide-react"
import Link from "next/link"

const faqSections = [
  {
    title: "Frequently Asked Questions",
    icon: HelpCircle,
    items: [
      {
        id: 4,
        prompt: "How do I get started with Lumia AI?",
        response: "Getting started with Lumia AI is simple:\n\nQuick Start Guide\n1. Visit our website at lurenai.vercel.app\n2. Click the 'Get Started' button\n3. Choose your preferred plan\n4. Start chatting with AI\n\nInitial Setup\n- No installation required\n- Browser-based interface\n- Works on all modern devices\n\nBest Practices\n- Start with simple queries\n- Be specific in your requests\n- Explore different capabilities\n\nFor optimal results, try to be clear and specific in your prompts. The more context you provide, the better the responses will be.",
        category: "Getting Started"
      },
      {
        id: 5,
        prompt: "What are the subscription plans and pricing?",
        response: "We offer several flexible plans to meet your needs:\n\nFree Plan\n- Basic access to AI features\n- Standard response time\n- 2K context window\n- Community support\n\nPro Plan\n- Full access to all features\n- Priority processing\n- 4K context window\n- Email support\n- Custom API access\n\nEnterprise Plan\n- Custom solutions\n- Dedicated support team\n- Advanced security features\n- Custom model training\n\nAll plans come with a 7-day money-back guarantee. Contact our support team for custom enterprise solutions.",
        category: "Pricing"
      }
    ]
  },
  {
    title: "Troubleshooting & Support",
    icon: Wrench,
    items: [
      {
        id: 6,
        prompt: "How can I resolve common issues with the AI?",
        response: "Here are solutions to common issues:\n\nConnection Problems\n- Clear browser cache\n- Check internet connection\n- Try different browser\n\nResponse Quality\n- Be more specific in prompts\n- Use proper formatting\n- Provide context\n\nAccount Issues\n- Verify email address\n- Check subscription status\n- Update payment method\n\nIf problems persist, contact our support team at support@lumia-ai.com for assistance.",
        category: "Troubleshooting"
      },
      {
        id: 7,
        prompt: "What are the system requirements?",
        response: "Minimum requirements for optimal performance:\n\nWeb Browsers\n- Chrome 90+\n- Firefox 88+\n- Safari 14+\n- Edge 90+\n\nDevice Requirements\n- 2GB RAM minimum\n- Stable internet connection\n- HTML5 compatible browser\n\nMobile Devices\n- iOS 13+ or Android 8+\n- Latest browser versions\n- Adequate screen size\n\nFor best experience, we recommend using a modern browser with JavaScript enabled.",
        category: "Requirements"
      }
    ]
  }
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-4xl font-bold text-center mb-4">
              Help & <span className="text-blue-500">Support</span>
            </h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Find answers to common questions and learn how to get the most out of Lumia AI
            </p>

            {faqSections.map((section, sectionIndex) => (
              <div key={section.title} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <section.icon className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>

                <div className="grid gap-8">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: (sectionIndex * section.items.length + index) * 0.1 }}
                      className="bg-white rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <MessageSquare className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium text-blue-500">{item.category}</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h3 className="text-gray-800 text-lg">{item.prompt}</h3>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                            {item.response}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
} 