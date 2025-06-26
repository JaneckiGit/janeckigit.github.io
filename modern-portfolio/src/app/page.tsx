"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import BackToTop from "./components/BackToTop";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground />
      <Navbar onContactClick={() => setContactModalOpen(true)} />
      <main className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4">
        <Hero onContactClick={() => setContactModalOpen(true)} />
        <Experience />
        <Education />
        <Certificates />
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
