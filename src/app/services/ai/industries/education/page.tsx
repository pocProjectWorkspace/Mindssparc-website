import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export default function EducationPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Education AI"
                    subtitle="Empowering educators and personalizing learning paths."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                The "one size fits all" approach in education is obsolete. AI enables adaptive learning platforms that
                                understand each student's pace, strengths, and weaknesses. We help EdTech companies and educational
                                institutions deploy AI that fosters engagement and improves learning outcomes.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Beyond the classroom, our solutions assist with administrative efficiency—automating grading,
                                predicting enrollment trends, and optimizing campus resources.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Adaptive Learning</h3>
                                <p className="text-gray-600">content delivery that adjusts in real-time to the learner's comprehension level.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Admin Automation</h3>
                                <p className="text-gray-600">Streamlining enrollment, scheduling, and grading to free up faculty time.</p>
                            </div>
                            <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/20">
                                <h3 className="text-xl font-bold text-primary mb-3">Student Success</h3>
                                <p className="text-gray-600">Early warning systems to identify students at risk and intervene proactively.</p>
                            </div>
                        </div>

                        <ServiceCTA
                            variant="default"
                            title="Revolutionize Learning"
                            description="Create smart educational experiences with our AI expertise."
                            buttonText="EdTech Services"
                            serviceName="Education AI"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
