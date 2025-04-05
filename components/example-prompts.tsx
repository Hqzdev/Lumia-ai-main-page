"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Sparkles } from "lucide-react"
import Link from "next/link"

const modelInfo = [
  {
    id: 1,
    prompt: "What AI model are you based on and what are your capabilities?",
    response: "I am based on Lumia, developed by Lumia LLC. My capabilities include:\n\nAdvanced Language Processing\n- Natural conversation in multiple languages\n- Complex problem-solving\n- Context-aware responses\n\nTechnical Skills\n- Code analysis and generation\n- Data processing and advanced analytics\n- Mathematical computations\n\nCreative Abilities\n- Content creation and editing\n- Writing assistance and style enhancement\n- Idea generation and brainstorming\n\nI maintain ethical guidelines and prioritize accurate, helpful responses while being transparent about my limitations.",
    category: "Model Information"
  },
  {
    id: 2,
    prompt: "Who created you and what is your purpose?",
    response: "I was created by the Lumia AI team, a group of developers and AI researchers dedicated to making artificial intelligence more accessible and useful. Our mission is:\n\nInnovation\n- Developing cutting-edge AI solutions\n- Pushing the boundaries of AI capabilities\n- Continuous improvement and learning\n\nAccessibility\n- Making AI technology available to everyone\n- Creating user-friendly interfaces\n- Providing affordable solutions\n\nEthics\n- Maintaining transparency in AI operations\n- Ensuring data privacy and security\n- Following responsible AI development practices\n\nOur goal is to help users solve problems, boost productivity, and unlock new possibilities through AI technology.",
    category: "Company Background"
  },
  {
    id: 3,
    prompt: "What are the differences between Lumia v2 and Lumia v2 Max?",
    response: "Here's a comparison of Lumia v2 and Lumia v2 Max features:\n\nLumia v2\nCore Features\n- Standard response generation\n- Basic code assistance\n- Regular processing speed\n- 2K context window\n\nUse Cases\n- Personal projects\n- Basic coding tasks\n- General writing assistance\n\nLumia v2 Max\nEnhanced Capabilities\n- Advanced response generation\n- Complex code analysis and generation\n- 2x faster processing\n- 4K context window\n\nAdditional Features\n- Multi-language code optimization\n- Advanced data analysis\n- Priority processing\n\nEnterprise Features\n- Team collaboration tools\n- Advanced API access\n- Custom model fine-tuning",
    category: "Product Comparison"
  }
]

export default function ExamplePrompts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                About <span className="text-blue-500">Lumia AI</span>
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Learn about our AI model capabilities and features
              </p>
            </div>
            <Link 
              href="/faq"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View FAQ
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-8">
            {modelInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-blue-500" />
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
        </motion.div>
      </div>
    </section>
  )
} 