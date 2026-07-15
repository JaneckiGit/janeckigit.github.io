"use client";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "mateuszjanecki04@gmail.com",
    href: "mailto:mateuszjanecki04@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+48 537 789 787",
    href: "tel:+48537789787",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "in/mateusz-j",
    href: "https://www.linkedin.com/in/mateusz-j-621b1a196/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "JaneckiGit",
    href: "https://github.com/JaneckiGit",
  },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrenekgq";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 py-20">
      <SectionHeading eyebrow="Contact" title="Let's build something together" />

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        {/* Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <p className="mb-2 text-slate-600">
            Interested in collaborating, hiring, or just want to connect? I&apos;m
            always happy to talk.
          </p>
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass glass-sheen group flex items-center gap-4 rounded-2xl p-4 transition-transform hover:scale-[1.02]"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl accent-gradient-bg text-white shadow-md">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  {c.label}
                </span>
                <span className="block truncate text-sm font-semibold text-slate-800">
                  {c.value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass glass-sheen flex flex-col gap-4 rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
              className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none ring-accent/30 transition focus:ring-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={handleChange}
              className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none ring-accent/30 transition focus:ring-2"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            required
            value={form.message}
            onChange={handleChange}
            className="min-h-[140px] rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none ring-accent/30 transition focus:ring-2"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex items-center justify-center gap-2 rounded-full accent-gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </button>
          {status === "success" && (
            <p className="text-center text-sm font-medium text-emerald-600">
              Thanks! Your message has been sent — I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-red-500">
              Something went wrong. Please try again or email me directly at
              mateuszjanecki04@gmail.com.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
