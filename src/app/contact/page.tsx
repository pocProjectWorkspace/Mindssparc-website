import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Contact Us"
                    subtitle="Get in touch with our team to discuss your strategic needs."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-primary mb-4">Send us a message</h2>
                                <p className="text-gray-600">
                                    Fill out the form below and we will get back to you within 1-2 business days.
                                    Or email us directly at <a href="mailto:contact@mindssparc.com" className="text-primary font-semibold hover:underline">contact@mindssparc.com</a>.
                                </p>
                            </div>

                            <form className="space-y-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"></textarea>
                                </div>
                                <button className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
