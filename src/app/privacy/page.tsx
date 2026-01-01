import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Privacy Policy"
                    subtitle="Your privacy is critically important to us."
                />

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">Effective Date: {new Date().toLocaleDateString()}</p>

                            <h3 className="text-2xl font-bold text-primary mb-4">1. Introduction</h3>
                            <p className="mb-6">
                                MindsSparc (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit our website
                                (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">2. The Data We Collect</h3>
                            <p className="mb-6">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
                                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Data</h3>
                            <p className="mb-6">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-primary mb-4">4. Cookies</h3>
                            <p className="mb-6">
                                We use cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                                If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">5. Data Security</h3>
                            <p className="mb-6">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h3>
                            <p className="mb-6">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@MindsSparc.com.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
