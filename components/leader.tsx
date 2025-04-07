"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Star, Award } from "lucide-react"

const leaders = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Senior Sales Manager",
        stats: "Closed $2.5M in deals",
        achievements: ["Top Performer 2023", "100+ Enterprise Deals"],
        icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
        id: 2,
        name: "Sarah Chen", 
        role: "Account Executive",
        stats: "95% Client Retention",
        achievements: ["Best Customer Success", "Most Referrals"],
        icon: <Star className="w-6 h-6 text-blue-500" />
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Sales Development Rep",
        stats: "250+ Qualified Leads",
        achievements: ["Highest Conversion Rate", "Most Meetings Booked"],
        icon: <Award className="w-6 h-6 text-blue-500" />
    },
    {
        id: 4,
        name: "Emma Wilson",
        role: "Business Development",
        stats: "15 New Markets Opened",
        achievements: ["International Growth", "Strategic Partnerships"],
        icon: <Star className="w-6 h-6 text-green-500" />
    },
    {
        id: 5,
        name: "David Lee",
        role: "Sales Operations",
        stats: "30% Process Optimization",
        achievements: ["Sales Tech Stack", "Team Enablement"],
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
                        Our <span className="text-blue-500">Top Performers</span>
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Meet our exceptional sales team members who consistently deliver outstanding results and drive business growth.
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
                                            <p className="text-gray-600">{leader.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-blue-500">{leader.stats}</p>
                                        <p className="text-sm text-gray-500">This Year</p>
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
