"use client";
import React from "react";

/**
 * Soft, slowly drifting gradient blooms behind a frosted layer.
 * Replaces the old particle field for a calmer, more premium feel.
 */
export default function LiquidBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f4f6fc_0%,#eef1f8_45%,#f6f4fb_100%)] dark:bg-[linear-gradient(180deg,#0b1120_0%,#0e1526_45%,#0b1018_100%)]" />

      {/* Drifting colour blooms */}
      <div className="blob animate-drift-1 left-[-8%] top-[-6%] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] bg-[radial-gradient(circle_at_center,#c7d2fe,transparent_70%)]" />
      <div className="blob animate-drift-2 right-[-10%] top-[8%] h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] bg-[radial-gradient(circle_at_center,#bae6fd,transparent_70%)]" />
      <div className="blob animate-drift-3 left-[20%] bottom-[-12%] h-[46vw] w-[46vw] max-h-[560px] max-w-[560px] bg-[radial-gradient(circle_at_center,#fbcfe8,transparent_72%)] opacity-40" />
      <div className="blob animate-drift-2 right-[15%] bottom-[2%] h-[34vw] w-[34vw] max-h-[420px] max-w-[420px] bg-[radial-gradient(circle_at_center,#ddd6fe,transparent_70%)] opacity-45" />

      {/* Fine grid + grain for depth, very subtle */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
