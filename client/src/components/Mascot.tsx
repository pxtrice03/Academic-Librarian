import type { ReactNode } from "react";
import MascotFace from "@/components/MascotFace";
import { cn } from "@libs/utils";
import type { MascotPose } from "@types/mascot";

/** Props of the mascot. */
type MascotProps = {
    pose?: MascotPose; // pose to display (default: wave)
    className?: string; // size and position, e.g. "w-40"
};

/**
 * Draws one wing: a rotated ellipse (helper, not a component).
 * @param cx - center x
 * @param cy - center y
 * @param angle - rotation in degrees (positive = clockwise)
 * @returns the wing shape
 */
const wing = (cx: number, cy: number, angle: number): ReactNode => (
    <ellipse cx={cx} cy={cy} rx="13" ry="32" transform={`rotate(${angle} ${cx} ${cy})`} className="fill-primary" />
);

// Wings and props per pose: the only part that changes between poses (DRY)
const poseParts: Record<MascotPose, ReactNode> = {
    // one wing resting, one wing waving
    wave: (
        <>
            {wing(52, 134, 8)}
            {/* the group carries the CSS wave animation */}
            <g className="mascot-wave">{wing(156, 108, 35)}</g>
        </>
    ),
    // open book first, then wings on top so they seem to hold it
    read: (
        <>
            <path d="M58 124 L100 132 L142 124 L142 162 L100 170 L58 162 Z" className="fill-accent" />
            <path d="M64 126 L100 134 L100 164 L64 156 Z" className="fill-card" />
            <path d="M136 126 L100 134 L100 164 L136 156 Z" className="fill-card" />
            {/* text lines on the pages */}
            <path d="M72 138 h20 M72 146 h20 M108 138 h20 M108 146 h20" strokeWidth="2" className="stroke-muted-foreground" />
            {wing(56, 146, -12)}
            {wing(144, 146, 12)}
        </>
    ),
    // one wing at the head, one resting, question marks floating around
    confused: (
        <>
            {wing(150, 134, -8)}
            {wing(48, 100, 25)}
            <text x="150" y="42" fontSize="30" fontWeight="700" className="fill-accent stroke-none">?</text>
            <text x="22" y="56" fontSize="20" fontWeight="700" className="fill-accent stroke-none">?</text>
        </>
    ),
    // closed book hugged tightly, sweat drop, one question mark
    lost: (
        <>
            <rect x="70" y="124" width="60" height="44" rx="5" className="fill-accent" />
            {/* spine */}
            <path d="M80 124 v44" strokeWidth="2" />
            {/* title label */}
            <rect x="90" y="136" width="30" height="12" rx="2" strokeWidth="2" className="fill-card" />
            {wing(64, 148, -12)}
            {wing(136, 148, 12)}
            {/* sweat drop */}
            <path d="M162 52 q7 11 0 15 q-7 -4 0 -15 Z" className="fill-card" />
            <text x="22" y="56" fontSize="22" fontWeight="700" className="fill-accent stroke-none">?</text>
        </>
    ),
};

/**
 * The Librarian's mascot: an owl with glasses, drawn as an inline SVG.
 * @param props - pose and className (size via Tailwind, e.g. "w-40")
 * @returns the full-body mascot
 */
const Mascot = ({ pose = "wave", className }: MascotProps) => (
    <svg
        viewBox="0 0 200 200" // fixed drawing space: scales with the className width
        role="img" // announced as an image
        aria-label="The Librarian mascot, an owl with glasses"
        strokeWidth={3} // outline width shared by every shape
        strokeLinecap="round" // rounded line ends
        strokeLinejoin="round" // rounded corners
        className={cn("stroke-foreground", className)} // outline color inherited by children
    >
        {/* talons, drawn first so the body overlaps them */}
        <ellipse cx="82" cy="182" rx="14" ry="6" className="fill-accent" />
        <ellipse cx="118" cy="182" rx="14" ry="6" className="fill-accent" />
        {/* body */}
        <ellipse cx="100" cy="128" rx="54" ry="52" className="fill-primary" />
        {/* belly, without outline */}
        <ellipse cx="100" cy="146" rx="34" ry="32" className="fill-muted stroke-none" />
        {/* feather scallops on the belly */}
        <path
            d="M82 134 q6 6 12 0 q6 6 12 0 q6 6 12 0 M88 146 q6 6 12 0 q6 6 12 0 M94 158 q6 6 12 0"
            strokeWidth="2.5"
            className="fill-none stroke-accent"
        />
        {/* wings and props of the chosen pose */}
        {poseParts[pose]}
        {/* head, drawn last so it sits on top */}
        <MascotFace pose={pose} />
    </svg>
);

export default Mascot;
