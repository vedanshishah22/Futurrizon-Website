import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
            {children}
        </motion.div>
    );
}

const LINKEDIN = 'https://www.linkedin.com/company/futurrizon-technologies/';

/* ─── Team Data ─────────────────────────────────────── */
const leadership = [
    {
        name: 'Yashesh Nagori',
        role: 'Founder & CEO',
        bio: 'Visionary leader with 15+ years of Microsoft expertise, focused on empowering businesses with digital transformation, automation, and intelligent technology solutions.',
        expertise: ['Microsoft 365', 'SharePoint', 'Power Platform', 'Azure', 'AI Automation'],
        emoji: '👨‍💼',
        linkedin: LINKEDIN,
    },
];

const teamMembers = [
    { name: 'SharePoint Team', count: '5+', emoji: '🏗️', desc: 'SPFx, Intranets, Document Mgmt, Custom Solutions', color: 'bg-blue-500/10 text-blue-600 border-blue-500/15' },
    { name: 'Power Platform Team', count: '4+', emoji: '⚡', desc: 'Power Apps, Power Automate, Dataverse, Integration', color: 'bg-purple-500/10 text-purple-600 border-purple-500/15' },
    { name: 'Power BI & Analytics', count: '3+', emoji: '📊', desc: 'Dashboards, DAX, Data Modeling, ETL Pipelines', color: 'bg-green-500/10 text-green-600 border-green-500/15' },
    { name: 'Azure & Cloud', count: '3+', emoji: '☁️', desc: 'Infrastructure, Migration, DevOps, Security', color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/15' },
    { name: 'AI & GPT', count: '3+', emoji: '🤖', desc: 'Chatbots, Copilot, Automation, Knowledge Systems', color: 'bg-orange/10 text-orange border-orange/15' },
    { name: 'M365 Consulting', count: '4+', emoji: '💼', desc: 'Tenant Setup, Governance, Adoption, Training', color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/15' },
    { name: 'Business Development', count: '3+', emoji: '🤝', desc: 'Client Relations, Proposals, Global Outreach', color: 'bg-pink-500/10 text-pink-600 border-pink-500/15' },
    { name: 'UI/UX & Design', count: '2+', emoji: '🎨', desc: 'Brand Design, Web Development, User Experience', color: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/15' },
];

const values = [
    { emoji: '🎯', title: 'Client-First', desc: 'Every decision is rooted in delivering real value to our clients.' },
    { emoji: '🧠', title: 'Innovation', desc: 'We push boundaries with AI, automation, and modern architecture.' },
    { emoji: '🤝', title: 'Collaboration', desc: 'Flat hierarchy where ideas flow freely and every voice matters.' },
    { emoji: '📈', title: 'Growth', desc: 'Continuous learning, certifications, and career acceleration.' },
    { emoji: '🔒', title: 'Trust', desc: 'Enterprise-grade security and transparency in everything we do.' },
    { emoji: '🌍', title: 'Global Impact', desc: 'Serving clients across 5+ countries with local expertise.' },
];

export default function OurTeamPage() {
    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.4) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-10 -left-28 w-[500px] h-[500px] bg-orange/12 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our People</span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight">
                            Meet the Minds
                            <span className="block text-orange mt-1">Behind Futurrizon</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-6 text-cream/60 text-lg max-w-xl leading-relaxed">
                            A team of certified Microsoft experts, creative problem-solvers, and digital strategists driving transformation for businesses worldwide.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-8">
                            {[
                                ['👥', '30+', 'Team Members'],
                                ['🏆', '15+', 'Years Expertise'],
                                ['🌍', '5+', 'Countries'],
                                ['📋', '600+', 'Projects'],
                            ].map(([emoji, num, label]) => (
                                <div key={label} className="text-center">
                                    <div className="text-2xl mb-0.5">{emoji}</div>
                                    <div className="text-2xl font-display font-black text-orange">{num}</div>
                                    <div className="text-cream/40 text-xs mt-0.5">{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0 60 L0 30 Q300 0 600 30 Q900 60 1200 30 L1200 60 Z" fill="#FFFAE6" />
                    </svg>
                </div>
            </section>

            {/* ── LEADERSHIP ────────────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Leadership</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Visionary Leadership
                        </motion.h2>
                    </AnimatedSection>

                    {leadership.map((leader) => (
                        <AnimatedSection key={leader.name} className="max-w-3xl mx-auto">
                            <motion.div
                                variants={fadeUp}
                                className="bg-white rounded-3xl p-8 lg:p-10 border border-primary/6 hover:shadow-xl hover:shadow-orange/8 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row items-start gap-8">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange to-peach flex items-center justify-center text-4xl shrink-0 shadow-lg shadow-orange/20">
                                        {leader.emoji}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-display font-bold text-primary">{leader.name}</h3>
                                        <p className="text-orange font-semibold text-sm mt-1">{leader.role}</p>
                                        <p className="text-primary/55 text-sm leading-relaxed mt-4">{leader.bio}</p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {leader.expertise.map(s => (
                                                <span key={s} className="px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-xs font-medium border border-primary/8">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 text-orange font-semibold text-sm hover:underline">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* ── TEAMS ─────────────────────────────────────── */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">🏢 Our Teams</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Specialized Squads
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-primary/50 text-base max-w-xl mx-auto">
                            Cross-functional teams with deep Microsoft ecosystem expertise delivering solutions across industries.
                        </motion.p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {teamMembers.map((t, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(255,95,0,0.1)' }}
                                    className="bg-cream rounded-2xl p-5 border border-primary/6 group hover:border-orange/20 transition-all duration-300 h-full"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-3xl">{t.emoji}</span>
                                        <span className={`text-lg font-display font-black px-3 py-0.5 rounded-full border ${t.color}`}>
                                            {t.count}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-primary text-sm mb-1 group-hover:text-orange transition-colors">{t.name}</h3>
                                    <p className="text-primary/45 text-xs leading-relaxed">{t.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VALUES ────────────────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">What Drives Us</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Our Core Values
                        </motion.h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {values.map((v, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-2xl p-6 border border-primary/6 group hover:border-orange/20 transition-all duration-300 h-full"
                                >
                                    <div className="text-3xl mb-3">{v.emoji}</div>
                                    <h3 className="font-display font-bold text-primary text-base mb-2 group-hover:text-orange transition-colors">{v.title}</h3>
                                    <p className="text-primary/50 text-sm leading-relaxed">{v.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── JOIN CTA ──────────────────────────────────── */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.6) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
                            <div className="text-5xl mb-5">🚀</div>
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Want to Join
                                <span className="text-orange block mt-1">Our Team?</span>
                            </h2>
                            <p className="mt-5 text-cream/55 text-base leading-relaxed">
                                We're always looking for talented, passionate people who love building with Microsoft technologies. Check out our open positions.
                            </p>
                            <a
                                href="/career"
                                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                View Open Positions
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    );
}
