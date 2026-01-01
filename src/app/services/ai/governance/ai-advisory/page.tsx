import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function AiAdvisoryPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI Advisory"
                    subtitle="Strategic guidance tailored to your risks and opportunities."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Navigating the AI landscape can be daunting. From selecting the right use cases to understanding the ethical
                                implications of deployment, our AI Advisory services provide the compass you need. We combine deep technical
                                knowledge with business strategy to help you create a roadmap that delivers value while managing risk.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our advisory framework is informed by years of industry experience and thought leadership, including
                                Sutharsan's foundational whitepapers on responsible AI adoption.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Strategy</h3>
                                <p className="text-gray-600">Aligning AI initiatives with core business objectives and ROI targets.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Risk Assessment</h3>
                                <p className="text-gray-600">Identifying potential biases, security vulnerabilities, and regulatory gaps.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Policy Frameworks</h3>
                                <p className="text-gray-600">Developing internal guidelines for ethical and safe AI usage.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Navigate with Confidence"
                            description="Build a robust AI strategy with our expert advisors."
                            buttonText="Consult Advisory"
                            serviceName="AI Advisory"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
