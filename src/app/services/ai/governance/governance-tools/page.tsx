import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function GovernanceToolsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Governance Tools"
                    subtitle="Platform solutions for monitoring and managing AI risk."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Policy documents are not enough; you need technical guardrails. Our Governance Tools suite helps you implement
                                continuous monitoring, model auditing, and compliance reporting directly into your MLOps pipeline.
                                By automating governance, we ensure that your AI remains fair, explainable, and secure at scale.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We partner with leading tool providers and build custom dashboards to give your risk and compliance teams
                                real-time visibility into model behavior and data usage.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Model Registry</h3>
                                <p className="text-gray-600">Centralized tracking of all models, versions, and training metadata.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Bias Detection</h3>
                                <p className="text-gray-600">Automated testing for fairness across protected attributes in your datasets.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Audit Logs</h3>
                                <p className="text-gray-600">Immutable records of model decisions and changes for regulatory compliance.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Automate Compliance"
                            description="Implement the tools you need to govern AI at scale."
                            buttonText="Governance Solutions"
                            serviceName="Governance Tools"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
