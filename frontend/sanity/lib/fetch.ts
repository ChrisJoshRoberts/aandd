import { client } from "@/sanity/lib/client";
import { Service, Testimonial } from "@/types/types";

export async function getPageTestimonials(slug: string): Promise<Testimonial[]> {
  return client.fetch(
    `*[_type == "testimonial" && references(*[_type == "page" && slug.current == $slug]._id)]`,
    { slug },
  );
}

export async function getAllServices(): Promise<Service[]> {
  return client.fetch(`*[_type == "service"]`);
}