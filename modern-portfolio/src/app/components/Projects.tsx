import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern, animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/project1.png',
    details: 'This project showcases my skills, experience, and certificates. It features animated transitions, dark/light mode, and a responsive design.',
    link: 'https://github.com/janeckigit/portfolio',
  },
  {
    title: 'Crypto Dashboard',
    description: 'A real-time cryptocurrency dashboard with price charts, news, and portfolio tracking.',
    tech: ['React', 'Chart.js', 'CoinGecko API'],
    image: '/project2.png',
    details: 'Built a dashboard for tracking crypto prices, news, and personal portfolio. Used public APIs and charting libraries for data visualization.',
    link: '',
  },
  {
    title: 'Marketing Landing Page',
    description: 'A high-converting landing page for a digital marketing campaign.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/project3.png',
    details: 'Designed and developed a landing page optimized for conversions, with A/B testing and analytics integration.',
    link: '',
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null as null | typeof projects[0]);
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="group relative flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => setSelected(project)}
            tabIndex={0}
            role="button"
            aria-label={`Show details for ${project.title}`}
          >
            <Image src={project.image} alt={project.title} width={400} height={160} className="w-full h-40 object-cover rounded-lg mb-4 shadow" />
            <h3 className="text-lg font-semibold text-center mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2 text-center">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
                aria-label="Close"
              >
                ×
              </button>
              <Image src={selected.image} alt={selected.title} width={600} height={192} className="w-full h-48 object-cover rounded-lg mb-4 shadow" />
              <h3 className="text-2xl font-bold mb-2 text-center">{selected.title}</h3>
              <p className="text-center text-gray-500 mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {selected.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold">
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-gray-700 dark:text-gray-200 text-center whitespace-pre-line mb-4">{selected.details}</div>
              {selected.link && (
                <a href={selected.link} target="_blank" className="inline-block mt-2 px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform">View Project</a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 