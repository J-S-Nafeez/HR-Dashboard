import { useMemo } from "react";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
  image: string;
};

type UseSearchParams = {
  users: User[];
  searchTerm: string;
  selectedDepartments: string[];
  selectedRatings: number[];
};

export function useSearch({
  users,
  searchTerm,
  selectedDepartments,
  selectedRatings,
}: UseSearchParams) {
  const filteredUsers = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return users.filter((u) => {
      const matchSearch =
        u.firstName.toLowerCase().includes(search) ||
        u.lastName.toLowerCase().includes(search) ||
        u.email.toLowerCase().includes(search) ||
        u.department.toLowerCase().includes(search);

      const matchDepartment =
        selectedDepartments.length === 0 || selectedDepartments.includes(u.department);

      const matchRating =
        selectedRatings.length === 0 || selectedRatings.includes(u.rating);

      return matchSearch && matchDepartment && matchRating;
    });
  }, [users, searchTerm, selectedDepartments, selectedRatings]);

  return filteredUsers;
}
