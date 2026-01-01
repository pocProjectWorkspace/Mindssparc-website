import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

const positions = [
    { title: 'Senior Strategy Consultant', location: 'New York / Hybrid', type: 'Full-time' },
    { title: 'Data Scientist, AI/ML', location: 'London / Remote', type: 'Full-time' },
    { title: 'Digital Transformation Manager', location: 'Singapore', type: 'Full-time' },
    { title: 'Cybersecurity Analyst', location: 'New York', type: 'Full-time' },
];

export default function CareersPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Careers at MindsSparc"
                    subtitle="Build a career where your work shapes the future of enterprise."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        {/* Life at MindsSparc */}
                        <div className="max-w-4xl mx-auto mb-20">
                            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Life at MindsSparc</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-6 bg-secondary/20 rounded-xl">
                                    <h3 className="text-xl font-bold text-primary mb-2">Consulting-led culture</h3>
                                    <p className="text-gray-600">We value integrity, collaboration, and deep expertise in everything we do.</p>
                                </div>
                                <div className="p-6 bg-secondary/20 rounded-xl">
                                    <h3 className="text-xl font-bold text-primary mb-2">Continuous learning</h3>
                                    <p className="text-gray-600">Stay ahead of the curve with access to training, certifications, and mentorship.</p>
                                </div>
                                <div className="p-6 bg-secondary/20 rounded-xl">
                                    <h3 className="text-xl font-bold text-primary mb-2">Diverse perspectives</h3>
                                    <p className="text-gray-600">We believe that inclusive teams drive the most innovative solutions.</p>
                                </div>
                                <div className="p-6 bg-secondary/20 rounded-xl">
                                    <h3 className="text-xl font-bold text-primary mb-2">Meaningful client impact</h3>
                                    <p className="text-gray-600">Work on high-stakes projects that transform organizations and industries.</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-primary mb-12">Open Positions</h2>

                            <div className="space-y-4">
                                {positions.map((job) => (
                                    <div key={job.title} className="p-6 border border-gray-200 rounded-xl hover:border-accent hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer bg-white">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{job.title}</h3>
                                            <div className="flex gap-4 text-sm text-gray-500 mt-2">
                                                <span>{job.location}</span>
                                                <span>•</span>
                                                <span>{job.type}</span>
                                            </div>
                                        </div>
                                        <button className="px-6 py-2 border border-gray-300 rounded-full font-medium text-primary hover:bg-primary hover:text-white transition-colors self-start md:self-center">
                                            Apply Now
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-secondary rounded-2xl text-center">
                                <h3 className="text-2xl font-bold text-primary mb-4">Don&apos;t see your role?</h3>
                                <p className="text-gray-600 mb-6">
                                    We are always looking for curious, driven professionals. Send your resume to careers@MindsSparc.com
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
