import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, ClipboardList, Briefcase, Building2, Zap, BarChart, Cloud, Bot, Handshake, Palette, Target, Lightbulb, TrendingUp, Lock, Globe, Rocket } from 'lucide-react';
import bgOurTeam from '../assets/bg_OurTeam.jpg';
import yasheshImg from '../assets/Yashesh Sir.png';

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
        icon: <Briefcase className="w-12 h-12 text-white" strokeWidth={1.5} />,
        image: yasheshImg,
        linkedin: 'https://www.linkedin.com/in/yasheshnagori/',
    },
];

const teamMembers = [
    { name: 'SharePoint Team', count: '6+', icon: <Building2 className="w-8 h-8 text-blue-600" strokeWidth={1.5} />, desc: 'SPFx, Intranets, Document Mgmt, Custom Solutions', color: 'bg-blue-500/10 text-blue-600 border-blue-500/15' },
    { name: 'Power Platform Team', count: '4+', icon: <Zap className="w-8 h-8 text-purple-600" strokeWidth={1.5} />, desc: 'Power Apps, Power Automate, Dataverse, Integration', color: 'bg-purple-500/10 text-purple-600 border-purple-500/15' },
    { name: 'Power BI & Analytics', count: '8+', icon: <BarChart className="w-8 h-8 text-green-600" strokeWidth={1.5} />, desc: 'Dashboards, DAX, Data Modeling, ETL Pipelines', color: 'bg-green-500/10 text-green-600 border-green-500/15' },
    { name: 'Azure & Cloud', count: '2+', icon: <Cloud className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />, desc: 'Infrastructure, Migration, DevOps, Security', color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/15' },
    { name: 'AI & GPT', count: '10+', icon: <Bot className="w-8 h-8 text-orange" strokeWidth={1.5} />, desc: 'Chatbots, Copilot, Automation, Knowledge Systems', color: 'bg-orange/10 text-orange border-orange/15' },
    { name: 'M365 Consulting', count: '3+', icon: <Briefcase className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />, desc: 'Tenant Setup, Governance, Adoption, Training', color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/15' },
    { name: 'Business Development', count: '2+', icon: <Handshake className="w-8 h-8 text-pink-600" strokeWidth={1.5} />, desc: 'Client Relations, Proposals, Global Outreach', color: 'bg-pink-500/10 text-pink-600 border-pink-500/15' },
    { name: 'UI/UX & Design', count: '2+', icon: <Palette className="w-8 h-8 text-yellow-700" strokeWidth={1.5} />, desc: 'Brand Design, Web Development, User Experience', color: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/15' },
];

const values = [
    { icon: <Target className="w-8 h-8 text-orange" strokeWidth={1.5} />, title: 'Client-First', desc: 'Every decision is rooted in delivering real value to our clients.' },
    { icon: <Lightbulb className="w-8 h-8 text-orange" strokeWidth={1.5} />, title: 'Innovation', desc: 'We push boundaries with AI, automation, and modern architecture.' },
    { icon: <Users className="w-8 h-8 text-orange" strokeWidth={1.5} />, title: 'Collaboration', desc: 'Flat hierarchy where ideas flow freely and every voice matters.' },
    { icon: <TrendingUp className="w-8 h-8 text-orange" strokeWidth={1.5} />, title: 'Growth', desc: 'Continuous learning, certifications, and career acceleration.' },
    { icon: <Lock className="w-8 h-8 text-orange" strokeWidth={1.5} />, title: 'Trust', desc: 'Enterprise-grade security and transparency in everything we do.' },
    { icon: <Globe className="w-8 h-8 text-orange" strokeWidth={1.5} />, title: 'Global Impact', desc: 'Serving clients across 5+ countries with local expertise.' },
];

export default function OurTeamPage() {
    const [apiTeam, setApiTeam] = useState([]);
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - 2021; // Founded around 2022, 5+ in 2026

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/team/')
            .then(res => res.json())
            .then(data => setApiTeam(data))
            .catch(() => { });
    }, []);

    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden"
                style={{
                    backgroundImage: `url(${bgOurTeam})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-primary/85" />

                <div className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.4) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />


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

                        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-8">
                            {[
                                [<Users className="w-6 h-6 text-orange group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />, '20+', 'Team Members'],
                                [<Trophy className="w-6 h-6 text-orange group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />, `${yearsExperience}+`, 'Years Expertise'],
                                [<ClipboardList className="w-6 h-6 text-orange group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />, '100+', 'Projects'],
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

            {/* ── LEADERSHIP ────────────────────────────────── */}
            <section className="bg-cream py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-peach/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Leadership</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-display font-bold text-primary">
                            The Vision Behind Futurrizon
                        </motion.h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">
                        {/* ── Left Column: Profile Card ── */}
                        <div className="lg:col-span-4 lg:sticky top-24">
                            {leadership.map((leader) => (
                                <AnimatedSection key={leader.name}>
                                    <motion.div
                                        variants={fadeUp}
                                        className="bg-white rounded-3xl p-8 border border-primary/6 shadow-xl shadow-orange/5"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            {leader.image ? (
                                                <div className="w-full max-w-sm rounded-3xl overflow-hidden mb-6 shadow-lg bg-orange/5">
                                                    <img src={leader.image} alt={leader.name} className="w-full h-auto object-contain" />
                                                </div>
                                            ) : (
                                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-orange to-peach flex items-center justify-center shadow-lg shadow-orange/20 mb-6">
                                                    {leader.icon}
                                                </div>
                                            )}
                                            <h3 className="text-2xl font-display font-bold text-primary">{leader.name}</h3>
                                            <p className="text-orange font-semibold text-sm mt-1 mb-6">{leader.role}</p>

                                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                                {leader.expertise.map(s => (
                                                    <span key={s} className="px-3 py-1.5 rounded-full bg-primary/5 text-primary/70 text-xs font-medium border border-primary/8">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>

                                            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                                                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-orange/10 text-orange font-semibold text-sm hover:bg-orange hover:text-white transition-all duration-300">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                                Connect on LinkedIn
                                            </a>
                                        </div>
                                    </motion.div>
                                </AnimatedSection>
                            ))}
                        </div>

                        {/* ── Right Column: Content ── */}
                        <div className="lg:col-span-8">
                            <AnimatedSection>
                                <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 md:p-12 border border-primary/6 shadow-xl shadow-primary/5">
                                    <div className="prose prose-lg prose-orange max-w-none">
                                        <p className="text-primary/70 leading-relaxed text-lg mb-6">
                                            At the core of Futurrizon Technologies stands <strong className="text-primary font-bold">Yashesh Nagori</strong>, a forward-thinking leader who believes technology should simplify business, not complicate it. His vision is rooted in one principle: <span className="text-orange font-medium">digital solutions must empower people, unlock efficiency, and create measurable impact.</span>
                                        </p>
                                        <p className="text-primary/70 leading-relaxed text-lg mb-6">
                                            With deep expertise in Microsoft 365, SharePoint, Power Platform, Azure, and AI-driven automation, he has guided organizations to rethink the way they operate. Under his leadership, Futurrizon goes beyond implementation. It transforms systems into intelligent ecosystems that enhance collaboration, streamline processes, and turn data into strategic advantage.
                                        </p>
                                        <p className="text-primary/70 leading-relaxed text-lg mb-10">
                                            Yashesh brings a practical yet innovative mindset to every engagement. By aligning technology with real business objectives, he ensures that every solution is purpose-driven and future-ready.
                                        </p>

                                        <h3 className="text-2xl font-display font-bold text-primary mb-8 flex items-center gap-3">
                                            <span className="w-8 h-[2px] bg-orange rounded-full"></span>
                                            What Drives His Leadership
                                        </h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                            <div className="bg-orange/5 rounded-2xl p-6 border border-orange/10 hover:shadow-md transition-shadow">
                                                <div className="mb-4 bg-orange/10 w-12 h-12 rounded-xl flex items-center justify-center"><Lightbulb className="w-6 h-6 text-orange" strokeWidth={1.5} /></div>
                                                <h4 className="font-bold text-primary text-xl mb-3">Innovation with Purpose</h4>
                                                <p className="text-primary/60 text-sm leading-relaxed">
                                                    Building solutions that address real operational challenges and deliver tangible business outcomes.
                                                </p>
                                            </div>
                                            <div className="bg-blue-500/5 rounded-2xl p-6 border border-blue-500/10 hover:shadow-md transition-shadow">
                                                <div className="mb-4 bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center"><Handshake className="w-6 h-6 text-blue-500" strokeWidth={1.5} /></div>
                                                <h4 className="font-bold text-primary text-xl mb-3">People-First Technology</h4>
                                                <p className="text-primary/60 text-sm leading-relaxed">
                                                    Designing systems that empower teams to work smarter, collaborate better, and adapt faster.
                                                </p>
                                            </div>
                                            <div className="bg-green-500/5 rounded-2xl p-6 border border-green-500/10 sm:col-span-2 hover:shadow-md transition-shadow">
                                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                                    <div className="bg-green-500/10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0"><Globe className="w-7 h-7 text-green-500" strokeWidth={1.5} /></div>
                                                    <div>
                                                        <h4 className="font-bold text-primary text-xl mb-2">Global Impact</h4>
                                                        <p className="text-primary/60 text-sm leading-relaxed">
                                                            Enabling digital transformation across industries including finance, retail, healthcare, manufacturing, and non-profits.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-primary/70 leading-relaxed text-lg mb-10">
                                            Under his direction, Futurrizon has become more than a technology partner. It is a transformation partner committed to helping organizations modernize with confidence and clarity.
                                        </p>

                                        <blockquote className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary to-[#00154a] text-cream shadow-2xl overflow-hidden mt-8">
                                            <div className="absolute top-0 right-0 text-[160px] text-white/5 font-serif leading-none -mt-8 mr-2 select-none pointer-events-none">"</div>
                                            <p className="relative z-10 text-xl font-medium leading-relaxed italic text-cream/90">
                                                "Our goal is simple: to help businesses work smarter, collaborate better, and grow faster using technology that adapts to their unique needs."
                                            </p>
                                        </blockquote>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TEAMS ─────────────────────────────────────── */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <Building2 className="w-3.5 h-3.5 text-orange" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our Teams</span>
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
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-primary/5 shadow-sm flex items-center justify-center">
                                            {t.icon}
                                        </div>
                                        <span className={`text-base font-display font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5 ${t.color}`}>
                                            <Users className="w-3.5 h-3.5" strokeWidth={2} />
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

            {/* ── DYNAMIC TEAM MEMBERS ───────────────────────── */}
            {apiTeam.length > 0 && (
                <section className="bg-cream py-20">
                    <div className="container mx-auto px-6">
                        <AnimatedSection className="text-center mb-14">
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                                <Users className="w-3.5 h-3.5 text-orange" />
                                <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our People</span>
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                                Meet the Team
                            </motion.h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {apiTeam.map((member) => (
                                <AnimatedSection key={member.id}>
                                    <motion.div
                                        variants={fadeUp}
                                        whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(255,95,0,0.1)' }}
                                        className="bg-white rounded-3xl p-6 border border-primary/6 group hover:border-orange/20 transition-all duration-300 h-full flex flex-col text-center items-center"
                                    >
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-orange/10 border border-orange/15 mb-4 flex items-center justify-center">
                                            {member.photo ? (
                                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <Users className="w-8 h-8 text-orange/50" strokeWidth={1.5} />
                                            )}
                                        </div>
                                        <h3 className="font-display font-bold text-primary text-lg group-hover:text-orange transition-colors">{member.name}</h3>
                                        <p className="text-orange text-sm font-semibold mt-0.5 mb-3">{member.role}</p>
                                        <p className="text-primary/50 text-sm leading-relaxed flex-1">{member.bio}</p>
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                                                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange/8 text-orange text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                                LinkedIn
                                            </a>
                                        )}
                                    </motion.div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
                                    <div className="w-14 h-14 rounded-2xl bg-orange/5 border border-orange/10 shadow-sm flex items-center justify-center mb-5 group-hover:bg-orange/10 group-hover:scale-110 transition-all duration-300">
                                        {v.icon}
                                    </div>
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

                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
                            <div className="w-20 h-20 mx-auto rounded-3xl bg-orange/20 border border-orange/30 shadow-xl shadow-orange/20 flex items-center justify-center mb-6">
                                <Rocket className="w-10 h-10 text-orange" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-cream leading-tight">
                                Want to Join
                                <span className="text-orange block mt-1">Our Team?</span>
                            </h2>
                            <p className="mt-5 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                                We're always looking for talented, passionate people who love building with Microsoft technologies. Check out our open positions and come grow with us.
                            </p>



                            <a
                                href="/career"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5"
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
