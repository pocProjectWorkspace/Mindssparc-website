import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-50">
            <Header />
            <main className="flex-grow pt-24">
                <section className="py-12 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Text & Info */}
                            <div>
                                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
                                    Lets Talk.
                                </h1>
                                <p className="text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
                                    Whether you’re exploring a new initiative or navigating a complex challenge, we’re here to help you build what's next.
                                </p>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Email Us</h3>
                                        <a href="mailto:contact@MindsSparc.com" className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors">
                                            contact@MindsSparc.com
                                        </a>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Based In</h3>
                                        <p className="text-2xl font-medium text-gray-900">
                                            Global
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">First Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Work Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" placeholder="jane@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Message</label>
                                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none" placeholder="Tell us about your project..."></textarea>
                                    </div>

                                    <button className="w-full px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-1">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
