import { getPageTestimonials } from "@/sanity/lib/fetch";
import HomeHeroSection from "./components/sections/HomeHeroSection/HomeHeroSection";

export default async function Home() {
  const testimonials = await getPageTestimonials("home");
  console.log(testimonials);
  return (
    <>
      <HomeHeroSection />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--color-cloud)",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "var(--color-aubergine)",
            fontFamily: "var(--font-josefin-sans)",
          }}
        >
          Testimonials coming soon...
        </h2>
      </div>
    </>
  );
}
