import ServiceCard from "@/app/components/UI/ServiceCard/ServiceCard";
import styles from "./HomeServiceSection.module.css";
import { getAllServices } from "@/sanity/lib/fetch";

export default async function HomeServiceSection() {
  const services = await getAllServices();
  return (
    <div className={styles.homeServiceSection}>
      <div className={styles.innerServiceWrapper}>
        {services
          .map((service) => <ServiceCard key={service._id} service={service} />)
          .reverse()}
      </div>
    </div>
  );
}
