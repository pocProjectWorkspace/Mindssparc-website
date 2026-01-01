'use client';

import { motion } from 'framer-motion';
import { Shield, Brain, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pillars = [
    {
        icon: Shield,
        title: 'SECURE',
        description: 'Reveal threats before they strike. Proactive cybersecurity strategies designed to protect critical assets, reduce risk, and build long-term resilience.',
        href: '/services/secure'
    },
    {
        icon: Brain,
        title: 'INTELLIGENCE',
        description: 'Power the future of business. AI-driven solutions that enable smarter decisions, intelligent automation, and sustainable competitive advantage.',
        href: '/services/intelligence'
    },
    {
        icon: Users,
        title: 'TALENT',
        description: 'Reliable talent solutions. Executive and technology hiring that helps organizations build high-performing teams with confidence.',
        href: '/services/recruitment'
    },
];

export function ServicePillars() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <Link key={pillar.title} href={pillar.href} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-secondary/30 h-full flex flex-col"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <pillar.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    {pillar.description}
                                </p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors cursor-pointer flex items-center gap-2">
                                        Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
