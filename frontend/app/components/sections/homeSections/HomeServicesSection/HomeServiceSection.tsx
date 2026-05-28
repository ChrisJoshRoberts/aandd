import HomeServicesList from "./HomeServicesList";
import { getAllServices } from "@/sanity/lib/fetch";
import ServiceScroll from "./ServiceScroll";

export default async function HomeServiceSection() {
  const services = await getAllServices();
  return (
    <ServiceScroll>
      <HomeServicesList services={[...services].reverse()} />
    </ServiceScroll>
  );
}
