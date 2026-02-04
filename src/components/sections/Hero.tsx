'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
// import Image from 'next/image'; // Unused now
import { WaveHero } from '@/components/ui/WaveHero';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-950 pt-20">

            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <WaveHero />
                {/* Gradient Overlay for Text Readability - Darker on the left */}
                <div className="absolute inset-0 bg-gray-950/70" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Build what’s next <br />
                            <span className="text-teal-400">
                                Together
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
                            Trusted consulting across cybersecurity, artificial intelligence, and talent – reduce risks, deliver measurable outcomes and scale teams for growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                                Talk to an expert
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
