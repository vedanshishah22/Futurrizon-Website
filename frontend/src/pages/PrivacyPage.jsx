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

export default function PrivacyPage() {
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
                        <span className="text-orange text-xs font-semibold uppercase tracking-widest">🔒 Legal</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-cream leading-tight">
                        Privacy <span className="text-orange">Policy</span>
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
                    <Section title="1. Introduction">
                        <p>{COMPANY} ("we," "our," or "us") is committed to protecting the privacy of our website visitors, clients, and partners. This Privacy Policy describes how we collect, use, store, and protect your personal information.</p>
                    </Section>

                    <Section title="2. Information We Collect">
                        <p>We may collect the following types of information:</p>
                        <div className="mt-3 space-y-4">
                            <div className="bg-white rounded-xl p-4 border border-primary/6">
                                <p className="font-semibold text-primary text-sm mb-1">Personal Information</p>
                                <p className="text-primary/50 text-xs">Name, email address, phone number, company name, job title — provided when you contact us, submit forms, or engage our services.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-primary/6">
                                <p className="font-semibold text-primary text-sm mb-1">Usage Data</p>
                                <p className="text-primary/50 text-xs">IP address, browser type, device information, pages visited, time spent on pages — collected automatically through cookies and analytics tools.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border border-primary/6">
                                <p className="font-semibold text-primary text-sm mb-1">Business Data</p>
                                <p className="text-primary/50 text-xs">Project requirements, technical specifications, and other business-related information shared during the course of our engagement.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="3. How We Use Your Information">
                        <ul className="list-disc pl-5 space-y-1.5">
                            <li>To provide, maintain, and improve our services</li>
                            <li>To communicate with you about projects, updates, and support</li>
                            <li>To send relevant marketing communications (with your consent)</li>
                            <li>To analyze website usage and improve user experience</li>
                            <li>To comply with legal obligations and protect our rights</li>
                            <li>To process payments and manage billing</li>
                        </ul>
                    </Section>

                    <Section title="4. Data Sharing & Disclosure">
                        <p>We do <strong className="text-primary">not</strong> sell your personal information. We may share data with:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li><strong className="text-primary/80">Service providers</strong> — trusted partners who assist in delivering our services (hosting, analytics, communication tools)</li>
                            <li><strong className="text-primary/80">Legal requirements</strong> — when required by law, court order, or governmental authority</li>
                            <li><strong className="text-primary/80">Business transfers</strong> — in connection with a merger, acquisition, or sale of assets</li>
                        </ul>
                    </Section>

                    <Section title="5. Data Security">
                        <p>We implement industry-standard security measures to protect your data, including:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li>SSL/TLS encryption for all data transmissions</li>
                            <li>Access controls and authentication mechanisms</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Secure data storage with encryption at rest</li>
                        </ul>
                        <p className="mt-3">While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.</p>
                    </Section>

                    <Section title="6. Data Retention">
                        <p>We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Project-related data may be retained for up to 5 years after project completion for reference and compliance purposes.</p>
                    </Section>

                    <Section title="7. Your Rights">
                        <p>Depending on your jurisdiction, you may have the right to:</p>
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                                ['🔍', 'Access', 'Request a copy of your personal data'],
                                ['✏️', 'Rectification', 'Correct inaccurate data'],
                                ['🗑️', 'Erasure', 'Request deletion of your data'],
                                ['⏸️', 'Restriction', 'Limit how we process your data'],
                                ['📦', 'Portability', 'Receive data in a portable format'],
                                ['🚫', 'Objection', 'Object to certain processing activities'],
                            ].map(([emoji, title, desc]) => (
                                <div key={title} className="bg-white rounded-xl p-3 border border-primary/6 flex items-start gap-3">
                                    <span className="text-lg">{emoji}</span>
                                    <div>
                                        <p className="text-xs font-semibold text-primary">{title}</p>
                                        <p className="text-[11px] text-primary/45">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="8. Third-Party Links">
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>
                    </Section>

                    <Section title="9. Children's Privacy">
                        <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.</p>
                    </Section>

                    <Section title="10. Changes to This Policy">
                        <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or a prominent notice on our website. The "Last updated" date at the top indicates when the latest revision was made.</p>
                    </Section>

                    <Section title="11. Contact Us">
                        <p>For privacy-related inquiries, data requests, or concerns, please contact:</p>
                        <div className="mt-3 bg-white rounded-xl p-5 border border-primary/6">
                            <p className="font-semibold text-primary text-sm">{COMPANY}</p>
                            <p className="text-xs text-primary/50 mt-1">Data Protection Officer</p>
                            <p className="text-xs text-primary/50 mt-2"><strong>Email:</strong> <a href="mailto:info@futurrizon.com" className="text-orange hover:underline">info@futurrizon.com</a></p>
                            <p className="text-xs text-primary/50"><strong>Address:</strong> SivantaOne Business Park, B-1213/1214, Ashram Rd, Ahmedabad, Gujarat 380006</p>
                        </div>
                    </Section>

                    {/* Navigation */}
                    <div className="mt-12 pt-8 border-t border-primary/10 flex flex-wrap gap-4">
                        <Link to="/terms" className="px-5 py-2.5 rounded-xl bg-primary/5 text-primary/60 text-sm font-medium hover:bg-primary/10 transition-colors">
                            ← Terms of Service
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
