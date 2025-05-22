// components/EmployeeTabs.tsx
"use client";
import { useState } from "react";

export default function EmployeeTabs() {
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "feedback">("overview");

  const tabs = {
    overview: "This employee is a valuable member of the team. Shows consistent performance.",
    projects: "Worked on Project Alpha, Beta, and Gamma with excellent outcomes.",
    feedback: "Feedback: Punctual, dedicated, team player. Needs improvement in documentation.",
  };

  return (
    <div className="mt-6">
      <div className="flex space-x-4 mb-4">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "overview" | "projects" | "feedback")}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Ensure activeTab is valid */}
      {tabs[activeTab] && (
        <div className="bg-gray-800 p-4 rounded-lg text-gray-200">{tabs[activeTab]}</div>
      )}
    </div>
  );
}
