import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is the cost of PCNL treatment surgery in India?",
    answer:
      "The cost of PCNL surgery varies depending on the hospital, city, and complexity of kidney stones. Contact PureCheckup for a personalized consultation and cost estimate.",
  },
  {
    id: "two",
    question: "Does insurance cover PCNL treatment surgery?",
    answer:
      "Yes, most major health insurance providers cover PCNL surgery. PureCheckup assists patients with insurance verification, cashless approval, and claim processing for a hassle-free experience.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best PCNL treatment?",
    answer:
      "PureCheckup partners with India’s top hospitals and experienced urologists to provide safe, high-quality, and affordable PCNL treatment with advanced surgical technology and complete patient support.",
  },
  {
    id: "four",
    question: "How to book a PCNL treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking PCNL surgery with PureCheckup is simple and convenient:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/pcnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/pcnl
            </a>
          </li>
          <li>Fill in your details to request a consultation</li>
          <li>Or call our 24×7 helpline at +91-9211930749 for same-day assistance</li>
        </ul>
        <p>
          Our care team will schedule your consultation with an expert urologist and guide you through insurance and pre-surgery preparations.
        </p>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for kidney stones?",
    answer:
      "PCNL is the gold-standard treatment for large, multiple, or complex kidney stones. Complementary therapies may be recommended for complete stone clearance and faster recovery.",
  },
  {
    id: "six",
    question: "What are the first signs indicating the need for PCNL treatment?",
    answer:
      "Early symptoms include severe back or flank pain, blood in urine (hematuria), frequent urinary infections, nausea or vomiting due to kidney obstruction, and difficulty passing stones. Consult a urologist for evaluation.",
  },
  {
    id: "seven",
    question: "How painful is PCNL treatment surgery?",
    answer:
      "PCNL is minimally invasive, performed under anesthesia, and post-operative pain is manageable. Recovery is generally faster and less painful than open surgery.",
  },
  {
    id: "eight",
    question: "Can PCNL be performed on children?",
    answer:
      "Yes, Mini-PCNL and Micro-PCNL are safe and effective for pediatric patients, ensuring minimal discomfort and rapid recovery.",
  },
  {
    id: "nine",
    question: "How long does it take to recover after PCNL surgery?",
    answer:
      "Most patients can resume normal activities within 1–2 weeks depending on stone size, complexity, and overall health. Full recovery is guided by your urologist.",
  },
  {
    id: "ten",
    question: "Are there any complications of PCNL surgery?",
    answer:
      "PCNL is generally safe with low risk of complications. Minor bleeding or infection may occur, but your urologist will monitor and manage all potential risks effectively.",
  },
];


const pcnlData = {
  title1: "PCNL",
  title2: "Surgery & Information",
  description:
    "Percutaneous Nephrolithotomy (PCNL) is a minimally invasive surgical procedure for removing large, multiple, or complex kidney stones through a small incision in the skin. PCNL offers precise stone removal, faster recovery, and lower complications compared to traditional open surgery. PureCheckup connects patients with expert urologists and top hospitals across India, offering safe, effective, and insured PCNL treatment.",

  tabsData: [
    {
      value: "what-is-pcnl",
      label: "What is PCNL?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            PCNL is a minimally invasive procedure designed to remove kidney stones through a small incision in the skin. Unlike open surgery, it uses specialized instruments for precise and effective stone removal.
          </p>
          <p>
            The procedure is highly recommended for large, multiple, or complex stones, ensuring minimal pain, faster recovery, and a shorter hospital stay.
          </p>
        </div>
      ),
    },
    {
      value: "types",
      label: "Types of PCNL Surgery",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div className="space-y-3">
          <p>PureCheckup provides advanced PCNL procedures in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Standard PCNL:</strong> Traditional percutaneous kidney stone removal.</li>
            <li><strong>Mini-PCNL:</strong> Uses smaller instruments, less pain, and faster recovery.</li>
            <li><strong>Ultra-Mini & Micro-PCNL:</strong> Ideal for pediatric or very small stones.</li>
            <li><strong>ECIRS (Endoscopic Combined Intrarenal Surgery):</strong> Combines PCNL with flexible ureteroscopy for complex stones.</li>
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
          <p>PCNL is indicated in cases of:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Large stones unsuitable for ESWL</li>
            <li>Staghorn or complex kidney stones</li>
            <li>Recurrent urinary tract infections caused by stones</li>
            <li>Stones causing kidney obstruction or damage</li>
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
          <p>You may need PCNL if you experience:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Severe back or flank pain</li>
            <li>Blood in urine (hematuria)</li>
            <li>Frequent urinary tract infections</li>
            <li>Nausea or vomiting due to kidney obstruction</li>
            <li>Difficulty passing stones naturally</li>
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
          <p>Benefits of PCNL include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimally invasive procedure with small incision</li>
            <li>High success rate for large or complex stones</li>
            <li>Faster recovery than open surgery</li>
            <li>Reduced pain and shorter hospital stay</li>
            <li>Ability to remove multiple stones in a single session</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert PCNL Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, PCNL surgeries are performed by top urologists using state-of-the-art instruments and techniques for precise and effective kidney stone removal.
      </p>
      <p>
        Our hospitals provide comprehensive care from consultation to post-operative follow-up, ensuring safe, minimally invasive treatment.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by experienced urologists and kidney stone specialists</li>
        <li>Advanced surgical technology and instrumentation</li>
        <li>Minimal hospital stay and faster recovery</li>
        <li>Insurance coverage and EMI options available</li>
        <li>Available in major cities across India</li>
      </ul>
      <p>
        Choose PureCheckup for a professional, safe, and effective PCNL surgery experience tailored to your medical needs.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/pcnl",
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
    title: "Advanced PCNL Surgery (Recommended)",
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
 
const PCNL = () => {
    return (
        <>
            <ConditionHeroSection
            title="PCNL Surgery – Safe, Effective & Expert Kidney Stone Treatment by PureCheckup"
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
                title2={pcnlData.title1}
                description={pcnlData.description}
                tabsData={pcnlData.tabsData}
                expertHeading= "Expert Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={pcnlData.doctorDescription}
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
                treatmentName="PCNL"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of PCNL",
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

export default PCNL;