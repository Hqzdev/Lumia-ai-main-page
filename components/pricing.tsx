"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Check, X, Info, Zap, Star, Award, Crown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Fixed AnimatedPrice component to properly use billingCycle from props
const AnimatedPrice = ({
  price,
  period,
  billingCycle,
  isAnimating,
  large = false,
}: {
  price: string
  period: string
  billingCycle: string
  isAnimating: boolean
  large?: boolean
}) => {
  return (
    <motion.div
      key={`${price}-${billingCycle}`}
      initial={isAnimating ? "initial" : false}
      animate="animate"
      exit="exit"
      variants={priceVariants}
      className="flex items-baseline"
    >
      <span className={large ? "text-4xl font-bold" : "text-2xl font-bold"}>{price}</span>
      <span className={`text-sm text-gray-400 ml-2`}>
        {period === "Forever free" ? "/ Forever free" : billingCycle === "annually" ? "/ year" : period}
      </span>
    </motion.div>
  )
}

const pricingTiers = [
  {
    id: 1,
    name: "Free",
    price: "$0",
    period: "Forever free",
    leads: "100",
    popular: false,
    buttonText: "Get Started",
    buttonLink: "/signup",
    icon: "F",
    features: [
      {
        name: "Free Lumia addresses on a shared domain",
        included: true,
        info: "Use Lumia.ai on your shared domain",
      },
      {
        name: "275+ million leads available",
        included: true,
        info: "Access to our extensive database of leads",
      },
      {
        name: "AI-powered messaging and personalization",
        included: true,
        info: "Leverage AI to create personalized messages",
      },
      {
        name: "AI-powered with CERT",
        included: false,
        info: "Advanced AI certification features",
      },
      {
        name: "Email setup by Lumia",
        included: false,
        info: "We'll set up your email campaigns for you",
      },
      {
        name: "Upload leads via API/csv or a CSV file",
        included: false,
        info: "Import your existing leads easily",
      },
      {
        name: "Personalized video landing pages",
        included: false,
        info: "Create custom video landing pages",
      },
    ],
  },
  {
    id: 2,
    name: "Starter",
    price: "$120",
    period: "/month",
    leads: "300",
    popular: false,
    buttonText: "Get Started",
    buttonLink: "/signup",
    icon: "S",
    features: [
      {
        name: "Free Lumia addresses on a shared domain",
        included: true,
        info: "Use Lumia.ai on your shared domain",
      },
      {
        name: "275+ million leads available",
        included: true,
        info: "Access to our extensive database of leads",
      },
      {
        name: "AI-powered messaging and personalization",
        included: true,
        info: "Leverage AI to create personalized messages",
      },
      {
        name: "AI-powered with CERT",
        included: true,
        info: "Advanced AI certification features",
      },
      {
        name: "Email setup by Lumia",
        included: false,
        info: "We'll set up your email campaigns for you",
      },
      {
        name: "Upload leads via API/csv or a CSV file",
        included: true,
        info: "Import your existing leads easily",
      },
      {
        name: "Personalized video landing pages",
        included: false,
        info: "Create custom video landing pages",
      },
    ],
  },
  {
    id: 3,
    name: "Starter Plus",
    price: "$360",
    period: "/month",
    leads: "1,000",
    popular: true,
    buttonText: "Get Started",
    buttonLink: "/signup",
    icon: "S+",
    features: [
      {
        name: "Free Lumia addresses on a shared domain",
        included: true,
        info: "Use Lumia.ai on your shared domain",
      },
      {
        name: "275+ million leads available",
        included: true,
        info: "Access to our extensive database of leads",
      },
      {
        name: "AI-powered messaging and personalization",
        included: true,
        info: "Leverage AI to create personalized messages",
      },
      {
        name: "AI-powered with CERT",
        included: true,
        info: "Advanced AI certification features",
      },
      {
        name: "Email setup by Lumia",
        included: true,
        info: "We'll set up your email campaigns for you",
      },
      {
        name: "Upload leads via API/csv or a CSV file",
        included: true,
        info: "Import your existing leads easily",
      },
      {
        name: "Personalized video landing pages",
        included: true,
        info: "Create custom video landing pages",
      },
    ],
  },
  {
    id: 4,
    name: "Premium",
    price: "$925",
    period: "/month",
    leads: "2,500",
    popular: false,
    buttonText: "Get Started",
    buttonLink: "/signup",
    icon: "P",
    features: [
      {
        name: "Free Lumia addresses on a shared domain",
        included: true,
        info: "Use Lumia.ai on your shared domain",
      },
      {
        name: "275+ million leads available",
        included: true,
        info: "Access to our extensive database of leads",
      },
      {
        name: "AI-powered messaging and personalization",
        included: true,
        info: "Leverage AI to create personalized messages",
      },
      {
        name: "AI-powered with CERT",
        included: true,
        info: "Advanced AI certification features",
      },
      {
        name: "Email setup by Lumia",
        included: true,
        info: "We'll set up your email campaigns for you",
      },
      {
        name: "Upload leads via API/csv or a CSV file",
        included: true,
        info: "Import your existing leads easily",
      },
      {
        name: "Personalized video landing pages",
        included: true,
        info: "Create custom video landing pages",
      },
      {
        name: "Advanced analytics dashboard",
        included: true,
        info: "Get detailed insights into your campaign performance",
      },
    ],
  },
  {
    id: 5,
    name: "Ultimate",
    price: "$1,500",
    period: "/month",
    leads: "5,000",
    popular: false,
    buttonText: "Get Started",
    buttonLink: "/signup",
    icon: "U",
    features: [
      {
        name: "Free Lumia addresses on a shared domain",
        included: true,
        info: "Use Lumia.ai on your shared domain",
      },
      {
        name: "275+ million leads available",
        included: true,
        info: "Access to our extensive database of leads",
      },
      {
        name: "AI-powered messaging and personalization",
        included: true,
        info: "Leverage AI to create personalized messages",
      },
      {
        name: "AI-powered with CERT",
        included: true,
        info: "Advanced AI certification features",
      },
      {
        name: "Email setup by Lumia",
        included: true,
        info: "We'll set up your email campaigns for you",
      },
      {
        name: "Upload leads via API/csv or a CSV file",
        included: true,
        info: "Import your existing leads easily",
      },
      {
        name: "Personalized video landing pages",
        included: true,
        info: "Create custom video landing pages",
      },
      {
        name: "Advanced analytics dashboard",
        included: true,
        info: "Get detailed insights into your campaign performance",
      },
      {
        name: "Dedicated account manager",
        included: true,
        info: "Get personalized support from a dedicated account manager",
      },
      {
        name: "Custom integrations",
        included: true,
        info: "Integrate Lumia.ai with your existing tools and workflows",
      },
    ],
  },
]

const priceVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.3 } },
}

const featureVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 10, transition: { duration: 0.3 } },
}

const getIconComponent = (tierName: string) => {
  switch (tierName) {
    case "Free":
      return null
    case "Starter":
      return <Zap className="w-6 h-6 text-[#1a2536]" />
    case "Starter Plus":
      return <Star className="w-6 h-6 text-[#1a2536]" />
    case "Premium":
      return <Award className="w-6 h-6 text-[#1a2536]" />
    case "Ultimate":
      return <Crown className="w-6 h-6 text-[#1a2536]" />
    default:
      return null
  }
}

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [animatingPrice, setAnimatingPrice] = useState(false)
  const [animatingFeatures, setAnimatingFeatures] = useState(false)
  const [selectedTier, setSelectedTier] = useState(0)

  // Calculate annual price (20% discount - equivalent to 2 months free)
  const getPrice = (price: string, cycle: string) => {
    if (price === "Custom" || price === "$0") return price

    const numericPrice = Number.parseInt(price.replace("$", ""))
    if (cycle === "annually") {
      const annualPrice = Math.round(numericPrice * 10) // 10 months instead of 12
      return `$${annualPrice}`
    }
    return price
  }

  const handleBillingCycleChange = (cycle: string) => {
    if (cycle === billingCycle) return

    setAnimatingPrice(true)
    setBillingCycle(cycle)
    setTimeout(() => setAnimatingPrice(false), 300)
  }

  const handleSliderDotClick = (index: number) => {
    if (index === selectedTier) return

    setAnimatingFeatures(true)
    setSelectedTier(index)
    setTimeout(() => setAnimatingFeatures(false), 300)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-16 w-full bg-[#1a2536] text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Lumia.ai outperforms human salespeople</h2>
            <p className="text-2xl font-semibold">at 1/10th the cost</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Tabs value={billingCycle} className="w-64">
              <TabsList className="grid w-full grid-cols-2 bg-[#2a3546] rounded-full p-1">
                <TabsTrigger
                  value="monthly"
                  className="rounded-full data-[state=active]:bg-purple-500"
                  onClick={() => handleBillingCycleChange("monthly")}
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="annually"
                  className="rounded-full data-[state=active]:bg-purple-500"
                  onClick={() => handleBillingCycleChange("annually")}
                >
                  <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Annually
                    <motion.span
                      className="ml-1 text-xs bg-purple-500 text-white px-1 py-0.5 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                      }}
                    >
                      2 months off
                    </motion.span>
                  </motion.div>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full max-w-5xl mb-12">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "relative rounded-lg p-4 text-center border border-gray-700 bg-[#1e2a3d] cursor-pointer",
                  tier.popular ? "border-t-4 border-t-purple-500" : "",
                  selectedTier === index ? "ring-2 ring-purple-500" : "",
                )}
                onClick={() => handleSliderDotClick(index)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-max">
                    <span className="bg-[#2a3546] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                {index === 4 && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-max">
                    <span className="bg-[#2a3546] text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      BEST VALUE
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-medium mb-2">{tier.name}</h3>
                <div className="mb-2 h-10 flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait">
                    <AnimatedPrice
                      key={`${tier.id}-${billingCycle}`}
                      price={getPrice(tier.price, billingCycle)}
                      period={tier.period}
                      billingCycle={billingCycle}
                      isAnimating={animatingPrice}
                    />
                  </AnimatePresence>
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  {tier.leads} <span className="text-xs">/leads</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-5xl mb-12 flex justify-between items-center">
            <div className="w-full h-1 bg-gray-700 relative">
              <div
                className="absolute top-0 left-0 h-full bg-purple-500"
                style={{ width: `${(selectedTier / (pricingTiers.length - 1)) * 100}%` }}
              />
              {pricingTiers.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-gray-700 transition-all",
                    selectedTier >= index ? "bg-purple-500" : "bg-[#2a3546]",
                  )}
                  style={{ left: `${(index / (pricingTiers.length - 1)) * 100}%` }}
                  onClick={() => handleSliderDotClick(index)}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full max-w-5xl border border-gray-700 rounded-lg overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedTier}-${billingCycle}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    {getIconComponent(pricingTiers[selectedTier].name) || (
                      <span className="text-[#1a2536] font-bold">{pricingTiers[selectedTier].icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{pricingTiers[selectedTier].name}</h3>
                </div>

                <div className="p-6 border-t border-gray-700">
                  <div className="flex items-baseline mb-4">
                    <AnimatePresence mode="wait">
                      <AnimatedPrice
                        key={`detail-${selectedTier}-${billingCycle}`}
                        price={getPrice(pricingTiers[selectedTier].price, billingCycle)}
                        period={pricingTiers[selectedTier].period}
                        billingCycle={billingCycle}
                        isAnimating={false}
                        large={true}
                      />
                    </AnimatePresence>
                  </div>
                  <div className="text-2xl font-bold mb-6">
                    {pricingTiers[selectedTier].leads}{" "}
                    <span className="text-sm font-normal text-gray-400">contacted leads / month</span>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={pricingTiers[selectedTier].buttonLink}
                      className="block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors bg-purple-500 text-white hover:bg-purple-600 mb-8"
                    >
                      {pricingTiers[selectedTier].buttonText}
                    </Link>
                  </motion.div>

                  <div className="space-y-4">
                    <AnimatePresence mode="wait">
                      {pricingTiers[selectedTier].features.map((feature, i) => (
                        <motion.div
                          key={`${selectedTier}-${i}-${billingCycle}`}
                          initial={animatingFeatures ? "initial" : false}
                          animate="animate"
                          exit="exit"
                          variants={featureVariants}
                          className="flex items-start gap-3"
                        >
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          )}
                          <span className="flex-1">{feature.name}</span>
                          <Info className="w-4 h-4 text-gray-400 flex-shrink-0 cursor-help" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="p-4 text-center text-sm text-gray-400 border-t border-gray-700">
                  Shared credits - no extra fee per seat.
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

