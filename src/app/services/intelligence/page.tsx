import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Server, Factory, ShieldCheck, Microscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const aiPillars = [
    {
        icon: Server,
        title: 'AI App Modernization',
        description: 'Get your applications and data ecosystem AI-Ready with seamless migration and modernization strategies.',
        href: '/services/intelligence/app-modernization'
    },
    {
        icon: Factory,
        title: 'AI for Industries',
        description: 'Digital Transformation & AI Advisory tailored for specific industry verticals like Manufacturing, Retail, and Healthcare.',
        href: '/services/intelligence/industries'
    },
    {
        icon: ShieldCheck,
        title: 'AI Governance & Compliance',
        description: 'Ensure your AI adoption is safe, ethical, and compliant with our specialized governance tools and advisory frameworks.',
        href: '/services/intelligence/governance'
    },
    {
        icon: Microscope,
        title: 'AI COE',
        description: 'Establish your Center of Excellence with our "AI Garage" approach: Identify, Setup, Co-create, and Handover.',
        href: '/services/intelligence/coe'
    }
];

export default function AiServicesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI Services"
                    subtitle="Empowering your enterprise with the next generation of intelligent solutions."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16 text-center">
                            <h2 className="text-3xl font-bold text-primary mb-6">Unlocking the Power of AI</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                At MindsSparc, we help you navigate the complex landscape of Artificial Intelligence.
                                From modernizing your legacy applications to ensuring strict governance and compliance,
                                our comprehensive suite of AI services is designed to drive innovation and tangible business outcomes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {aiPillars.map((item) => (
                                <Link key={item.title} href={item.href} className="group block h-full">
                                    <div className="p-8 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-secondary/20 h-full flex flex-col">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                                        <p className="text-gray-600 mb-6 flex-grow">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
                                            Explore <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <ServiceCTA
                            variant="intelligence" // Reusing intelligence variant style for now
                            title="Ready to Transform?"
                            description="Let's discuss how our AI services can accelerate your business goals."
                            buttonText="Talk to an Expert"
                            serviceName="AI Services"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
