import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of tight foreskin surgery treatment in India?",
    answer:
      "The cost varies depending on the city, hospital, and type of surgery (laser, stapler, or traditional). PureCheckup provides detailed estimates and free consultation.",
  },
  {
    id: "two",
    question: "Does insurance cover tight foreskin surgery treatment?",
    answer:
      "Yes, most major health insurance companies cover medically necessary tight foreskin surgery. PureCheckup assists with complete insurance claim processing and approval.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best treatment?",
    answer:
      "PureCheckup partners with leading hospitals and urologists across India to ensure the best quality care at affordable prices.",
  },
  {
    id: "four",
    question: "How to book a tight foreskin surgery treatment with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Call 📞 9211930749</li>
          <li>Or visit <a href="https://purecheckup.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">PureCheckup.com</a></li>
          <li>Schedule a consultation with an expert urologist</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for a tight foreskin?",
    answer:
      "Laser or stapler circumcision are considered the most advanced, painless, and quick-healing treatments for phimosis.",
  },
  {
    id: "six",
    question: "What are the first signs of a tight foreskin?",
    answer:
      "Pain, swelling, difficulty retracting the foreskin, redness, and discomfort during urination or sexual activity are early signs of phimosis.",
  },
  {
    id: "seven",
    question: "How painful is tight foreskin surgery treatment?",
    answer:
      "Modern laser and stapler procedures are nearly painless, performed under local anesthesia, with recovery in a few days.",
  },
  {
    id: "eight",
    question: "Is tight foreskin surgery safe?",
    answer:
      "Yes, it is a safe, minor procedure when performed by experienced urologists using advanced surgical techniques.",
  },
  {
    id: "nine",
    question: "How long does it take to recover from tight foreskin surgery?",
    answer:
      "Most patients recover within 2–5 days, resuming normal activities quickly with proper post-surgery care.",
  },
  {
    id: "ten",
    question: "Can tight foreskin return after surgery?",
    answer:
      "No, once treated surgically, the condition usually does not recur if proper hygiene and care are maintained.",
  },
];

const tightForeskinData = {
  title1: "Tight Foreskin Surgery ?",
  title2: "Phimosis Treatment & Information",
  description:
    "Tight foreskin surgery (phimosis surgery) treats restricted foreskin that causes pain, hygiene issues, or urination difficulties. PureCheckup offers laser, stapler, and traditional methods for painless, stitch-free, and fast-healing treatment.",

  tabsData: [
    {
      value: "what-is-tight-foreskin-surgery",
      label: "What is Tight Foreskin Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Tight foreskin surgery treats phimosis, where the foreskin cannot retract over the glans. It prevents pain, infections, and discomfort during urination or sexual activity.
          </p>
          <p>
            PureCheckup offers advanced, minimally invasive laser and stapler techniques ensuring painless, stitch-free surgery with quick recovery.
          </p>
        </div>
      ),
    },
    {
      value: "types",
      label: "Types",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div className="space-y-3">
          <p>Types of tight foreskin surgery in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Laser Circumcision:</strong> Painless, minimal bleeding, quick recovery, no stitches.</li>
            <li><strong>Stapler Circumcision:</strong> Fast healing, precision using a modern stapler device.</li>
            <li><strong>Traditional Circumcision:</strong> Surgical removal with scalpel and sutures, used for specific cases.</li>
            <li><strong>Preputioplasty:</strong> Foreskin-preserving procedure for patients who do not want complete removal.</li>
          </ul>
        </div>
      ),
    },
    {
      value: "causes",
      label: "Causes",
      icon: <Pill className="text-purple-600" />,
      content: (
        <div className="space-y-3">
          <p>Causes of tight foreskin (phimosis):</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Poor hygiene or recurrent infections</li>
            <li>Repeated balanitis or inflammation</li>
            <li>Skin disorders or scarring</li>
            <li>Diabetes or other health conditions</li>
            <li>Congenital tightness present since birth</li>
            <li>Aging and loss of skin elasticity</li>
          </ul>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Symptoms",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div className="space-y-3">
          <p>Symptoms indicating need for tight foreskin surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pain or difficulty retracting foreskin</li>
            <li>Swelling or redness of the penis</li>
            <li>Discomfort during urination</li>
            <li>Infections or foul odor</li>
            <li>Pain during sexual activity</li>
            <li>White scar-like ring at the tip of the foreskin</li>
          </ul>
        </div>
      ),
    },
    {
      value: "benefits",
      label: "Benefits",
      icon: <Stethoscope className="text-red-600" />,
      content: (
        <div className="space-y-3">
          <p>Benefits of tight foreskin surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Painless & stitch-free procedure</li>
            <li>Same-day discharge and quick healing</li>
            <li>No visible scars</li>
            <li>100% insurance coverage assistance</li>
            <li>Improved hygiene and sexual health</li>
            <li>Expert urologist care and 24x7 support</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Tight Foreskin Surgery – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup partners with top urology surgeons and NABH-accredited hospitals across India for safe, effective, and affordable tight foreskin (phimosis) surgery.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Free doctor consultation and personalized treatment plan</li>
        <li>Laser, stapler, and traditional surgical options</li>
        <li>Post-surgery follow-up and healing guidance</li>
        <li>Insurance support and cashless treatment options</li>
        <li>Available across major cities in India</li>
      </ul>
      <p>
        Trust PureCheckup for advanced, minimally invasive, and painless tight foreskin surgery.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/tight-foreskin",
};


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

const treatmentOptions = [
  {
    id: 1,
    icon: <Scissors className="w-7 h-7 text-blue-600" />,
    title: "Tight Foreskin Surgery (Recommended)",
    points: [
      "No cuts, stitches, or pain",
      "Safe and effective",
      "Quick recovery",
    ],
    highlight: false,
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
   
const TightForeskin = () => {
    return (
        <>
            <ConditionHeroSection
            title="Painless Tight Foreskin Surgery — Safe, Effective Treatment"
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
            <section className="py-20 mx-auto px-4 max-w-7xl">
              <Heading text1="Meet Our" text2="Specialist" className="mb-10"   />
              {constantData.specialists.map((doc) => (
                <SpecialistCard key={doc.id} specialist={doc} />
              ))}
            </section>

            <WhyPristynCare />

            <ConditionInfo
                title1="What is"
                title2={tightForeskinData.title1}
                description={tightForeskinData.description}
                tabsData={tightForeskinData.tabsData}
                expertHeading= {tightForeskinData.doctorName}
                doctorName="" 
                doctorDescription={tightForeskinData.doctorDescription}
                doctorLink="https://purecheckup.com"
                ctaText="Book Free Appointment"
            />

            <section className="py-20 px-4">
              <Heading text1="Treatment" text2="Options" className="mb-10" />
              <ConditionTreatmentOptions treatmentOptions={treatmentOptions} />
            </section>

            <section className="py-20 px-4">
              <Heading text1="Frequently" text2="Asked Questions" className="mb-10"/>
              <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
              <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-3xl mx-auto">
              <ConditionTreatmentForm  cities={constantData.cities}  />
            </section>
            
            <section className="py-20">
              <ConditionCityWiseTreatment
                treatmentName="Tight Foreskin"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Tight Foreskin",
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

export default TightForeskin;