import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import FuriChat from './components/FuriChat';

// Lazy load the detail pages for better performance
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-light">
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-white text-navy font-bold">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/blog/:blogId" element={<BlogDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <FuriChat />
      </div>
    </Router>
  );
}

export default App;
