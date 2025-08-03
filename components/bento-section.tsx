"use client"

import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration" // Updated import
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents" // Updated import
import { motion } from "framer-motion"

const BentoCard = ({ title, description, Component, index }) => (
  <motion.div
    className="overflow-hidden rounded-2xl border border-slate-200/60 flex flex-col justify-start items-start relative"
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
  >
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(248, 250, 252, 0.8)", // Light gray with transparency
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-slate-50/10 rounded-2xl" />

    <motion.div
      className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    >
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </motion.div>
    <motion.div
      className="self-stretch h-72 relative -mt-0.5 z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
    >
      <Component />
    </motion.div>
  </motion.div>
)

export function BentoSection() {
  const cards = [
  {
    title: "Chat with AI. Instantly.",
    description: "Ask questions, generate ideas, and get help from your personal AI assistant — in real-time.",
    Component: AiCodeReviews,
  },
  {
    title: "Understand and preview your content",
    description: "Paste your text, and our AI gives structured feedback, suggestions, or summaries on the fly.",
    Component: RealtimeCodingPreviews,
  },
  {
    title: "Connect your tools with one click",
    description: "Use your favorite apps and platforms — our AI integrates seamlessly with your existing workflow.",
    Component: OneClickIntegrationsIllustration,
  },
  {
    title: "Secure and scalable infrastructure",
    description: "Enjoy robust connectivity and secure data handling. Built for enterprise and individual creators.",
    Component: MCPConnectivityIllustration,
  },
  {
    title: "Collaborate with multiple AI agents",
    description: "Let different AI agents brainstorm, code, or plan together — all inside one environment.",
    Component: ParallelCodingAgents,
  },
  {
    title: "From idea to live in minutes",
    description: "Turn prompts into products. Generate, build, and deploy in one flow — powered by AI.",
    Component: EasyDeployment,
  },
]


  return (
    <motion.section
      className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <motion.div
          className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
  Discover the Power of Your Personal AI Assistant
</h2>

            <p className="text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
  From conversation to computation — explore what your AI can do for you.
</p>

          </div>
        </motion.div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card, index) => (
            <BentoCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
