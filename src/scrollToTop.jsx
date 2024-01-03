import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    let current_location = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [current_location])
    return null;
}

export const MoveToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}