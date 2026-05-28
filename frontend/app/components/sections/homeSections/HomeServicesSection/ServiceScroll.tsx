'use client';
import gsap from "gsap";
import styles from "./HomeServiceSection.module.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ServiceScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return;
    
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const container = containerRef.current!;
      const totalScroll = track.scrollWidth - container.offsetWidth;

      gsap.to(track, {
        x: () => `-${totalScroll}px`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 30%",
          end: "bottom 30%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <div ref={containerRef} className={styles.homeServiceSection}>
      <div ref={trackRef} className={styles.innerServiceWrapper}>
        {children}
      </div>
    </div>
  );
}
