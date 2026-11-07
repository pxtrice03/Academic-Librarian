import { NavLink, Outlet } from 'react-router';
import { Library, LogOut } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { establishmentNav } from '@libs/navigation'; // shared menu


const EstablishmentLayout = () => (
    <div className="min-h-screen flex flex-col md:flex-row">
        <aside className="flex flex-col gap-4 border-b border-line bg-card p-4 md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:border-b-0 md:border-r">
            <NavLink
                to="/"
                className="flex items-center gap-2 font-bold text-accent"
            >
                <Library className="size-6" /> {APP_NAME}
            </NavLink>

            {/* menu : lies horizontally on destop and vertically on desktop */}
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

export default EstablishmentLayout;
