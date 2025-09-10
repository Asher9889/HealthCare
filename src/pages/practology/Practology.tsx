import { AppointFormWithNoReason, ContactSection, Doctors3DGrid, DynamicHeroSection, Footer, Header, Heading, TopCities, WhyPureCheckup } from "@/components";
// import { HeroSectionOne } from "./home-page/HeroSectionOne"
import { practoHero } from "@/assets";
import Treatment from "./treatment/Treatment";
import AboutPracto from "./about-practology/AboutPracto";
import TreatmentSteps from "./treatment-step/TreatmentSteps";
import Accordian from "./accordian/Accordian";
import StatsBar from "../home/StatusBar/StatsBar";

const Practology = () => {



    const heroContent = {
        title: "H1 - Leading Proctology Treatment Center in India – Piles, Fissure, Fistula Care",
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
                <DynamicHeroSection heroContent={heroContent} />
                {/* <BackgroundBeams /> */}
                <div className="py-20">

                    <Treatment />
                </div>
                <StatsBar />
                <div>
                    <AboutPracto />
                </div>
                <div className="max-w-7xl mx-auto py-20">
                    <WhyPureCheckup />
                </div>
                <div className="py-20">
                    <TreatmentSteps />
                </div>
                <div className="py-20">
                    <div className="text-center">
                        <Heading text1="Our Proctology" text2="Specialists" />
                    </div>
                    {/* <div className="flex justify-center items-center gap-10">
                        <div className="flex flex-1"> */}
                    <Doctors3DGrid />
                    {/* </div>
                        <div className="flex-1"> */}

                    {/* </div> */}
                    {/* </div> */}
                    <div className="px-4">

                        <AppointFormWithNoReason />
                    </div>
                </div>
                <TopCities />
                <div className="w-full bg-white py-20 px-4">
                    <Heading text1="FAQ's" />
                    <Accordian />
                </div>
                <ContactSection />
            <Footer />
            </div>
        </>
    )
}

export default Practology;