import ngozi from "@/assets/testimonial-ngozi.jpg";
import samuel from "@/assets/testimonial-samuel.jpg";
import grace from "@/assets/testimonial-grace.jpg";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "360 DWAIF didn't come into our village to make promises. They came, they listened, and then they kept showing up — for years. That is rare.",
    name: "Mama Ngozi",
    role: "Community elder & teacher",
    location: "Enugu State",
    image: ngozi,
  },
  {
    quote:
      "I've worked with many NGOs as a local partner. 360 DWAIF is the only one that asks us what we need before telling us what they'll do.",
    name: "Pastor Samuel Okafor",
    role: "Community partner",
    location: "Lagos",
    image: samuel,
  },
  {
    quote:
      "Their scholarship paid my tuition, but the mentor they paired me with changed my life. I'm graduating next year — and coming back.",
    name: "Grace Adeyemi",
    role: "Scholarship alumna, Year 3",
    location: "Ibadan",
    image: grace,
  },
];
