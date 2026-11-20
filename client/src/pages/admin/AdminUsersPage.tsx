import {
    UserCheck,
    UserX
} from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import DataTable, { type Column } from "@components/layout/DataTable";
import SearchBar from "@components/ui/SearchBar";
import ActionButton from "@components/ui/ActionButton";
import Badge from "@components/ui/Badge";
import { cn } from "@libs/utils";
import { input } from "@libs/style";
import type { AdminUser } from "@types/user";

const users: AdminUser[] = [
    { id: "1", name: "Braven", email: "braven@exemple.cm", role: "reader", establishment: "Institut Supérieur du Littoral", status: "actif" },
    { id: "2", name: "Marie Ndjock", email: "bibliotheque@lycee-bonaberi.cm", role: "establishment", establishment: "Lycée Bilingue de Bonabéri", status: "actif" },
    { id: "3", name: "Paul Tchoumi", email: "paul.tchoumi@exemple.cm", role: "reader", establishment: "École Supérieure de Gestion", status: "suspendu" },
    { id: "4", name: "Jean Fotso", email: "jean.fotso@exemple.cm", role: "reader", establishment: "Lycée Bilingue de Bonabéri", status: "actif" },
];

const roles: Record<AdminUser["role"], string> = { reader: "Lecteur", establishment: "Establissement" };

const columns: Column<AdminUser>[] = [
    { header: "Nom", cell: (u) => <span className="font-medium">{u.name}</span> },
    { header: "Email", cell: (u) => <span className="text-muted">{u.email}</span> },
    { header: "Role", cell: (u) => <Badge label={roles[u.role]} tone="muted"/> },
    { header: "Establissement", cell: (u) => u.establissement },
    {
        header: "Statuts",
        cell: (u) => <Badge label={u.status === "actif" ? "Actif" : "Suspendu"} tone={u.status === "actif" ? "primary" : "danger"} />
    }
];

/**
 * Page admin Utilisateurs : contrôle des comptes lecteurs et établissements.
 * @return la page /admin/utilisateurs
 */
const AdminUsersPage = () => (
    <div>
        <PageHeader title="Utilisateurs" descrption="Controlez tous les comptes de la plateforme." />

        <div className="mt-6 flex- flex-wrap gap-4">
            <SearchBar placeholder="Rechercher un nom ou un email" />
            <select defaultValue="" className={cn(input, "w-auto pl-4")}>
                <option value="">Tous les roles</option>
                <option value="reader">Lecteurs</option>
                <option value="establishment">Etablissements</option>
            </select>
        </div>

        <div className="mt-8">
            <DataTable
                columns={columns}
                rows={rows}
                getKey={(u) => u.id}
                renderActions={(u) =>
                    u.status === "actif" ? (
                        <ActionButton label="Suspendu" icon={UserX} danger />
                    ) : (
                        <ActionButton label="Reactiver" icon={UserCheck} />
                    )
                }
            />
        </div>
    </div>
);

export default AdminUsersPage;
