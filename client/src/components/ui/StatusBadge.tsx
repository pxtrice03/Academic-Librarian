const STYLES: Record<string, [string, string]> = {
    active: ['En cours', 'bg-primary/10 text-primary'],
    overdue: ['En retard', 'bg-danger/10 text-danger'],
    returned: ['Rendu', 'bg-success/10 text-success'],
    pending: ['En attente', 'bg-warning/10 text-warning'],
    ready: ['Pret a emprunter', 'bg-success/10 text-success'],
    fulfilled: ['Honoree', 'bg-muted text-muted-foreground'],
    cancelled: ['Annulee', 'bg-muted text-muted-foreground']
}

interface StatusBadgeProps {
    status: strings;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
    const [label, cls] = STYLES[status] ?? [status, 'bg-muted']
    return <span className={`rounded-full px-2 py-0.5 text-sm font-medium ${cls}`}>{label}</span>
}

export default StatusBadge;
