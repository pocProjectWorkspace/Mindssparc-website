import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                <PageHeader
                    title="Terms & Conditions"
                    subtitle="Please read these terms carefully before using our services."
                />

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                            <h3 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h3>
                            <p className="mb-6">
                                These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Mindssparc (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;),
                                concerning your access to and use of the Mindssparc website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &quot;Site&quot;).
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">2. Intellectual Property Rights</h3>
                            <p className="mb-6">
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;)
                                and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">3. User Representations</h3>
                            <p className="mb-6">
                                By using the Site, you represent and warrant that:
                                (1) you have the legal capacity and you agree to comply with these Terms of Use;
                                (2) you are not a minor in the jurisdiction in which you reside;
                                (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise;
                                (4) you will not use the Site for any illegal or unauthorized purpose; and
                                (5) your use of the Site will not violate any applicable law or regulation.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">4. Limitations of Liability</h3>
                            <p className="mb-6">
                                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages,
                                including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">5. Governing Law</h3>
                            <p className="mb-6">
                                These Terms shall be governed by and defined following the laws of the United States. Mindssparc and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </p>

                            <h3 className="text-2xl font-bold text-primary mb-4">6. Contact Us</h3>
                            <p className="mb-6">
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at legal@mindssparc.com.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
