// reader attached ot an establishment
export type Reader = {
    id: string;
    name: string;
    email: string;
    activeLoans: number; // number of loans
    status: "actif" | "suspendu"; // account's state
};
