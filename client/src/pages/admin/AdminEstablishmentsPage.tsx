import {
    Check,
    Pause,
    Play,
    X
} from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import SearchBar from "@components/ui/SearchBar";
import DataTable, { type Column } from "@components/layout/DataTable";
import ActionButton from "@components/ui/ActionButton";
import Badge, { type Tone } from "@components/ui/Badge";
import { cn } from "@libs/utils";
import { input } from "@libs/style";
import type { AdminEstablisment } from "@types/establishment";

const establishments: AdminEstablisment[] = [
    { slug: "institut-superieur-du-littoral", name: "Institut Superieur du Littoral", type: "Universite", city: "Douala, Ndogbong", books: 1240, status: "valide", createdAt: "12/09/2026" },
    { slug: "lycee-bilingue-de-bonaberi", name: "Lycee Bilingue de Bonabéri", type: "Lycee", city: "Douala, Bonabéri", books: 430, status: "valide", createdAt: "28/09/2026" },
    { slug: "college-saint-michel", name: "College Saint-Michel", type: "College", city: "Douala, Bonanjo", books: 0, status: "en_attente", createdAt: "03/11/2026" },
    { slug: "ecole-superieure-de-gestion", name: "Ecole Supérieure de Gestion", type: "Universite", city: "Douala, Akwa", books: 880, status: "suspendu", createdAt: "15/08/2026" }
];

const statuses: Record<AdminEstablisment["status"], { label: string, tone: Tone}> = {
    valide: { label: "Valide", tone: "primary" },
    en_attente: { label: "En attente", tone: "accent" },
    suspendu: { label: "Suspendu", tone: "danger" }
};

const columns: Column<AdminEstablisment>[] = [
    {
        header: "Etablissement",
        cell: (e) => (
            <div>
                <p className="font-medium">{e.name}</p>
                <p className="text-xs text-muted">/e/{e.slug}</p>
            </div>
        )
    },
    { header: "Type", cell: (e) => e.type },
    { header: "Ville", cell: (e) => e.city },
    { header: "Livres", cell: (e) => e.books },
    { header: "Statut", cell: (e) => <Badge {...statuses[e.status]} /> },
    { header: "Inscription", cell: (e) => <span className="text-muted">{e.createdAt}</span> }
];

const AdminEstablismentsPage = () => (
    <div>
        <PageHeader title="Etablissements" description="Validez les inscriptions et controlez les comptes des establishments." />

        <div className="mt-6 flex felx-wrap gap-4">
            <SearchBar placeholder="Recherche un establishment" />
            <select defaultValue="" className={cn(input, "w-auto pl-4")}>
                <option value="">Tous les statuts</option>
                <option value="en_attente">En attente</option>
                <option value="suspendu">Suspendus</option>
            </select>
        </div>

        <div className="mt-8">
            <DataTable
                columns={columns}
                rows={establishments}
                getKet={(e) => e.slug}
                renderActions={(e) => {
                    if(e.status === "en_attente")
                        return (
                            <>
                                <ActionButton label="Valider" icon={Check} />
                                <ActionButton label="Refuser" icon={X} />
                            </>
                        );
                    if(e.status === "valide") return <ActionButton label="Suspendre" icon={Pause} />;
                    return <ActionButton label="Reactiver" icon={Play} />;
                }}
            />
        </div>
    </div>
);

export default AdminEstablismentsPage;
