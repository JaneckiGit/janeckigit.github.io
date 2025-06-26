import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.ellipse
          cx="720"
          cy="300"
          rx="600"
          ry="220"
          fill="url(#paint0_radial)"
          animate={{
            rx: [600, 650, 600],
            ry: [220, 250, 220],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(720 300) scale(600 220)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a5b4fc" stopOpacity="0.5" />
            <stop offset="1" stopColor="#f0abfc" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </motion.svg>
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-300/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
    </div>
  );
} 