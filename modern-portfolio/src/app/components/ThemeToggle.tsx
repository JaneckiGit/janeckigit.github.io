"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { BsThreeDotsVertical } from 'react-icons/bs';

const ACCENT_COLORS = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#a21caf' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Yellow', value: '#eab308' },
];

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [accent, setAccent] = React.useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accent-color') || '#3b82f6';
    }
    return '#3b82f6';
  });
  const [showPicker, setShowPicker] = React.useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    // Check localStorage first, then system preference
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    localStorage.setItem('accent-color', accent);
  }, [accent]);

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowPicker(false);
      }
    }
    if (showPicker) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPicker]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!isMounted) {
    return <div className="h-8 w-8" />; // Placeholder for SSR
  }

  return (
    <div className="relative flex items-center gap-2">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <FaMoon className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <FaSun className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <button
        onClick={() => setShowPicker((v) => !v)}
        className="p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform ml-1"
        aria-label="Show accent color picker"
      >
        <BsThreeDotsVertical className="w-5 h-5 text-gray-500 dark:text-gray-300" />
      </button>
      <AnimatePresence>
        {showPicker && (
          <motion.div
            ref={pickerRef}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-12 z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4 flex gap-3"
          >
            {ACCENT_COLORS.map((c) => (
              <button
                key={c.value}
                className={`w-7 h-7 rounded-full border-2 ${accent === c.value ? 'border-black dark:border-white scale-110' : 'border-transparent'} transition-transform`}
                style={{ background: c.value }}
                aria-label={`Set accent color to ${c.name}`}
                onClick={() => {
                  setAccent(c.value);
                  setShowPicker(false);
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 