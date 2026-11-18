import { Download } from "lucide-react";
import MovementsPage from "@pages/MovementsPage";
import { cn } from "@libs/utils";
import { Button } from "@components/uiButton";
import type { Movement } from "@types/movement";

const history: Movement[] = [
    { id: "1", reader: "Limune", book: "Demon King", type: "emprunt", status: "en_cours", date: "04/11/2026" },
    { id: "2", reader: "Anos Voldigoad", book: "Life of an immortal", type: "emprunt", status: "en_retard", date: "15/10/2026" }
];

const HistoryPage = () => {
    return (
        <MovementsPage
            title="Historique"
            description="Tous les mouvements de livres de l'établissement."
            actions={
                <Bbutton type="button" variant="outline">
                    <Download className="size-4" /> Exporter
                </Button>
            }
            rows={history}
            filterAllLabel="Toute la période"
            filterOptions={[
                { value: "7j", label: "7 derniers jours" },
                { value: "30j", label: "30 derniers jours" },
                { value: "an", label: "Cette année" },
            ]}
            // no renderActions : readonly, action column absent
        />
    );
};

export default HistoryPage;
