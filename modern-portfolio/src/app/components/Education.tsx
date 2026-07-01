"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    icon: <FaUniversity />,
    title: "Cracow University of Technology",
    subtitle: "Bachelor of Science — Computer Science / Information Technology",
    date: "Oct 2024 — Present",
    tags: ["Software Engineering", "Algorithms", "Databases"],
  },
  {
    icon: <FaGraduationCap />,
    title: "Upper Secondary School of Communications, Cracow",
    subtitle: "Technician Diploma — Teleinformatics",
    date: "Sep 2019 — Apr 2024",
    tags: ["Networking", "Cybersecurity", "CorelDRAW"],
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl px-4 py-20">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glass glass-sheen flex flex-col rounded-3xl p-7"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl accent-gradient-bg text-xl text-white shadow-md">
                {item.icon}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {item.date}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-900/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
