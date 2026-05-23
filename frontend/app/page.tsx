
import Link from "next/link";
import { getPageTestimonials } from "@/sanity/lib/fetch";
import { Testimonial } from "@/types/types";

export default async function Home() {
  const testimonials = await getPageTestimonials('home');
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
