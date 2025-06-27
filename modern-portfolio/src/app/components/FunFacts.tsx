import React from 'react';
import { motion, useInView } from 'framer-motion';

const facts = [
  { label: 'Years of Experience', value: 5 },
  { label: 'Projects Completed', value: 24 },
  { label: 'Cups of Coffee', value: 1234 },
  { label: 'Happy Clients', value: 12 },
];

function Counter({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1500;
    function animateCounter(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    }
    requestAnimationFrame(animateCounter);
  }, [inView, value]);
  return (
    <span ref={ref} className="text-4xl font-bold text-blue-600 dark:text-blue-400">
      {count}
    </span>
  );
}

export default function FunFacts() {
  return (
    <section id="funfacts" className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Fun Facts & Achievements</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-8"
          >
            <Counter value={fact.value} />
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-300 font-semibold">{fact.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 