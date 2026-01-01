import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function DataMigrationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Data Migration"
                    subtitle="Securely transition your data legacy to modern, AI-ready platforms."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                In the age of AI, data is your most valuable asset. However, legacy systems often trap data in silos,
                                format it inconsistently, or store it on platforms that cannot support high-throughput AI workloads.
                                Our Data Migration service is more than just moving bits and bytes; it is a strategic initiative to
                                liberate your data, ensure its quality, and prepare it for advanced analytics and machine learning.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We employ industry-leading tools and methodologies to ensure zero data loss, minimal downtime, and absolute security
                                throughout the migration process. Whether you are moving to the cloud, a data lake, or a new database architecture,
                                we handle the complexity so you can focus on the value your data brings.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Zero Downtime</h3>
                                <p className="text-gray-600">Advanced replication strategies ensure your business operations continue uninterrupted during the migration.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Data Integrity</h3>
                                <p className="text-gray-600">Rigorous validation and checksum processes guarantee that every byte transferred is accurate and complete.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Security First</h3>
                                <p className="text-gray-600">End-to-end encryption and compliance handling (GDPR, HIPAA, etc.) protect your sensitive information.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Unlock Your Data's Potential"
                            description="Let's discuss your data migration needs and build a plan for success."
                            buttonText="Start Migration"
                            serviceName="Data Migration"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
