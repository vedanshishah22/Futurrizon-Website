import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // Wait for lazy components and animations to render
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    // Try to scroll precisely to the element, adding offset for fixed navbar
                    const yOffset = -80; 
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 500); // 500ms delay helps with Lazy Load and Framer Motion
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToTop;
