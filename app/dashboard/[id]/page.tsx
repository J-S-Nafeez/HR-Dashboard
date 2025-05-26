// ✅ CORRECT WAY for Next.js 13+ App Router

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Dashboard ID: {params.id}</h1>
    </div>
  );
}
