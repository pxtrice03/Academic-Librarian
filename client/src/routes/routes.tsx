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

const pages: Record<string, ReactElement> = {
    "": <DashboardPage />,
    livres: <BooksPage />
};

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
        children: establishmentRoutes.map(({ path, label }) => {
            const element = pages[path] ?? <PagePlaceholder title={label} />;
            return path ? { path, element } : { index: true, element };
        })
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

export default router;
