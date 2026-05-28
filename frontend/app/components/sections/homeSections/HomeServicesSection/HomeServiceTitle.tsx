"use client";
import { useGSAP } from "@gsap/react";
import styles from "./HomeServiceSection.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeServiceTitle() {
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!titleWrapperRef.current || !titleRef.current) return;

      gsap.fromTo(
        titleRef.current,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: titleWrapperRef.current,
            start: "top 60%",
            end: "top 55%",
            scrub: true,
          },
        },
      );
    },
    { scope: titleWrapperRef },
  );

  return (
    <div ref={titleWrapperRef} className={styles.serviceTitleWrapper}>
      <h2 ref={titleRef} className={styles.serviceTitle}>
        How we help you grow
      </h2>
      <p className={styles.serviceSubtitle}>
        We offer a comprehensive suite of services designed to elevate your
        brand and streamline your marketing efforts.
      </p>
    </div>
  );
}
