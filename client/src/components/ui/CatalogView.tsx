import type { ReactNode } from "React";
import PageHeader from "@components/layout/PageHeader";
import SearchBar from "@components/ui/SearchBar";
import useBooksStore from "@store/useBooksStore";
import { books } from "@data/books";
import { cn } from "@libs/utils";
import { input } from "@libs/style";
import type { Book } from "@types/book";

type CatalogViewProps = {
    title: string;
    description: string; // phrase d'aide
    actions?: ReactNode;
    renderCardActions: (book: Book) => ReactNode;
};

const categories = [...new Set(books.map((b) => b.category))];

const CatalogView = ({
    title,
    description,
    actions,
    renderCardActions
}: CatalogViewProps) => {
    const { search, category, setSearch, setCategory } = useBooksStore();

    const query = search.trim().toLowerCase();
    // keeps readers that respects the categories and the search (title or author)
    const visible = books.filter(
        (b) =>
            (!category || b.category === category) &&
            (!query || b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query))
    );

    return (
        <div>
            <pageHeader title={title} description={desctiption} actions={actions} />

            <div className="mt-6 flex flex-wrap gap-4">
                <SearchBar placeholder="Rechercher un titre ou un auteur" value={search} onChange={setSearch} />
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={cn(input, "w-auto pl-4")}>
                    <option value="">Toutes les categories</option>
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            {/* message if no result */}
            {visible.length === 0 && (
                <p className="mt-8 text-xm text-muted">Aucun livres ne correspond a votre recherche.</p>
            )}

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visible.map((book) => (
                    <BookCard key={book.id} book={book}>
                        {renderCardActions(book)}
                    </BookCard>
                ))}
            </div>
        </div>
    );
};

export default CatalogView;
