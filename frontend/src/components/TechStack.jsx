import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ── SVG Logo Imports ──────────────────────────────────────
import logo365 from '../assets/logos/Microsoft_365.svg.svg';
import logoSharePoint from '../assets/logos/sharepoint.svg';
import logoTeams from '../assets/logos/teams.svg';
import logoOneDrive from '../assets/logos/OneDrive.svg.svg';
import logoOutlook from '../assets/logos/Outlook.svg.png';
import logoPowerPlatform from '../assets/logos/microsoft_power_platform.svg';
import logoPowerBI from '../assets/logos/Power bI-png.svg';
import logoPowerApps from '../assets/logos/power-app.svg.webp';
import logoPowerAutomate from '../assets/logos/Power_Automate.svg.svg';
import logoPowerPages from '../assets/logos/PowerPages.svg';
import logoAzure from '../assets/logos/azure.svg';
import logoForms from '../assets/logos/Microsoft_Forms.wine.svg';
import logoVirtualAgents from '../assets/logos/virtual-agents.webp';
import logoAIBuilder from '../assets/logos/ai-builder.png';
import logoBigData from '../assets/logos/Bigdata.svg';

// ── Tech data ────────────────────────────────────────────
const techs = [
    { name: 'Microsoft 365', logo: logo365, whiteBg: false },
    { name: 'SharePoint', logo: logoSharePoint, whiteBg: false },
    { name: 'Teams', logo: logoTeams, whiteBg: false },
    { name: 'OneDrive', logo: logoOneDrive, whiteBg: false },
    { name: 'Outlook', logo: logoOutlook, whiteBg: false },
    { name: 'Power Platform', logo: logoPowerPlatform, whiteBg: false },
    { name: 'Power BI', logo: logoPowerBI, whiteBg: false },
    { name: 'Power Apps', logo: logoPowerApps, whiteBg: false },
    { name: 'Power Automate', logo: logoPowerAutomate, whiteBg: false },
    { name: 'Power Pages', logo: logoPowerPages, whiteBg: false },
    { name: 'Microsoft Azure', logo: logoAzure, whiteBg: false },
    { name: 'Microsoft Forms', logo: logoForms, whiteBg: false, logoScale: 1.3 },
    { name: 'Microsoft Virtual Agents', logo: logoVirtualAgents, whiteBg: false },
    { name: 'Microsoft AI Builder', logo: logoAIBuilder, whiteBg: false },
    { name: 'Big Data', logo: logoBigData, whiteBg: false },
];

// ── Alternating accent per card index ────────────────────
const getAccent = (i) =>
    i % 2 === 0
        ? { color: '#002379', glow: 'rgba(0,35,121,0.07)' }
        : { color: '#FF5F00', glow: 'rgba(255,95,0,0.07)' };

// ── Framer Motion variants ────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const cardEnter = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
};

const floatAnim = {
    y: [0, -5, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
};

// ─────────────────────────────────────────────────────────
// TechCard — reusable component
// ─────────────────────────────────────────────────────────
const TechCard = ({ tech, index, state, onHover, onLeave }) => {
    const isActive = state === 'active';
    const isDim = state === 'dim';
    const accent = getAccent(index);

    return (
        <motion.div
            layout
            variants={cardEnter}
            onHoverStart={onHover}
            onHoverEnd={onLeave}
            animate={
                isActive
                    ? {
                        scale: 1.05, opacity: 1, y: -5,
                        boxShadow: `0 6px 14px ${accent.glow}`,
                        transition: { duration: 0.40, ease: 'easeInOut' }
                    }
                    : isDim
                        ? {
                            scale: 0.96, opacity: 0.45, y: 0,
                            boxShadow: 'none',
                            transition: { duration: 0.36, ease: 'easeInOut' }
                        }
                        : {
                            scale: 1, opacity: 1, y: 0,
                            boxShadow: '0 2px 10px rgba(0,35,121,0.07)',
                            transition: { duration: 0.36, ease: 'easeInOut' }
                        }
            }
            whileHover={floatAnim}
            className="relative flex items-center gap-4 p-5 rounded-[18px] cursor-pointer overflow-hidden select-none bg-white"
            style={{
                border: isActive
                    ? `1.5px solid ${accent.color}55`
                    : '1.5px solid rgba(0,35,121,0.08)',
                willChange: 'transform, opacity',
            }}
        >
            {/* Inner tint on active */}
            {isActive && (
                <div
                    className="absolute inset-0 pointer-events-none rounded-[18px]"
                    style={{ background: `radial-gradient(ellipse at 0% 50%, ${accent.color}07 0%, transparent 60%)` }}
                />
            )}

            {/* ── Logo container — img ONLY, no text ── */}
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                    background: 'white',
                    padding: '8px',
                    boxShadow: isActive
                        ? `0 2px 8px ${accent.glow}`
                        : '0 1px 4px rgba(0,35,121,0.06)',
                    transform: isActive ? 'scale(1.07)' : 'scale(1)',
                }}
            >
                {tech.logo ? (
                    <img
                        src={tech.logo}
                        alt={tech.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                            filter: isActive ? 'grayscale(0%)' : 'grayscale(40%)',
                            transform: isActive
                                ? `scale(${(tech.logoScale || 1) * 1.05})`
                                : `scale(${tech.logoScale || 1})`,
                            transition: 'all 0.3s ease',
                        }}
                    />
                ) : (
                    <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: isActive ? accent.color : '#002379',
                        textAlign: 'center',
                        lineHeight: 1.2,
                        letterSpacing: '0.02em',
                        transition: 'all 0.3s ease',
                    }}>AI<br />Builder</span>
                )}
            </div>

            {/* Technology name */}
            <span
                className="leading-snug transition-all duration-300"
                style={{
                    color: isActive ? accent.color : '#002379',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '14px',
                }}
            >
                {tech.name}
            </span>
        </motion.div>
    );
};

// ─────────────────────────────────────────────────────────
// TechStack Section
// ─────────────────────────────────────────────────────────
const TechStack = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getState = (i) => {
        if (hoveredIndex === null) return 'idle';
        if (hoveredIndex === i) return 'active';
        return 'dim';
    };

    return (
        <motion.section
            className="py-24 relative overflow-hidden"
            animate={{
                background: hoveredIndex !== null
                    ? 'linear-gradient(135deg,#FFF8F5 0%,#F4F6FF 100%)'
                    : 'linear-gradient(135deg,#FAFAF8 0%,#F3F4F6 100%)',
            }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
            {/* Decorative blobs */}
            <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-[#FF5F00]/4 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] bg-[#002379]/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[#FF5F00]/10 border border-[#FF5F00]/25 text-[#FF5F00] font-semibold text-sm mb-5"
                    >
                        Our Tech DNA
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="text-4xl md:text-5xl font-extrabold text-[#002379] mb-4 tracking-tight"
                    >
                        Our Top Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-lg font-semibold text-[#002379]/75 max-w-3xl mx-auto mb-2"
                    >
                        Bespoke Digital Transformation with Microsoft 365, Power Platform &amp; AI
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.20 }}
                        className="text-sm text-[#002379]/50 max-w-3xl mx-auto leading-relaxed"
                    >
                        Stop juggling manual tasks, fragmented systems, siloed data &amp; workflow bottlenecks. We help you build a connected, AI-powered digital workplace that streamlines operations, boosts collaboration &amp;{' '}
                        <span className="whitespace-nowrap">accelerates growth.</span>
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4"
                >
                    {techs.map((tech, i) => (
                        <TechCard
                            key={tech.name}
                            tech={tech}
                            index={i}
                            state={getState(i)}
                            onHover={() => setHoveredIndex(i)}
                            onLeave={() => setHoveredIndex(null)}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TechStack;
