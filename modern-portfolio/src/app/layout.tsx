import "./globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mateusz Janecki | Portfolio",
  description: "Modern portfolio for Mateusz Janecki, showcasing skills in software development, DevOps, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head />
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
