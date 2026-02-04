'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                <section className="relative py-12 md:py-24 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 1px, transparent 1px)',
                                backgroundSize: '30px 30px'
                            }}
                        />
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px]"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px]"
                            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Text & Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
                                    Let's <span className="text-teal-400">Talk.</span>
                                </h1>
                                <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
                                    Whether you’re exploring a new initiative or navigating a complex challenge, we’re here to help you build what's next.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-teal-500/10 rounded-full text-teal-400">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</h3>
                                            <a href="mailto:contact@MindsSparc.com" className="text-xl font-bold text-white hover:text-teal-400 transition-colors">
                                                contact@MindsSparc.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Form */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10"
                            >
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-400">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-400">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-400">Work Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none" placeholder="jane@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-400">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-950/50 border border-white/10 text-white placeholder-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all outline-none resize-none" placeholder="Tell us about your project..."></textarea>
                                    </div>

                                    <button className="w-full px-8 py-4 bg-white text-gray-950 text-lg font-bold rounded-xl hover:bg-teal-50 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-white/5 flex items-center justify-center gap-2">
                                        Send Message <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
