// loans on the readers point of view
export type Loan = {
    id: string;
    book: string;
    borrowedAt: string;
    dueAt: string; // expected return date
    returnedAt?: string;
    status: "en_cours" | "en_retard" | "rendu";
};

export type Reservation = {
    id: string;
    book: string;
    reservedAt: string;
    status: "en_attente" | "disponible" | "annule"; // disponible = ready to be borrowwed
};
