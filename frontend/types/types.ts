export type Testimonial = {
  _id: string;
  name: string;
  jobTitle: string;
  testimonial: string;
}

export type Service = {
  _id: string;
  title: string;
  description: string;
  image?: {
    asset: {
      url: string;
    };
  };
}