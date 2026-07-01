"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import BackToTop from "./components/BackToTop";
import LiquidBackground from "./components/LiquidBackground";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    certificates: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.entries(sectionRefs).map(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return { key, top: Math.abs(rect.top - 120) };
        }
        return { key, top: Infinity };
      });
      const visible = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setCurrentSection(visible.key);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollProgress />
      <LiquidBackground />
      <Navbar currentSection={currentSection} />

      <main className="relative z-10">
        <div className="mx-auto max-w-5xl px-4">
          <section ref={sectionRefs.home}>
            <Hero onContactClick={() => setContactModalOpen(true)} />
          </section>
        </div>

        <section ref={sectionRefs.about}>
          <About />
        </section>
        <section ref={sectionRefs.experience}>
          <Experience />
        </section>
        <section ref={sectionRefs.projects}>
          <Projects />
        </section>
        <Education />
        <section ref={sectionRefs.certificates}>
          <Certificates />
        </section>
        <section ref={sectionRefs.contact}>
          <ContactSection />
        </section>
      </main>

      <Footer />
      <BackToTop />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
