import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShoppingCart, Landmark, Stethoscope, Truck, GraduationCap } from 'lucide-react';

const industries = [
    { icon: <Briefcase size={32} />, name: 'Corporate & Finance', bg: 'bg-primary' },
    { icon: <ShoppingCart size={32} />, name: 'Retail & E-commerce', bg: 'bg-orange' },
    { icon: <Landmark size={32} />, name: 'Banking & Insurance', bg: 'bg-navy' },
    { icon: <Stethoscope size={32} />, name: 'Healthcare & Pharma', bg: 'bg-peach' },
    { icon: <Truck size={32} />, name: 'Logistics & Supply Chain', bg: 'bg-primary' },
    { icon: <GraduationCap size={32} />, name: 'Education & EdTech', bg: 'bg-orange' },
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="py-24 bg-primary text-cream relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-cream">Industries We Serve</h2>
                        <p className="text-cream/60 text-lg max-w-xl">
                            Tailored IT solutions for diverse sectors, ensuring compliance, security, and growth.
                        </p>
                    </div>
                    <button className="px-6 py-3 rounded-xl border border-peach/40 hover:bg-peach/10 hover:border-peach/70 text-peach transition-all duration-300">
                        View All Industries
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl h-64 bg-cream border border-navy/5 hover:border-orange/20 transition-all duration-500 shadow-sm hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                <div className="mb-4 text-orange transform translate-y-0 transition-transform duration-300">
                                    {ind.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-navy transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">{ind.name}</h3>
                                <div className="h-1.5 w-12 bg-orange rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
