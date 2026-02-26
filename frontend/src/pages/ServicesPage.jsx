import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgServices from '../assets/bg_services.png';
import svc1 from '../assets/services/1.png';
import svc2 from '../assets/services/2.png';
import svc3 from '../assets/services/3.png';
import svc4 from '../assets/services/4.png';

/* ─── Icon SVGs ─────────────────────────────────────── */
const SharePointIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="4" y="12" width="36" height="44" rx="4" fill="#002379" opacity="0.15" stroke="#FF5F00" strokeWidth="1.5" />
        <rect x="12" y="4" width="36" height="44" rx="4" fill="#002379" opacity="0.25" stroke="#FF5F00" strokeWidth="1.5" />
        <rect x="20" y="16" width="36" height="44" rx="4" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <line x1="28" y1="28" x2="48" y2="28" stroke="#FF9F66" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="35" x2="48" y2="35" stroke="#FF9F66" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="42" x2="40" y2="42" stroke="#FF9F66" strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="28" r="2" fill="#FF5F00" />
        <circle cx="26" cy="35" r="2" fill="#FF5F00" />
        <circle cx="26" cy="42" r="2" fill="#FF5F00" />
    </svg>
);

const PowerPlatformIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="16" cy="32" r="10" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <circle cx="48" cy="16" r="10" fill="#002379" stroke="#FF9F66" strokeWidth="2" />
        <circle cx="48" cy="48" r="10" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <line x1="26" y1="28" x2="38" y2="20" stroke="#FF5F00" strokeWidth="2" />
        <line x1="26" y1="36" x2="38" y2="44" stroke="#FF5F00" strokeWidth="2" />
        <text x="10" y="36" fill="#FF9F66" fontSize="8" fontWeight="bold">PA</text>
        <text x="42" y="20" fill="#FF9F66" fontSize="8" fontWeight="bold">BI</text>
        <text x="42" y="52" fill="#FF9F66" fontSize="8" fontWeight="bold">AU</text>
    </svg>
);

const M365Icon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="4" y="20" width="24" height="24" rx="4" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <rect x="36" y="20" width="24" height="24" rx="4" fill="#002379" stroke="#FF9F66" strokeWidth="2" />
        <rect x="20" y="4" width="24" height="24" rx="4" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <rect x="20" y="36" width="24" height="24" rx="4" fill="#002379" stroke="#FF9F66" strokeWidth="2" />
        <line x1="28" y1="32" x2="36" y2="32" stroke="#FF5F00" strokeWidth="2" />
        <line x1="32" y1="28" x2="32" y2="36" stroke="#FF5F00" strokeWidth="2" />
    </svg>
);

const AIIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="16" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <circle cx="32" cy="32" r="8" fill="#FF5F00" opacity="0.3" />
        <circle cx="32" cy="32" r="3" fill="#FF5F00" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <line key={i}
                x1={32 + 10 * Math.cos(deg * Math.PI / 180)}
                y1={32 + 10 * Math.sin(deg * Math.PI / 180)}
                x2={32 + 22 * Math.cos(deg * Math.PI / 180)}
                y2={32 + 22 * Math.sin(deg * Math.PI / 180)}
                stroke={i % 2 === 0 ? "#FF5F00" : "#FF9F66"} strokeWidth="1.5" strokeLinecap="round" />
        ))}
    </svg>
);

const MigrationIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="4" y="20" width="20" height="24" rx="3" fill="#002379" stroke="#FF9F66" strokeWidth="2" />
        <rect x="40" y="20" width="20" height="24" rx="3" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <path d="M26 32 Q32 24 38 32" stroke="#FF5F00" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
        <path d="M38 32 Q32 40 26 32" stroke="#FF9F66" strokeWidth="2" fill="none" strokeDasharray="3 2" />
        <circle cx="12" cy="28" r="2" fill="#FF9F66" />
        <circle cx="12" cy="34" r="2" fill="#FF9F66" />
        <circle cx="12" cy="40" r="2" fill="#FF9F66" />
        <line x1="16" y1="28" x2="22" y2="28" stroke="#FF9F66" strokeWidth="1.5" />
        <line x1="16" y1="34" x2="22" y2="34" stroke="#FF9F66" strokeWidth="1.5" />
        <line x1="16" y1="40" x2="22" y2="40" stroke="#FF9F66" strokeWidth="1.5" />
        <circle cx="52" cy="28" r="2" fill="#FF5F00" />
        <circle cx="52" cy="34" r="2" fill="#FF5F00" />
        <line x1="44" y1="28" x2="50" y2="28" stroke="#FF5F00" strokeWidth="1.5" />
        <line x1="44" y1="34" x2="50" y2="34" stroke="#FF5F00" strokeWidth="1.5" />
    </svg>
);

const SupportIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="26" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <circle cx="32" cy="24" r="8" fill="none" stroke="#FF9F66" strokeWidth="2" />
        <path d="M18 50 Q18 38 32 38 Q46 38 46 50" fill="none" stroke="#FF9F66" strokeWidth="2" />
        <circle cx="52" cy="16" r="8" fill="#FF5F00" />
        <line x1="52" y1="12" x2="52" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="52" y1="20" x2="52" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const AzureIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M12 48 L28 16 L44 32 L56 20" stroke="#FF5F00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="16" r="4" fill="#FF5F00" />
        <circle cx="44" cy="32" r="4" fill="#FF9F66" />
        <circle cx="56" cy="20" r="4" fill="#FF5F00" />
        <path d="M8 52 L56 52" stroke="#FF9F66" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 8 Q48 4 56 20" stroke="#002379" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M32 8 Q16 4 8 20" stroke="#002379" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
);

const AnalyticsIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="8" y="40" width="10" height="16" rx="2" fill="#FF9F66" />
        <rect x="22" y="28" width="10" height="28" rx="2" fill="#FF5F00" />
        <rect x="36" y="18" width="10" height="38" rx="2" fill="#FF9F66" />
        <rect x="50" y="8" width="10" height="48" rx="2" fill="#FF5F00" />
        <path d="M13 38 L27 26 L41 16 L55 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
);

const FinanceIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="26" fill="#002379" stroke="#FF5F00" strokeWidth="2" />
        <path d="M32 14 L32 50M22 20 Q32 14 42 20M22 44 Q32 50 42 44" stroke="#FF9F66" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="26" r="6" fill="none" stroke="#FF5F00" strokeWidth="2" />
        <circle cx="32" cy="38" r="6" fill="none" stroke="#FF9F66" strokeWidth="2" />
    </svg>
);

/* ─── Animation Helpers ─────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const staggerChildren = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
            {children}
        </motion.div>
    );
}

/* ─── Reusable Service Section ──────────────────────── */
function ServiceSection({ id, icon: Icon, title, subtitle, problems, solutions, outcome, description, image, imageRight = true, dark = false, accentColor = 'orange' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    const bg = dark ? 'bg-primary' : 'bg-cream';
    const textMain = dark ? 'text-cream' : 'text-primary';
    const textMuted = dark ? 'text-cream/60' : 'text-primary/60';

    const Visual = (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative flex flex-col items-center justify-center h-full"
        >
            {/* Decorative glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-64 h-64 rounded-full blur-3xl opacity-10 ${dark ? 'bg-orange' : 'bg-primary'}`} />
            </div>

            {/* Card with curved corner accents + shadow */}
            <div
                className={`relative z-10 w-full max-w-md rounded-3xl overflow-hidden ${dark ? 'bg-[#0a1628]' : 'bg-white'}`}
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)' }}
            >
                {/* Top-left SVG curved corner - arms fade out */}
                <svg className="absolute top-0 left-0 z-20 pointer-events-none" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <defs>
                        <linearGradient id="tlH" x1="1" y1="0" x2="0" y2="0">
                            <stop offset="0%" stopColor="#F87B1B" stopOpacity="0" />
                            <stop offset="100%" stopColor="#F87B1B" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="tlV" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#F87B1B" stopOpacity="1" />
                            <stop offset="100%" stopColor="#F87B1B" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {/* Horizontal arm - fades from right */}
                    <line x1="68" y1="5" x2="26" y2="5" stroke="url(#tlH)" strokeWidth="4" strokeLinecap="round" />
                    {/* Curved corner - solid */}
                    <path d="M 26 5 Q 5 5 5 26" stroke="#F87B1B" strokeWidth="4" fill="none" strokeLinecap="round" />
                    {/* Vertical arm - fades downward */}
                    <line x1="5" y1="26" x2="5" y2="68" stroke="url(#tlV)" strokeWidth="4" strokeLinecap="round" />
                </svg>

                {/* Bottom-right SVG curved corner - arms fade out */}
                <svg className="absolute bottom-0 right-0 z-20 pointer-events-none" width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <defs>
                        <linearGradient id="brH" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#F87B1B" stopOpacity="0" />
                            <stop offset="100%" stopColor="#F87B1B" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="brV" x1="0" y1="1" x2="0" y2="0">
                            <stop offset="0%" stopColor="#F87B1B" stopOpacity="0" />
                            <stop offset="100%" stopColor="#F87B1B" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    {/* Horizontal arm - fades from left */}
                    <line x1="4" y1="67" x2="46" y2="67" stroke="url(#brH)" strokeWidth="4" strokeLinecap="round" />
                    {/* Curved corner - solid */}
                    <path d="M 46 67 Q 67 67 67 46" stroke="#F87B1B" strokeWidth="4" fill="none" strokeLinecap="round" />
                    {/* Vertical arm - fades upward */}
                    <line x1="67" y1="46" x2="67" y2="4" stroke="url(#brV)" strokeWidth="4" strokeLinecap="round" />
                </svg>

                {/* Image area */}
                {image ? (
                    <img src={image} alt={title} className="w-full h-56 object-cover" style={{ objectPosition: 'center 15%' }} />
                ) : (
                    <div className={`w-full h-56 flex items-center justify-center ${dark ? 'bg-white/5' : 'bg-primary/5'}`}>
                        <div className="w-20 h-20"><Icon /></div>
                    </div>
                )}

                {/* Text area */}
                <div className="p-8">
                    <div className="w-10 h-1 rounded-full bg-orange mb-4" />
                    {description && (
                        <p className={`text-sm leading-relaxed ${dark ? 'text-cream/70' : 'text-primary/65'}`}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );

    const Content = (
        <motion.div
            ref={ref}
            variants={staggerChildren}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
        >
            {/* Label */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                <span className="text-orange text-xs font-semibold uppercase tracking-widest">Solution</span>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeUp}>
                <h2 className={`text-3xl lg:text-4xl font-display font-bold leading-tight ${textMain}`}>{title}</h2>
                {subtitle && <p className={`mt-2 text-base ${textMuted}`}>{subtitle}</p>}
            </motion.div>

            {/* Problems */}
            <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-sm uppercase tracking-widest font-bold text-orange mb-3">Challenges We Solve</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {problems.map((p, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                            <span className={`text-sm ${textMuted}`}>{p}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-orange/40 to-transparent" />

            {/* Solutions */}
            <motion.div variants={fadeUp} className="space-y-2">
                <p className="text-sm uppercase tracking-widest font-bold text-orange mb-3">Our Approach</p>
                <div className="space-y-2.5">
                    {solutions.map((s, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 10 10"><polyline points="2,5 4,8 8,2" stroke="#FF5F00" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
                            </span>
                            <span className={`text-sm ${textMain}`}>{s}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Outcome pill */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-orange text-white font-semibold text-sm shadow-lg shadow-orange/30">
                <span>→</span>
                <span>{outcome}</span>
            </motion.div>
        </motion.div>
    );

    return (
        <section id={id} className={`${bg} pt-12 pb-20`}>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={imageRight ? '' : 'lg:order-2'}>{Content}</div>
                    <div className={imageRight ? '' : 'lg:order-1'}>{Visual}</div>
                </div>
            </div>
        </section>
    );
}

/* ─── Data ──────────────────────────────────────────── */
const services = [
    {
        id: 'sharepoint',
        icon: SharePointIcon,
        title: 'SharePoint Solutions',
        subtitle: 'Your Single Source of Truth — For Documents, Workflows & Knowledge',
        problems: [
            'Hours wasted searching files across emails & drives',
            'Team using outdated file versions → costly errors',
            'Compliance risks from insecure file sharing',
            'Information locked in silos, poor knowledge-sharing',
            'Email-based approvals with zero transparency',
        ],
        solutions: [
            'Centralized file repositories with version control & metadata',
            'Role-based access for security & compliance',
            'Smart enterprise search — find any file in seconds',
            'Automated document workflows & digital approval chains',
            'Personalized intranet portals reflecting your brand',
        ],
        outcome: 'SharePoint becomes the engine of productivity, control & compliance.',
        description: "We design intelligent SharePoint environments that bring structure, governance, and clarity to your organization's information ecosystem. Beyond document storage, we create scalable architectures that enhance collaboration, streamline approvals, and strengthen compliance controls.",
        image: svc1,
        imageRight: true,
        dark: false,
    },
    {
        id: 'power-platform',
        icon: PowerPlatformIcon,
        title: 'Power Platform',
        subtitle: 'Apps, Automation & Intelligence — Built Without Heavy IT Dependence',
        problems: [
            'Manual data entry slows teams down daily',
            'Approvals stuck in emails with zero visibility',
            'Too many fragmented tools & processes',
            'No custom apps to support unique business needs',
            'Heavy IT overhead for small workflow changes',
        ],
        solutions: [
            'Power Apps — custom mobile & web business applications',
            'Power Automate — zero-touch workflow automation',
            'Power BI — real-time dashboards & data insights',
            'Copilot & Virtual Agents for AI-driven support',
            'Seamless integration with M365, ERP & CRM systems',
        ],
        outcome: 'Replace manual work with smart, connected digital workflows.',
        description: "We transform manual processes into agile, automated digital systems using Microsoft's Power Platform. Our solutions enable organizations to rapidly build custom applications, automate complex workflows, and unlock real-time insights without heavy development cycles.",
        image: svc2,
        imageRight: false,
        dark: true,
    },
    {
        id: 'm365',
        icon: M365Icon,
        title: 'Microsoft 365 Optimization',
        subtitle: 'Turn Underutilized Licenses Into a Unified Digital Workplace',
        problems: [
            'Data scattered across email, OneDrive & devices',
            'Low adoption of tools you\'re already paying for',
            'Traditional workflows — slow, error-prone processes',
            'Security risks from uncontrolled file sharing',
            'No real insights into productivity or collaboration',
        ],
        solutions: [
            'Structured information architecture across SharePoint & Teams',
            'Smart collaboration frameworks for hybrid work',
            'Governance, security & permission standardization',
            'Copilot + analytics for productivity intelligence',
            'User adoption training to increase daily usage & ROI',
        ],
        outcome: 'M365 becomes a unified digital workplace — not just a set of tools.',
        description: 'We help organizations fully leverage their Microsoft 365 investment by aligning tools, governance, and user adoption strategies. Our optimization approach eliminates redundancy, improves information flow, and enhances productivity across teams.',
        image: svc3,
        imageRight: true,
        dark: false,
    },
    {
        id: 'ai-gpt',
        icon: AIIcon,
        title: 'AI & GPT Integrations',
        subtitle: 'Embed Intelligence Where Work Happens — Inside Microsoft 365',
        problems: [
            'Productivity lost in emails, notes & manual tasks',
            'Employees can\'t leverage the full power of their tools',
            'Leaders lack predictive insights for decision-making',
            'Repetitive admin work consumes skilled talent',
            'Information overload → slow response & execution',
        ],
        solutions: [
            'Microsoft Copilot for meetings, emails & task automation',
            'Custom generative AI assistants for business processes',
            'Predictive analytics & smart recommendations',
            'Automated knowledge retrieval & context-aware help',
            'Chatbots & virtual agents for 24/7 support',
        ],
        outcome: 'Shift from manual effort to intelligent assistance.',
        description: 'We embed intelligent automation and generative AI capabilities directly into your existing workflows. Our solutions enhance human productivity by automating repetitive tasks and surfacing relevant insights instantly — ensuring your workforce operates with greater speed and precision.',
        image: svc4,
        imageRight: false,
        dark: true,
    },
    {
        id: 'migration',
        icon: MigrationIcon,
        title: 'Migration & Integration Services',
        subtitle: 'Seamless Transitions to Modern Microsoft Platforms — Zero Disruption',
        problems: [
            'Legacy systems slow down operations & growth',
            'Data migration risks: loss, downtime & corruption',
            'Tools don\'t talk to each other → data silos',
            'Poor user experience after migration → low adoption',
            'Compliance & security challenges during transition',
        ],
        solutions: [
            'SharePoint & OneDrive migration (On-Prem to Cloud)',
            'System integration with ERP, CRM, HR & third-party tools',
            'Structured data mapping & cleanup for accuracy',
            'Secure, zero-downtime migration strategy',
            'Post-migration training & change management',
        ],
        outcome: 'Your business upgrades without halt — seamless, secure & scalable.',
        description: 'We execute structured, secure migration strategies that modernize systems without disrupting business operations. Every migration is supported by governance planning and user enablement to drive long-term adoption and strengthen security posture.',
        imageRight: true,
        dark: false,
    },
    {
        id: 'support',
        icon: SupportIcon,
        title: 'Support & Managed Services',
        subtitle: 'Your Platforms Stay Fast, Secure & Fully Utilized — Every Single Day',
        problems: [
            'Slow IT response causing operational delays',
            'Frequent system issues hurting productivity',
            'No clear ownership for platform maintenance',
            'Tools degrading over time due to low adoption',
            'Security updates missed, increasing risk exposure',
        ],
        solutions: [
            'Proactive monitoring & rapid issue resolution',
            'Continuous optimization & feature enhancements',
            'Ongoing training for sustained user adoption',
            'Security patching & compliance updates',
            'Dedicated support team with SLA-based assistance',
        ],
        outcome: 'We keep your systems fast, secure & fully utilized — every single day.',
        description: 'We provide proactive platform management to ensure your systems remain optimized, secure, and aligned with evolving business needs. Our support model emphasizes responsiveness, transparency, and measurable service standards — so your teams can focus on growth.',
        imageRight: false,
        dark: true,
    },
    {
        id: 'azure',
        icon: AzureIcon,
        title: 'Azure Cloud Services',
        subtitle: 'Scalable, Secure Cloud Infrastructure — Your Intelligent Business Backbone',
        problems: [
            'Expensive, hard-to-scale on-premises infrastructure',
            'Security & compliance concerns restricting growth',
            'No disaster recovery → business continuity at risk',
            'Performance bottlenecks as data volumes increase',
            'Limited AI, analytics & modern app capability',
        ],
        solutions: [
            'Cloud migration & infrastructure modernization',
            'Built-in security, identity & compliance management',
            'Scalable compute & storage matching business growth',
            'AI, ML & analytics for predictive decision-making',
            'Backup, restoration & disaster recovery assurance',
        ],
        outcome: 'Azure becomes your intelligent cloud backbone — secure, stable & ready to scale.',
        description: 'We architect secure, scalable Azure environments tailored to your performance, compliance, and growth objectives. From infrastructure modernization to advanced analytics capabilities, we build foundations that support innovation and long-term scalability.',
        imageRight: true,
        dark: false,
    },
    {
        id: 'analytics',
        icon: AnalyticsIcon,
        title: 'Advanced Data Analytics & Reporting',
        subtitle: 'Smarter, Faster, Confident Decisions — Powered by Insights You Can Trust',
        problems: [
            'Data scattered across multiple disconnected systems',
            'Static reports with no real-time decision intelligence',
            'Leaders relying on guesswork instead of data',
            'IT-dependent reporting → delays & bottlenecks',
            'No visibility into key business performance drivers',
        ],
        solutions: [
            'Power BI dashboards & executive reporting',
            'Predictive analytics & trend forecasting',
            'Automated data refresh & ETL workflows',
            'Custom KPI tracking & business alert systems',
            'Centralized data models & governance framework',
        ],
        outcome: 'Smarter decisions powered by real-time insights you can trust.',
        description: 'We convert fragmented data into structured intelligence that drives confident decision-making. By implementing scalable data models, automated reporting systems, and predictive analytics, we deliver clarity at both operational and executive levels.',
        imageRight: false,
        dark: true,
    },
    {
        id: 'financial',
        icon: FinanceIcon,
        title: 'Financial & Operational Modeling',
        subtitle: 'Move From Reactive to Predictive — Improve Business Performance End-to-End',
        problems: [
            'Inaccurate budgeting & forecasts → financial risk',
            'No real-time visibility into revenue, cost & profitability',
            'Manual Excel models → error-prone & time-consuming',
            'Operational planning based on assumptions',
            'Leadership decisions without measurable impact',
        ],
        solutions: [
            'Profitability & margin analysis by product/region/channel',
            'Dynamic financial forecasting & scenario planning',
            'Operational efficiency models for cost optimization',
            'Performance dashboards for leadership visibility',
            'Data-driven planning frameworks for growth acceleration',
        ],
        outcome: 'Move from reactive to predictive — improve performance end-to-end.',
        description: 'We design data-driven financial and operational frameworks that provide transparency across revenue, cost, and performance metrics. By replacing static spreadsheets with structured systems, we reduce risk and give leadership the visibility required for proactive decisions.',
        imageRight: true,
        dark: false,
    },
];

const platforms = [
    { name: 'Microsoft 365', desc: 'Unified Collaboration & Secure Content Management', emoji: '🔷' },
    { name: 'SharePoint', desc: 'Centralized Knowledge + Automated Processes', emoji: '📁' },
    { name: 'Power BI', desc: 'Real-Time Insights & Executive Dashboards', emoji: '📊' },
    { name: 'Power Apps', desc: 'Custom Business Apps Without Coding', emoji: '📱' },
    { name: 'Power Automate', desc: 'Zero-Touch Approvals & End-to-End Automation', emoji: '⚡' },
    { name: 'Copilot & AI', desc: 'Intelligent Assistance & Predictive Decisions', emoji: '🤖' },
    { name: 'Azure', desc: 'Scalable, Secure Cloud Foundation For Business', emoji: '☁️' },
];

/* ─── Main Page ─────────────────────────────────────── */
export default function ServicesPage() {
    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ─────────────────────────────────────── */}
            <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
                {/* Background image */}
                <img
                    src={bgServices}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
                />
                {/* Animated grid bg */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,95,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,0,0.4) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Glow orbs */}
                <div className="absolute top-20 -left-32 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our Services</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight"
                        >
                            Modernize Your Business
                            <span className="block text-orange mt-2">With Our Solutions</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 text-cream/60 text-lg max-w-2xl leading-relaxed"
                        >
                            We don't just implement technology — we engineer connected digital ecosystems that make your people faster, your decisions smarter, and your business future-ready.
                        </motion.p>

                        {/* Scroll-to chips */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            {services.map(s => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-orange/20 hover:border-orange/40 text-cream/70 hover:text-cream text-xs font-medium transition-all duration-200"
                                >
                                    {s.title}
                                </a>
                            ))}
                        </motion.div>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
                        >
                            {[['9+', 'Service Areas'], ['100%', 'Microsoft Stack'], ['24/7', 'Managed Support']].map(([num, label]) => (
                                <div key={label} className="text-center">
                                    <div className="text-3xl font-display font-bold text-orange">{num}</div>
                                    <div className="text-cream/50 text-xs mt-1">{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Bottom wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
                        <path d="M0 80 L0 40 Q300 0 600 40 Q900 80 1200 40 L1200 80 Z" fill="#FFFAE6" />
                    </svg>
                </div>
            </section>

            {/* ── SERVICE SECTIONS ─────────────────────────── */}
            {services.map((s) => (
                <ServiceSection key={s.id} {...s} />
            ))}

            {/* ── ROOT CAUSE SECTION ───────────────────────── */}
            <section className="bg-primary py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.8) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 mb-6">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">💡 The Root Cause</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                            Businesses Don't Struggle Because They Lack Technology…
                        </h2>
                        <p className="mt-4 text-cream/70 text-lg">
                            They struggle because their technology <span className="text-orange font-semibold">doesn't work together.</span>
                        </p>
                    </AnimatedSection>

                    {/* Disconnection chain */}
                    <AnimatedSection className="max-w-2xl mx-auto mb-16">
                        <div className="space-y-4">
                            {[
                                'Disconnected Tools',
                                'Disconnected Teams',
                                'Disconnected Data',
                                'Disconnected Outcomes',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
                                    <span className="text-cream/70 text-sm font-medium">➡ {item}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Cost callout */}
                    <AnimatedSection>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-3xl mx-auto text-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                {[
                                    ['⏰', 'Time', 'Every hour wasted searching for files'],
                                    ['📊', 'Decisions', 'Outdated reports guiding major choices'],
                                    ['💰', 'Revenue', 'Approvals stuck in someone\'s inbox'],
                                ].map(([emoji, title, desc]) => (
                                    <div key={title} className="text-center">
                                        <div className="text-3xl mb-2">{emoji}</div>
                                        <div className="text-orange font-bold text-lg mb-1">{title}</div>
                                        <div className="text-cream/50 text-sm">{desc}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xl font-display font-bold text-cream">
                                This isn't just an IT Issue.
                            </p>
                            <p className="text-cream/60 mt-2 text-base">
                                It's a Growth Issue. A Performance Issue. A Business Survival Issue.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── PLATFORM ECOSYSTEM ───────────────────────── */}
            <section className="bg-cream py-24 relative">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/10 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">⭐ Good News</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-display font-bold text-primary leading-tight">
                            Every Challenge Can Be Solved
                        </h2>
                        <p className="mt-4 text-primary/60 text-lg max-w-2xl mx-auto">
                            With the right digital transformation strategy, Microsoft's ecosystem becomes your greatest competitive advantage.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {platforms.map((p, i) => (
                            <AnimatedSection key={p.name}>
                                <motion.div
                                    whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(255,95,0,0.2)' }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white rounded-2xl p-5 border border-primary/8 hover:border-orange/30 group cursor-default"
                                >
                                    <div className="text-3xl mb-3">{p.emoji}</div>
                                    <div className="font-display font-semibold text-primary text-sm mb-1 group-hover:text-orange transition-colors">{p.name}</div>
                                    <div className="text-primary/50 text-xs leading-relaxed">{p.desc}</div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* Results banner */}
                    <AnimatedSection className="mt-16">
                        <div className="bg-primary rounded-3xl p-10 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(255,95,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,0,0.5) 1px, transparent 1px)',
                                    backgroundSize: '32px 32px',
                                }}
                            />
                            <div className="relative z-10 text-center">
                                <p className="text-cream/60 text-sm uppercase tracking-widest mb-4">When These Platforms Come Together Under One Architecture</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {[
                                        ['⚡', 'Work Becomes Faster'],
                                        ['🧠', 'Decisions Become Smarter'],
                                        ['💪', 'Teams Become Stronger'],
                                        ['🚀', 'Business Becomes Future-Ready'],
                                    ].map(([emoji, text]) => (
                                        <div key={text} className="flex flex-col items-center gap-2">
                                            <span className="text-3xl">{emoji}</span>
                                            <span className="text-cream font-semibold text-sm text-center">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── CTA SECTION ──────────────────────────────── */}
            <section className="bg-primary py-28 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/15 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="max-w-3xl mx-auto">
                            <div className="text-6xl mb-6">🏗️</div>
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-cream leading-tight">
                                Let's Build Your
                                <span className="text-orange block mt-2">Digital Future</span>
                            </h2>
                            <p className="mt-6 text-cream/60 text-lg max-w-xl mx-auto">
                                Ready to transform disconnected tools into a unified powerhouse? Let's start with a free consultation.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/#contact"
                                    className="px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-xl shadow-orange/30 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    Book a Free Consultation
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-8 py-4 rounded-xl border border-white/20 text-cream font-semibold text-sm hover:bg-white/5 transition-all duration-200"
                                >
                                    Learn About Us
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
