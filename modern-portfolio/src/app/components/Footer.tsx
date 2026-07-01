"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mx-auto mt-10 w-full max-w-5xl px-4 pb-10"
    >
      <div className="glass glass-sheen flex flex-col items-center gap-5 rounded-3xl px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-base font-semibold text-slate-900">Mateusz Janecki</p>
          <p className="text-sm text-slate-500">
            Scrum Master with a technical background · Cracow, Poland
          </p>
        </div>
        <SocialLinks size="xl" />
      </div>
      <p className="mt-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mateusz Janecki. All rights reserved.
      </p>
    </motion.footer>
  );
}
