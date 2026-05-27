import styles from "./ServiceCard.module.css";

export default function ServiceCard() {
  return (
    <div className={styles.serviceCard}>
      <h3 className={styles.serviceTitle}>Service Title</h3>
      <p className={styles.serviceDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}