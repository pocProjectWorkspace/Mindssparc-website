'use client';

import { motion } from 'framer-motion';
import { Globe2, Stethoscope, Factory, GraduationCap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const industries = [
    {
        id: 'gcc',
        icon: Globe2,
        title: 'Global Capability Center',
        description: 'Strategic hubs for innovation, scaling operations, and driving digital transformation.',
        color: 'from-teal-600 to-teal-900',
        image: '/images/industries/gcc.png',
        href: '/industries/gcc'
    },
    {
        id: 'healthcare',
        icon: Stethoscope,
        title: 'Healthcare',
        description: 'Accelerating patient outcomes through data interoperability and AI-driven precision.',
        color: 'from-teal-600 to-teal-900',
        image: '/images/industries/healthcare.png',
        href: '/industries/healthcare'
    },
    {
        id: 'manufacturing',
        icon: Factory,
        title: 'Manufacturing',
        description: 'Manufacturers must move from reactive firefighting to predictive operations. Modern factories leverage real-time data to optimize production, quality, and maintenance.',
        color: 'from-teal-600 to-teal-900',
        image: '/images/industries/manufacturing.png',
        href: '/industries/manufacturing'
    },
    {
        id: 'education',
        icon: GraduationCap,
        title: 'Education',
        description: 'Learning analytics, personalisation, AI tutors, automated grading, and platform modernisation with governance.',
        color: 'from-teal-600 to-teal-900',
        image: '/images/industries/education.png',
        href: '/industries/education'
    }
];

export function Industries() {
    const [activeId, setActiveId] = useState<string | null>('gcc');

    return (
        <section className="py-24 bg-gray-950 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Deep expertise adapted to your specific challenges. We don't just understand technology; we understand your business context.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row h-[800px] lg:h-[500px] gap-4">
                    {industries.map((industry) => {
                        const isActive = activeId === industry.id;

                        return (
                            <motion.div
                                key={industry.id}
                                layout
                                onClick={() => setActiveId(industry.id)}
                                onHoverStart={() => setActiveId(industry.id)}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out group ${isActive ? 'lg:flex-[3] flex-[3]' : 'lg:flex-[1] flex-[1]'
                                    }`}
                            >
                                {/* Background Image & Overlay */}
                                <div className="absolute inset-0 bg-teal-800 z-0 opacity-90 mix-blend-multiply" />

                                <Image
                                    src={industry.image}
                                    alt={industry.title}
                                    fill
                                    className="object-cover z-0 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />

                                {/* Dark Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gray-950/50 z-10" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                    {isActive ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                        >
                                            <div className="bg-white/10 w-fit p-3 rounded-xl backdrop-blur-md mb-6 border border-white/20">
                                                <industry.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{industry.title}</h3>
                                            <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-xl">
                                                {industry.description}
                                            </p>
                                            <Link href={industry.href} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-teal-300 transition-colors inline-block w-fit">
                                                Learn More <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <div className="flex lg:flex-col items-center lg:items-start justify-center lg:justify-between h-full w-full py-6 px-2">
                                            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/10">
                                                <industry.icon className="w-6 h-6 text-white/70" />
                                            </div>
                                            {/* Rotated Text for Desktop Vertical State */}
                                            <h3 className="hidden lg:block text-xl font-bold text-white/50 origin-bottom-left -rotate-90 translate-x-12 -translate-y-2 whitespace-nowrap">
                                                {industry.title}
                                            </h3>
                                            {/* Normal Text for Mobile Collapsed State */}
                                            <h3 className="lg:hidden ml-4 text-lg font-bold text-white/70">
                                                {industry.title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
