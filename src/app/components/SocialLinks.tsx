import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/janeckigit",
    icon: <FaGithub />,
    color: "hover:text-black dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusz-j-621b1a196/",
    icon: <FaLinkedin />,
    color: "hover:text-blue-700 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: <FaEnvelope />,
    color: "hover:text-red-500",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-row md:flex-col gap-6 items-center justify-center mt-4">
      {socials.map((social, idx) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 + idx * 10 }}
          whileTap={{ scale: 0.95 }}
          className={`text-3xl transition-colors duration-200 ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
} 