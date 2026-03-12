import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import imgHealthcare from '../assets/industry_healthcare.png';
import imgFinance from '../assets/industry_finance.jpg';
import imgManufacturing from '../assets/industry_manufacturing.png';
import imgEducation from '../assets/industry_education.png';
import imgRetail from '../assets/industry_retail.jpg';
import imgEnergy from '../assets/industry_energy.png';

const industries = [
    {
        id: 'healthcare',
        name: 'Healthcare & Pharma',
        image: imgHealthcare,
        desc: 'Secure patient portals, compliant scheduling, and centralized health records tailored for medical providers.'
    },
    {
        id: 'finance',
        name: 'Finance & Banking',
        image: imgFinance,
        desc: 'Automated lending, real-time analytics, and secure document management for banking and finance.'
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        image: imgManufacturing,
        desc: 'Data-driven supply chains, mobile inventory tracking, and shop floor collaboration tools.'
    },
    {
        id: 'education',
        name: 'Education & EdTech',
        image: imgEducation,
        desc: 'Hybrid learning environments, digital grading solutions, and secure student data management.'
    },
    {
        id: 'retail',
        name: 'E-Commerce & Retail',
        image: imgRetail,
        desc: 'Unified customer data hubs, live sales analytics, and automated order tracking systems.'
    },
    {
        id: 'energy',
        name: 'Energy & Utilities',
        image: imgEnergy,
        desc: 'Mobile field inspections, real-time outage dashboards, and compliance documentation.'
    },
];

const IndustriesSection = () => {
    return (
        <section id="industries" className="py-24 bg-primary relative overflow-hidden">


            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange/40 bg-orange/10 mb-5">
                            <span className="text-orange text-xs font-semibold uppercase tracking-widest">Sectors</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-cream">Industries We Serve</h2>
                        <p className="mt-4 text-cream/70 text-lg max-w-xl leading-relaxed">
                            Tailored IT solutions for diverse sectors, ensuring compliance, security, and growth.
                        </p>
                    </div>
                    <Link to="/industries" className="mx-auto md:mx-0 px-6 py-3 rounded-xl border border-orange/40 hover:bg-orange text-cream hover:text-white transition-all duration-300 font-medium whitespace-nowrap">
                        Explore All Industries →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, index) => (
                        <Link to={`/industries#${ind.id}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-xl hover:shadow-2xl shadow-[#1D2130]/30 hover:shadow-orange/30 transition-shadow duration-500"
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${ind.image})` }}
                                ></div>

                                {/* Dark Overlay Base */}
                                <div className="absolute inset-0 bg-gray-900/20 transition-opacity duration-500 group-hover:bg-gray-900/60"></div>
                                {/* Gradient for text readability at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>

                                {/* Content container */}
                                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-left">
                                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white transition-transform duration-500 group-hover:-translate-y-1">
                                        {ind.name}
                                    </h3>

                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <div className="h-1 w-12 bg-orange rounded-full mt-4 mb-3 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100"></div>
                                            <p className="text-cream/90 text-sm lg:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pb-2">
                                                {ind.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
