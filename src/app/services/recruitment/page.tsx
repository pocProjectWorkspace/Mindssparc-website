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
        icon: ShieldCheck,
        title: 'Cyber & AI Specialists',
        description: 'Targeted sourcing of niche talent in cybersecurity, artificial intelligence, and data science—where expertise is scarce and critical.'
    },
    {
        icon: Target,
        title: 'Leadership Assessment',
        description: 'Rigorous evaluation of leadership potential using psychometric testing, behavioral interviewing, and cultural fit analysis.'
    },
    {
        icon: Globe,
        title: 'Global Expansion Teams',
        description: 'Building complete local teams for international expansion, ensuring compliance and cultural alignment in new markets.'
    },
    {
        icon: Briefcase,
        title: 'Interim Management',
        description: 'Rapid deployment of experienced interim leaders to manage crisis, transformation, or gap coverage.'
    }
];

export default function RecruitmentPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Recruitment Services"
                    subtitle="Building high-performing teams for the secure, intelligent enterprise."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Talent is Strategy</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                True transformation requires more than just technology; it demands the right people to drive it.
                                Our Recruitment practice connects you with the visionary leaders and technical experts needed to secure your future and innovate at scale.
                                We don't just fill roles; we build the human foundation of your enterprise.
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
