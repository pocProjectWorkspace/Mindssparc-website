import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Shield, Lock, FileKey, Eye, Server, RefreshCw } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const features = [
    {
        icon: Lock,
        title: 'Zero Trust Architecture',
        description: 'Redefine your security perimeter with Identity-Native security strategies that assume breach and verify every request.'
    },
    {
        icon: FileKey,
        title: 'Data Governance & Privacy',
        description: 'Ensure compliance with GDPR, CCPA, and global regulations while maximizing data utility and trust.'
    },
    {
        icon: Eye,
        title: 'Proactive Threat Hunting',
        description: 'Go beyond detection with active adversarial pursuit to identify and neutralize latent threats.'
    },
    {
        icon: Server,
        title: 'Cloud Security Posture',
        description: 'Secure your multi-cloud environment with continuous monitoring and automated remediation of vulnerabilities.'
    },
    {
        icon: RefreshCw,
        title: 'Resilience & Recovery',
        description: 'Comprehensive business continuity planning to ensure rapid recovery from cyber incidents.'
    },
    {
        icon: Shield,
        title: 'CISO Advisory',
        description: 'Strategic guidance for security leadership to align cyber risk management with business objectives.'
    }
];

export default function SecurePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Secure"
                    subtitle="Fortifying enterprise resilience in an untrusted world."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Security as a Strategic Enabler</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                In today&apos;s hyper-connected landscape, security is no longer just a technical safeguard—it is a foundational element of trust and business continuity.
                                At Mindssparc, we move beyond compliance checklists to design security architectures that enable innovation while protecting your most critical assets.
                                Our &quot;Secure&quot; pillar focuses on building resilient systems that can withstand sophisticated attacks and recover rapidly.
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
                            description="Schedule a confidential briefing with our security architects to assess your organizations resilience profile."
                            buttonText="Start Securing"
                            serviceName="Secure"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
