import { gynoImg } from "@/assets";
import { DynamicHeroSection } from "@/components";
import Treatment from "./Treatment/Treatment";
import StatsBar from "../home/StatusBar/StatsBar";

const heroContent = {
    title: "Advanced Gynecology Care with Expert Doctors - PureCheckup",
    description: "PureCheckup offers advanced gynecology treatments and services at affordable costs. Get expert care from highly experienced doctors for women’s health, pregnancy care, fertility issues, and more.",
    // subtitle: "– ",
    button1Text: "Book Free Consultation",
    button2Text: "WhatsApp Expert",
    city: "Jaipur",
    phone: "9211930749",
    imageUrl: gynoImg
}


const Gynecology = () => {
    return (
        <>
            <DynamicHeroSection heroContent={heroContent} />
            <section className="py-20">
             <Treatment />
            </section>
            <StatsBar />
            
        </>
    )
}

export default Gynecology;