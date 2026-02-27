import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', company: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-peach/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Info */}
                    <div className="text-cream">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-orange/20 text-orange font-medium text-sm mb-6 border border-orange/30">
                            Get in Touch
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Build the <br />
                            <span style={{ background: 'linear-gradient(to right, #FF5F00, #FF9F66)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Future Together</span>
                        </h2>
                        <p className="text-cream/60 text-lg mb-12 leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Our team of experts is ready to help you achieve your digital goals.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-orange/15 flex items-center justify-center text-orange shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-cream">Visit Us</h4>
                                    <p className="text-cream/60">
                                        SivantaOne Business Park, B-1213/1214, Ashram Rd,
                                        opp. Nalli Silk Sarees, Pritam Nagar, Paldi,
                                        Ahmedabad, Gujarat 380006
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-orange/15 flex items-center justify-center text-orange shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-cream">Email Us</h4>
                                    <p className="text-cream/60">info@futurrizon.com</p>
                                    <p className="text-cream/60">hr@futurrizon.com</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-cream rounded-2xl p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center h-80 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-orange/10 flex items-center justify-center text-orange mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-2">Message Sent!</h4>
                                <p className="text-primary/60">We'll get back to you within 24 hours.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-primary/70 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white border border-orange/20 rounded-lg px-4 py-3 text-primary placeholder-primary/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white border border-orange/20 rounded-lg px-4 py-3 text-primary placeholder-primary/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-primary/70 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-orange/20 rounded-lg px-4 py-3 text-primary placeholder-primary/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                                        placeholder="Your Company Ltd."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-primary/70 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-white border border-orange/20 rounded-lg px-4 py-3 text-primary placeholder-primary/30 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 rounded-xl bg-orange text-white font-bold text-lg shadow-md hover:bg-orange/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <Loader2 size={24} className="animate-spin" />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
