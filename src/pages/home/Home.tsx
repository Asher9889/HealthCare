import { FaPhoneAlt } from "react-icons/fa";
import { ContactSection,  HeroSection, SEO } from "../../components";
import AboutPureCheckup from "./AboutPureCheckup/AboutPureCheckup";
import FaqSection from "./FaqSection/FaqSection";
import PatientReviews from "./PatientReviews/PatientReviews";
import Specialities from "./Specilities.tsx/Specialities";
import StatsBar from "./StatusBar/StatsBar";
import WhyChoose from "./WhyChoose/Whychoose";
import WhyPristynCare from "./WhyPristineCare.tsx/WhyPristineCare";
import SpecialtiesShowcase from "./SpecialtiesShowcase/SpecialtiesShowcase";
import PureCheckupStandards from "./PureCheckupStandards/PureCheckupStandards";



const Home = () => {
    return (
        <div>
            <SEO
               page="home"
            />

            <HeroSection />
            <Specialities />
            <StatsBar />
            <div className="w-full">
                <div className="flex flex-col justify-center items-center">
                    <a href="tel:9211930749" className="bg-orange-500 text-white font-semibold rounded-md px-8 py-3 flex items-center gap-2 hover:bg-orange-600 transition cursor-pointer">
                        Call Us <FaPhoneAlt /> 9211930749
                    </a>
                    <p className="mt-2 text-sm text-gray-600 font-medium">
                        Book Your Doctor's Appointment Today – Fast & Easy
                    </p>
                </div>

            </div>
            <WhyPristynCare />
            <PatientReviews />
            {/* <div className="flex justify-center bg-gray-50 py-20">
                <BookNowButton />
            </div> */}
            <AboutPureCheckup />
            <SpecialtiesShowcase />
            <PureCheckupStandards />
            <WhyChoose />
            <FaqSection />
            <ContactSection />
        </div>
    )
}


export default Home;