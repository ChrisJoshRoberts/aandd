"use client";
import Image from "next/image";
import styles from "./homeHeroSection.module.css";
import { Button } from "@heroui/react";
import buttonStyles from "../../../../design-system/buttonStyles.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeHeroSection() {
  const roundedHeroBottomRef = useRef<HTMLImageElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  const headlineText = "Show up stronger. Grow smarter.";

  useGSAP(
    () => {
      const letters = gsap.utils.toArray<HTMLElement>(".letter");
      gsap.to(letters, {
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.03,
        delay: 0.2,
      });
      gsap.to(heroTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.to(roundedHeroBottomRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom 60%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className={styles.homeHeroSection}>
      <h1 ref={headlineRef} className={styles.homeHeroTitle}>
        {headlineText.split(" ").map((word, wordIndex) => {
          const isHighlighted = word === "stronger.";

          return (
            <span key={wordIndex}>
              <span
                className={isHighlighted ? styles.highlight : undefined}
                style={{ display: "inline-block" }}
              >
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={`${wordIndex}-${letterIndex}`}
                    style={{
                      display: "inline-block",
                      overflow: "clip",
                      overflowClipMargin: "3px",
                      verticalAlign: "bottom",
                      paddingBottom: "0.1em",
                    }}
                  >
                    <span
                      className="letter"
                      style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        transform: "translateY(200px)",
                      }}
                    >
                      {letter}
                    </span>
                  </span>
                ))}

                {/* add space after each word */}
                <span
                  style={{
                    display: "inline-block",
                    overflow: "clip",
                    overflowClipMargin: "3px",
                    verticalAlign: "bottom",
                    paddingBottom: "0.1em",
                  }}
                >
                  <span
                    className="letter"
                    style={{
                      display: "inline-block",
                      transform: "translateY(200px)",
                    }}
                  >
                    {"\u00A0"}
                  </span>
                </span>
              </span>
              {isHighlighted && <br />}
            </span>
          );
        })}
      </h1>
      <div
        ref={heroTextRef}
        className={styles.homeHeroText}
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        <p className={styles.homeHeroDescription}>
          We help brands achieve clarity, confidence, and creativity through
          expert digital marketing and design solutions that deliver real
          results.
        </p>
        <Button className={`${buttonStyles.button} ${buttonStyles.homeHeroButton}`}>
          Find out more
        </Button>
      </div>
      <Image
        ref={roundedHeroBottomRef}
        src="/assets/rounded-hero-bottom.svg"
        alt="Rounded hero bottom"
        width={1920}
        height={200}
        className={styles.roundedHeroBottom}
      />
    </div>
  );
}
