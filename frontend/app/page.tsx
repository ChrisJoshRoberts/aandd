import { getPageTestimonials } from "@/sanity/lib/fetch";
import HomeHeroSection from "./components/sections/HomeHeroSection/HomeHeroSection";
import Navbar from "./components/UI/navbar/Navbar";

export default async function Home() {
  const testimonials = await getPageTestimonials('home');
  console.log(testimonials);
  return (
    <>
    <Navbar />
    <HomeHeroSection />
    </>
  );
}
