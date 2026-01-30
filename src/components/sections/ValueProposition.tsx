'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Zap, Target, Users, LayoutTemplate } from 'lucide-react';
import React from 'react';

const benefits = [
    {
        title: "Consulting-led",
        description: "Not product-driven. We prioritize your strategic goals above vendor quotas.",
        icon: Users
    },
    {
        title: "Secure-by-Design",
        description: "Security isn't an afterthought. It's woven into every solution from day one.",
        icon: Shield
    },
    {
        title: "Industry Context",
        description: "Deep domain expertise ensures our solutions fit your specific market reality.",
        icon: LayoutTemplate
    },
    {
        title: "Measurable Impact",
        description: "We focus on outcomes that matter—ROI, efficiency, and growth.",
        icon: Target
    },
    {
        title: "Long-term Partner",
        description: "We build relationships that last, scaling with you as you grow.",
        icon: Zap
    }
];

// Reusable Card with Moving Border Effect
const MovingBorderCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`relative p-[1px] overflow-hidden rounded-xl bg-gray-900 group ${className}`}>
            {/* Moving Border Gradient */}
            <div className="absolute inset-0 h-full w-full animate-spin-slow [mask-image:linear-gradient(transparent,white)]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500%] h-[500%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3b82f6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Static Border (fallback/base) */}
            <div className="absolute inset-0 rounded-xl border border-white/10" />

            {/* Content Container */}
            <div className="relative h-full bg-gray-950 rounded-xl p-6 z-10">
                {children}
            </div>
        </div>
    );
};

export function ValueProposition() {
    return (
        <section className="py-24 bg-gray-950 relative overflow-hidden text-white">
            {/* Background Texture - dark and subtle */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Headline & Intro */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                                A Consulting Partner <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    You Can Trust
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                At MindsSparc, we partner with organizations to solve complex challenges at the intersection of technology, security, and talent. Our approach is grounded in deep domain expertise, industry context, and an unwavering focus on outcomes that matter.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Transparent
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Agile
                                </span>
                                <span className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> Outcome-Focused
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Key Values Grid with Border Beam */}
                    <div className="grid grid-cols-1 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <MovingBorderCard className="hover:scale-[1.02] transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                            <benefit.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </MovingBorderCard>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
