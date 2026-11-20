import { cn } from '@libs/utils';
import type { Movement, MovementStatus } from '@types/movement';
import type { ReactNode } from "react";

type MovementTableProps = {
    rows: Movement[];
    renderActions?: (row: Movement) => ReactNode;
};

const typeStyles: Record<Movement["type"], { label: string; className: string }> = {
    emprunt: { label: "Emprunt", className: "bg-muted/10 text-muted" },
    retour: { label: "Retour", className: "bg-muted/10 text-muted" },
    reservation: { label: "Reservation", className: "bg-accent/15 text-accent" }
};

const statusStyles: Record<Movement["type"], { label: string; className: string }> = {
    en_cours: { label: "En cours", className: "bg-primary/10 text-primary" },
    en_retard: { label: "En retard", className: "bg-danger/10 text-danger" },
    rendu: { label: "Rendu", className: "bg-success/10 text-success" },
    en_attente: { label: "En attente", className: "bg-accent/15 text-accent" },
    annule: { label: "Annule", className: "bg-muted/10 text-primary-foreground" },
};


const MovementsTable = ({ rows, renderActions }: MovementsTableProps) => {
    return (
        <div className="overflow-x-auto rounded-btn border border-line bg-card">
            <table className="w-full text-left text-sm">
                <thead className="bg-muted/10 text-sm uppercase text-muted">
                    <tr>
                        {["Lecteur", "Livre", "Type", "Statut", "Date"].map((h) => (
                            <th key={h} className="px-6 py-2 font-medium">{h}</th>
                        ))}
                        {renderActions && <th className="px-6 py-2 font-medium text-center">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="border-t border-line">
                            <td className="px-6 py-2 font-medium">{row.reader}</td>
                            <td className="px-6 py-2">{row.book}</td>
                            <td className="px-6 py-2">
                                <span className={cn("rounded-full px-3 py-1 text-xs font-medium", typeStyles[row.type].className)}>
                                    {typeStyles[row.type].label}
                                </span>
                            </td>
                            <td className="px-6 py-2">
                                {/* statut optionnel : tiret si absent */}
                                {row.status ? (
                                    <span className={cn("rounded-full px-3 py-1 text-xs font-medium", statusStyles[row.status].className)}>
                                        {statusStyles[row.status].label}
                                    </span>
                                ) : (
                                    <span className="text-primary font-medium">/</span>
                                )}
                            </td>
                            <td className="px-6 py-2 text-muted-foreground">{row.date}</td>
                            {renderActions && (
                                <td className="px-6">
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
