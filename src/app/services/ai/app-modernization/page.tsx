import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Database, Cloud, RefreshCw, Layers, ArrowRight } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import Link from 'next/link';

const offerings = [
    {
        icon: Database,
        title: 'Data Migration',
        description: 'Seamlessly migrate your data to modern platforms, ensuring integrity, security, and accessibility for AI applications.',
        href: '/services/ai/app-modernization/data-migration'
    },
    {
        icon: Cloud,
        title: 'Cloud Migration',
        description: 'Move your infrastructure to the cloud to leverage scalable compute and storage resources essential for AI workloads.',
        href: '/services/ai/app-modernization/cloud-migration'
    },
    {
        icon: RefreshCw,
        title: 'AI Modernization',
        description: 'Refactor and optimize your existing applications to infuse AI capabilities and improve performance.',
        href: '/services/ai/app-modernization/ai-modernization'
    },
    {
        icon: Layers,
        title: 'Complete System Migration',
        description: 'End-to-end migration services to transition your entire legacy ecosystem to a modern, AI-ready architecture.',
        href: '/services/ai/app-modernization/complete-system-migration'
    }
];

export default function AiAppModernizationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI App Modernization"
                    subtitle="Modernize your applications and infrastructure to be AI-Ready."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Build a Solid Foundation for AI</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Before you can leverage advanced AI, your underlying systems must be ready. Our App Modernization services
                                focus on preparing your data, cloud infrastructure, and legacy applications for the demands of modern
                                artificial intelligence.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                            title="Start Your Modernization Journey"
                            description="Assess your readiness for AI with our expert team."
                            buttonText="Get In Touch"
                            serviceName="AI App Modernization"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
