import ServiceCard from "@/app/components/UI/ServiceCard/ServiceCard";
import styles from "./HomeServiceSection.module.css";

export default function HomeServiceSection() {
  return (
    <div className={styles.homeServiceSection}>
      <ServiceCard />
    </div>
  )
}