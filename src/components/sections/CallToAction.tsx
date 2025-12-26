'use client';

export function CallToAction() {
    return (
        <section className="py-24 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to transform your enterprise?</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Let&apos;s discuss how Mindssparc can help you secure your future and unlock new growth opportunities.
                </p>
                <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                    Schedule a Consultation
                </button>
            </div>
        </section>
    );
}
