"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <button
      aria-label="Toggle dark mode"
      className="fixed top-6 right-6 z-50 bg-white/80 dark:bg-black/80 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform"
      onClick={() => {
        setDark((d) => !d);
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("dark");
        }
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-400 text-2xl"
          >
            <FaMoon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-500 text-2xl"
          >
            <FaSun />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
} 