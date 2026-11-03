import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
    children: ReactNode;
    delay?: number;
}

/**
 * Reveal on scroll
*/
const Reveal = ({ children, delay = 0 }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null); // element pbserved
    const [visible, setVisible] = useState(false); // already revealed

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect(); // revealed one time
                }
            }, {
                threshold: 0.15
            }
        );
        if(ref.current) obs.observe(ref.current);
        return () => obs.disconnect(); // clean
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
            {children}
        </div>
    )
}

export default Reveal;
