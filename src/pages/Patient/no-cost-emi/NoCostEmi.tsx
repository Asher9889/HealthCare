import EmiPartners from "./emi-partners/EmiPartners";
import EmiSection from "./emi-section/EmiSection";
import EmiFaqs from "./faq/EmiFaq";
import HeroSection from "./hero-section/HeroSection";
import HowItWorks from "./how-it-works/HowItWorks";
import SurgeriesCovered from "./surgery-covered-in-emi/SurgeriesCovered";
import WhyChoose from "./why-choose/WhyChoose";
import { AnimatedTestimonial, Heading } from "@/components";

const testimonials = [
  {
    quote:
      "I was suffering from piles for years. After the treatment, my pain and bleeding stopped completely. I feel like I got my life back.",
    name: "Preeti Sharma",
    designation: "Patient from Jaipur",
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3540&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote:
      "The doctors were very patient and explained everything in detail. The laser treatment was painless and I was able to return to work within two days.",
    name: "Priya Verma",
    designation: "Patient from Delhi",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3540&auto=format&fit=crop",
    stars: 4.5,
  },
  {
    quote:
      "I was really scared before the procedure, but the staff made me comfortable. The recovery was quick and much easier than I expected.",
    name: "Amit Patel",
    designation: "Patient from Ahmedabad",
    src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3540&auto=format&fit=crop",
    stars: 4,
  },
  {
    quote:
      "I had tried many home remedies but nothing worked. After consulting here, my piles problem was solved without any complications.",
    name: "Sanjeev Gupta",
    designation: "Patient from Lucknow",
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=3540&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote:
      "Excellent treatment and modern facilities. The doctor’s approach was very reassuring and I am completely cured now.",
    name: "Vikram Singh",
    designation: "Patient from Mumbai",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2592&auto=format&fit=crop",
    stars: 5,
  },
];

export default function NoCostEmi() {
  return (
    <div>
        <HeroSection />
        <HowItWorks />
        <EmiPartners />
        <WhyChoose />
        <SurgeriesCovered />
        <EmiSection />
        <EmiFaqs />
        <section className="">
          <Heading text1="What" text2="Patient Say"/>
          <AnimatedTestimonial testimonials={testimonials}/>
        </section>
    </div>
  );
}
