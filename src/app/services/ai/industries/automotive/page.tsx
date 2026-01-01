import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function AutomotivePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Automotive AI"
                    subtitle="Accelerating mobility with intelligent manufacturing and autonomous systems."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The automotive industry is undergoing a paradigm shift towards electrification, connectivity, and autonomy.
                                Our AI solutions help automotive leaders stay ahead by integrating intelligence into every layer of the
                                value chain—from the factory floor to the driver's seat.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We specialize in predictive maintenance models that reduce downtime, computer vision systems for quality control,
                                and data analytics platforms that optimize supply chain logistics in real-time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Production</h3>
                                <p className="text-gray-600">AI-driven robotics and quality assurance to minimize defects and maximize throughput.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Supply Chain</h3>
                                <p className="text-gray-600">Demand forecasting and route optimization to ensure just-in-time delivery of components.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">In-Vehicle</h3>
                                <p className="text-gray-600">Enhancing cockpit experiences and driver assistance systems with personalized AI.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Drive the Future"
                            description="Partner with us to engineer the next generation of mobility."
                            buttonText="Contact Auto Experts"
                            serviceName="Automotive AI"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
