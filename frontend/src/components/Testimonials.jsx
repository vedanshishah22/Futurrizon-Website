import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

import andrewImg from '../assets/clients/andrew.jpg';
import dominikImg from '../assets/clients/dominik.jpg';
import danImg from '../assets/clients/Dan.jpg';
import zotyImg from '../assets/clients/Zoty.jpg';
import tasImg from '../assets/clients/Tas.jpg';
import shaneImg from '../assets/clients/Shane.jpg';
import carlinImg from '../assets/clients/Carlin.jpg';

const testimonials = [
    {
        quote: "Working with the Futurrizon team has been a great experience. Their willingness to solve problems and go the extra mile to find the right solution truly stands out. We were especially impressed with their expertise in Azure and AI services and would highly recommend them for related projects",
        author: "Andrew Satanovsky",
        role: "Associate Director, Motion Graphics, Graphic Design and Web Design",
        image: andrewImg
    },
    {
        quote: "Focused and well organized specialist in the fields of BI, data analytics and MS SQL. Always a pleasure working together with Yashesh!",
        author: "Dominik Zehetner",
        role: "CEO at Clearvision Consulting",
        image: dominikImg
    },
    {
        quote: "Yashesh was recommended to us and has since become a trusted part of our team. He has successfully delivered multiple projects across areas like Infrastructure as Code, AngularJS, and Power BI, consistently producing strong results. His ability to manage resources, understand project scope, and deliver high-quality work within tight timelines has exceeded our expectations every time.",
        author: "Dan G.",
        role: "CTO & Chief Software Architect at Active Cypher",
        image: danImg
    },
    {
        quote: "Have worked with Yashesh on a number of PowerShell projects over the years and always found him to be knowledgable, reliable and most importantly capable of delivering quality results in agreed timeframes. He's a great person to work with.",
        author: "Tas Gray",
        role: "Managing Director - Cloud at Axiom IT",
        image: tasImg
    },
    {
        quote: "The Futurrizon team is professional, collaborative, and committed to delivering the best outcomes. They take the time to understand a client’s business in depth, which helps them design effective and practical solutions. Their dedication and readiness to go the extra mile make them a reliable technology partner.",
        author: "Shane Rigney",
        role: "Head of Enterprise Solutions at Allens",
        image: shaneImg
    },
    {
        quote: "I have had the pleasure of working with Yashesh Nagori in the past, and I am a testament to his engineering capabilities and genius. In the almost two years project we collaborated on together, I was constantly impressed by Yashesh's practical approach to our engineering challenges. I strongly recommend Yashesh to any Engineering team looking to augment their staff.",
        author: "Zoty De La Mota",
        role: "Sr. Data Professional (Architecture/Engineering/Analytical/Cloud/Agentic AI/Data Governance)",
        image: zotyImg
    },
    {
        quote: "The Futurrizon team has been highly responsive, knowledgeable, and easy to work with. Their strong expertise in SharePoint helped them deliver a custom solution for us efficiently and with great quality. We truly appreciate their timely support and would highly recommend their services.",
        author: "Carlin Atkinson",
        role: "IT Administrator",
        image: carlinImg
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="py-24 bg-cream relative overflow-hidden"
        >

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-peach to-transparent z-10"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Client Success Stories</h2>
                    <p className="text-xl text-primary/50">Don't just take our word for it.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute -top-10 -left-10 text-orange/10">
                        <Quote size={120} />
                    </div>

                    <div className="relative bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-orange/10">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <p className="text-lg md:text-xl font-light text-primary italic leading-relaxed mb-8">
                                    "{testimonials[current].quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange">
                                        <img src={testimonials[current].image} alt={testimonials[current].author} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-primary text-lg">{testimonials[current].author}</h4>
                                        <p className="text-orange text-sm font-medium">{testimonials[current].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 absolute bottom-8 right-8">
                            <button onClick={prevSlide} className="p-2 rounded-full bg-cream shadow-sm hover:bg-orange hover:text-white transition-colors text-primary">
                                <ArrowLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-2 rounded-full bg-cream shadow-sm hover:bg-orange hover:text-white transition-colors text-primary">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
