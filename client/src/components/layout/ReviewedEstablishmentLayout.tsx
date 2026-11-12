import { useState } from 'react;
import {
    Outlet,
    useParams
} from 'react-router';
import { Menu } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME} from '@libs/constants';
import { establishmentNav } from '@libs/navigation';
import useAuthStore from '@stores/useAuthStore';
import DashboardSidebar from '@components/layout/DashboardSidebar';

const ReviewedEstablishmentLayout = () => {
    const { slug } = useParams<{ slug: string }>();
    const logout = useAuthStore((s) => s.logout);
    const [open, setOpen] = useState(false);

    return (
        // mobile : column ; desktop : sidebar a gauche, contenu a droite
        <div className="min-h-screen md:flex">
            <div className="flex items-center justify-between border-r border-line bg-bg p-4 md:hidden">
                <span className="font-bold text-primary">{APP_NAME}</span>
                <button
                    type="button"
                    aria-label="Ouvrir le menu"
                    onClick={() => setOpen((0) => !o)}
                >
                    <Menu className="size-6" />
                </button>
            </div>

            <div
                className={cn("md:sticky md:top-0 md:block md:h-screen md:h-72 md:shrink-0",
                open ? "block" : "hidden" )}
            >
                <DashboardSidebar
                    groups={establishmentNav}
                    basePath={`/e/${slug}`}
                    title={slug?.replaceAll("-", " ") ?? ""}
                    backLink={{ to: "/e", label: "Tous les establishments" }}
                    onNavigate={() => setOPen(false)}
                    onLogout={logout}
                />
            </div>

            <main className="min-w-0 flex-1 p-6 md:p-10">
                <Outlet />
            </main>
        </div>
    );
};

export default ReviewedEstablishmentLayout;
