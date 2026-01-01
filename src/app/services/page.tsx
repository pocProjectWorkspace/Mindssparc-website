import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Shield, Brain, Users, CheckCircle } from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: 'MindsSparc SECURE',
        description: 'Cyber risk is a business risk. mindssparc SECURE helps organizations anticipate threats, strengthen defenses, and embed security into the core of their operations.',
        capabilities: [
            'Cybersecurity Strategy & Advisory',
            'Threat Detection & Incident Response',
            'Cloud & Infrastructure Security',
            'Identity & Access Management'
        ]
    },
    {
        icon: Brain,
        title: 'MindsSparc INTELLIGENCE',
        description: 'Transforming raw data into actionable foresight with advanced analytics and AI integration.',
        capabilities: [
            'Artificial Intelligence & Generative AI',
            'Data Analytics & Business Intelligence',
            'Digital Transformation',
            'Transformation Advisory (Global Strategy)'
        ]
    },
    {
        icon: Users,
        title: 'MindsSparc SEARCH',
        description: 'Talent is the foundation of transformation. mindssparc SEARCH helps organizations identify, attract, and retain the leaders and specialists who drive change.',
        capabilities: [
            'Executive Search',
            'Technology & Digital Hiring',
            'Contract & Project Staffing',
            'Workforce Planning'
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Our Services"
                    subtitle="We operate at the intersection of security, intelligence, and talent, enabling organizations to build resilient, future-ready enterprises."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <div key={service.title} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-white">
                                    <div className="w-14 h-14 bg-secondary/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Key Capabilities</h4>
                                        <ul className="space-y-3">
                                            {service.capabilities.map((capability) => (
                                                <li key={capability} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                                    <span>{capability}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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
