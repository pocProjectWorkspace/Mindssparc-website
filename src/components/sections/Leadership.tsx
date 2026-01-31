'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LeaderProfile {
    name: string;
    role: string;
    headline: string;
    image: string;
    bio: string[];
    focusAreas: string[];
}

const leaders: LeaderProfile[] = [
    {
        name: 'Lakshmi Nair',
        role: 'Director',
        headline: 'Enterprise transformation leader, SAP and business modernisation.',
        image: '/images/Lakshmi%20Nair.png',
        bio: [
            'Lakshmi is an accomplished consulting leader with experience as an Executive Partner and SAP Service Area Lead (India/South Asia), driving large-scale transformation programs and executive stakeholder agendas. She brings a practical lens on how cloud, data, and operating-model change land inside complex organisations.'
        ],
        focusAreas: ['SAP transformation', 'Operating model change', 'Enterprise platforms', 'Value realisation']
    },
    {
        name: 'Rajesh Parameswaran',
        role: 'Director',
        headline: 'Industry 4.0 and AI transformation across core industries.',
        image: '/images/Rajesh%20Parameswaran.png',
        bio: [
            'Rajesh has served as Executive Director and Industrial Sector Leader (India/South Asia), with a strong focus on how AI and Industry 4.0 reshape manufacturing and industrial enterprises, including MSME enablement, analytics adoption, and responsible AI thinking.'
        ],
        focusAreas: ['Industrial AI', 'Strategy-to-execution transformation', 'Industry 4.0', 'Responsible AI']
    }
];

export function Leadership() {
    const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

    return (
        <section className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gray-950">
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">Our Leadership</h2>
                    <p className="text-xl text-gray-400">
                        Meet the founding team driving innovation and excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {leaders.map((leader) => (
                        <div
                            key={leader.name}
                            onClick={() => setSelectedLeader(leader)}
                            className="bg-gray-900/50 border border-white/10 p-6 rounded-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
                        >
                            <div className="h-96 w-full bg-gray-800 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                                {leader.image ? (
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="text-gray-600 flex flex-col items-center">
                                        <div className="w-16 h-16 bg-gray-700 rounded-full mb-3"></div>
                                        <span>Image Pending</span>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{leader.name}</h3>
                            <p className="text-gray-400 font-medium uppercase tracking-wide text-sm mb-2">{leader.role}</p>
                            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{leader.headline}</p>

                            <p className="text-blue-400 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedLeader(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10 text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="p-8 md:p-10">
                                <div className="flex flex-col md:flex-row gap-8 mb-8">
                                    <div className="h-48 w-48 shrink-0 bg-gray-800 rounded-lg overflow-hidden relative mx-auto md:mx-0">
                                        {selectedLeader.image ? (
                                            <Image
                                                src={selectedLeader.image}
                                                alt={selectedLeader.name}
                                                fill
                                                className="object-cover object-top"
                                            />
                                        ) : (
                                            <div className="h-full flex flex-col items-center justify-center text-gray-400">
                                                <div className="w-12 h-12 bg-gray-700 rounded-full mb-2"></div>
                                                <span className="text-xs">Image Pending</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center md:text-left flex-grow">
                                        <h3 className="text-3xl font-bold text-white mb-2">
                                            {selectedLeader.name}
                                        </h3>
                                        <p className="text-blue-400 font-medium uppercase tracking-wide text-sm mb-4">
                                            {selectedLeader.role}
                                        </p>
                                        <p className="text-lg text-gray-300 italic mb-4 font-light border-l-2 border-blue-500/50 pl-4">
                                            {selectedLeader.headline}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-gray-300 leading-relaxed text-justify mb-8">
                                    {selectedLeader.bio.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Focus Areas</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedLeader.focusAreas.map((area, index) => (
                                            <span key={index} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
