import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function HealthcarePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Healthcare AI"
                    subtitle="Improving patient outcomes through data-driven medicine."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Healthcare is becoming more personalized and efficient thanks to AI. We empower providers, payers, and
                                life sciences companies to harness the power of their data. From analyzing medical images for early detection
                                to optimizing hospital bed management, our solutions are designed to save lives and reduce costs.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We prioritize security, privacy (HIPAA compliance), and explainability in all our healthcare AI models,
                                ensuring that clinicians can trust the insights provided by our systems.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Diagnostics</h3>
                                <p className="text-gray-600">Computer vision algorithms to assist radiologists and pathologists in detecting anomalies.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Operations</h3>
                                <p className="text-gray-600">Predictive staffing and resource allocation to improve hospital efficiency.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Patient Care</h3>
                                <p className="text-gray-600">Remote monitoring and personalized care plans based on real-time health data.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Innovate for Health"
                            description="Let's build compliant AI solutions that care for your patients."
                            buttonText="Healthcare Solutions"
                            serviceName="Healthcare AI"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
