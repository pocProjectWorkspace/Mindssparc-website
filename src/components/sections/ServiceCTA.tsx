'use client';

import { useState } from 'react';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

interface ServiceCTAProps {
    variant: 'secure' | 'intelligence' | 'recruitment' | 'ai' | 'default';
    title: string;
    description: string;
    buttonText: string;
    serviceName: string; // Passed to modal
}

export function ServiceCTA({ variant, title, description, buttonText, serviceName }: ServiceCTAProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Render CTA Section based on Variant */}

            {variant === 'secure' && (
                <div className="mt-24 p-12 bg-primary rounded-3xl text-primary-foreground text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">{title}</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                            {description}
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
                        >
                            {buttonText}
                        </button>
                    </div>
                    {/* Decorative background circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                </div>
            )}

            {(variant === 'intelligence' || variant === 'ai' || variant === 'default') && (
                <div className="mt-24 p-12 border border-gray-200 rounded-3xl text-center bg-secondary/10">
                    <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                        {description}
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                    >
                        {buttonText}
                    </button>
                </div>
            )}

            {variant === 'recruitment' && (
                <div className="mt-24 p-12 bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
                        <p className="text-gray-600 text-lg">
                            {description}
                        </p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
                    >
                        {buttonText}
                    </button>
                </div>
            )}

            {/* Modal */}
            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultService={serviceName}
            />
        </>
    );
}
