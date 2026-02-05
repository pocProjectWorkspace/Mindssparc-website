'use client';

import { useState } from 'react';
import { X, CheckCircle, ChevronRight, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService = 'General' }: ConsultationModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        goal: '',
        serviceInterest: defaultService,
        companySize: '',
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    if (!isOpen) return null;

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        try {
            const res = await fetch('/api/consultation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Something went wrong.');
            }

            setIsSubmitted(true);
        } catch (err) {
            setErrorMsg(err instanceof Error ? err.message : 'Failed to send request.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-[calc(100vw-1.5rem)] sm:w-full sm:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 sm:p-8">
                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
                                <p className="text-gray-600 mb-8">
                                    Our team will review your requirements and get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-6">
                                        <span className={step === 1 ? "text-primary" : ""}>Step 1</span>
                                        <ChevronRight className="w-4 h-4" />
                                        <span className={step === 2 ? "text-primary" : ""}>Step 2</span>
                                    </div>

                                    {step === 1 ? (
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold text-gray-900">How can we help?</h3>

                                            {/* Context Indication if service is pre-selected */}
                                            {defaultService !== 'General' && (
                                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="text-sm font-medium text-gray-600">
                                                        Inquiring about: <span className="text-primary font-bold">{defaultService}</span>
                                                    </span>
                                                </div>
                                            )}

                                            {/* Routing Cue */}
                                            <p className="text-sm text-gray-500 italic">
                                                This helps us route your request to the right specialist.
                                            </p>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Goal</label>
                                                <select
                                                    required
                                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none bg-white"
                                                    value={formData.goal}
                                                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                                >
                                                    <option value="" disabled>Select a goal...</option>

                                                    {/* Dynamic Options based on context */}
                                                    {(defaultService === 'General' || defaultService === 'Intelligence') && (
                                                        <>
                                                            <option value="transformation">Drive digital transformation</option>
                                                            <option value="data">Leverage data & AI for decision-making</option>
                                                            <option value="scale_ai">Build or scale AI capabilities</option>
                                                        </>
                                                    )}

                                                    {(defaultService === 'General' || defaultService === 'Secure') && (
                                                        <>
                                                            <option value="security">Improve enterprise security posture</option>
                                                            <option value="risk">Assess cyber risk and readiness</option>
                                                            <option value="incident">Respond to a security incident</option>
                                                        </>
                                                    )}

                                                    {(defaultService === 'General' || defaultService === 'Recruitment') && (
                                                        <>
                                                            <option value="executive">Hire executive leadership</option>
                                                            <option value="specialist">Build specialist teams</option>
                                                            <option value="scale_hiring">Scale hiring for growth</option>
                                                        </>
                                                    )}

                                                    {(defaultService === 'Healthcare' || defaultService === 'Healthcare') && (
                                                        <>
                                                            <option value="interoperability">Improve data interoperability</option>
                                                            <option value="patient_experience">Enhance patient experience</option>
                                                            <option value="compliance">Regulatory compliance (HIPAA/GDPR)</option>
                                                            <option value="telehealth">Expand telehealth capabilities</option>
                                                        </>
                                                    )}

                                                    {(defaultService === 'Manufacturing' || defaultService === 'Manufacturing') && (
                                                        <>
                                                            <option value="smart_factory">Implement Smart Factory / IoT</option>
                                                            <option value="supply_chain">Optimize supply chain resilience</option>
                                                            <option value="predictive_maintenance">Predictive maintenance</option>
                                                            <option value="digital_twin">Digital Twin implementation</option>
                                                        </>
                                                    )}

                                                    {(defaultService === 'GCC' || defaultService === 'Global Capability Centres') && (
                                                        <>
                                                            <option value="setup">New GCC Setup</option>
                                                            <option value="scale">Scale existing operations</option>
                                                            <option value="transformation">GCC-led Digital Transformation</option>
                                                            <option value="talent">Talent acquisition & branding</option>
                                                        </>
                                                    )}

                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            {/* Only show Service Area selection if "General" (not pre-selected) */}
                                            {defaultService === 'General' && (
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Area</label>
                                                    <select
                                                        required
                                                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none bg-white"
                                                        value={formData.serviceInterest}
                                                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                                                    >
                                                        <option value="Secure">Secure (Cybersecurity)</option>
                                                        <option value="Intelligence">Intelligence (AI & Data)</option>
                                                        <option value="Recruitment">Recruitment (Talent)</option>
                                                        <option value="General">General Inquiry</option>
                                                    </select>
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                                                <select
                                                    required
                                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none bg-white"
                                                    value={formData.companySize}
                                                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                                                >
                                                    <option value="" disabled>Select size...</option>
                                                    <option value="1-50">1-50 employees</option>
                                                    <option value="51-200">51-200 employees</option>
                                                    <option value="201-1000">201-1,000 employees</option>
                                                    <option value="1000+">1,000+ employees</option>
                                                </select>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            <h3 className="text-2xl font-bold text-gray-900">Your Details</h3>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="John Doe"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="john@company.com"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                                <textarea
                                                    className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                    rows={3}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    placeholder="Tell us more about your project..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="border-t border-gray-100 pt-4">
                                    {/* Trust Signal */}
                                    <p className="text-center text-xs text-gray-400 mb-4 px-4">
                                        No obligation. A member of our team will review and respond.
                                    </p>

                                    {errorMsg && (
                                        <p className="text-red-500 text-sm text-center mb-3">{errorMsg}</p>
                                    )}

                                    <div className="flex items-center justify-between">
                                        {step > 1 ? (
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                disabled={isLoading}
                                                className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-primary transition-colors disabled:opacity-50"
                                            >
                                                Back
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}

                                        {step < 2 ? (
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all flex items-center gap-2"
                                            >
                                                Next Step <ArrowRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                                            >
                                                {isLoading ? (
                                                    <>Submitting... <Loader2 className="w-4 h-4 animate-spin" /></>
                                                ) : (
                                                    'Submit Request'
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
