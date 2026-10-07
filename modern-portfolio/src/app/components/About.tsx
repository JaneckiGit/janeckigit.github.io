"use client";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java 17", "C# / .NET", "TypeScript / JavaScript", "SQL"],
  },
  {
    label: "Frameworks & Databases",
    items: ["Django REST Framework", "React", "JavaFX", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    label: "QA & Test Automation",
    items: ["Selenium", "Appium", "Cypress", "Pytest (basics)", "Unit & Regression Tests", "Manual & Exploratory Testing"],
  },
  {
    label: "DevOps & Tools",
    items: ["Git / GitHub", "Docker", "Azure DevOps (CI/CD)", "Virtual Machines", "Linux & Windows", "Power BI"],
  },
  {
    label: "Agile & Collaboration",
    items: ["Scrum (PSM I)", "Agile", "Jira", "Confluence"],
  },
  {
    label: "Networking",
    items: ["TCP/IP", "Computer Networks", "Teleinformatics"],
  },
];

const contacts = [
  { icon: <FaEnvelope />, label: "mateuszjanecki04@gmail.com", href: "mailto:mateuszjanecki04@gmail.com" },
  { icon: <FaPhone />, label: "+48 537 789 787", href: "tel:+48537789787" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/mateusz-j-621b1a196/" },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/JaneckiGit" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-4 py-20">
      <SectionHeading
        eyebrow="About"
        title="A technical mind with a delivery mindset"
      />

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass glass-sheen rounded-3xl p-8"
        >
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            I&apos;m a Computer Science student at Cracow University of
            Technology with hands-on experience across software development,
            QA and DevOps. Currently I&apos;m a full-stack developer intern at
            Unit-Unicorn, working in Python / Django REST Framework, React and
            PostgreSQL.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Previously I completed two R&amp;D internships at ABB, where I built
            automated, regression and unit tests in C# (Selenium, Appium) and
            JavaScript (Cypress), and maintained CI/CD pipelines and virtual
            machines in Azure DevOps. I have a technician background in
            teleinformatics and computer networks, and as a certified
            Professional Scrum Master (PSM I) I&apos;m used to working in Scrum
            teams and communicating daily across QA, development and DevOps.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl glass-soft px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 transition-transform hover:scale-[1.02]"
              >
                <span className="text-accent">{c.icon}</span>
                <span className="truncate">{c.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Languages + quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass glass-sheen flex flex-col gap-6 rounded-3xl p-8"
        >
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Languages
            </h3>
            <div className="space-y-3">
              {[
                { name: "Polish", level: "Native", pct: 100 },
                { name: "English", level: "Professional working", pct: 75 },
              ].map((l) => (
                <div key={l.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-slate-700 dark:text-slate-200">{l.name}</span>
                    <span className="text-slate-400">{l.level}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200/70 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full accent-gradient-bg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center gap-3 rounded-2xl glass-soft px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
            <FaMapMarkerAlt className="text-accent" />
            Based in Cracow, Poland — open to hybrid & remote
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass-soft rounded-3xl p-6"
          >
            <h4 className="mb-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/60 dark:bg-white/5 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-slate-900/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
