'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/data/insights";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, BookOpen } from "lucide-react";

export default function InsightsPage() {
    const featured = articles.find(a => a.featured) || articles[0];
    const others = articles.filter(a => a.slug !== featured.slug);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-blue-500/30">
            <Header />

            <main className="flex-grow pt-32">

                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />
                        {/* Glowing Orbs */}
                        <motion.div
                            className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
                            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"
                            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
                                Insights & Perspectives
                            </h1>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Navigating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">complexity of tomorrow.</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                                Explore our latest thinking on cybersecurity, artificial intelligence, talent, and enterprise transformation.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="pb-24">
                    <div className="container mx-auto px-6">

                        {/* Featured Article */}
                        {featured && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-20"
                            >
                                <Link href={`/insights/${featured.slug}`} className="block group relative">
                                    <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-white/10 grid grid-cols-1 lg:grid-cols-2 shadow-2xl hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all duration-300">

                                        {/* Image Content */}
                                        <div className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2">
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 lg:bg-gradient-to-l" />
                                            <Image
                                                src={featured.image}
                                                alt={featured.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="p-10 md:p-14 flex flex-col justify-center order-2 lg:order-1 relative z-20">
                                            <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-6 uppercase tracking-widest">
                                                <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Featured</span>
                                                <span>{featured.category}</span>
                                            </div>

                                            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white group-hover:text-blue-200 transition-colors">
                                                {featured.title}
                                            </h3>

                                            <p className="text-lg text-gray-400 mb-8 max-w-xl line-clamp-3">
                                                {featured.excerpt}
                                            </p>

                                            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 font-medium">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{featured.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{featured.readTime}</span>
                                                </div>
                                            </div>

                                            <span className="self-start inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                                Read Article <ArrowRight className="w-5 h-5 text-blue-500" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Recent Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {others.map((article, index) => (
                                <motion.div
                                    key={article.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/insights/${article.slug}`} className="group h-full flex flex-col bg-gray-900/50 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
                                        <div className="aspect-[16/10] bg-gray-800 relative overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                                                <span>{article.date}</span>
                                                <span>•</span>
                                                <span>{article.readTime}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                                                {article.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-auto pt-6 border-t border-white/5 flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300">
                                                Read more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Newsletter / CTA (Optional) */}
                <section className="py-24 border-t border-white/5 bg-gray-900/30">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-400">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Stay ahead of the curve</h2>
                            <p className="text-gray-400 mb-8">
                                Subscribe to our newsletter to receive the latest insights directly to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-6 py-3 bg-gray-950 border border-white/10 rounded-full text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
