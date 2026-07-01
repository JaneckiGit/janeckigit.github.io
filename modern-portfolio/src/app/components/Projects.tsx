"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaGithub, FaRobot, FaFilePdf } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Stock Market Demo + Analytics",
    tagline: "JavaFX desktop trading simulator with live data & AI analysis",
    description:
      "A desktop application simulating a stock trading platform. It fetches live market data from Yahoo Finance and Binance APIs, renders interactive line and OHLC candlestick charts across multiple time ranges, and offers a demo trading account with buy/sell orders, Stop Loss / Take Profit triggers, and portfolio management.",
    highlights: [
      { icon: <FaChartLine />, text: "Live line & OHLC candlestick charts (Yahoo Finance + Binance)" },
      { icon: <FaRobot />, text: "AI-powered candlestick pattern analyzer for trend prediction" },
      { icon: <FaFilePdf />, text: "Automatic PDF tax report (PIT-8C) generation" },
    ],
    tech: ["Java 17", "JavaFX 21", "Maven", "Apache PDFBox"],
    link: "https://github.com/JaneckiGit",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-4 py-20">
      <SectionHeading eyebrow="Projects" title="Selected work" />

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass glass-sheen overflow-hidden rounded-3xl"
          >
            <div className="grid md:grid-cols-[1fr_1.4fr]">
              {/* Visual panel */}
              <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#4f46e5,#38bdf8)] p-8">
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#fff,transparent_40%),radial-gradient(circle_at_80%_70%,#fff,transparent_35%)]" />
                <FaChartLine className="relative text-7xl text-white/90 drop-shadow-lg" />
              </div>

              {/* Content */}
              <div className="p-7 sm:p-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {project.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h.text}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-indigo-50 text-accent">
                        {h.icon}
                      </span>
                      {h.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-900/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full glass-soft px-5 py-2.5 text-sm font-semibold text-slate-700 transition-transform hover:scale-[1.03]"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
