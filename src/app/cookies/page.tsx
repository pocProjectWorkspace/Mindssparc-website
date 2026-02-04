'use client';

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';

export default function CookiesPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white selection:bg-teal-500/30">
            <Header />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden text-center">
                    <div className="absolute inset-0 z-0 bg-gray-950 pointer-events-none">
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}
                        />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Cookie Policy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            How we use cookies to improve your experience.
                        </motion.p>
                    </div>
                </section>

                <section className="py-16 border-t border-white/5">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="prose prose-lg prose-invert text-gray-400">
                            <p className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10">Last Updated: {new Date().toLocaleDateString()}</p>

                            <h3 className="text-2xl font-bold text-white mb-4">1. What Are Cookies?</h3>
                            <p className="mb-6">
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h3>
                            <p className="mb-6">
                                We use cookies for several reasons:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
                                <li><strong className="text-teal-400">Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.</li>
                                <li><strong className="text-teal-400">Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting anonymous information.</li>
                                <li><strong className="text-teal-400">Functional Cookies:</strong> These allow the website to remember choices you make (such as your username, language, or region) to provide enhanced features.</li>
                                <li><strong className="text-teal-400">Marketing Cookies:</strong> These are used to track visitors across websites to display ads that are relevant and engaging.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mb-4">3. Managing Cookies</h3>
                            <p className="mb-6">
                                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-4">4. Updates to This Policy</h3>
                            <p className="mb-6">
                                We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our privacy practices.
                            </p>

                            <h3 className="text-2xl font-bold text-white mb-4">5. Contact Us</h3>
                            <p className="mb-6">
                                If you have any questions about our use of cookies, please contact us at <a href="mailto:info@mindssparc.com" className="text-teal-400 hover:text-teal-300 transition-colors">privacy@MindsSparc.com</a>.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
