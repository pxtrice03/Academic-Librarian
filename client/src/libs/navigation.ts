import {
    ArrowLeftRight,
    BookOpen,
    CalendarClock,
    History,
    LayoutDashboard,
    Settings,
    Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
    path: string;
    label: string;
    icon: LucideIcon;
};

export type NavGroup = {
    title: string;
    items: NavItem[];
};

// establishment space menu. path "" = root page (/e/:slug)
export const establishmentNav: NavGroup[] = [
    {
        title: "General",
        items: [{
            path: "",
            label: "Tableau de bord",
            icon: LayoutDashboard
        }]
    },
    {
        title: "Catalogue",
        items: [{
            path: "livres",
            label: "Livres",
            icon: BookOpen
        }]
    },
    {
        title: "Circulation",
        items: [
            {
                path: "emprunts",
                label: "Emprunts",
                icon: ArrowLeftRight
            },
            {
                path: "reservations",
                label: "Reservations",
                icon: CalendarClock
            },
            {
                path: "historique",
                label: "Historique",
                icon: History
            }
        ]
    },
    {
        title: "Communaute",
        items: [{
            path: "lecteurs",
            label: "Lecteurs",
            icon: Users
        }]
    },
    {
        title: "Etablissement",
        items: [{
            path: "parametres",
            label: "Parametres",
            icon: Settings
        }]
    }
];

// flat list of items
export const establishmentRoutes: NavItem[] = establishmentNav.flatMap((group) => group.items)
