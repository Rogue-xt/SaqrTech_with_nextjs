"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export default function CursorGlowWrapper({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    // We calculate position relative to the element to keep it accurate
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      {/* The Glow Layer */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(800px at ${x}px ${y}px, rgba(220,38,38,0.15), transparent 60%)`,
          ),
        }}
      />

      {/* The Content */}
      <div className="relative z-20">{children}</div>
    </section>
  );
}
