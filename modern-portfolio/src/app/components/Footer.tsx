import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-6 flex justify-center items-center bg-white/30 dark:bg-black/30 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 mt-16"
    >
      <span className="text-gray-700 dark:text-gray-200 text-sm text-center">
        &copy; {new Date().getFullYear()} Mateusz Janecki. All rights reserved.
      </span>
    </motion.footer>
  );
} 