import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Rocket, Globe, Lightbulb, PartyPopper, TrendingUp, Users, Target,
    RefreshCw, MessageCircle, Brain, Heart, Star, Building2, Briefcase,
    MapPin, Clock, Calendar, FileText, Handshake
} from 'lucide-react';

import bgCareer from '../assets/bg_career.png';
import JobApplicationModal from '../components/JobApplicationModal';

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
    { icon: <Rocket className="w-8 h-8 text-orange" />, title: 'Growth-First Culture', desc: 'Accelerate your career with real-world projects, mentorship, and continuous learning opportunities.' },
    { icon: <Globe className="w-8 h-8 text-orange" />, title: 'Global Exposure', desc: 'Work with international clients across the USA, Middle East, Europe, New Zealand & more.' },
    { icon: <Lightbulb className="w-8 h-8 text-orange" />, title: 'Innovation Hub', desc: 'Build with cutting-edge Microsoft tech — Power Platform, Azure, AI/GPT, SharePoint & M365.' },
    { icon: <PartyPopper className="w-8 h-8 text-orange" />, title: 'Vibrant Workplace', desc: 'Festivals, Fun Fridays, team outings, and celebrations that make work feel like family.' },
    { icon: <TrendingUp className="w-8 h-8 text-orange" />, title: 'Skill Development', desc: 'Microsoft certifications, internal bootcamps, and dedicated learning time every week.' },
    { icon: <Users className="w-8 h-8 text-orange" />, title: 'Collaborative Team', desc: 'A flat hierarchy where every voice matters. We brainstorm, we build, we ship — together.' },
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
    { emoji: <Target className="w-4 h-4" />, label: 'Impact Over Ego' },
    { emoji: <RefreshCw className="w-4 h-4" />, label: 'Iterate Fast' },
    { emoji: <MessageCircle className="w-4 h-4" />, label: 'Radical Transparency' },
    { emoji: <Brain className="w-4 h-4" />, label: 'Always Be Learning' },
    { emoji: <Heart className="w-4 h-4" />, label: 'People Over Process' },
    { emoji: <Star className="w-4 h-4" />, label: 'Client Obsession' },
];

/* ─── Page ──────────────────────────────────────────── */
export default function CareerPage() {
    const [expandedJob, setExpandedJob] = useState(null);
    const [apiJobs, setApiJobs] = useState([]);
    const [jobsLoading, setJobsLoading] = useState(true);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [selectedJobTitle, setSelectedJobTitle] = useState('');

    const openApplyModal = (title) => {
        setSelectedJobTitle(title);
        setIsApplyModalOpen(true);
    };

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/jobs/')
            .then(res => res.json())
            .then(data => { setApiJobs(data); setJobsLoading(false); })
            .catch(() => setJobsLoading(false));
    }, []);

    const displayJobs = apiJobs.length > 0 ? apiJobs : openings;

    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section
                className="relative min-h-[75vh] flex items-center bg-primary overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 31, 84, 1), rgba(0, 31, 84, 0.7)), url(${bgCareer})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%'
                }}
            >
                <div
                    className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.4) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />


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
                            <button
                                onClick={() => openApplyModal('General Application')}
                                className="px-8 py-4 rounded-xl border border-white/20 text-cream font-semibold text-sm hover:bg-white/5 transition-all duration-200 inline-flex items-center gap-2"
                            >
                                <Briefcase size={18} />
                                Apply Now
                            </button>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-8">
                            {[
                                [<Building2 className="w-5 h-5 text-orange" strokeWidth={1.5} />, `${displayJobs.length}+`, 'Open Roles'],
                                [<Globe className="w-5 h-5 text-orange" strokeWidth={1.5} />, '15+', 'Countries Served'],
                                [<Star className="w-5 h-5 text-orange" strokeWidth={1.5} />, '4.8', 'Glassdoor Rating'],
                            ].map(([icon, num, label]) => (
                                <div key={label} className="text-center flex flex-col items-center group">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-3 shadow-lg backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                        {icon}
                                    </div>
                                    <div className="text-3xl font-display font-black text-orange">{num}</div>
                                    <div className="text-cream/50 text-xs mt-1 uppercase tracking-wider font-semibold">{label}</div>
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
                                    <div className="mb-4">{p.icon}</div>
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
                            <Briefcase className="w-4 h-4 text-orange" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Open Positions</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Find Your Perfect Role
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-primary/50 text-base max-w-xl mx-auto">
                            We're looking for talented individuals who want to make an impact with Microsoft technologies.
                        </motion.p>
                    </AnimatedSection>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {jobsLoading ? (
                            <div className="flex justify-center py-20">
                                <div className="w-8 h-8 border-4 border-orange/20 border-t-orange rounded-full animate-spin" />
                            </div>
                        ) : displayJobs.map((job, i) => {
                            const isExpanded = expandedJob === i;
                            // Normalise API shape vs static shape
                            const jobTitle = job.title;
                            const jobLocation = job.location;
                            const jobType = job.employment_type || job.type;
                            const jobDesc = job.description || job.desc;
                            const jobRequirements = job.requirements;
                            const jobExperience = job.experience;
                            const jobSalary = job.salary_range;
                            const jobDept = job.department || job.dept;
                            // skills can be an array (static) or comma-separated string (API)
                            const rawSkills = job.skills;
                            const jobSkills = rawSkills
                                ? (Array.isArray(rawSkills) ? rawSkills : rawSkills.split(',').map(s => s.trim()).filter(Boolean))
                                : null;
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
                                                    <h3 className="font-display font-bold text-primary text-lg">{jobTitle}</h3>
                                                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                                                        {jobDept && (
                                                            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${deptColors[jobDept] || 'bg-orange/10 text-orange border-orange/15'}`}>
                                                                {jobDept}
                                                            </span>
                                                        )}
                                                        <span className="text-primary/40 text-xs flex items-center gap-1"><MapPin className="w-3 h-3" /> {jobLocation}</span>
                                                        <span className="text-primary/40 text-xs">•</span>
                                                        <span className="text-primary/40 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {jobType}</span>
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
                                                            {jobDesc}
                                                        </p>

                                                        {/* Experience + Salary badges */}
                                                        {(jobExperience || jobSalary) && (
                                                            <div className="flex flex-wrap gap-2 mb-5">
                                                                {jobExperience && (
                                                                    <span className="px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-xs font-semibold border border-primary/8">⏱ {jobExperience}</span>
                                                                )}
                                                                {jobSalary && (
                                                                    <span className="px-3 py-1 rounded-full bg-orange/8 text-orange text-xs font-semibold border border-orange/15">💰 {jobSalary}</span>
                                                                )}
                                                            </div>
                                                        )}
                                                        {/* Skills */}
                                                        {jobSkills && jobSkills.length > 0 && (
                                                            <div className="mb-5">
                                                                <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">Required Skills</p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {jobSkills.map(s => (
                                                                        <span key={s} className="px-3 py-1 rounded-full bg-primary/5 text-primary/60 text-xs font-medium border border-primary/8">
                                                                            {s}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {/* Requirements */}
                                                        {jobRequirements && (
                                                            <div className="mb-5">
                                                                <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">Requirements</p>
                                                                <p className="text-primary/60 text-sm leading-relaxed whitespace-pre-line">{jobRequirements}</p>
                                                            </div>
                                                        )}

                                                        {/* Apply button */}
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                openApplyModal(jobTitle);
                                                            }}
                                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-md shadow-orange/15 transition-all duration-200 hover:-translate-y-0.5"
                                                        >
                                                            <Briefcase size={16} />
                                                            Apply
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </AnimatedSection>
                            );
                        })}
                    </div>

                    {/* View all open positions */}
                    <div className="text-center mt-10">
                        <button
                            onClick={() => openApplyModal('Open Application')}
                            className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:underline"
                        >
                            Submit Open Application
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </button>
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
                            { step: '01', icon: <FileText className="w-8 h-8 text-orange" />, title: 'Apply', desc: 'Submit your application right here. We review every single one.' },
                            { step: '02', icon: <MessageCircle className="w-8 h-8 text-orange" />, title: 'Screening Call', desc: 'A quick chat to understand your background, aspirations, and culture fit.' },
                            { step: '03', icon: <Brain className="w-8 h-8 text-orange" />, title: 'Technical Round', desc: 'A hands-on assessment or case study relevant to the role you applied for.' },
                            { step: '04', icon: <Handshake className="w-8 h-8 text-orange" />, title: 'Offer & Onboarding', desc: 'Welcome aboard! Fast-tracked onboarding to get you shipping from day one.' },
                        ].map((s, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    className="relative bg-white rounded-2xl p-6 border border-primary/6 group hover:border-orange/20 transition-all duration-300 h-full"
                                >
                                    <span className="absolute top-4 right-4 text-4xl font-display font-black text-primary/5 group-hover:text-orange/10 transition-colors">
                                        {s.step}
                                    </span>
                                    <div className="mb-4">{s.icon}</div>
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


                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
                            <Target className="w-12 h-12 text-orange mx-auto mb-5" />
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Don't See Your Role?
                                <span className="text-orange block mt-1">Reach Out Anyway.</span>
                            </h2>
                            <p className="mt-5 text-cream/55 text-base leading-relaxed">
                                We're always looking for exceptional people. Send us your profile and let's see if there's a fit.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => openApplyModal('Open Application')}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    <Briefcase size={18} />
                                    Submit Open Application
                                </button>
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

            {/* Modal */}
            <JobApplicationModal
                isOpen={isApplyModalOpen}
                onClose={() => setIsApplyModalOpen(false)}
                jobTitle={selectedJobTitle}
            />
        </div>
    );
}

