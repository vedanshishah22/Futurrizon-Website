import { Linkedin, Twitter, Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-cream pt-20 pb-10 border-t border-cream/10 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-peach/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                alt="Futurrizon Technologies Pvt. Ltd."
                                className="h-40 w-auto object-contain mb-6 opacity-90 cursor-pointer"
                            />
                        </Link>
                        <p className="text-cream/60 mb-6 leading-relaxed">
                            Empowering businesses with futuristic IT solutions. Transforming ideas into digital reality with premium enterprise services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/futurrizon-technologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-orange transition-colors text-cream">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-orange transition-colors text-cream">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-orange transition-colors text-cream">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-orange">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="/services#sharepoint" className="text-cream/60 hover:text-cream transition-colors">SharePoint Solutions</a></li>
                            <li><a href="/services#power-platform" className="text-cream/60 hover:text-cream transition-colors">Power Platform</a></li>
                            <li><a href="/services#m365" className="text-cream/60 hover:text-cream transition-colors">Microsoft 365</a></li>
                            <li><a href="/services#ai-gpt" className="text-cream/60 hover:text-cream transition-colors">AI & GPT Integration</a></li>
                            <li><a href="/services#azure" className="text-cream/60 hover:text-cream transition-colors">Azure Cloud Services</a></li>
                            <li><a href="/services#migration" className="text-cream/60 hover:text-cream transition-colors">Migration & Integration</a></li>
                            <li><a href="/services#analytics" className="text-cream/60 hover:text-cream transition-colors">Analytics & Reporting</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-orange">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-cream/60 hover:text-cream transition-colors">About Us</Link></li>
                            <li><Link to="/career" className="text-cream/60 hover:text-cream transition-colors">Careers</Link></li>
                            <li><Link to="/life" className="text-cream/60 hover:text-cream transition-colors">Life at Futurrizon</Link></li>
                            <li><Link to="/testimonials" className="text-cream/60 hover:text-cream transition-colors">Testimonials</Link></li>
                            <li><a href="/#contact" className="text-cream/60 hover:text-cream transition-colors">Contact</a></li>
                            <li><Link to="/privacy" className="text-cream/60 hover:text-cream transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-orange">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-orange mt-1 shrink-0" />
                                <span className="text-cream/60">
                                    SivantaOne Business Park, B-1213/1214, Ashram Rd,<br />
                                    opp. Nalli Silk Sarees, Pritam Nagar, Paldi,<br />
                                    Ahmedabad, Gujarat 380006
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-orange shrink-0" />
                                <div className="flex flex-col">
                                    <a href="mailto:info@futurrizon.com" className="text-cream/60 hover:text-cream transition-colors">info@futurrizon.com</a>
                                    <a href="mailto:hr@futurrizon.com" className="text-cream/60 hover:text-cream transition-colors">hr@futurrizon.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-cream/40 text-sm">
                        © {new Date().getFullYear()} Futurrizon Technologies Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/terms" className="text-cream/40 hover:text-cream text-sm transition-colors">Terms</Link>
                        <Link to="/privacy" className="text-cream/40 hover:text-cream text-sm transition-colors">Privacy</Link>
                        <Link to="/cookies" className="text-cream/40 hover:text-cream text-sm transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
