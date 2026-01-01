import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { UserCheck, Users, Briefcase, Globe, Target, ShieldCheck } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const services = [
    {
        icon: UserCheck,
        title: 'Executive Search',
        description: 'Retained search for C-suite and board-level appointments. We identify transformational leaders who align with your strategic vision.'
    },
    {
        icon: Users,
        title: 'Technology & Digital Hiring',
        description: 'Specialized recruitment for high-demand technical roles in software engineering, cloud architecture, and digital product management.'
    },
    {
        icon: Briefcase,
        title: 'Contract & Project Staffing',
        description: 'Flexible staffing solutions to scale your workforce on demand for critical projects and initiatives.'
    },
    {
        icon: Target,
        title: 'Workforce Planning',
        description: 'Strategic analysis and planning to ensure your organization has the right talent mix for future goals.'
    },
    {
        icon: ShieldCheck,
        title: 'Talent Advisory',
        description: 'Expert guidance on talent strategy, employer branding, and retention to build a world-class culture.'
    }
];

export default function RecruitmentPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Mindssparc SEARCH"
                    subtitle="Reliable talent solutions."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Talent is the foundation of transformation. mindssparc SEARCH helps organizations identify, attract, and retain the leaders and specialists who drive change.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We combine market insight, rigorous evaluation, and long-term partnership to deliver talent solutions you can trust.
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

                        <ServiceCTA
                            variant="recruitment"
                            title="Looking for exceptional talent?"
                            description="Let us help you build the team that will build your future."
                            buttonText="Start Hiring"
                            serviceName="Recruitment"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
