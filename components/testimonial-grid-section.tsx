"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "With Lumia’s real-time AI assistance, it feels like having an expert engineer guiding every step. The suggestions are spot-on, helping us write cleaner, faster, and more reliable code.",
    name: "Annette Black",
    company: "Sony",
    avatar: "/images/avatars/annette-black.png",
    type: "large-teal",
  },
  {
    quote:
      "Integrating Lumia into our workflow was effortless. The instant server connectivity saved us days of setup and boosted our productivity from day one.",
    name: "Dianne Russell",
    company: "McDonald's",
    avatar: "/images/avatars/dianne-russell.png",
    type: "small-dark",
  },
  {
    quote:
      "Lumia’s multi-agent feature is a game changer. We’re solving complex issues in hours instead of dragging them across entire sprints.",
    name: "Cameron Williamson",
    company: "IBM",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small-dark",
  },
  {
    quote:
      "We used to juggle multiple tools, but Lumia brought everything into one platform. Our team’s workflow has never been this streamlined.",
    name: "Robert Fox",
    company: "MasterCard",
    avatar: "/images/avatars/robert-fox.png",
    type: "small-dark",
  },
  {
    quote:
      "We started on Lumia’s free plan just to try it out, but within a week we upgraded. Now it’s impossible to imagine our dev process without it.",
    name: "Darlene Robertson",
    company: "Ferrari",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
  },
  {
    quote:
      "Collaborative coding has become effortless with Lumia’s live previews. Pair programming feels faster, smoother, and far more productive.",
    name: "Cody Fisher",
    company: "Apple",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small-dark",
  },
  {
    quote:
      "Deploying with Lumia was seamless. We went from writing code to having it live in minutes—no pipeline headaches, no wasted time.",
    name: "Albert Flores",
    company: "Louis Vuitton",
    avatar: "/images/avatars/albert-flores.png",
    type: "large-light",
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type, index }) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8"
    nameClasses += " text-primary-foreground text-base font-normal leading-6"
    companyClasses += " text-primary-foreground/60 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-2xl font-medium leading-8"
    nameClasses += " text-foreground text-base font-normal leading-6"
    companyClasses += " text-muted-foreground text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6"
    nameClasses += " text-foreground text-sm font-normal leading-[22px]"
    companyClasses += " text-muted-foreground text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <motion.div
      className={`${cardClasses} ${cardWidth} ${cardHeight}`}
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
      {backgroundElements}
      <motion.div
        className={`relative z-10 font-normal break-words ${quoteClasses}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
      >
        {quote}
      </motion.div>
      <motion.div
        className="relative z-10 flex justify-start items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
      >
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`w-${avatarSize / 4} h-${avatarSize / 4} ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function TestimonialGridSection() {
  return (
    <motion.section
      className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Building with AI, made effortless
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            Hear how developers accelerate delivery, collaborate in real time, <br />
            and create with confidence using Lumia’s intelligent AI platform.
          </p>
        </div>
      </motion.div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} index={0} />
          <TestimonialCard {...testimonials[1]} index={1} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} index={2} />
          <TestimonialCard {...testimonials[3]} index={3} />
          <TestimonialCard {...testimonials[4]} index={4} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} index={5} />
          <TestimonialCard {...testimonials[6]} index={6} />
        </div>
      </div>
    </motion.section>
  )
}
