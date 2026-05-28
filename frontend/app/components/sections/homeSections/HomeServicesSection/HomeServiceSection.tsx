
import HomeServicesList from './HomeServicesList';
import styles from "./HomeServiceSection.module.css";
import { getAllServices } from "@/sanity/lib/fetch";

export default async function HomeServiceSection() {
  const services = await getAllServices();
  return (
    <div className={styles.homeServiceSection}>
      <HomeServicesList services={[...services].reverse()} />
    </div>
  );
}
