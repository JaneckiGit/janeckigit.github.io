"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaFilePdf, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center pt-28 pb-16"
    >
      <motion.div
        className="grid w-full items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left — copy */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass-soft px-4 py-1.5 text-sm font-medium text-slate-600"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.5)]" />
            Open to new opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Mateusz
            <br />
            <span className="accent-gradient-text">Janecki</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex min-h-[32px] justify-center text-lg font-medium text-slate-500 md:justify-start md:text-xl"
          >
            <TypeAnimation
              sequence={[
                "Scrum Master",
                2000,
                "with a technical background",
                2000,
                "QA & Test Automation",
                2000,
                "DevOps & Cloud",
                2000,
                "Project Coordinator",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-semibold text-slate-700"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:mx-0"
          >
            Computer Science student at Cracow University of Technology,
            blending hands-on software development, automated testing, and
            DevOps with project management and clear team communication.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 md:justify-start"
          >
            <FaMapMarkerAlt className="text-accent" /> Cracow, Poland
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <button
              onClick={onContactClick}
              className="group inline-flex items-center gap-2 rounded-full accent-gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.03]"
            >
              Get in touch
              <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="/Mateusz_Janecki_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-slate-700 transition-transform hover:scale-[1.03]"
            >
              <FaFilePdf className="text-accent" /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex justify-center md:justify-start">
            <SocialLinks size="2xl" />
          </motion.div>
        </div>

        {/* Right — portrait in a liquid-glass frame */}
        <motion.div
          variants={item}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            {/* rotating soft ring */}
            <div className="absolute -inset-6 -z-10 animate-ring rounded-[2.5rem] bg-[conic-gradient(from_0deg,#c7d2fe,#bae6fd,#fbcfe8,#ddd6fe,#c7d2fe)] opacity-60 blur-2xl" />
            <div className="glass glass-sheen rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/profile.jpg"
                  alt="Mateusz Janecki"
                  width={520}
                  height={640}
                  priority
                  className="h-[360px] w-[300px] object-cover object-top sm:h-[440px] sm:w-[360px]"
                />
              </div>
            </div>
            {/* floating glass chip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 -left-5 rounded-2xl glass px-4 py-3 text-left"
            >
              <div className="text-xs font-medium text-slate-500">Certified</div>
              <div className="text-sm font-semibold text-slate-900">
                Scrum Master (PSM I)
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
