'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import {BookOpen, UserCheck, ArrowRight, CheckCircle, School, FileText } from 'lucide-react';
import Image from 'next/image';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { SolutionVideo } from '@/components/ui/SolutionVideo';
import { SHOW_SOLUTION_VIDEOS } from '@/data/solutions';

// EduCore case study. Client name is pending confirmation, so it stays anonymous for now.
const EDUCORE_VIDEO = '/videos/educore.mp4';
const EDUCORE_ONE_PAGER: string | undefined = undefined; // e.g. '/one-pagers/educore.pdf'

export default function EducationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">

                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden text-center flex flex-col items-center">
                    <div className="absolute inset-0 z-0 bg-gray-950 pointer-events-none">
                        {/* Abstract Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* ANIMATION: Rising Sparks (Growth & Enlightenment) */}
                        <div className="absolute inset-0 overflow-hidden opacity-30">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bottom-0 w-2 h-2 rounded-full bg-teal-400 blur-sm"
                                    style={{ left: `${(i * 7) % 100}%` }}
                                    animate={{
                                        y: [100, -800],
                                        opacity: [0, 1, 0],
                                        scale: [0.5, 1.5]
                                    }}
                                    transition={{
                                        duration: 5 + (i % 5),
                                        repeat: Infinity,
                                        ease: "easeOut",
                                        delay: i * 0.5
                                    }}
                                />
                            ))}
                        </div>

                        {/* Glowing Static Orbs */}
                        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-600/20 rounded-full blur-[100px] animate-pulse" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 rounded-full border border-teal-500/20 text-teal-500 text-sm font-bold uppercase tracking-widest mb-6">
                                Industry Focus
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Education
                            </h1>
                            <p className="text-2xl text-teal-400 font-medium mb-8">
                                Reimagining the Future of Learning.
                            </p>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                We partner with institutions and EdTech leaders to create personalized, accessible, a data-driven learning ecosystems.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Challenge */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Industry Challenge</h2>
                            <p className="text-gray-400">Meeting the demands of the digital-first learner.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Student Disengagement", desc: "One-size-fits-all models failing to inspire today's students.", icon: UserCheck },
                                { title: "Admin Inefficiency", desc: "Manual processes and paper-based workflows slowing operations.", icon: School },
                                { title: "The Digital Divide", desc: "Ensuring equitable access to technology and resources.", icon: BookOpen }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-gray-950 border border-white/10 rounded-2xl hover:border-teal-500/30 transition-all group hover:bg-gray-900/50"
                                >
                                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 text-teal-500 group-hover:scale-110 transition-transform shadow-lg shadow-teal-500/10">
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
                        <div className="order-2 lg:order-1 relative h-[500px] w-full bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-teal-500/10 z-10" />
                            <Image
                                src="/images/industries/education-need.png"
                                alt="Personalized Learning"
                                fill
                                className="object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6">The Need of the Hour: <br /><span className="text-teal-500">Personalization</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Education is moving from standardized instruction to <strong className="text-white">adaptive learning pathways</strong>. Institutions must leverage AI and analytics to support every student's unique journey.
                            </p>
                            <ul className="space-y-4">
                                {["AI-driven curriculum adaptation", "Hybrid campus experiences", "Lifelong learning infrastructure"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-teal-500" />
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
                                { title: "AI Tutors", desc: "24/7 personalized support for student queries and learning." },
                                { title: "Smart Campus", desc: " IoT-enabled facilities for safety, efficiency, and engagement." },
                                { title: "Student 360", desc: "Unified data view for proactive intervention and success." },
                                { title: "Immersive Learning", desc: "AR/VR labs for experiential vocational training." },
                                { title: "Operational Cloud", desc: "Streamlining admissions, finance, and HR." },
                                { title: "Digital Credentialing", desc: "Blockchain-verified certificates and micro-credentials." }
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

                {/* Case Study: EduCore */}
                <section className="py-24 border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className={`grid grid-cols-1 gap-12 items-center max-w-6xl mx-auto ${SHOW_SOLUTION_VIDEOS ? 'lg:grid-cols-2' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/20 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-6">
                                    <School className="w-4 h-4" /> Case Study
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">EduCore: AI Native student information system</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    MindsSparc built EduCore, a school management and student information platform that brings students, staff and day-to-day school operations together on one dashboard.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {["One dashboard for school administration", "Unified student records", "Built and delivered end to end by MindsSparc"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                {EDUCORE_ONE_PAGER && (
                                    <a
                                        href={EDUCORE_ONE_PAGER}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2"
                                    >
                                        <FileText className="w-5 h-5" /> Download one-pager
                                    </a>
                                )}
                            </motion.div>

                            <SolutionVideo src={EDUCORE_VIDEO} title="EduCore" enabled={SHOW_SOLUTION_VIDEOS} />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to empower the next generation?</h2>
                        <ConsultationButton
                            service="Education"
                            source="Education — Explore Solutions"
                            className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors inline-flex items-center gap-2 hover:scale-105 transform duration-300"
                        >
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </ConsultationButton>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
