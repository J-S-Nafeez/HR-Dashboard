"use client";

import React from "react";
import { useBookmarks } from "../context/BookmarkContext";
import Link from "next/link";

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

export default function UserCard({ user }: { user: User }) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(user.id);

  function toggleBookmark() {
    if (bookmarked) removeBookmark(user.id);
    else addBookmark(user);
  }

  // Render rating stars
  function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  }

  return (
    <div className="border p-4 rounded shadow-sm flex flex-col space-y-2">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="text-lg font-semibold text-center">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-sm text-center">{user.email}</p>
      <p className="text-sm text-center">Age: {user.age}</p>
      <p className="text-sm text-center font-medium">{user.department}</p>
      <div className="text-center text-yellow-400">{renderStars(user.rating)}</div>
      <div className="flex justify-center space-x-2">
        <Link
          href={`/employee/${user.id}`}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View
        </Link>
        <button
          onClick={toggleBookmark}
          className={`px-3 py-1 rounded ${
            bookmarked ? "bg-red-600 text-white" : "bg-gray-300"
          } hover:bg-red-700`}
        >
          {bookmarked ? "Remove Bookmark" : "Bookmark"}
        </button>
        <button
          onClick={() => alert(`Promoted ${user.firstName}!`)}
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Promote
        </button>
      </div>
    </div>
  );
}
