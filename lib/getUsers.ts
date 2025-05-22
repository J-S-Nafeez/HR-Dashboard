import { User } from "@/types/user";

const departments = ["HR", "Engineering", "Marketing", "Finance", "Sales"];

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://dummyjson.com/users?limit=20");
  const data = await res.json();

  return data.users.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    image: user.image,
    department: departments[Math.floor(Math.random() * departments.length)],
    rating: Math.floor(Math.random() * 5) + 1,
    address: `${user.address.address}, ${user.address.city}`,
    phone: user.phone,
    bio: "Passionate team member focused on excellence.",
    performanceHistory: Array.from({ length: 6 }, () => Math.floor(Math.random() * 5) + 1),
  }));
}
