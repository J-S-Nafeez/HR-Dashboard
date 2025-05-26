// app/dashboard/[id]/page.tsx

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Dashboard Page for ID: {params.id}</h1>
    </div>
  );
}
