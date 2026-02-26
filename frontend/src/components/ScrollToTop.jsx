import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top if there's NO hash (going to a page root)
        // OR if the pathname changed (going to a new page)
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.key, location.hash]);

    return null;
};

export default ScrollToTop;
