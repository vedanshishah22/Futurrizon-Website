import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

// ── Components ───────────────────────────────────────────
const PortfolioCard = ({ svc, index, scrollX, metrics }) => {
    const navigate = useNavigate();

    const { cardWidth, gap, containerWidth } = metrics;
    const step = cardWidth + gap;

    // Exact horizontal center offset
    const paddingLeft = (containerWidth - cardWidth) / 2;
    const offsetLeft = paddingLeft + index * step;
    const targetScroll = offsetLeft - (containerWidth / 2) + (cardWidth / 2);

    // Transform points: [Left Side, Center, Right Side]
    const range = [targetScroll - step, targetScroll, targetScroll + step];

    // Card State: 1.08x center, 0.92x side
    const scale = useTransform(scrollX, range, [0.92, 1.08, 0.92]);
    const opacity = useTransform(scrollX, range, [0.7, 1.0, 0.7]);
    const y = useTransform(scrollX, range, [0, -6, 0]);
    const imgScale = useTransform(scrollX, range, [1.0, 1.05, 1.0]);

    // Symmetrical shadow transition
    const shadow = useTransform(scrollX, range, [
        '0 2px 8px rgba(0,35,121,0.03)',
        '0 10px 25px rgba(0,35,121,0.08)',
        '0 2px 8px rgba(0,35,121,0.03)'
    ]);

    // Spring-loaded values for smooth enterprise motion
    const springConfig = { damping: 30, stiffness: 180 };
    const sScale = useSpring(scale, springConfig);
    const sOpacity = useSpring(opacity, springConfig);
    const sY = useSpring(y, springConfig);
    const sImgScale = useSpring(imgScale, springConfig);

    const handleCardClick = () => {
        navigate(`/project/${svc.id}`);
    };

    return (
        <motion.div
            onClick={handleCardClick}
            style={{
                width: cardWidth,
                height: 'auto',
                aspectRatio: '4/5',
                maxHeight: 520,
                scale: sScale,
                opacity: sOpacity,
                y: sY,
                boxShadow: shadow,
                borderRadius: '20px',
            }}
            className="flex-shrink-0 relative group snap-center cursor-pointer"
        >
            <div className="w-full h-full bg-white border border-gray-100/50 rounded-[20px] overflow-hidden flex flex-col">
                <div className="h-2/3 overflow-hidden relative">
                    <motion.img
                        style={{ scale: sImgScale }}
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/95 text-[#002379] text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-sm border border-gray-100">
                            {svc.tag}
                        </span>
                    </div>
                </div>

                <div className="p-4 md:p-6 lg:p-8 flex flex-col flex-1">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#002379] mb-2 md:mb-4 leading-tight line-clamp-2 group-hover:text-orange transition-colors">
                        {svc.title}
                    </h3>
                    <p className="text-[#002379]/60 text-xs md:text-sm leading-relaxed mb-auto line-clamp-2 lg:line-clamp-3">
                        High-performance enterprise solution tailored for digital acceleration and operational excellence.
                    </p>
                    <div className="mt-4 md:mt-6 flex items-center text-[#FF5F00] font-bold text-xs md:text-sm tracking-wide">
                        View project
                        <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const INFINITE_SERVICES = [...projects, ...projects, ...projects];

// ─────────────────────────────────────────────────────────
const ServicesSection = () => {
    const desktopContainerRef = useRef(null);
    const { scrollX } = useScroll({ container: desktopContainerRef });

    const [activeIdx, setActiveIdx] = useState(0);

    // Dynamic Layout Metrics State
    const [metrics, setMetrics] = useState({
        cardWidth: 400,
        gap: 32,
        containerWidth: 1200,
        singleSetWidth: 0
    });

    // Resize Handler for Fluid Scaling & Page Zoom
    useLayoutEffect(() => {
        const updateMetrics = () => {
            if (!desktopContainerRef.current) return;

            const containerWidth = desktopContainerRef.current.offsetWidth;
            const viewportWidth = window.innerWidth;

            // cardWidth: clamp(260px, 28vw, 420px)
            const calculatedWidth = Math.min(Math.max(260, viewportWidth * 0.28), 420);
            const gap = viewportWidth < 768 ? 16 : 32;
            const singleSetWidth = projects.length * (calculatedWidth + gap);

            setMetrics({
                cardWidth: calculatedWidth,
                gap,
                containerWidth,
                singleSetWidth
            });
        };

        updateMetrics();
        window.addEventListener('resize', updateMetrics);
        return () => window.removeEventListener('resize', updateMetrics);
    }, []);

    // Initialize to middle for seamless loop
    useEffect(() => {
        if (desktopContainerRef.current && metrics.singleSetWidth > 0) {
            desktopContainerRef.current.scrollLeft = metrics.singleSetWidth;
        }
    }, [metrics.singleSetWidth]);

    // Seamless Circular Loop Logic with fluid width
    const handleScroll = (e) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        const ssw = metrics.singleSetWidth;
        const step = metrics.cardWidth + metrics.gap;

        if (ssw === 0) return;

        // Reset buffer
        if (scrollLeft <= 50) {
            e.currentTarget.scrollLeft = ssw + scrollLeft;
        } else if (scrollLeft >= ssw * 2 - 50) {
            e.currentTarget.scrollLeft = scrollLeft - ssw;
        }

        // Update active dot index
        const scrollRelative = scrollLeft - ssw;
        const index = Math.round(scrollRelative / step);
        const wrappedIndex = ((index % projects.length) + projects.length) % projects.length;
        setActiveIdx(wrappedIndex);
    };

    const handleDotClick = (i) => {
        if (!desktopContainerRef.current) return;
        const step = metrics.cardWidth + metrics.gap;
        desktopContainerRef.current.scrollTo({
            left: metrics.singleSetWidth + (i * step),
            behavior: 'smooth'
        });
    };

    const sidePadding = (metrics.containerWidth - metrics.cardWidth) / 2;

    return (
        <section id="portfolio" className="py-12 md:py-24 bg-[#FCFCFD] relative overflow-hidden">
            {/* Minimal neutral background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-[#002379]/5 to-transparent blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* ── Section Header ── */}
                <div className="text-center mb-8 md:mb-12 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-[#002379]/5 text-[#002379] font-semibold text-[10px] md:text-xs uppercase tracking-widest mb-4"
                    >
                        Portfolio
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[#002379] mb-4"
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-lg text-[#002379]/50 max-w-2xl mx-auto"
                    >
                        End-to-end technology solutions designed to accelerate your digital transformation.
                    </motion.p>
                </div>

                {/* ── RESPONIVE CAROUSEL ── */}
                <div className="relative">
                    <motion.div
                        ref={desktopContainerRef}
                        onScroll={handleScroll}
                        style={{
                            paddingLeft: sidePadding,
                            paddingRight: sidePadding
                        }}
                        className="flex gap-4 md:gap-8 overflow-x-auto pt-6 pb-12 md:pb-16 scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                    >
                        {INFINITE_SERVICES.map((svc, i) => (
                            <PortfolioCard
                                key={`${svc.id}-${i}`}
                                svc={svc}
                                index={i}
                                scrollX={scrollX}
                                metrics={metrics}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Dynamic Navigation Dots */}
                <div className="flex justify-center mt-2 md:mt-4">
                    <div className="flex gap-3">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleDotClick(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i
                                    ? 'w-8 bg-[#FF5F00]'
                                    : 'w-2 bg-[#002379]/10 hover:bg-[#002379]/20'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
