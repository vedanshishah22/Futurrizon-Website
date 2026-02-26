import React, { useEffect } from 'react';
// Force refresh for UI consistency
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, blogs } from '../data/projects';
import {
    Lock,
    Database,
    Clock,
    AlertTriangle,
    TrendingUp,
    Zap,
    Settings,
    Activity,
    CheckCircle2,
    ArrowLeft,
    Layers,
    Target,
    Cpu,
    BarChart3,
    ShieldCheck,
    Bell,
    History,
    ChevronRight
} from 'lucide-react';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
                <h2 className="text-3xl font-bold text-navy mb-4">Project Not Found</h2>
                <p className="text-gray-500 mb-8">The project you are looking for does not exist or has been moved.</p>
                <Link to="/" className="px-6 py-3 bg-navy text-white rounded-full font-bold hover:bg-navy/90 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    const featureIcons = [
        <Layers className="w-5 h-5" />,
        <ShieldCheck className="w-5 h-5" />,
        <Bell className="w-5 h-5" />,
        <BarChart3 className="w-5 h-5" />,
        <History className="w-5 h-5" />,
        <Cpu className="w-5 h-5" />
    ];

    const getChallengeIcon = (text) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('security') || lowerText.includes('access')) return <Lock className="w-5 h-5" />;
        if (lowerText.includes('manual') || lowerText.includes('delay') || lowerText.includes('time')) return <Clock className="w-5 h-5" />;
        if (lowerText.includes('data') || lowerText.includes('centralized')) return <Database className="w-5 h-5" />;
        if (lowerText.includes('error') || lowerText.includes('risk') || lowerText.includes('bottleneck')) return <AlertTriangle className="w-5 h-5" />;
        if (lowerText.includes('workflow') || lowerText.includes('trigger') || lowerText.includes('process')) return <Settings className="w-5 h-5" />;
        if (lowerText.includes('report') || lowerText.includes('visibility')) return <TrendingUp className="w-5 h-5" />;
        return <Activity className="w-5 h-5" />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white"
        >
            {/* ── HERO SECTION ── */}
            <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
                {/* Full Screen Background Image - High Impact */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0, y: 0 }}
                        animate={{ scale: 1, opacity: 0.2, y: 60 }}
                        transition={{ duration: 1.5 }}
                        src={project.heroBackground || project.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    {/* Lightened Cream Gradient Overlay for better image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFFAE6]/15 via-[#FFFAE6]/60 to-[#FFFAE6]" />
                </div>

                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <Link
                        to="/#portfolio"
                        className="inline-flex items-center text-navy/60 hover:text-navy font-semibold mb-6 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Portfolio
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                        <div className="text-left">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-3 py-1 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-widest mb-3"
                            >
                                {project.tag}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl md:text-4xl font-bold text-navy leading-tight"
                            >
                                {project.title}
                            </motion.h1>
                        </div>

                        <div className="lg:pl-8 border-l-0 lg:border-l border-navy/10 pb-1">
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-sm md:text-base text-navy/70 leading-relaxed font-medium"
                            >
                                {project.summary}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECT OVERVIEW ── */}
            <section className="py-12 bg-white">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-navy mb-2">Project Overview</h2>
                            <p className="text-lg text-navy/70 leading-relaxed mb-6">
                                {project.overview}
                            </p>
                        </div>
                        <div className="bg-navy/[0.02] p-8 rounded-3xl border border-navy/5 h-fit">
                            <h3 className="font-bold text-navy mb-6 flex items-center">
                                <Target className="w-5 h-5 mr-3 text-orange" />
                                Project Goal
                            </h3>
                            <p className="text-navy/60 text-sm leading-relaxed">
                                To deliver a highly scalable {project.tag} solution that empowers the client to achieve
                                operational excellence through {project.technologies[0]} and {project.technologies[window.innerWidth > 768 ? 1 : 0]}.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CHALLENGES ── */}
            <section className="py-12 bg-navy/[0.02]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-2xl font-bold text-navy mb-3">Challenges Faced</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.challenges.map((challenge, idx) => (
                            <div key={idx} className="flex flex-col items-start p-5 bg-white rounded-2xl border border-navy/5 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4 text-red-500">
                                    {getChallengeIcon(challenge)}
                                </div>
                                <p className="text-navy/80 font-medium text-sm leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SOLUTION ARCHITECTURE ── */}
            <section className="py-12 bg-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-bold text-navy mb-2">Solution Architecture</h2>
                            <p className="text-lg text-navy/70 leading-relaxed mb-8">
                                {project.solution}
                            </p>
                            <div className="space-y-4">
                                {['Automated Lifecycle Management', 'Enterprise Data Integration', 'Secure Identity Access'].map((item, i) => (
                                    <div key={i} className="flex items-center text-navy font-semibold text-base">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="w-full aspect-square bg-navy rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-150" />
                            <div className="grid grid-cols-2 gap-4 relative z-10 p-4">
                                {project.technologies.slice(0, 4).map((tech, i) => (
                                    <div key={i} className="bg-white p-8 rounded-3xl border border-navy/5 shadow-md flex flex-col items-center justify-center text-center">
                                        <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center mb-4">
                                            <Layers className="w-6 h-6 text-navy" />
                                        </div>
                                        <span className="font-bold text-navy text-xs uppercase tracking-wider">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY FEATURES ── */}
            <section className="py-12 bg-navy/[0.02]">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-2xl font-bold text-navy mb-3">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-navy/5 shadow-sm group hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-xl bg-orange/5 flex items-center justify-center mb-4 text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                                    {React.cloneElement(featureIcons[idx % featureIcons.length], { className: "w-5 h-5" })}
                                </div>
                                <h3 className="text-base font-bold text-navy mb-2 leading-tight">{feature.title}</h3>
                                <p className="text-sm text-navy/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BUSINESS IMPACT ── */}
            <section className="py-12 bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange/20 to-transparent pointer-events-none" />
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <h2 className="text-2xl font-bold mb-3">Business Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                            <div className="text-5xl font-bold text-orange mb-4">{project.impact.timeReduction}</div>
                            <div className="text-lg font-bold mb-2">Efficiency Gain</div>
                            <p className="text-white/60 text-base">Reduced overall processing and approval time through deep automation.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                            <BarChart3 className="w-10 h-10 text-orange mb-6" />
                            <div className="text-lg font-bold mb-2">Strategic Insight</div>
                            <p className="text-white/60 text-base">{project.impact.efficiency}</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10">
                            <CheckCircle2 className="w-10 h-10 text-orange mb-6" />
                            <div className="text-lg font-bold mb-2">Compliance Ready</div>
                            <p className="text-white/60 text-base">{project.impact.transparency}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TECHNOLOGIES USED ── */}
            <section className="py-8 border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="text-navy/40 font-bold uppercase tracking-widest text-sm mr-4">Tech Stack:</span>
                        {project.technologies.map((tech, i) => (
                            <span key={i} className="px-5 py-2 rounded-full bg-white border border-navy/10 text-navy font-bold text-sm shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BLOG SECTION ── */}
            <section className="py-16 bg-gray-50/50">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-2xl font-bold text-navy mb-3">Related Insights & Blogs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {blogs.map((blog, idx) => (
                            <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-lg transition-all duration-500">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-navy/60 text-sm mb-6 line-clamp-2">
                                        {blog.summary}
                                    </p>
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="inline-flex items-center text-navy font-bold text-sm hover:text-orange transition-colors"
                                    >
                                        Read Insight
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA SECTION ── */}
            <section className="py-16 bg-white">
                <div className="max-w-[1000px] mx-auto px-6 text-center bg-navy rounded-[40px] py-16 px-8 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-orange/30 opacity-50 pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something similar?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Let's discuss how our expertise in {project.tag} can accelerate your business objectives.
                        </p>
                        <Link
                            to="/#contact"
                            className="px-10 py-4 bg-orange text-white rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block shadow-lg shadow-orange/20"
                        >
                            Work with us
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ProjectDetail;
