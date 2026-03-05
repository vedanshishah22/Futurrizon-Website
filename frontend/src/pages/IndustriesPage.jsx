import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
    Hospital, ShoppingBag, GraduationCap, Factory, Zap, Landmark,
    Truck, Bot, Radio, Building, Heart, MapPin
} from 'lucide-react';

import bgIndustries from '../assets/bg_industries.png?v=3';

const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = '', id = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div id={id} ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
            {children}
        </motion.div>
    );
}

/* ─── Industries Data ─────────────────────────────────────── */
const industriesData = [
    {
        id: 'healthcare',
        title: 'Healthcare & Pharma',
        emoji: <Hospital className="w-8 h-8 text-orange" />,
        problems: [
            'Patient records scattered → compliance risks',
            'Manual scheduling → inefficiency',
            'Limited collaboration among staff',
            'Difficulty meeting HIPAA & data regulations'
        ],
        solutions: [
            'SharePoint patient portals with centralized records',
            'Automated appointment scheduling via Power Automate',
            'Teams-based collaboration for doctors & staff',
            'Compliance-ready workflows with audit trails'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'USA | Multi-Specialty Hospital',
            result: 'Migrated 2,000+ patient files to SharePoint with role-based access, improving compliance and reducing search time by 60%.'
        }
    },
    {
        id: 'retail',
        title: 'E-Commerce & Retail',
        emoji: <ShoppingBag className="w-8 h-8 text-orange" />,
        problems: [
            'Fragmented customer data across systems',
            'Manual order tracking → errors & delays',
            'Low visibility into sales performance',
            'Poor communication between stores & HQ'
        ],
        solutions: [
            'Unified customer data hubs with Dataverse',
            'Automated order tracking with Power Automate',
            'Power BI dashboards for real-time sales insights',
            'Teams & SharePoint portals for store-to-HQ collaboration'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'USA | Retail Chain',
            result: 'Migrated retail operations to Microsoft 365, integrating Teams & SharePoint, reducing order processing errors by 40%.'
        }
    },
    {
        id: 'education',
        title: 'Education & EdTech',
        emoji: <GraduationCap className="w-8 h-8 text-orange" />,
        problems: [
            'Scattered student data → poor academic tracking',
            'Manual exam scheduling & grading',
            'Limited hybrid/remote learning adoption',
            'Compliance issues with student records'
        ],
        solutions: [
            'SharePoint portals for student information',
            'Power Apps for digital exam scheduling & grading',
            'Microsoft Teams for hybrid classrooms',
            'Governance models for secure student data'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'Australia | University',
            result: 'Delivered Microsoft Teams-based hybrid classrooms, increasing faculty-student collaboration by 70% during remote learning.'
        }
    },
    {
        id: 'manufacturing',
        title: 'Manufacturing',
        emoji: <Factory className="w-8 h-8 text-orange" />,
        problems: [
            'Delayed production reporting',
            'Manual inventory tracking → errors',
            'Compliance & safety documentation scattered',
            'Workforce coordination issues on shop floor'
        ],
        solutions: [
            'Power BI dashboards for supply chain visibility',
            'Power Apps for mobile-first inventory tracking',
            'SharePoint portals for safety compliance records',
            'Teams’ collaboration across plants & suppliers'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'Europe | Engineering Firm',
            result: 'Implemented Power BI dashboards, cutting production downtime analysis from 3 days to 3 hours.'
        }
    },
    {
        id: 'energy',
        title: 'Energy & Utilities',
        emoji: <Zap className="w-8 h-8 text-orange" />,
        problems: [
            'Field teams disconnected from HQ',
            'Manual outage & inspection reporting',
            'Compliance with safety/environmental rules',
            'Outdated IT slowing modernization'
        ],
        solutions: [
            'Power Apps for mobile inspection & reporting',
            'Power BI dashboards for outage tracking',
            'SharePoint compliance document portals',
            'Azure-based infrastructure modernization'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'USA | Energy Utility',
            result: 'Implemented Power Apps for field inspections, reducing reporting delays from 48 hours to real-time updates.'
        }
    },
    {
        id: 'finance',
        title: 'Finance & Banking',
        emoji: <Landmark className="w-8 h-8 text-orange" />,
        problems: [
            'Endless manual loan approvals',
            'Delayed financial reporting',
            'Strict compliance (SOX, GDPR, etc.)',
            'Limited fraud detection systems'
        ],
        solutions: [
            'Automated approval workflows for loans & invoices',
            'Power BI dashboards with real-time KPIs',
            'Compliance frameworks within Microsoft 365',
            'AI-driven anomaly detection'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'USA | Financial Consultancy',
            result: 'Migrated Microsoft 365 to Google Workspace with dual delivery, ensuring zero downtime and smooth compliance.'
        }
    },
    {
        id: 'logistics',
        title: 'Transportation & Logistics',
        emoji: <Truck className="w-8 h-8 text-orange" />,
        problems: [
            'Shipments hard to track → delays & unhappy customers',
            'Manual paperwork for logistics → errors & compliance issues',
            'Poor visibility into fleet performance & fuel consumption',
            'Coordination gaps between drivers, warehouses, and HQ'
        ],
        solutions: [
            'Power Apps for mobile shipment & fleet tracking',
            'Automated logistics workflows → from booking to invoicing',
            'Power BI dashboards for real-time supply chain visibility',
            'Azure IoT integration for smart fleet monitoring'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'USA | Global Logistics Firm',
            result: 'Developed a Power BI-driven supply chain dashboard, cutting delivery delays by 25% and improving customer satisfaction scores.'
        }
    },
    {
        id: 'chatbots',
        title: 'AI Chatbots & Automation',
        emoji: <Bot className="w-8 h-8 text-orange" />,
        problems: [
            'Support teams overloaded with repetitive queries',
            'Delayed responses → poor customer experience',
            'Manual support ticket logging in Excel or email',
            'Support availability restricted to business hours only'
        ],
        solutions: [
            'AI & GPT-powered Virtual Agents trained on FAQs',
            'Integrations with Teams, SharePoint, CRM',
            'Auto-ticket creation & routing via Power Automate',
            '24×7 support chatbot for instant replies & resolution'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'Saudi Arabia | D2C Cosmetic Brand',
            result: 'Launched a GPT-powered customer support bot answering 82% of queries without human intervention, reducing support workload by 40%.'
        }
    },
    {
        id: 'telecom',
        title: 'Telecommunications & IT',
        emoji: <Radio className="w-8 h-8 text-orange" />,
        problems: [
            'Disconnected customer support channels → slow resolution',
            'Manual ticketing & service request tracking',
            'Difficulty coordinating field engineers',
            'Compliance challenges with telecom regulations'
        ],
        solutions: [
            'Power Apps & Teams for centralized service requests',
            'Automated ticket routing workflows via Power Automate',
            'Power BI dashboards for real-time network monitoring',
            'Azure-based cloud solutions for scalable infrastructure'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'UAE | Telecom Service Provider',
            result: 'Implemented Power BI & Power Automate for ticket tracking, reducing service resolution time by 35%.'
        }
    },
    {
        id: 'construction',
        title: 'Construction & Real Estate',
        emoji: <Building className="w-8 h-8 text-orange" />,
        problems: [
            'Project plans scattered across emails & paper',
            'Manual progress tracking → missed deadlines',
            'Safety checklists not consistently documented',
            'Difficulty consolidating reports from multiple sites'
        ],
        solutions: [
            'Power Apps for site progress & safety inspections',
            'SharePoint as central hub for drawings & approvals',
            'Power BI project dashboards for cost & timeline tracking',
            'Automated workflows to escalate delays to stakeholders'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'Middle East | Real Estate Developer',
            result: 'Implemented Power Apps + Power BI for site reporting → 20% faster project execution & 30% reduction in reporting delays.'
        }
    },
    {
        id: 'nonprofit',
        title: 'Non-Profit Organizations',
        emoji: <Heart className="w-8 h-8 text-orange" />,
        problems: [
            'Donor databases scattered across Excel & emails',
            'Low visibility into fund utilization & impact',
            'Difficult maintaining volunteer participation',
            'Lack of centralized documentation for audits'
        ],
        solutions: [
            'Power Apps for donor & volunteer management',
            'SharePoint for program documentation & compliance',
            'Power BI impact dashboards showing fund allocation',
            'Power Automate workflows for donation confirmations'
        ],
        caseStudy: {
            flag: <MapPin className="w-4 h-4 inline text-orange" />, locale: 'Australia | NGO',
            result: 'Digitized donor tracking using Power Apps + Power BI, resulting in 60% faster reporting & improved transparency.'
        }
    }
];

export default function IndustriesPage() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // setTimeout ensures the DOM is fully painted and the elements have height before scrolling
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section
                className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 31, 84, 1), rgba(0, 31, 84, 0.7)), url(${bgIndustries})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%'
                }}
            >
                <div className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.4) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-10 -left-28 w-[500px] h-[500px] bg-orange/12 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/8 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Sectors</span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight">
                            Future Ready Digital Solutions <br />
                            <span className="text-orange">For Every Industry</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-6 text-cream/70 text-xl max-w-2xl leading-relaxed">
                            Every industry has its own set of pain points. Whatever your industry, Futurrizon
                            delivers future-ready solutions that turn everyday challenges into growth opportunities.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
                        <path d="M0 60 L0 30 Q300 0 600 30 Q900 60 1200 30 L1200 60 Z" fill="#FFFAE6" />
                    </svg>
                </div>
            </section>

            {/* ── INDUSTRIES LIST ───────────────────────────── */}
            <section className="bg-cream py-20 pb-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="space-y-16">
                        {industriesData.map((ind, index) => (
                            <AnimatedSection key={ind.id} id={ind.id} className="scroll-mt-32">
                                <motion.div
                                    variants={fadeUp}
                                    className="bg-white rounded-3xl p-8 lg:p-12 border border-primary/6 hover:shadow-2xl hover:shadow-orange/5 transition-all duration-500 overflow-hidden relative group"
                                >
                                    {/* Accent line on left or right depending on index */}
                                    <div
                                        className={`absolute top-0 bottom-0 w-2 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out ${index % 2 === 0
                                            ? 'left-0 bg-gradient-to-b from-orange to-peach'
                                            : 'right-0 bg-gradient-to-b from-[#002379] to-[#005bb5]'
                                            }`}
                                    />

                                    <div className="flex flex-col lg:flex-row gap-12 relative z-10">

                                        {/* Left Side: Title & Pain Points */}
                                        <div className="lg:w-1/2 flex flex-col">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center text-3xl font-display shadow-inner">
                                                    {ind.emoji}
                                                </div>
                                                <h2 className="text-3xl font-display font-bold text-primary tracking-tight">
                                                    {ind.title}
                                                </h2>
                                            </div>

                                            <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/10 flex-1">
                                                <h3 className="text-red-600 font-bold mb-4 flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                                    Problems Faced
                                                </h3>
                                                <ul className="space-y-3">
                                                    {ind.problems.map((p, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-primary/60 text-sm leading-relaxed">
                                                            <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Right Side: Solutions & Case Study */}
                                        <div className="lg:w-1/2 flex flex-col gap-6">
                                            <div className="bg-green-500/5 rounded-2xl p-6 border border-green-500/10 flex-1">
                                                <h3 className="text-green-600 font-bold mb-4 flex items-center gap-2">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                    Our Solutions
                                                </h3>
                                                <ul className="space-y-3">
                                                    {ind.solutions.map((s, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-primary/60 text-sm leading-relaxed">
                                                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                                                            {s}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Mini Case Study */}
                                            <div className="bg-gradient-to-r from-orange/10 to-transparent rounded-2xl p-6 border border-orange/20 relative overflow-hidden">
                                                {/* Decorative background mark */}
                                                <div className="absolute -right-8 -bottom-8 opacity-25 transform -rotate-12 pointer-events-none text-orange/50 transition-all duration-300">
                                                    {ind.emoji && React.cloneElement(ind.emoji, { className: "w-64 h-64 stroke-1" })}
                                                </div>

                                                <h4 className="text-orange font-bold mb-4 flex items-center gap-2">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                                    Mini Case Study
                                                </h4>
                                                <div className="text-primary font-semibold text-sm mb-2 opacity-90">
                                                    {ind.caseStudy.flag} {ind.caseStudy.locale}
                                                </div>
                                                <p className="text-primary/70 text-sm italic leading-relaxed">
                                                    "{ind.caseStudy.result}"
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOTTOM CTA ────────────────────────────────── */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.6) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection>
                        <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
                            <h2 className="text-4xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Ready to transform your
                                <span className="text-orange block mt-2">industry operations?</span>
                            </h2>
                            <p className="mt-6 text-cream/70 text-lg leading-relaxed">
                                Let's build a custom digital solution tailored to your specific business challenges.
                            </p>
                            <a
                                href="/#contact"
                                className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-lg hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                Get a Free Consultation
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </section>

        </div>
    );
}
