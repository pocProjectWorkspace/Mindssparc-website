import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Shield, Lock, FileKey, Eye, Server, RefreshCw } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const features = [
    {
        icon: Shield,
        title: 'Cybersecurity Strategy & Advisory',
        description: 'Align security initiatives with business goals through expert guidance and roadmap development.'
    },
    {
        icon: Eye,
        title: 'Threat Detection & Incident Response',
        description: 'Proactive monitoring and rapid response capabilities to neutralize threats before damage occurs.'
    },
    {
        icon: Server,
        title: 'Cloud & Infrastructure Security',
        description: 'Secure your cloud transformation with robust architecture and continuous posture management.'
    },
    {
        icon: Lock,
        title: 'Identity & Access Management',
        description: 'Implement Zero Trust principles to ensure the right people have the right access at the right time.'
    },
    {
        icon: FileKey,
        title: 'Risk, Compliance & Governance',
        description: 'Navigate complex regulatory landscapes while managing enterprise risk effectively.'
    },
    {
        icon: RefreshCw,
        title: 'Security Operations Enablement (SOC)',
        description: 'Build, optimize, or augment your security operations center for 24/7 defense.'
    }
];

export default function SecurePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="MindsSparc SECURE"
                    subtitle="Reveal threats before they strike."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Cyber risk is a business risk. MindsSparc SECURE helps organizations anticipate threats, strengthen defenses, and embed security into the core of their operations.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We help organizations move from reactive security to proactive resilience—without compromising agility or innovation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="p-8 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-secondary/20">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-accent">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <ServiceCTA
                            variant="secure"
                            title="Ready to secure your future?"
                            description="Schedule a confidential briefing with our security architects."
                            buttonText="Schedule a Security Assessment"
                            serviceName="Secure"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
