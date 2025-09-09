import {  Doctors3DGrid, DynamicHeroSection, Header,  WhyPureCheckup } from "@/components";
// import { HeroSectionOne } from "./home-page/HeroSectionOne"
import { practoHero } from "@/assets";
import Treatment from "./treatment/Treatment";
import AboutPracto from "./about-practology/AboutPracto";
import TreatmentSteps from "./treatment-step/TreatmentSteps";
import Accordian from "./accordian/Accordian";
TreatmentSteps

const Practology = () => {

  

    const heroContent = {
        title : "H1 - Leading Proctology Treatment Center in India – Piles, Fissure, Fistula Care",
        description: "Advanced laser-assisted treatments for fast recovery and minimal pain",
        // subtitle: "– ",
        button1Text: "Book Free Consultation",
        button2Text: "WhatsApp Expert",
        city: "Jaipur",
        phone: "9211930749",
        imageUrl: practoHero
    }
    

    return (
        <>
            <div className="bg-[#D6E4EF]">
                <Header />
                {/* <HeroSectionOne /> */}
                <DynamicHeroSection heroContent={heroContent} />
                {/* <BackgroundBeams /> */}
                {/* <StickyScroll content={content} /> */}
                <div className="py-20">

                <Treatment />
                </div>
                <div>
                    <AboutPracto />
                </div>
                <div className="max-w-7xl mx-auto py-20 bg-">
                    <WhyPureCheckup />
                </div>
                <div className="py-20">
                    <TreatmentSteps />
                </div>
                <div>
                    <Doctors3DGrid />
                </div>
                <div className="w-full bg-white py-20 px-4 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">FAQ's</h2>
                    <Accordian />
                </div>
            </div>
        </>
    )
}

export default Practology;