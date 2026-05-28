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

      // Set to true when WE write scrollLeft, so the scroll listener
      // can distinguish programmatic updates from manual user scrolls.
      let isProgrammaticScroll = false;

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top 30%",
        end: "bottom 50%",
        toggleActions: "play pause resume reverse",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          isProgrammaticScroll = true;
          container.scrollLeft = self.progress * getTotal();
          // Clear flag on the next frame, after the scroll event fires.
          requestAnimationFrame(() => {
            isProgrammaticScroll = false;
          });
        },
      });

      const onManualScroll = () => {
        if (isProgrammaticScroll) return;
        const total = getTotal();
        if (total <= 0) return;
        const progress = gsap.utils.clamp(0, 1, container.scrollLeft / total);
        const targetY = st.start + progress * (st.end - st.start);
        // Jump the page scroll to match the manual horizontal position
        // so the ScrollTrigger continues from there instead of snapping back.
        window.scrollTo({ top: targetY, behavior: "auto" });
      };

      container.addEventListener("scroll", onManualScroll, { passive: true });

      return () => {
        container.removeEventListener("scroll", onManualScroll);
      };
    }, containerRef);

    return () => ctx.revert();
  });

  useGSAP(
    () => {
      if (!titleWrapperRef.current || !titleRef.current || !paraRef.current)
        return;

      gsap.fromTo(
        [titleRef.current, paraRef.current],
        { y: 80, autoAlpha: 0 },
        {
          y: 60,
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
