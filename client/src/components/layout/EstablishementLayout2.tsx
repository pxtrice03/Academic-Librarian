import { Outlet, useParams } from 'react-router';
import { Menu } from 'lucide-react';
import { cn } from '@libs/utils';
import { APP_NAME } from '@libs/constants';
import { establishmentNav } from '@libs/navigation';
import useAuthStore from '@stores/useAuthStore';
import DashboardSidebar from "@components/layout/DashboardSidebar";
import { useState } from "react";
import { Button } from "@components/ui/Button";

const EstablishmentLayout2 = () => {
    const { slug } = useParams<{ slug: string }>();
    const logout = useAuthStore((s) => s.logout);
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen md:flex">
            <div className="flex items-center justify-between border-b border-line bg-bg p-4 md:hidden">
                <span className="font-bold text-primary">{APP_NAME}</span>
                <Button type="button" aria-label="Ouvrir le menu" variant="outline" onClick={() => setOpen((o) => !o)}>
                    <Menu className="size-6" />
                </Button>
            </div>

            {/* Sidebar container */}
            <div className={cn("md:sticky md:top-0 md:block md:h-screen md:w-72 md:shrink-0", open ? "block" : "hidden")}>
                <DashboardSidebar
                    groups={establishmentNav}
                    basePath={`/e/${slug}`}
                    title={slug?.replaceAll("-", " ") ?? ""} // readable estbalishment name
                    backLink={{ to: "/e", label: "Tous les etablissements" }}
                    onNavigate={() => setOpen(false)}
                    onLogout={logout}
                />
            </div>

            {/* right zone : min-w-0 prevents a large table overflow from the flex */}
            <main className="min-w-0 flex-1 p-6 md:p-10">
                <Outlet />
            </main>
        </div>
    );
};

export default EstablishmentLayout2;
