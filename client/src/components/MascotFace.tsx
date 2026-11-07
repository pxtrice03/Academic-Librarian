import type { ReactNode } from "react";
import type { MascotPose } from "@types/mascot";

/** Props of the face: only the pose. */
type MascotFaceProps = { pose: MascotPose };

// Pupil offset per pose [x, y]: changes where the owl looks (DRY)
const gaze: Record<MascotPose, [number, number]> = {
    wave: [0, 0], // looks straight ahead
    read: [0, 5], // looks down at the book
    confused: [3, -3], // looks up and aside
    lost: [-5, 0], // looks to the side
};

// Eyebrows per pose: absent for happy poses (DRY)
const brows: Partial<Record<MascotPose, ReactNode>> = {
    // one raised arch, one flat line: puzzled
    confused: <path d="M60 52 q12 -9 24 -2 M116 54 L140 58" className="fill-none stroke-card" />,
    // inner ends raised: worried
    lost: <path d="M60 56 L84 48 M116 48 L140 56" className="fill-none stroke-card" />,
};

/**
 * Draws the owl's head as an SVG group (ear tufts, head, face discs, eyes, glasses, beak).
 * Must be rendered inside an <svg>.
 * @param props - the pose that drives gaze, eyebrows and head tilt
 * @returns the SVG group of the face
 */
const MascotFace = ({ pose }: MascotFaceProps) => {
    const [dx, dy] = gaze[pose]; // pupil offset for this pose
    const tilt = pose === "confused" ? -8 : 0; // only the confused pose tilts its head

    return (
        // rotate around the head center to tilt it
        <g transform={`rotate(${tilt} 100 100)`}>
            {/* ear tufts, drawn first so the head overlaps their base */}
            <path d="M52 56 L46 22 L84 42 Z" className="fill-primary" />
            <path d="M148 56 L154 22 L116 42 Z" className="fill-primary" />
            {/* head */}
            <ellipse cx="100" cy="80" rx="56" ry="44" className="fill-primary" />
            {/* facial discs, one per eye */}
            <circle cx="76" cy="78" r="26" className="fill-muted" />
            <circle cx="124" cy="78" r="26" className="fill-muted" />
            {/* eye whites */}
            <circle cx="76" cy="78" r="14" className="fill-card" />
            <circle cx="124" cy="78" r="14" className="fill-card" />
            {/* pupils, shifted by the gaze offset */}
            <circle cx={76 + dx} cy={78 + dy} r="7" className="fill-foreground stroke-none" />
            <circle cx={124 + dx} cy={78 + dy} r="7" className="fill-foreground stroke-none" />
            {/* eye highlights for a cuter look */}
            <circle cx={78.5 + dx} cy={75.5 + dy} r="2.2" className="fill-card stroke-none" />
            <circle cx={126.5 + dx} cy={75.5 + dy} r="2.2" className="fill-card stroke-none" />
            {/* amber glasses: two rings and a bridge */}
            <circle cx="76" cy="78" r="20" className="fill-none stroke-accent" />
            <circle cx="124" cy="78" r="20" className="fill-none stroke-accent" />
            <path d="M96 78 h8" className="stroke-accent" />
            {/* beak */}
            <path d="M91 90 L109 90 L100 108 Z" className="fill-accent" />
            {/* eyebrows if the pose has any */}
            {brows[pose]}
        </g>
    );
};

export default MascotFace;
