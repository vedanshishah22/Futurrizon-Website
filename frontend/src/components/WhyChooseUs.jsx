import React from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Globe, Zap, Star } from 'lucide-react';

const features = [
    { title: 'Industry Expertise', desc: 'Over a decade of experience delivering enterprise-grade solutions.' },
    { title: 'Global Reach', desc: 'Serving clients across 30+ countries with 24/7 dedicated support.' },
    { title: 'Agile Methodology', desc: 'Flexible engagement models that adapt to your business evolution.' },
    { title: 'Innovation First', desc: 'We stay ahead of the curve, integrating the latest tech trends.' },
];

const WhyChooseUs = () => {
    return (
        <section id="why" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full bg-orange/10 text-orange font-medium text-sm mb-6 border border-orange/20">
                            Why Futurrizon
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            Partner with the <br />
                            <span style={{ background: 'linear-gradient(to right, #FF5F00, #FF9F66)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Future of IT</span>
                        </h2>
                        <p className="text-primary/60 text-lg mb-8 leading-relaxed">
                            We don't just write code; we architect digital ecosystems that drive growth, efficiency, and sustainability for your business.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feat, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white shrink-0">
                                            <Check size={16} />
                                        </div>
                                        <h3 className="font-bold text-primary text-lg">{feat.title}</h3>
                                    </div>
                                    <p className="text-primary/50 pl-11 text-sm">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-cream p-8 rounded-2xl shadow-md border-l-4 border-orange transform sm:translate-y-12">
                                <Users size={40} className="text-orange mb-4" />
                                <h3 className="text-4xl font-bold text-primary mb-1">500+</h3>
                                <p className="text-primary/50">Satisfied Clients</p>
                            </div>
                            <div className="bg-primary p-8 rounded-2xl shadow-md border-l-4 border-peach text-cream">
                                <Globe size={40} className="text-peach mb-4" />
                                <h3 className="text-4xl font-bold mb-1">30+</h3>
                                <p className="text-cream/60">Countries Served</p>
                            </div>
                            <div className="bg-orange p-8 rounded-2xl shadow-md border-l-4 border-cream text-white">
                                <Zap size={40} className="text-cream mb-4" />
                                <h3 className="text-4xl font-bold mb-1">98%</h3>
                                <p className="text-white/80">Project Success Rate</p>
                            </div>
                            <div className="bg-cream p-8 rounded-2xl shadow-md border-l-4 border-peach transform sm:translate-y-12">
                                <Star size={40} className="text-peach mb-4" />
                                <h3 className="text-4xl font-bold text-primary mb-1">4.9/5</h3>
                                <p className="text-primary/50">Clutch Review Score</p>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-peach/10 to-orange/10 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
