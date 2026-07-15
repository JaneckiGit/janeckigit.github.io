"use client";
import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  details: string;
  skills: string[];
};

const certificateData: Cert[] = [
  {
    name: "Google Certificate — AI in Business Development",
    issuer: "Google",
    date: "Sep 2025",
    details:
      "Applying artificial intelligence to business development: identifying opportunities, streamlining workflows, and using AI tools to support decision-making and growth.",
    skills: ["AI", "Business Development"],
  },
  {
    name: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    date: "Mar 2025",
    url: "https://www.credly.com/badges/3d52d958-2d4a-4e41-9f34-4241112b1328",
    details:
      "Fundamental mastery of Scrum — roles, events, and artifacts. Facilitating agile teams, improving delivery, and fostering collaboration.",
    skills: ["Agile Methodologies", "Coaching", "Scrum"],
  },
  {
    name: "Skills of Tomorrow",
    issuer: "Google",
    date: "2023",
    details:
      "Digital skills for the future workplace — cloud, collaboration, and productivity tools, plus digital transformation fundamentals.",
    skills: ["Digital Skills", "Collaboration"],
  },
  {
    name: "Google Cloud Essentials",
    issuer: "Google",
    date: "Sep 2022",
    details:
      "Basics of Google Cloud Platform — cloud infrastructure, virtual machines, storage, and networking, including deploying and managing cloud resources.",
    skills: ["Google Cloud Platform (GCP)"],
  },
  {
    name: "Team Mentoring Principles",
    issuer: "Zwolnieni z Teorii",
    date: "May 2022",
    details:
      "Effective mentoring and teamwork strategies — supporting and guiding team members, fostering growth, and building a positive team culture.",
    skills: ["Coaching", "Leadership"],
  },
  {
    name: "Project Management Advanced Training",
    issuer: "Project Management Institute",
    date: "Aug 2021",
    details:
      "Advanced project management — planning, risk management, and leadership for complex projects and teams.",
    skills: ["Scrum", "Agile Methodologies"],
  },
  {
    name: "Digital Skills",
    issuer: "Google",
    date: "Aug 2021",
    details:
      "Essential digital skills — online communication, marketing strategy, collaboration, and security for the modern workplace.",
    skills: ["Marketing", "Strategy"],
  },
  {
    name: "Project Management Fundamentals",
    issuer: "Project Management Institute",
    date: "May 2021",
    details:
      "Core project management concepts — planning, execution, and agile delivery within teams.",
    skills: ["Scrum", "Agile Methodologies"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Certificates() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <section id="certificates" className="mx-auto w-full max-w-5xl px-4 py-20">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & continuous learning"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificateData.map((cert, i) => (
          <motion.button
            key={cert.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            onClick={() => setSelected(cert)}
            className="glass glass-sheen group flex flex-col items-start rounded-3xl p-6 text-left transition-transform hover:scale-[1.02]"
            aria-label={`Show details for ${cert.name}`}
          >
            <div className="flex w-full items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-500">
                <FaCertificate />
              </span>
              <span className="text-xs font-medium text-slate-400">
                {cert.date}
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-900 dark:text-slate-100">
              {cert.name}
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="glass relative w-full max-w-lg rounded-3xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 text-2xl leading-none text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                aria-label="Close"
              >
                ×
              </button>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-500">
                <FaCertificate />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">
                {selected.name}
              </h3>
              <p className="text-sm font-medium text-accent">
                {selected.issuer} · {selected.date}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {selected.details}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {selected.url && (
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full accent-gradient-bg px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03]"
                >
                  Show credential <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
