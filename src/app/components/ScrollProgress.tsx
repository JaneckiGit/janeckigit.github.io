"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScroll((scrolled / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 w-full z-[100] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
      style={{ width: `${scroll}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scroll}%` }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
    />
  );
} 