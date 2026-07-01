"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaEnvelope, FaRegCopy } from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLSpanElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    setTimeout(() => {
      window.location.href = `mailto:mateuszjanecki04@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 700);
  };

  const handleCopy = () => {
    if (emailRef.current) {
      navigator.clipboard.writeText(emailRef.current.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        if (status === "success") onClose();
        setStatus("idle");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="glass relative w-full max-w-md rounded-3xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-slate-400 transition-transform hover:scale-110 hover:text-slate-700"
              aria-label="Close"
            >
              <FaTimesCircle className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              {(status === "idle" || status === "error") && (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h2 className="mb-1 text-center text-2xl font-semibold text-slate-900">
                    Get in touch
                  </h2>
                  <p className="mb-5 text-center text-sm text-slate-500">
                    I&apos;ll get back to you as soon as I can.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm outline-none ring-accent/30 focus:ring-2"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm outline-none ring-accent/30 focus:ring-2"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <textarea
                      placeholder="Message"
                      required
                      className="min-h-[110px] rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm outline-none ring-accent/30 focus:ring-2"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                    {status === "error" && (
                      <span className="text-xs text-red-500">Please fill in all fields.</span>
                    )}
                    <button
                      type="submit"
                      className="rounded-full accent-gradient-bg py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
                    >
                      Send message
                    </button>
                  </form>
                  <div className="mt-6 flex flex-col items-center gap-1">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <FaEnvelope className="text-accent" />
                      <a href="mailto:mateuszjanecki04@gmail.com" className="hover:underline">
                        <span ref={emailRef}>mateuszjanecki04@gmail.com</span>
                      </a>
                      <button
                        onClick={handleCopy}
                        className="rounded p-1 transition-colors hover:bg-slate-900/5"
                        aria-label="Copy email"
                      >
                        <FaRegCopy className="inline" />
                      </button>
                      {copied && <span className="text-xs text-emerald-500">Copied!</span>}
                    </span>
                  </div>
                </motion.div>
              )}

              {status === "sending" && (
                <motion.div
                  key="sending"
                  className="flex flex-col items-center justify-center gap-4 py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-400 border-t-transparent" />
                  <p className="text-slate-600">Opening your mail app…</p>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center gap-4 py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaCheckCircle className="h-12 w-12 text-emerald-500" />
                  <p className="text-slate-600">Ready to send!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
