import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
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
      <Analytics></Analytics>
    </html>
  );
}
