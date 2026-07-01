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
      className="accent-gradient-bg fixed left-0 right-0 top-0 z-50 h-0.5 origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
} 