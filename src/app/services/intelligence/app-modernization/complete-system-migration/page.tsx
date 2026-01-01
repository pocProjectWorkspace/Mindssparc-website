import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function CompleteSystemMigrationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Complete System Migration"
                    subtitle="End-to-end transformation for a future-proof enterprise."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                For organizations burdened by monolithic legacy systems that can no longer keep pace with market demands,
                                a partial update isn't enough. Our Complete System Migration service offers a comprehensive overhaul,
                                moving your entire IT ecosystem to a modern, microservices-based, and AI-first architecture.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We manage the entire lifecycle of this transformation—from auditing your current stack and designing the
                                target architecture to executing the migration and training your team. The result is an agile, resilient,
                                and intelligent system ready for the next decade of innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Full Stack Overhaul</h3>
                                <p className="text-gray-600">Modernize frontend, backend, database, and infrastructure layers simultaneously.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Future-Proofing</h3>
                                <p className="text-gray-600">Adopt standards and technologies that support long-term growth and AI integration.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Risk Management</h3>
                                <p className="text-gray-600">Phased rollout strategies to minimize operational risk during the transition.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Transform Your Enterprise"
                            description="Ready for a complete overhaul? Let's build your future state architecture."
                            buttonText="Start Transformation"
                            serviceName="Complete System Migration"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
