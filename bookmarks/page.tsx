"use client";

import React from "react";
import { useBookmarks } from "@/context/BookmarkContext";
import UserCard from "@/components/UserCard"; // existing card component
import Link from "next/link";

export default function BookmarksPage() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📌 Bookmarked Employees</h1>

      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((user) => (
            <div key={user.id} className="relative">
              <Link href={`/employee/${user.id}`}>
                <UserCard user={user} />
              </Link>

              <div className="flex justify-between mt-2">
                <button
                  onClick={() => removeBookmark(user.id)}
                  className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
                <button
                  onClick={() => alert("Promoted!")}
                  className="bg-green-500 text-white text-sm px-2 py-1 rounded hover:bg-green-600"
                >
                  Promote
                </button>
                <button
                  onClick={() => alert("Assigned to Project!")}
                  className="bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600"
                >
                  Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
