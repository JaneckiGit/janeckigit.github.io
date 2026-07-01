"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Role = {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  stack?: string[];
};

const experiences: Role[] = [
  {
    title: "Ambassador — iStudies",
    company: "iSpot · Apple Premium Partner",
    type: "Freelance",
    period: "Sep 2025 — Present",
    location: "Cracow, Poland",
    bullets: [
      "Representing iSpot's Apple education program among students and universities",
      "Running on-campus activations and building the student community",
      "Advising peers on Apple hardware, software, and education offers",
    ],
    stack: ["Brand Ambassador", "Community", "Communication"],
  },
  {
    title: "Marketing Coordinator",
    company: "Kościuszkon",
    type: "Freelance",
    period: "Dec 2024 — Jun 2025",
    location: "Cracow, Poland",
    bullets: [
      "Managing and maintaining social media channels",
      "Creating and optimizing paid advertising campaigns on Facebook and Instagram",
      "Coordinating promotional activities across different platforms",
      "Developing and executing email marketing campaigns",
    ],
    stack: ["Meta Ads", "Email Marketing", "Social Media", "Analytics"],
  },
  {
    title: "QA — Internship R&D",
    company: "ABB",
    type: "Apprenticeship",
    period: "Oct 2022 — Nov 2022",
    location: "Cracow, Poland",
    bullets: [
      "Manual testing of a desktop application and Microsoft HoloLens",
      "Writing unit tests and automated / regression tests in C#",
      "Test automation with Appium and Selenium",
      "Participating in SCRUM and cross-team communication (QA, Frontend, Backend, IT, DevOps)",
    ],
    stack: ["C#", ".NET", "Appium", "Selenium", "Azure DevOps", "Git", "Scrum"],
  },
  {
    title: "DevOps — Internship R&D",
    company: "ABB",
    type: "Apprenticeship",
    period: "Apr 2022 — May 2022",
    location: "Cracow, Poland",
    bullets: [
      "Automated and regression tests in JavaScript for web apps using Cypress (HTML/CSS)",
      "Creating and maintaining virtual machines",
      "Building and maintaining pipelines in Azure DevOps",
      "Participating in SCRUM and cross-team communication",
    ],
    stack: ["JavaScript", "Cypress", "Azure DevOps", "Postman", "Git", "Scrum"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-4 py-20">
      <SectionHeading eyebrow="Experience" title="Where I've made an impact" />

      <div className="relative pl-6 sm:pl-8">
        {/* timeline line */}
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-300 via-sky-300 to-transparent sm:left-3" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative"
            >
              {/* node */}
              <span className="absolute -left-[1.15rem] top-6 h-3.5 w-3.5 rounded-full accent-gradient-bg ring-4 ring-white sm:-left-[1.4rem]" />

              <div className="glass glass-sheen rounded-3xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-900/5">
                      {exp.type}
                    </span>
                    <p className="mt-1.5 text-xs text-slate-400">{exp.period}</p>
                    <p className="text-xs text-slate-400">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>

                {exp.stack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
