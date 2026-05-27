import { Service } from "@/types/types";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className={styles.serviceCardWrapper}>
      <div className={styles.serviceCard}>
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceDescription}>{service.description}</p>
      </div>
      <div className={styles.serviceButton}></div>
    </div>
  );
}
