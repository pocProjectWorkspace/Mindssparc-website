'use client';

import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Activity, Heart, Shield, Database, ArrowRight, CheckCircle, Smartphone, Users, Briefcase } from 'lucide-react';
import { GraduationCap, Wallet, HandHeart, Laptop } from 'lucide-react'; // Adding missing icons
import Image from 'next/image';

export default function HealthcarePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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



                {/* Powered by Upllyft Section */}
                <section className="py-24 relative overflow-hidden bg-gray-900/30">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6">
                                <Activity className="w-4 h-4" /> Powered by Upllyft
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Lifecycle Care</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                MindsSparc integrates <strong>Upllyft</strong> to provide a holistic ecosystem for therapy, education, and long-term support. A connected platform ensuring no stage of care is overlooked.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Care Co-ordination & IEP",
                                    features: ["Cuts diagnosis-to-therapy lag", "Cross-team goal tracking", "Boosts IEP compliance"],
                                    icon: Activity
                                },
                                {
                                    title: "Therapy Marketplace",
                                    features: ["Expands Tier-2/3 access", "Credentialed, verified care", "Higher therapy adherence"],
                                    icon: Heart
                                },
                                {
                                    title: "Assistive Tech & Devices",
                                    features: ["Faster access to AAC/mobility", "Insurance-linked procurement", "Standardizes device quality"],
                                    icon: Smartphone
                                },
                                {
                                    title: "Education & Inclusion",
                                    features: ["Earlier learning difficulty detection", "Upskills mainstream teachers", "Tracks NEP 2020 compliance"],
                                    icon: GraduationCap
                                },
                                {
                                    title: "Employment & Skilling",
                                    features: ["National therapist registry", "Ongoing CPD to prevent burnout", "Inclusion workforce pipeline"],
                                    icon: Briefcase
                                },
                                {
                                    title: "Stakeholder Community",
                                    features: ["Improves at-home reinforcement", "Reduces stakeholder burnout", "Strengthens advocacy voice"],
                                    icon: Users
                                },
                                {
                                    title: "Long-term Financial Planning",
                                    features: ["Seamless care across life stages", "Guardianship & trust support", "Lifetime care budgeting tools"],
                                    icon: Wallet
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                                    <ul className="space-y-2">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to innovate for better outcomes?</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-emerald-50 transition-colors inline-flex items-center gap-2 hover:scale-105 transform duration-300"
                        >
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>

                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    defaultService="Healthcare"
                />

            </main>
            <Footer />
        </div>
    );
}
