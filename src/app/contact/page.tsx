import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapPin, Phone, Mail } from 'lucide-react';

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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                            {/* Form */}
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-8">Send us a message</h2>
                                <form className="space-y-6">
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
                                    <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors w-full md:w-auto">
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Info */}
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-8">Global Offices</h2>
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-accent" /> New York (HQ)
                                        </h3>
                                        <p className="text-gray-600 mb-2">10 Hudson Yards</p>
                                        <p className="text-gray-600 mb-4">New York, NY 10001</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-accent" /> London
                                        </h3>
                                        <p className="text-gray-600 mb-2">1 Canada Square</p>
                                        <p className="text-gray-600 mb-4">Canary Wharf, London E14 5AB</p>
                                    </div>

                                    <div className="pt-8 border-t border-gray-100">
                                        <p className="flex items-center gap-3 text-gray-600 mb-3">
                                            <Phone className="w-5 h-5 text-primary" /> +1 (212) 555-0123
                                        </p>
                                        <p className="flex items-center gap-3 text-gray-600">
                                            <Mail className="w-5 h-5 text-primary" /> contact@mindssparc.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
