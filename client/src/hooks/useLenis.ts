import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import Lenis from 'lenis';

// activate the Lenis and scroll to the anchor when URL changes
const useLenis = (): void => {
    const lenisRef = useRef<Lenis | null>(null); // keeps instances between renders
    const { hash, key } = useLocation(); // key changes at each navigations, event towards the same hash

    useEffect(() => {
        const lenis = new Lenis({ duration: 1.1 });
        lenisRef.current = lenis;
        let frameId = 0;

        const raf = (time: number): void => {
            lenis.raf(time); // update the position of the scroll
            frameId = requestAnimationFrame(raf); // plan the next frame
        };
        frameId = requestAnimationFrame(raf); // starts the loop

        // clean: stops the loop and destroys the instance
        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy(); // liberates lenis
            lenisRef.current = null;
        };
    }, []); // just 1 time unmount

    useEffect(() => {
        if(!hash) return;
        lenisRef.current?.scrollTo(hash);
    }, [hash, key]);
};

export default useLenis;
