import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is the cost of Circumcision surgery in India?",
    answer:
      "The cost of circumcision surgery in India varies based on the technique used, hospital type, and surgeon’s expertise. Typically, it ranges from ₹15,000 to ₹50,000. PureCheckup offers affordable treatment plans customized to each patient’s needs and city.",
  },
  {
    id: "two",
    question: "Does insurance cover Circumcision surgery treatment?",
    answer:
      "Yes, most health insurance providers cover circumcision surgery when performed for medical reasons such as phimosis or recurrent infections. PureCheckup assists patients with insurance verification, cashless approval, and reimbursement support.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best treatment at the best price?",
    answer:
      "PureCheckup partners with India’s top hospitals and expert urologists to provide high-quality circumcision surgery at affordable prices. We ensure transparency in cost, zero hidden charges, EMI options, and complete post-surgery care.",
  },
  {
    id: "four",
    question: "How to book Circumcision surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking your Circumcision surgery with PureCheckup is simple and hassle-free:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/circumcision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/circumcision
            </a>
          </li>
          <li>Search for Circumcision Surgery</li>
          <li>Fill in your details or call our 24×7 helpline at +91-9211930749</li>
        </ul>
        <p>
          Our care team will schedule your consultation with an expert urologist and guide you through insurance and
          pre-surgery assistance.
        </p>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for Circumcision?",
    answer:
      "The best treatment method depends on the patient’s medical condition and foreskin anatomy. Laser and ZSR (Stapler) circumcision are the most advanced, offering minimal bleeding, quick healing, and excellent cosmetic outcomes.",
  },
  {
    id: "six",
    question: "What are the first signs that may indicate the need for Circumcision?",
    answer:
      "Early signs include pain during urination, swelling, redness, tight foreskin (phimosis), or repeated infections under the foreskin. These symptoms should be evaluated by a urologist to determine if circumcision is necessary.",
  },
  {
    id: "seven",
    question: "How painful is Circumcision surgery?",
    answer:
      "Circumcision is performed under local or general anesthesia, making it virtually painless. Mild post-surgery discomfort can occur but is easily managed with prescribed medications. Most patients recover comfortably within a few days.",
  },
  {
    id: "eight",
    question: "Is Circumcision surgery safe?",
    answer:
      "Yes, circumcision is a safe and routine procedure when performed by qualified surgeons in a sterile environment. PureCheckup’s partner hospitals follow strict safety protocols to minimize risks and ensure faster recovery.",
  },
  {
    id: "nine",
    question: "What is the recovery time after Circumcision?",
    answer:
      "Recovery usually takes around 7–10 days. Most individuals can resume light activities within a week and return to normal routine in about two weeks. Healing time may vary based on the surgical technique and aftercare.",
  },
  {
    id: "ten",
    question: "Are there any long-term benefits of Circumcision?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Yes, circumcision provides several long-term health and hygiene benefits, including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Reduced risk of urinary tract and penile infections</li>
          <li>Easier genital hygiene and cleanliness</li>
          <li>Prevention of phimosis and balanitis</li>
          <li>Lower risk of certain sexually transmitted infections (STIs)</li>
        </ul>
        <p>
          For more information or to schedule a consultation, visit{" "}
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


const circumcisionData = {
  title1: "Circumcision",
  title2: "Surgery & Information",
  description:
    "Circumcision is a surgical procedure that involves the removal of the foreskin, the skin covering the head of the penis. It is performed for medical, cultural, or religious reasons. The surgery is usually quick and safe, performed under local or general anesthesia. At PureCheckup, our expert surgeons ensure a painless and hygienic experience using the latest techniques for faster healing and minimal discomfort.",

  tabsData: [
    {
      value: "what-is-circumcision",
      label: "What is Circumcision?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-2">
          <p>
            Circumcision is a surgical procedure that removes the foreskin — the loose fold of skin covering the head (glans) of the penis. It is one of the most common surgical procedures performed globally.
          </p>
          <p>
            The procedure can be done for medical reasons such as phimosis, or due to cultural and religious traditions. It is usually performed under local or general anesthesia, depending on age and health conditions.
          </p>
          <p>
            At PureCheckup, experienced urologists perform circumcision using advanced, minimally invasive methods to ensure patient safety, faster recovery, and minimal scarring.
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
          <p>There are several types of circumcision surgeries performed in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Conventional Circumcision:</strong> The traditional method involving manual removal of the foreskin using surgical instruments.
            </li>
            <li>
              <strong>Laser Circumcision:</strong> Uses laser technology for precise cutting, resulting in minimal bleeding, less pain, and faster recovery.
            </li>
            <li>
              <strong>ZSR (Stapler) Circumcision:</strong> A modern, stapler-based technique that ensures uniform removal of foreskin, reduced complications, and quicker healing.
            </li>
          </ul>
          <p>
            The choice of method depends on the patient’s condition, medical history, and surgeon’s recommendation.
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
          <p>Circumcision may be performed for the following reasons:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Phimosis:</strong> When the foreskin cannot be retracted over the glans penis.
            </li>
            <li>
              <strong>Recurrent Infections:</strong> Frequent urinary tract infections or balanitis.
            </li>
            <li>
              <strong>Poor Hygiene:</strong> Difficulty in maintaining cleanliness due to tight foreskin.
            </li>
            <li>
              <strong>Cultural or Religious Reasons:</strong> Common in many communities as a traditional or religious practice.
            </li>
            <li>
              <strong>Medical Advice:</strong> Recommended by healthcare professionals for specific conditions.
            </li>
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
          <p>
            You may need circumcision if you experience the following symptoms:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pain or discomfort during urination</li>
            <li>Recurrent infections under the foreskin</li>
            <li>Swelling or redness around the foreskin</li>
            <li>Inability to retract the foreskin (phimosis)</li>
            <li>Difficulty maintaining hygiene due to tight foreskin</li>
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
          <p>Circumcision surgery offers several medical and hygiene benefits:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduces risk of urinary tract infections</li>
            <li>Improves personal hygiene and cleanliness</li>
            <li>Prevents phimosis and related complications</li>
            <li>Decreases chances of penile inflammation (balanitis)</li>
            <li>Aligns with cultural and religious practices</li>
            <li>Quick healing and minimal scarring with modern techniques</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Circumcision Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, we provide expert circumcision surgery services across India, connecting patients with top urologists and experienced surgeons.
      </p>
      <p>
        Our doctors use advanced laser and stapler-based techniques to ensure a safe, painless, and quick recovery experience.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by experienced urologists and general surgeons</li>
        <li>Modern, minimally invasive surgical options</li>
        <li>Same-day discharge and fast healing</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Available in major cities across India</li>
      </ul>
      <p>
        Choose PureCheckup for a comfortable, safe, and professional circumcision experience tailored to your medical needs.
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
    title: "Laser Circumcision Surgery (Recommended)",
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
 
const CircumcisionTreatment = () => {
    return (
        <>
            <ConditionHeroSection
            title="Expert Circumcision Surgery in India – Safe, Affordable & Advanced Treatment"
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
                title2={circumcisionData.title1}
                description={circumcisionData.description}
                tabsData={circumcisionData.tabsData}
                expertHeading= "Expert Circumcision Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={circumcisionData.doctorDescription}
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
                treatmentName="Circumcision Surgery"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Circumcision Surgery",
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

export default CircumcisionTreatment;