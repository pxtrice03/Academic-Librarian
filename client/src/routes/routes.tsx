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

/**
 * Page codée si elle existe, sinon placeholder ; path "" devient la route d'index.
 * @param items - éléments du menu
 * @param pages - pages codées par chemin
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
        path: '*',
        element: <NotFoundPage />
    }
]);

export default router;
