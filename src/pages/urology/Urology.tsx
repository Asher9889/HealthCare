import { urologyImg } from "@/assets"
import {
    AboutSection,
    AppointFormWithNoReason,
    DoctorCard,
    DynamicHeroSection,
    SEO,
    TopCities,
    // SEO 
} from "@/components"
import WhyChoose from "./WhyChoose/WhyChoose"
import StatsBar from "../home/StatusBar/StatsBar"
import FeatureSection from "@/components/FeatureSection/FeatureSection"
import {
    Stethoscope,
    Activity,
    Wallet,
    Clock,
    Building2,
    FileText,
    CreditCard,
    PhoneCall,
    HeartPulse,
  } from "lucide-react";
import TreatmentSteps from "../practology/treatment-step/TreatmentSteps"
import { Heading } from "@/components/"
import FAQ from "./FAQ/FAQ"
import { urologyDoctorCardData } from "@/constants/data"


const surgeryFeatures = [
  {
    quote: "Experienced Urologists",
    name: "Urologists & surgeons with 15+ years of expertise in advanced treatments.",
    icon: Stethoscope,
  },
  {
    quote: "Advanced Techniques",
    name: "Laser & minimally invasive procedures for safer and effective care.",
    icon: Activity,
  },
  {
    quote: "Affordable Packages",
    name: "Transparent pricing with complete care packages for all treatments.",
    icon: Wallet,
  },
  {
    quote: "Day-care Surgeries",
    name: "Same-day discharge with quicker recovery and less downtime.",
    icon: Clock,
  },
  {
    quote: "NABH-Accredited Hospitals",
    name: "Safe & hygienic facilities following the highest medical standards.",
    icon: Building2,
  },
  {
    quote: "Full Insurance Support",
    name: "Hassle-free documentation and cashless treatment assistance.",
    icon: FileText,
  },
  {
    quote: "EMI Options Available",
    name: "Flexible payment options for affordable treatment without compromise.",
    icon: CreditCard,
  },
  {
    quote: "Free Consultation",
    name: "Zero waiting with online & offline consultation options.",
    icon: PhoneCall,
  },
  {
    quote: "Personalized Care",
    name: "Dedicated post-treatment care & follow-up support at every stage.",
    icon: HeartPulse,
  },
];
const Urology = () => {

    const heroContent = {
        title: "Leading Best Urology Treatment in India with Experienced Doctors & Modern Technology Treatment Center in India – Hernia Surgery, Gallstones Treatment, Appendicitis, Inguinal Hernia & Umbilical Hernia Treatment",
        description: "PureCheckup.com offers advanced urology treatments in India at affordable costs. Get expert care from highly experienced surgeons for kidney stones, prostate, UTIs, and more.",
        // subtitle: "– ",
        button1Text: "Book Free Consultation",
        button2Text: "WhatsApp Expert",
        city: "Jaipur",
        phone: "9211930749",
        imageUrl: urologyImg
    }

    const cards = [
        {
          id: "1",
          title: "What Is Urology?",
          description:
            "At PureCheckup.com, we provide advanced urology treatment in India with safe, effective, and patient-focused care. Urology deals with diseases of the urinary tract (kidneys, bladder, ureters, urethra) and the male reproductive system. Our expert urologists specialize in treating kidney stones, prostate problems, urinary tract infections (UTIs), sexual health issues, and other urological conditions using modern laser and minimally invasive techniques. Compared to conventional surgery, our advanced methods ensure faster recovery, minimal pain, fewer scars, and reduced hospital stay. Choose PureCheckup.com for highly experienced surgeons and trusted urology care across India.",
        },
        {
          id: "2",
          title: "Conditions We Treat",
          description:
            "We treat kidney stones, UTI, prostate enlargement, bladder issues, and urinary incontinence. Our urology care also covers cancers, infertility, and erectile dysfunction.",
        },
        {
          id: "3",
          title: "Expertise of PureCheckup Urology",
          description:
            "Expert urology care by experienced urologists with advanced treatments, NABH-accredited hospitals, complete patient support, and cashless insurance facilities.",
        },
      ];
      
     
    return (
        <>
            {/* <SEO page="urology" /> */}
            <SEO page="urology"/>
            <DynamicHeroSection heroContent={heroContent} />
            <section className="py-20">
                <WhyChoose />
            </section>
            <StatsBar />
            <section>
                <AboutSection
                    heading="About Urology"
                    description="At PureCheckup, we provide world-class urology treatments with a focus on patient comfort, safety, and long-term health. Our highly experienced urologists and surgeons specialize in diagnosing and treating conditions related to the urinary tract and male reproductive system, using the latest minimally invasive and laser-assisted techniques."
                    buttonText="Book Free Appointment"
                    cards={cards}
                />
            </section>
             <section className="py-20">
                <FeatureSection
                    heading1="Why Choose"
                    heading2="PureCheckup for Urology?"
                    items={surgeryFeatures}
                />
            </section>
             <section className="py-20">
                <TreatmentSteps />
            </section>
            <div className="py-20">
                    <div className="text-center">
                        <Heading text1="Our Urology" text2="Specialists" />
                    </div>
                     <div className="max-w-7xl mx-auto flex-nowrap  mt-10">
                        <div className="justify-center items-top flex flex-col lg:flex-row flex-wrap gap-10">
                            {urologyDoctorCardData.map((doctor) => (
                                <DoctorCard name={doctor.name} specialties={doctor.specialties} experience={doctor.experience} phone={doctor.phone} happyPatients={doctor.happyPatients} imageUrl={doctor.imageUrl} />
                            ))}
                            <span className="px-6 mx-auto">
                            <AppointFormWithNoReason />
                        </span>
                        </div>
                    </div>
                </div>
                <TopCities />
                <section className="w-full bg-white py-20 px-4">
                    <Heading text1="FAQ's" />
                    <FAQ />
                </section>
        </>
    )
}


export default Urology;






