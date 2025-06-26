import React from "react";
import { motion, Variants } from "framer-motion";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    icon: <FaUniversity />,
    title: "Cracow University of Technology",
    subtitle: "Bachelor of Engineering, Information Technology",
    date: "2024 - Present",
  },
  {
    icon: <FaGraduationCap />,
    title: "Upper Secondary School of Communications",
    subtitle: "Technician Diploma, Teleinformatics",
    date: "2019 - 2024",
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

export default function Education() {
  return (
    <section id="education" className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/30 ml-6">
        {educationData.map((item, i) => (
          <motion.div
            key={i}
            className="mb-10 ml-12"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <span className="absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 text-blue-600 ring-8 ring-white dark:bg-blue-900 dark:text-blue-300 dark:ring-gray-900">
              {item.icon}
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-md text-gray-600 dark:text-gray-400">{item.subtitle}</p>
            <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{item.date}</time>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 