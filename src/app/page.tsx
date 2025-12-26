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
