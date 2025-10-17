import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of kidney stone treatment surgery in India?",
    answer:
      "The average cost of kidney stone surgery in India ranges from ₹30,000 to ₹1,20,000, depending on the type of procedure, hospital location, and stone size. PureCheckup provides affordable laser kidney stone treatments with complete cost transparency.",
  },
  {
    id: "two",
    question: "Does insurance cover kidney stone treatment surgery?",
    answer:
      "Yes, most health insurance plans in India cover kidney stone treatment and hospitalization. PureCheckup helps with cashless insurance approval and end-to-end claim assistance.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best kidney stone treatment at the best price?",
    answer:
      "PureCheckup partners with India’s leading hospitals and urologists to deliver high-quality kidney stone treatments at competitive prices with 100% patient satisfaction.",
  },
  {
    id: "four",
    question: "How to book a kidney stone treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking your kidney stone treatment with PureCheckup is simple and hassle-free:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/kidney-stone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/kidney-stone
            </a>
          </li>
          <li>Search for Kidney Stone Treatment</li>
          <li>Fill in your details or call our 24×7 helpline at +91-9211930749</li>
        </ul>
        <p>
          Our care team will schedule your consultation with an expert urologist and guide you through diagnosis,
          insurance, and pre-surgery assistance.
        </p>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for kidney stones?",
    answer:
      "The best treatment depends on the stone’s size, location, and composition. Laser lithotripsy (RIRS) is currently one of the most effective and safest options, offering precise stone removal with minimal pain and quick recovery.",
  },
  {
    id: "six",
    question: "What are the first signs of kidney stones?",
    answer:
      "Early signs include pain in the lower back or abdomen, discomfort while urinating, and frequent or urgent urination. If pain becomes severe, it is important to consult a urologist immediately.",
  },
  {
    id: "seven",
    question: "How painful is kidney stone surgery?",
    answer:
      "Modern kidney stone surgeries such as laser lithotripsy or URS are minimally invasive and cause very little pain. Anesthesia is used during the procedure, and most patients recover comfortably within a few days.",
  },
  {
    id: "eight",
    question: "How long does recovery take after kidney stone treatment?",
    answer:
      "Recovery time varies depending on the procedure type, but most patients resume normal activities within 2–5 days after surgery. PureCheckup provides post-treatment care for faster healing and prevention of recurrence.",
  },
  {
    id: "nine",
    question: "Can kidney stones come back after surgery?",
    answer:
      "Yes, kidney stones can recur if dietary habits or fluid intake are not properly managed. PureCheckup provides personalized post-treatment diet and lifestyle plans to help prevent recurrence.",
  },
  {
    id: "ten",
    question: "Why choose PureCheckup for kidney stone surgery in India?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          PureCheckup is one of India’s most trusted healthcare providers for kidney stone surgery, offering:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Expert urologists with years of surgical experience</li>
          <li>Advanced laser and minimally invasive techniques</li>
          <li>Affordable packages with complete cost transparency</li>
          <li>Cashless insurance and EMI options</li>
          <li>Pan-India network of NABH-accredited hospitals</li>
        </ul>
        <p>
          Book your consultation today at{" "}
          <a
            href="https://purecheckup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            PureCheckup
          </a>{" "}
          or call +91-9211930749.
        </p>
      </div>
    ),
  },
];


const kidneyStoneData = {
  title1: "Kidney Stone ?", 
  title2: "Treatment & Information",
  description:
    "Kidney stone treatment focuses on removing or breaking down hard mineral deposits that form inside the kidneys. These stones can cause intense pain, urinary problems, or infections if untreated. At PureCheckup, we offer advanced and minimally invasive kidney stone treatments using laser and modern surgical methods. Our expert urologists provide quick recovery, minimal pain, and high success rates with personalized care plans across India.",

  tabsData: [
    {
      value: "what-is-kidney-stone",
      label: "What is Kidney Stone ?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-2">
          <p>
            Kidney stone treatment involves medical or surgical methods to remove or dissolve mineral deposits (stones) that form in the kidneys or urinary tract. These stones can block urine flow, causing severe pain and other complications.
          </p>
          <p>
            At PureCheckup, our urologists use advanced laser and minimally invasive procedures to remove kidney stones with minimal discomfort and quick recovery.
          </p>
          <p>
            We treat all types of stones — small, large, single, or multiple — ensuring precision diagnosis, personalized treatment, and complete post-surgery support.
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
          <p>Based on the size, location, and type of kidney stone, the following treatments are commonly performed in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Laser Lithotripsy (RIRS – Retrograde Intrarenal Surgery):</strong> A bloodless laser procedure that breaks stones into fine particles for easy removal, with no major incision.
            </li>
            <li>
              <strong>Shock Wave Lithotripsy (SWL):</strong> Uses high-energy sound waves to shatter stones so they can pass naturally through urine.
            </li>
            <li>
              <strong>PCNL (Percutaneous Nephrolithotomy):</strong> Performed for large or complex stones via a tiny back incision using a nephroscope.
            </li>
            <li>
              <strong>Ureteroscopy (URS):</strong> A flexible scope is used to remove or break stones stuck in the ureter or bladder.
            </li>
            <li>
              <strong>Medication & Lifestyle Management:</strong> For small stones, doctors recommend hydration, pain management, and dietary changes to help stones pass naturally.
            </li>
          </ul>
          <p>
            PureCheckup ensures each patient receives a tailored treatment plan that minimizes pain and maximizes recovery speed.
          </p>
        </div>
      ),
    },
    {
      value: "causes",
      label: "Causes",
      icon: <Pill className="text-purple-600" />,
      content: (
        <div className="space-y-3">
          <p>Kidney stones can develop due to several medical and lifestyle factors:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Low water intake or dehydration</li>
            <li>High calcium or uric acid levels in urine</li>
            <li>Excess salt, sugar, or protein consumption</li>
            <li>Obesity and sedentary lifestyle</li>
            <li>Family history of kidney stones</li>
            <li>Certain medications or hormonal disorders (like hyperparathyroidism)</li>
          </ul>
          <p>Identifying and addressing these causes can significantly reduce the risk of recurrence.</p>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Symptoms",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div className="space-y-3">
          <p>Common symptoms that indicate the presence of kidney stones include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Severe pain in the back, sides, or lower abdomen</li>
            <li>Pain or burning sensation during urination</li>
            <li>Blood in urine (hematuria)</li>
            <li>Nausea or vomiting</li>
            <li>Frequent or urgent urination</li>
            <li>Cloudy or foul-smelling urine</li>
            <li>Fever or chills (if infection occurs)</li>
          </ul>
          <p>If you experience persistent pain or any of these symptoms, consult a urologist immediately for evaluation.</p>
        </div>
      ),
    },
    {
      value: "benefits",
      label: "Benefits",
      icon: <Stethoscope className="text-red-600" />,
      content: (
        <div className="space-y-3">
          <p>PureCheckup offers several benefits for patients undergoing kidney stone treatment:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimally invasive laser procedures with no major cuts</li>
            <li>Quick recovery — resume activities within 2–3 days</li>
            <li>Expert urologists with years of surgical experience</li>
            <li>Transparent, affordable packages with zero hidden costs</li>
            <li>Insurance assistance and cashless hospitalization</li>
            <li>Nationwide network of NABH-accredited hospitals</li>
            <li>Free consultation and 24×7 patient support</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Kidney Stone Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup is India’s trusted destination for advanced kidney stone treatments using modern laser and laparoscopic technologies.
      </p>
      <p>
        We connect patients with experienced urologists and NABH-accredited hospitals that specialize in minimally invasive procedures for all types of kidney stones.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Advanced laser and shock wave technologies</li>
        <li>Personalized treatment and post-surgery care plans</li>
        <li>Affordable pricing with insurance and EMI options</li>
        <li>Same-day discharge and quick recovery</li>
        <li>Available in major Indian cities including Delhi, Jaipur, Mumbai, and Bangalore</li>
      </ul>
      <p>
        With PureCheckup, your kidney stone treatment journey is safe, comfortable, and completely managed — from consultation to complete recovery.
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
    title: "Kidney Stone Surgery (Recommended)",
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
   
const KidneyStonesTreatment = () => {
    return (
        <>
            <ConditionHeroSection
            title="Kidney Stone Laser Treatment & Surgery in India – Safe, Affordable & Expert Care"
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
                title2={kidneyStoneData.title1}
                description={kidneyStoneData.description}
                tabsData={kidneyStoneData.tabsData}
                expertHeading= "Expert Kidney Stone Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={kidneyStoneData.doctorDescription}
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
                treatmentName="Kidney Stone"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Kidney Stone",
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

export default KidneyStonesTreatment;