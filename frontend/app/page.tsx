import { getTestimonials } from "@/sanity/lib/fetch";
import { Testimonial } from "@/types/types";

export default async function Home() {
  const testimonials = await getTestimonials();
  return (
    <div>
      {testimonials.map((testimonial: Testimonial) => (
        <div key={testimonial._id}>
          <h2>{testimonial.name}</h2>
          <p>{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
}
