import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import bgLifeVideo from '../assets/bg_LifeatFuturrizon.mp4';
import {
    Heart, PartyPopper, Handshake, Rocket, Star, Briefcase, Users, Globe, Camera, Images
} from 'lucide-react';

import diwali1 from '../assets/festivals/diwali/1.jpg';
import diwali2 from '../assets/festivals/diwali/2.jpg';
import diwali3 from '../assets/festivals/diwali/3.jpg';
import diwali4 from '../assets/festivals/diwali/4.jpg';
import diwali5 from '../assets/festivals/diwali/5.jpg';

import rep1 from '../assets/festivals/republic day/1.jpg';
import rep2 from '../assets/festivals/republic day/2.jpg';
import rep3 from '../assets/festivals/republic day/3.jpg';
import rep4 from '../assets/festivals/republic day/4.jpg';

import kor1 from '../assets/festivals/Kormax/1.jpg';
import kor2 from '../assets/festivals/Kormax/2.jpg';
import kor3 from '../assets/festivals/Kormax/3.jpg';

import chr1 from '../assets/festivals/Christmas/1.jpg';
import chr2 from '../assets/festivals/Christmas/2.jpg';
import chr3 from '../assets/festivals/Christmas/3.jpg';
import chr4 from '../assets/festivals/Christmas/4.jpg';

import nav1 from '../assets/festivals/Navratri/1.jpg';
import nav2 from '../assets/festivals/Navratri/2.jpg';
import nav3 from '../assets/festivals/Navratri/3.jpg';

import ga1 from '../assets/festivals/Gandhi Ashram/1.jpg';
import ga2 from '../assets/festivals/Gandhi Ashram/2.jpg';
import ga3 from '../assets/festivals/Gandhi Ashram/3.jpg';
import ga4 from '../assets/festivals/Gandhi Ashram/4.jpg';
import ga5 from '../assets/festivals/Gandhi Ashram/5.jpg';
import ga6 from '../assets/festivals/Gandhi Ashram/6.jpg';
import ga7 from '../assets/festivals/Gandhi Ashram/7.jpg';
import ga8 from '../assets/festivals/Gandhi Ashram/8.jpg';

import monkeyVideo from '../assets/festivals/Monekyman/Monkeyman Video.mp4';

/* ─── Animation helpers ─────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
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
    { icon: <Heart className="w-7 h-7" />, value: 'People First', desc: 'Our team is our greatest asset and we invest in their growth, happiness, and well-being every day.', grad: 'from-orange to-amber-400' },
    { icon: <PartyPopper className="w-7 h-7" />, value: 'Celebrate Together', desc: 'From festive Diwalis to Republic Day cookoffs, we find joy in every milestone together.', grad: 'from-pink-500 to-rose-400' },
    { icon: <Handshake className="w-7 h-7" />, value: 'Client Obsessed', desc: 'We don\'t just serve clients, we build lasting partnerships built on trust, impact, and results.', grad: 'from-blue-600 to-indigo-500' },
    { icon: <Rocket className="w-7 h-7" />, value: 'Grow Every Day', desc: 'A culture of continuous learning, curiosity, and innovation defines who we are at Futurrizon.', grad: 'from-purple-600 to-violet-500' },
];

/* images: array of imported image paths, add your photos here */
const events = [
    {
        category: 'Celebration',
        categoryColor: 'bg-orange/15 text-orange border-orange/20',
        icon: <PartyPopper className="w-5 h-5 text-orange" />,
        title: 'Fun Friday × Republic Day',
        subtitle: 'When Patriotism Meets Teamwork & Fun',
        desc: 'Yes we are a tech company, but apparently we can also cook! Republic Day called for a Boys vs Girls Cooking Competition and let\'s just say the rivalry was VERY real. Between the questionable dishes, suspicious ingredients, and way too much confidence from both sides, we somehow ended up having an absolute blast. Games, laughter, and zero productivity. 10/10 would do again!👩‍🍳',
        tag: 'Fun Friday',
        accent: 'orange',
        images: [rep1, rep2, rep3, rep4],
    },
    {
        category: 'Client Meet',
        categoryColor: 'bg-[#002379]/15 text-[#002379] border-[#002379]/20',
        icon: <Star className="w-5 h-5 text-[#002379]" />,
        title: 'KORMAX Collaboration',
        subtitle: 'A Power-Packed Collaboration Begins!',
        desc: 'Big day at Futurrizon HQ! We got to host our client KORMAX for a session that was equal parts inspiring and fun. Mr. Walter Davis, Director at KORMAX, brought his absolute best with some seriously sharp insights and a vision that just clicks with what we do at Futurrizon. Microsoft 365, Power Platform, Power Automate, Azure, AI solutions... yeah we covered it all. The whole KORMAX team brought so much energy and curiosity to the table that the meetup flew by way too fast. These are exactly the kind of partnerships that make us want to build bigger and better every single day. Here is to many more milestones together! 🤝🚀',
        tag: 'Client Meet',
        accent: 'blue',
        images: [kor1, kor2, kor3],
    },
    {
        category: 'Celebration',
        categoryColor: 'bg-orange/15 text-orange border-orange/20',
        icon: <Heart className="w-5 h-5 text-orange" />,
        title: 'Diwali Decor & Festive Vibes',
        subtitle: 'Work + Festive Fun = Perfect Diwali Vibes',
        desc: 'Diwali at Futurrizon hit different this year! 🪔 We turned the whole office into a proper Diwali mela with decorations in every corner. The Rangoli competition got very competitive very fast and honestly the talent in this office is unfair. We then sat down for a team lunch that nobody wanted to end, and closed the day with sweets and gifts all around because mithai makes everything better. Happy Diwali from our very festive, slightly sugar-rushed team!🍬🪔',
        tag: 'Office Decor',
        accent: 'orange',
        images: [diwali1, diwali2, diwali3, diwali4, diwali5],
    },
    {
        category: 'Campaign',
        categoryColor: 'bg-purple-500/15 text-purple-600 border-purple-500/20',
        icon: <Camera className="w-5 h-5 text-purple-600" />,
        title: 'Futurrizon × MonkeyMan',
        subtitle: '"We Care" Turns Into "We Collaborate"',
        desc: 'Plot twist: a watch brand and a tech company walked into Diwali together. Turns out MonkeyMan and Futurrizon have more in common than we thought, mainly the belief that good things happen when good people team up. Seeing our guys featured in their Diwali campaign was honestly a vibe. Unexpected collab, great vibes, big smiles all around. We love it when partnerships just make sense!⌚',
        tag: 'Brand Collab',
        accent: 'orange',
        images: [monkeyVideo],
    },
    {
        category: 'Client Meet',
        categoryColor: 'bg-[#002379]/15 text-[#002379] border-[#002379]/20',
        icon: <Handshake className="w-5 h-5 text-[#002379]" />,
        title: 'TexTaxUS × Gandhi Ashram Visit',
        subtitle: 'Adam Minow & TexTaxUS at Futurrizon HQ',
        desc: 'Adam Minow from TexTaxUS flew in, and we made sure he got the full Ahmedabad experience. After productive meetings, we took a serene visit to the Gandhi Ashram where we shared many stories, views, and memories with Adam. We topped it off with an amazing team lunch where the conversations got way too good to stop. Great clients, great laughs, and the kind of partnership that just keeps getting better. More milestones incoming! 💙',
        tag: 'Client Visit',
        accent: 'blue',
        images: [ga1, ga2, ga3, ga4, ga5, ga6, ga7, ga8],
    },
    {
        category: 'Celebration',
        categoryColor: 'bg-green-500/15 text-green-700 border-green-500/20',
        icon: <Star className="w-5 h-5 text-green-600" />,
        title: 'Christmas at Futurrizon 🎄',
        subtitle: 'Joy, Warmth & Festive Cheer in the Office',
        desc: 'We are a Microsoft company but on Christmas we turn into absolute elves. 🎅 Secret Santa happened and nobody played it cool. The office got decorated, the team got together for a proper Christmas lunch, and then games broke out and things got surprisingly competitive for a bunch of tech folks. Honestly one of the best days of the year. Merry Christmas from the gang at Futurrizon! 🎄🌟',
        tag: 'Company Event',
        accent: 'orange',
        images: [chr1, chr2, chr3, chr4],
    },
    {
        category: 'Cultural',
        categoryColor: 'bg-pink-500/15 text-pink-600 border-pink-500/20',
        icon: <Users className="w-5 h-5 text-pink-600" />,
        title: 'Navratri Celebration ✨',
        subtitle: 'Garba, Grooves & Unstoppable Energy',
        desc: 'When it is Navratri in Gujarat, you do not just work, you dance. We swapped our keyboards for Kediyas and Chaniyas and took over the Garba grounds. The energy was unmatched, the steps were (mostly) coordinated, and by the end of the night, everyone was exhausted but still ready for another round. A perfect mix of culture, teamwork, and serious stamina!',
        tag: 'Cultural Event',
        accent: 'orange',
        images: [nav1, nav2, nav3],
    },
];

/* ─── Image Collage / Swipeable Gallery ──────────────── */
function ImageCollage({ images, accent }) {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const accentHex = accent === 'blue' ? '#002379' : '#FF5F00';

    const goTo = (idx) => {
        setDirection(idx > current ? 1 : -1);
        setCurrent(idx);
    };
    const prev = (e) => { e.stopPropagation(); goTo(current === 0 ? images.length - 1 : current - 1); };
    const next = (e) => { e.stopPropagation(); goTo(current === images.length - 1 ? 0 : current + 1); };

    const variants = {
        enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
        exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } }),
    };

    /* ── Empty placeholder ── */
    if (images.length === 0) {
        return (
            <div
                className="w-full h-48 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 mb-5 relative overflow-hidden"
                style={{ borderColor: accentHex + '40', background: accentHex + '06' }}
            >
                <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: accentHex }} />
                <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 rounded-tr-xl" style={{ borderColor: accentHex }} />
                <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 rounded-bl-xl" style={{ borderColor: accentHex }} />
                <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: accentHex }} />
                <Images className="w-9 h-9 opacity-20" style={{ color: accentHex }} />
                <p className="text-xs font-semibold opacity-25 tracking-wide" style={{ color: accentHex }}>Add Photos</p>
            </div>
        );
    }

    /* ── Swipeable gallery ── */
    return (
        <div className="relative w-full h-52 mb-5 rounded-2xl overflow-hidden select-none shadow-md shadow-black/15">

            {/* Slide area */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                        if (info.offset.x < -60 || info.velocity.x < -400) next({ stopPropagation: () => { } });
                        else if (info.offset.x > 60 || info.velocity.x > 400) prev({ stopPropagation: () => { } });
                    }}
                    className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                    {images[current].includes('.mp4') ? (
                        <video
                            src={images[current]}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            onPointerDownCapture={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <img src={images[current]} alt={`media-${current + 1}`} className="w-full h-full object-cover pointer-events-none" />
                    )}
                </motion.div>
            </AnimatePresence>



            {/* Prev / Next arrows — only show when >1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 flex items-center justify-center transition-transform hover:scale-110"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.6))' }}>
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 flex items-center justify-center transition-transform hover:scale-110"
                    >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.6))' }}>
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dot indicators — bottom centre */}
            {images.length > 1 && (
                <div className="absolute bottom-2.5 left-0 right-0 z-20 flex justify-center gap-1.5">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: idx === current ? '20px' : '6px',
                                height: '6px',
                                background: idx === current ? '#fff' : 'rgba(255,255,255,0.45)',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }} />
        </div>
    );
}


/* ─── Page ──────────────────────────────────────────── */
export default function LifePage() {
    return (
        <div className="overflow-x-hidden bg-[#FAFAF8]">

            {/* ── HERO ──────────────────────────────────────── */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src={bgLifeVideo}
                />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(120deg, rgba(0,31,84,0.92) 40%, rgba(0,31,84,0.45) 100%)' }} />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,95,0,0.6) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />


                <div className="container mx-auto px-6 pt-32 pb-28 relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Our Culture</span>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight">
                            Life at
                            <span className="block text-orange mt-2 drop-shadow-lg">Futurrizon</span>
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-6 text-white/65 text-lg max-w-xl leading-relaxed">
                            We don't just build technology. We build a workplace where people thrive, celebrate, and grow together. Take a peek inside our world.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-10">
                            {[
                                [<PartyPopper className="w-6 h-6 text-orange mx-auto mb-1" />, '20+', 'Events a Year'],
                                [<Globe className="w-6 h-6 text-orange mx-auto mb-1" />, '5+', 'Global Clients'],
                                [<Briefcase className="w-6 h-6 text-orange mx-auto mb-1" />, '∞', 'Memories Made'],
                            ].map(([icon, num, label]) => (
                                <div key={label} className="text-center">
                                    {icon}
                                    <div className="text-3xl font-display font-black text-orange">{num}</div>
                                    <div className="text-white/40 text-xs mt-1 uppercase tracking-widest font-semibold">{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14">
                        <path d="M0 60 L0 30 Q300 0 600 30 Q900 60 1200 30 L1200 60 Z" fill="#FAFAF8" />
                    </svg>
                </div>
            </section>

            {/* ── CULTURE PILLARS ─────────────────────────────── */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">What Drives Us</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-display font-bold text-primary">
                            Our Culture, Our Identity
                        </motion.h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                        {pillars.map((p, i) => (
                            <AnimatedSection key={i}>
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                    className="relative bg-white rounded-3xl p-7 border border-primary/6 shadow-sm hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 h-full overflow-hidden group flex flex-col"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.grad} flex items-center justify-center text-white mb-5 shadow-lg`}>
                                        {p.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-primary text-lg mb-2 group-hover:text-orange transition-colors duration-300">{p.value}</h3>
                                    <p className="text-primary/50 text-sm leading-relaxed">{p.desc}</p>
                                    <div className="mt-auto pt-5">
                                        <div className={`w-8 rounded-full bg-gradient-to-r ${p.grad} group-hover:w-full transition-all duration-500`} style={{ height: '2px' }} />
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EVENT STORIES ─────────────────────────────── */}
            <section className="py-24 bg-white relative">
                <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #FF5F00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/30 bg-orange/8 mb-4">
                            <Star className="w-3.5 h-3.5 text-orange" />
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Stories & Moments</span>
                        </motion.div>
                        <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-display font-bold text-primary">
                            Highlights From Our Journey
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-4 text-primary/50 text-base max-w-xl mx-auto">
                            Every event, every meet, every campaign is a window into the energy and heart that makes Futurrizon special.
                        </motion.p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
                        {events.map((ev, i) => {
                            const isBlue = ev.accent === 'blue';
                            const accentHex = isBlue ? '#002379' : '#FF5F00';
                            return (
                                <AnimatedSection key={i}>
                                    <motion.div
                                        variants={fadeUp}
                                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                        className="bg-[#FAFAF8] rounded-3xl overflow-hidden border border-primary/6 hover:border-primary/12 shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-400 h-full flex flex-col group"
                                    >
                                        {/* Top colour bar */}
                                        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accentHex}, ${accentHex}44)` }} />

                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Header badges */}
                                            <div className="flex items-center justify-between mb-5">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${ev.categoryColor}`}>
                                                    {ev.icon}
                                                    {ev.category}
                                                </span>
                                                <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary/40 text-[10px] font-semibold uppercase tracking-widest">
                                                    {ev.tag}
                                                </span>
                                            </div>

                                            {/* Image Collage */}
                                            <ImageCollage images={ev.images} accent={ev.accent} />

                                            {/* Title */}
                                            <h3 className="font-display font-bold text-primary text-xl leading-snug mb-1 group-hover:text-orange transition-colors duration-300">
                                                {ev.title}
                                            </h3>
                                            <p className="text-xs italic mb-3 font-medium" style={{ color: accentHex + '99' }}>{ev.subtitle}</p>

                                            {/* Description */}
                                            <p className="text-primary/60 text-sm leading-relaxed flex-1">
                                                {ev.desc}
                                            </p>

                                            {/* Bottom accent bar */}
                                            <div className="mt-5 h-[2px] rounded-full group-hover:w-full transition-all duration-500 w-10"
                                                style={{ background: `linear-gradient(90deg, ${accentHex}, ${accentHex}22)` }} />
                                        </div>
                                    </motion.div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}
