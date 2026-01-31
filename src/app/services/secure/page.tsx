'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Shield, Zap, Search, FileCheck, Umbrella, Activity, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Attack Path Discovery',
        description: 'Map and visualize potential exploit routes before attackers find them.',
        icon: Search
    },
    {
        title: 'Threat Exposure Validation',
        description: 'Validate true risk by simulating real-world attack scenarios.',
        icon: Zap
    },
    {
        title: 'Portfolio Risk Assessment',
        description: 'Comprehensive view of cyber risk across your entire asset portfolio.',
        icon: Activity
    },
    {
        title: 'Compliance & Risk Assessment',
        description: 'Ensure regulatory alignment while identifying critical gaps.',
        icon: FileCheck
    },
    {
        title: 'Cyber Security Due Diligence',
        description: 'Deep-dive analysis for M&A, vendors, and critical partnerships.',
        icon: Lock
    },
    {
        title: 'Cyber Insurance Security',
        description: 'Optimize your security posture to meet insurance requirements.',
        icon: Umbrella
    }
];

export default function SecurePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-blue-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gray-950">
                        {/* Abstract Cyber Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* Radar/Scanner Beam Animation */}
                        <motion.div
                            className="absolute inset-x-0 h-32 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 border-y border-blue-500/20"
                            animate={{ top: ['-10%', '110%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Glowing Orbs */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
                                MindsSparc Secure
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
                                Reveal threats <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                    before they strike
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Proactive offensive security to uncover how your systems can be exploited
                                in real-world scenarios.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2"
                                >
                                    Book a Demo <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* The New Reality Section */}
                <section className="py-24 border-t border-white/5 bg-gray-900/50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-3xl font-bold mb-6">The New Reality</h3>
                                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                                    <p>
                                        As businesses rapidly adopt AI, cloud platforms, APIs, and data-driven systems,
                                        the Cybersecurity threat landscape has fundamentally changed.
                                    </p>
                                    <p>
                                        Traditional defensive security measures are no longer sufficient to protect organizations
                                        against AI-enabled attacks, data manipulation, and silent system compromise.
                                    </p>
                                    <p className="font-semibold text-white border-l-4 border-blue-500 pl-4 py-1">
                                        In this environment, <span className="text-blue-400">offensive cybersecurity</span> is no longer optional —
                                        it is essential to think and act like an attacker to uncover how any system can be exploited.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative bg-gray-800 rounded-3xl p-8 border border-white/10 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-4">It’s no longer about:</h4>
                                    <p className="text-gray-400 italic mb-8">“How many tools do we have?”</p>
                                    <h4 className="text-2xl font-bold text-blue-400 mb-4">It is about:</h4>
                                    <p className="text-white text-3xl font-bold">Proactively protecting what matters.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CyberMindr Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
                                <Shield className="w-4 h-4" /> Powered by CyberMindr
                            </div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                MindsSparc packages <strong>CyberMindr</strong> to focus on validated vulnerabilities
                                and confirmed attack paths, performing <span className="text-white font-bold">16,000+ live checks</span> on discovered assets.
                                Continuously updated with intelligence from <span className="text-white font-bold">300+ hacker forums</span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-b from-gray-950 to-blue-950/20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to secure your future?</h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-900/20"
                        >
                            Book a Demo <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
