import { X} from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import DataTable, { type Column } from "@components/layout/DataTable";
import ActionButton from "@components/ui/ActionButton";
import Badge, { type Tone } from "@components/ui/Badge";
import type { Reservation } from "@types/loan";

const reservations: Reservation[] = [
    { id: "1", book: "Biologie cellulaire", reservedAt: "04/11/2026", status: "en_attente" },
    { id: "2", book: "Introduction au droit OHADA", reservedAt: "01/11/2026", status: "disponible" },
    { id: "3", book: "Algorithmique et structures de données", reservedAt: "20/10/2026", status: "annule" },
];

// label and tone per status
const statuses: Record<Reservation["status"], { label: string; tone: Tone }> = {
    en_attente: { label: "En attente", tone: "accent" },
    disponible: { label: "Disponible au retrait", tone: "primary" },
    annule: { label: "Annulée", tone: "muted" },
};

const columns: Column<Reservation>[] = [
    { header: "Livre", cell: (r) => <span className="font-medium">{r.book}</span> },
    { header: "Reserve le", cell: (r) => r.reservedAt },
    { header: "Statut", cell: (r) => <Badge {...statuses[r.status]} />}
];

const MyReservationsPage = () => (
    <div>
        <PageHeader title="Mes Reservations" description="Les livres que vous avez reserve.'" />

        <div className="mt-8">
            <DataTable
                columns={columns}
                rows={rows}
                getKey={(r) => r.id}
                // annulation possible while the reservation is not canceled
                renderActions={(r) > (r.status === "annule" ? null : <ActionButton label="Annuler" icon={X} />)}
            />
        </div>
    </div>
);

export default MyReservationsPage;
