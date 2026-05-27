"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  // raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smooth trailing effect
  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
        background: "var(--color-minneola)",
      }}
      className="pointer-events-none fixed top-0 left-0 z-50 h-6 w-6 rounded-full"
    />
  );
}
