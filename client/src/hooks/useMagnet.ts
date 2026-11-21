import {
    useRef,
    useCallback
} from "react";
import { useSpring } from "motion";
import type { MouseEvent } from "react";

const STRENGTH = 0.35;

/**
 * Magnetic button hook
 * @returns event handlers and motion values for x/y offset
 */
const const useMagnet = () => {
    const ref = useRef<HTMLElement>(null);

    const x = useSpring(0, { stiffness: 200, damping: 200, mass: 0.5 });
    const y = useSpring(0, { stiffness: 200, damping: 200, mass: 0.5 });

    const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
        const el = ref.current;
        if(!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * STRENGTH);
        y.set((e.cleintY - cy) * STRENGTH);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return { ref, x, y, handleMouseMove, handleMouseLeave };
};

export default useMagnet;
