import { gynoImg } from "@/assets";
import { AboutSection, BookAppointMentPageView, DynamicHeroSection, Heading, SEO, TopCities } from "@/components";
import Treatment from "../Treatment/Treatment";
import StatsBar from "../../home/StatusBar/StatsBar";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import {
    UserCheck,
    Microscope,
    Users,
    BadgeDollarSign,
    Building2,
    FileCheck2,
    Wallet,
    Video,
    ShieldCheck,
} from "lucide-react";
import TreatmentSteps from "../../practology/treatment-step/TreatmentSteps";
import FAQ from "../FAQ/FAQ";
import { useParams } from "react-router-dom";

export const gynaeFeatures = [
    {
        quote: "Experienced Gynecologists",
        name: "Years of expertise in women’s health",
        icon: UserCheck,
    },
    {
        quote: "Modern Technology",
        name: "Accurate diagnosis & advanced treatments",
        icon: Microscope,
    },
    {
        quote: "Personalized Care",
        name: "Tailored to every woman’s unique needs",
        icon: Users,
    },
    {
        quote: "Affordable Packages",
        name: "Transparency with no hidden costs",
        icon: BadgeDollarSign,
    },
    {
        quote: "NABH-Accredited Hospitals",
        name: "Safe & hygienic surgical facilities",
        icon: Building2,
    },
    {
        quote: "Full Insurance Support",
        name: "Hassle-free documentation",
        icon: FileCheck2,
    },
    {
        quote: "EMI Options Available",
        name: "Affordable treatment without compromise",
        icon: Wallet,
    },
    {
        quote: "Free Consultation",
        name: "Online & offline consultations with zero waiting",
        icon: Video,
    },
    {
        quote: "Safe Environment",
        name: "Comfortable space for consultations and treatments",
        icon: ShieldCheck,
    },
];


const GynecologyInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const heroContent = {
        title: `Advanced Gynecology Care with Expert Doctors in ${city} - PureCheckup`,
        description: `PureCheckup offers advanced gynecology treatments and services in ${city} at affordable costs. Get expert care from highly experienced doctors for women’s health, pregnancy care, fertility issues, and more.`,
        // subtitle: "– ",
        button1Text: "Book Free Consultation",
        button2Text: "WhatsApp Expert",
        city: city,
        phone: "9211930749",
        imageUrl: gynoImg
    }

    const cards = [
        {
            id: "1",
            title: "What is Gynecology?",
            description:
                "Gynecology is the branch of medicine that focuses on women’s reproductive health, including the uterus, ovaries, fallopian tubes, cervix, and vagina. At PureCheckup, we provide advanced gynecology services to support women at every stage of life – from menstrual care and fertility support to pregnancy, menopause, and overall wellness.",
        },
        {
            id: "2",
            title: "Conditions We Treat",
            description:
                "We treat PCOS, menstrual disorders, fibroids, ovarian cysts, endometriosis, and menopause-related issues. Our care also covers infertility, high-risk pregnancies, and gynecological cancers.",
        },
        {
            id: "3",
            title: `Expertise of PureCheckup in ${city}`,
            description:
                `Comprehensive gynecology care by experienced specialists in ${city} with advanced treatments, NABH-accredited hospitals, complete patient support, and insurance-friendly services.`,
        },
    ];

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SEO page="gynaecology" />
            <DynamicHeroSection heroContent={heroContent} />
            <section className="py-20">
                <Treatment />
            </section>
            <StatsBar />
            <section className="py-20">
                <AboutSection
                    heading={`About Gynecology`}
                    description={`At PureCheckup, we understand that every woman deserves the best care for her health and well-being. Our gynecology services in ${city} are designed to provide compassionate, personalized, and advanced medical support for women at every stage of life. Whether it’s routine checkups, pregnancy care, menstrual health, or complex gynecological conditions, our experienced doctors are here to help.`}
                    buttonText="Book Free Appointment"
                    cards={cards}
                />
            </section>

            <section className="py-20">
                <FeatureSection
                    heading1="Why Choose"
                    heading2={`PureCheckup for Gynecology Care in ${city}?`}
                    items={gynaeFeatures}
                />
            </section>

            <section className="py-20">
                <TreatmentSteps />
            </section>
            <TopCities disease="Gynecology" />


            <section className="py-20">
                <BookAppointMentPageView />
            </section>

            <section className="w-full bg-white py-20 px-4">
                <Heading text1="FAQ's" />
                <FAQ />
            </section>

        </>
    )
}

export default GynecologyInSpecialCity;
