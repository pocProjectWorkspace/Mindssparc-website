import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { FileText, ShieldAlert, Scale, ArrowRight } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import Link from 'next/link';

const offerings = [
    {
        icon: FileText,
        title: 'AI Advisory',
        description: 'Strategic guidance on AI adoption, tailored to your organizational goals and risk appetite. (Featuring insights from Sutharsan\'s whitepaper)',
        href: '/services/ai/governance/ai-advisory'
    },
    {
        icon: ShieldAlert,
        title: 'Governance Tools',
        description: 'Implement robust tools and frameworks to monitor, audit, and manage AI models throughout their lifecycle.',
        href: '/services/ai/governance/governance-tools'
    },
    {
        icon: Scale,
        title: 'AI COE',
        description: 'Establish a Center of Excellence to standardize AI practices, ensure compliance, and drive ethical AI adoption across the organization.',
        href: '/services/ai/governance/ai-coe'
    }
];

export default function AiGovernancePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI Governance, Compliance"
                    subtitle="Ensuring responsible, ethical, and compliant AI adoption."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Trustworthy AI by Design</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                As AI capabilities grow, so does the need for oversight. We help you build a robust governance framework
                                that ensures your AI systems are transparent, fair, and compliant with evolving regulations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            {offerings.map((item) => (
                                <Link key={item.title} href={item.href} className="group block h-full">
                                    <div className="p-8 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-white h-full flex flex-col">
                                        <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                        <p className="text-gray-600 mb-6 flex-grow">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Secure Your AI Future"
                            description="Build trust with your stakeholders through robust AI governance."
                            buttonText="Contact Us"
                            serviceName="AI Governance"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
