import PageHeader from "@components/layout/PageHeader";
import DataTable, { type Column } from "@components/layout/DataTable";
import type { Loan } from "@types/loan";

const history: Loan[] = [
    { id: "1", book: "Introduction au droit OHADA", borrowedAt: "20/09/2026", dueAt: "04/10/2026", returnedAt: "03/10/2026", status: "rendu" },
    { id: "2", book: "Le Vieux Negre et la medaille", borrowedAt: "02/09/2026", dueAt: "16/09/2026", returnedAt: "18/09/2026", status: "rendu" },
];

const columns: Column<Loan>[] = [
    { header: "Livre", cell: (l) => <span className="font-medium">{l.book}</span> },
    { header: "Emprunt le", cell: (l) => l.borrowedAt },
    { header: "Rendu le", cell: (l) => l.dueAt }
];

const MyHistoryPage = () => (
    <div>
        <PageHeader title="Mon historique" description="Tous vos emprunts passes." />
        <div className="mt-8">
            <DataTable columns={columns} rows={rows} getKey={(l) => l.id} />
        </div>
    </div>
);

export default MyHistoryPage;
