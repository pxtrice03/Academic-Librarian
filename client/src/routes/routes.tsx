import { createBrowserRouter } from 'react-router';
import Home from '@pages/Home';
import RegistrationPage from '@pages/RegistrationPage';
import LoginPage from '@pages/LoginPage';
import EstablishmentLayout from "@components/layout/EstablishmentLayout";
import PagePlaceholder from "@pages/PagePlaceholder";
import { establishmentRoutes } from "@libs/navigation";
import NotFoundPage from '@pages/NotFoundPage';
import EstablishmentsPage from '@pages/EstablishmentsPage';
import type { ReactElement } from 'react';
import BooksPage from '@pages/BooksPage';
import DashboardPage from '@pages/DashboardPage';
import LoansPage from "@pages/LoansPage";
import ReservationsPage from "@pages/ReservationsPage";
import HistoryPage from "@pages/HistoryPage";
import ReadersPage from "@pages/ReadersPage";
import SettingsPage from "@pages/SettingsPage";
import type { RouteObject } from "react-router";
import AdminLayout from "@components/layout/AdminLayout";
import AdminDashboardPage from "@pages/AdminDashboardPage";
import AdminEstablishmentsPage from "@pages/admin/AdminEstablishmentsPage";
import AdminUsersPage from "@pages/admin/AdminUsersPage";
import { adminRoutes, type NavItem } from "@libs/navigation";
import ReaderLayout from "@components/layout/ReaderLayout";
import MyHistoryPage from "@pages/reader/MyHistoryPage";
import MyLoansPage from "@pages/reader/MyLoansPage";
import MyReservationsPage from "@pages/reader/MyReservationsPage";
import ReaderCatalogPage from "@pages/reader/ReaderCatalogPage";
import { readerRoutes } from "@libs/navigation";

const pages: Record<string, ReactElement> = {
    "": <DashboardPage />,
    livres: <BooksPage />,
    emprunts: <LoansPage />,
    resevations: <ReservationsPage />,
    history: <HistoryPage />,
    lecteurs: <ReadersPage />,
    parametres: <SettingsPage />
};

const adminPages: Record<string, ReactElement> = {
    "": <AdminDashboardPage />,
    establissements: <AdminEstablishmentsPage />,
    utilisateurs: <AdminUsersPage />
};

const readerPages: Record<string, ReactNode> = {
    "": <ReaderCatalogPage />,
    emprunts: <MyLoansPage />,
    resevations: <MyReservationsPage />,
    historique: <MyHistoryPage />
};

/**
 * Page codee si elle existe, sinon placeholder ; path "" devient la route d'index.
 * @param items - elements du menu
 * @param pages - pages codees par chemin
 * @returns les routes enfants
 */
const toChildren = (items: NavItems[], pages: Record<string, ReactElement>): RouteObject[] =>
    items.map(({ path, label }) => {
        const element = pages[path] ?? <PagePlaceholder title={label} />; // page or placeholder
        return path ? { path, element } : { index: true, element };
    });

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/inscription',
        element: <RegistrationPage />
    },
    {
        path: '/connexion',
        element: <LoginPage />
    },
    {
        path: '/e',
        element: <EstablishmentsPage />
        // an establishment route : /e/:slug, /e/:slug/livres, ...
    },
    {
        path: '/e/:slug',
        element: <EstablishmentLayout />,
        children: toChildren(establishmentRoutes, pages)
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: toChildren(adminRoutes, adminRoutes)
    },
    {
        path: "/s", // readers' private space
        element: <ReaderLayout />,
        children: toChildren(readerRoutes, readerPages)
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

export default router;
