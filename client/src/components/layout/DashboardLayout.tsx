import { useState } from "react";
import { Outlet } from 'react-router';
import { Menu } from "lucide-react";
import { cn } from '@libs/utils';
import { APP_NAME} from '@libs/constants';
import type { NavGroup } from '@libs/navigation';
import useAuthStore from '@stores/useAuthStore';
import DashboardSidebar from '@components/layout/DashboardSidebar';
import { Button } from "@components/ui/Button";

type DashboardLayoutProps = {
    groups: NavGroup[]; // menu section
    basePath: string; // link prefix
    title: string; // context displayed under the logo
    backLink?: { to: string; label: string };
};

const DashboardLayout = ({
    groups,
    basePath,
    title,
    backLink
}: DashboardLayoutProps) => {
    const logout = useAuthStore((s) => s.logout);
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen md:flex">
            <div className="flex items-center justify-between border-b border-line p-4 md:hidden">
                <span className="font-bold text-primary">{APP_NAME}</span>
                <Button
                    type="button"
                    variant="outline"
                    aria-label="Ouvir le menu"
                    onClick={() => setOpen((o) => !o)}
                >
                    <Menu className="size-6" />
                </Button>
            </div>

            {/* sidebar : expands and retracts on mobile, fixed full height on desktop */}
            <div className={cn("md:sticky md:top-0 md:block md:h-screen md:h-72 md:shrink-0", open ? "block" : "hidden")}>
                <DashboardSidebar
                    groups={groups}
                    basePath={basePath}
                    title={title}
                    backLink={backLink}
                    onNavigate={() => setOpen(false)}
                    onLogout={logout}
                />
            </div>

            {/* right zone : min-w-0 to avoid large tables to overflow the flex */}
            <main className="min-w-0 flex-1 p-6 md:p-10">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
