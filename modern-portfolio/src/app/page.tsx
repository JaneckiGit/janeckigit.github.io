"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import BackToTop from "./components/BackToTop";
import AnimatedBackground from "./components/AnimatedBackground";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import FunFacts from "./components/FunFacts";
import { motion } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const certificatesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const sectionRefs = useMemo(() => ({
    home: homeRef,
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    certificates: certificatesRef,
    contact: contactRef,
  }), []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.entries(sectionRefs).map(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return { key, top: Math.abs(rect.top) };
        }
        return { key, top: Infinity };
      });
      const visible = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setCurrentSection(visible.key);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar currentSection={currentSection} />
      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4">
        <motion.section ref={sectionRefs.home} id="home" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7 }} className="w-full">
          <Hero onContactClick={() => setContactModalOpen(true)} />
        </motion.section>
        <motion.section ref={sectionRefs.about} id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 }} className="w-full">
          <About />
        </motion.section>
        <motion.section ref={sectionRefs.experience} id="experience" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.2 }} className="w-full">
          <Experience />
        </motion.section>
        <motion.section ref={sectionRefs.education} id="education" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.3 }} className="w-full">
          <Education />
        </motion.section>
        <motion.section ref={sectionRefs.certificates} id="certificates" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.4 }} className="w-full">
          <Certificates />
        </motion.section>
        <motion.section id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.5 }} className="w-full">
          <Projects />
        </motion.section>
        <motion.section id="testimonials" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.6 }} className="w-full">
          <Testimonials />
        </motion.section>
        <motion.section id="funfacts" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.7 }} className="w-full">
          <FunFacts />
        </motion.section>
      </main>
      <motion.section ref={sectionRefs.contact} id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.5 }} className="w-full">
        <ContactSection />
      </motion.section>
      <Footer />
      <BackToTop />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
