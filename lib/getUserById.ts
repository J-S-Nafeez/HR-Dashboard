// lib/getUserById.ts
export async function getUserById(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    phone: user.phone,
    address: `${user.address.address}, ${user.address.city}`,
    image: user.image,
    department: ["Engineering", "HR", "Marketing", "Sales", "Finance", "Support"][Math.floor(Math.random() * 6)],
    rating: Math.floor(Math.random() * 5) + 1,
    bio: "Motivated employee with a strong background in teamwork and problem solving.",
    performanceHistory: Array.from({ length: 5 }, (_, i) => ({
      year: 2019 + i,
      rating: Math.floor(Math.random() * 5) + 1,
    })),
  };
}
