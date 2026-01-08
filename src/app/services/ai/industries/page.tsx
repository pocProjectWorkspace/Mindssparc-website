import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Globe2, Car, Stethoscope, GraduationCap, Factory, ShoppingBag } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const industries = [
    {
        icon: Globe2,
        title: 'GCC',
        description: 'Tailored AI strategies for Government and Public Sector entities to enhance citizen services and operational efficiency.'
    },
    {
        icon: Car,
        title: 'Automotive',
        description: 'Drive innovation in the automotive sector with AI solutions for autonomous driving assistance, predictive maintenance, and supply chain optimization.'
    },
    {
        icon: Stethoscope,
        title: 'Healthcare',
        description: 'Transform patient care with AI-powered diagnostics, personalized treatment plans, and efficient hospital management systems.'
    },
    {
        icon: GraduationCap,
        title: 'Education',
        description: 'Personalize learning experiences and streamline administrative tasks with intelligent educational technologies.'
    },
    {
        icon: Factory,
        title: 'Manufacturing',
        description: 'Optimize production lines, ensure quality control, and predict equipment failures with industrial AI applications.'
    },
    {
        icon: ShoppingBag,
        title: 'Retail',
        description: 'Enhance customer engagement, optimize inventory management, and drive sales through personalized AI recommendations.'
    }
];

export default function AiIndustriesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI for Industries"
                    subtitle="Digital Transformation & AI Advisory for specialized verticals."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Industry-Specific AI Solutions</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Every industry faces unique challenges. Our specialized AI advisory services provide deep domain expertise
                                combined with cutting-edge technology to solve the specific problems of your sector.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {industries.map((item) => (
                                <div key={item.title} className="p-8 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-white">
                                    <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center mb-6 text-accent">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Transform Your Industry"
                            description="Leverage our domain expertise to gain a competitive edge."
                            buttonText="Consult with Experts"
                            serviceName="AI for Industries"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
