import { ContactInfoBar, TopCities } from "@/components";
import CallbackRequest from "./callback-request/CallbackRequest";
import HeroSection from "./hero-section/HeroSection";
import PatientHelpFaqs from "./faq/PatientHelpFaqs";

const PatientHelp = () => {
    return (
        <>
            <div className="px-4">
                <HeroSection />
                <CallbackRequest />
            </div>
            <ContactInfoBar />
            <PatientHelpFaqs />
            <TopCities disease="Medical" />
        </>
    );
};

export default PatientHelp;