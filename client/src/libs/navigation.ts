import {
    ArrowLeftRight,
    BookOpen,
    CalendarClock,
    History,
    LayoutDashboard
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
//
export type NavItem = {
    path: string;
    label: string;
    icon: LucideIcon;
};

// establishment space menu. path "" = root page (/e)
export const establishmentNav: NavItem[] = [
    { path: "", label: "Tableau de bord", icon: LayoutDashboard },
    { path: "livres", label: "Livres", icon: BookOpen },
    { path: "emprunts", label: "Emprunts", icon: ArrowLeftRight },
    { path: "reservations", label: "Reservations", icon: CalendarClock },
    { path: "historique", label: "Historique", icon: History }
];
// will be used for the routes menu
