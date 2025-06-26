import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-950">
      <motion.div
        className="absolute top-[-10%] right-[0%] h-[500px] w-[500px] rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-900/40"
        animate={{
          x: [0, 100, 0, -50, 0],
          y: [0, -50, 50, 0, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[600px] rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-900/30"
        animate={{
          x: [0, -80, 0, 80, 0],
          y: [0, 40, -40, 0, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
} 