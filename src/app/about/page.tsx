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
                    subtitle="We are a global consultancy dedicated to building the secure, intelligent enterprise of tomorrow."
                />

                {/* Mission & Vision */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                    To empower organizations with the clarity, talent, and technology needed to thrive in a complex world. We exist to help leaders navigate uncertainty and unlock sustainable value.
                                </p>

                                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    A future where enterprises are secure by design, intelligent by default, and powered by exceptional talent—setting the global standard for innovation and resilience.
                                </p>
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

                {/* Values or Team could go here */}

            </main>
            <Footer />
        </div>
    );
}
