import React from "react";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
