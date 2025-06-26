import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import SocialLinks from "./SocialLinks";

export default function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="home" className="flex min-h-screen w-full items-center justify-center">
      <div className="text-center">
        <motion.div
          className="mx-auto h-32 w-32 rounded-full shadow-lg ring-4 ring-white/10 transition-all hover:shadow-2xl hover:ring-white/20 md:h-40 md:w-40"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/profilowe.JPG"
            alt="Mateusz Janecki profile picture"
            width={160}
            height={160}
            priority
            className="rounded-full object-cover"
          />
        </motion.div>
        <motion.h1
          className="mt-6 text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Mateusz Janecki
        </motion.h1>
        <motion.h2
          className="mt-2 text-lg text-gray-600 dark:text-gray-400 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          IT Student & Aspiring Software Developer
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Passionate about software development, DevOps, and new technologies. Currently exploring modern web frameworks and cloud infrastructure.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={onContactClick}
            className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            Contact Me
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-full border border-gray-300 px-6 py-3 font-semibold transition-transform hover:scale-105 dark:border-gray-700"
          >
            Download CV
          </a>
        </motion.div>
        <div className="mt-8">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
} 