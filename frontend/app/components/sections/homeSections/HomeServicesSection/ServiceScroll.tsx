"use client";
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
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const container = containerRef.current!;

      const getTotal = () => track.scrollWidth - container.offsetWidth;

      ScrollTrigger.create({
        trigger: container,
        start: "top 30%",
        end: "bottom 50%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          container.scrollLeft = self.progress * getTotal();
        },
      });
    }, containerRef);

    return () => ctx.revert();
  });

  useGSAP(
    () => {
      if (!titleWrapperRef.current || !titleRef.current || !paraRef.current) return;

      gsap.fromTo(
        [titleRef.current, paraRef.current],
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleWrapperRef.current,
            start: "top 30%",
            end: "top 25%",
            scrub: true,
          },
        },
      );
    },
    { scope: titleWrapperRef },
  );

  return (
    <div ref={titleWrapperRef} className={styles.scrollSectionWrapper}>
      <h1 ref={titleRef} className={styles.serviceTitle}>
        How we help you grow
      </h1>
      <div ref={containerRef} className={styles.homeServiceSection}>
        <div ref={trackRef} className={styles.innerServiceWrapper}>
          {children}
        </div>
      </div>
      <p ref={paraRef} className={styles.serviceSubtitle}>
        We offer a comprehensive suite of services designed to elevate your
        brand and streamline your marketing efforts.
      </p>
    </div>
  );
}
