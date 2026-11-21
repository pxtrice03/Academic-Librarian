import {
    useState,
    useEffect
} from "react";

/**
 * @returns the scroll progress as a  value from 0 to 1
 */
const useScrollProgress (): number => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return progress;
};

/**
 * @returns the current scroll Y value and the direction of scroll
 */
const useScrollDirection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [direction, setDirection] = useState<'up' | 'down'>('up');
    const lastScrollY = { current: 0 };

    useEffect(() => {
        const handleScrollY = () => {
            const currentY= window.scrollY;
            setDirection(currentY > lastScrollY.current ? 'down' : 'up');
            lastScrollY.current = currentY;
            setScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrollY, direction };
};

export default { useScrollProgress, useScrollDirection };
