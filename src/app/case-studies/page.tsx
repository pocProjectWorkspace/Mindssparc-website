import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Case Studies"
                    subtitle="Real-world examples of how we help clients solve complex challenges."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold text-primary mb-6">Coming Soon</h2>
                            <p className="text-gray-600 mb-8">
                                We are currently curating a selection of our most impactful work. Check back soon or contact us to discuss our past projects.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
