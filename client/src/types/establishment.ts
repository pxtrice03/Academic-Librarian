// etablissement dans lannuaire public
export type Establishement = {
    slug: string; // URL ID
    name: string;
    type: string;
    city: string; // ville / quartier
    books: number; // number of books
};

// establishment viewed by ADMIN
export type AdminEstablishment = Establishement & {
    status: "valide" | "en_attente" | "suspendus"; // account state
    createdAt: string;
};
