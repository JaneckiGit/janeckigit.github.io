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
    title: "Full-stack Developer — Internship",
    company: "Unit-Unicorn",
    type: "Internship",
    period: "Aug 2026 — Present",
    location: "Cracow, Poland",
    bullets: [
      "Implementing cloud file storage synchronisation in Django REST Framework using the Google Drive API",
      "Fixing navigation, rendering and UI consistency defects in a React single-page application",
      "Debugging across the stack with browser developer tools, container logs and database queries",
      "Working with Git feature branches, pull requests and code review; tracking tasks in Jira, documentation in Confluence",
    ],
    stack: [
      "TypeScript",
      "Python",
      "React",
      "Django REST Framework",
      "MUI",
      "PostgreSQL",
      "Docker",
      "Git",
      "GitHub",
      "Jira",
    ],
  },
  {
    title: "QA — Internship R&D",
    company: "ABB",
    type: "Internship",
    period: "Oct 2022 — Nov 2022",
    location: "Cracow, Poland",
    bullets: [
      "Performing manual and exploratory tests of a desktop application and Microsoft HoloLens",
      "Creating automated and regression tests for the desktop application using C#, Selenium and Appium",
      "Creating unit tests; reporting and tracking defects",
      "Analysing requirements and development tasks to define the scope of required test validations",
      "Participating in Scrum meetings and direct communication with QA, Frontend, Backend, IT and DevOps teams",
    ],
    stack: ["C#", ".NET", "Selenium", "Appium", "Azure DevOps", "Git", "Scrum"],
  },
  {
    title: "DevOps — Internship R&D",
    company: "ABB",
    type: "Internship",
    period: "Apr 2022 — May 2022",
    location: "Cracow, Poland",
    bullets: [
      "Creating automated and regression tests in JavaScript for a web application using the Cypress framework",
      "Creating and maintaining CI/CD pipelines in Azure DevOps",
      "Creating and maintaining virtual machines used as Linux and Windows test environments",
      "Performing manual tests and validating REST services with Postman",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Cypress", "Azure DevOps", "Postman", "Git", "Scrum"],
  },
  {
    title: "Brand Ambassador — iStudies",
    company: "iSpot · Apple Premium Partner",
    type: "Freelance",
    period: "Sep 2025 — Present",
    location: "Cracow, Poland",
    bullets: [
      "Representing iSpot's Apple education programme among students and universities; running on-campus activations",
      "Advising peers on Apple hardware, software and education offers",
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
      "Managing social media channels and email campaigns",
      "Creating and optimising paid Facebook and Instagram campaigns",
    ],
    stack: ["Meta Ads", "Email Marketing", "Social Media"],
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
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-white/60 dark:bg-white/5 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-slate-900/5">
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
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
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
