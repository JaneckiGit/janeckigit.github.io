import type { Metadata } from "next";
import ContentShowcase from "../components/ContentShowcase";

export const metadata: Metadata = {
  title: "Content & Social Media",
  description:
    "Instagram reels created and promoted by Mateusz Janecki — concept, filming, editing and Meta Ads distribution — with real performance stats.",
  alternates: {
    canonical: "/content",
  },
};

export default function ContentPage() {
  return <ContentShowcase />;
}
