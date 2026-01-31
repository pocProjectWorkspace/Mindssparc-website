'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Database, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function HealthcarePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-emerald-500/30">
            <Header />

            <main className="flex-grow pt-32">

                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden text-center flex flex-col items-center">
                    <div className="absolute inset-0 z-0 bg-gray-950 pointer-events-none">
                        {/* Abstract Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* ANIMATION: EKG Pulse (Vital Signs) */}
                        <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 flex items-center overflow-hidden opacity-30">
                            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
                                <motion.path
                                    d="M0,50 L200,50 L220,10 L240,90 L260,20 L280,80 L300,50 L600,50 L620,10 L640,90 L660,20 L680,80 L700,50 L1200,50"
                                    fill="none"
                                    stroke="url(#pulseGradient)"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 1, 1, 0], x: [-100, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                <defs>
                                    <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="transparent" />
                                        <stop offset="50%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">
                                Industry Focus
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                                Healthcare & <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    Life Sciences
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Empowering providers and payers to unlock the power of data, improve patient outcomes, and navigate complex regulatory landscapes.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Challenge */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Industry Challenge</h2>
                            <p className="text-gray-400">Balancing care with compliance and cost.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Data Silos", desc: "Fragmented patient information across disparate systems.", icon: Database },
                                { title: "Regulatory Pressure", desc: "Navigating HIPAA, GDPR, and evolving compliance mandates.", icon: Shield },
                                { title: "Rising Costs", desc: "The imperative to reduce operational overhead while improving care.", icon: Activity }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-gray-950 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all group hover:bg-gray-900/50"
                                >
                                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10">
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
                    <div className="absolute inset-0 bg-emerald-900/5" />
                    <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative h-[500px] w-full bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 z-10" />
                            <Image
                                src="/images/industries/healthcare-need.png"
                                alt="Interoperability"
                                fill
                                className="object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6">The Need of the Hour: <br /><span className="text-emerald-400">Interoperability</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                The future of healthcare is connected. Systems must talk to each other to provide a <strong className="text-white">longitudinal patient view</strong>, enabling preventative care and personalized treatment plans.
                            </p>
                            <ul className="space-y-4">
                                {["Seamless data exchange", "Real-time analytics", "Secure telehealth platforms"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* How We Solve It */}
                <section className="py-24 bg-gray-900/50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-16 text-center">The MindsSparc Approach</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Interoperability Cloud", desc: "Unified data fabric for seamless information exchange." },
                                { title: "AI Diagnostics", desc: "Assisting clinicians with faster, more accurate insights." },
                                { title: "Digital Patient Twin", desc: "Simulation models for personalized treatment efficacy." },
                                { title: "Compliance Automation", desc: "Automated checks for regulatory adherence." },
                                { title: "Telehealth 2.0", desc: "Next-gen remote care platforms." },
                                { title: "Supply Chain Resilience", desc: "Ensuring availability of critical medical supplies." }
                            ].map((solution, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors group"
                                >
                                    <div className="w-8 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-6 group-hover:w-16 transition-all duration-300" />
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
                        <h2 className="text-3xl font-bold mb-6">Ready to innovate for better outcomes?</h2>
                        <button className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-emerald-50 transition-colors inline-flex items-center gap-2 hover:scale-105 transform duration-300">
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
