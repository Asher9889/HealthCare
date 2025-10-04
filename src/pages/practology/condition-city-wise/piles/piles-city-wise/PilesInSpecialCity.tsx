import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, CtaBanner, Heading, SpecialistCard, StatsBar } from "@/components";
import { constantData } from "@/constants";
import { useParams} from "react-router-dom";
import { TreatmentCard } from "../common/treatment-card/TreatmentCard";
import BenefitCard  from "../common/benefit-card/BenefitCard";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";
import FAQ from "./FAQ";


const treatments = [
  {
    title: "Laser Piles Treatment",
    description: "Minimally invasive, minimal blood loss, quick recovery (1–3 days). Ideal for Grade II–III.",
    downtime: "1–3 days",
  },
  {
    title: "Rubber Band Ligation",
    description: "Fast outpatient procedure for internal hemorrhoids; low recovery time.",
    downtime: "2–5 days",
  },
  {
    title: "Sclerotherapy",
    description: "Injection-based shrinkage for smaller internal piles; quick and painless.",
    downtime: "24–48 hours",
  },
  {
    title: "Rafaelo (Radiofrequency)",
    description: "Advanced radiofrequency option for reduced pain and recurrence — modern choice in Jaipur.",
    downtime: "2–4 days",
  },
  {
    title: "Hemorrhoidectomy",
    description: "Surgical removal for large or recurrent piles; recommended when other treatments fail.",
    downtime: "2–4 weeks",
  },
];

const benefits = [
  { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
  { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
  { title: "No-Cost EMI", img: ncemi, bg: bg3 },
  { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
];


const PilesInSpecialCity = () => {
    let { city} = useParams();
    console.log("City from params:", city);
    
    // Capitalize first letter of city name
    city = city && city.charAt(0).toUpperCase() + city.slice(1);

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen">
            <ConditionHeroSection
                title={`Piles Treatment in ${city} — Fast, Minimally-Invasive Care by Specialists`}
                description="Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across Jaipur."
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Expert Doctors", "Quick Recovery", "Top proctologists & gastroenterologists", "Same-week return to work"]}
                cities={constantData.cities}
                consultations={["Clinic", "Online"]} 
            />
            <StatsBar />
            <section className="py-20 mx-auto max-w-7xl">
              <Heading text1="Meet Our" text2="Specialist" className="mb-10"   />
              {constantData.specialists.map((doc) => (
                <SpecialistCard key={doc.id} specialist={doc} />
              ))}
            </section>

            <section className="px-4 py-8 max-w-7xl mx-auto">
                <Heading text1="Treatment Options Available in" text2={city || ""} className="mb-6 text-center" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {treatments.map((t, idx) => (
                    <TreatmentCard
                        key={idx}
                        title={t.title}
                        description={t.description}
                        downtime={t.downtime}
                    />
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((b, idx) => (
                    <BenefitCard key={idx} title={b.title} image={b.img} bgImage={b.bg} />
                    ))}
                </div>
            </section>
            <section className="py-20">
            <Heading text1="Patient Stories" text2={city}/>
            <AnimatedTestimonial />
            </section>
            <section className="pb-20">
                <Heading text1="FAQs on Piles Surgery in" text2={city}/>
                <FAQ city={city} />
            </section>
            
            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

             <section className="py-20">
                <ConditionCityWiseTreatment
                treatmentName="Piles"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                    "Grade and type of piles",
                    "Hospital category and room",
                    "Insurance coverage and approvals",
                    "Additional diagnostics if needed",
                ]}
                cities={constantData.cities}
                mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                primaryButtonText="Get Free Cost Estimate Now"
                secondaryButtonText="View Nearby Clinics"
                />
            </section>

        </div>
    )
}

export default PilesInSpecialCity;