import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Futurrizon transformed our legacy systems into a modern cloud infrastructure, boosting our efficiency by 40%.",
        author: "Sarah Johnson",
        role: "CTO, TechFlow Inc.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "Their AI solutions helped us predict market trends with scary accuracy. A truly visionary partner.",
        author: "David Chen",
        role: "Director of Product, FinEdge",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Professional, timely, and innovative. The mobile app they built for us has won three industry awards.",
        author: "Emily Davis",
        role: "Founder, HealthFirst",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
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
        <section className="py-24 bg-cream relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-peach to-transparent"></div>

            <div className="container mx-auto px-6 text-center">
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
                                <p className="text-2xl md:text-3xl font-light text-primary italic leading-relaxed mb-8">
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
