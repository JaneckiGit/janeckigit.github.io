"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-6 flex flex-col gap-2 justify-center items-center glass border-t-4 border-transparent bg-white/30 dark:bg-black/30 backdrop-blur-lg mt-16"
    >
      <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-60 rounded-t-full mb-2" />
      <SocialLinks />
      <span className="text-gray-700 dark:text-gray-200 text-sm text-center">
        &copy; {new Date().getFullYear()} Mateusz Janecki. All rights reserved.
      </span>
    </motion.footer>
  );
} 