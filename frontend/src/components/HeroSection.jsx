import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap, Shield, BarChart3, Globe, Cpu, Database, Cloud, Lock, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const problemPoints = [
    "Manual workflows slowing you down",
    "Fragmented systems & data silos",
    "Slow approvals & bottlenecks",
    "Lack of real-time insights",
    "Low tool adoption & ROI"
];

const cardData = [
    { icon: <Zap size={24} />, title: "AI Automation", desc: "Smart workflows that learn and adapt.", color: "text-[#E76426]", bg: "bg-orange-500/10" },
    { icon: <Shield size={24} />, title: "Security", desc: "Bank-grade protection for all assets.", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: <BarChart3 size={24} />, title: "Analytics", desc: "Data-driven decisions made easy.", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: <Globe size={24} />, title: "Global Cloud", desc: "Infrastructure at your fingertips.", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: <Cpu size={24} />, title: "Edge Computing", desc: "Processing data where it matters.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { icon: <Database size={24} />, title: "Data Core", desc: "Unified enterprise data layers.", color: "text-red-400", bg: "bg-red-500/10" },
];

const ScrollingColumn = ({ items, direction = "up" }) => {
    const doubleItems = [...items, ...items, ...items]; // Triple for smooth loop

    return (
        <div className="flex flex-col gap-6 overflow-hidden h-[600px] relative">
            <motion.div
                animate={{
                    y: direction === "up" ? [0, -100 * items.length] : [-100 * items.length, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex flex-col gap-6"
            >
                {doubleItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-full p-6 bg-cream rounded-[24px] border border-navy/5 flex flex-col gap-4 min-w-[240px]"
                    >
                        <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="text-navy font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-navy/50 text-xs leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const HeroSection = () => {
    return (
        <section id="hero" className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden bg-[#082071]">
            <style>
                {`
                .slant-parallax {
                    transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) skewY(-5deg);
                }
                `}
            </style>

            {/* ── BACKGROUND IMAGE ── */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Background Image with full visibility */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />

                {/* Subtle Overlay to ensure text readability while maintaining full visibility of the wave */}
                <div className="absolute inset-0 bg-[#082071]/20 backdrop-brightness-[0.9]" />

                {/* Optional: Modern Tech Texture (Grid) - kept for extra detail */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* ── LEFT SIDE: CONTENT ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex justify-center lg:justify-start">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#082071] border border-white/10 backdrop-blur-sm mb-8"
                            >
                                <span className="flex h-2 w-2 rounded-full bg-[#E76426] animate-pulse"></span>
                                <span className="text-white text-sm font-bold tracking-wide uppercase">Next-Gen Digital Transformation</span>
                            </motion.div>
                        </div>

                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight text-center lg:text-left">
                            Revolutionize <br />
                            Your <span className="text-[#E96523]">Workflow</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed font-medium text-center lg:text-left mx-auto lg:mx-0">
                            Empowering your team with autonomous AI agents and seamless Microsoft 365 integrations for peak productivity.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-[#E76426] text-white rounded-xl font-bold text-lg shadow-md shadow-orange-500/10 flex items-center justify-center gap-2 group transition-all duration-300 whitespace-nowrap"
                            >
                                Start Free Consultation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-[#082071] text-white rounded-xl font-bold text-lg border border-white/10 hover:bg-[#0a288a] transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-blue-900/10 whitespace-nowrap"
                            >
                                Explore Solutions
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Problem Tags Replacement for Trust Badges */}
                        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2.5 max-w-2xl justify-center lg:justify-start">
                            {problemPoints.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (idx * 0.05) }}
                                    className="bg-white/95 backdrop-blur-sm px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white/20 hover:scale-[1.02] transition-transform cursor-default"
                                >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                                    <span className="text-navy/80 text-[11px] sm:text-[13px] font-bold tracking-tight whitespace-nowrap">
                                        {point}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT SIDE: DYNAMIC COLUMNS (SLANTED) ── */}
                    <div className="relative hidden lg:grid grid-cols-2 gap-8 items-center slant-parallax">
                        {/* Background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10">
                            <ScrollingColumn items={cardData.slice(0, 3)} direction="up" />
                        </div>
                        <div className="relative z-10 pt-20">
                            <ScrollingColumn items={cardData.slice(3, 6)} direction="down" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
