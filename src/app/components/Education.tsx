import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const education = [
  {
    school: "Politechnika Krakowska im. Tadeusza Kościuszki",
    degree: "Information Technology",
    date: "Oct 2024 – Present",
    icon: <FaUniversity className="text-blue-500 text-3xl" />,
  },
  {
    school: "Zespół Szkół Łączności w Krakowie // Upper Secondary School of Communications",
    degree: "Technician, Teleinformatics",
    date: "Sep 2019 – Apr 2024",
    icon: <FaGraduationCap className="text-purple-500 text-3xl" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Education</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex-1 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 neumorphism-card flex flex-col items-center gap-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            {edu.icon}
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 text-center">{edu.school}</h3>
            <div className="text-gray-800 dark:text-gray-200 text-center">{edu.degree}</div>
            <div className="text-gray-500 text-sm text-center">{edu.date}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 