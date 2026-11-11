import { create } from 'zustand';

type BookStore = {
    search: string;
    category: string;
    setSearch: (value: string) => void;
    setCategory: (value: string) => void;
};

const useBooksStore = create<BookStore>((set) => ({
    search: "", // no flter on start
    category: "",
    setSearch: (search) => set({ search }), // set value
    setCategory: (category) => set({ category }) // set category
}));

export default useBooksStore;
