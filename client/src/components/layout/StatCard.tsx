import type { LucideIcon } from 'lucide-react';

type StatCardProps = {
    label: string;
    value: number;
    icon: LucideIcon;
};

const StatCard = ({ label, value, icon: Icon }: StatCardProps) => {
    return (
        <div className="flex items-center gap-4 rounded-card border border-line bg-card p-4">
            <span className="hidden md:flex items-center justify-center rounded-btn size-12 bg-accent/20">
                <Icon className="size-6 text-accent" />
            </span>
            <div>
                <h2 className="text-2xl text-primary font-bold">{value.toLocaleString()}</h2>
                <p className="text-sm text-muted">{label}</p>
            </div>
        </div>
    );
}

export default StatCard;
