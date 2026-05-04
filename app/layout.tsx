import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tradex Solution",
  description:
    "A modern digital experience for Tradex Solution, built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-ink font-sans text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
