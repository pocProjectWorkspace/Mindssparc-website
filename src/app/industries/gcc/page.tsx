'use client';

import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Globe, Building2, Users, Zap, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function GCCPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden text-center flex flex-col items-center">
                    <div className="absolute inset-0 z-0 bg-gray-950 pointer-events-none">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* ANIMATION: Orbital Network (Global Reach) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
                            {/* Outer Ring */}
                            <motion.div
                                className="absolute inset-0 border border-dashed border-teal-500/30 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            />
                            {/* Middle Ring */}
                            <motion.div
                                className="absolute inset-[100px] border border-teal-400/20 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 w-4 h-4 bg-teal-500 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2" />
                            </motion.div>
                            {/* Inner Ring */}
                            <motion.div
                                className="absolute inset-[200px] border border-teal-500/30 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-teal-400 rounded-full blur-[2px] -translate-x-1/2 translate-y-1/2" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">
                                Industry Focus
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                                Global Capability <br className="hidden md:block" />
                                <span className="text-teal-400">
                                    Centres
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                We help enterprises establish and mature their GCCs to drive strategic value and global operational excellence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Challenge */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Industry Challenge</h2>
                            <p className="text-gray-400">Navigating the complexities of global operations.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Talent Wars", desc: "Accessing and retaining niche skills in competitive markets.", icon: Users },
                                { title: "Siloed Operations", desc: "GCCs operating in isolation from HQ strategic value streams.", icon: Building2 },
                                { title: "Cost Arbitrage Decline", desc: "The shrinking gap in labor costs demands a shift to value creation.", icon: TrendingUp }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-gray-950 border border-white/10 rounded-2xl hover:border-teal-500/30 transition-all group hover:bg-gray-900/50"
                                >
                                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-teal-400 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/10">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Need of the Hour */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-teal-900/5" />
                    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">The Need of the Hour: <br /><span className="text-teal-400">Value Creation</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                The traditional GCC model focused purely on arbitrage is obsolete. The modern enterprise requires GCCs to be <strong className="text-white">centers of innovation</strong>, driving AI adoption, product innovation, and business resilience.
                            </p>
                            <ul className="space-y-4">
                                {["Shift from execution to ownership", "Integration with global agile teams", "Leadership autonomy and accountability"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-teal-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[500px] w-full bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-teal-500/10 z-10" />
                            <Image
                                src="/images/industries/gcc-need.png"
                                alt="Shared Value Creation"
                                fill
                                className="object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                {/* How We Solve It */}
                <section className="py-24 bg-gray-900/50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-16 text-center">The MindsSparc Approach</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Strategic Roadmap", desc: "Defining the GCC maturity curve from setup to scale." },
                                { title: "Target Operating Model", desc: "Implementing POD-based structures for end-to-end ownership." },
                                { title: "Operational Excellence", desc: "Metrics-driven governance for sustained performance." },
                                { title: "Cloud & AI Native", desc: "Building a tech-first foundation for future readiness." },
                                { title: "Talent Branding", desc: "Positioning the GCC as an employer of choice." },
                                { title: "Cultural Integration", desc: "Bridging the gap between local teams and global culture." }
                            ].map((solution, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                                >
                                    <div className="w-8 h-1 bg-teal-500 mb-6 group-hover:w-16 transition-all duration-300" />
                                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                                    <p className="text-gray-400">{solution.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to transform your Global Capability Centre?</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors inline-flex items-center gap-2 hover:scale-105 transform duration-300"
                        >
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>

                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    defaultService="GCC"
                />

            </main>
            <Footer />
        </div>
    );
}
