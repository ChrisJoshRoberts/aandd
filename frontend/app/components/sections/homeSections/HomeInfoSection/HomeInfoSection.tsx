import { Button } from "@heroui/react";
import styles from "./HomeInfo.module.css";
import buttonStyles from "../../../../design-system/buttonStyles.module.css";
export default function HomeInfoSection() {
  return (
    <div className={styles.homeInfoSection}>
      <div className={styles.infoTitlesWrapper}>
        <h3 className={styles.infoTitle}>
          Your brand needs to stand out, connect, and convert.
        </h3>
        <p className={styles.infoText}>
          We know the challenges you face in generating brand awareness,
          capturing quality leads, and nurturing them through complex sales
          cycles.
          <br />
          <br />
          That&apos;s where A&D comes in. We&apos;re more than just an agency.
        </p>
        <Button className={`${buttonStyles.button} ${buttonStyles.homeHeroButton}`}>
          Free Consultation
        </Button>
      </div>
    </div>
  );
}
