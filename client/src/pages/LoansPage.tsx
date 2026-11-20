import {
    CalendarPlus,
    Check,
    Plus
} from "lucide-react";
import MovementsPage from "@pages/MovementsPage";
import ActionButton from "@components/ui/ActionButton";
import { cn } from "@libs/utils";
import { Button } from "@components/ui/Button";
import type { Movement } from "@types/movement";

const loans: Movement[] = [
    { id: "1", reader: "Limune", book: "Demon King", type: "emprunt", status: "en_cours", date: "04/11/2026" },
    { id: "2", reader: "Anos Voldigoad", book: "Life of an immortal", type: "emprunt", status: "en_retard", date: "15/11/2026" },
    { id: "3", reader: "Saitama", book: "Comment etre ordonner en 21 jours", type: "emprunt", status: "en_cours", date: "01/12/2026" },
    { id: "4", reader: "Smartass", book: "How to kill a woman", type: "retour", status: "rendu", date: "19/11/2026" },
    { id: "5", reader: "Lesley", book: "Crush", type: "retour", status: "annule", date: "11/11/2026" },
    { id: "6", reader: "Bryan", book: "Etre presentable a toute instant", type: "retour", status: "rendu", date: "18/11/2026" }
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
