import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function AiModernizationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI Modernization"
                    subtitle="Infusing intelligence into your existing application portfolio."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                You don't always need to build from scratch to benefit from AI. Our AI Modernization service focuses on
                                enhancing your existing applications with intelligent features. Whether it's adding a chatbot to your customer
                                service portal, integrating recommendation engines into your e-commerce site, or embedding predictive analytics
                                into your ERP, we breathe new life into your legacy software.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We assess your current application architecture, identify high-impact areas for AI integration, and deploy
                                microservices or API-based AI components that seamlessly extend your software's capabilities without
                                disrupting core functionality.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Smart Features</h3>
                                <p className="text-gray-600">Add vision, speech, language, and decision-making capabilities to standard apps.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">User Experience</h3>
                                <p className="text-gray-600">Transform static interfaces into dynamic, personalized, and predictive experiences.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">API Integration</h3>
                                <p className="text-gray-600">Leverage powerful AI APIs to add complex functionality with minimal code changes.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Upgrade Your Apps with AI"
                            description="Discover how we can modernize your portfolio with intelligent features."
                            buttonText="Modernize Now"
                            serviceName="AI Modernization"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
