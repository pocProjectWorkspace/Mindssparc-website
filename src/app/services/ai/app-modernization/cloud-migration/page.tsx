import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function CloudMigrationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Cloud Migration"
                    subtitle="Scale your infrastructure with infinite compute power for AI."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                AI workloads require elastic scalability that on-premise data centers often struggle to provide.
                                Our Cloud Migration service transitions your infrastructure to leading cloud providers (AWS, Azure, GCP),
                                unlocking the computational power needed for training models, running inference, and managing massive datasets.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We don't just "lift and shift." We refactor and re-architect your systems to take full advantage of cloud-native
                                features like serverless computing, managed AI services, and distributed storage, ensuring you get the best
                                performance and cost-efficiency.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Scalability</h3>
                                <p className="text-gray-600">Automatically scale resources up or down based on your AI workload demands.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Cost Optimization</h3>
                                <p className="text-gray-600">Pay only for what you use with optimized cloud architectures and FinOps practices.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Innovation Speed</h3>
                                <p className="text-gray-600">Access cutting-edge AI tools and services instantly available in the cloud ecosystem.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Move to the Cloud Today"
                            description="Accelerate your AI initiatives with a robust cloud foundation."
                            buttonText="Plan Your Migration"
                            serviceName="Cloud Migration"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
