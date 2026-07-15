import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://janeckimateusz.com";
const GA_MEASUREMENT_ID = "G-Q88E0JEZVD";
const NAME = "Mateusz Janecki";
const TITLE = "Mateusz Janecki — Scrum Master & IT";
const DESCRIPTION =
  "Portfolio of Mateusz Janecki — Scrum Master with a technical background in software development, QA automation, and DevOps. Computer Science student in Cracow, Poland.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Mateusz Janecki",
  },
  description: DESCRIPTION,
  applicationName: "Mateusz Janecki Portfolio",
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  keywords: [
    "Mateusz Janecki",
    "Janecki Mateusz",
    "Scrum Master",
    "PSM I",
    "portfolio",
    "software developer",
    "QA automation",
    "test automation",
    "DevOps",
    "Azure DevOps",
    "CI/CD",
    "Cypress",
    "Selenium",
    "Java",
    "Cracow",
    "Kraków",
    "Poland",
    "IT student",
    "Cracow University of Technology",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mateusz Janecki Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mateusz Janecki — Scrum Master with a technical background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: "Janecki Mateusz",
  url: SITE_URL,
  image: `${SITE_URL}/profile.jpg`,
  jobTitle: "Scrum Master",
  description: DESCRIPTION,
  email: "mailto:mateuszjanecki04@gmail.com",
  telephone: "+48537789787",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cracow",
    addressCountry: "PL",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Cracow University of Technology",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "iSpot (Apple Premium Partner)",
  },
  knowsLanguage: ["Polish", "English"],
  knowsAbout: [
    "Scrum",
    "Agile",
    "Software Testing",
    "QA Automation",
    "DevOps",
    "CI/CD",
    "Cloud",
    "Java",
    "JavaScript",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mateusz-j-621b1a196/",
    "https://github.com/JaneckiGit",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
