'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, CheckCircle, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { ConsultationButton } from '@/components/ui/ConsultationButton';
import { SolutionVideo } from '@/components/ui/SolutionVideo';
import { solutions, SHOW_SOLUTION_VIDEOS } from '@/data/solutions';

export default function SolutionsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gray-950">
                        <div className="absolute inset-0 opacity-40"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.4) 1.5px, transparent 1.5px)',
                                backgroundSize: '30px 30px'
                            }}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-sm font-bold text-teal-400 uppercase tracking-[0.2em] mb-4">
                                MindsSparc Solutions
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight max-w-4xl mx-auto">
                                AI-native solutions, <br className="hidden md:block" />
                                <span className="text-teal-400">built to work</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Purpose-built AI products, ready to deploy across your business.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">
                                {solutions.map((solution) => (
                                    <a
                                        key={solution.slug}
                                        href={`#${solution.slug}`}
                                        className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-gray-300 hover:text-white hover:border-teal-500/40 transition-colors"
                                    >
                                        {solution.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* One section per offering */}
                {solutions.map((solution, index) => {
                    const showVideo = SHOW_SOLUTION_VIDEOS && !!solution.video;

                    return (
                        <section
                            key={solution.slug}
                            id={solution.slug}
                            className={`py-24 border-t border-white/5 scroll-mt-28 ${index % 2 === 0 ? 'bg-gray-900/50' : 'bg-gray-950'}`}
                        >
                            <div className="container mx-auto px-6">
                                <div className={`grid grid-cols-1 gap-12 items-center max-w-6xl mx-auto ${showVideo ? 'lg:grid-cols-2' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className={showVideo && index % 2 === 1 ? 'lg:order-2' : ''}
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-6">
                                            <solution.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4">{solution.name}</h3>
                                        <p className="text-xl text-teal-400 font-semibold mb-6">{solution.tagline}</p>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">{solution.description}</p>

                                        <ul className="space-y-3 mb-10">
                                            {solution.highlights.map((highlight) => (
                                                <li key={highlight} className="flex items-center gap-3 text-gray-300">
                                                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-4">
                                            {solution.externalUrl ? (
                                                <a
                                                    href={solution.externalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2"
                                                >
                                                    Visit {solution.name} <ExternalLink className="w-5 h-5" />
                                                </a>
                                            ) : (
                                                <ConsultationButton
                                                    service="Solutions"
                                                    source={`Solutions — ${solution.name} demo`}
                                                    className="px-8 py-4 bg-white text-gray-950 font-bold rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2"
                                                >
                                                    Book a Demo <ArrowRight className="w-5 h-5" />
                                                </ConsultationButton>
                                            )}
                                            {solution.onePager && (
                                                <a
                                                    href={solution.onePager}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:border-teal-400 hover:text-teal-400 transition-colors flex items-center gap-2"
                                                >
                                                    <FileText className="w-5 h-5" /> Download one-pager
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>

                                    {showVideo && (
                                        <SolutionVideo src={solution.video!} title={solution.name} enabled={showVideo} />
                                    )}
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* Final CTA */}
                <section className="py-24 bg-gray-950 border-t border-white/5">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Find the right fit for your team</h2>
                        <ConsultationButton
                            service="Solutions"
                            source="Solutions — Talk to an Expert"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-teal-600 text-white text-lg font-bold rounded-full hover:bg-teal-500 transition-all hover:scale-105 shadow-xl shadow-teal-900/20"
                        >
                            Talk to an Expert <ArrowRight className="w-5 h-5" />
                        </ConsultationButton>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
