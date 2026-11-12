import { Plus, Search } from 'lucide-react';
import BookCard from '@components/BookCard';
import { cn } from '@libs/utils';
import { button, input } from '@libs/style';
import type { Book } from '@types/book';
import useBooksStore from '@stores/useBooksStore';
import Pageheader from '@components/layout/PageHeader';

const books: Book[] = [
    { id: '1', title: 'Algorithmique et structure de donnees', author: 'Dr. Noumssi', category: 'Informatique', copies: 938, available: 552 },
    { id: '2', title: 'Architecture des Ordinateurs', author: 'Dr. Nfongourain Remi', category: 'Informatique', copies: 1002, available: 101 },
    { id: '3', title: 'Principes de comptabilite generale', author: 'M. Ngono', category: 'FSEGA', copies: 552, available: 220 },
    { id: '4', title: 'Biologie Cellulaire', author: 'B. Alberts', category: 'BIO', copies: 1034, available: 97 }
];

const categories = [...new Set(books.map((b) => b.category))];

/**
 * Catalogue page of the establishment : search, filter, add and book grid
 * UI only : search, filter and add will be branched to the logic step
 */
const BookPage = () => {
    const { search, category, setSearch, setCategory } = useBooksStore();

    const query = search.trim().toLowerCase();
    const visible = books.filter(
        (b) =>
            (!category || b.category === category) &&
            (!query || b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query))
    );

    return (
        <div>
            <PageHeader
                title="Livres"
                description="Gerer le catalogue de votre etblissement."
                actions={
                    <button
                        type="button"
                        className={cn(button, "bg-accent text-primary-foreground hover:bg-accent/90")}
                    >
                        <Plus className="size-4" /> Ajouter un livre
                    </button>
                }
            />

            {/* tools bar : search + filter by category */}
            <div className="flex flex-wrap gap-4 mt-6">
                <div className="min-w-60 relative flex-1 sm:max-w-md">
                    <Search className="pointer-events absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="search"
                        value={search} // champ controle par le store
                        onChange={(e) => setSearch(e.target.value)} // met a jour le store a chaque frappe
                        placeholder="Rechercher un titre ou un auteur"
                        className={input}
                    />
                </div>

                <select value={category} onChange={(e) => setCategory(e.target.value)} className={cn(input, "w-auto pl-4")}>
                    <option value="">Toutes les categories</option>
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visible.length === 0 && (
                    <p className="mt-8 text-sm text-muted">Aucun livre ne correspond a votre recherche.</p>
                )}
            </div>
        </div>
    );
}

export default BookPage;
