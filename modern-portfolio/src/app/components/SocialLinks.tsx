import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialLinksProps {
  size?: '2xl' | '3xl' | '4xl';
  center?: boolean;
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/janeckigit",
    icon: <FaGithub />,
    color: "hover:text-gray-800 dark:hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusz-j-621b1a196/",
    icon: <FaLinkedin />,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    url: "mailto:mateuszjanecki04@gmail.com",
    icon: <FaEnvelope />,
    color: "hover:text-red-500 dark:hover:text-red-400 animate-pulse",
  },
];

export default function SocialLinks({ size = '2xl', center = false }: SocialLinksProps) {
  return (
    <motion.div
      className={`flex gap-6 ${center ? 'justify-center w-full' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${size} text-gray-500 transition-colors ${social.color}`}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
} 