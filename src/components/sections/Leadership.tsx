'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LeaderProfile {
    name: string;
    role: string;
    image: string;
    bio: string[];
}

const leaders: LeaderProfile[] = [
    {
        name: 'Lakshmi Nair',
        role: 'Co-founder',
        image: '/images/Lakshmi Nair.jpeg',
        bio: [
            'Lakshmi brings 30+ years of Consulting experience having held senior leadership roles at Accenture (UK) and IBM (UK & India), where she led CRM, Customer Experience (Cx), and SAP practices across Europe and India.',
            'As a Global leader for CX and Digital Platforms she has a strong track record of working closely with senior client stakeholders and ecosystem partners, providing clients with expertise to understand and achieve their business objectives through successful delivery.',
            'In her latest role as SAP Leader for IBM Consulting in India, she was instrumental in driving growth whilst building a robust delivery structure. Her extensive expertise in nurturing large practices and delivering complex programs forms a strong foundation for MindsSparc’s growth and client value proposition.'
        ]
    },
    {
        name: 'Rajesh Parameswaran',
        role: 'Co-founder',
        image: '/images/Rajesh Parameswaran.jpeg',
        bio: [
            'Rajesh brings 30+ years of diverse industry experience, driving strategic, complex, and long-term engagements for global and Indian enterprises. He has been instrumental in shaping transformation agendas for clients across Consumer Packaged Goods (CPG), Retail, and Manufacturing sectors.',
            'Rajesh has held key leadership roles at HP and IBM, including leading IBM Consulting for the Industrial and Distribution segments. He has spearheaded large-scale transformation programs for some of India’s prominent industrial groups, guiding clients through modernization, digital reinvention, and operational transformation.',
            'His experience in managing multi-stage transformation journeys contributes significantly to MindsSparc’s strategic and execution capabilities.'
        ]
    }
];

export function Leadership() {
    const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-6">Our Leadership</h2>
                    <p className="text-xl text-gray-600">
                        Meet the founding team driving innovation and excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leaders.map((leader) => (
                        <div
                            key={leader.name}
                            onClick={() => setSelectedLeader(leader)}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="h-96 w-full bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                                {leader.image ? (
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="text-gray-400 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
                                        <span>Image Pending</span>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{leader.name}</h3>
                            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm mb-4">{leader.role}</p>
                            <p className="text-primary text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Profile
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedLeader && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedLeader(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedLeader(null)}
                                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-gray-100 rounded-full transition-colors z-10"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>

                            <div className="p-8 md:p-10">
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    <div className="h-48 w-48 shrink-0 bg-gray-100 rounded-lg overflow-hidden relative mx-auto md:mx-0">
                                        {selectedLeader.image ? (
                                            <Image
                                                src={selectedLeader.image}
                                                alt={selectedLeader.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        ) : (
                                            <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                                <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                                                <span className="text-xs">Image Pending</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent inline-block">
                                            {selectedLeader.name}
                                        </h3>
                                        <p className="text-gray-500 font-medium uppercase tracking-wide text-sm mb-4 line-throughX border-b border-gray-100 pb-4 inline-block md:block w-full">
                                            {selectedLeader.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                                    {selectedLeader.bio.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
