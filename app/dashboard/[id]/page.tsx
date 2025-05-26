// app/dashboard/[id]/page.tsx

import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  return (
    <div>
      <h1>Dashboard for ID: {params.id}</h1>
    </div>
  );
};

export default Page;
