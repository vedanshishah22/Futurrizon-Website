import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

    const handleHomeClick = () => {
        setMobileMenuOpen(false);
        setActiveMobileDropdown(null);
        if (window.location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const toggleMobileDropdown = (key) => {
        setActiveMobileDropdown(activeMobileDropdown === key ? null : key);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setActiveMobileDropdown(null);
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
        {
            name: 'Company',
            href: '/about',
            hasDropdown: true,
            dropdownKey: 'company',
            subLinks: [
                { name: 'Portfolio', href: '/#portfolio' },
                { name: 'Career', href: '/career' },
                { name: 'Life at Futurrizon', href: '/life' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Our Team', href: '/team' },
                { name: 'Blogs', href: '/blogs' },
            ]
        },
        { name: 'About Us', href: '/about' },
        {
            name: 'Services',
            href: '/services',
            hasDropdown: true,
            dropdownKey: 'services',
            subLinks: [
                { name: 'SharePoint Solution', href: '/services#sharepoint' },
                { name: 'Power Platform', href: '/services#power-platform' },
                { name: 'Microsoft 365 Optimization', href: '/services#m365' },
                { name: 'AI & GPT Integration', href: '/services#ai-gpt' },
                { name: 'Migration & Integration', href: '/services#migration' },
                { name: 'Managed Services & Support', href: '/services#support' },
                { name: 'Azure Cloud Services', href: '/services#azure' },
                { name: 'Advanced Analytics & Reporting', href: '/services#analytics' },
                { name: 'Financial & Operational Modeling', href: '/services#financial' },
            ]
        },
        { name: 'Industries', href: '/industries' },
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
                                </Link>
                            ) : (
                                <a
                                    href={link.href}
                                    className="text-primary/70 hover:text-primary transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
                                >
                                    {link.name}
                                </a>
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange to-peach transition-all duration-300 group-hover:w-full"></span>

                            {link.hasDropdown && (
                                <div className={clsx(
                                    "absolute top-full left-0 mt-4 bg-cream border border-primary/10 rounded-xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0",
                                    link.dropdownKey === 'services' ? 'w-72' : 'w-60'
                                )}>
                                    <div className="flex flex-col space-y-2">
                                        {link.subLinks.map((sub) => (
                                            sub.href.startsWith('/') ? (
                                                <Link key={sub.name} to={sub.href} className="text-primary/60 hover:text-orange text-sm py-1 transition-colors">{sub.name}</Link>
                                            ) : (
                                                <a key={sub.name} href={sub.href} className="text-primary/60 hover:text-orange text-sm py-1 transition-colors">{sub.name}</a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/#contact" className="px-6 py-2 rounded-xl bg-orange text-white font-semibold text-sm hover:bg-orange/90 shadow-sm hover:shadow-md transition-all duration-200">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary p-2 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
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
                                <div key={link.name} className="flex flex-col space-y-2">
                                    <div className="flex items-center justify-between">
                                        {link.href.startsWith('/') ? (
                                            <Link
                                                to={link.href}
                                                className="text-primary/80 hover:text-orange text-lg font-medium py-1"
                                                onClick={link.href === '/' ? handleHomeClick : (link.hasDropdown ? undefined : closeMobileMenu)}
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="text-primary/80 hover:text-orange text-lg font-medium py-1"
                                                onClick={link.hasDropdown ? undefined : closeMobileMenu}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                        {link.hasDropdown && (
                                            <button
                                                onClick={() => toggleMobileDropdown(link.dropdownKey)}
                                                className="p-2 text-primary/60"
                                            >
                                                <motion.div
                                                    animate={{ rotate: activeMobileDropdown === link.dropdownKey ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={20} />
                                                </motion.div>
                                            </button>
                                        )}
                                    </div>

                                    {link.hasDropdown && (
                                        <AnimatePresence>
                                            {activeMobileDropdown === link.dropdownKey && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="overflow-hidden bg-primary/5 rounded-lg ml-2"
                                                >
                                                    <div className="flex flex-col py-2 px-4 space-y-2">
                                                        {link.subLinks.map((sub) => (
                                                            sub.href.startsWith('/') ? (
                                                                <Link
                                                                    key={sub.name}
                                                                    to={sub.href}
                                                                    className="text-primary/60 hover:text-orange text-base py-2 transition-colors"
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ) : (
                                                                <a
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    className="text-primary/60 hover:text-orange text-base py-2 transition-colors"
                                                                    onClick={closeMobileMenu}
                                                                >
                                                                    {sub.name}
                                                                </a>
                                                            )
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                            <Link to="/#contact" onClick={closeMobileMenu} className="block text-center w-full py-4 rounded-xl bg-orange text-white font-semibold text-lg shadow-sm">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
