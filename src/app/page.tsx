import React from "react";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import SocialLinks from "./components/SocialLinks";
import AnimatedBackground from "./components/AnimatedBackground";
import BackToTop from "./components/BackToTop";

<main className="flex flex-col items-center justify-center pt-32 gap-24">
  <div className="relative w-full">
    <AnimatedBackground />
    <Hero />
  </div>
  <SocialLinks />
  <a id="about" />
  {/* About section is merged with Hero for now */}
  <a id="experience" />
  <Experience />
  <a id="education" />
  <Education />
  <a id="certificates" />
  <Certificates />
  <a id="contact" />
  <button
    className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg text-lg transition-colors animate-bounce"
    onClick={() => setContactOpen(true)}
  >
    Contact Me
  </button>
</main>
<BackToTop /> 