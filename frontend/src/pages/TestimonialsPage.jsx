import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

/* ─── Case Study Data ───────────────────────────────── */
const caseStudies = [
    {
        id: 1,
        industry: 'Construction & Infrastructure',
        region: 'Middle East',
        title: 'Digital Site Operations & Compliance Automation',
        challenge: [
            'Project documentation scattered across emails & personal drives',
            'Delayed approvals for site changes & material requests',
            'Zero visibility into project progress for leadership',
            'Compliance issues due to outdated drawings & safety documents',
            'Field teams struggled with manual reporting & paper-based forms',
        ],
        approach: [
            'Built a centralized SharePoint-based Project Management Portal',
            'Deployed Power Apps for on-site inspection, incident & material logs',
            'Power Automate workflows for digital approvals & real-time updates',
            'Power BI dashboards for project performance & cost tracking',
            'Secure document version control for drawings & compliance files',
        ],
        results: [
            '70% Faster Site-To-Office Communication',
            '50% Reduction In Manual Document Handling',
            'Real-Time Visibility Into Deadlines, Budgets & Safety Metrics',
            'Accurate & Audit-Ready Documentation Anytime, Anywhere',
            'Higher Adoption Among Field Teams With Mobile-First Tools',
        ],
        accent: 'orange',
    },
    {
        id: 2,
        industry: 'Manufacturing',
        region: 'New Zealand',
        title: 'Power BI For Production Insights',
        challenge: [
            'Production downtime analysis took 2–3 days using Excel-heavy processes',
            'Lack of visibility into supply chain performance',
            'Difficulty consolidating data across multiple plants',
        ],
        approach: [
            'Deployed Power BI dashboards with automated data pipelines',
            'Connected multiple systems into a single reporting hub',
            'Provided real-time KPIs for plant managers & executives',
        ],
        results: [
            'Downtime analysis reduced from 3 days → 3 hours',
            'Improved production scheduling efficiency by 35%',
            'Enhanced decision-making with predictive insights',
        ],
        accent: 'primary',
    },
    {
        id: 3,
        industry: 'Finance',
        region: 'USA',
        title: 'Seamless Migration for A Financial Consultancy',
        challenge: [
            'Client relied on Google Workspace but wanted to migrate to Microsoft 365 with no downtime',
            'High volume of sensitive financial data required a secure, compliant approach',
            'Email & collaboration needed to continue during migration',
        ],
        approach: [
            'Implemented dual delivery migration strategy to avoid disruption',
            'Ensured role-based access controls and compliance with financial regulations',
            'Conducted phased migration to maintain business continuity',
        ],
        results: [
            'Zero downtime during migration',
            '100% secure transfer of sensitive data',
            'Seamless adoption of new tools without impacting daily operations',
        ],
        accent: 'orange',
    },
    {
        id: 4,
        industry: 'Retail',
        region: 'USA',
        title: 'Retail Transformation With Microsoft 365',
        challenge: [
            'Fragmented systems for POS, inventory, and order management',
            'Frequent order processing errors and poor HQ-store communication',
        ],
        approach: [
            'Migrated retail operations to Microsoft 365',
            'Integrated Teams & SharePoint for store-to-HQ collaboration',
            'Automated order tracking and reporting using Power Automate',
        ],
        results: [
            'Reduced order errors by 40%',
            'Real-time sales insights across regions',
            'Enhanced internal communication & collaboration',
        ],
        accent: 'primary',
    },
    {
        id: 5,
        industry: 'Energy & Utilities',
        region: 'USA',
        title: 'Field Inspections Digitized',
        challenge: [
            'Field engineers submitted inspection data manually (48-hour delays)',
            'No real-time visibility into outages and compliance reporting',
        ],
        approach: [
            'Built Power Apps mobile solution for instant field reporting',
            'Integrated Power BI dashboards for real-time monitoring',
            'Enabled Teams communication between field staff and HQ',
        ],
        results: [
            'Reporting time reduced from 48 hours → instant',
            'Improved regulatory compliance tracking',
            'Increased operational efficiency in outage management',
        ],
        accent: 'orange',
    },
    {
        id: 6,
        industry: 'Healthcare',
        region: 'USA',
        title: 'SharePoint Document Hub For Healthcare',
        challenge: [
            'Patient files stored across multiple systems → difficult access',
            'Staff wasted hours searching records',
            'Compliance with HIPAA-like standards was at risk',
        ],
        approach: [
            'Built a SharePoint document hub with metadata and version control',
            'Applied role-based permissions for secure patient data access',
            'Trained staff for faster adoption of new workflows',
        ],
        results: [
            '60% reduction in record search time',
            'Improved patient data security and compliance',
            'Enhanced collaboration between departments',
        ],
        accent: 'primary',
    },
    {
        id: 7,
        industry: 'IT Services',
        region: 'Saudi Arabia',
        title: 'AI Chatbot For Support Automation',
        challenge: [
            'IT support teams overloaded with repetitive tickets',
            'Average ticket resolution time stretched to 2+ days',
            'Employee productivity suffered due to long wait times',
        ],
        approach: [
            'Developed AI-powered chatbot with GPT integration',
            'Automated FAQs and first-level support ticket responses',
            'Integrated chatbot with Teams and SharePoint knowledge base',
        ],
        results: [
            '45% reduction in ticket volume for IT staff',
            'First-response time reduced to seconds',
            'Employees gained instant access to answers',
        ],
        accent: 'orange',
    },
    {
        id: 8,
        industry: 'Manufacturing',
        region: 'Europe',
        title: 'Legacy System Migration To Azure',
        challenge: [
            'On-prem systems costly, slow, and hard to scale',
            'Limited ability to run predictive analytics or AI workloads',
            'High risk due to no disaster recovery plan',
        ],
        approach: [
            'Migrated workloads to Azure Cloud Infrastructure',
            'Enabled scalable compute & storage for growing needs',
            'Added backup, disaster recovery, and AI integration',
        ],
        results: [
            '40% cost savings on IT infrastructure',
            'Predictive analytics enabled for production forecasting',
            'Business continuity secured with DR strategy',
        ],
        accent: 'primary',
    },
    {
        id: 9,
        industry: 'Education',
        region: 'Australia',
        title: 'Hybrid Learning With Microsoft Teams',
        challenge: [
            'University struggled with remote teaching during the pandemic',
            'Scattered communication between faculty & students',
            'Low adoption of digital tools by teaching staff',
        ],
        approach: [
            'Deployed Microsoft Teams-based hybrid classrooms',
            'Integrated SharePoint for student record management',
            'Delivered training sessions to boost digital adoption',
        ],
        results: [
            '70% improvement in faculty-student collaboration',
            'Smooth transition to hybrid/remote learning',
            'Centralized, secure access to student records',
        ],
        accent: 'orange',
    },
];

/* ─── Industry emoji map ────────────────────────────── */
const industryEmoji = {
    'Construction & Infrastructure': '🏗️',
    'Manufacturing': '🏭',
    'Finance': '💰',
    'Retail': '🛒',
    'Energy & Utilities': '⚡',
    'Healthcare': '🏥',
    'IT Services': '💻',
    'Education': '🎓',
};

/* ─── Page ──────────────────────────────────────────── */
export default function TestimonialsPage() {
    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,95,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,0,0.3) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                {/* Glow orbs */}
                <div className="absolute top-20 -left-32 w-96 h-96 bg-orange/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-3xl"
                    >
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Case Studies</span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight">
                            Success Stories
                            <span className="block text-orange mt-1">That Speak for Themselves</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-6 text-cream/60 text-lg max-w-xl leading-relaxed">
                            Real results from real organizations. See how we've helped businesses across industries transform their operations with Microsoft technologies.
                        </motion.p>

                        {/* Quick stats */}
                        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-8">
                            {[
                                ['🏢', '9+', 'Case Studies'],
                                ['🌍', '6+', 'Industries'],
                                ['📈', '100%', 'Success Rate'],
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

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0 60 L0 30 Q300 0 600 30 Q900 60 1200 30 L1200 60 Z" fill="#FFFAE6" />
                    </svg>
                </div>
            </section>

            {/* ── CASE STUDIES ───────────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">📊 Proven Impact</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Our Client Transformations
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-primary/50 text-base max-w-xl mx-auto">
                            Each case study represents a real challenge solved — from legacy migrations to AI-powered automation.
                        </motion.p>
                    </AnimatedSection>

                    {/* Case study cards */}
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {caseStudies.map((cs) => (
                            <AnimatedSection key={cs.id}>
                                <motion.div
                                    variants={fadeUp}
                                    className={`rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:shadow-orange/8 ${cs.accent === 'primary'
                                            ? 'bg-primary border-primary/20'
                                            : 'bg-white border-primary/8'
                                        }`}
                                >
                                    {/* Header bar */}
                                    <div className={`flex flex-wrap items-center justify-between gap-3 px-8 py-4 border-b ${cs.accent === 'primary' ? 'border-white/10' : 'border-primary/6'
                                        }`}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{industryEmoji[cs.industry] || '📋'}</span>
                                            <div>
                                                <span className={`text-xs font-semibold uppercase tracking-widest ${cs.accent === 'primary' ? 'text-orange' : 'text-orange'
                                                    }`}>
                                                    Case Study {cs.id}
                                                </span>
                                                <h3 className={`font-display font-bold text-lg leading-snug ${cs.accent === 'primary' ? 'text-cream' : 'text-primary'
                                                    }`}>
                                                    {cs.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${cs.accent === 'primary'
                                                    ? 'bg-white/10 text-cream/80 border-white/15'
                                                    : 'bg-primary/5 text-primary/60 border-primary/10'
                                                }`}>
                                                {cs.industry}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${cs.accent === 'primary'
                                                    ? 'bg-orange/15 text-orange border border-orange/20'
                                                    : 'bg-orange/10 text-orange border border-orange/15'
                                                }`}>
                                                📍 {cs.region}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x ${
                                        cs.accent === 'primary' ? 'divide-white/10' : 'divide-primary/6'
                                    }">
                                        {/* Challenge */}
                                        <div className="p-6">
                                            <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                                Challenge
                                            </p>
                                            <ul className="space-y-2">
                                                {cs.challenge.map((c, i) => (
                                                    <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${cs.accent === 'primary' ? 'text-cream/55' : 'text-primary/55'
                                                        }`}>
                                                        <span className="text-red-400 shrink-0 mt-1">•</span>
                                                        {c}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Approach */}
                                        <div className="p-6">
                                            <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                                                Our Approach
                                            </p>
                                            <ul className="space-y-2">
                                                {cs.approach.map((a, i) => (
                                                    <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${cs.accent === 'primary' ? 'text-cream/65' : 'text-primary/65'
                                                        }`}>
                                                        <span className="text-orange shrink-0 mt-0.5">
                                                            <svg width="12" height="12" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                                                        </span>
                                                        {a}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Results */}
                                        <div className="p-6">
                                            <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-3 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                Results
                                            </p>
                                            <ul className="space-y-2">
                                                {cs.results.map((r, i) => (
                                                    <li key={i} className={`text-sm leading-relaxed flex items-start gap-2 ${cs.accent === 'primary' ? 'text-cream/80' : 'text-primary/80'
                                                        }`}>
                                                        <span className="text-green-500 shrink-0">✅</span>
                                                        <span className="font-medium">{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
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
                            <div className="text-5xl mb-5">🚀</div>
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Ready to Write Your
                                <span className="text-orange block mt-1">Success Story?</span>
                            </h2>
                            <p className="mt-5 text-cream/55 text-base leading-relaxed">
                                Join 50+ organizations that trust Futurrizon to drive their digital transformation. Let's build something incredible together.
                            </p>
                            <a
                                href="/#contact"
                                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Start Your Transformation
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
