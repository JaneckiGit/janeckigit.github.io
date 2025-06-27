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
    setStatus("sending");
    // Mock API call
    setTimeout(() => {
      if (form.name && form.email && form.message) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 transition-transform hover:scale-110"
              aria-label="Close"
            >
              <FaTimesCircle className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="mb-4 text-center text-2xl font-bold">Contact Me</h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="rounded-lg border bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="rounded-lg border bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <textarea
                      placeholder="Message"
                      required
                      className="min-h-[120px] rounded-lg border bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-600 p-3 font-semibold text-white transition-transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                  {/* Email Contact Info */}
                  <div className="mt-8 flex flex-col items-center gap-2">
                    <span className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      <FaEnvelope />
                      <a
                        href="mailto:mateuszjanecki04@gmail.com"
                        className="underline hover:text-blue-800 dark:hover:text-blue-300"
                      >
                        <span ref={emailRef}>mateuszjanecki04@gmail.com</span>
                      </a>
                      <button
                        onClick={handleCopy}
                        className="ml-2 p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                        aria-label="Copy email"
                      >
                        <FaRegCopy className="inline" />
                      </button>
                      {copied && <span className="ml-2 text-green-500 text-xs">Copied!</span>}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Or email me directly</span>
                  </div>
                </motion.div>
              )}

              {status === "sending" && (
                <motion.div
                  key="sending"
                  className="flex flex-col items-center justify-center gap-4 py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
                  <p>Sending...</p>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center gap-4 py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaCheckCircle className="h-12 w-12 text-green-500" />
                  <p>Message sent successfully!</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  key="error"
                  className="flex flex-col items-center justify-center gap-4 py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <FaTimesCircle className="h-12 w-12 text-red-500" />
                  <p>Please fill all fields.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 