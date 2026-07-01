import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialLinksProps {
  size?: "xl" | "2xl" | "3xl";
  center?: boolean;
}

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusz-j-621b1a196/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: "https://github.com/JaneckiGit",
    icon: <FaGithub />,
  },
  {
    name: "Email",
    url: "mailto:mateuszjanecki04@gmail.com",
    icon: <FaEnvelope />,
  },
];

const sizeMap = { xl: "text-xl", "2xl": "text-2xl", "3xl": "text-3xl" };

export default function SocialLinks({ size = "2xl", center = false }: SocialLinksProps) {
  return (
    <motion.div
      className={`flex gap-3 ${center ? "w-full justify-center" : ""}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`flex h-11 w-11 items-center justify-center rounded-full glass-soft ${sizeMap[size]} text-slate-600 transition-all hover:scale-110 hover:text-accent`}
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
}
