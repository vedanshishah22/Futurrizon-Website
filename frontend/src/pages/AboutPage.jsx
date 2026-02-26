import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    History,
    Cpu,
    Compass,
    Award,
    Gem,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Shield,
    Zap,
    Rocket,
    Search,
    Users,
    BarChart3,
    Layers,
    Smartphone,
    Cloud,
    Bot,
    Star
} from 'lucide-react';

// Brand Logos
import m365Logo from '../assets/logos/Microsoft_365.svg.svg';
import powerPlatformLogo from '../assets/logos/microsoft_power_platform.svg';
import azureLogo from '../assets/logos/azure.svg';
import aiLogo from '../assets/logos/ai-builder.png';
import qualityBg from '../assets/bg-primary.jpg';
import approach1 from '../assets/approach 1.jpg';
import approach2 from '../assets/approach 2.png';
import approach3 from '../assets/approach 3.jpg';
import approach4 from '../assets/approach 4.jpg';
import officeImg from '../assets/office.webp';
import bgImage from '../assets/bg.png';

const AboutPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 500);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-cream text-primary overflow-x-hidden relative">
            {/* Background Image - SUBTLE Layering */}
            <div
                className="fixed inset-0 z-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            {/* HERO */}
            <section className="pt-32 pb-20 bg-primary text-white relative">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Our <span className="text-orange">Excellence</span> Journey
                    </h1>
                    <p className="text-xl md:text-2xl text-cream/70 max-w-3xl mx-auto leading-relaxed">
                        Redesigning the way businesses operate through intelligent digital architecture.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 max-w-6xl pb-32">

                {/* 1. OUR STORY */}
                <section id="our-story" className="py-12 scroll-mt-24">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 text-orange font-bold uppercase text-sm mb-6">
                                <History size={20} />
                                <span>Our Story</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Founded in 2022</h2>
                            <p className="text-lg text-primary/70 mb-6">Organizations struggle because they lack the right digital architecture. At Futurrizon, we transform manual operations into smart, automated ecosystems.</p>
                            <div className="p-6 bg-white border-l-4 border-orange rounded-r-2xl shadow-md">
                                <p className="text-primary font-bold italic">"We do not just implement technology. We redesign the way businesses operate."</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="aspect-video bg-white/50 rounded-3xl border border-primary/5 flex items-center justify-center overflow-hidden shadow-lg">
                                <img src={officeImg} alt="Story" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. OUR TECHNOLOGY */}
                <section id="our-technology" className="py-12 scroll-mt-24">
                    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-lg">
                        <div className="flex items-center gap-3 text-orange font-bold uppercase text-sm mb-6">
                            <Cpu size={20} />
                            <span>Our Technology</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Microsoft Cloud Ecosystem</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: 'Microsoft 365', logo: m365Logo, desc: 'Connected Collaboration With Teams, SharePoint & Outlook' },
                                { title: 'Power Platform', logo: powerPlatformLogo, desc: 'Power Apps, Power Automate & Power BI For Automation & Insights' },
                                { title: 'Azure Cloud', logo: azureLogo, desc: 'Secure, Scalable & Intelligent Infrastructure' },
                                { title: 'AI & GPT', logo: aiLogo, desc: 'Smart Assistants, Knowledge Bots & Automated Intelligence' }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-cream/50 rounded-2xl border border-primary/5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 rounded-xl shadow-md p-2">
                                        <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
                                    </div>
                                    <h4 className="font-extrabold text-xl mb-2">{item.title}</h4>
                                    <p className="text-sm text-primary/60 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 bg-primary p-8 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Technology That Grows With Your Business</h3>
                            <p className="opacity-70 mb-6">We build high-performance execution, advanced security, and seamless integration into every solution.</p>
                            <Link to="/#contact" className="text-orange font-bold flex items-center gap-2">Contact Us <ArrowRight size={20} /></Link>
                        </div>
                    </div>
                </section>

                {/* 3. OUR APPROACH */}
                <section id="our-approach" className="py-12 scroll-mt-24">
                    <div className="flex items-center gap-3 text-orange font-bold uppercase text-sm mb-6 justify-center">
                        <Compass size={20} />
                        <span>Our Approach</span>
                    </div>
                    <h2 className="text-4xl text-center md:text-5xl font-extrabold mb-12">Technology Must Adapt To You</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Listen & Discover', icon: <Search />, desc: 'Understand Challenges, Workflows & Business Goals', bg: approach1 },
                            { step: '02', title: 'Design & Co-Build', icon: <Layers />, desc: 'Create User-Centered Digital Experiences', bg: approach2 },
                            { step: '03', title: 'Automate & Deploy', icon: <Rocket />, desc: 'Enable Seamless Adoption Across Departments', bg: approach3 },
                            { step: '04', title: 'Train & Support', icon: <Users />, desc: 'Boost User Productivity With Continuous Improvement', bg: approach4 }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white rounded-3xl shadow-md border border-primary/5 text-center transition-all hover:-translate-y-2 relative overflow-hidden group">
                                {/* Card Background Image */}
                                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                    <img src={item.bg} alt="" className="w-full h-full object-cover" />
                                </div>

                                <div className="relative z-10">
                                    <div className="text-orange font-bold text-lg mb-4">{item.step}</div>
                                    <div className="mb-4 flex justify-center text-primary/20">{item.icon}</div>
                                    <h4 className="text-xl font-extrabold mb-3">{item.title}</h4>
                                    <p className="text-sm text-primary/60 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. OUR EXPERTISE */}
                <section id="our-expertise" className="py-12 scroll-mt-24">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 text-orange font-bold uppercase text-sm mb-6">
                                <Award size={20} />
                                <span>Our Expertise</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Certified Professionals</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Process Engineering', 'Workflow Automation', 'Data Visualization', 'Executive Reporting', 'Governance & Security', 'Modern Workplace'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
                                        <CheckCircle2 className="text-orange" size={18} />
                                        <span className="font-bold text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-white rounded-[3rem] p-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-8">Industry-Specific Solutions</h3>
                            <div className="flex flex-wrap gap-3 mb-12">
                                {['Manufacturing', 'Retail', 'Finance', 'Construction', 'Professional Services'].map((industry, i) => (
                                    <span key={i} className="px-5 py-2.5 bg-cream rounded-xl text-primary font-bold text-sm">{industry}</span>
                                ))}
                            </div>
                            <div className="p-8 bg-primary rounded-3xl text-white text-center">
                                <Zap className="mx-auto mb-4 text-orange" size={40} />
                                <h4 className="text-2xl font-extrabold mb-2">Solving Business Bottlenecks</h4>
                                <p className="opacity-70">We delivery digital excellence through strategic architecture.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. OUR QUALITY */}
                <section id="our-quality" className="py-12 scroll-mt-24">
                    <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
                        {/* Background Image Overlay */}
                        <div className="absolute inset-0 z-0 opacity-20 transform hover:scale-105 transition-transform duration-700">
                            <img
                                src={qualityBg}
                                alt="Quality Background"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 text-orange font-bold uppercase text-sm mb-6 relative z-10">
                                    <Gem size={20} />
                                    <span>Our Quality</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10">On Partnership</h2>
                                <p className="text-xl text-cream/70 leading-relaxed mb-6 italic relative z-10">"We don't just implement technology... We make sure it works for your business."</p>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md relative z-10">
                                    <div className="text-xl font-extrabold">One Mission. One Successful Transformation.</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: 'Project Champions', icon: <Star /> },
                                    { title: 'Weekly Check-ins', icon: <Rocket /> },
                                    { title: 'Progress Dashboards', icon: <BarChart3 /> },
                                    { title: 'Change Adoption', icon: <Users /> }
                                ].map((pillar, i) => (
                                    <div key={i} className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm relative z-10 transition-all hover:bg-white/10">
                                        <div className="text-orange">{pillar.icon}</div>
                                        <h4 className="font-bold text-lg">{pillar.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. OUR COMMUNICATION */}
                <section id="our-communication" className="py-12 scroll-mt-24">
                    <div className="flex justify-center items-center gap-3 text-orange font-bold uppercase text-sm mb-6">
                        <MessageSquare size={20} />
                        <span>Our Communication</span>
                    </div>
                    <h2 className="text-4xl text-center md:text-5xl font-extrabold mb-6">Clarity Into Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: 'High-Speed Execution', icon: <Zap /> },
                            { title: 'Secure-By-Default', icon: <Shield /> },
                            { title: 'Mobile-First UX', icon: <Smartphone /> },
                            { title: 'Quality Validation', icon: <CheckCircle2 /> },
                            { title: 'Sustainable Growth', icon: <Layers /> }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-white border border-primary/5 rounded-3xl text-center hover:shadow-lg transition-all">
                                <div className="w-16 h-16 rounded-full bg-cream mx-auto mb-6 flex items-center justify-center text-orange">{item.icon}</div>
                                <h4 className="text-xl font-extrabold">{item.title}</h4>
                            </div>
                        ))}
                        <div className="lg:col-span-1 p-8 bg-orange rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-lg">
                            <h4 className="text-xl font-extrabold mb-4 italic">"Your success isn't a metric, it's our mission."</h4>
                            <p className="font-bold opacity-80 uppercase text-xs">Futurrizon Team</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-extrabold mb-12">We transform complexity into clarity.</p>
                        <div className="h-px w-32 bg-orange mx-auto"></div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default AboutPage;
