import EmiPartners from "./emi-partners/EmiPartners";
import EmiSection from "./emi-section/EmiSection";
import EmiFaqs from "./faq/EmiFaq";
import HeroSection from "./hero-section/HeroSection";
import HowItWorks from "./how-it-works/HowItWorks";
import SurgeriesCovered from "./surgery-covered-in-emi/SurgeriesCovered";
import WhyChoose from "./why-choose/WhyChoose";



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
    </div>
  );
}
