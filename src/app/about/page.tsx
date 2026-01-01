import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="About Mindssparc"
                    subtitle="mindssparc is a consulting firm dedicated to helping organizations navigate complexity and accelerate transformation through secure, intelligent, and industry-aware solutions."
                />

                {/* Mission & Vision */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        To foster a trusted relationship in every client interaction while helping build the enterprise of tomorrow on the foundation of resilient, secure, and intelligent technologies.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                                    <p className="text-xl text-gray-600 leading-relaxed">
                                        To deliver secure, intelligent, and industry-contextual solutions that unlock measurable value—powered by deep domain expertise, innovative thinking, and an unwavering commitment to supporting organizations as they accelerate transformation.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-secondary/20">
                                {/* Placeholder for an office or team image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-lg">About Image Placeholder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="py-24 bg-secondary">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Approach</h2>
                            <p className="text-xl text-gray-600">
                                We combine strategic insight with hands-on execution to deliver outcomes that endure.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-4">Discover & Diagnose</h3>
                                <p className="text-gray-600">Understand business context, risk landscape, and opportunity areas.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-4">Design & Implement</h3>
                                <p className="text-gray-600">Architect and deliver secure, intelligent solutions aligned to business goals.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-4">Optimize & Scale</h3>
                                <p className="text-gray-600">Continuously improve, adapt, and scale for long-term impact.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
