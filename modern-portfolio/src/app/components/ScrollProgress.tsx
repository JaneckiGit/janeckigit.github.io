"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-[0%] bg-gradient-to-r from-blue-500 to-purple-500 z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
} 