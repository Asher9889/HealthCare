import { AppointFormWithNoReason, DoctorCard, DynamicHeroSection, Heading, SEO, TopCities, WhyPureCheckup } from "@/components";
// import { HeroSectionOne } from "./home-page/HeroSectionOne"
import { practoHero } from "@/assets";
import Treatment from "./treatment/Treatment";
import AboutPracto from "./about-practology/AboutPracto";
import TreatmentSteps from "./treatment-step/TreatmentSteps";
import Accordian from "./accordian/Accordian";
import StatsBar from "../home/StatusBar/StatsBar";
import ProctoAllTreatment from "../practology/procto-all-treatment/ProctoAllTreatment";
import { proctologyDoctorCardData } from "@/constants/data";

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
                    <div className="max-w-7xl mx-auto flex-nowrap justify-center items-center mt-10">
                        <div className="justify-center items-center flex flex-col lg:flex-row flex-wrap gap-10">
                            {proctologyDoctorCardData.map((doctor) => (
                                <DoctorCard name={doctor.name} specialties={doctor.specialties} experience={doctor.experience} phone={doctor.phone} happyPatients={doctor.happyPatients} imageUrl={doctor.imageUrl} />
                            ))}
                            <span className="px-6 mx-auto">
                                <AppointFormWithNoReason />
                            </span>
                        </div>
                    </div>
                </div>
                <TopCities disease="Proctology" />
                <section className="pb-20">
                    <ProctoAllTreatment />
                </section>
                <div className="w-full bg-white py-20 px-4">
                    <Heading text1="FAQ's" />
                    <Accordian />
                </div>

            </div>
        </>
    )
}

export default Practology;