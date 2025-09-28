import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import PilesInfo from "./piles-info/PilesInfo";
import FAQ from "./faq/FAQ";

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
    

  const specialists = [
    {
      id: 1,
      name: "Dr. Tanmay Jain",
      title: "Senior Proctologist at PureCheckUp",
      experience: "18+ Years of Experience",
      surgeries: "10,000+ Successful Surgeries",
      description:
        "Expert in laser treatments for Piles, Fissure, and Fistula. Known for a patient-first approach and compassionate care. Available at PureCheckUp for advanced proctology care.",
      image: "https://cdn.pixabay.com/photo/2024/09/03/15/21/ai-generated-9019520_1280.png",
      appointmentLink: "/book-appointment",
      callLink: "tel:+919876543210",
    },
  ]

  const treatmentOptions = [
    {
      id: 1,
      icon: <Scissors className="w-7 h-7 text-blue-600" />,
      title: "Laser Piles Surgery (Recommended)",
      points: [
        "No cuts, stitches, or pain",
        "Safe and effective",
        "Quick recovery",
      ],
      highlight: true,
    },
    {
      id: 2,
      icon: <Leaf className="w-7 h-7 text-green-600" />,
      title: "Non-Surgical Treatments",
      points: ["Medicines", "Lifestyle and diet corrections"],
      highlight: false,
    },
    {
      id: 3,
      icon: <Hospital className="w-7 h-7 text-purple-600" />,
      title: "Conventional Surgery (For Severe Cases)",
      points: ["Recommended in advanced stages"],
      highlight: false,
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
            cities={constantData.cities}
            consultations={["Clinic", "Online"]} 
            />

            <section className="py-10">
                <Heading text1="Quick" text2="Benefits" />
                <TreatmentBenefits benefits={benefits} />
            </section>

            <StatsBar />
            <section className="py-20 mx-auto max-w-7xl">
              <Heading text1="Meet Our" text2="Specialist" className="mb-10"   />
              {specialists.map((doc) => (
                <SpecialistCard key={doc.id} specialist={doc} />
              ))}
            </section>
            <WhyPristynCare />
            <PilesInfo />
            <section className="py-20 px-4">
              <Heading text1="Treatment" text2="Options" className="mb-10" />
              <ConditionTreatmentOptions treatmentOptions={treatmentOptions} />
            </section>
            <section className="py-20 px-4">
              <Heading text1="Frequently" text2="Asked Questions" className="mb-10"/>
              <FAQ />
            </section>
            <section className="px-4">
              <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>
            <section className="py-20 px-4 max-w-3xl mx-auto">
              <ConditionTreatmentForm cities={constantData.cities}  />
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
        </>
    )
}

export default PilesTreatment;