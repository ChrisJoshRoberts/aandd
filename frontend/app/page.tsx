import { getPageTestimonials } from "@/sanity/lib/fetch";
import HomeHeroSection from "./components/sections/homeSections/HomeHeroSection/HomeHeroSection";
import HomeServiceSection from "./components/sections/homeSections/HomeServicesSection/HomeServiceSection";
import HomeServiceTitle from "./components/sections/homeSections/HomeServicesSection/HomeServiceTitle";

export default async function Home() {
  const testimonials = await getPageTestimonials("home");
  console.log(testimonials);
  return (
    <>
      <HomeHeroSection />
      <HomeServiceSection />
      <HomeServiceTitle /> 
    </>
  );
}
