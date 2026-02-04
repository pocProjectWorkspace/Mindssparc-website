'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/data/insights';

export function Insights() {
    // Select specific articles for the homepage
    const homepageInsights = articles.filter(article =>
        ['zero-trust-imperative-2026', 'generative-ai-beyond-hype', 'digital-transformation-pitfalls'].includes(article.slug)
    );

    return (
        <section className="py-24 bg-gray-950 text-white border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-teal-400 font-semibold tracking-wide uppercase text-sm mb-2 block">Insights</span>
                        <h2 className="text-4xl font-bold">Ideas that shape decisions.</h2>
                        <p className="text-gray-400 mt-4 max-w-xl text-lg">
                            Explore our perspectives on cybersecurity, AI, talent, and enterprise transformation.
                        </p>
                    </div>
                    <Link href="/insights" className="text-white font-semibold hover:text-teal-400 transition-colors flex items-center gap-2 group">
                        View all insights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {homepageInsights.map((insight) => (
                        <Link key={insight.title} href={`/insights/${insight.slug}`} className="group cursor-pointer block h-full">
                            <article className="flex flex-col h-full bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="aspect-[16/9] bg-gray-900 overflow-hidden relative">
                                    {/* Gradient Fallback if image missing */}
                                    <div className="absolute inset-0 bg-teal-900/20" />
                                    <Image
                                        src={insight.image}
                                        alt={insight.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                                        <span className="text-teal-400">{insight.category}</span>
                                        <span>•</span>
                                        <span>{insight.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-200 transition-colors leading-snug">
                                        {insight.title}
                                    </h3>
                                    <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                                        <span className="text-xs text-gray-500 font-medium">{insight.readTime}</span>
                                        <div className="flex items-center gap-2 text-sm text-teal-400 font-medium group-hover:translate-x-1 transition-transform">
                                            Read article <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
