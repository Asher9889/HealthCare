import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of balanoposthitis surgery treatment in India?",
    answer:
      "The cost varies depending on the procedure type and hospital. PureCheckup provides personalized cost estimates tailored to each patient’s needs.",
  },
  {
    id: "two",
    question: "Does insurance cover balanoposthitis surgery treatment?",
    answer:
      "Yes, most major health insurance plans cover balanoposthitis surgery. PureCheckup assists with insurance verification and smooth claim processing.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best treatment at the best price?",
    answer:
      "PureCheckup connects patients with top-rated urologists and hospitals across India, ensuring quality care at competitive prices with comprehensive support.",
  },
  {
    id: "four",
    question: "How to book a balanoposthitis treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking balanoposthitis surgery with PureCheckup is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/balanoposthitis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/balanoposthitis
            </a>
          </li>
          <li>Fill in your details or call our 24×7 helpline at +91-9211930749</li>
          <li>Our care team will schedule a consultation with an expert urologist</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for balanoposthitis surgery?",
    answer:
      "The best treatment depends on your condition. Options include circumcision or preputioplasty, as recommended by expert surgeons after proper diagnosis.",
  },
  {
    id: "six",
    question: "What are the first signs of a balanoposthitis surgical treatment?",
    answer:
      "Early signs include redness, swelling, itching, pain or discomfort during urination. Immediate consultation can prevent complications.",
  },
  {
    id: "seven",
    question: "How painful is balanoposthitis surgery treatment?",
    answer:
      "The procedure is minimally invasive, performed under local or general anesthesia. Post-surgery discomfort is minimal and manageable.",
  },
  {
    id: "eight",
    question: "Is balanoposthitis surgery safe for all ages?",
    answer:
      "Yes, it is safe for both children and adults when performed by experienced urologists with proper care and monitoring.",
  },
  {
    id: "nine",
    question: "How long is the recovery after balanoposthitis surgery?",
    answer:
      "Most patients recover within 1–2 weeks, depending on the procedure type, with follow-up care and guidance from PureCheckup specialists.",
  },
  {
    id: "ten",
    question: "Can balanoposthitis recur after surgery?",
    answer:
      "Recurrence is rare when proper hygiene is maintained and post-surgery care instructions are followed.",
  },
];

const balanoposthitisData = {
  title1: "Balanoposthitis ?",
  title2: "Surgery & Information",
  description:
    "Balanoposthitis surgery treats inflammation or infection of the glans penis and foreskin. PureCheckup provides safe, minimally invasive treatment with expert urologists, fast recovery, and complete post-surgery guidance.",

  tabsData: [
    {
      value: "what-is-balanoposthitis",
      label: "What is Balanoposthitis Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Balanoposthitis surgery is performed to treat inflammation or infection of the glans penis and foreskin that does not respond to medications or conservative treatment.
          </p>
          <p>
            The surgery restores normal function, prevents recurrent infections, and improves overall penile health using safe, minimally invasive techniques.
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
          <p>Types of balanoposthitis surgery performed in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Circumcision:</strong> Complete removal of the foreskin to prevent recurrent infections.</li>
            <li><strong>Preputioplasty:</strong> Foreskin-preserving procedure for mild to moderate inflammation.</li>
            <li><strong>Frenuloplasty:</strong> Corrects tight frenulum contributing to balanoposthitis.</li>
            <li><strong>Debridement & Antibiotic Therapy:</strong> For severe infection prior to surgical intervention.</li>
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
          <p>Balanoposthitis surgery is required when caused by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Poor personal hygiene</li>
            <li>Recurrent bacterial or fungal infections</li>
            <li>Diabetes or immune system disorders</li>
            <li>Allergic reactions to soaps or chemicals</li>
            <li>Tight foreskin (Phimosis) causing discomfort or infections</li>
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
          <p>Signs indicating the need for balanoposthitis surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Redness and swelling of the glans and foreskin</li>
            <li>Pain or discomfort during urination</li>
            <li>Persistent itching or burning sensation</li>
            <li>Foul-smelling discharge</li>
            <li>Difficulty retracting the foreskin</li>
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
          <p>Benefits of balanoposthitis surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent relief from recurrent infections</li>
            <li>Improved hygiene and penile health</li>
            <li>Enhanced comfort during urination and sexual activity</li>
            <li>Minimal risk of recurrence with proper aftercare</li>
            <li>Fast recovery using modern minimally invasive techniques</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Balanoposthitis Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup provides expert balanoposthitis surgery with certified urologists using advanced, minimally invasive techniques for safe and effective treatment.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by experienced urologists and surgeons</li>
        <li>Minimally invasive and pain-minimized procedures</li>
        <li>Fast recovery period</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Available in major cities across India</li>
      </ul>
      <p>
        Trust PureCheckup for professional, confidential, and high-quality balanoposthitis treatment tailored to your needs.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/balanoposthitis",
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
    title: "Advanced Balanoposthitis Surgery (Recommended)",
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
   
const Balanoposthitis = () => {
    return (
        <>
            <ConditionHeroSection
            title="Comprehensive Balanoposthitis Treatment – Causes, Symptoms & Expert Surgery"
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
                title2={balanoposthitisData.title1}
                description={balanoposthitisData.description}
                tabsData={balanoposthitisData.tabsData}
                expertHeading= {balanoposthitisData.doctorName} 
                doctorName="" 
                doctorDescription={balanoposthitisData.doctorDescription}
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
                treatmentName="Balanoposthitis"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Balanoposthitis",
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

export default Balanoposthitis;