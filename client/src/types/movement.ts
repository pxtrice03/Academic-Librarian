export type MovementStatus = "en_cours" | "en_retard" | "rendu" | "en_attente" | "annule";

export type Movement = {
    id: string;
    reader: string;
    book: string;
    type: "emprunt" | "retour" | "reservation";
    status?: MovementStatus;
    date: string;
};
