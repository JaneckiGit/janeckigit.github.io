import React from "react";
import { motion, Variants } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificateData = [
  { name: "Professional Scrum Master™ I (PSM I)", issuer: "Scrum.org", url: "" },
  { name: "Skills of Tomorrow certificate", issuer: "Google", url: "" },
  { name: "Google Cloud Essentials", issuer: "Google", url: "" },
  { name: "Team Mentoring Principles", issuer: "Zwolnieni z Teorii", url: "" },
  { name: "Digital Skills", issuer: "Google", url: "" },
  { name: "Project Management Advanced Training", issuer: "PMI", url: "" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Certificates() {
  return (
    <section id="certificates" className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateData.map((cert, i) => (
          <motion.div
            key={i}
            className="group relative flex flex-col items-center justify-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <FaCertificate className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-center">{cert.name}</h3>
            <p className="text-sm text-gray-500">{cert.issuer}</p>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Certificate <FaExternalLinkAlt className="ml-2" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 