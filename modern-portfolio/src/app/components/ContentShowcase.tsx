"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaEye,
  FaHeart,
  FaComment,
  FaBullhorn,
  FaArrowLeft,
} from "react-icons/fa";
import LiquidBackground from "./LiquidBackground";
import Navbar from "./Navbar";
import SectionHeading from "./SectionHeading";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { reels, type Reel } from "../data/reels";

function formatCount(n?: number): string {
  if (n === undefined) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return `${n}`;
}

function embedUrl(url: string): string {
  return `${url.replace(/\/+$/, "")}/embed`;
}

const statDefs: {
  key: keyof Reel["stats"];
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "views", label: "Views", icon: <FaEye /> },
  { key: "likes", label: "Likes", icon: <FaHeart /> },
  { key: "comments", label: "Comments", icon: <FaComment /> },
  { key: "reach", label: "Reach", icon: <FaBullhorn /> },
];

export default function ContentShowcase() {
  const totals = reels.reduce(
    (acc, r) => ({
      views: acc.views + (r.stats.views ?? 0),
      likes: acc.likes + (r.stats.likes ?? 0),
      comments: acc.comments + (r.stats.comments ?? 0),
    }),
    { views: 0, likes: 0, comments: 0 }
  );
  const engagement =
    totals.views > 0
      ? (((totals.likes + totals.comments) / totals.views) * 100).toFixed(1)
      : null;

  const summary = [
    { label: "Total views", value: formatCount(totals.views) },
    { label: "Total likes", value: formatCount(totals.likes) },
    ...(engagement !== null
      ? [{ label: "Avg. engagement", value: `${engagement}%` }]
      : []),
    { label: "Featured reels", value: `${reels.length}` },
  ];

  return (
    <>
      <LiquidBackground />
      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-28 pb-4">
        <motion.a
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          href="/"
          className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-transform hover:scale-[1.03]"
        >
          <FaArrowLeft className="text-accent" /> Back to portfolio
        </motion.a>

        <div className="pt-10">
          <SectionHeading
            eyebrow="Content & Social Media"
            title="Short-form video that performs"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="-mt-8 mb-10 max-w-2xl text-base leading-relaxed text-slate-600"
          >
            A selection of Instagram reels I created and promoted — from concept
            and filming to editing and paid distribution with Meta Ads — with
            real performance numbers from Instagram insights.
          </motion.p>

          {/* Summary stat tiles */}
          <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {summary.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass glass-sheen rounded-3xl p-5 text-center"
              >
                <div className="text-3xl font-semibold tracking-tight text-slate-900">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reel cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reels.map((reel, i) => (
              <motion.article
                key={reel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass glass-sheen flex flex-col overflow-hidden rounded-3xl"
              >
                {/* Video */}
                <div className="relative">
                  {reel.url ? (
                    <iframe
                      src={embedUrl(reel.url)}
                      title={reel.title}
                      className="h-[420px] w-full border-0"
                      loading="lazy"
                      allow="encrypted-media"
                    />
                  ) : (
                    <div className="flex h-[420px] w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#eef2ff,#e0f2fe)]">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl accent-gradient-bg text-3xl text-white shadow-lg">
                        <FaInstagram />
                      </span>
                      <p className="px-8 text-center text-sm text-slate-500">
                        Reel embed coming soon
                      </p>
                    </div>
                  )}
                  {reel.sample && (
                    <span className="absolute right-3 top-3 rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-300/60 backdrop-blur-sm">
                      Sample data
                    </span>
                  )}
                </div>

                {/* Copy */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-slate-900">
                    {reel.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {reel.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {reel.roles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
                    {statDefs
                      .filter((d) => reel.stats[d.key] !== undefined)
                      .map((d) => (
                        <div
                          key={d.key}
                          className="glass-soft flex items-center gap-2.5 rounded-2xl px-3 py-2"
                        >
                          <span className="text-accent">{d.icon}</span>
                          <span className="text-sm font-semibold text-slate-800">
                            {formatCount(reel.stats[d.key])}
                          </span>
                          <span className="text-xs text-slate-400">
                            {d.label}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            Numbers come from Instagram insights for the featured posts.
          </p>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
