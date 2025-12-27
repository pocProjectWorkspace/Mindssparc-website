import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Industries } from "@/components/sections/Industries";
import { Insights } from "@/components/sections/Insights";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <Hero />

                {/* Mission / Vision Snippet */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-sm font-semibold mb-4">
                            Why Mindssparc
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Driving the future of business
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our mission is to empower organizations with the clarity, talent, and technology needed to thrive in a complex world. We envision a future where secure, intelligent enterprises set the global standard for innovation.
                        </p>
                    </div>
                </section>

                <ServicePillars />
                <ValueProposition />
                <Industries />
                <Insights />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}
