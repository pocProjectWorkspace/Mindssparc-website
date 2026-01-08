import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from 'next/link';
import { Shield, Brain, Users, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: 'SECURE',
        description: 'Reveal threats before they strike. Proactive cybersecurity strategies designed to protect critical assets, reduce risk, and build long-term resilience.',
        href: '/services/secure',
        capabilities: [
            'Cybersecurity Strategy & Advisory',
            'Threat Detection & Incident Response',
            'Cloud & Infrastructure Security',
            'Identity & Access Management'
        ]
    },
    {
        icon: Brain,
        title: 'INTELLIGENCE',
        description: 'Power the future of business. AI-driven solutions that enable smarter decisions, intelligent automation, and sustainable competitive advantage.',
        href: '/services/intelligence',
        capabilities: [
            'Artificial Intelligence & Generative AI',
            'Data Analytics & Business Intelligence',
            'Digital Transformation',
            'Transformation Advisory (Global Strategy)'
        ]
    },
    {
        icon: Users,
        title: 'TALENT',
        description: 'Reliable talent solutions. Executive and technology hiring that helps organizations build high-performing teams with confidence.',
        href: '/services/recruitment',
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

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <div key={service.title} className="group p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white">
                                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                                        <service.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="pt-6 border-t border-gray-100">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Key Capabilities</h4>
                                        <ul className="space-y-3 mb-8">
                                            {service.capabilities.map((capability) => (
                                                <li key={capability} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                    <span>{capability}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group-hover:text-primary/80"
                                        >
                                            Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
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
