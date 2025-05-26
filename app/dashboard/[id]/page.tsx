// app/dashboard/[id]/page.tsx

export default function DashboardPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}
