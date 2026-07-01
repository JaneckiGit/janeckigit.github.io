import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mateusz Janecki — Scrum Master & IT",
  description:
    "Portfolio of Mateusz Janecki — Scrum Master with a technical background in software development, QA automation, and DevOps. Cracow, Poland.",
  openGraph: {
    title: "Mateusz Janecki — Scrum Master & IT",
    description:
      "Scrum Master with a technical background in software development, QA automation, and DevOps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head />
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
