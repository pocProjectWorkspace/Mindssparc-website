import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/data/insights";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                {/* We use a custom header or just the PageHeader with article title */}
                <div className="bg-primary text-primary-foreground pt-32 pb-16">
                    <div className="container mx-auto px-6">
                        <Link href="/insights" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Insights
                        </Link>
                        <div className="flex items-center gap-4 text-sm font-semibold text-accent mb-6 uppercase tracking-wider">
                            <span>{article.category}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
                            {article.title}
                        </h1>
                        <p className="text-xl text-gray-400 mt-6 max-w-2xl">
                            {article.excerpt}
                        </p>
                    </div>
                </div>

                <article className="py-16 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        {/* Hero Image */}
                        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 shadow-2xl">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none text-gray-600 prose-headings:text-primary prose-a:text-accent"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">Published on {article.date}</p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
