import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is the cost of frenuloplasty surgery in India?",
    answer:
      "The cost of frenuloplasty surgery depends on the type of procedure, hospital, and patient requirements. Contact PureCheckup for detailed guidance and personalized estimates.",
  },
  {
    id: "two",
    question: "Does insurance cover frenuloplasty surgery?",
    answer:
      "Yes, PureCheckup accepts all major insurance policies and assists patients with smooth claim processing for hassle-free treatment.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best frenuloplasty treatment?",
    answer:
      "PureCheckup provides expert frenuloplasty surgery in India, combining skilled surgeons, advanced techniques, and full insurance coverage for safe and effective outcomes.",
  },
  {
    id: "four",
    question: "How can I book a frenuloplasty surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking frenuloplasty surgery with PureCheckup is easy:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/frenuloplasty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/frenuloplasty
            </a>
          </li>
          <li>Fill in your details or call our 24×7 helpline at +91-9211930749</li>
          <li>Our team will schedule a consultation with an expert surgeon</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for frenuloplasty surgery?",
    answer:
      "Expert surgical intervention under the guidance of certified surgeons ensures safe, effective, and precise results for all types of frenuloplasty procedures.",
  },
  {
    id: "six",
    question: "What are the first signs that indicate frenuloplasty surgery is needed?",
    answer:
      "Early signs include difficulty in speech, limited tongue or lip movement, pain, tearing, and discomfort in oral or genital areas.",
  },
  {
    id: "seven",
    question: "How painful is frenuloplasty surgery?",
    answer:
      "Frenuloplasty is minimally invasive, often performed under local anesthesia, making it almost painless with minimal discomfort post-surgery.",
  },
  {
    id: "eight",
    question: "How long is the recovery period after frenuloplasty surgery?",
    answer:
      "Most patients recover fully within 1–2 weeks, depending on the type and extent of the procedure.",
  },
  {
    id: "nine",
    question: "Are there any risks associated with frenuloplasty surgery?",
    answer:
      "Minimal risks exist. PureCheckup’s surgeons ensure safe procedures with negligible complications and close post-operative monitoring.",
  },
  {
    id: "ten",
    question: "Can children undergo frenuloplasty surgery?",
    answer:
      "Yes, children can safely undergo frenuloplasty, especially for tongue-tie correction to improve feeding, speech, and oral function.",
  },
];


const frenuloplastyData = {
  title1: "Frenuloplasty ?",
  title2: "Surgery & Information",
  description:
    "Frenuloplasty surgery is a corrective procedure to release a short or tight frenulum, improving mobility, speech, comfort, and functionality. PureCheckup offers expert frenuloplasty treatment in India using advanced surgical techniques, ensuring minimal pain, faster recovery, and high-quality care with insurance support.",

  tabsData: [
    {
      value: "what-is-frenuloplasty",
      label: "What is Frenuloplasty?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Frenuloplasty is a surgical procedure that releases a tight or short frenulum, the small fold of tissue connecting the tongue, lips, or genital area to underlying structures. 
          </p>
          <p>
            It helps improve speech, oral mobility, and comfort, preventing complications such as restricted movement, pain, or functional difficulties.
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
          <p>Frenuloplasty procedures offered in India include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Tongue Frenuloplasty:</strong> Corrects tongue-tie for improved speech and oral function.</li>
            <li><strong>Labial Frenuloplasty:</strong> Treats tight labial frenulum to prevent gum recession and discomfort.</li>
            <li><strong>Genital Frenuloplasty:</strong> Relieves tension in the genital frenulum to enhance comfort and prevent tearing.</li>
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
          <p>Frenuloplasty is recommended when the frenulum is:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Too short or tight, restricting movement of tongue, lips, or genital area</li>
            <li>Causing speech difficulties or impacting oral hygiene</li>
            <li>Leading to pain or discomfort during daily activities</li>
            <li>Creating functional problems such as difficulty breastfeeding or oral activities</li>
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
          <p>Signs indicating the need for frenuloplasty:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Difficulty in speech or articulation</li>
            <li>Limited tongue or lip movement</li>
            <li>Pain or tearing during eating or sexual activity</li>
            <li>Gum recession or oral hygiene issues</li>
            <li>Persistent discomfort in the frenulum area</li>
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
          <p>Frenuloplasty surgery provides multiple benefits:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved mobility of tongue, lips, or genital area</li>
            <li>Enhanced speech and oral functions</li>
            <li>Pain relief and prevention of tissue tearing</li>
            <li>Faster recovery with minimal complications</li>
            <li>Improved quality of life and comfort in daily activities</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Frenuloplasty Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup offers expert frenuloplasty surgery across India with certified surgeons, modern techniques, and personalized care.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by experienced surgeons for tongue, labial, and genital frenuloplasty</li>
        <li>Minimally invasive procedures ensuring minimal pain</li>
        <li>Short recovery period and fast healing</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Available in major cities across India</li>
      </ul>
      <p>
        Experience safe, professional, and effective frenuloplasty treatment with PureCheckup, tailored to your medical needs.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/frenuloplasty",
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
    title: "Frenuloplasty Surgery (Recommended)",
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
 
const Frenuloplasty = () => {
    return (
        <>
            <ConditionHeroSection
            title="Frenuloplasty Surgery for Tight & Short Frenulum – Expert, Safe & Fast Recovery in India"
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
                title2={frenuloplastyData.title1}
                description={frenuloplastyData.description}
                tabsData={frenuloplastyData.tabsData}
                expertHeading= "Expert Frenuloplasty Surgery Treatment – PureCheckup" 
                doctorName="" 
                doctorDescription={frenuloplastyData.doctorDescription}
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
                treatmentName="Frenuloplasty"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Frenuloplasty",
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

export default Frenuloplasty;