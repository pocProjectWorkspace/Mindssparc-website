'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Brain, Cpu, Database, Network, Scale, Factory } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'AI App Modernisation',
        description: 'Transform legacy applications into intelligent, adaptive systems powered by next-gen AI.',
        icon: Cpu
    },
    {
        title: 'AI Center of Excellence (COE)',
        description: 'Establish the governance, talent, and infrastructure needed to scale AI across your enterprise.',
        icon: Brain
    },
    {
        title: 'AI Governance & Compliance',
        description: 'Navigate the ethical and regulatory complexities of AI with robust frameworks and oversight.',
        icon: Scale
    },
    {
        title: 'AI for Industries',
        description: 'Tailored AI solutions solving specific challenges in Healthcare, Finance, Manufacturing, and more.',
        icon: Factory
    }
];

export default function IntelligencePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-purple-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gray-950">
                        {/* Connecting Dots / Neural Network Animation */}
                        <div className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 1.5px, transparent 1.5px)',
                                backgroundSize: '30px 30px'
                            }}
                        />

                        {/* Moving Nodes Animation (Simulated with moving gradients) */}
                        <motion.div
                            className="absolute top-1/6 left-1/4 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px]"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/6 right-1/4 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[80px]"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-4">
                                MindsSparc Intelligence
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
                                Power the future <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                    of business
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                AI-driven solutions that enable smarter decisions, intelligent automations and sustainable competitive advantage.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-purple-50 transition-colors flex items-center gap-2"
                                >
                                    Start your AI Journey <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-gray-900/50 border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h3 className="text-3xl font-bold mb-6">Explore our Portfolio</h3>
                            <p className="text-gray-400 text-lg">
                                From modernizing legacy systems to establishing comprehensive governance, we provide end-to-end AI capabilities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <feature.icon className="w-24 h-24" />
                                    </div>

                                    <div className="relative z-10 border-b border-white/10 pb-6 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                    </div>

                                    <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-b from-gray-950 to-purple-950/20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to power your future?</h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-purple-600 text-white text-lg font-bold rounded-full hover:bg-purple-500 transition-all hover:scale-105 shadow-xl shadow-purple-900/20"
                        >
                            Start your AI Journey <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
