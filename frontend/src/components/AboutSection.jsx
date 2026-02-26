import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    History,
    Cpu,
    Compass,
    Award,
    Gem,
    MessageSquare,
    ArrowRight
} from 'lucide-react';
import bgImage from '../assets/bg.png';

const steps = [
    {
        id: 'our-story',
        title: 'Our Story',
        desc: 'Helping businesses unlock potential through intelligent digital transformation since 2022. We redesign the way businesses operate.',
        icon: <History size={24} />,
        color: '#002379'
    },
    {
        id: 'our-technology',
        title: 'Our Technology',
        desc: 'Powered by Microsoft Cloud: Office 365, Power Platform, Azure, and AI to deliver secure, scalable, and intelligent systems.',
        icon: <Cpu size={24} />,
        color: '#FF5F00'
    },
    {
        id: 'our-approach',
        title: 'Our Approach',
        desc: 'A delivery framework of Listen, Design, Automate, and Train that ensures measurable results and rapid deployment.',
        icon: <Compass size={24} />,
        color: '#002379'
    },
    {
        id: 'our-expertise',
        title: 'Our Expertise',
        desc: 'Certified Microsoft cloud professionals delivering process engineering, data visualization, and digital excellence.',
        icon: <Award size={24} />,
        color: '#FF5F00'
    },
    {
        id: 'our-quality',
        title: 'Our Quality',
        desc: 'Dedicated Project Champions and live dashboards for 100% transparency. We turn vision into reality.',
        icon: <Gem size={24} />,
        color: '#002379'
    },
    {
        id: 'our-communication',
        title: 'Our Communication',
        desc: 'Transforming complexity into clarity. Secure-by-default and mobile-first experiences built for sustainable growth.',
        icon: <MessageSquare size={24} />,
        color: '#FF5F00'
    }
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden">
            {/* Background Image - SUBTLE Layering */}
            <div
                className="absolute inset-0 z-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent"></div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#002379 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange font-bold text-sm mb-6 border border-orange/20"
                    >
                        TRANSFORMING ENTERPRISES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight"
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary/60 leading-relaxed"
                    >
                        We bridge the gap between complex business challenges and elegant digital solutions through a dedicated journey of excellence.
                    </motion.p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Central Timeline Line - hidden on mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange/50 via-primary/20 to-orange/50 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-0">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <Link
                                    key={step.id}
                                    to={`/about#${step.id}`}
                                    className={`group flex flex-col md:flex-row items-center justify-between relative w-full mb-8 md:mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Center Circular Icon */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-cream border-2 border-primary/5 shadow-lg z-20 hidden md:flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                        <div
                                            className="w-12 h-12 rounded-full flex items-center justify-center text-white z-10"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            {step.icon}
                                        </div>
                                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 animate-ping bg-orange transition-opacity"></div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="w-full md:w-[45%] p-8 bg-white rounded-[2rem] border border-primary/5 shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/5 group-hover:-translate-y-2 relative overflow-hidden"
                                    >
                                        <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-6 md:hidden shadow-md" style={{ backgroundColor: step.color }}>
                                                {step.icon}
                                            </div>
                                            <h3 className="text-2xl font-extrabold text-primary mb-3 flex items-center gap-3">
                                                {step.title}
                                                <ArrowRight size={18} className="text-orange opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                                            </h3>
                                            <p className="text-primary/60 leading-relaxed font-medium line-clamp-2">
                                                {step.desc}
                                            </p>
                                        </div>
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </motion.div>

                                    {/* Spacer for MD screens */}
                                    <div className="hidden md:block w-[45%]"></div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
