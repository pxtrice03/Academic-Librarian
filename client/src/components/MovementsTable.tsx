import { cn } from '@libs/utils';
import type { Movement } from '@types/movement';
import {
    Pencil,
    Trash2
} from 'lucide-react';

type MovementTableProps = { rows: Movement[] };

const typeStyles: Record<Movement["type"], { label: string; className: string }> = {
    emprunt: { label: "Emprunt", className: "bg-primary/10 text-primary" },
    retour: { label: "Retour", className: "bg-muted text-muted" },
    reservation: { label: "Reservation", className: "bg-accent/15 text-accent" }
};

const MovementsTable = ({ rows }: MovementsTableProps) => {
    return (
        <div className="overflow-x-auto rounded-card border border-line bg-card">
            <table className="w-full text-left text-sm">
                <thead className="bg-muted text-xs uppercase text-muted">
                    <tr>
                        {["Lecteur", "Livre", "Type", "Date"].map((h) => (
                            <th key={h} className="px-6 py-3 font-medium">{h}</th>
                        ))}
                    </tr>
                    <th className="px-6 py-3 text-right font-medium">Actions</th>
                </thead>
                <tbody>
                    {rows.map(({ id, reader, book, type, date }) => (
                        <tr key={id} clasName="border-t border-line">
                            <td className="px-6 py-2 font-medium">{reader}</td>
                            <td className="px-6 py-2">{book}</td>
                            <td className="px-6 py-2">
                                <span className={cn("rounded-full px-3 py-1 text-xs font-medium", typeStyles[type].className)}>
                                    {typeStyles[type].label}
                                </span>
                            </td>
                            <td className="px-6 py-2 text-muted">{date}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-end gap-2">
                                    <button
                                        type="button"
                                        aria-label="Modifier"
                                        className="rounded-btn p-2 text-success/85 transition-colors duration-500 hover:bg-success/10 hover:text-success"
                                    >
                                        <Pencil className="size-4" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Supprimer"
                                        className="rounded-btn p-2 text-dange/85 transition-colors duration-500 hover:bg-danger/10 hover:text-danger"
                                    >
                                        <Trash2 className="size-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MovementsTable;
