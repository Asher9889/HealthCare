import { ContactSection, Footer, Header, HeroSection } from "../../components";
import FaqSection from "./FaqSection/FaqSection";
import Specialities from "./Specilities.tsx/Specialities";
import StatsBar from "./StatusBar/StatsBar";
import WhyPristynCare from "./WhyPristineCare.tsx/WhyPristineCare";


const Home = ()=>{
    return (
        <div>
            <Header />
            <HeroSection />
            <StatsBar />
            <Specialities />
            <WhyPristynCare />
            <FaqSection />
            <ContactSection />
            <Footer />
        </div>
    )
}


export default Home;