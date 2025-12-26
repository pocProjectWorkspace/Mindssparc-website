'use client';

import { motion } from 'framer-motion';
import { Building2, Stethoscope, Landmark, Plane } from 'lucide-react';

const industries = [
    { icon: Landmark, name: 'Financial Services', desc: 'Navigating regulatory complexity and digital assets.' },
    { icon: Stethoscope, name: 'Healthcare & Life Sciences', desc: 'Accelerating innovation in patient care and biotech.' },
    { icon: Building2, name: 'Public Sector', desc: 'Modernizing infrastructure and citizen services.' },
    { icon: Plane, name: 'Transportation', desc: 'Optimizing logistics and global supply chains.' },
];

export function Industries() {
    return (
        <section className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Expertise Across Industries</h2>
                    <p className="text-gray-600 text-lg">
                        We bring deep sector-specific knowledge to solve unique challenges in the world&apos;s most critical industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
                        >
                            <industry.icon className="w-10 h-10 text-primary mb-6 group-hover:text-accent transition-colors" />
                            <h3 className="text-xl font-bold text-primary mb-3">{industry.name}</h3>
                            <p className="text-sm text-gray-500">{industry.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
