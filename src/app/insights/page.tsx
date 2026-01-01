import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/insights";
import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
    const featured = articles.find(a => a.featured);
    const others = articles.filter(a => !a.featured);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Insights & Perspectives"
                    subtitle="Explore our latest thinking on cybersecurity, artificial intelligence, talent, and enterprise transformation."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">

                        {/* Featured Article */}
                        {featured && (
                            <Link href={`/insights/${featured.slug}`} className="block group">
                                <div className="mb-24 relative rounded-2xl overflow-hidden bg-primary text-primary-foreground grid grid-cols-1 lg:grid-cols-2 shadow-2xl transition-transform hover:-translate-y-1 duration-300">
                                    <div className="p-12 md:p-16 flex flex-col justify-center order-2 lg:order-1">
                                        <div className="flex items-center gap-4 text-sm font-semibold text-accent mb-6 uppercase tracking-wider">
                                            <span>Featured • {featured.category}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-gray-300 transition-colors">
                                            {featured.title}
                                        </h2>
                                        <p className="text-lg text-gray-400 mb-8 max-w-xl">
                                            {featured.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                                            <span>{featured.date}</span>
                                            <span>•</span>
                                            <span>{featured.readTime}</span>
                                        </div>
                                        <span className="self-start px-8 py-4 bg-white text-primary font-bold rounded-full group-hover:bg-gray-100 transition-colors">
                                            Read Article
                                        </span>
                                    </div>
                                    <div className="bg-gray-800 min-h-[400px] relative order-1 lg:order-2">
                                        <Image
                                            src={featured.image}
                                            alt={featured.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>
                            </Link>
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {others.map((article) => (
                                <Link key={article.slug} href={`/insights/${article.slug}`} className="group cursor-pointer block">
                                    <div className="aspect-[16/9] bg-gray-100 mb-6 rounded-lg overflow-hidden relative">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                                        <span className="text-accent">{article.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-gray-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
                                        Read more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
