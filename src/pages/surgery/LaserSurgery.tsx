import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of laser surgery treatment in India?",
    answer:
      "The cost of laser surgery in India depends on your condition, procedure type, and city. At PureCheckup, we offer affordable, transparent pricing and free consultations to discuss your treatment plan.",
  },
  {
    id: "two",
    question: "Does insurance cover laser surgery treatment?",
    answer:
      "Yes, most laser surgeries at PureCheckup are covered under leading health insurance plans. Our dedicated insurance team assists patients with cashless approval and claim processing.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best laser surgery treatment in India?",
    answer:
      "PureCheckup is among India’s most trusted healthcare providers, offering advanced laser surgery treatments performed by experienced specialists using world-class equipment.",
  },
  {
    id: "four",
    question: "How to book a laser surgery with PureCheckup?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>Booking your laser surgery at PureCheckup is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit our official website – PureCheckup.com</li>
          <li>Fill out the consultation or contact form</li>
          <li>Our care team will call to schedule your appointment</li>
          <li>We assist with consultation, insurance, and hospital selection</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for laser surgery?",
    answer:
      "The best laser surgery treatment depends on your medical condition. At PureCheckup, doctors personalize every plan based on diagnosis and health history for safe and fast recovery.",
  },
  {
    id: "six",
    question: "What are the first signs that may require laser surgery?",
    answer:
      "Common signs include chronic pain, swelling, bleeding, or infection that doesn’t improve with medication. PureCheckup’s specialists assess your symptoms to recommend the right laser procedure.",
  },
  {
    id: "seven",
    question: "How painful is laser surgery treatment?",
    answer:
      "Laser surgeries at PureCheckup are nearly painless due to advanced anesthesia and precision laser systems. Most patients experience minimal discomfort and resume activities quickly.",
  },
  {
    id: "eight",
    question: "How long does it take to recover after laser surgery?",
    answer:
      "Most PureCheckup patients recover within 24 to 72 hours after surgery. Our expert team provides personalized aftercare to ensure a smooth healing process.",
  },
  {
    id: "nine",
    question: "Is laser surgery safe for all age groups?",
    answer:
      "Yes. Laser treatments at PureCheckup are safe for most age groups when performed by certified surgeons. Every treatment plan is customized to ensure maximum safety and results.",
  },
  {
    id: "ten",
    question: "Why is laser surgery better than traditional surgery?",
    answer:
      "Laser surgery is safer, faster, and more precise. Patients benefit from no stitches, minimal bleeding, less infection risk, and faster recovery — making it a superior modern alternative to traditional surgery.",
  },
];

const laserSurgeryData = {
  title1: "Laser Surgery?",
  title2: "Advanced Minimally Invasive Surgical Treatments",
  description:
    "Laser surgery uses focused laser light to treat or remove tissues with extreme precision. It ensures minimal pain, reduced bleeding, and faster recovery — making it a preferred choice for modern treatments in proctology, urology, gynecology, dermatology, and cosmetic care.",

  tabsData: [
    {
      value: "what-is-laser-surgery",
      label: "What is Laser Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Laser surgery is a modern, minimally invasive medical procedure that
            uses focused laser light to treat, repair, or remove tissues with
            utmost precision. It offers pain-free, scar-free, and quick recovery
            treatments across various specialties.
          </p>
          <p>
            At PureCheckup, we use advanced laser technology to treat conditions
            such as piles, fissures, fistula, varicose veins, circumcision,
            hernia, and gallbladder issues — ensuring minimal bleeding and rapid
            healing.
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
            <li>
              <strong>Proctology Laser Surgeries:</strong> Treatment for piles,
              fissure, and fistula — painless, stitch-free, and same-day
              discharge.
            </li>
            <li>
              <strong>Urology Laser Surgeries:</strong> Laser circumcision,
              kidney stone removal, and prostate surgery.
            </li>
            <li>
              <strong>Gynecology Laser Surgeries:</strong> Vaginal tightening,
              ovarian cyst removal, and endometriosis treatment.
            </li>
            <li>
              <strong>Cosmetic & Aesthetic Surgeries:</strong> Skin
              resurfacing, hair/tattoo removal, scar revision, and acne scar
              therapy.
            </li>
            <li>
              <strong>General & Laparoscopic Laser Surgeries:</strong> Laser
              hernia repair, gallbladder removal, and varicose vein treatment.
            </li>
          </ul>
          <p>
            All procedures at PureCheckup are performed by certified surgeons
            using FDA-approved equipment for maximum safety and precision.
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
          <ul className="list-disc list-inside space-y-2">
            <li>Chronic infections or inflammation</li>
            <li>Genetic or hereditary disorders</li>
            <li>Obesity and sedentary lifestyle</li>
            <li>Hormonal imbalances</li>
            <li>Tissue injury or internal damage</li>
            <li>Abnormal tissue growth like cysts or piles</li>
          </ul>
          <p>
            Our experts assess each case individually to identify the root cause
            and design a laser-based treatment plan for long-term results.
          </p>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Symptoms / Signs",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div className="space-y-3">
          <ul className="list-disc list-inside space-y-2">
            <li>Persistent pain, swelling, or bleeding</li>
            <li>Chronic infection or discharge from the affected area</li>
            <li>Lumps, bulges, or visible swelling (hernia, varicose veins)</li>
            <li>Burning or discomfort during urination or bowel movement</li>
            <li>Non-healing wounds or scars</li>
            <li>Irregularities like moles, warts, or cysts</li>
          </ul>
          <p>
            Our PureCheckup team uses advanced imaging and diagnostics before
            recommending surgery to ensure safe and accurate treatment.
          </p>
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
            <li>Painless and bloodless procedures</li>
            <li>No stitches required — faster healing</li>
            <li>Day-care treatments with same-day discharge</li>
            <li>Return to normal life within 24–48 hours</li>
            <li>Laser precision ensures minimal tissue damage</li>
            <li>Lower infection risk with sterile, contact-free methods</li>
            <li>Better cosmetic results for all surgical types</li>
          </ul>
          <p>
            At PureCheckup, we focus on comfort, speed, and lasting medical
            outcomes through modern laser innovation.
          </p>
        </div>
      ),
    },
  ],

  doctorName: "Expert Laser Surgery Treatment – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup leads India’s laser surgery revolution with cutting-edge
        technology and world-class specialists.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Certified and experienced laser surgeons</li>
        <li>Advanced operation theatres with global safety standards</li>
        <li>Cashless insurance support for major policies</li>
        <li>Free consultation and pre-surgery evaluation</li>
        <li>Post-surgery follow-ups and complete recovery support</li>
      </ul>
      <p>
        Our mission is to make advanced healthcare accessible, affordable, and
        pain-free — because at PureCheckup, healthcare should heal, not hurt.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/laser-surgery",
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
    title: "Advanced Laser Surgery (Recommended)",
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
   
const LaserSurgery = () => {
    return (
        <>
            <ConditionHeroSection
            title="Advanced Laser Surgery for Painless, Scar-Free & Quick Recovery"
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
                title2={laserSurgeryData.title1}
                description={laserSurgeryData.description}
                tabsData={laserSurgeryData.tabsData}
                expertHeading= {laserSurgeryData.doctorName}
                doctorName="" 
                doctorDescription={laserSurgeryData.doctorDescription}
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
                treatmentName="Laser Surgery"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Laser Surgery",
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

export default LaserSurgery;
