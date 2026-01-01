import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Search, Settings, Users, CheckCircle } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";
import Link from 'next/link';

const garageSteps = [
    {
        icon: Search,
        title: 'Identify the Issue',
        description: 'We work with you to pinpoint specific business challenges where AI can deliver the highest impact.'
    },
    {
        icon: Settings,
        title: 'Setup the Process',
        description: 'Define the data pipelines, tools, and methodologies required to tackle the identified problem effectively.'
    },
    {
        icon: Users,
        title: 'Co-create the Application',
        description: 'Our experts collaborate with your team to build, test, and refine the AI solution in an agile environment.'
    },
    {
        icon: CheckCircle,
        title: 'Handover the Application',
        description: 'Seamless deployment and knowledge transfer, ensuring your team is equipped to maintain and scale the solution.'
    }
];

export default function AiCoePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="AI Center of Excellence"
                    subtitle="Building your internal capabilities with our AI Garage approach."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">The AI Garage</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our AI Center of Excellence (COE) service is designed to be an incubator for innovation within your organization.
                                Through our "AI Garage" model, we don't just deliver solutions; we co-create them with you, ensuring
                                skill transfer and long-term sustainability.
                            </p>

                            <div className="mt-8">
                                <Link href="/services/ai/coe/ai-garage" className="inline-flex items-center px-6 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-colors shadow-md">
                                    <span className="mr-2">Explore the AI Garage Methodology</span>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
                            {/* Connecting line for larger screens */}
                            <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

                            {garageSteps.map((item, index) => (
                                <div key={item.title} className="relative p-6 pt-12 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-white group">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold shadow-md z-10">
                                        {index + 1}
                                    </div>
                                    <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center mb-6 text-accent mx-auto">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3 text-center">{item.title}</h3>
                                    <p className="text-gray-600 text-center text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Launch Your AI Garage"
                            description="Partner with us to build your internal AI capabilities."
                            buttonText="Start Co-creation"
                            serviceName="AI COE"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
