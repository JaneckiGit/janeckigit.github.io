import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificateData = [
  {
    name: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    url: "",
    details: "Demonstrates a fundamental level of Scrum mastery, including Scrum roles, events, and artifacts. I learned how to facilitate agile teams, improve project delivery, and foster collaboration."
  },
  {
    name: "Skills of Tomorrow certificate",
    issuer: "Google",
    url: "",
    details: "Focused on digital skills for the future, including cloud, collaboration, and productivity tools. I learned about modern workplace technologies and digital transformation."
  },
  {
    name: "Google Cloud Essentials",
    issuer: "Google",
    url: "",
    details: "Covers the basics of Google Cloud Platform, including cloud infrastructure, virtual machines, storage, and networking. I learned how to deploy and manage cloud resources."
  },
  {
    name: "Team Mentoring Principles",
    issuer: "Zwolnieni z Teorii",
    url: "",
    details: "Explores effective mentoring and teamwork strategies. I learned how to support and guide team members, foster growth, and build a positive team culture."
  },
  {
    name: "Digital Skills",
    issuer: "Google",
    url: "",
    details: "Covers essential digital skills for the modern workplace, including online communication, collaboration, and security."
  },
  {
    name: "Project Management Advanced Training",
    issuer: "PMI",
    url: "",
    details: "Advanced project management concepts, including planning, risk management, and leadership. I learned how to manage complex projects and lead teams to success."
  },
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
  const [selected, setSelected] = useState<null | typeof certificateData[0]>(null);

  return (
    <section id="certificates" className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">A selection of my most valuable certificates and achievements in IT, cloud, and project management.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificateData.map((cert, i) => (
          <motion.div
            key={i}
            className="group relative flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-blue-200 before:to-purple-200 before:opacity-0 group-hover:before:opacity-40 before:transition-opacity before:duration-300 cursor-pointer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={cardVariants}
            onClick={() => setSelected(cert)}
            tabIndex={0}
            role="button"
            aria-label={`Show details for ${cert.name}`}
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2, repeatType: 'reverse' }}
            >
              <FaCertificate className="text-4xl text-yellow-500 mb-4" />
            </motion.span>
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
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-2 text-center">{selected.name}</h3>
              <p className="text-center text-gray-500 mb-4">{selected.issuer}</p>
              <div className="text-gray-700 dark:text-gray-200 text-center whitespace-pre-line">{selected.details}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}