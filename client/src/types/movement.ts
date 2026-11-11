export type Movement = {
    id: string;
    reader: string;
    book: string;
    type: "emprunt" | "retour" | "reservation";
    date: string;
};
