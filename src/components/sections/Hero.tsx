'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NeuralBackground } from '@/components/ui/NeuralBackground';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary/30 pt-20">

            {/* Animated Background */}
            <NeuralBackground />

            {/* Overlay gradient for text readability if needed, though canvas is subtle */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center pointer-events-auto"> {/* Enable pointer events for content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                            Enterprise Intelligence
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mb-8 leading-tight">
                            Building the <br />
                            <span className="text-gray-400">Enterprise of Tomorrow</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Trusted consulting across cybersecurity, artificial intelligence, and talent—delivering secure, intelligent, and measurable outcomes for modern organizations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                                Talk to an Expert
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 text-primary font-semibold hover:text-primary/80 transition-colors bg-white/50 backdrop-blur-sm rounded-full border border-gray-200">
                                Explore Our Services
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
