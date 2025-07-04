import React from 'react';
import Particles from '@tsparticles/react';

export default function AnimatedBackground() {
  return (
    <Particles
      id="tsparticles-bg"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 60, density: { enable: true, width: 800, height: 800 } },
          color: { value: ["#a5b4fc", "#f472b6", "#facc15", "#38bdf8"] },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: { enable: true, speed: 0.6, direction: "none", random: true, straight: false, outModes: { default: "out" } },
          links: { enable: true, distance: 120, color: "#a5b4fc", opacity: 0.2, width: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
} 