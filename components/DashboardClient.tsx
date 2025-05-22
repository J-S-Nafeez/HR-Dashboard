import SearchFilterBar from "@/components/SearchFilterBar";
import { useState, useEffect } from "react";
import { User } from "@/types/user";
import UserCard from "@/components/UserCard"; // your user card component

const [users, setUsers] = useState<User[]>([]);
const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
const [searchQuery, setSearchQuery] = useState("");
const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

// Fetch users on mount
useEffect(() => {
  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users?limit=20");
    const data = await res.json();
    const departments = ["HR", "Engineering", "Marketing", "Finance", "Sales"];

    const usersWithDepartments = data.users.map((user: any) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      image: user.image,
      department: departments[Math.floor(Math.random() * departments.length)],
      rating: Math.floor(Math.random() * 5) + 1,
    }));

    setUsers(usersWithDepartments);
    setFilteredUsers(usersWithDepartments);
  }
  fetchUsers();
}, []);

// Filter users when search or filters change
useEffect(() => {
  const filtered = users.filter((user) => {
    const matchesSearch =
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDepartment =
      selectedDepartments.length === 0 || selectedDepartments.includes(user.department);

    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.includes(user.rating);

    return matchesSearch && matchesDepartment && matchesRating;
  });

  setFilteredUsers(filtered);
}, [searchQuery, selectedDepartments, selectedRatings, users]);
