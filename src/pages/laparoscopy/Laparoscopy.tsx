import { laproscopy } from "@/assets";
import { DynamicHeroSection, Heading, SEO, WhyPureCheckup } from "@/components"
import WhyChoose from "./why-choose/WhyChoose";
import StatsBar from "../home/StatusBar/StatsBar";
import TreatmentSteps from "../practology/treatment-step/TreatmentSteps";
import WhyChooseUs from "./why-laparoscopy/WhyLaparoscope";
import FAQ from "./faq/FAQ";
import LaparoscopySection from "./laparoscopy-section/LaparoScopySection";

const Laparoscopy = () =>{
    const heroContent = {
        title: "Leading Laparoscopy Treatment Center in India – Hernia Surgery, Gallstones Treatment, Appendicitis, Inguinal Hernia & Umbilical Hernia Treatment",
        description: "Get advanced laparoscopic surgery at affordable costs with PureCheckup.com. Consult expert surgeons for safe, effective, and hassle-free treatment in India.",
        // subtitle: "– ",
        button1Text: "Book Free Consultation",
        button2Text: "WhatsApp Expert",
        city: "Jaipur",
        phone: "9211930749",
        imageUrl: laproscopy
    }
    return (
        <>
            <div className="bg-(--primary-bg-light-blue)">

                <SEO page="laparoscopy" />
                <DynamicHeroSection heroContent={heroContent} />
                <section className="py-20">
                    <WhyChoose />
                </section>
                <section className="py-20">  
                    <WhyChooseUs />
                </section>
                <StatsBar />
                <section className="py-20">
                    <WhyPureCheckup />
                </section>
                <section className="py-20">
                    <TreatmentSteps />
                </section>

                <section  className="w-full bg-white py-20 px-4">
                    <Heading text1="FAQ's" />
                    <FAQ />
                </section>
                <section>
                    <LaparoscopySection />
                </section>
            </div>
        </>
    )
}

export default Laparoscopy;