import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of a hydrocele treatment surgery in India?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          The cost typically ranges from ₹25,000 to ₹60,000 and varies by city, hospital type, surgery technique, and surgeon experience.
        </p>
        <p>
          <strong>PureCheckup</strong> provides transparent pricing with no hidden charges.
        </p>
      </div>
    ),
  },
  {
    id: "two",
    question: "Does insurance cover hydrocele treatment surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Yes, most health insurance plans cover hydrocele surgery, including consultation, operation, and hospitalization.
        </p>
        <p>
          <strong>PureCheckup</strong> assists with eligibility checks and cashless claims.
        </p>
      </div>
    ),
  },
  {
    id: "three",
    question: "Which provider offers the best treatment at the best price?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          <strong>PureCheckup</strong> offers top-rated, affordable, and cashless hydrocele surgeries performed by experienced urologists across India.
        </p>
      </div>
    ),
  },
  {
    id: "four",
    question: "How to book a hydrocele treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com
            </a>
          </li>
          <li>Fill in your details to request a free consultation</li>
          <li>Or call our 24×7 helpline at <strong>+91-9211930749</strong> for a same-day appointment</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for a hydrocele?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          The most definitive treatment is <strong>hydrocelectomy</strong>. Minimally invasive laparoscopic hydrocelectomy is painless and ensures quick recovery.
        </p>
      </div>
    ),
  },
  {
    id: "six",
    question: "What are the first signs of a hydrocele?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Swelling in the scrotum, heaviness, and fluid build-up appearance are early signs. If swelling persists, seek medical attention.</p>
      </div>
    ),
  },
  {
    id: "seven",
    question: "How painful is hydrocele treatment surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          With modern laparoscopic techniques under anesthesia, the procedure is nearly painless and recovery is comfortable.
        </p>
      </div>
    ),
  },
  {
    id: "eight",
    question: "How long does it take to recover from hydrocele surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Most patients return to daily activities within 2–3 days and achieve full recovery in 1–2 weeks.
        </p>
      </div>
    ),
  },
  {
    id: "nine",
    question: "Can a hydrocele come back after surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Recurrence is rare, especially when performed by experienced surgeons like those at PureCheckup.
        </p>
      </div>
    ),
  },
  {
    id: "ten",
    question: "Why choose PureCheckup for hydrocele surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <ul className="list-disc list-inside space-y-1">
          <li>Advanced minimally invasive surgical technology</li>
          <li>24x7 medical support and free consultations</li>
          <li>Insurance assistance and affordable packages</li>
        </ul>
      </div>
    ),
  },
];

const hydroceleData = {
  title1: "Hydrocele ?",
  title2: "Treatment & Information",
  description:
    "A hydrocele is a condition where fluid accumulates around the testicle, causing swelling in the scrotum. It is often painless but can lead to discomfort, heaviness, or embarrassment. While some hydroceles resolve on their own, persistent cases require surgery (hydrocelectomy) for permanent relief.",

  tabsData: [
    {
      value: "what-is-hydrocele",
      label: "What is Hydrocele ?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-2">
          <p>
            A hydrocele is a common urological condition characterized by fluid collection around one or both testicles, leading to scrotal swelling. It may be congenital (in infants) or acquired (in adults due to injury, infection, or inflammation).
          </p>
          <p>
            Persistent hydroceles typically need surgical treatment called <strong>hydrocelectomy</strong> to prevent complications and restore comfort.
          </p>
        </div>
      ),
    },
    {
      value: "types",
      label: "Types of Surgery",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div className="space-y-3">
          <p>Two primary hydrocele surgery options in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Conventional (Open) Hydrocelectomy:</strong> Removal or repair of the hydrocele sac through a small scrotal or groin incision. Safe and effective under local or general anesthesia.
            </li>
            <li>
              <strong>Laparoscopic Hydrocelectomy (Minimally Invasive):</strong> Performed using a tiny camera and instruments for minimal pain, faster recovery, and minimal scarring.
            </li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Faster recovery</li>
            <li>Less pain and bleeding</li>
            <li>Minimal scarring</li>
            <li>Same-day discharge</li>
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
          <p>Hydrocele can develop due to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Infection or injury in the testicles or scrotum</li>
            <li>Blockage in the spermatic cord or lymphatics</li>
            <li>Inflammation due to epididymitis or orchitis</li>
            <li>Birth defects (in infants)</li>
            <li>Post-surgical complications or trauma</li>
          </ul>
          <p>If swelling persists for more than a few weeks, consult a urology specialist immediately.</p>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Symptoms",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div className="space-y-3">
          <p>Common symptoms include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Painless swelling in one or both testicles</li>
            <li>Feeling of heaviness in the scrotum</li>
            <li>Fluid-filled sac appearance</li>
            <li>Dull ache or discomfort during movement</li>
            <li>Difficulty walking or sitting due to enlarged scrotum</li>
          </ul>
          <p>Early diagnosis helps prevent complications like infection or hernia formation.</p>
        </div>
      ),
    },
    {
      value: "benefits",
      label: "Benefits",
      icon: <Stethoscope className="text-red-600" />,
      content: (
        <div className="space-y-3">
          <p>Benefits of hydrocele surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent removal of swelling and discomfort</li>
            <li>Improved physical comfort and mobility</li>
            <li>Minimal pain and scarring (with laparoscopic surgery)</li>
            <li>Quick recovery — resume normal life in 2–3 days</li>
            <li>Boosts confidence and sexual wellness</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Hydrocele Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, we provide advanced hydrocele surgery performed by top urologists and laparoscopic surgeons across India.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Modern, minimally invasive surgical technology</li>
        <li>24x7 medical support and care</li>
        <li>Free doctor consultations</li>
        <li>Complete insurance assistance</li>
        <li>Affordable packages starting from ₹25,000*</li>
      </ul>
      <p>
        Whether you’re seeking hydrocele surgery near you or cashless treatment, PureCheckup ensures a safe, smooth, and stress-free experience.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com",
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
    title: "Laparoscopic Hydrocelectomy (Recommended)",
    points: [
      "Minimally invasive, less pain and bleeding",
      "Safe and effective with minimal scarring",
      "Quick recovery with same-day discharge",
    ],
    highlight: false,
  },
  {
    id: 2,
    icon: <Leaf className="w-7 h-7 text-green-600" />,
    title: "Non-Surgical Treatments",
    points: ["Medicines", "Lifestyle and support"],
    highlight: false,
  },
  {
    id: 3,
    icon: <Hospital className="w-7 h-7 text-purple-600" />,
    title: "Conventional (Open) Hydrocelectomy",
    points: ["Recommended based on case severity"],
    highlight: false,
  },
];
   
const Hydrocele = () => {
    return (
        <>
            <ConditionHeroSection
            title="Advanced Hydrocele Treatment Surgery – Safe, Painless & Affordable"
            description="Minimally invasive hydrocelectomy with faster recovery, same-day discharge, and full insurance support."
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
                title2={hydroceleData.title1}
                description={hydroceleData.description}
                tabsData={hydroceleData.tabsData}
                expertHeading= "Expert Hydrocele Treatment Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={hydroceleData.doctorDescription}
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
                treatmentName="Hydrocele"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "City and hospital location",
                  "Hospital category and room",
                  "Insurance coverage and approvals",
                  "Type of surgery (open or laparoscopic)",
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

export default Hydrocele;