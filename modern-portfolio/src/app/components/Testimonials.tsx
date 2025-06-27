import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Mateusz is a highly skilled developer with a keen eye for design. He delivered our project on time and exceeded expectations!",
    name: "Anna Kowalska",
    title: "Product Manager, TechCorp",
    avatar: "/avatar1.png",
  },
  {
    quote: "Working with Mateusz was a pleasure. His attention to detail and creativity made our website stand out.",
    name: "John Smith",
    title: "CEO, Marketify",
    avatar: "/avatar2.png",
  },
  {
    quote: "Professional, reliable, and innovative. I highly recommend Mateusz for any web project.",
    name: "Sara Nowak",
    title: "Freelance Designer",
    avatar: "/avatar3.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="testimonials" className="w-full max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Testimonials</h2>
      <div className="relative h-64 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full flex flex-col items-center bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-8"
          >
            <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-16 h-16 rounded-full mb-4 border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow" />
            <blockquote className="text-lg italic text-center mb-4 text-gray-700 dark:text-gray-200">“{testimonials[index].quote}”</blockquote>
            <div className="text-center">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{testimonials[index].name}</span>
              <span className="block text-xs text-gray-500">{testimonials[index].title}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 