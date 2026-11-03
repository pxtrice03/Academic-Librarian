type Tone = 'ok' | 'warn' | 'bad' | 'neutral';
const tones: Record<Tone, string> = {
    ok: 'bg-success/15 text-success',
    warn: 'bg-accent/15 text-accent',
    bad: 'bg-danger/15 text-danger',
    neutral: 'bg-muted/15 text-muted-foreground'
};

interface BadgeProps {
    tone?: Tone;
    children: string;
}

const badge = ({ tone = 'neutral', children }: BadgeProps) => {
    return <span className={`rounded-full px-2 py-0.5 text-sm font-medium ${tones[tone]}`}>{children}</span>
}

export default Badge;
