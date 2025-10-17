import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of phimosis surgery treatment in India?",
    answer:
      "The cost depends on the type of procedure, city, and hospital chosen. PureCheckup provides affordable packages with insurance coverage and flexible payment options.",
  },
  {
    id: "two",
    question: "Does insurance cover phimosis surgery treatment?",
    answer:
      "Yes, most health insurance policies cover phimosis surgery when medically recommended. PureCheckup offers cashless claim assistance for a smooth process.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best phimosis surgery treatment in India?",
    answer:
      "PureCheckup is a leading provider offering laser phimosis surgeries performed by experienced urologists at NABH-accredited hospitals.",
  },
  {
    id: "four",
    question: "How to book a phimosis treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Fill out the online form on PureCheckup.com</li>
          <li>Call 📞 9211930749 for a free consultation</li>
          <li>Schedule a consultation and surgery with expert urologists</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for phimosis surgery?",
    answer:
      "Laser phimosis or stapler circumcision is the most advanced treatment, offering minimal pain, faster recovery, and stitch-free results.",
  },
  {
    id: "six",
    question: "What are the first signs that you might need phimosis treatment?",
    answer:
      "Early signs include tight foreskin, discomfort, swelling, and redness. Prompt treatment prevents infection and urinary complications.",
  },
  {
    id: "seven",
    question: "How painful is phimosis surgery treatment?",
    answer:
      "Modern laser and stapler surgeries are virtually painless, performed under local anesthesia, with recovery in 1–2 days.",
  },
  {
    id: "eight",
    question: "How long does it take to recover after phimosis surgery?",
    answer:
      "Recovery usually takes 2–5 days depending on the procedure, with post-operative care ensuring minimal discomfort.",
  },
  {
    id: "nine",
    question: "Is phimosis surgery permanent?",
    answer:
      "Yes, it provides a permanent solution, eliminating foreskin tightening and preventing recurrent infections.",
  },
  {
    id: "ten",
    question: "Can phimosis be treated without surgery?",
    answer:
      "Mild cases may respond to topical creams and gentle stretching, but surgery is the only permanent and reliable solution for long-term relief.",
  },
];

const phimosisData = {
  title1: "Phimosis Surgery ?",
  title2: "Advanced Treatment for Tight Foreskin",
  description:
    "Phimosis surgery treats tight foreskin that cannot retract over the glans, causing pain, swelling, or infections. PureCheckup offers advanced, minimally invasive laser and stapler surgeries ensuring stitch-free, fast recovery with same-day discharge.",

  tabsData: [
    {
      value: "what-is-phimosis-surgery",
      label: "What is Phimosis Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Phimosis surgery treats tight foreskin (phimosis) that cannot retract over the glans, preventing pain, swelling, infections, and urinary difficulties.
          </p>
          <p>
            PureCheckup provides laser and stapler surgeries for painless, stitch-free procedures with quick recovery and same-day discharge.
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
          <p>Types of phimosis surgery in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Laser Circumcision / Stapler Circumcision:</strong> Bloodless, painless, quick recovery, minimal downtime.</li>
            <li><strong>Preputioplasty:</strong> Foreskin-preserving procedure for mild cases.</li>
            <li><strong>Dorsal Slit Procedure:</strong> Emergency procedure for urinary blockage or infection.</li>
            <li><strong>Conventional Circumcision:</strong> Surgical removal using scalpel and sutures under anesthesia.</li>
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
          <p>Causes requiring phimosis surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Chronic infections like balanitis or posthitis</li>
            <li>Repeated inflammation of foreskin</li>
            <li>Diabetes-related infections</li>
            <li>Scarring from forced retraction or trauma</li>
            <li>Poor genital hygiene or untreated infections</li>
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
          <p>Symptoms indicating phimosis surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Tight foreskin that doesn’t retract</li>
            <li>Pain during urination or intercourse</li>
            <li>Redness, swelling, or infection</li>
            <li>White discharge under the foreskin</li>
            <li>Difficulty cleaning the foreskin area</li>
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
          <p>Benefits of phimosis surgery treatment:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Painless & stitch-free procedure</li>
            <li>Same-day discharge & quick healing</li>
            <li>No risk of recurrence</li>
            <li>Improved hygiene and confidence</li>
            <li>Covered under most health insurance plans</li>
            <li>Permanent relief from pain and infections</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Phimosis Surgery – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup offers safe, modern, and hygienic phimosis surgeries using laser and stapler technology. Patients benefit from:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Free doctor consultation and personalized treatment plan</li>
        <li>Cashless insurance facility</li>
        <li>24x7 patient assistance</li>
        <li>Post-surgery care and follow-up support</li>
        <li>Advanced, minimally invasive procedures ensuring stitch-free recovery</li>
      </ul>
      <p>
        Your comfort, hygiene, and confidence are our top priorities.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/phimosis",
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
    title: "Advanced Phimosis Surgery (Recommended)",
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
   
const Phimosis = () => {
    return (
        <>
            <ConditionHeroSection
            title="Painless Phimosis Surgery in India | Safe, Stitch-Free & Insurance Covered Treatment"
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
                title2={phimosisData.title1}
                description={phimosisData.description}
                tabsData={phimosisData.tabsData}
                expertHeading= {phimosisData.doctorName}
                doctorName="" 
                doctorDescription={phimosisData.doctorDescription}
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
                treatmentName="Phimosis"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Phimosis",
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

export default Phimosis;