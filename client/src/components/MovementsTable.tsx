import { cn } from '@libs/utils';
import type { Movement, MovementStatus } from '@types/movement';
import type { ReactNode } from "react";

type MovementTableProps = {
    rows: Movement[];
    renderActions?: (row: Movement) => ReactNode;
};

const typeStyles: Record<Movement["type"], { label: string; className: string }> = {
    emprunt: { label: "Emprunt", className: "bg-primary/10 text-primary" },
    retour: { label: "Retour", className: "bg-muted text-muted" },
    reservation: { label: "Reservation", className: "bg-accent/15 text-accent" }
};

const statusStyles: Record<Movement["type"], { label: string; className: string }> = {
    en_cours: { label: "En cours", className: "bg-primary/10 text-primary" },
    en_retard: { label: "En retard", className: "bg-destructive/10 text-destructive" },
    rendu: { label: "Rendu", className: "bg-muted text-muted-foreground" },
    en_attente: { label: "En attente", className: "bg-accent/15 text-accent-foreground" },
    annule: { label: "Annule", className: "bg-muted text-muted-foreground" },
};


const MovementsTable = ({ rows, renderActions }: MovementsTableProps) => {
    return (
        <div className="overflow-x-auto rounded-card border border-line bg-card">
            <table className="w-full text-left text-sm">
                <thead className="bg-muted text-xs uppercase text-muted">
                    <tr>
                        {["Lecteur", "Livre", "Type", "Statut", "Date"].map((h) => (
                            <th key={h} className="px-6 py-3 font-medium">{h}</th>
                        ))}
                        {renderActions && <th className="px-6 py-3 text-right font-medium">Actions</th>}
                    </tr>
                    <th className="px-6 py-3 text-right font-medium">Actions</th>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="border-t border-border">
                            <td className="px-6 py-4 font-medium">{row.reader}</td>
                            <td className="px-6 py-4">{row.book}</td>
                            <td className="px-6 py-4">
                                <span className={cn("rounded-full px-3 py-1 text-xs font-medium", typeStyles[row.type].className)}>
                                {typeStyles[row.type].label}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {/* statut optionnel : tiret si absent */}
                                {row.status ? (
                                    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", statusStyles[row.status].className)}>
                                        {statusStyles[row.status].label}
                                    </span>
                                ) : (
                                    <span className="text-muted-foreground">-</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-muted-foreground">{row.date}</td>
                            {renderActions && (
                                <td className="px-6 py-4">
                                    <div className="flex justify-end gap-1">{renderActions(row)}</div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovementsTable;
