import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        category: 'Cybersecurity',
        title: 'The Zero Trust Imperative in 2026',
        excerpt: 'Why traditional perimeter defenses are obsolete in an era of distributed enterprise.',
        date: 'Oct 12, 2025',
        readTime: '5 min read',
        featured: true
    },
    {
        category: 'AI Strategy',
        title: 'Generative AI: Moving Beyond the Hype',
        excerpt: 'Implementing practical use cases that drive real ROI.',
        date: 'Sep 28, 2025',
        readTime: '8 min read'
    },
    {
        category: 'Market Intelligence',
        title: 'Emerging Markets Outlook Q4',
        excerpt: 'Key growth indicators in APAC and LATAM regions.',
        date: 'Sep 15, 2025',
        readTime: '12 min read'
    },
    {
        category: 'Digital Transformation',
        title: 'Cloud Sovereignty and Data Resonance',
        excerpt: 'Navigating the new regulatory landscape for cross-border data.',
        date: 'Sep 02, 2025',
        readTime: '6 min read'
    },
    {
        category: 'Leadership',
        title: 'The Evolving Role of the CISO',
        excerpt: 'From technical guardian to strategic business enabler.',
        date: 'Aug 24, 2025',
        readTime: '4 min read'
    }
];

export default function InsightsPage() {
    const featured = articles.find(a => a.featured);
    const others = articles.filter(a => !a.featured);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Insights Hub"
                    subtitle="Thought leadership and analysis on the trends shaping the future of business."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">

                        {/* Featured Article */}
                        {featured && (
                            <div className="mb-24 relative rounded-2xl overflow-hidden bg-primary text-primary-foreground grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-12 md:p-16 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm font-semibold text-accent mb-6 uppercase tracking-wider">
                                        <span>Featured • {featured.category}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight hover:text-gray-300 transition-colors cursor-pointer">
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
                                    <button className="self-start px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors">
                                        Read Article
                                    </button>
                                </div>
                                <div className="bg-gray-800 min-h-[400px]">
                                    {/* Image placeholder */}
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                                </div>
                            </div>
                        )}

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {others.map((article) => (
                                <article key={article.title} className="group cursor-pointer">
                                    <div className="aspect-[16/9] bg-gray-100 mb-6 rounded-lg overflow-hidden">
                                        <div className="w-full h-full bg-secondary group-hover:scale-105 transition-transform duration-500" />
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
                                </article>
                            ))}
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
