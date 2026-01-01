import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Search, Settings, Users, CheckCircle } from 'lucide-react';
import { ServiceCTA } from "@/components/sections/ServiceCTA";

const garageSteps = [
    {
        icon: Search,
        title: '1. Identify the Issue',
        description: 'Collaborative workshops to prioritize use cases based on feasibility and business impact.',
        details: 'We begin by aligning on your strategic goals. Through design thinking workshops, we map out pain points and identify opportunities where AI can provide a tangible ROI. We don\'t just look for "cool" problems; we look for valuable ones.'
    },
    {
        icon: Settings,
        title: '2. Setup the Process',
        description: 'Establishing the technical and operational data environment.',
        details: 'Before a single line of code is written, we ensure the foundation is solid. This involves setting up secure sandboxes, establishing data pipelines, and selecting the right toolchain for your specific project requirements.'
    },
    {
        icon: Users,
        title: '3. Co-vote & Co-create',
        description: 'Agile development sprints with your team embedded in the process.',
        details: 'This is the heart of the Garage. Our data scientists and engineers work side-by-side with your domain experts. We value iteration over perfection, building rapid prototypes and refining them based on real-world feedback.'
    },
    {
        icon: CheckCircle,
        title: '4. Handover & Scale',
        description: 'Deployment, documentation, and training for autonomy.',
        details: 'Success is not just a deployed model; it\'s your ability to own it. We provide comprehensive documentation, conduct training sessions, and help you operationalize the solution into your production environment.'
    }
];

export default function AiGaragePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="The AI Garage Methodology"
                    subtitle="A structured approach to co-creating innovation."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">From Idea to Impact</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The AI Garage is our proven methodology for accelerating AI adoption. It addresses the common pitfalls of
                                AI projects—lack of focus, data issues, and skills gaps—by providing a structured yet flexible framework
                                for delivery.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                By co-creating with us, your team learns by doing, gaining the confidence and competence to drive
                                future initiatives independently.
                            </p>
                        </div>

                        <div className="space-y-12 mb-16">
                            {garageSteps.map((item, index) => (
                                <div key={item.title} className="flex flex-col md:flex-row gap-8 p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-lg transition-all">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center text-accent">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                                        <p className="text-lg font-semibold text-gray-700 mb-2">
                                            {item.description}
                                        </p>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.details}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Enter the Garage"
                            description="Ready to build something amazing? Let's get to work."
                            buttonText="Start a Project"
                            serviceName="AI Garage Project"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
