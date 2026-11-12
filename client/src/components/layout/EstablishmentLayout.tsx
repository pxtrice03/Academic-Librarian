import { NavLink, Outlet, useParams } from 'react-router';
import { Library, LogOut, ArrowLeft } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { establishmentNav } from '@libs/navigation'; // shared menu
import useAuthStore from '@stores/useAuthStore';

// Establishement Shell : sidebar (horizontal bar on mobile) + content
const EstablishmentLayout = () => {
    const { slug } = useParams<{ slug: string }>(); // establishment id in URL
    const logout = useAuthStore((s) => s.logout);

    return (
        // mobile : top bar ; desktop : left sidebar
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* sticky top on desktop */}
            <aside className="flex flex-col gap-4 border-b border-line bg-bg p-3 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r">
                <div clasName="flex items-center justify-between">
                    <span className="inline-block">
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 font-bold text-primary"
                        >
                            <Library className="size-6" /> {APP_NAME}
                        </NavLink>
                    </span>
                    <NavLink
                        to="/"
                        className="rounded-btn text-danger bg-danger/10 md:hidden"
                    >
                        <LogOut className="size-4" />
                    </NavLink>
                </div>
                {/* retour a l'annuaire des etablissements */}
                <NavLink to="/e" className="flex items-center gap-2 py-2 px-3 rounded-btn text-sm text-muted transition-colors duration-500 hover:bg-accent/10 hover:text-accent">
                    <ArrowLeft className="size-4" /> Tous les etablissements
                </NavLink>

                {/* etablissement courant : slug lisible en attendant le vrai nom (API) */}
                <p className="rounded-btn bg-muted/10 px-3 py-2 text-sm font-bold capitalize truncate">
                    {slug?.replaceAll("-", " ")}
                </p>

                {/* menu : lies horizontally on destop, vertically on desktop */}
                <nav className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
                    {establishmentNav.map(({ path, label, icon: Icon }) => (
                        <NavLink
                            key={label}
                            to={path ? `/e/${path}` : "/e"}
                            end // only active on exact URL
                            className={({ isActive }) =>
                                cn(
                                    "flex shrink-0 items-center gap-3 rounded-link py-2 px-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-accent text-primary"
                                    : "text-muted-foreground duration-500 hover:bg-muted/10 hover:text-primary"
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
                    className="hidden items-center gap-3 rounded-btn px-3 py-2 text-sm font-medium text-muted transition-colors duration-500 hover:bg-danger/10 hover:text-danger md:flex md:mt-auto"
                    onClick={logout}
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
