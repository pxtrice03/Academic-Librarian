import { CalendarPlus } from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import DataTable, { type Column } from "@components/layout/DataTable";
import ActionButton from "@components/ui/ActionButton";
import Badge from "@components/ui/Badge";
import type { Loan } from "@types/loan";

const loans: Loan[] = [
    { id: "1", book: "Macroeconomie", borrowedAt: "04/11/2026", dueAt: "18/11/2026", status: "en_cours" },
    { id: "2", book: "Principes de comptabilite generale", borrowedAt: "15/10/2026", dueAt: "29/10/2026", status: "en_retard" }
];

// label and ongoing status
const statuses: Record<Loan["status"], { label: string; tone: Tone }> = {
    en_cours: { label: "En cours", tone: "primary" },
    en_retard: { label: "En retard", tone: "danger" },
    rendu: { label: "Rendu", tone: "muted" },
};

const columns: Columns<Loan>[] = [
    { header: "Livres", cell: (l) => <span className="font-medium">{l.book}</span> },
    { header: "Emprunte le", cell: (l) => l.borrowedAt },
    { header: "A rendre le", cell: (l) => l.dueAt },
    { header: "Statut", cell: (l) => <Badge {...statuses[l.status]} /> }
];

/**
 * personnal borrow page : ongoing borrowed books, return dates and prolongations
 * @returns the page /s/emprunts
 */
const MyLoansPage = () => (
    <div>
        <PageHeader title="Mes Emprunts" description="LEs livres que vous avez actuellement empruntes." />

        <div className="mt-8">
            <Datatable
                columns={columns}
                rows={loans}
                getKey={(l) => l.id}
                // prolongation available only if the book has not yet been returned
                renderActions={() => <ActionButton label="Prolonger" icon={CalendarPlus} />}
            />
        </div>
    </div>
);

export default MyLoansPage;
