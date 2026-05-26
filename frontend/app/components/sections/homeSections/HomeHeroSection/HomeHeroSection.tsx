import Image from "next/image";
import styles from "./homeHeroSection.module.css";
import { Button } from "@heroui/react";
import buttonStyles from "../../../../design-system/buttonStyles.module.css";

export default function HomeHeroSection() {
  return (
    <div className={styles.homeHeroSection}>
      <h1 className={styles.homeHeroTitle}>
        Show up <span className={styles.highlight}>stronger</span>.
        <br />
        Grow {' '}
        {/* <span className={styles.iconWrapper}>
          <Image
            src="/assets/light-bulb.png"
            alt="Hero Icon"
            width={80}
            height={80}
          />
        </span>{' '} */}
        smarter.
      </h1>
      <p className={styles.homeHeroDescription}>
        We help brands achieve clarity, confidence, and creativity through
        expert digital marketing and design solutions that deliver real results.
      </p>
      <Button className={`${buttonStyles.button} ${styles.homeHeroButton}`}>Find out more</Button>
      <Image
        src="/assets/rounded-hero-bottom.svg"
        alt="Rounded hero bottom"
        width={1920}
        height={200}
        className={styles.roundedHeroBottom}
      />
    </div>
  );
}
