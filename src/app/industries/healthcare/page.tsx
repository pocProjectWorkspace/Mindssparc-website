'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Compass, ClipboardList, Users, MessageCircle, Layers, School, ExternalLink, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { UPLLYFT_URL } from '@/data/solutions';

// Content aligned with upllyft.com — Upllyft is MindsSparc's healthcare initiative
const audiences = [
    {
        title: "Compass",
        audience: "For neurodivergent people and families",
        desc: "Guidance and community in one place. A school meeting, a difficult transition, a small change that made the morning easier: share experiences, ask questions and learn from one another.",
        features: ["Guidance for everyday situations", "A community that has been there", "Support groups and events"],
        icon: Compass
    },
    {
        title: "PracticeOS",
        audience: "For clinics, therapists and support teams",
        desc: "Keep enquiries, appointments, care plans and session notes together. Give your team a clearer picture of each person's support, and make it easier to keep families informed.",
        features: ["Enquiries and appointments", "Care plans and session notes", "Families kept in the loop"],
        icon: ClipboardList
    },
    {
        title: "Schools & Educators",
        audience: "For teachers and special educators",
        desc: "Explore ideas for the classroom and build stronger conversations between school, home and professional support.",
        features: ["Classroom ideas and resources", "School, home and therapist alignment", "Shared knowledge across the community"],
        icon: School
    }
];

export default function HealthcarePage() {
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
                            <h1 className="text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">
                                Industry Focus
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                                <span className="text-teal-400">
                                    Healthcare
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                                Through Upllyft, MindsSparc builds tools that help neurodivergent people and families find guidance, and help professionals organise care.
                            </p>
                            <a
                                href={UPLLYFT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors inline-flex items-center gap-2"
                            >
                                Visit Upllyft <ExternalLink className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* The Challenge */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
                            <p className="text-gray-400">Support for neurodivergent people is spread across families, clinics and schools.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Families Searching Alone", desc: "Parents and individuals piece together guidance from scattered sources, often without anyone who has been through the same situation.", icon: MessageCircle },
                                { title: "Care Spread Across Tools", desc: "Practices juggle enquiries, appointments, care plans and session notes in separate places, leaving no clear picture of each person's support.", icon: Layers },
                                { title: "Disconnected Support Teams", desc: "Therapists, educators and families rarely share one view, so progress made in one setting is hard to carry into the next.", icon: Users }
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
                        <div className="order-2 lg:order-1 relative h-[500px] w-full bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-teal-500/10 z-10" />
                            <Image
                                src="/images/industries/healthcare-need.png"
                                alt="Connected support"
                                fill
                                className="object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6">The Need of the Hour: <br /><span className="text-teal-400">Connected Support</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Guidance, community and connected support belong together. Upllyft brings the people around a neurodivergent person onto one platform, so families feel less alone and professionals can keep the work of supporting people <strong className="text-white">more organised</strong>.
                            </p>
                            <ul className="space-y-4">
                                {["Guidance and community for neurodivergent people and families", "Tools that keep each person's care in one place", "Stronger conversations between school, home and professional support"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/20 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-6">
                                <HeartHandshake className="w-4 h-4" /> Powered by Upllyft
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">One Platform, Everyone Who Helps</h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                <strong>Upllyft</strong> is an initiative of MindsSparc, built for clinics, therapists, support teams, families, caregivers and neurodivergent individuals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {audiences.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 group flex flex-col"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-sm font-semibold text-teal-400 mb-4">{item.audience}</p>
                                    <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                                    <ul className="space-y-2 mt-auto">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
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
                        <h2 className="text-3xl font-bold mb-6">Ready to connect care?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href={UPLLYFT_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors inline-flex items-center justify-center gap-2 hover:scale-105 transform duration-300"
                            >
                                Visit Upllyft <ExternalLink className="w-5 h-5" />
                            </a>
                            <ConsultationButton
                                service="Healthcare"
                                source="Healthcare — Talk to an Expert"
                                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors inline-flex items-center justify-center gap-2"
                            >
                                Talk to an Expert <ArrowRight className="w-5 h-5" />
                            </ConsultationButton>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
