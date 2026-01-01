import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function GccPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Global Capability Centers (GCC)"
                    subtitle="Scale your operations globally with our Build-Operate-Transform (BOT) model."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Establish your own high-performance technology hub with our Global Capability Center services.
                                We utilize the Build-Operate-Transform (BOT) model to minimize your risk and capital expenditure while maximizing
                                speed to market. We handle the initial setup, recruitment, and operations, and once the center is mature
                                and fully integrated with your culture, we transfer full ownership to you.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                This strategic approach allows you to access global talent pools, drive innovation, and achieve operational
                                excellence without the typical complexities of setting up a foreign entity from scratch.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Build</h3>
                                <p className="text-gray-600">We incorporate the facility, setup infrastructure, hire top-tier talent, and establish compliant processes.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Operate</h3>
                                <p className="text-gray-600">We manage the day-to-day operations, HR, legal, and IT, ensuring the team meets your performance standards.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Transform</h3>
                                <p className="text-gray-600">We transfer the assets, employees, and operations to you, giving you full control of a mature capability center.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Start Your GCC Journey"
                            description="Expand your global footprint with a risk-free BOT model."
                            buttonText="Discuss Your Needs"
                            serviceName="GCC / BOT"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
