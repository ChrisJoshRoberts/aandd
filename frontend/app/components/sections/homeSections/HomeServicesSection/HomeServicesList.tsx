"use client";

import { useRef } from "react";
import ServiceCard from "@/app/components/UI/ServiceCard/ServiceCard";
import styles from "./HomeServiceSection.module.css";
import type { Service } from "@/types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function ServiceCardsList({
  services,
}: {
  services: Service[];
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      gsap.to(container.current.children, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className={styles.innerServiceWrapper}>
      {services.map((service) => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
}
