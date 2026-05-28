"use client";

import { useRef } from "react";
import ServiceCard from "@/app/components/UI/ServiceCard/ServiceCard";
import type { Service } from "@/types/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function HomeServicesList({
  services,
}: {
  services: Service[];
}) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      // Stagger only works on multiple targets; animate each card wrapper.
      gsap.to(container.current.children, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      {services.map((service, index) => (
        <ServiceCard
          key={service._id}
          service={service}
          stackIndex={services.length - index}
        />
      ))}
    </div>
  );
}
