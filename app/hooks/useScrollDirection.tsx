import { useState, useEffect, useRef } from 'react';

// Custom hook to detect scroll direction
export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("");
    const lastScrollY = useRef(0);
    const [yAxis, setYAxis] = useState(0);

    useEffect(() => {
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset; // or window.scrollY
            setYAxis(scrollY);
            const direction = scrollY > lastScrollY.current ? "down" : "up";

            // Update state only if direction changed and scrolled enough
            if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY.current) > 10) {
                setScrollDirection(direction);
            }
            lastScrollY.current = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection);
        return () => window.removeEventListener('scroll', updateScrollDirection);
    }, [scrollDirection]);

    return { scrollDirection, yAxis };
};
