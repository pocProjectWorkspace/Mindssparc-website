'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, ArrowRight, Sparkles, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gray-950">
                        {/* Background Animation */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                        />

                        {/* Pink/Rose Glows for Passion/Talent */}
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px]"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px]"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">
                                Join MindsSparc
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
                                Shape the future <br className="hidden md:block" />
                                <span className="text-teal-400">
                                    of transformation.
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                We are always on the lookout for exceptional talent who share our passion for doing the right thing and delivering outcomes that matter.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Culture / Values Grid (Optional but adds depth) */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                { icon: Sparkles, title: "Impact Driven", desc: "Work on projects that transform industries." },
                                { icon: Users, title: "People First", desc: "A culture grounded in trust and transparency." },
                                { icon: Globe, title: "Global Mindset", desc: "Collaborate with experts across borders." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                                >
                                    <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-400">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA / Contact Section */}
                <section className="py-24 bg-gray-950">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-gray-900 border border-white/10 relative overflow-hidden">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-3xl font-bold mb-6 relative z-10">Ready to make your mark?</h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed relative z-10">
                                If you are interested to explore opportunities with us, we'd love to hear from you. Drop your CV to our talent team.
                            </p>

                            <a
                                href="mailto:talent@mindssparc.com"
                                className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-all hover:scale-105 shadow-xl shadow-white/10"
                            >
                                <Mail className="w-5 h-5" />
                                talent@mindssparc.com
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
