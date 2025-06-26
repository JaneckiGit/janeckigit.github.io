import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    name: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    date: "Mar 2025",
    skills: ["Agile Methodologies", "Coaching", "Leadership", "Scrum"],
    url: "",
  },
  {
    name: "Skills of Tomorrow certificate",
    issuer: "Google",
    date: "May 2023",
    skills: ["Marketing", "E-Commerce", "Google Analytics", "Digital Marketing", "SEO", "Project Management"],
    url: "",
  },
  {
    name: "Google Cloud Essentials",
    issuer: "Google",
    date: "Sep 2022",
    skills: ["Google Cloud Platform (GCP)", "Cloud"],
    url: "",
  },
  {
    name: "Team Mentoring Principles",
    issuer: "Zwolnieni z Teorii",
    date: "May 2022",
    skills: ["Coaching", "Leadership"],
    url: "",
  },
  {
    name: "Digital Skills",
    issuer: "Google",
    date: "2021",
    skills: ["Marketing", "Digital Marketing"],
    url: "",
  },
  {
    name: "Project Management Advanced Training",
    issuer: "Project Management Institute",
    date: "2021",
    skills: ["Project Management"],
    url: "",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Certificates</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch flex-wrap">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex-1 bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 neumorphism-card flex flex-col items-center gap-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300 min-w-[280px] max-w-[350px]"
          >
            <FaCertificate className="text-yellow-500 text-3xl" />
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 text-center">{cert.name}</h3>
            <div className="text-gray-800 dark:text-gray-200 text-center">{cert.issuer}</div>
            <div className="text-gray-500 text-sm text-center">{cert.date}</div>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {cert.skills.map((skill) => (
                <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-semibold">
                  {skill}
                </span>
              ))}
            </div>
            {cert.url && (
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-blue-500 hover:underline">
                Show Certificate <FaExternalLinkAlt />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 