// store/useStore.ts
import { User } from "@/types/user";
import { create } from "zustand";

interface StoreState {
  bookmarks: User[];
  addBookmark: (user: User) => void;
}

export const useStore = create<StoreState>((set) => ({
  bookmarks: [],
  addBookmark: (user) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, user],
    })),
}));
