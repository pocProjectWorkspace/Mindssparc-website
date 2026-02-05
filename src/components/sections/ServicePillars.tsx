'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Shield, Brain, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent } from 'react';

const pillars = [
    {
        icon: Shield,
        title: 'MindsSparc Secure',
        headline: 'Reveal threats \nbefore they strike',
        description: 'Continuous external exposure discovery, validation, and remediation verification, powered by CyberMindr.',
        href: '/services/secure',
        cta: 'Explore Secure',
        image: '/images/services/secure-card.png'
    },
    {
        icon: Brain,
        title: 'MindsSparc Intelligence',
        headline: 'Power the future \nof business',
        description: 'AI-driven solutions that enable smarter decisions, intelligent automations and sustainable competitive advantage.',
        href: '/services/intelligence',
        cta: 'Explore Intelligence',
        image: '/images/services/intelligence-card.png'
    },
    {
        icon: Users,
        title: 'MindsSparc Talent',
        headline: 'Teams that deliver, \nnot just resumes.',
        description: 'Access a proactive pipeline and end-to-end hiring engine to build high performing teams, powered by Next Gen models.',
        href: '/services/recruitment',
        cta: 'Explore Talent',
        image: '/images/services/talent-card.png'
    },
];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/10 bg-gray-900/50 overflow-hidden rounded-xl ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}

export function ServicePillars() {
    return (
        <section className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-gray-900/30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What We Do</h2>
                    <p className="text-gray-400 text-lg max-w-2xl">
                    We focus on providing solutions to secure, transform and scale your enterprise.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => (
                        <Link key={pillar.title} href={pillar.href} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="h-full"
                            >
                                <SpotlightCard className="h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
                                    {/* Image Section */}
                                    <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
                                        {/* Image Fallback Gradient */}
                                        <div className="absolute inset-0 bg-gray-900 z-0" />

                                        <Image
                                            src={pillar.image}
                                            alt={pillar.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 z-10 opacity-90 group-hover:opacity-100"
                                        />

                                        {/* Overlay for icon readability */}
                                        <div className="absolute inset-0 bg-gray-900/60 z-20" />

                                        <div className="absolute top-4 left-4 z-30 w-10 h-10 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                                            <pillar.icon className="w-5 h-5 text-white/90" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-sm font-extrabold text-teal-400 mb-3 tracking-wider">{pillar.title}</h3>
                                        {/* Added text-balance and slightly adjusted size/leading */}
                                        <h4 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug whitespace-pre-line group-hover:text-teal-200 transition-colors">
                                            {pillar.headline}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-8 group-hover:text-gray-300 transition-colors">
                                            {pillar.description}
                                        </p>

                                        <div className="mt-auto">
                                            <span className="text-sm font-semibold text-white group-hover:text-teal-200 transition-colors flex items-center gap-2">
                                                {pillar.cta}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
