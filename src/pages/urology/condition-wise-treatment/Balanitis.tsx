import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of balanitis surgery treatment in India?",
    answer:
      "The cost of balanitis surgery varies depending on hospital and procedure type. PureCheckup provides affordable and transparent treatment options customized to each patient’s needs.",
  },
  {
    id: "two",
    question: "Does insurance cover balanitis surgery treatment?",
    answer:
      "Yes, most major health insurance plans cover balanitis surgery. PureCheckup assists patients with insurance claim processing for a smooth, cashless experience.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best treatment at the best price?",
    answer:
      "PureCheckup connects you with top-rated urologists and hospitals across India, ensuring high-quality care at competitive prices with full insurance support.",
  },
  {
    id: "four",
    question: "How can I book a balanitis treatment surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking balanitis surgery with PureCheckup is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/balanitis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/balanitis
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
    question: "What is the best treatment for balanitis surgery?",
    answer:
      "The best treatment depends on severity and condition of the patient. Options include circumcision, frenuloplasty, laser surgery, or targeted tissue excision for effective relief.",
  },
  {
    id: "six",
    question: "What are the first signs indicating the need for balanitis surgery?",
    answer:
      "Persistent redness, swelling, pain during urination, foul discharge, or recurrent infections despite medication indicate the need for surgical evaluation.",
  },
  {
    id: "seven",
    question: "How painful is balanitis surgery treatment?",
    answer:
      "Modern minimally invasive and laser techniques minimize pain. Surgery is typically performed under local or regional anesthesia with manageable post-operative discomfort.",
  },
  {
    id: "eight",
    question: "Is balanitis surgery safe for all ages?",
    answer:
      "Yes, balanitis surgery is safe for adolescents and adults. Specialized care plans are available for older patients or those with medical conditions.",
  },
  {
    id: "nine",
    question: "How long is the recovery period after balanitis surgery?",
    answer:
      "Recovery usually takes 1–2 weeks. Patients may have minor restrictions on sexual activity and strenuous exercise during this period.",
  },
  {
    id: "ten",
    question: "Can balanitis recur after surgery?",
    answer:
      "Recurrence is rare when surgery is performed by experienced surgeons and patients follow proper post-operative care and hygiene guidelines.",
  },
];

const balanitisData = {
  title1: "Balanitis",
  title2: "Surgery & Information",
  description:
    "Balanitis surgery treats inflammation of the glans penis (balanitis), especially when medications fail. PureCheckup provides expert treatment using minimally invasive techniques for safe, effective, and fast recovery, with insurance coverage and personalized care.",

  tabsData: [
    {
      value: "what-is-balanitis",
      label: "What is Balanitis Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Balanitis surgery is performed to treat inflammation or infection of the glans penis that does not respond to medications or conservative treatments.
          </p>
          <p>
            The procedure removes infected tissue, relieves pain, and prevents recurrent infections, using modern minimally invasive techniques for faster recovery.
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
          <p>Types of balanitis surgery available in India include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Circumcision Surgery:</strong> Complete removal of the foreskin to prevent recurrent balanitis.</li>
            <li><strong>Frenuloplasty Surgery:</strong> Repair of a tight frenulum contributing to irritation and infection.</li>
            <li><strong>Topical Debridement or Excision:</strong> Removal of affected tissue in localized infections.</li>
            <li><strong>Laser Balanitis Surgery:</strong> Advanced method ensuring minimal pain and faster healing.</li>
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
          <p>Balanitis surgery is recommended when:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Chronic infections (bacterial, fungal, or viral)</li>
            <li>Poor hygiene or buildup under the foreskin</li>
            <li>Diabetes or immunocompromised conditions</li>
            <li>Foreskin abnormalities such as tight foreskin or phimosis</li>
            <li>Recurrent balanitis causing scar tissue or discomfort</li>
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
          <p>Signs indicating the need for balanitis surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Redness and swelling of the glans penis</li>
            <li>Pain or discomfort during urination or sexual activity</li>
            <li>Persistent discharge or foul odor</li>
            <li>Formation of scar tissue or lesions</li>
            <li>Recurring infections despite medications</li>
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
          <p>Balanitis surgery offers multiple benefits:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent relief from recurrent infections</li>
            <li>Reduction in pain and discomfort</li>
            <li>Improved hygiene and sexual health</li>
            <li>Minimally invasive options for faster recovery</li>
            <li>Covered under major health insurance plans</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Balanitis Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup provides expert balanitis surgery with certified urologists using modern, minimally invasive techniques for safe and fast recovery.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by experienced urologists and surgeons</li>
        <li>Minimally invasive and pain-minimized procedures</li>
        <li>Short recovery period</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Available in major cities across India</li>
      </ul>
      <p>
        Trust PureCheckup for professional, safe, and effective balanitis treatment tailored to your needs.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/balanitis",
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
    title: "Balanitis Surgery (Recommended)",
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
   
const Balanitis = () => {
    return (
        <>
            <ConditionHeroSection
            title="Painless Laser Circumcision Surgery in India | Safe, Stitch-Free & Affordable Treatment"
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
                title2={balanitisData.title1}
                description={balanitisData.description}
                tabsData={balanitisData.tabsData}
                expertHeading= "Expert Frenuloplasty Surgery Treatment – PureCheckup" 
                doctorName="" 
                doctorDescription={balanitisData.doctorDescription}
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

export default Balanitis;