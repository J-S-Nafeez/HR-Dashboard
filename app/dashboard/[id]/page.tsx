// "use client";

// import React, { useEffect, useState } from "react";

// type Performance = {
//   project: string;
//   rating: number;
// };

// type UserDetail = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   image: string;
//   department: string;
//   address: string;
//   phone: string;
//   bio: string;
//   performanceHistory: Performance[];
//   rating: number;
// };

// const departments = [
//   "Engineering",
//   "Marketing",
//   "Sales",
//   "HR",
//   "Finance",
//   "Design",
//   "Operations",
// ];

// function getRandomDepartment() {
//   return departments[Math.floor(Math.random() * departments.length)];
// }

// function getRandomPerformanceHistory(): Performance[] {
//   const projects = [
//     "Project Alpha",
//     "Project Beta",
//     "Project Gamma",
//     "Project Delta",
//     "Project Epsilon",
//   ];
//   return projects.map((project) => ({
//     project,
//     rating: Math.floor(Math.random() * 5) + 1,
//   }));
// }

// export default function EmployeeDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;
//   const [user, setUser] = useState<UserDetail | null>(null);
//   const [activeTab, setActiveTab] = useState("overview");

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const res = await fetch(`https://dummyjson.com/users/${id}`);
//         const data = await res.json();

//         const addressString = data?.address
//           ? `${data.address.address}, ${data.address.city}, ${data.address.state}`
//           : "No address available";

//         const userDetails: UserDetail = {
//           id: data.id,
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           age: data.age,
//           image: data.image,
//           department: getRandomDepartment(),
//           address: addressString,
//           phone: data.phone,
//           bio: "Dedicated employee with strong work ethics and passion for excellence.",
//           performanceHistory: getRandomPerformanceHistory(),
//           rating: Math.floor(Math.random() * 5) + 1,
//         };

//         setUser(userDetails);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     }

//     fetchUser();
//   }, [id]);

//   if (!user) return <p className="p-6">Loading user details...</p>;

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, i) => (
//       <span
//         key={i}
//         className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
//       >
//         ★
//       </span>
//     ));
//   };

//   const badgeColor = (rating: number) => {
//     if (rating >= 4) return "bg-green-200 text-green-800";
//     if (rating >= 2) return "bg-yellow-200 text-yellow-800";
//     return "bg-red-200 text-red-800";
//   };

//   return (
//     <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
//       <div className="flex items-center space-x-6">
//         <img
//           src={user.image}
//           alt={`${user.firstName} ${user.lastName}`}
//           className="w-32 h-32 rounded-full"
//         />
//         <div>
//           <h1 className="text-3xl font-bold">
//             {user.firstName} {user.lastName}
//           </h1>
//           <p className="text-gray-700">{user.department}</p>
//           <div className="flex items-center space-x-2">{renderStars(user.rating)}</div>
//         </div>
//       </div>

//       <nav className="flex border-b border-gray-300 mt-6">
//         {["overview", "projects", "feedback"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 capitalize ${
//               activeTab === tab
//                 ? "border-b-2 border-blue-500 font-semibold"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </nav>

//       <section className="mt-4">
//         {activeTab === "overview" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Bio</h2>
//             <p className="text-gray-700 mb-4">{user.bio}</p>
//             <h3 className="text-lg font-semibold">Contact</h3>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//             <p>Address: {user.address}</p>
//             <p>Age: {user.age}</p>
//           </div>
//         )}

//         {activeTab === "projects" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Performance History</h2>
//             <ul>
//               {user.performanceHistory.map((perf, index) => (
//                 <li
//                   key={index}
//                   className={`p-2 rounded mb-2 ${badgeColor(perf.rating)}`}
//                 >
//                   {perf.project}: {renderStars(perf.rating)}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {activeTab === "feedback" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Manager's Feedback</h2>
//             <p className="text-gray-700">
//               {user.rating >= 4
//                 ? "Excellent performance, keep up the great work!"
//                 : user.rating >= 2
//                 ? "Consistent contributor, can improve with focus."
//                 : "Needs improvement in multiple areas. Consider setting goals and seeking mentorship."}
//             </p>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }



// //this is the filnall page.tsx





















// app/dashboard/[id]/page.tsx

import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const DashboardPage = ({ params }: PageProps) => {
  const { id } = params;

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>ID: {id}</p>
    </div>

  );
};

export default DashboardPage;
