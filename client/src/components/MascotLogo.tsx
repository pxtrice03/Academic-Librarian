import MascotFace from "@components/MascotFace";
import { cn } from "@libs/utils";

/** Props of the logo. */
type MascotLogoProps = { className?: string };

/**
 * Simplified logo: only the mascot's head, via a cropped viewBox.
 * @param props - className (height via Tailwind, e.g. "h-8")
 * @returns the head as a compact SVG
 */
const MascotLogo = ({ className }: MascotLogoProps) => (
    <svg
        viewBox="38 18 124 110" // crops the 200x200 drawing around the owl's head (tufts included)
        role="img"
        aria-label="The Librarian logo, an owl"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("stroke-foreground", className)}
    >
        <MascotFace pose="wave" />
    </svg>
);

export default MascotLogo;
