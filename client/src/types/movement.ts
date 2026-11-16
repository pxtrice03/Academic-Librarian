export type MovementStatus = "en_cours" | "en_retard" | "rendu" | "en_attende" | "annule";

export type Movement = {
    id: string;
    reader: string;
    book: string;
    type: "emprunt" | "retour" | "reservation";
    status?: MovementStatus;
    date: string;
};
