import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is the cost of URSL treatment surgery in India?",
    answer:
      "The cost of URSL surgery varies depending on the hospital, type of surgery, and stone complexity. Contact PureCheckup for a personalized consultation and cost estimate.",
  },
  {
    id: "two",
    question: "Does insurance cover URSL treatment surgery?",
    answer:
      "Yes, most major health insurance providers cover URSL surgery. PureCheckup assists patients with insurance verification, cashless approval, and claim processing.",
  },
  {
    id: "three",
    question: "Which healthcare service provider provides the best URSL treatment at the best price?",
    answer:
      "PureCheckup partners with top hospitals and experienced urologists across India to ensure high-quality, safe, and affordable URSL treatment.",
  },
  {
    id: "four",
    question: "How to book a URSL treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking URSL surgery with PureCheckup is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/ursl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/ursl
            </a>
          </li>
          <li>Fill in your details or call our 24×7 helpline at +91-9211930749</li>
          <li>Our team will schedule a consultation with an expert urologist</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for URSL?",
    answer:
      "URSL with laser fragmentation is considered the most effective and minimally invasive treatment for ureteric and kidney stones.",
  },
  {
    id: "six",
    question: "What are the first signs that indicate URSL treatment is needed?",
    answer:
      "Early signs include severe flank or back pain, blood in urine (hematuria), recurrent urinary tract infections, and difficulty passing stones naturally.",
  },
  {
    id: "seven",
    question: "How painful is URSL treatment surgery?",
    answer:
      "URSL is minimally invasive. Most patients experience mild post-surgery discomfort, which is easily managed with standard pain medications.",
  },
  {
    id: "eight",
    question: "How long is the recovery after URSL surgery?",
    answer:
      "Most patients resume normal activities within 2–5 days, depending on procedure complexity and overall health condition.",
  },
  {
    id: "nine",
    question: "Are there any side effects of URSL surgery?",
    answer:
      "Mild discomfort, temporary urinary burning, or blood in urine may occur, but serious complications are rare when performed by experienced urologists.",
  },
  {
    id: "ten",
    question: "Is URSL treatment safe for all age groups?",
    answer:
      "Yes, URSL is safe for adults and elderly patients when performed by skilled urologists using advanced techniques.",
  },
];


const urslData = {
  title1: "URSL ?",
  title2: "Surgery & Information",
  description:
    "URSL (Ureteroscopy and Laser Stone Removal) is a minimally invasive surgical procedure for removing ureteric and kidney stones using a thin ureteroscope and laser technology. It offers precise stone removal, minimal pain, short recovery time, and is safe for all age groups. PureCheckup connects patients with top urologists and hospitals across India, providing insured and advanced care.",

  tabsData: [
    {
      value: "what-is-ursl",
      label: "What is URSL?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            URSL is a minimally invasive procedure where a thin ureteroscope is inserted into the urinary tract to locate stones. A laser is used to fragment the stones for safe and effective removal.
          </p>
          <p>
            This procedure is ideal for ureteric and kidney stones, ensuring minimal discomfort, short hospital stay, and rapid recovery.
          </p>
        </div>
      ),
    },
    {
      value: "types",
      label: "Types of URSL Surgery",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div className="space-y-3">
          <p>PureCheckup provides the following types of URSL surgeries:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Rigid URSL:</strong> Best for lower ureter stones.</li>
            <li><strong>Flexible URSL:</strong> Ideal for upper ureter and kidney stones.</li>
            <li><strong>Laser URSL:</strong> Uses laser technology for precise stone fragmentation.</li>
            <li><strong>Combined URSL & PCNL:</strong> Recommended for complex or multiple stones.</li>
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
          <p>URSL is recommended in cases of:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Kidney or ureteric stones blocking urine flow</li>
            <li>Recurrent urinary tract infections</li>
            <li>Severe pain due to stones</li>
            <li>Stones that do not pass naturally</li>
            <li>High-risk conditions where other treatments fail</li>
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
          <p>Signs that URSL may be needed:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Intense flank or back pain</li>
            <li>Blood in urine (hematuria)</li>
            <li>Frequent urination or difficulty urinating</li>
            <li>Nausea and vomiting due to kidney stones</li>
            <li>Recurrent urinary tract infections</li>
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
          <p>URSL surgery offers multiple benefits:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimally invasive – no large incisions</li>
            <li>Quick recovery with shorter hospital stay</li>
            <li>High success rate in stone removal</li>
            <li>Safe and effective for all age groups</li>
            <li>Covered by most insurance providers</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert URSL Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup connects patients with top urologists for URSL surgery using advanced laser and endoscopic techniques. Our hospitals ensure safe, precise, and minimally invasive treatment.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by experienced urologists and kidney stone specialists</li>
        <li>Modern, minimally invasive surgical options</li>
        <li>Short hospital stay and faster recovery</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Available across major cities in India</li>
      </ul>
      <p>
        Choose PureCheckup for a safe, professional, and comfortable URSL treatment experience tailored to your medical needs.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/ursl",
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
    title: "Advanced URSL Surgery (Recommended)",
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
 
const URSL = () => {
    return (
        <>
            <ConditionHeroSection
            title="URSL Surgery - Expert Ureteroscopy & Stone Removal Treatment"
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
                title2={urslData.title1}
                description={urslData.description}
                tabsData={urslData.tabsData}
                expertHeading= "Expert URSL Treatment Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={urslData.doctorDescription}
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
                treatmentName="URSL"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of URSL",
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

export default URSL;