"use client";

import React, { createContext, useContext, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
  image: string;
};

type BookmarkContextType = {
  bookmarks: User[];
  addBookmark: (user: User) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<User[]>([]);

  function addBookmark(user: User) {
    setBookmarks((prev) => {
      if (prev.find((u) => u.id === user.id)) return prev;
      return [...prev, user];
    });
  }

  function removeBookmark(id: number) {
    setBookmarks((prev) => prev.filter((u) => u.id !== id));
  }

  function isBookmarked(id: number) {
    return bookmarks.some((u) => u.id === id);
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error("useBookmarks must be used within a BookmarkProvider");
  return context;
}
