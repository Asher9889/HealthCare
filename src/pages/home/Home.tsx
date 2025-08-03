import { ContactSection, Footer, Header, HeroSection } from "../../components";
import FaqSection from "./FaqSection/FaqSection";
import Specialities from "./Specilities.tsx/Specialities";
import WhyPristynCare from "./WhyPristineCare.tsx/WhyPristineCare";
const Home = ()=>{
    return (
        <div>
            <Header />
            <HeroSection />
            <WhyPristynCare />
            <Specialities />
            <FaqSection />
            <ContactSection />
            <Footer />
        </div>
    )
}


export default Home;