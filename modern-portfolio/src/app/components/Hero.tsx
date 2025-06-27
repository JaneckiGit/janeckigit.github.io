import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import { TypeAnimation } from 'react-type-animation';
import { useInView, Variants } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ onContactClick }: { onContactClick: () => void }) {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    setShowBg(true);
  }, []);

  // Animation for staggered children
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // Floating Download Resume Button
  useEffect(() => {
    const btn = document.getElementById('download-resume-btn');
    if (btn) {
      btn.style.setProperty('background', 'linear-gradient(90deg, var(--accent, #3b82f6), #a21caf)');
    }
  }, []);

  return (
    <section id="home" className="flex min-h-screen w-full items-center justify-center relative">
      {showBg && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-[60vh] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/60 via-white/0 to-transparent dark:from-blue-900/40 dark:via-transparent dark:to-transparent blur-3xl" />
        </div>
      )}
      <motion.div
        className="text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.div
          className="mx-auto h-60 w-60 md:h-80 md:w-80 rounded-full shadow-xl ring-4 ring-gradient transition-all hover:shadow-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-2"
          variants={item}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="rounded-full bg-white dark:bg-gray-950 p-2">
            <Image
              src="/profilowe.JPG"
              alt="Mateusz Janecki profile picture"
              width={320}
              height={320}
              priority
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
        <motion.h1
          className="mt-6 text-4xl font-bold md:text-5xl"
          variants={item}
          viewport={{ once: false, amount: 0.5 }}
        >
          Mateusz Janecki
        </motion.h1>
        <motion.div
          className="mt-2 text-lg text-gray-600 dark:text-gray-400 md:text-xl flex justify-center items-center gap-2 min-h-[32px]"
          variants={item}
          viewport={{ once: false, amount: 0.5 }}
        >
          <TypeAnimation
            sequence={['IT Student', 2000, 'Aspiring Software Developer', 2000, 'Cloud & DevOps Enthusiast', 2000, 'Open Source Contributor', 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          />
        </motion.div>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-gray-500"
          variants={item}
          viewport={{ once: false, amount: 0.5 }}
        >
          Passionate about software development, DevOps, and new technologies. Currently exploring modern web frameworks and cloud infrastructure.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          variants={item}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.button
            onClick={onContactClick}
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-600"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact Me
          </motion.button>
          <Link href="#contact">
            <button className="mt-8 px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg animate-bounce bg-gradient-to-r from-[var(--accent,#3b82f6)] to-pink-500 hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-[var(--accent,#3b82f6)]" style={{ boxShadow: '0 0 16px var(--accent, #3b82f6)' }}>
              Hire Me
            </button>
          </Link>
        </motion.div>
        <motion.div className="mt-12 flex justify-center" variants={item} viewport={{ once: false, amount: 0.5 }}>
          <SocialLinks size="4xl" center />
        </motion.div>
        {/* Floating Download Resume Button */}
        <a
          id="download-resume-btn"
          href="/Mateusz_Janecki_CV.pdf"
          download
          className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full text-white font-bold shadow-lg animate-pulse bg-gradient-to-r from-[var(--accent,#3b82f6)] to-pink-500 hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-[var(--accent,#3b82f6)]"
          style={{ boxShadow: '0 0 24px var(--accent, #3b82f6)' }}
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
} 