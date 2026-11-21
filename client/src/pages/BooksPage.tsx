import { Plus, Pencil, Trash2 } from 'lucide-react';
import { cn } from '@libs/utils';
import { Button } from "@components/ui/Button";
import ActionButton from "@components/ui/ActionButton";
import CatalogView from "@components/ui/CatalogView";

/**
 * Establishememt's catalogue
 * @returns the page /e/:slug/livres
 */
const BooksPage = () => {
    return (
        <CatalogView
            title="Livres"
            description="Gerez le  catalogue de votre  etablissement."
            actions={
                <Button type="button">
                    <Plus className="size-4" /> Ajouter un livre
                </Button>
            }
            renderCardView={() => (
                <div className="flex justify-end gap-1">
                    <ActionButton label="Modifier" icon={Pencil} />
                    <ActionButton label="Supprimer" icon={Trash2} />
                </div>
            )}
        />
    );
};

export default BooksPage;
