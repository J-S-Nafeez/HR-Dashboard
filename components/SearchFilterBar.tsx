"use client";
import React, { useState, useEffect, useRef } from "react";
interface SearchFilterBarProps {
  onSearch: (query: string) => void;
  onDepartmentFilter: (departments: string[]) => void;
  onRatingFilter: (ratings: number[]) => void;
}

const departmentsList = ["HR", "Engineering", "Marketing", "Finance", "Sales"];
const ratingsList = [1, 2, 3, 4, 5];

export default function SearchFilterBar({
  onSearch,
  onDepartmentFilter,
  onRatingFilter,
}: SearchFilterBarProps) {
  const [searchText, setSearchText] = useState("");
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const deptRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (deptRef.current && !deptRef.current.contains(event.target as Node)) {
        setShowDeptDropdown(false);
      }
      if (ratingRef.current && !ratingRef.current.contains(event.target as Node)) {
        setShowRatingDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    onSearch(searchText);
  }, [searchText]);

  useEffect(() => {
    onDepartmentFilter(selectedDepartments);
  }, [selectedDepartments]);

  useEffect(() => {
    onRatingFilter(selectedRatings);
  }, [selectedRatings]);

  const toggleArrayItem = <T,>(item: T, list: T[], setList: (value: T[]) => void) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  return (
    <div className="w-full p-4 bg-gray-900 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Search Box */}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by name, email, department..."
        className="w-full md:w-1/3 px-3 py-2 text-sm rounded-md bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Department Dropdown */}
      <div className="relative" ref={deptRef}>
        <button
          onClick={() => setShowDeptDropdown((prev) => !prev)}
          className="px-3 py-2 text-sm bg-gray-800 text-white rounded-md border border-gray-700 hover:bg-gray-700"
        >
          {selectedDepartments.length > 0
            ? selectedDepartments.join(", ")
            : "Select Department"}
        </button>
        {showDeptDropdown && (
          <div className="absolute top-12 left-0 z-10 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-md">
            {departmentsList.map((dept) => (
              <label
                key={dept}
                className="block px-3 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dept)}
                  onChange={() =>
                    toggleArrayItem(dept, selectedDepartments, setSelectedDepartments)
                  }
                  className="mr-2"
                />
                {dept}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Dropdown */}
      <div className="relative" ref={ratingRef}>
        <button
          onClick={() => setShowRatingDropdown((prev) => !prev)}
          className="px-3 py-2 text-sm bg-gray-800 text-white rounded-md border border-gray-700 hover:bg-gray-700"
        >
          {selectedRatings.length > 0
            ? selectedRatings.map((r) => `⭐ ${r}`).join(", ")
            : "Select Rating"}
        </button>
        {showRatingDropdown && (
          <div className="absolute top-12 left-0 z-10 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-md">
            {ratingsList.map((rating) => (
              <label
                key={rating}
                className="block px-3 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() =>
                    toggleArrayItem(rating, selectedRatings, setSelectedRatings)
                  }
                  className="mr-2"
                />
                ⭐ {rating}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
