"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./CursorFollower.module.css";
import Image from "next/image";

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
        // background: "var(--color-minneola)",
        zIndex: 9999,
      }}
      className={styles.cursorFollower}
    >
      <Image src="/assets/aandd-icon.png" alt="Cursor Follower" width={100} height={100} />
    </motion.div>
  );
}
