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

/* ─── Data ──────────────────────────────────────────── */
const pillars = [
    { icon: '❤️', value: 'People First', desc: 'Our team is our greatest asset — we invest in their growth, happiness, and well-being every day.' },
    { icon: '🎉', value: 'Celebrate Together', desc: 'From festive Diwalis to Republic Day cookoffs — we find joy in every milestone together.' },
    { icon: '🤝', value: 'Client Obsessed', desc: 'We don\'t just serve clients, we build lasting partnerships built on trust, impact, and results.' },
    { icon: '🚀', value: 'Grow Every Day', desc: 'A culture of continuous learning, curiosity, and innovation defines who we are at Futurrizon.' },
];

const events = [
    {
        category: 'Celebration',
        categoryColor: 'bg-orange/15 text-orange border-orange/20',
        emoji: '🪔',
        title: 'Futurrizon Diwali 2K25',
        subtitle: 'Festivities, Laughter & Teamwork',
        desc: 'From fun activities to bright Diwali moments, our workplace truly shines with joy, togetherness, sparkling celebrations, endless smiles, and festive fun! The spirit of the festival lit up every corner of our office. ✨',
        tag: 'Company Event',
    },
    {
        category: 'Celebration',
        categoryColor: 'bg-orange/15 text-orange border-orange/20',
        emoji: '🇮🇳',
        title: 'Fun Friday × Republic Day',
        subtitle: 'When Patriotism Meets Teamwork & Fun',
        desc: 'Energy. Laughter. Togetherness. We celebrated the spirit of Republic Day with loads of enthusiasm — headlined by a Boys vs Girls Cooking Competition 👨‍🍳👩‍🍳. Creative dishes, friendly rivalry, fun games, and cheerful moments made this a day to remember!',
        tag: 'Fun Friday',
    },
    {
        category: 'Client Meet',
        categoryColor: 'bg-[#002379]/15 text-[#002379] border-[#002379]/20',
        emoji: '🌟',
        title: 'KORMAX Collaboration',
        subtitle: 'A Power-Packed Collaboration Begins!',
        desc: 'We were delighted to host KORMAX for an inspiring session filled with ideas, innovation, and collaboration. Mr. Walter Davis (Director, KORMAX) brought visionary leadership and insights that aligned perfectly with our mission to empower businesses through Microsoft 365, Power Platforms, Azure & AI-driven solutions.',
        tag: 'Client Meet',
    },
    {
        category: 'Celebration',
        categoryColor: 'bg-orange/15 text-orange border-orange/20',
        emoji: '✨',
        title: 'Diwali Decor & Festive Vibes',
        subtitle: 'Work + Festive Fun = Perfect Diwali Vibes',
        desc: 'Lighting up our workplace with festive joy, colors, and togetherness. The office transformed into a festival of lights — a reminder that the best workplaces feel like family. Happy Diwali from our team to yours! 🪔',
        tag: 'Office Decor',
    },
    {
        category: 'Campaign',
        categoryColor: 'bg-purple-500/15 text-purple-600 border-purple-500/20',
        emoji: '🎇',
        title: 'Futurrizon × MonkeyMan⌚',
        subtitle: '"We Care" Turns Into "We Collaborate"',
        desc: 'Loved seeing our Futurrizon family featured in MonkeyMan\'s Diwali campaign! Because great partnerships make every celebration brighter. When values align, magic happens — and this collab was proof of exactly that.',
        tag: 'Brand Collab',
    },
    {
        category: 'Campaign',
        categoryColor: 'bg-purple-500/15 text-purple-600 border-purple-500/20',
        emoji: '🎌',
        title: 'Ghibli-Inspired Transformation',
        subtitle: 'A Ghibli-Style Business Journey',
        desc: 'Step into a Ghibli-style journey where chaos fades into seamless automation! From never-ending paperwork and crashing spreadsheets to real-time dashboards and AI-powered workflows — we redefine efficiency with Power BI, SharePoint, Power Automate & Microsoft 365. ✨ Say goodbye to inefficiency. Say hello to the future.',
        tag: 'Brand Content',
    },
    {
        category: 'Client Meet',
        categoryColor: 'bg-[#002379]/15 text-[#002379] border-[#002379]/20',
        emoji: '🤝',
        title: 'TexTaxUS × Gandhi Ashram Visit',
        subtitle: 'Adam Minow & TexTaxUS at Futurrizon HQ',
        desc: 'We had the absolute pleasure of hosting Adam Minow & TexTaxUS Corporation at our office! Power-packed strategy meetings, a soulful visit to the historic Gandhi Ashram, and a delicious lunch full of laughter — a perfect blend of collaboration, culture & connection. Here\'s to many more milestones together! 💙',
        tag: 'Client Visit',
    },
];

/* ─── Page ──────────────────────────────────────────── */
export default function LifePage() {
    return (
        <div className="overflow-x-hidden">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-8"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.5) 1px, transparent 1px)',
                        backgroundSize: '36px 36px',
                    }}
                />
                {/* Glow orbs */}
                <div className="absolute top-16 -left-24 w-96 h-96 bg-orange/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-3xl"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our Culture</span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-cream leading-tight">
                            Life at
                            <span className="block text-orange mt-1">Futurrizon</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="mt-6 text-cream/60 text-lg max-w-xl leading-relaxed">
                            We don't just build technology — we build a workplace where people thrive, celebrate, and grow together. Take a peek inside our world.
                        </motion.p>

                        {/* Quick stats */}
                        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-8">
                            {[
                                ['🎉', '20+', 'Events a Year'],
                                ['🌍', '5+', 'Global Clients'],
                                ['💼', '∞', 'Memories Made'],
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

            {/* ── CULTURE PILLARS ───────────────────────────── */}
            <section className="bg-cream py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-12">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">What Drives Us</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Our Culture, Our Identity
                        </motion.h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
                        {pillars.map((p, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -4, boxShadow: '0 16px 32px -8px rgba(255,95,0,0.15)' }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-white rounded-2xl p-6 border border-primary/6 hover:border-orange/20 group h-full"
                                >
                                    <div className="text-3xl mb-4">{p.icon}</div>
                                    <h3 className="font-display font-bold text-primary text-base mb-2 group-hover:text-orange transition-colors">{p.value}</h3>
                                    <p className="text-primary/50 text-sm leading-relaxed">{p.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EVENT STORIES ─────────────────────────────── */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-14">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">🎊 Stories & Moments</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-display font-bold text-primary">
                            Highlights From Our Journey
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-primary/50 text-base max-w-xl mx-auto">
                            Every event, every meet, every campaign — a window into the energy and heart that makes Futurrizon special.
                        </motion.p>
                    </AnimatedSection>

                    {/* Masonry-style event grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-6xl mx-auto space-y-5">
                        {events.map((ev, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.2 }}
                                    className="break-inside-avoid bg-cream rounded-2xl p-6 border border-primary/6 hover:border-orange/20 hover:shadow-lg hover:shadow-orange/8 transition-all duration-300 group mb-5"
                                >
                                    {/* Header row */}
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${ev.categoryColor}`}>
                                            {ev.category}
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary/40 text-[10px] font-medium uppercase tracking-wide">
                                            {ev.tag}
                                        </span>
                                    </div>

                                    {/* Emoji + Title */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl leading-none">{ev.emoji}</span>
                                        <div>
                                            <h3 className="font-display font-bold text-primary text-base leading-snug group-hover:text-orange transition-colors">
                                                {ev.title}
                                            </h3>
                                            <p className="text-primary/45 text-xs mt-0.5 italic">{ev.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-primary/60 text-sm leading-relaxed">
                                        {ev.desc}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-orange to-orange/20 group-hover:w-full transition-all duration-500" />
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
