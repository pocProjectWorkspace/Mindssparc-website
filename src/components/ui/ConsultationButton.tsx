'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

interface ConsultationButtonProps {
    children: React.ReactNode;
    className?: string;
    service?: string; // Pre-selects the modal's service context
    source: string; // CTA label + page, shown in the inbox email
}

// Drop-in replacement for CTA links that should open the consultation form
export function ConsultationButton({ children, className, service = 'General', source }: ConsultationButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setIsOpen(true)} className={className}>
                {children}
            </button>
            {/* Portal so animated (transformed) ancestors can't trap the fixed overlay */}
            {isOpen && createPortal(
                <ConsultationModal
                    isOpen
                    onClose={() => setIsOpen(false)}
                    defaultService={service}
                    source={source}
                />,
                document.body
            )}
        </>
    );
}
