import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function RetailPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Retail AI"
                    subtitle="Hyper-personalization and supply chain intelligence for modern commerce."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                In retail, understanding the customer is everything. Our AI solutions analyze vast amounts of transaction and
                                behavior data to deliver hyper-personalized shopping experiences, accurate demand forecasting, and
                                dynamic pricing strategies that maximize margin and turnover.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Whether online or in-store, we help retailers create seamless journeys that delight customers and building brand loyalty.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Personalization</h3>
                                <p className="text-gray-600">Recommendation engines that put the right product in front of the right customer.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Inventory Mgmt</h3>
                                <p className="text-gray-600">Predictive stock replenishment to prevent stockouts and overstock situations.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Customer Insights</h3>
                                <p className="text-gray-600">Deep segmentation and sentiment analysis to understand market trends.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Boost Retail Performance"
                            description="Drive sales and loyalty with intelligent retail solutions."
                            buttonText="Retail Solutions"
                            serviceName="Retail AI"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
