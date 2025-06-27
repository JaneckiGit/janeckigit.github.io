import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // EmailJS example (replace with your EmailJS service and template IDs)
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_xxx', // <-- replace with your EmailJS service ID
          template_id: 'template_xxx', // <-- replace with your EmailJS template ID
          user_id: 'user_xxx', // <-- replace with your EmailJS user ID (public key)
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: 'mateuszjanecki04@gmail.com',
          },
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 p-8 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
          Interested in working together, have a question, or just want to connect? Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-lg border bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="rounded-lg border bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="min-h-[120px] rounded-lg border bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-lg bg-blue-600 p-3 font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <div className="text-green-600 font-semibold">Message sent successfully!</div>}
          {status === 'error' && <div className="text-red-600 font-semibold">Failed to send. Please try again.</div>}
        </form>
        <div className="flex flex-col gap-4 w-full items-center">
          <a href="mailto:mateuszjanecki04@gmail.com" className="flex items-center gap-3 text-lg font-semibold text-blue-600 hover:underline">
            <FaEnvelope className="text-2xl" /> mateuszjanecki04@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/mateusz-j-621b1a196" target="_blank" className="flex items-center gap-3 text-lg font-semibold text-blue-500 hover:underline">
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>
          <a href="https://github.com/janeckigit" target="_blank" className="flex items-center gap-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline">
            <FaGithub className="text-2xl" /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
} 