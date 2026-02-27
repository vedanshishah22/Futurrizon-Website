import React from 'react';
import { Link } from 'react-router-dom';

const COMPANY = 'Futurrizon Technologies Pvt. Ltd.';
const UPDATED = 'February 27, 2026';

const Section = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-xl font-display font-bold text-primary mb-4">{title}</h2>
        <div className="text-primary/60 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
);

export default function TermsPage() {
    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
            <section className="bg-primary pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.4) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-10 -left-20 w-80 h-80 bg-orange/15 rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-5">
                        <span className="text-orange text-xs font-semibold uppercase tracking-widest">📄 Legal</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-cream leading-tight">
                        Terms of <span className="text-orange">Service</span>
                    </h1>
                    <p className="mt-4 text-cream/50 text-base">Last updated: {UPDATED}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0 60 L0 30 Q300 0 600 30 Q900 60 1200 30 L1200 60 Z" fill="#FFFAE6" />
                    </svg>
                </div>
            </section>

            {/* Content */}
            <section className="bg-cream py-16">
                <div className="container mx-auto px-6 max-w-3xl">
                    <Section title="1. Acceptance of Terms">
                        <p>By accessing or using the website and services provided by {COMPANY} ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                    </Section>

                    <Section title="2. Services Overview">
                        <p>We provide enterprise technology consulting and implementation services including but not limited to:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li>Microsoft 365 & SharePoint Solutions</li>
                            <li>Power Platform Development (Power Apps, Power Automate, Power BI)</li>
                            <li>Azure Cloud Infrastructure & Migration</li>
                            <li>AI & GPT Integration Services</li>
                            <li>Managed IT Services & Support</li>
                            <li>Custom Software Development</li>
                        </ul>
                    </Section>

                    <Section title="3. User Obligations">
                        <p>By using our services, you agree to:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li>Provide accurate and complete information when engaging with us</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Not attempt to reverse-engineer, disassemble, or decompile any part of our software or solutions</li>
                            <li>Maintain the confidentiality of any credentials or access provided to you</li>
                            <li>Comply with all applicable local, national, and international laws</li>
                        </ul>
                    </Section>

                    <Section title="4. Intellectual Property">
                        <p>All content, designs, code, methodologies, and materials developed by {COMPANY} remain our exclusive intellectual property unless explicitly transferred via a written agreement. Clients receive a license to use deliverables as outlined in their respective service agreements.</p>
                    </Section>

                    <Section title="5. Payment Terms">
                        <p>Payment terms are defined in individual service agreements. Unless otherwise stated:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li>Invoices are due within 30 days of issuance</li>
                            <li>Late payments may incur a 1.5% monthly interest charge</li>
                            <li>Project milestones may require advance payments as outlined in the SOW</li>
                        </ul>
                    </Section>

                    <Section title="6. Limitation of Liability">
                        <p>To the maximum extent permitted by law, {COMPANY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, even if we have been advised of the possibility of such damages.</p>
                    </Section>

                    <Section title="7. Confidentiality">
                        <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of engagement. This obligation survives the termination of services for a period of two (2) years.</p>
                    </Section>

                    <Section title="8. Termination">
                        <p>Either party may terminate services with 30 days' written notice. {COMPANY} reserves the right to suspend services immediately if these terms are violated. Upon termination, all outstanding payments become immediately due.</p>
                    </Section>

                    <Section title="9. Governing Law">
                        <p>These terms are governed by the laws of India, with jurisdiction in the courts of Ahmedabad, Gujarat. Any disputes shall first be attempted to be resolved through good-faith negotiation.</p>
                    </Section>

                    <Section title="10. Changes to Terms">
                        <p>We reserve the right to update these terms at any time. Material changes will be communicated via email or prominent notice on our website. Continued use of our services constitutes acceptance of updated terms.</p>
                    </Section>

                    <Section title="11. Contact">
                        <p>For questions regarding these Terms of Service, please contact us at:</p>
                        <p className="mt-2"><strong className="text-primary">Email:</strong> <a href="mailto:info@futurrizon.com" className="text-orange hover:underline">info@futurrizon.com</a></p>
                        <p><strong className="text-primary">Address:</strong> SivantaOne Business Park, B-1213/1214, Ashram Rd, Ahmedabad, Gujarat 380006</p>
                    </Section>

                    {/* Navigation */}
                    <div className="mt-12 pt-8 border-t border-primary/10 flex flex-wrap gap-4">
                        <Link to="/privacy" className="px-5 py-2.5 rounded-xl bg-primary/5 text-primary/60 text-sm font-medium hover:bg-primary/10 transition-colors">
                            Privacy Policy →
                        </Link>
                        <Link to="/cookies" className="px-5 py-2.5 rounded-xl bg-primary/5 text-primary/60 text-sm font-medium hover:bg-primary/10 transition-colors">
                            Cookie Policy →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
