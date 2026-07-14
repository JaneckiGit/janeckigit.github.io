export type ReelStats = {
  views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  reach?: number;
};

export type Reel = {
  /** Full Instagram reel/post URL, e.g. https://www.instagram.com/reel/ABC123/ — leave "" until real */
  url: string;
  title: string;
  description: string;
  /** What Mateusz did on this piece of content */
  roles: string[];
  stats: ReelStats;
  /** true = placeholder demo data; the card shows a "Sample" badge until replaced */
  sample?: boolean;
};

// ─────────────────────────────────────────────────────────────────────────────
// PODMIEŃ PONIŻSZE WPISY NA PRAWDZIWE ROLKI:
// 1. url    → wklej pełny link do rolki na Instagramie (musi być publiczna)
// 2. stats  → wpisz liczby z panelu statystyk Instagrama
// 3. sample → usuń tę linię (albo ustaw false), żeby zniknął znaczek "Sample"
// ─────────────────────────────────────────────────────────────────────────────
export const reels: Reel[] = [
  {
    url: "",
    title: "Event promo — Kościuszkon",
    description:
      "Promotional reel for a student hackathon: concept, shot list, edit and paid distribution via Meta Ads.",
    roles: ["Concept", "Editing", "Meta Ads"],
    stats: { views: 25000, likes: 1200, comments: 85, reach: 21000 },
    sample: true,
  },
  {
    url: "",
    title: "Campus activation — iStudies by iSpot",
    description:
      "Short-form video from an on-campus Apple education activation, built to grow the student community.",
    roles: ["Concept", "Filming"],
    stats: { views: 14000, likes: 800, comments: 40, reach: 12500 },
    sample: true,
  },
  {
    url: "",
    title: "Email + social campaign recap",
    description:
      "Recap reel of a cross-platform campaign: coordinated social posts, paid ads and an email push.",
    roles: ["Strategy", "Editing"],
    stats: { views: 9000, likes: 450, comments: 22, reach: 8000 },
    sample: true,
  },
];
