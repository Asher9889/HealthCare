import { laproscopy } from "@/assets";
import { AboutSection, AppointFormWithNoReason, DoctorCard, DynamicHeroSection, Heading, SEO, TopCities } from "@/components"
import WhyChoose from "./why-choose/WhyChoose";
import StatsBar from "../home/StatusBar/StatsBar";
import TreatmentSteps from "../practology/treatment-step/TreatmentSteps";
import FAQ from "./faq/FAQ";
import LaparoscopySection from "./laparoscopy-section/LaparoScopySection";
import { UserCheck, Microscope, HeartPulse, BadgeDollarSign, Users, Building2, FileCheck2, Wallet, Video } from "lucide-react";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import { laproscopyDoctorCardData } from "@/constants/data";



const Laparoscopy = () => {
    const heroContent = {
        title: "Leading Laparoscopy Treatment Center in India – Hernia Surgery, Gallstones Treatment, Appendicitis, Inguinal Hernia & Umbilical Hernia Treatment",
        description: "Get advanced laparoscopic surgery at affordable costs with PureCheckup.com. Consult expert surgeons for safe, effective, and hassle-free treatment in India.",
        // subtitle: "– ",
        button1Text: "Book Free Consultation",
        button2Text: "WhatsApp Expert",
        city: "Jaipur",
        phone: "9211930749",
        imageUrl: laproscopy
    }

    const surgeryFeatures = [
        {
            quote: "Experienced Surgeons",
            name: "15+ years of expertise in advanced laparoscopic surgery",
            icon: UserCheck,
        },
        {
            quote: "Cutting-Edge Technology",
            name: "Minimally invasive equipment for safer procedures",
            icon: Microscope,
        },
        {
            quote: "Less Pain, Faster Recovery",
            name: "Smaller incisions mean reduced hospital stay",
            icon: HeartPulse,
        },
        {
            quote: "Affordable Costs",
            name: "Transparent pricing with complete care packages",
            icon: BadgeDollarSign,
        },
        {
            quote: "Personalized Care",
            name: "Dedicated support at every stage of your treatment",
            icon: Users,
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
    ];
    const cards = [
        {
          id: "1",
          title: "What is Laparoscopy?",
          description:
            "At PureCheckup.com, we offer advanced laparoscopy treatment in India for safe and effective care. Laparoscopy is a minimally invasive surgery done through small cuts using a laparoscope (camera + light). It is commonly used for hernia surgery, gallstones, appendicitis, and other abdominal treatment. Compared to open surgery, laparoscopy ensures faster recovery, less pain, minimal scars, and shorter hospital stay. Choose PureCheckup.com for expert surgeons and trusted laparoscopic care in India.",
        },
        {
          id: "2",
          title: "Conditions We Treat",
          description:
            "Laparoscopy is used to treat gallstones, appendicitis, hernia, ovarian cysts, endometriosis, fibroids, and ectopic pregnancy. It also helps in managing colorectal, liver, kidney disorders, and unexplained abdominal pain.",
        },
        {
          id: "3",
          title: "Expertise of PureCheckup",
          description:
            "100% laparoscopic treatments by highly experienced surgeons, NABH-accredited partner hospitals, and complete pre & post-surgery care.",
        },
      ];
    return (
        <>
            <div className="bg-(--primary-bg-light-blue)">

                <SEO page="laparoscopy" />
                <DynamicHeroSection heroContent={heroContent} />
                <section className="py-20">
                    <WhyChoose />
                </section>
                <StatsBar />
                <section>
                    <AboutSection
                        heading="About Laparoscopy"
                        description="PureCheckup brings you advanced laparoscopy surgery services performed by highly experienced surgeons using the latest minimally invasive technology. Laparoscopy is a modern surgical procedure that allows doctors to diagnose and treat various abdominal and pelvic conditions with smaller cuts, less pain, and faster recovery."
                        buttonText="Book Free Appointment"
                        cards={cards}
                    />
                </section>
                <section className="py-20">
                    <FeatureSection
                        heading1="Why Choose"
                        heading2="PureCheckup?"
                        items={surgeryFeatures}
                    />
                </section>
                <section className="py-20">
                    <TreatmentSteps />
                </section>
                <div className="py-20">
                    <div className="text-center">
                        <Heading text1="Our Laparoscopy" text2="Specialists" />
                    </div>
                    <div className="max-w-7xl mx-auto flex-nowrap  mt-10">
                        <div className="justify-center items-top flex flex-col lg:flex-row flex-wrap gap-10">
                            {laproscopyDoctorCardData.map((doctor) => (
                                <DoctorCard name={doctor.name} specialties={doctor.specialties} experience={doctor.experience} phone={doctor.phone} happyPatients={doctor.happyPatients} imageUrl={doctor.imageUrl} />
                            ))}
                            <span className="px-6 mx-auto">
                            <AppointFormWithNoReason />
                        </span>
                        </div>
                    </div>
                </div>
                <TopCities />
                <section className="py-20">
                    <LaparoscopySection />
                </section>
                <section className="w-full bg-white py-20 px-4">
                    <Heading text1="FAQ's" />
                    <FAQ />
                </section>
            </div>
        </>
    )
}

export default Laparoscopy;