import {
    CalendarPlus,
    Check,
    Plus
} from "lucide-react";
import MovementsPage from "@pages/MovementsPage";
import ActionButton from "@components/ui/ActionButton";
import { cn } from "@libs/utils";
import { Button } from "@components/Button";
import { Movement } from "@types/movement";

const loans: Movement[] = [
    { id: "1", reader: "Limune", book: "Demon King", type: "emprunt", status: "en_cours", date: "04/11/2026" },
    { id: "2", reader: "Anos Voldigoad", book: "Life of an immortal", type: "emprunt", status: "en_retard", date: "15/10/2026" }
];

const LoansPage = () => {
    return (
        <MovementsPage
            title="Emprunts"
            description="Suivez les livres pretes et enregistez les retours."
            actions={
                <Button type="button">
                    <Plus className="size-4" /> Enregistrer un emprunt
                </Button>
            }
            rows={loans}
            filterAllLabel="Tous les statuts"
            filterOptions={[
                { value: "en_cours", label: "En cours" },
                { value: "en_retard", label: "En retard" },
                { value: "rendu", label: "Rendus" }
            ]}
            // a returned reader does not have action button
            renderActions={(row) =>
                row.status === "rendu" ? null : (
                    <>
                        <ActionButton label="Prolonger" icon={CalendarPlus} />
                        <ActionButton label="Marquer rendu" icon={Check} />
                    </>
                )
            }
        />
    );
};

export default LoansPage;
