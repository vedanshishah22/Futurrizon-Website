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

export default function CookiesPage() {
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
                        <span className="text-orange text-xs font-semibold uppercase tracking-widest">🍪 Legal</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-cream leading-tight">
                        Cookie <span className="text-orange">Policy</span>
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
                    <Section title="1. What Are Cookies?">
                        <p>Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences, understand how you use the site, and improve your browsing experience. Cookies may be set by the site you're visiting ("first-party cookies") or by third-party services embedded in the site ("third-party cookies").</p>
                    </Section>

                    <Section title="2. How We Use Cookies">
                        <p>{COMPANY} uses cookies to enhance your experience on our website. Here's a breakdown of the types of cookies we use:</p>
                    </Section>

                    <Section title="3. Types of Cookies We Use">
                        <div className="space-y-3 mt-2">
                            <div className="bg-white rounded-xl p-5 border border-primary/6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 text-sm font-bold">✓</span>
                                    <div>
                                        <p className="font-semibold text-primary text-sm">Essential Cookies</p>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 font-medium">Always Active</span>
                                    </div>
                                </div>
                                <p className="text-primary/50 text-xs leading-relaxed">Required for the website to function properly. They enable core features like page navigation, security, and access to secure areas. The website cannot function without these cookies.</p>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-primary/6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 text-sm">📊</span>
                                    <div>
                                        <p className="font-semibold text-primary text-sm">Analytics Cookies</p>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-medium">Optional</span>
                                    </div>
                                </div>
                                <p className="text-primary/50 text-xs leading-relaxed">Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's structure, content, and user experience.</p>
                                <p className="text-primary/40 text-[11px] mt-2"><strong>Tools:</strong> Google Analytics, Microsoft Clarity</p>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-primary/6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 text-sm">⚙️</span>
                                    <div>
                                        <p className="font-semibold text-primary text-sm">Functional Cookies</p>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 font-medium">Optional</span>
                                    </div>
                                </div>
                                <p className="text-primary/50 text-xs leading-relaxed">Enable enhanced functionality and personalization, such as remembering your preferences (language, region), chat widget state, and form auto-fill data.</p>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-primary/6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center text-orange text-sm">📢</span>
                                    <div>
                                        <p className="font-semibold text-primary text-sm">Marketing Cookies</p>
                                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange/10 text-orange font-medium">Optional</span>
                                    </div>
                                </div>
                                <p className="text-primary/50 text-xs leading-relaxed">Used to track visitors across websites to display relevant and engaging advertisements. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.</p>
                                <p className="text-primary/40 text-[11px] mt-2"><strong>Tools:</strong> LinkedIn Insight, Google Ads, Meta Pixel</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="4. Cookie Duration">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse mt-2">
                                <thead>
                                    <tr className="bg-primary/5">
                                        <th className="text-left p-3 text-primary font-semibold text-xs rounded-tl-lg">Type</th>
                                        <th className="text-left p-3 text-primary font-semibold text-xs">Duration</th>
                                        <th className="text-left p-3 text-primary font-semibold text-xs rounded-tr-lg">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-primary/55 text-xs">
                                    <tr className="border-b border-primary/5">
                                        <td className="p-3">Session Cookies</td>
                                        <td className="p-3">Deleted when you close the browser</td>
                                        <td className="p-3">Temporary, for maintaining session state</td>
                                    </tr>
                                    <tr className="border-b border-primary/5">
                                        <td className="p-3">Persistent Cookies</td>
                                        <td className="p-3">Up to 2 years</td>
                                        <td className="p-3">Remembering preferences & analytics</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 rounded-bl-lg">Third-party Cookies</td>
                                        <td className="p-3">Varies by provider</td>
                                        <td className="p-3 rounded-br-lg">Analytics, advertising, social media</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section title="5. Managing Cookies">
                        <p>You have the right to control and manage cookies. You can:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li><strong className="text-primary/80">Browser Settings</strong> — Configure your browser to block or delete cookies. Note that blocking essential cookies may impair website functionality.</li>
                            <li><strong className="text-primary/80">Opt-Out Tools</strong> — Use opt-out mechanisms provided by analytics and advertising services (e.g., Google Analytics Opt-Out, NAI Consumer Opt-Out).</li>
                            <li><strong className="text-primary/80">Cookie Banner</strong> — Use our cookie consent banner to manage your preferences when you first visit our site.</li>
                        </ul>
                    </Section>

                    <Section title="6. Third-Party Cookies">
                        <p>Some cookies on our site are placed by third-party services we use, including:</p>
                        <ul className="list-disc pl-5 space-y-1.5 mt-2">
                            <li><strong className="text-primary/80">Google Analytics</strong> — website traffic analysis and reporting</li>
                            <li><strong className="text-primary/80">Microsoft Clarity</strong> — session recordings and heatmaps</li>
                            <li><strong className="text-primary/80">LinkedIn</strong> — social sharing and advertising</li>
                            <li><strong className="text-primary/80">Chatbot Services</strong> — live chat widget and AI assistant</li>
                        </ul>
                        <p className="mt-2">We do not control these third-party cookies. Please refer to their respective privacy policies for more information.</p>
                    </Section>

                    <Section title="7. Updates to This Policy">
                        <p>We may update this Cookie Policy periodically to reflect changes in technology, legislation, or our practices. The "Last updated" date at the top of this page indicates the most recent revision.</p>
                    </Section>

                    <Section title="8. Contact Us">
                        <p>If you have questions about our use of cookies, please contact:</p>
                        <div className="mt-3 bg-white rounded-xl p-5 border border-primary/6">
                            <p className="font-semibold text-primary text-sm">{COMPANY}</p>
                            <p className="text-xs text-primary/50 mt-2"><strong>Email:</strong> <a href="mailto:info@futurrizon.com" className="text-orange hover:underline">info@futurrizon.com</a></p>
                            <p className="text-xs text-primary/50"><strong>Address:</strong> SivantaOne Business Park, B-1213/1214, Ashram Rd, Ahmedabad, Gujarat 380006</p>
                        </div>
                    </Section>

                    {/* Navigation */}
                    <div className="mt-12 pt-8 border-t border-primary/10 flex flex-wrap gap-4">
                        <Link to="/terms" className="px-5 py-2.5 rounded-xl bg-primary/5 text-primary/60 text-sm font-medium hover:bg-primary/10 transition-colors">
                            ← Terms of Service
                        </Link>
                        <Link to="/privacy" className="px-5 py-2.5 rounded-xl bg-primary/5 text-primary/60 text-sm font-medium hover:bg-primary/10 transition-colors">
                            ← Privacy Policy
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
