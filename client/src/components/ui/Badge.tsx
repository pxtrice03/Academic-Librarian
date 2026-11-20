import { cn } from "@libs/utils";

export type Tone = "primary" | "accent" | "muted" | "danger";

const tones: Record<Tone, string> = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/15 text-accent",
    muted: "bg-muted text-muted",
    danger: "bg-danger/10 text-danger"
};

type BadgeProps = {
    label: string;
    tone: Tone;
};

const Badge = ({ label, tone }: BadgeProps) => (
    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", tones[tone])}>{label}</span>
);

export default Badge;
