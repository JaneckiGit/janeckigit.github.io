"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar({ onContactClick }: { onContactClick: () => void }) {
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 shadow-md backdrop-blur-lg dark:bg-gray-900/80"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="#home" className="text-xl font-bold">
            Janecki
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="relative text-sm font-medium transition-colors hover:text-blue-600">
                  {link.name}
                  {/* Add a motion underline here if you want */}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <button
              onClick={onContactClick}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl dark:bg-black/95 md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-medium">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-8">
                 <button
                    onClick={() => {
                      onContactClick();
                      setIsOpen(false);
                    }}
                    className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white"
                 >
                   Contact
                 </button>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 