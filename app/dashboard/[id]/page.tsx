// app/dashboard/[id]/page.tsx

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  return (
    <div>
      <h1>User Dashboard ID: {params.id}</h1>
    </div>
  );
}
