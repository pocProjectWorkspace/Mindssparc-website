'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Users, Briefcase, Search, Lightbulb, Target, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Executive Search',
        description: 'Identifying and securing transformational leadership talent for the C-suite and VP levels.',
        icon: Target
    },
    {
        title: 'Specialized Hiring',
        description: 'Targeted hiring ensuring you find the right fit in competitive markets.',
        icon: UserCheck
    },
    {
        title: 'Contract & Project Staffing',
        description: 'Flexible, high-velocity staffing solutions to scale delivery teams on demand.',
        icon: Briefcase
    },
    {
        title: 'Talent Advisory',
        description: 'Strategic consulting on org design, compensation, and employer branding.',
        icon: Lightbulb
    }
];

export default function TalentPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gray-950">
                        {/* Interactive Network / People Grid Animation */}
                        <div className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.2) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* Glowing "Search" Spotlights */}
                        <motion.div
                            className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[100px]"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px]"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], x: [0, -50, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />

                        {/* Connecting Lines Animation (Simulating finding matches) */}
                        <motion.div
                            className="absolute top-0 left-1/4 w-px h-full bg-teal-500/30"
                            animate={{ opacity: [0, 1, 0], top: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                        <motion.div
                            className="absolute top-0 right-1/4 w-px h-full bg-teal-500/30"
                            animate={{ opacity: [0, 1, 0], top: ['-100%', '100%'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">
                                MindsSparc Talent
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
                                Teams that deliver, <br className="hidden md:block" />
                                <span className="text-teal-400">
                                    not just resumes.
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Access a proactive pipeline and end-to-end hiring engine to build high performing teams, powered by Next Gen models.
                            </p>

                            <div className="flex justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2"
                                >
                                    Build Your Team <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-gray-900/50 border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h3 className="text-3xl font-bold mb-6">End-to-End Talent Solutions</h3>
                            <p className="text-gray-400 text-lg">
                                From executive leadership to specialized project teams, we find the right fit for your transformation journey.
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
                                    className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 relative overflow-hidden"
                                >

                                    <div className="relative z-10 border-b border-white/10 pb-6 mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
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
                <section className="py-24 bg-gray-950">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Transform Your Hiring</h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-teal-600 text-white text-lg font-bold rounded-full hover:bg-teal-500 transition-all hover:scale-105 shadow-xl shadow-teal-900/20"
                        >
                            Explore Talent Solutions <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
