import React from "react";
import { motion, Variants } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const educationData = [
  {
    icon: <FaUniversity className="text-4xl md:text-5xl text-blue-500 dark:text-blue-300" />,
    logo: null,
    initials: "PK",
    title: "Cracow University of Technology",
    subtitle: "Bachelor of Engineering, Information Technology",
    date: "2024 - Present",
    color: "from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700",
  },
  {
    icon: <FaGraduationCap className="text-4xl md:text-5xl text-purple-500 dark:text-purple-300" />,
    logo: null,
    initials: "ZSŁ",
    title: "Upper Secondary School of Communications",
    subtitle: "Technician Diploma, Teleinformatics",
    date: "2019 - 2024",
    color: "from-purple-200 to-purple-400 dark:from-purple-900 dark:to-purple-700",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Accent color from CSS variable
const accent = typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#3b82f6' : '#3b82f6';

export default function Education() {
  return (
    <section id="education" className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Education</h2>
      <div className="relative border-l-4" style={{ borderColor: 'var(--accent, #3b82f6)' }}>
        {educationData.map((item, i) => (
          <motion.div
            key={i}
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
              <div className="font-semibold text-lg mb-1">{item.title}</div>
              <div className="text-[color:var(--accent,#3b82f6)] font-semibold mb-1">{item.subtitle}</div>
              <div className="text-xs text-gray-500 mb-2">{item.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 