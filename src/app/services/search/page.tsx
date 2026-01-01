import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Search, Globe, Users, TrendingUp, Target, Briefcase } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Market Entry Strategy',
        description: 'Comprehensive analysis of new geographies, including regulatory landscape, competitive density, and cultural nuance.'
    },
    {
        icon: Users,
        title: 'Consumer Insights',
        description: 'Deep ethnographic research and sentiment analysis to understand the "why" behind changing customer behaviors.'
    },
    {
        icon: Target,
        title: 'Competitor Intelligence',
        description: 'Forensic benchmarking of competitor capabilities, pricing strategies, and product roadmaps.'
    },
    {
        icon: TrendingUp,
        title: 'Trend Forecasting',
        description: 'Horizon scanning to identify macro-economic, social, and technological shifts before they disrupt your industry.'
    },
    {
        icon: Briefcase,
        title: 'M&A Due Diligence',
        description: 'Commercial due diligence to validate investment thesis and identify hidden risks in target acquisitions.'
    },
    {
        icon: Search,
        title: 'Talent Mapping',
        description: 'Analyzing global talent pools to guide location strategy and organizational design.'
    }
];

export default function SearchPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Search"
                    subtitle="Uncovering hidden opportunities through rigorous investigation."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Knowledge is Power</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                In a world of information overload, finding the signal in the noise is critical.
                                Our &quot;Search&quot; practice combines the rigor of traditional management consulting with the agility of investigative research.
                                We don&apos;t just aggregate data; we validate, triangulate, and interpret it to provide you with the unvarnished truth about your market position and future opportunities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <div key={service.title} className="p-8 border border-gray-100 rounded-2xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-secondary/20">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-accent">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-24 p-12 bg-secondary rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-bold text-primary mb-4">Need a bespoke study?</h2>
                                <p className="text-gray-600">
                                    Our research team can commission custom studies tailored to your specific strategic questions.
                                </p>
                            </div>
                            <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                                Request Research Proposal
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
