import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Brain, Cpu, Database, Network, LineChart, Lightbulb } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const capabilities = [
    {
        icon: Cpu,
        title: 'Generative AI Integration',
        description: 'Deploy custom LLMs and RAG architectures to automate complex knowledge work and enhance customer interactions.'
    },
    {
        icon: Database,
        title: 'Modern Data Stack',
        description: 'Architect scalable data warehouses and lakes that serve as the single source of truth for your enterprise.'
    },
    {
        icon: LineChart,
        title: 'Predictive Analytics',
        description: 'Move from reactive reporting to proactive forecasting with advanced machine learning models.'
    },
    {
        icon: Network,
        title: 'Process Automation',
        description: 'Intelligent automation of workflow bottlenecks to drive operational efficiency and reduce cost.'
    },
    {
        icon: Brain,
        title: 'Decision Intelligence',
        description: 'Frameworks that augment human decision-making with data-driven evidence and scenario modeling.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation Labs',
        description: 'Rapid prototyping and MVP development to test hypothesis and bring data products to market faster.'
    }
];

export default function IntelligencePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Intelligence"
                    subtitle="Transforming raw data into decisive competitive advantage."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">The Cognitive Enterprise</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Data is abundant; insight is scarce. The &quot;Intelligence&quot; pillar focuses on bridging this gap.
                                We help organizations evolve into cognitive enterprises—entities that can sense, analyze, and react to market changes in real-time.
                                By combining advanced AI/ML capabilities with deep industry context, we unlock value trapped in silos and empower every decision-maker with actionable foresight.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {capabilities.map((item) => (
                                <div key={item.title} className="p-8 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-secondary/20">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-accent">
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
                            variant="intelligence"
                            title="Drive Impact with Data"
                            description="Discover how our Intelligence practice can help you move up the analytics maturity curve."
                            buttonText="Start Innovating"
                            serviceName="Intelligence"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
