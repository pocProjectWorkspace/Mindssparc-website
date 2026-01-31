'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Leadership } from "@/components/sections/Leadership";
import { motion } from 'framer-motion';
import { ArrowLeftRight, Building2, Lightbulb, Rocket } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
            <Header />
            <main className="flex-grow pt-32">

                {/* Hero / Philosophy Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-6">
                                Our Philosophy
                            </h1>
                            <p className="text-3xl md:text-5xl font-medium leading-tight mb-8 text-white">
                                "At MindsSparc, we believe that doing the right thing and putting your interests first is the only way to build a lasting partnership."
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                            <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
                                Our approach is grounded in deep domain expertise, industry context, and an unwavering focus on outcomes that matter.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The GAP Section */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bridging the Gap</h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                The current landscape is divided. We exist to empower organizations to bridge the gap between where they are and where the future is going.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">

                            {/* Left: Large Consulting */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="p-8 rounded-2xl bg-gray-900 border border-white/5 text-center flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <div className="p-4 bg-gray-800 rounded-full mb-6 text-gray-400">
                                    <Building2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Large Consulting Firms</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Offer depth but are often <strong className="text-gray-300">siloed</strong>, impeding agility and true client focus.
                                </p>
                            </motion.div>

                            {/* Center: MindsSparc */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative p-1 rounded-2xl bg-gradient-to-b from-blue-500 to-purple-600 shadow-2xl shadow-blue-900/20 transform scale-105"
                            >
                                <div className="h-full w-full bg-gray-950 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                                    <div className="p-4 bg-blue-500/10 rounded-full mb-6 text-blue-400">
                                        <ArrowLeftRight className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-3">MindsSparc</h3>
                                    <p className="text-white text-base leading-relaxed">
                                        The <strong className="text-blue-400">Client-First Integration</strong>.
                                        <br />
                                        Bringing agility, deep context, and strategic innovation together.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right: Startups */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="p-8 rounded-2xl bg-gray-900 border border-white/5 text-center flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <div className="p-4 bg-gray-800 rounded-full mb-6 text-gray-400">
                                    <Rocket className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Startup Ecosystem</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Offer innovation but often lack the <strong className="text-gray-300">strategic context</strong> of the enterprise.
                                </p>
                            </motion.div>

                        </div>

                        {/* Origin Story Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-20 max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                        >
                            <h3 className="text-lg font-bold text-gray-300 mb-4 uppercase tracking-widest">Our Origin</h3>
                            <p className="text-xl text-gray-300 leading-relaxed font-light">
                                <span className="text-white font-medium">MindsSparc was born out of a desire</span> to provide a fresh client-first approach and a passion to fill the vacuum. We bridge the gap between large consulting companies and startup ecosystems by bringing in industry experience and business context to provide new-age solutions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-3xl bg-gray-900/50 border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all"
                            >
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Lightbulb className="w-32 h-32" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-400 mb-6 relative z-10">Our Vision</h2>
                                <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                                    To foster a trusted relationship in every client interaction while helping build the enterprise of tomorrow on the foundation of resilient, secure, and intelligent technologies.
                                </p>
                            </motion.div>

                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-10 rounded-3xl bg-gray-900/50 border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all"
                            >
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Rocket className="w-32 h-32" />
                                </div>
                                <h2 className="text-3xl font-bold text-purple-400 mb-6 relative z-10">Our Mission</h2>
                                <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                                    To deliver secure, intelligent, and industry-contextual solutions that unlock measurable value—powered by deep domain expertise, innovative thinking, and an unwavering commitment to supporting organizations as they accelerate transformation.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section (Using the updated Dark Mode component) */}
                <Leadership />

            </main>
            <Footer />
        </div>
    );
}
