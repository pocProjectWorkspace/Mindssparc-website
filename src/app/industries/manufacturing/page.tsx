'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Factory, Truck, Box, Cpu, ArrowRight, CheckCircle, BarChart3, ChevronRight } from 'lucide-react';
import Image from 'next/image';


import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

export default function ManufacturingPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden text-center flex flex-col items-center">
                    {/* ... (keep existing hero content) ... */}
                    <div className="absolute inset-0 z-0 bg-gray-950 pointer-events-none">
                        {/* Abstract Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(13, 148, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />

                        {/* ANIMATION: Digital Conveyor / Assembly (Process & Flow) */}
                        <div className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 flex items-center justify-center opacity-20 overflow-hidden">
                            <div className="flex gap-12">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ x: [0, 100] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <ChevronRight className="w-24 h-24 text-teal-500" strokeWidth={1} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-sm font-bold text-teal-500 uppercase tracking-[0.2em] mb-4">
                                Industry Focus
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                                <span className="text-teal-400">
                                    Manufacturing
                                </span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Building the Intelligent, Resilient Factory of the Future. We help manufacturers navigate Industry X.0, bridging the gap between physical operations and digital intelligence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Challenge */}
                <section className="py-24 bg-gray-900/30 border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">The Industry Challenge</h2>
                            <p className="text-gray-400">Managing complexity in a volatile world.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Supply Chain Fragility", desc: "Disruptions and lack of visibility across the value chain.", icon: Truck },
                                { title: "Legacy OT Systems", desc: "Aging infrastructure creating data silos on the shop floor.", icon: DatabaseIcon }, // Using workaround for icon below
                                { title: "Skills Gap", desc: "Shortage of digital-ready talent in operations.", icon: UsersIcon }
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
                        <div>
                            <h2 className="text-4xl font-bold mb-6">The Need of the Hour: <br /><span className="text-teal-500">Agility & Resilience</span></h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                Manufacturers must move from reactive firefighting to predictive operations. Modern factories leverage real-time data to optimize production, quality, and maintenance.
                            </p>
                            <ul className="space-y-4">
                                {["End-to-end supply chain visibility", "IT/OT convergence", "Data driven decision making", "Cybersecurity"].map((item, i) => (
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
                                src="/images/industries/manufacturing-need.png"
                                alt="Agility & Resilience"
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "Smart Supply Chain", desc: "Leverage AI to predict demand, manage inventory and streamline logistics." },
                                { title: "Predictive Maintenance", desc: "AI-driven insights to prevent breakdowns and minimise production disruption." },
                                { title: "Digital Manufacturing", desc: "Build intelligent workflows to drive process efficiencies and optimise operations." },
                                { title: "Data Driven Insights", desc: "Convert manufacturing data into strategic insights to anticipate risks, optimize decisions, and continuously improve performance." }
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
                        <h2 className="text-3xl font-bold mb-6">Ready to build the factory of the future?</h2>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors inline-flex items-center gap-2 hover:scale-105 transform duration-300">
                            Explore Solutions <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>

                <ConsultationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    defaultService="Manufacturing"
                />

            </main>
            <Footer />
        </div>
    );
}

// Icon fallbacks for custom needs
function DatabaseIcon(props: any) {
    return <Cpu {...props} />;
}
function UsersIcon(props: any) {
    return <Box {...props} />; // Placeholder
}
