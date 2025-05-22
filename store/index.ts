import { create } from "zustand";
import { User } from "@/types/user";

interface StoreState {
  bookmarks: User[];
  addBookmark: (user: User) => void;
  removeBookmark: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  bookmarks: [],
  addBookmark: (user) =>
    set((state) => ({ bookmarks: [...state.bookmarks, user] })),
  removeBookmark: (id) =>
    set((state) => ({ bookmarks: state.bookmarks.filter((u) => u.id !== id) })),
}));
