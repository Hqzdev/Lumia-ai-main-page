"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const AnimatedNumber = ({ value, duration = 1000 }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const numericValue = Number.parseInt(value.replace("$", ""))
    if (numericValue === 0) {
      setDisplayValue(0)
      return
    }

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easeOut * numericValue)

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  return <span>${displayValue}</span>
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)
const pricingPlans = [
  {
    name: "Starter",
    monthlyPrice: "$0",
    annualPrice: "$0",
    description: "Start experimenting with AI — free forever.",
    features: [
      "Access to base Lumia 3.5 model",
      "Limited prompt runs per day",
      "Community support",
      "Shared compute environment",
      "Basic API access with rate limits",
    ],
    buttonText: "Start for Free",
    buttonClass:
      "bg-white text-black border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm",
  },
  {
    name: "Developer",
    monthlyPrice: "$20",
    annualPrice: "$16",
    description: "Everything you need to build production-ready AI apps.",
    features: [
      "Lumia 4 access (with context window up to 128k)",
      "Priority inference on shared compute",
      "Moderation API & basic analytics",
      "Increased rate limits",
      "Early access to new features",
      "Email and community support",
    ],
    buttonText: "Upgrade to Developer",
    buttonClass:
      "bg-green-500 text-black hover:bg-green-600 transition-colors shadow-md",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$200",
    annualPrice: "$160",
    description: "Advanced control, security, and scalability for teams.",
    features: [
      "Custom Lumia models & fine-tuning",
      "Dedicated capacity & private deployments",
      "Enterprise-grade SLA and support",
      "SSO/SAML and role-based access",
      "Audit logs & compliance (SOC2, GDPR)",
    ],
    buttonText: "Contact Sales",
    buttonClass:
      "bg-white text-black hover:bg-gray-200 transition-colors shadow-md",
  },
];


  return (
    <motion.section
      className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col justify-start items-center gap-4">
         <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
  Conversational Intelligence<br />Built for Real Work
</h2>
<p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
  Your AI assistant for coding, research, writing, and more. Seamlessly integrated, context-aware, always ready to help.
</p>

        </div>
        <div className="pt-4">
          <div className="p-0.5 bg-slate-100 rounded-lg border border-slate-200/60 flex justify-start items-center gap-1 md:mt-0">
            <button
              onClick={() => setIsAnnual(true)}
              className={`pl-2 pr-1 py-1 flex justify-start items-start gap-2 rounded-md transition-all duration-200 ${isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight transition-colors duration-200 ${isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Annually
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-2 py-1 flex justify-start items-start rounded-md transition-all duration-200 ${!isAnnual ? "bg-accent shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight transition-colors duration-200 ${!isAnnual ? "text-accent-foreground" : "text-zinc-400"}`}
              >
                Monthly
              </span>
            </button>
          </div>
        </div>
      </motion.div>
      <div className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto">
        {pricingPlans.map((plan, index) => {
          let cardClasses = `flex-1 p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg`

          if (plan.name === "Free") {
            cardClasses += " bg-slate-50/80 border border-slate-200/60"
          } else if (plan.name === "Ultra") {
            cardClasses += " bg-slate-50/80 border border-slate-200/60"
          } else if (plan.popular) {
            cardClasses += " bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]"
          } else {
            cardClasses += " bg-gradient-to-b from-gray-50/5 to-gray-50/0"
          }

          return (
            <motion.div
              key={plan.name}
              className={cardClasses}
              style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                <div className="self-stretch flex flex-col justify-start items-start gap-8">
                  <div
                    className={`w-full h-5 text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                  >
                    {plan.name}
                    {plan.popular && (
                      <motion.div
                        className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      >
                        <div className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                          Popular
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="flex justify-start items-center gap-1.5">
                      <div
                        className={`relative h-10 flex items-center text-3xl font-medium leading-10 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                      >
                        <span className="invisible">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                        <span
                          className="absolute inset-0 flex items-center transition-all duration-500"
                          style={{
                            opacity: isAnnual ? 1 : 0,
                            transform: `scale(${isAnnual ? 1 : 0.8})`,
                            filter: `blur(${isAnnual ? 0 : 4}px)`,
                          }}
                          aria-hidden={!isAnnual}
                        >
                          <AnimatedNumber value={plan.annualPrice} duration={1200} />
                        </span>
                        <span
                          className="absolute inset-0 flex items-center transition-all duration-500"
                          style={{
                            opacity: !isAnnual ? 1 : 0,
                            transform: `scale(${!isAnnual ? 1 : 0.8})`,
                            filter: `blur(${!isAnnual ? 0 : 4}px)`,
                          }}
                          aria-hidden={isAnnual}
                        >
                          <AnimatedNumber value={plan.monthlyPrice} duration={1200} />
                        </span>
                      </div>
                      <div
                        className={`text-center text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                      >
                        /month
                      </div>
                    </div>
                    <div
                      className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {plan.description}
                    </div>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
                  <Button
                    className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center transition-all duration-200 ${plan.buttonClass}`}
                  >
                    <div className="px-1.5 flex justify-center items-center gap-2">
                      <span
                        className={`text-center text-sm font-medium leading-tight ${plan.name === "Free" ? "text-gray-800" : plan.name === "Pro" ? "text-primary" : "text-zinc-950"}`}
                      >
                        {plan.buttonText}
                      </span>
                    </div>
                  </Button>
                </motion.div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div
                  className={`self-stretch text-sm font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {plan.name === "Free" ? "Get Started today:" : "Everything in Free +"}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="self-stretch flex justify-start items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        <Check
                          className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                          strokeWidth={2}
                        />
                      </div>
                      <div
                        className={`leading-tight font-normal text-sm text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                      >
                        {feature}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
