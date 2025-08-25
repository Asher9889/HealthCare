import { FaPhoneAlt } from "react-icons/fa";
import { ContactSection, Footer, Header, HeroSection } from "../../components";
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
            <Header />
            <HeroSection />
            <Specialities />
            <StatsBar />
            <div className="w-full">
                <div className="flex flex-col justify-center items-center">
                    <button className="bg-orange-500 text-white font-semibold rounded-md px-8 py-3 flex items-center gap-2 hover:bg-orange-600 transition cursor-pointer">
                    Call Us <FaPhoneAlt /> 9211930749
                </button>
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
            <Footer />
        </div>
    )
}


export default Home;