import { client } from "@/sanity/lib/client";
import { Testimonial } from "@/types/types";

export async function getPageTestimonials(slug: string): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && references(*[_type == "page" && slug.current == $slug]._id)]`,
    { slug },
  );
}
