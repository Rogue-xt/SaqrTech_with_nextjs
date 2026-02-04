"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function GlobalCursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring makes the glow follow the mouse with a slight "lag" for a premium feel
  const springX = useSpring(mouseX, { stiffness: 600, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]" // Highest z-index to stay above backgrounds
      style={{
        background: useTransform(
          [springX, springY],
          ([x, y]) =>
            // `radial-gradient(800px at ${x}px ${y}px, rgba(220,38,38,0.08), transparent 20%)`,
            `radial-gradient(400px at ${x}px ${y}px, rgba(0,120,255,0.15), transparent 50%)`,
        ),
      }}
    />
  );
}
