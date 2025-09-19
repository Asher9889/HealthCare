import {  urologyImg } from "@/assets"
import { DynamicHeroSection, 
    // SEO 
} from "@/components"

const Urology = () => {

    const heroContent = {
        title: "Leading Best Urology Treatment in India with Experienced Doctors & Modern Technology Treatment Center in India – Hernia Surgery, Gallstones Treatment, Appendicitis, Inguinal Hernia & Umbilical Hernia Treatment",
        description: "PureCheckup.com offers advanced urology treatments in India at affordable costs. Get expert care from highly experienced surgeons for kidney stones, prostate, UTIs, and more.",
        // subtitle: "– ",
        button1Text: "Book Free Consultation",
        button2Text: "WhatsApp Expert",
        city: "Jaipur",
        phone: "9211930749",
        imageUrl: urologyImg
    }

    return (
        <>
        {/* <SEO page="urology" /> */}
        <DynamicHeroSection heroContent={heroContent} />
        </>
    )
}


export default Urology;






