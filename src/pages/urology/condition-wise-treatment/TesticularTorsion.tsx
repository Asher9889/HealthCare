import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of testicular torsion surgery treatment in India?",
    answer:
      "The cost depends on hospital location, surgeon expertise, and procedure type. PureCheckup ensures affordable, transparent pricing with detailed breakdowns.",
  },
  {
    id: "two",
    question: "Does insurance cover testicular torsion surgery treatment?",
    answer:
      "Yes, most health insurance plans cover emergency surgeries like testicular torsion. PureCheckup provides cashless treatment across leading hospitals.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best treatment for testicular torsion in India?",
    answer:
      "PureCheckup partners with experienced urologists and NABH-accredited hospitals to deliver high-quality, precise, and painless testicular torsion surgeries.",
  },
  {
    id: "four",
    question: "How to book a testicular torsion treatment surgery with PureCheckup?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>Booking is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit PureCheckup.com</li>
          <li>Fill out the appointment form</li>
          <li>Call the helpline for free consultation</li>
          <li>Same-day booking and emergency guidance provided</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for testicular torsion surgery?",
    answer:
      "Orchiopexy is the preferred treatment. It untwists the spermatic cord and secures the testicles to prevent recurrence.",
  },
  {
    id: "six",
    question: "What are the first signs of testicular torsion?",
    answer:
      "Sudden sharp scrotal pain, swelling, redness, nausea, or one testicle appearing higher than the other. Immediate medical attention is crucial.",
  },
  {
    id: "seven",
    question: "How painful is testicular torsion surgery treatment?",
    answer:
      "The procedure is performed under anesthesia, so there is no pain during surgery. Post-surgery discomfort is minimal and manageable with medication.",
  },
  {
    id: "eight",
    question: "How long does recovery take after testicular torsion surgery?",
    answer:
      "Most patients recover within 1–2 weeks. Normal activities can resume after medical clearance.",
  },
  {
    id: "nine",
    question: "Can testicular torsion happen again after surgery?",
    answer:
      "No, bilateral orchiopexy (fixing both testicles) significantly reduces the risk of recurrence.",
  },
  {
    id: "ten",
    question: "Is testicular torsion surgery safe for teenagers and adults?",
    answer:
      "Yes, it is a safe and life-saving procedure for adolescents and adults when performed promptly by expert urologists.",
  },
];


const testicularTorsionData = {
  title1: "Testicular Torsion Surgery ?",
  title2: "Emergency Urological Procedure",
  description:
    "Testicular torsion surgery is an urgent urological intervention to untwist the spermatic cord and restore blood flow to the testicle. Early surgery preserves fertility, prevents testicular loss, and relieves severe pain.",
  tabsData: [
    {
      value: "what-is-torsion",
      label: "What is Testicular Torsion Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            The surgery untwists the spermatic cord, restoring circulation to the testicle. Orchiopexy (fixing the testicle to the scrotal wall) is performed to prevent recurrence.
          </p>
          <p>
            Timely intervention is critical to preserve fertility and testicular function.
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
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Manual Detorsion:</strong> Temporary non-surgical untwisting, only for early/mild cases.</li>
            <li><strong>Orchiopexy:</strong> Surgical fixation of both testicles to prevent recurrence.</li>
            <li><strong>Orchiectomy:</strong> Removal of nonviable testicle if blood flow isn’t restored.</li>
            <li><strong>Laparoscopic Orchiopexy:</strong> Minimally invasive surgery using small incisions and camera guidance for faster recovery.</li>
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
          <ul className="list-disc list-inside space-y-2">
            <li>Bell-Clapper Deformity (congenital)</li>
            <li>Sudden movement or trauma</li>
            <li>Cold temperatures causing rapid contraction</li>
            <li>Rapid growth during puberty</li>
            <li>Genetic predisposition</li>
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
          <ul className="list-disc list-inside space-y-2">
            <li>Sudden, severe scrotal pain (usually unilateral)</li>
            <li>Swelling, redness, or tenderness</li>
            <li>Abdominal pain or nausea</li>
            <li>One testicle higher than the other</li>
            <li>Fever in prolonged cases</li>
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
          <ul className="list-disc list-inside space-y-2">
            <li>Quick pain relief and restored blood flow</li>
            <li>Preserves fertility and testicular function</li>
            <li>Minimally invasive options with less scarring</li>
            <li>Prevents future torsion (via orchiopexy)</li>
            <li>Short hospital stay (24–48 hours)</li>
            <li>High success rate if treated early</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Testicular Torsion Surgery – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>PureCheckup partners with India’s top urologists and NABH-accredited hospitals to provide:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>24/7 emergency surgical care</li>
        <li>Personalized diagnosis & treatment plans</li>
        <li>Free doctor consultation</li>
        <li>Cashless treatment with insurance assistance</li>
        <li>Post-surgery support and follow-up guidance</li>
      </ul>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/testicular-torsion",
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
    title: "Advanced Testicular Torsion Surgery (Recommended)",
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
   
const TesticularTorsion = () => {
    return (
        <>
            <ConditionHeroSection
            title="Advanced Testicular Torsion Treatment for Quick Pain Relief & Faster Recovery"
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
                title2={testicularTorsionData.title1}
                description={testicularTorsionData.description}
                tabsData={testicularTorsionData.tabsData}
                expertHeading= {testicularTorsionData.doctorName}
                doctorName="" 
                doctorDescription={testicularTorsionData.doctorDescription}
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
                treatmentName="Testicular Torsion"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Testicular Torsion",
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

export default TesticularTorsion;