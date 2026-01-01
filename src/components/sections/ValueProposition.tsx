'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Globe, Award } from 'lucide-react';

const benefits = [
    "Consulting-led, not product-driven",
    "Secure-by-design and intelligence-first approach",
    "Industry-contextual solutions",
    "Measurable business impact",
    "Long-term partnership mindset"
];

const stats = [
    { label: "Client Retention", value: "94%", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "ROI Average", value: "10x", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Countries Served", value: "20+", icon: Globe, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Industry Awards", value: "15", icon: Award, color: "text-orange-500", bg: "bg-orange-500/10" },
];

export function ValueProposition() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden text-primary-foreground">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            A Consulting Partner <br />
                            <span className="text-accent">You Can Trust</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
                            At MindsSparc, we partner with organizations to solve complex challenges at the intersection of technology, security, and talent. Our approach is grounded in deep domain expertise, industry context, and an unwavering focus on outcomes that matter.
                        </p>

                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-gray-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Column: Impact Dashboard */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all shadow-xl"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative connecting lines or glow could go here */}
                    </div>

                </div>
            </div>
        </section>
    );
}
