import { astheticImg } from "@/assets"
import { AboutSection, BookAppointMentPageView, DynamicHeroSection, Heading, SEO, TopCities } from "@/components"
import Treatment from "./Treatment/Treatment"
import StatsBar from "../home/StatusBar/StatsBar"
import FeatureSection from "@/components/FeatureSection/FeatureSection"
import TreatmentSteps from "../practology/treatment-step/TreatmentSteps"
import FAQ from "./FAQ/FAQ"


const heroContent = {
  title: "Best Asthetic Treatment in India with Experienced Doctors & Modern Technology",
  description: "PureCheckup offers advanced aesthetic and cosmetic surgery in India. Expert surgeons, modern techniques, and affordable care for face, body & skin.",
  // subtitle: "– ",
  button1Text: "Book Free Consultation",
  button2Text: "WhatsApp Expert",
  city: "Jaipur",
  phone: "9211930749",
  imageUrl: astheticImg
};

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
    title: "Expertise of PureCheckup",
    description:
      "Comprehensive gynecology care by experienced specialists with advanced treatments, NABH-accredited hospitals, complete patient support, and insurance-friendly services.",
  },
];

const surgeryFeatures = [
  {
    quote: "Experienced Gynecologists",
    name: "Years of expertise in women’s health",
    icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  },
  {
    quote: "Modern Technology",
    name: "Accurate diagnosis & advanced treatments",
    icon: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
  },
  {
    quote: "Personalized Care",
    name: "Tailored to every woman’s unique needs",
    icon: "https://cdn-icons-png.flaticon.com/512/4320/4320349.png",
  },
  {
    quote: "Affordable Packages",
    name: "Transparent pricing with no hidden costs",
    icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },
  {
    quote: "NABH-Accredited Hospitals",
    name: "Safe & hygienic surgical facilities",
    icon: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
  },
  {
    quote: "Full Insurance Support",
    name: "Hassle-free documentation",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
  },
  {
    quote: "EMI Options Available",
    name: "Affordable treatment without compromise",
    icon: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
  },
  {
    quote: "Free Consultation",
    name: "Online & offline consultations with zero waiting",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },
  {
    quote: "Safe & Comfortable",
    name: "A stress-free environment for women",
    icon: "https://cdn-icons-png.flaticon.com/512/2966/2966498.png",
  },
];

const Asthetic = () => {
  return (
    <>
      <SEO page="aesthetic" />
      <DynamicHeroSection heroContent={heroContent} />
      <section className="py-20">
        <Treatment />
      </section>
      <StatsBar />
      <section>
        <AboutSection
          heading="About Gynecology"
          description="At PureCheckup, we understand that every woman deserves the best care for her health and well-being. Our gynecology services are designed to provide compassionate, personalized, and advanced medical support for women at every stage of life. Whether it’s routine checkups, pregnancy care, menstrual health, or complex gynecological conditions, our experienced doctors are here to help."
          buttonText="Book Free Appointment"
          cards={cards}
        />
      </section>
      <section className="py-20">
        <FeatureSection
          heading1="Why Choose"
          heading2="PureCheckup for Aesthetic Care?"
          items={surgeryFeatures}
        />
      </section>
      <section className="py-20">
        <TreatmentSteps />
      </section>
      <TopCities disease="Aesthetic" />
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

export default Asthetic