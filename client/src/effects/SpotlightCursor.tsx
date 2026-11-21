import { useEffect, useRef } from "react";
import { useMousePosition } from "@hooks/useMousePosition";

export const SpotlightCursor = () => {
    const { position } = useMousePosition();
    const spotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = spotRef.current;
        if(!el) return;
        // Use direct style mutation for maximum performance (avoids React re-render)
        el.style.transform = `translate(${position.x - 300}px, ${position.y - 300}px)`;
    }, [position]);

    return (
        <div
            className="pointer-events-none fixed top-0 z-30 w-150 h-150 rounded-full hidden md:block"
            aria-label="true"
            ref={spotRef}
            style={{
                background: 'radial-gradient(circle, rgba(124,107,255,0.06) 0%, transparent 70%)',
                filter: 'blur(1px)',
                willChange: 'transform',
                transition: 'transition 0.08s  linear   '
            }}
        />
    );
}
