'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LeaderProfile {
    name: string;
    role: string;
    headline: string;
    summary: string; // 3–4 line profile shown on the card without hovering
    image: string;
    bio: string[];
    focusAreas: string[];
}

const leaders: LeaderProfile[] = [
    {
        name: 'Lakshmi Nair',
        role: 'Co-Founder',
        headline: 'Enterprise transformation leader with three decades of global consulting experience.',
        summary: 'Over three decades of global consulting, leading multi-cultural teams through complex digital transformations. Former Managing Director at Accenture (UK and Global) and Executive Partner at IBM (Europe and India/South Asia), with deep expertise in Customer Experience across CRM and ERP.',
        image: '/images/Lakshmi%20Nair.png',
        bio: [
            'An accomplished leader with over three decades of Global consulting experience. Lakshmi has successfully led multi-cultural global teams driving complex digital transformations across industries including Utilities, Energy Services, Retail, Automotive, Consumer goods.',
            'She has held prominent leadership roles including Managing Director at Accenture (UK and Global) and Executive Partner at IBM (Europe and India/South Asia). Known for her expertise in Customer Experience across CRM and ERP Solutions and various technologies (SAP, Salesforce, Adobe), her core strength lies in Client Stakeholder engagement, Business transformation and building high performance teams.',
            'She brings a practical lens on how technology can help organisation simplify their complex business operations.'
        ],
        focusAreas: ['Customer Experience', 'Business Transformation', 'CRM & ERP Solutions', 'Client Stakeholder Engagement']
    },
    {
        name: 'Rajesh Parameswaran',
        role: 'Co-Founder',
        headline: 'Transformational leader at the intersection of technology and industry.',
        summary: 'Over three decades at the intersection of technology and industry, focused on how AI and Industry X.0 reshape manufacturing. Former Executive Director at IBM India/South Asia and Industrial and Distribution Sector Leader at IBM Consulting, and Strategic Engagement Leader at Hewlett Packard Enterprise.',
        image: '/images/Rajesh%20Parameswaran.png',
        bio: [
            'A transformational leader with over three decades of experience working at the intersection of technology and industry. Rajesh has a strong focus on how AI and Industry X.0 reshape manufacturing and industrial enterprises. His leadership style is focussed on building high performance teams and a collaborative partner ecosystem.',
            'Rajesh has held several senior leadership positions including Executive Director IBM India/South Asia and Strategic Engagement Leader at Hewlett Packard Enterprise. In his capacity as the Industrial and Distribution Sector Leader at IBM Consulting, he drove large-scale enterprise initiatives in Consulting, Strategic Outsourcing and Business Transformation across multiple industries viz Manufacturing, Automotive, Consumer Goods, Retail, Real Estate & Infrastructure.'
        ],
        focusAreas: ['Industrial AI', 'Industry X.0', 'Business Transformation', 'Partner Ecosystem']
    }
];

export function Leadership() {
    const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

    return (
        <section id="leadership" className="py-24 bg-gray-950 relative overflow-hidden scroll-mt-28">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gray-950">
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(13, 148, 136, 0.1) 1px, transparent 1px)',
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
                            className="bg-gray-900/50 border border-white/10 p-6 rounded-xl hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
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
                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{leader.name}</h3>
                            <p className="text-gray-400 font-medium uppercase tracking-wide text-sm mb-2">{leader.role}</p>
                            <p className="text-gray-300 leading-relaxed mb-4">{leader.summary}</p>

                            <p className="text-teal-400 text-sm font-semibold flex items-center gap-1">
                                View full profile
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
                                        <p className="text-teal-400 font-medium uppercase tracking-wide text-sm mb-4">
                                            {selectedLeader.role}
                                        </p>
                                        <p className="text-lg text-gray-300 italic mb-4 font-light border-l-2 border-teal-500/50 pl-4">
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
                                            <span key={index} className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm">
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
