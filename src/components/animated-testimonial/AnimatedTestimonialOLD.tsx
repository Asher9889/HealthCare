import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface Testimonial {
    quote: string;
    name: string;
    designation: string;
    src?: string;
    stars: number;
}



export default function AnimatedTestimonial({testimonials}:{testimonials: Testimonial[]}) {
 
  return <AnimatedTestimonials testimonials={testimonials} />;
}
