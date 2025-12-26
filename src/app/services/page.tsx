import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Shield, Brain, Search, Code, BarChart, Globe } from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: 'Enterprise Security',
        description: 'Protect your digital assets with advanced threat detection, zero-trust architecture, and compliance management.',
    },
    {
        icon: Brain,
        title: 'Artificial Intelligence',
        description: 'Leverage generative AI and machine learning to automate processes, enhance decision-making, and create new value streams.',
    },
    {
        icon: Search,
        title: 'Market Intelligence',
        description: 'Gain a competitive edge with deep-dive market research, competitor analysis, and consumer behavior insights.',
    },
    {
        icon: Code,
        title: 'Digital Transformation',
        description: 'Modernize legacy systems and build scalable digital platforms that drive agility and innovation.',
    },
    {
        icon: BarChart,
        title: 'Data Analytics',
        description: 'Turn data into your most valuable asset with predictive analytics, data warehousing, and business intelligence.',
    },
    {
        icon: Globe,
        title: 'Global Strategy',
        description: 'Navigate complex global markets with expert guidance on expansion, localization, and supply chain optimization.',
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Our Services"
                    subtitle="Comprehensive consulting solutions designed to drive value and sustainable growth."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {services.map((service) => (
                                <div key={service.title} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <a href="#" className="text-sm font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                                        Learn more <span className="text-lg">→</span>
                                    </a>
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
