"use client";
import { Service } from "@/types/types";
import styles from "./ServiceCard.module.css";
import { CircleArrowOutUpRight } from "lucide-react";
import { useState } from "react";

export default function ServiceCard({ service }: { service: Service }) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  function revealText() {
    setIsCardHovered(!isCardHovered);
  }

  return (
    <div className={styles.serviceCardWrapper}>
      <div
        className={styles.serviceCard}
        onMouseEnter={revealText}
        onMouseLeave={revealText}
      >
        <p
          className={`${styles.viewMoreText} ${isCardHovered ? styles.viewMoreTextVisible : ""}`}
        >
          View More
        </p>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
      <div
        className={` ${styles.serviceButton} ${isCardHovered ? styles.serviceButtonActive : ""}`}
      >
        <CircleArrowOutUpRight
          size={44}
          color="var(--color-aubergine)"
          strokeWidth={2}
        />
      </div>
    </div>
  );
}
