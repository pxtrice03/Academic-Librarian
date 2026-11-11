import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Role = 'establishment' | 'reader' | 'admin';

export type User = {
    name: string;
    role: Role;
    slug?: string;
};

type AuthState = {
    user: User | null; // null = visitor not connected
    login: (user: User) => void; // register user connected
    logout: () => void; // empty user
};

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null, // default visitor
            login: (user) => set({ user }), // replace user
            logout: () => set({ user: null })
        }),
        { name: "auth" } // localStorage key
    )
);

export default useAuthStore;
