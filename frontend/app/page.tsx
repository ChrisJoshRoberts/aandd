
import Link from "next/link";
import { getPageTestimonials } from "@/sanity/lib/fetch";
import { Testimonial } from "@/types/types";

export default async function Home() {
  const testimonials = await getPageTestimonials('home');
  return (
    <div>
      <h1>Home Page</h1>
      {testimonials.map((testimonial: Testimonial) => (
        <div key={testimonial._id}>
          <h2>{testimonial.name}</h2>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
      {/* add */}
      <Link href="/web-design">Web Design Page</Link>
    </div>
  );
}
