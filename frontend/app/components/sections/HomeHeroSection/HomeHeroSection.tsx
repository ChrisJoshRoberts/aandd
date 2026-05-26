import styles from "./homeHeroSection.module.css";
export default function HomeHeroSection() {
  return (
    <div className={styles.homeHeroSection}>
      <h1 className={styles.homeHeroTitle}>
        Show up stronger.
        <br />
        Grow smarter.
      </h1>
      <p className={styles.homeHeroDescription}>
        We help brands achieve clarity, confidence, and creativity through
        expert digital marketing and design solutions that deliver real results.
      </p>
    </div>
  );
}
