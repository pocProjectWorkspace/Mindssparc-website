'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

export function CallToAction() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-32 bg-gray-950 relative overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Build what’s next.
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-400 font-light mb-12">
                        Securely. Intelligently. Together.
                    </p>

                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-950 text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-blue-50"
                        >
                            <span className="relative z-10">Talk to an Expert</span>
                            <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService="General"
            />
        </section>
    );
}
