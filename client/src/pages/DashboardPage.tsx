import {
    AlertTriangle,
    ArrowLeftRight,
    BookOpen,
    CalendarClock
} from 'lucide-react';
import StatCard from '@components/layout/StatCard';
import MovementsTable from '@components/MovementsTable';
import type { Movement } from '@types/movement';
import PageHeader from '@components/layout/PageHeader';

const stats = [
    { label: "Livres au catalogue", value: 1240, icon: BookOpen },
    { label: "Emprunt en cours", value: 86, icon: ArrowLeftRight },
    { label: "Reservation", value: 12, icon: CalendarClock },
    { label: "retards", value: 5, icon: AlertTriangle }
];

const recent: Movement[] = [
    { id: "1", reader: "Dr. Nzuche", book: "Algebre Lineaire 2", type: "emprunt", date: "04/11/2026" },
    { id: "2", reader: "Dr. Noumssi", book: "Introduction POO", type: "reservation", date: "04/11/2026" },
    { id: "3", reader: "Jean Fotso", book: "Principes de comptabilite generale", date: "04/11/2026" },
    { id: "4", reader: "Nadine Eyenga", book: "Biologie cellulaire", date: "04/11/2026" }
];

const DashboardPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Tableau de bord</h1>

            <div className="grid grid-cols-2 gap-4 mt-6 md:gap-6 xl:grid-cols-4">
                {stats.map((s) => (
                    <StatCard key={s.label} {...s} />
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;
