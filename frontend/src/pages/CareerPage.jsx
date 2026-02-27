import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Animation helpers ─────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const LINKEDIN_JOBS = 'https://www.linkedin.com/company/futurrizon-technologies/jobs/';

/* ─── Data ──────────────────────────────────────────── */
const perks = [
    { icon: '🚀', title: 'Growth-First Culture', desc: 'Accelerate your career with real-world projects, mentorship, and continuous learning opportunities.' },
    { icon: '🌍', title: 'Global Exposure', desc: 'Work with international clients across the USA, Middle East, Europe, New Zealand & more.' },
    { icon: '💡', title: 'Innovation Hub', desc: 'Build with cutting-edge Microsoft tech — Power Platform, Azure, AI/GPT, SharePoint & M365.' },
    { icon: '🎉', title: 'Vibrant Workplace', desc: 'Festivals, Fun Fridays, team outings, and celebrations that make work feel like family.' },
    { icon: '📈', title: 'Skill Development', desc: 'Microsoft certifications, internal bootcamps, and dedicated learning time every week.' },
    { icon: '🤝', title: 'Collaborative Team', desc: 'A flat hierarchy where every voice matters. We brainstorm, we build, we ship — together.' },
];

const openings = [
    {
        title: 'Power Platform Developer',
        type: 'Full-Time',
        location: 'Ahmedabad, India',
        experience: '1–3 Years',
        skills: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'JavaScript'],
        desc: 'Design and build custom business solutions using Microsoft Power Platform. You\'ll create Canvas & Model-driven apps, automate workflows, and integrate with Microsoft 365 services.',
        dept: 'Engineering',
    },
    {
        title: 'SharePoint Developer',
        type: 'Full-Time',
        location: 'Ahmedabad, India',
        experience: '2–4 Years',
        skills: ['SharePoint Online', 'SPFx', 'React', 'Power Automate', 'Azure AD'],
        desc: 'Build modern SharePoint solutions — from intranets to document management systems. Strong SPFx and React experience with a passion for clean, maintainable code.',
        dept: 'Engineering',
    },
    {
        title: 'Power BI Analyst',
        type: 'Full-Time',
        location: 'Ahmedabad, India',
        experience: '1–3 Years',
        skills: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Excel'],
        desc: 'Transform raw data into stunning, actionable dashboards. You\'ll work closely with clients to understand their KPIs and deliver insights that drive real business decisions.',
        dept: 'Analytics',
    },
    {
        title: 'Microsoft 365 Consultant',
        type: 'Full-Time',
        location: 'Ahmedabad, India',
        experience: '2–5 Years',
        skills: ['Microsoft 365', 'Teams', 'Exchange Online', 'Azure AD', 'Intune'],
        desc: 'Help enterprises unlock the full potential of Microsoft 365. From tenant setup to governance, migration, and adoption — you\'ll be trusted advisor to our global clients.',
        dept: 'Consulting',
    },
    {
        title: 'Azure Cloud Engineer',
        type: 'Full-Time',
        location: 'Ahmedabad, India',
        experience: '2–4 Years',
        skills: ['Azure', 'IaC', 'DevOps', 'Networking', 'Security'],
        desc: 'Architect and manage Azure cloud infrastructure for enterprise clients. You\'ll handle migrations, set up CI/CD pipelines, and ensure scalable, secure deployments.',
        dept: 'Cloud',
    },
    {
        title: 'Business Development Executive',
        type: 'Full-Time',
        location: 'Ahmedabad, India',
        experience: '1–3 Years',
        skills: ['B2B Sales', 'CRM', 'Microsoft Ecosystem', 'Lead Generation', 'Communication'],
        desc: 'Drive growth by identifying new business opportunities, nurturing client relationships, and positioning Futurrizon\'s solutions to enterprises worldwide.',
        dept: 'Sales',
    },
];

const deptColors = {
    Engineering: 'bg-blue-500/10 text-blue-600 border-blue-500/15',
    Analytics: 'bg-purple-500/10 text-purple-600 border-purple-500/15',
    Consulting: 'bg-green-500/10 text-green-600 border-green-500/15',
    Cloud: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/15',
    Sales: 'bg-orange/10 text-orange border-orange/15',
};

const values = [
    { emoji: '🎯', label: 'Impact Over Ego' },
    { emoji: '🔄', label: 'Iterate Fast' },
    { emoji: '💬', label: 'Radical Transparency' },
    { emoji: '🧠', label: 'Always Be Learning' },
    { emoji: '❤️', label: 'People Over Process' },
    { emoji: '🌟', label: 'Client Obsession' },
];

/* ─── Page ──────────────────────────────────────────── */
export default function CareerPage() {
    const [expandedJob, setExpandedJob] = useState(null);

    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[75vh] flex items-center bg-primary overflow-hidden">
                <div
                    className="absolute inset-0 opacity-8"
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
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">We're Hiring</span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight">
                            Build the Future
                            <span className="block text-orange mt-1">With Us</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-6 text-cream/60 text-lg max-w-xl leading-relaxed">
                            Join a team that's transforming businesses globally with Microsoft technologies. We don't just offer jobs — we offer careers that matter.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#openings"
                                className="px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                View Open Positions
                            </a>
                            <a
                                href={LINKEDIN_JOBS}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl border border-white/20 text-cream font-semibold text-sm hover:bg-white/5 transition-all duration-200 inline-flex items-center gap-2"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                Apply on LinkedIn
                            </a>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-8">
                            {[
                                ['🏢', '6+', 'Open Roles'],
                                ['🌍', '5+', 'Countries Served'],
                                ['⭐', '4.8', 'Glassdoor Rating'],
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

            {/* ── WHY FUTURRIZON ─────────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Why Join Us</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            More Than Just a Workplace
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-primary/50 text-base max-w-xl mx-auto">
                            We invest in people who are hungry to learn, eager to grow, and passionate about making an impact.
                        </motion.p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {perks.map((p, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(255,95,0,0.12)' }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white rounded-2xl p-6 border border-primary/6 hover:border-orange/20 group h-full"
                                >
                                    <div className="text-3xl mb-4">{p.icon}</div>
                                    <h3 className="font-display font-bold text-primary text-base mb-2 group-hover:text-orange transition-colors">{p.title}</h3>
                                    <p className="text-primary/50 text-sm leading-relaxed">{p.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OUR VALUES ────────────────────────────────── */}
            <section className="bg-primary py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,95,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,0,0.6) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection className="text-center mb-10">
                        <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-display font-bold text-cream">
                            What We Stand For
                        </motion.h2>
                    </AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                        {values.map((v, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-5 py-2.5 rounded-full border border-white/15 bg-white/8 text-cream text-sm font-medium inline-flex items-center gap-2 cursor-default"
                                >
                                    <span>{v.emoji}</span>
                                    {v.label}
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OPEN POSITIONS ─────────────────────────────── */}
            <section id="openings" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">💼 Open Positions</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Find Your Perfect Role
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-primary/50 text-base max-w-xl mx-auto">
                            We're looking for talented individuals who want to make an impact with Microsoft technologies.
                        </motion.p>
                    </AnimatedSection>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {openings.map((job, i) => {
                            const isExpanded = expandedJob === i;
                            return (
                                <AnimatedSection key={i}>
                                    <motion.div
                                        variants={fadeUp}
                                        className={`rounded-2xl border transition-all duration-300 ${isExpanded
                                                ? 'bg-cream border-orange/20 shadow-lg shadow-orange/8'
                                                : 'bg-cream border-primary/8 hover:border-orange/15 hover:shadow-md hover:shadow-orange/5'
                                            }`}
                                    >
                                        {/* Collapsed header */}
                                        <button
                                            onClick={() => setExpandedJob(isExpanded ? null : i)}
                                            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                        >
                                            <div className="flex items-center gap-4 flex-wrap">
                                                <div>
                                                    <h3 className="font-display font-bold text-primary text-lg">{job.title}</h3>
                                                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${deptColors[job.dept]}`}>
                                                            {job.dept}
                                                        </span>
                                                        <span className="text-primary/40 text-xs">📍 {job.location}</span>
                                                        <span className="text-primary/40 text-xs">•</span>
                                                        <span className="text-primary/40 text-xs">🕐 {job.type}</span>
                                                        <span className="text-primary/40 text-xs">•</span>
                                                        <span className="text-primary/40 text-xs">📅 {job.experience}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-orange shrink-0"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </motion.div>
                                        </button>

                                        {/* Expanded content */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 border-t border-primary/6 pt-5">
                                                        <p className="text-primary/60 text-sm leading-relaxed mb-5">
                                                            {job.desc}
                                                        </p>

                                                        {/* Skills */}
                                                        <div className="mb-5">
                                                            <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">Required Skills</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {job.skills.map(s => (
                                                                    <span key={s} className="px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-xs font-medium border border-primary/8">
                                                                        {s}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Apply button */}
                                                        <a
                                                            href={LINKEDIN_JOBS}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-md shadow-orange/15 transition-all duration-200 hover:-translate-y-0.5"
                                                        >
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                                            Apply on LinkedIn
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </AnimatedSection>
                            );
                        })}
                    </div>

                    {/* View all on LinkedIn */}
                    <div className="text-center mt-10">
                        <a
                            href={LINKEDIN_JOBS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:underline"
                        >
                            View All Openings on LinkedIn
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* ── HIRING PROCESS ─────────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our Process</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            How We Hire
                        </motion.h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                        {[
                            { step: '01', icon: '📝', title: 'Apply', desc: 'Submit your application through LinkedIn. We review every single one.' },
                            { step: '02', icon: '💬', title: 'Screening Call', desc: 'A quick chat to understand your background, aspirations, and culture fit.' },
                            { step: '03', icon: '🧠', title: 'Technical Round', desc: 'A hands-on assessment or case study relevant to the role you applied for.' },
                            { step: '04', icon: '🤝', title: 'Offer & Onboarding', desc: 'Welcome aboard! Fast-tracked onboarding to get you shipping from day one.' },
                        ].map((s, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    className="relative bg-white rounded-2xl p-6 border border-primary/6 group hover:border-orange/20 transition-all duration-300 h-full"
                                >
                                    <span className="absolute top-4 right-4 text-4xl font-display font-black text-primary/5 group-hover:text-orange/10 transition-colors">
                                        {s.step}
                                    </span>
                                    <div className="text-3xl mb-4">{s.icon}</div>
                                    <h3 className="font-display font-bold text-primary text-base mb-2 group-hover:text-orange transition-colors">{s.title}</h3>
                                    <p className="text-primary/50 text-sm leading-relaxed">{s.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.6) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange/8 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
                            <div className="text-5xl mb-5">🎯</div>
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Don't See Your Role?
                                <span className="text-orange block mt-1">Reach Out Anyway.</span>
                            </h2>
                            <p className="mt-5 text-cream/55 text-base leading-relaxed">
                                We're always looking for exceptional people. Send us your profile and let's see if there's a fit.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href={LINKEDIN_JOBS}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    Browse All Jobs on LinkedIn
                                </a>
                                <Link
                                    to="/#contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-cream font-semibold text-sm hover:bg-white/5 transition-all duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    );
}
