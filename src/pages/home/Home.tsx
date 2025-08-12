import { BookNowButton, ContactSection, Footer, Header, HeroSection } from "../../components";
import AboutPureCheckup from "./AboutPureCheckup/AboutPureCheckup";
import FaqSection from "./FaqSection/FaqSection";
import PatientReviews from "./PatientReviews/PatientReviews";
import Specialities from "./Specilities.tsx/Specialities";
import StatsBar from "./StatusBar/StatsBar";
import WhyChoose from "./WhyChoose/Whychoose";
import WhyPristynCare from "./WhyPristineCare.tsx/WhyPristineCare";


const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Specialities />
            <StatsBar />
            <WhyPristynCare />
            <PatientReviews />
            <div className="flex justify-center bg-gray-50 pb-20">
                <BookNowButton />
            </div>
            <AboutPureCheckup />
            <WhyChoose />
            <FaqSection />
            <ContactSection />
            <Footer />
        </div>
    )
}


export default Home;