"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const departments = ["HR", "Engineering", "Marketing", "Finance", "Sales"];

const getBadgeColor = (rating: number) => {
  if (rating >= 4) return "bg-green-600";
  if (rating === 3) return "bg-yellow-600";
  return "bg-red-600";
};

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await res.json();

      const randomDept = departments[Math.floor(Math.random() * departments.length)];
      const randomRating = Math.floor(Math.random() * 5) + 1;

      setUser({
        ...data,
        department: randomDept,
        rating: randomRating,
        address: `${data.address.address}, ${data.address.city}`,
        phone: data.phone,
        bio: "Passionate team member with proven performance in multiple projects.",
      });
    }

    fetchUser();
  }, [id]);

  if (!user) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{user.firstName} {user.lastName}</h1>

      <div className="flex gap-6 items-center mb-6">
        <img src={user.image} alt="profile" className="w-28 h-28 rounded-full border border-gray-600" />
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p>
            <strong>Rating:</strong>{" "}
            <span className={`px-3 py-1 rounded-full text-sm ${getBadgeColor(user.rating)}`}>
              ⭐ {user.rating}
            </span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 mb-4">
        {["Overview", "Projects", "Feedback"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 mr-2 ${
              activeTab === tab ? "border-b-2 border-indigo-500 text-indigo-400" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Overview" && (
          <div>
            <h2 className="text-xl mb-2">Bio</h2>
            <p>{user.bio}</p>
            <h3 className="mt-4 text-lg font-semibold">Performance History</h3>
            <ul className="list-disc ml-5 mt-2">
              <li>Exceeded quarterly targets</li>
              <li>Lead 3 successful team projects</li>
              <li>Received "Employee of the Month" 2x</li>
            </ul>
          </div>
        )}
        {activeTab === "Projects" && (
          <div>
            <h2 className="text-xl mb-2">Recent Projects</h2>
            <ul className="list-disc ml-5 mt-2">
              <li>HR Analytics Dashboard</li>
              <li>Internal Communication App</li>
              <li>Performance Review System</li>
            </ul>
          </div>
        )}
        {activeTab === "Feedback" && (
          <div>
            <h2 className="text-xl mb-2">Peer Feedback</h2>
            <ul className="list-disc ml-5 mt-2">
              <li>"Great leadership and communication!"</li>
              <li>"Very punctual and reliable."</li>
              <li>"Always ready to help teammates."</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
