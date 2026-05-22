import { client } from "@/sanity/lib/client";
import { Testimonial } from "@/types/types";

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`*[_type == "testimonial"]`);
}
