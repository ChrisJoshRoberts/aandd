"use client";
import { Service } from "@/types/types";
import styles from "./ServiceCard.module.css";
import { useState } from "react";

export default function ServiceCard({
  service,
  stackIndex,
}: {
  service: Service;
  stackIndex?: number;
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  function revealText() {
    setIsCardHovered(!isCardHovered);
  }

  return (
    <div
      onMouseEnter={revealText}
      onMouseLeave={revealText}
      className={styles.serviceCardWrapper}
      style={
        stackIndex !== undefined
          ? ({ "--stack-index": stackIndex } as React.CSSProperties)
          : undefined
      }
    >
      <div className={styles.serviceCard}>
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
        <div className={styles.serviceButtonIcon} style={{ backgroundColor: isCardHovered ? "var(--color-minneola)" : "var(--color-aubergine)" }}></div>
      </div>
    </div>
  );
}
