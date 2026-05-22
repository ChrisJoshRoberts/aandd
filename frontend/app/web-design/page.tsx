import { getPageTestimonials } from "@/sanity/lib/fetch";
import { Testimonial } from "@/types/types";
import Link from "next/link";

export default async function webDesignPage() {
  const testimonials = await getPageTestimonials('web-design');
  return (
    <div>
      <h1>Web Design Page</h1>
      {testimonials.map((testimonial: Testimonial) => (
        <div key={testimonial._id}>
          <h2>{testimonial.name}</h2>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
      <Link href="/">Home Page</Link>
    </div>
  );
}