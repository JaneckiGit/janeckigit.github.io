import { motion } from "framer-motion";
import { FaBriefcase, FaCogs } from "react-icons/fa";

const experiences = [
  {
    title: "QA - internship R&D • ABB",
    icon: <FaCogs className="text-blue-500 dark:text-blue-400 text-2xl" />,
    details: [
      "Performing manual tests for Desktop Application and Microsoft Hololens",
      "Creating Unit Tests",
      "Creating automatic and regression tests in C# for desktop application using Appium and Selenium",
      "Participating in SCRUM meetings",
      "Direct communication with QA, Frontend, Backend, IT, and DevOps teams",
      "Stack: C# | Framework: .NET | Tools: Git, Azure DevOps, Appium, Selenium | Agile: Scrum",
    ],
  },
  {
    title: "DevOps - internship R&D • ABB",
    icon: <FaBriefcase className="text-purple-500 dark:text-purple-400 text-2xl" />,
    details: [
      "Performing manual tests",
      "Creating automatic and regression tests in JavaScript for web applications using Cypress, HTML, and CSS",
      "Creating and maintaining virtual machines",
      "Creating and maintaining pipelines using Azure DevOps",
      "Participating in SCRUM meetings",
      "Direct communication with QA, Frontend, Backend, IT, and DevOps teams",
      "Stack: JavaScript, HTML, CSS | Framework: Cypress | Tools: Git, Azure DevOps, Postman | Agile: Scrum",
    ],
  },
];

// Accent color from CSS variable
const accent = typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#3b82f6' : '#3b82f6';

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</h2>
      <div className="relative border-l-4" style={{ borderColor: 'var(--accent, #3b82f6)' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="mb-12 relative"
          >
            <span className="absolute -left-8 top-2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center animate-pulse"
              style={{ background: 'var(--accent, #3b82f6)' }}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
            </span>
            <div className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-6 animate-pop-in">
              <div className="font-semibold text-lg mb-1">{exp.title}</div>
              <div className="text-[color:var(--accent,#3b82f6)] font-semibold mb-1">{exp.icon}</div>
              <div className="text-xs text-gray-500 mb-2">{exp.details.join(', ')}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 