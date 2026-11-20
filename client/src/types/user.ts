// a user seen by admin (readr or establishment)
export type AdminUser = {
    id: string;
    name: string;
    email: string;
    role: "reader" | "establishment"; // account type
    establishment: string;
    status: "actif" | "suspendu";
};
