'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{title}</h1>
                    <p className="text-xl text-gray-400 max-w-2xl">{subtitle}</p>
                </motion.div>
            </div>
        </div>
    );
}
