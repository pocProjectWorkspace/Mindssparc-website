import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function AiCoeGovernancePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI Center of Excellence (Governance)"
                    subtitle="Institutionalizing ethical AI practices across the enterprise."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A true Center of Excellence does more than just build models; it sets the standard for how development should occur.
                                Our governance-focused AI COE service helps you establish the organizational structures, review boards, and
                                best practices needed to ensure that every AI project aligns with your corporate values and legal obligations.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We help you define roles and responsibilities (e.g., AI Ethicists, Model Owners), create standardized
                                approval workflows, and foster a culture of responsible innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Standards</h3>
                                <p className="text-gray-600">Defining the coding, testing, and documentation standards for all AI teams.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Training</h3>
                                <p className="text-gray-600">Upskilling legal, risk, and business teams on AI fundamentals and risks.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Oversight</h3>
                                <p className="text-gray-600">Setting up cross-functional committees to review high-risk use cases.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Build Your COE"
                            description="Establish a centralized body for AI governance excellence."
                            buttonText="Setup AI COE"
                            serviceName="AI COE (Governance)"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
