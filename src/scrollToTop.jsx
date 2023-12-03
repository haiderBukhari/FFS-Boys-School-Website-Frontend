import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const Location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Location.pathname])
} 