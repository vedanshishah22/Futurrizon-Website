import React from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TechStack from '../components/TechStack';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <TechStack />
            <ServicesSection />
            <AboutSection />
            <IndustriesSection />
            <WhyChooseUs />
            <Testimonials />
            <ContactSection />
        </main>
    );
};

export default Home;
