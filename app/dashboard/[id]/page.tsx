import EmployeeDetailsPageClient from "./EmployeeDetailsPageClient";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Employee Details",
};

export default function Page({ params }: PageProps) {
  const { id } = params;
  return <EmployeeDetailsPageClient id={id} />;
}
