import { NavLink } from "react-router";
import {
    ArrowRight,
    BookOpen,
    Building2,
    Clock,
    Users

} from "lucide-react";
import PageHeader from "@components/layout/PageHeader";
import StatCard from "@components/layout/StatCard";
import { cn } from "@libs/utils";
import { buttonVariants } from "@components/ui/Button";

const pending = 3; // inscriptions en attente (fictif) : utilisé dans la carte et le message

// Chiffres clés fictifs : liste rendue par map (DRY)
const stats = [
    { label: "Établissements", value: 24, icon: Building2 },
    { label: "En attente de validation", value: pending, icon: Clock },
    { label: "Lecteurs inscrits", value: 1860, icon: Users },
    { label: "Livres au total", value: 18400, icon: BookOpen },
];

/**
 * Tableau de bord admin : chiffres globaux et accès aux demandes à traiter.
 * UI seule : les données viendront de l'API.
 * @returns la page d'index de /admin
 */
const AdminDashboardPage = () => (
    <div>
        <PageHeader title="Tableau de bord" description="Vue d'ensemble de la plateforme." />

        {/* grille des statistiques : 1 / 2 / 4 colonnes */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
                <StatCard key={s.label} {...s} />
            ))}
        </div>

        {/* demandes à traiter : raccourci vers la gestion des établissements */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card p-6">
            <div>
                <h2 className="font-semibold">{pending} établissements en attente de validation</h2>
                <p className="mt-1 text-sm text-muted-foreground">Vérifiez les inscriptions récentes avant de les activer.</p>
            </div>
            <NavLink to="/admin/etablissements" className={cn(buttonVariants())}>
                Traiter les demandes <ArrowRight className="size-4" />
            </NavLink>
        </div>
    </div>
);

export default AdminDashboardPage;
