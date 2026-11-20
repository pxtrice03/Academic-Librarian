import { UserCheck, UserX } from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import DataTable, { type Column } from "@components/layout/DataTable";
import ActionButton from "@components/ui/ActionButton";
import { cn } from "@libs/utils";
import { input } from "@libs/style";
import type { Reader } from "@types/reader";

const readers: Reader[] = [
    { id: "1", name: "Song Jin Woo", email: "jin.woo@gmail.cm", activeLoans: 2, status: "actif" },
    { id: "2", name: "Mistourah", email: "mistourah@secretstory.cm", activeLoans: 1, status: "actif" },
    { id: "3", name: "Lumine", email: "lumine@immortal.cm", activeLoans: 0, status: "actif" },
    { id: "4", name: "orly love", email: "orly@love.cm", activeLoans: 3, status: "suspendu" }
];

const columns: Column<Reader>[] = [
    { header: "Nom", cell: (r) => <span className="font-medium">{r.name}</span> },
    { header: "Email", cell: (r) => <span className="text-muted">{r.email}</span> },
    { header: "Emprunts en cours", cell: (r) => r.activeLoans },
    {
        header: "Statut",
        // blue badge if active, red if suspended
        cell: (r) => (
            <span
                className={cn(
                    "rounded-full px-3 text-xs font-medium",
                    r.status === "actif" ? "bg-primary/10 text-primary" : "bg-danger/10 text-danger"
                )}
            >
                {r.status === "actif" ? "Actif" : "Suspendu"}
            </span>
        )
    }
];

// Readers page
// returns the page /e/:slug/lecteurs
const ReadersPage = () => {
    return (
        <div>
            <PageHeader title="Lecteurs" description="Gerez les comptes des lecteurs de votre etablissements" />

            <div className="mt-6 flex flex-wrap gap-4">
                <SearchBar placeholder="Rechercher un nom ou un email" />
                <select defaultValue="" className={cn(input, "w-auto pl-4")}>
                    <option value="">Tous les statuts</option>
                    <option value="actif">Actifs</option>
                    <option value="suspendu">Suspendus</option>
                </select>
            </div>

            <div className="mt-8">
                <DataTable
                    columns={columns}
                    rows={readers}
                    getKey={(r) => r.id}
                    // 1 action with respect to state : suspended (red) or reactivated
                    renderActions={(r) => (
                        r.status === "actif" ? (
                            <ActionButton label="Suspendre" icon={UserX} />
                        ) : (
                            <ActionButton label="REactiver" icon={UserCheck} />
                        )
                    )}
                />
            </div>
        </div>
    );
};

export default ReadersPage;
