import { AppointFormWithNoReason, ContactSection, Doctors3DGrid, DynamicHeroSection, Heading, SEO, TopCities, WhyPureCheckup } from "@/components";
// import { HeroSectionOne } from "./home-page/HeroSectionOne"
import { practoHero } from "@/assets";
import Treatment from "./treatment/Treatment";
import AboutPracto from "./about-practology/AboutPracto";
import TreatmentSteps from "./treatment-step/TreatmentSteps";
import Accordian from "./accordian/Accordian";
import StatsBar from "../home/StatusBar/StatsBar";
import ProctoAllTreatment from "../practology/procto-all-treatment/ProctoAllTreatment";


const Practology = () => {



    const heroContent = {
        title: "Leading Proctology Treatment Center in India – Piles, Fissure, Fistula Care",
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
                <SEO page="proctology" />
               
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
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                        <Doctors3DGrid />
                        <span className="px-6">
                            <AppointFormWithNoReason />
                        </span>
                    </div>
                </div>
                <TopCities />
                <section className="pb-20">
                    <ProctoAllTreatment />
                </section>
                <div className="w-full bg-white py-20 px-4">
                    <Heading text1="FAQ's" />
                    <Accordian />
                </div>
                <ContactSection />
               
            </div>
        </>
    )
}

export default Practology;