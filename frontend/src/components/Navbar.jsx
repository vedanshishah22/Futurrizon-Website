import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleHomeClick = () => {
        setMobileMenuOpen(false);
        if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#services', hasDropdown: true },
        { name: 'Industries', href: '/#industries' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                scrolled
                    ? 'bg-cream/95 backdrop-blur-md shadow-md border-b border-primary/10 py-1'
                    : 'bg-cream/80 backdrop-blur-sm py-1'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center" style={{ height: '55px' }}>
                {/* Logo — absolutely positioned so it overflows the bar without pushing its height */}
                <div className="relative" style={{ width: '80px', height: '75px' }}>
                    <Link to="/" onClick={handleHomeClick} className="absolute top-1/2 left-0 -translate-y-1/2">
                        <img
                            src="/logo.png"
                            alt="Futurrizon Technologies Pvt. Ltd."
                            style={{ height: '180px' }}
                            className="w-auto object-contain hidden md:block"
                        />
                        <img
                            src="/logo.png"
                            alt="Futurrizon Technologies Pvt. Ltd."
                            className="w-auto object-contain md:hidden"
                            style={{ height: '120px' }}
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.href.startsWith('/') ? (
                                <Link
                                    to={link.href}
                                    onClick={link.href === '/' ? handleHomeClick : undefined}
                                    className="text-primary/70 hover:text-primary transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>
                            ) : (
                                <a
                                    href={link.href}
                                    className="text-primary/70 hover:text-primary transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </a>
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-peach transition-all duration-300 group-hover:w-full"></span>

                            {link.hasDropdown && (
                                <div className="absolute top-full left-0 mt-4 w-64 bg-cream border border-primary/10 rounded-xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="flex flex-col space-y-2">
                                        <a href="#" className="text-primary/60 hover:text-orange text-sm py-1">Cloud Solutions</a>
                                        <a href="#" className="text-primary/60 hover:text-orange text-sm py-1">AI & Analytics</a>
                                        <a href="#" className="text-primary/60 hover:text-orange text-sm py-1">Cybersecurity</a>
                                        <a href="#" className="text-primary/60 hover:text-orange text-sm py-1">Digital Transformation</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="px-6 py-2 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-sm hover:shadow-md transition-all duration-200">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream border-t border-primary/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                link.href.startsWith('/') ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-primary/80 hover:text-orange text-lg font-medium"
                                        onClick={link.href === '/' ? handleHomeClick : () => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-primary/80 hover:text-orange text-lg font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}
                            <button className="w-full py-3 rounded-xl bg-orange text-white font-semibold">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
