import { NavLink } from 'react-router';
import {
    ArrowLeft,
    Library,
    LogOut
} from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import type { NavGroup } from '@libs/navigation';

type DashboardSidebarProps = {
    groups: NavGroup[]; // menu sections
    basePath: string; // link prefix (e.g. /e/my-establishment)
    title: string;
    backLink?: {
        to: string;
        label: string;
    };
    onNavigate?: () => void;
    onLogout?: () => void;
};

const DashboardSidebar = ({
    groups,
    basePath,
    title,
    backLink,
    onNavigate,
    onLogout
}: DashboardSidebarProps) => {
    return (
        <aside className="flex h-full flex-col oveflow-y-auto border-r border-line bg-bg p-4">
            <NavLink
                to="/"
                className="flex items-center gap-2 font-bold text-primary"
            >
                <Library className="size-6" /> {APP_NAME}
            </NavLink>

            {backLink && (
                <NavLink
                    to={backLink.to}
                    onClick={onNavigate}
                    className="flex items-center gap-2 text-xs text-muted transition-colors duration-500 hover:text-primary"
                >
                    <ArrowLeft className="size-3" /> {backLink.label}
                </NavLink>
            )}

            {/* current context : establishment */}
            <nav className="flex flex-col gap-6">
                {groups.map(({ title: groupTitle, items }) => (
                    <div key={groupTitle}>
                        {/* section title */}
                        <p className="px-3 text-xs font-semibold uppercase tracking-wide text-muted">{groupTitle}</p>
                        <div className="mt-2 flex felx-col gap-1">
                            {items.map(({ path, label, icon: Icon }) => (
                                <NavLink
                                    key={label}
                                    to={path ? `${basePath}/${path}` : basePath} // "" = index
                                    end // only active on exact URl
                                    onClick={onNavigate}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center gap-3 rounded-link px-3 py-2 text-sm font-medium transition-colors",
                                           isActive
                                            ? "bg-accent text-priamry"
                                            : "text-muted-foreground duration-500 hover:bg-muted/10 hover:text-primary"
                                        )
                                    }
                                >
                                    <Icon className="size-4" />
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* disconnect */}
            <NavLink
                to="/"
                onClick={onLogout}
                className="mt-auto flex items-center gap-3 rounded-link  px-3 py-2 text-sm font-medium text-muted trantion-colors hover:bg-danger/10 hover:text-danger"
            >
                <LogOut className="size-4" /> Deconnexion
            </NavLink>
        </aside>
    );
};

export default DashboardSidebar;
