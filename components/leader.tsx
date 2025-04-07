"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Star, Award } from "lucide-react"

const leaders = [
    {
        id: 1,
        name: "Alex Johnson",
        points: 1250,
        rank: 1,
        achievements: ["Top Contributor", "Early Adopter"],
        icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
        id: 2,
        name: "Sarah Chen",
        points: 980,
        rank: 2,
        achievements: ["Bug Hunter", "Community Helper"],
        icon: <Star className="w-6 h-6 text-blue-500" />
    },
    {
        id: 3,
        name: "Michael Brown",
        points: 750,
        rank: 3,
        achievements: ["Feature Suggestion", "Active User"],
        icon: <Award className="w-6 h-6 text-purple-500" />
    },
    {
        id: 4,
        name: "Emma Wilson",
        points: 620,
        rank: 4,
        achievements: ["Beta Tester", "Content Creator"],
        icon: <Star className="w-6 h-6 text-green-500" />
    },
    {
        id: 5,
        name: "David Lee",
        points: 580,
        rank: 5,
        achievements: ["Documentation", "Support Team"],
        icon: <Award className="w-6 h-6 text-red-500" />
    }
]

export default function Leader() {
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
                    <h2 className="text-3xl font-bold text-center mb-4">
                        Community <span className="text-blue-500">Leaders</span>
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Meet our top contributors and active community members who help make Lumia.AI.AI better every day.
                    </p>

                    <div className="grid gap-6">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={leader.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border-2 border-gray-200 rounded-xl p-6 transition-shadow hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                                            {leader.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{leader.name}</h3>
                                            <p className="text-gray-600">Rank #{leader.rank}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-500">{leader.points}</p>
                                        <p className="text-sm text-gray-500">points</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {leader.achievements.map((achievement, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                                        >
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
