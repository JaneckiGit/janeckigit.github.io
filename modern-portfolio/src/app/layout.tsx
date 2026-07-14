import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";

const SITE_URL = "https://janeckimateusz.com";
const NAME = "Mateusz Janecki";
const TITLE = "Mateusz Janecki — Scrum Master (PSM I) · Kraków";
const DESCRIPTION =
  "Mateusz Janecki — certified Scrum Master (PSM I) based in Kraków (Cracow), Poland, with a technical background in software development, QA test automation, and DevOps. Computer Science student at Cracow University of Technology.";
const GA_ID = "G-PD4Y46EJ1G";

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
    "Scrum Master Kraków",
    "Scrum Master Cracow",
    "Scrum Master Poland",
    "PSM I",
    "Professional Scrum Master",
    "Agile",
    "Agile Kraków",
    "portfolio",
    "software developer",
    "QA automation",
    "QA Engineer Kraków",
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
    "Politechnika Krakowska",
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
    type: "profile",
    locale: "en_US",
    alternateLocale: "pl_PL",
    url: SITE_URL,
    siteName: "Mateusz Janecki Portfolio",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Mateusz",
    lastName: "Janecki",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mateusz Janecki — Scrum Master (PSM I) based in Kraków",
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
  formatDetection: {
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
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
        addressLocality: "Kraków",
        addressRegion: "Lesser Poland Voivodeship",
        addressCountry: "PL",
      },
      workLocation: {
        "@type": "Place",
        name: "Kraków, Poland",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kraków",
          addressCountry: "PL",
        },
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Professional Scrum Master I (PSM I)",
          credentialCategory: "certification",
          recognizedBy: {
            "@type": "Organization",
            name: "Scrum.org",
          },
          url: "https://www.credly.com/badges/3d52d958-2d4a-4e41-9f34-4241112b1328",
        },
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Cracow University of Technology",
          alternateName: "Politechnika Krakowska",
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
        "Kanban",
        "Software Testing",
        "QA Automation",
        "DevOps",
        "CI/CD",
        "Cloud",
        "Java",
        "JavaScript",
        "Digital Marketing",
      ],
      sameAs: [
        "https://www.linkedin.com/in/mateusz-j-621b1a196/",
        "https://github.com/JaneckiGit",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mateusz Janecki Portfolio",
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
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
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}
        </Script>
      </body>
    </html>
  );
}
