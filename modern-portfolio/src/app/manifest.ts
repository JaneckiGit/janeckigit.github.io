import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mateusz Janecki — Scrum Master (PSM I) · Kraków",
    short_name: "Mateusz Janecki",
    description:
      "Portfolio of Mateusz Janecki — certified Scrum Master (PSM I) based in Kraków, Poland, with a background in QA automation and DevOps.",
    start_url: "/",
    display: "browser",
    background_color: "#f6f8fc",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
