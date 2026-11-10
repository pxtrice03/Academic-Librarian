import { NavLink, Outlet, useParams } from 'react-router';
import { Library, LogOut, ArrowLeft } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { establishmentNav } from '@libs/navigation'; // shared menu

// Establishement Shell : sidebar (horizontal bar on mobile) + content
const EstablishmentLayout = () => {
    const { slug } = useParams<{ slug: string }>(); // establishment id in URL

    return (
        // mobile : top bar ; desktop : left sidebar
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* sticky top on desktop */}
            <aside className="flex flex-col gap-4 border-b border-line bg-card p-4 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 font-bold text-accent"
                >
                    <Library className="size-6" /> {APP_NAME}
                </NavLink>
                {/* retour a l'annuaire des etablissements */}
                <NavLink to="/e" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="size-3" /> Tous les etablissements
                </NavLink>

                {/* etablissement courant : slug lisible en attendant le vrai nom (API) */}
                <p className="rounded-lg bg-muted px-3 py-2 text-sm font-semibold capitalize">
                    {slug?.replaceAll("-", " ")}
                </p>

                {/* menu : lies horizontally on destop, vertically on desktop */}
                <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
                    {establishmentNav.map(({ path, label, icon: Icon }) => (
                        <NavLink
                            key={label}
                            to={path ? `/e${path}` : "/e"}
                            end // only active on exact URL
                            className={({ isActive }) =>
                                cn(
                                    "flex shrink-0 items-center gap-3 rounded-lg py-2 px-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )
                            }
                        >
                            <Icon className="size-4" /> {label}
                        </NavLink>
                    ))}
                </nav>

                {/* disconnect */}
                <NavLink
                    to="/"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground md:mt-auto"
                >
                    <LogOut className="size-4" /> Deconnexion
                </NavLink>
            </aside>

            {/* content zone */}
            <main className="flex-1 p-6 md:p-10">
                <Outlet />
            </main>
        </div>
    );
}

export default EstablishmentLayout;
