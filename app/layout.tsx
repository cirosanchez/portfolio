import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik({ weight: "400", subsets: ['latin']});

export const metadata: Metadata = {
  title: "Ciro Sánchez » Developer",
  description: "Im Ciro Sánchez, a colombian developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
