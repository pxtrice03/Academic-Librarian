import { useEffect } from 'react';

/**
 * adds a class 'is-visible' to elements [data-reveal] when they enter in the screen
 */
const useReveal = (): void => {
    useEffect(() => {
        // every revealed elements
        const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

        // observer: reacts to entry in viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(!entry.isIntersecting) return; // ignore if not yet visible
                    entry.target.classList.add('is-visible'); // starts the CSS transition
                    observer.unobserve(entry.target); // reveals 1 time
                });
            }, { threshold: 0.15 }
        );
        targets.forEach((el) => observer.observe(el)); // observes each target
        return () => observer.disconnect(); // clean on unmount
    }, []);
}

export default useReveal;
