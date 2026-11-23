import CatalogView from "@components/ui/CatalogView";
import { cn } from "@libs/utils";
import { Button } from "@components/ui/Button";

/**
 * reader's catalogue : borrow a available book or reserve it
 * @returns index page of /s (for personnal space)
 */
const ReaderCatalogView = () => (
    <CatalogView
        title="Catalogue"
        description="Parcourez les livres de votre etablissement."
        renderCardActions={(book) => {
            const isAvailable = book.available > 0;
            return (
                <Button
                    type="button"
                    className={cn("w-full justify-center")}
                    variant={
                        isAvailable ? "" : "outline"
                    }
                >
                    {isAvailable ? "Emprunter" : "Reserver"}
                </Button>
            );
        }}
    />
);

export default ReaderCatalogView;
