import { motion } from "framer-motion";

const experiences = [
  {
    title: "QA - internship R&D • ABB",
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

export default function Experience() {
  return (
    <section id="experience" className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Experience</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex-1 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 neumorphism-card hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{exp.title}</h3>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-200 space-y-2">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 