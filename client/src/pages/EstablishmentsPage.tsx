import { NavLink } from 'react-router';
import {
    ArrowRight,
    Building2,
    MapPin,
    BookOpen,
    Search
} from 'lucide-react';
import NavBar from '@components/layout/NavBar';
import Footer from '@components/layout/Footer';
import { cn } from '@libs/utils';
import { input } from '@libs/style';

// A registered establishment (temporary replaced by de API)
type Establishment = {
    slug: string;
    name: string;
    type: string;
    city: string;
    books: number;
};

// fictional data : only there to validate the UI
const establishments: Establishment[] = [
    { slug: 'college-bilingue-l-etoile', name: 'College Bilinue L\'Etoile', type: 'College', city: 'Douala, Logpom', books: 348 },
    { slug: 'lycee-bilingue-de-bonaberi', name: 'Lycee Bilingue de Bonaberi', type: 'Lycee', city: 'Douala, Bonaberi', books: 430 },
    { slug: 'ecole-nationale-superieur-polytechnique-de-douala', name: 'Ecole Nationale Superieur Polytechnique de Douala', type: 'Universite', city: 'Douala, Pk17', books: 550 },
    { slug: 'institut-superieur-du-littoral', name: 'Institut Superieur du Littoral', type: 'Universite', city: 'Douala, Ndogbong', books: 1240 },
    { slug: 'college-saint-michel', name: 'College Saint-Michel', type: 'College', city: 'Douala, Bonanjo', books: 610 },
];

/**
 * Annuaire public des etablissements enregistres sur la plateforme.
 * UI seule : recherche et donnees branchees à l'etape logique.
 * @returns la page /e avec recherche et grille d'etablissements
 */
const EstablishmentsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />

            <main className="max-w-6xl mx-auto w-full flex-1 px-6 py-16">
                <h1 className="text-3xl font-bold">Establishments</h1>
                <p className="mt-2 text-muted-foreground">Choisissez votre etablissement pour acceder a sa bibliotheque.</p>

                {/* Search bar */}
                <div className="relative max-w-md mt-8">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input type="search" placeholder="Rechercher un etablissement" className={cn(input)} />
                </div>

                {/* responsive grid : 1 / 2 / 3 column */}
                <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                {establishments.map(({ slug, name, type, city, books }) => (
                    <article key={slug} className="flex flex-col rounded-round border border-line bg-card p-6">
                        <div className="flex items-center justify-between">
                            <Building2 className="size-8 text-accent" />
                            <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">{type}</span>
                        </div>

                        <h2 className="mt-4 font-semibold">{name}</h2>

                        {/* secondary infos */}
                        <p className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <MapPin className="size-4" /> {city}
                        </p>
                        <p className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <BookOpen className="size-4" />
                        </p>

                        <NavLink to={`/e/${slug}`} className="inline-flex items-center mt-6 gap-2 text-sm font-semibold text-accent hover:underline">
                            Acceder <ArrowRight className="size-4" />
                        </NavLink>
                    </article>
                ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default EstablishmentsPage;
