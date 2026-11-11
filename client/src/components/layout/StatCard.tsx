import type { LucideIcon } from 'lucide-icon';

type StatCardProps = {
    label: string;
    value: number;
    icon: LucideIcon;
};

const StatCard = ({ label, value, icon: LucideIcon }: StatCardProps) => {
    return (
        <div className="flex items-center gap-4 rounded-card border border-line bg-card p-6">
            <span className="flex items-center justify-center rounded-lg size-12 bg-muted">
                <Icon className="size-6 text-accent" />
            </span>
            <div>
                <p className="text-2xl font-bold">{value.toLocaleString()}</p>
                <p className="text-sm text-muted">{label}</p>
            </div>
        </div>
    );
}

export default StatCard;
