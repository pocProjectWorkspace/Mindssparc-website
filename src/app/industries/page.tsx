import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Landmark, Stethoscope, Building2, Plane, ShoppingBag, Zap } from 'lucide-react';

const industries = [
    { icon: Landmark, name: 'Financial Services', desc: 'Banking, Insurance, Fintech, and specialized investment services.' },
    { icon: Stethoscope, name: 'Healthcare & Life Sciences', desc: 'Pharmaceuticals, Biotech, Medical Devices, and Provider systems.' },
    { icon: Building2, name: 'Public Sector', desc: 'Government, Defense, Education, and Non-profit organizations.' },
    { icon: Plane, name: 'Transportation & Logistics', desc: 'Aviation, Maritime, Freight, and Supply Chain management.' },
    { icon: ShoppingBag, name: 'Retail & Consumer', desc: 'E-commerce, Luxury Goods, FMCG, and Customer Experience.' },
    { icon: Zap, name: 'Energy & Utilities', desc: 'Oil & Gas, Renewables, Utilities, and Sustainability.' },
];

export default function IndustriesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Industry Expertise"
                    subtitle="Every industry faces unique challenges. Our consultants bring deep sector knowledge combined with cross-industry insight to deliver relevant, practical solutions."
                />

                <section className="py-24 bg-secondary">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {industries.map((industry) => (
                                <div key={industry.name} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                                    <industry.icon className="w-10 h-10 text-primary mb-6" />
                                    <h3 className="text-xl font-bold text-primary mb-3">{industry.name}</h3>
                                    <p className="text-gray-600 mb-4">{industry.desc}</p>
                                    <span className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                                        View sector capabilities
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
