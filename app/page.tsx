"use client";

import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useRouter } from "next/navigation";

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

const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "HR",
  "Finance",
  "Design",
  "Operations",
];

function getRandomDepartment() {
  return departments[Math.floor(Math.random() * departments.length)];
}

export default function DashboardPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://dummyjson.com/users?limit=20");
      const data = await res.json();

      const mappedUsers: User[] = data.users.map((u: any) => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        age: u.age,
        image: u.image,
        department: getRandomDepartment(),
        rating: Math.floor(Math.random() * 5) + 1,
      }));

      setUsers(mappedUsers);
    }
    fetchUsers();
  }, []);

  function handleDepartmentChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const options = e.target.options;
    const selected: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selected.push(options[i].value);
    }
    setSelectedDepartments(selected);
  }

  function handleRatingChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const options = e.target.options;
    const selected: number[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selected.push(parseInt(options[i].value));
    }
    setSelectedRatings(selected);
  }

  const filteredUsers = users.filter((u) => {
    const search = searchTerm.toLowerCase();
    const matchSearch =
      u.firstName.toLowerCase().includes(search) ||
      u.lastName.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search) ||
      u.department.toLowerCase().includes(search);

    const matchDepartment =
      selectedDepartments.length === 0 ||
      selectedDepartments.includes(u.department);

    const matchRating =
      selectedRatings.length === 0 || selectedRatings.includes(u.rating);

    return matchSearch && matchDepartment && matchRating;
  });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <button
          onClick={() => router.push("/analytics")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          View Analytics 📊
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 mb-6 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search by name, email, or department"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-3 py-1.5 flex-grow"
        />

        <select
          multiple
          onChange={handleDepartmentChange}
          value={selectedDepartments}
          className="border rounded px-3 py-1.5 w-full md:w-64"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        <select
          multiple
          onChange={handleRatingChange}
          value={selectedRatings.map(String)}
          className="border rounded px-3 py-1.5 w-full md:w-48"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Stars
            </option>
          ))}
        </select>
      </div>

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}


