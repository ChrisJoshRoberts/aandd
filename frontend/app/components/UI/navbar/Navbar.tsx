"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Button, Dropdown, Label } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import buttonStyles from "../../../design-system/buttonStyles.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const freeConsultLink = "/contact";
  const [isOpen, setIsOpen] = useState(false);
  const navBar = useRef<HTMLElement>(null);

  enum Services {
    WebDesignDevelopment = "Web Design & Development",
    BrandingVisualIdentity = "Branding & Visual Identity",
    HubSpotConsultingAutomation = "HubSpot consulting and automation",
    ContentMarketing = "Content marketing",
    SalesEnablementMaterials = "Sales enablement materials",
    SocialMediaManagement = "Social media management",
  }

  useGSAP(
    () => {
      gsap.fromTo(
        navBar.current,
        { y: -300, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out", delay: 0.2 },
      );
    },
    { scope: navBar },
  );

  return (
    <nav ref={navBar} className={styles.navbar}>
      <Link href="/">
        <Image
          loading="eager"
          src="/assets/Logo_Aubergine.png"
          alt="Logo"
          width={80}
          height={80}
        />
      </Link>
      <div className={styles.navLinks}>
        <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
          <Button
            className={`${styles.dropdownButton} ${isOpen ? styles.activeDropdownButton : ""}`}
          >
            Services{" "}
            <ChevronDown
              className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
            />
          </Button>
          <Dropdown.Popover style={{ marginTop: 24 }}>
            <Dropdown.Menu className={styles.dropdownMenu}>
              {Object.values(Services).map((service) => (
                <Dropdown.Item key={service} className={styles.dropdownItem}>
                  <Label className={styles.dropdownLabel}>{service}</Label>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
        <Link href="/case-studies" className={styles.navLink}>
          Case Studies
        </Link>
        <Link href="/resources" className={styles.navLink}>
          Resources
        </Link>
        <Link href="/about" className={styles.navLink}>
          About Us
        </Link>
        <Link href={freeConsultLink} className={buttonStyles.button}>
          Free Consultation
        </Link>
      </div>
    </nav>
  );
}
