import "./globals.css";
import { BookmarkProvider } from "../context/BookmarkContext";

export const metadata = {
  title: "Employee Dashboard",
  description: "Demo employee dashboard app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BookmarkProvider>{children}</BookmarkProvider>
      </body>
    </html>
  );
}
