import { ConditionHeroSection, Heading, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones } from "lucide-react";

const PilesTreatment = () => {


    const benefits = [
        {
          icon: Scissors,
          title: "Pain-Free Laser Surgery",
          description: "No cuts, no stitches — minimal discomfort.",
        },
        {
          icon: Clock,
          title: "Same-Day Discharge",
          description: "Be back home within hours.",
        },
        {
          icon: ShieldCheck,
          title: "Insurance Assistance",
          description: "Cashless and paperwork support.",
        },
        {
          icon: Headphones,
          title: "24x7 Patient Support",
          description: "We’re here throughout your recovery.",
        },
      ];
    

    return (
        <>
            <ConditionHeroSection
            title="Piles Treatment by Specialists | Laser Surgery Safe & Effective Care"
            description="Pain-free, advanced laser treatment with same-day discharge and full insurance support."
            primaryBtn={{ label: "Book Free Consultation" }}
            secondaryBtn={{ label: "Call Now: +91 9211930749" }}
            features={["✅ NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
            cities={["Delhi", "Mumbai", "Bangalore"]}
            consultations={["Clinic", "Online"]} 
            />

            <section className="py-10">
                <Heading text1="Quick" text2="Benefits" />
                <TreatmentBenefits benefits={benefits} />
            </section>
        </>
    )
}

export default PilesTreatment;