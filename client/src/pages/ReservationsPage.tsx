import { Check, X } from "lucide-react";
import MovementsPage from "pages/MovementsPage";
import ActionButton from "@components/ui/ActionButton";
import type { Movement } from "@types/movement";

const reservations: Movement[] = [
    { id: "1", reader: "Limune", book: "Demon King", type: "emprunt", status: "en_cours", date: "04/11/2026" },
    { id: "2", reader: "Anos Voldigoad", book: "Life of an immortal", type: "emprunt", status: "en_retard", date: "15/10/2026" }
];

const ReservationsPage = () => {
    return (
        <MovementsPage
            title="Reservations"
            description="Validez ou annulez les reservations des lecteurs."
            rows={reservations}
            filterAllLabel="Tous les statuts"
            filterOptions={[
                { value: "en_attente", label: "En attente" },
                { value: "annule", label: "Annulees" }
            ]}
            // actions only for actif reservations
            renderActions={(row) =>
                row.status === "en_attente" ? (
                    <>
                        <ActionButton label="Valider" icon={Check} />
                        <ActionButton label="Annuler" icon={X} />
                    </>
                ) : null
            }
        />
    );
};

export default ReservationsPage;
