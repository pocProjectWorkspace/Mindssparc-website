'use client';

import { ArrowRight } from 'lucide-react';

const insights = [
    {
        category: 'Cybersecurity',
        title: 'The Zero Trust Imperative in 2026',
        date: 'Oct 12, 2025',
        readTime: '5 min read'
    },
    {
        category: 'AI Strategy',
        title: 'Generative AI: Moving Beyond the Hype',
        date: 'Sep 28, 2025',
        readTime: '8 min read'
    },
    {
        category: 'Market Intelligence',
        title: 'Emerging Markets Outlook Q4',
        date: 'Sep 15, 2025',
        readTime: '12 min read'
    }
];

export function Insights() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Thought Leadership</span>
                        <h2 className="text-4xl font-bold text-primary">Latest Perspectives</h2>
                    </div>
                    <button className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2">
                        View all insights <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {insights.map((insight) => (
                        <article key={insight.title} className="group cursor-pointer">
                            <div className="aspect-[16/9] bg-gray-100 mb-6 overflow-hidden rounded-lg">
                                {/* Placeholder for insight image */}
                                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                                <span className="text-accent">{insight.category}</span>
                                <span>•</span>
                                <span>{insight.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gray-600 transition-colors">
                                {insight.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                Read article <ArrowRight className="w-3 h-3" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
