"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onContactClick, currentSection }: { onContactClick: () => void, currentSection?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-2 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/90 backdrop-blur-xl border-b-2 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg"
            : "bg-white/60 dark:bg-gray-950/80 backdrop-blur-md border-b-2 border-transparent shadow"
        }`}
        style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 min-h-[48px]">
          <Link href="#home" className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move">
            Janecki
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative text-base font-semibold transition-colors px-2 py-1 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move hover:brightness-125 hover:scale-105 ${currentSection === link.href.replace('#', '') ? 'underline-animate' : ''}`}
                >
                  {link.name}
                  {currentSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                      initial={{ opacity: 0, scaleX: 0.5 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-600"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-white/95 dark:bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10 w-full">
              <ul className="flex flex-col items-center gap-8 w-full">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full">
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-2xl font-medium text-center py-3 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/40 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-8 w-full">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-lg font-semibold text-white shadow-md transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-600"
                >
                  Contact
                </a>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 