'use client';

export function CallToAction() {
    return (
        <section className="py-24 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s build what’s next—securely and intelligently.</h2>
                <div className="flex justify-center">
                    <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                        Talk to an Expert
                    </button>
                </div>
            </div>
        </section>
    );
}
