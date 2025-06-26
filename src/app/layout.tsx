import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mateusz Janecki - Modern Portfolio" />
        <title>Mateusz Janecki Portfolio</title>
      </head>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ThemeToggle />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}