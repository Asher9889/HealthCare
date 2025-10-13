import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is the cost of appendicitis surgery in India?",
    answer:
      "The average appendectomy cost in India ranges between ₹35,000 to ₹80,000, depending on the hospital, surgeon experience, and type of surgery (laparoscopic or open). PureCheckup offers affordable surgery packages with no hidden charges.",
  },
  {
    id: "two",
    question: "Does insurance cover appendicitis surgery treatment?",
    answer:
      "Yes. Most health insurance plans cover appendicitis surgery, including hospital stays, anesthesia, and surgeon fees. PureCheckup’s medical coordinators help with cashless claim approval and complete insurance assistance.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best treatment at the best price?",
    answer:
      "PureCheckup is one of India’s leading healthcare service providers, offering expert laparoscopic and laser surgeons, modern hospital facilities, and transparent pricing for appendicitis treatment.",
  },
  {
    id: "four",
    question: "How to book appendicitis surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking your appendicitis surgery is simple and quick:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/appendicitis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/appendicitis
            </a>
          </li>
          <li>Fill out the consultation form</li>
          <li>Or call our 24×7 helpline to schedule a free consultation and same-day diagnosis</li>
        </ul>
        <p>Our team will assist with insurance, admission, and postoperative care for a smooth experience.</p>
      </div>
    ),
  },
  {
    id: "five",
    question: "How long does recovery take after appendectomy?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Recovery time depends on the type of surgery:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Laparoscopic surgery:</strong> 1–2 weeks
          </li>
          <li>
            <strong>Open surgery:</strong> 3–4 weeks
          </li>
        </ul>
        <p>Most patients resume normal activities quickly under doctor guidance.</p>
      </div>
    ),
  },
  {
    id: "six",
    question: "Is appendicitis surgery painful?",
    answer:
      "Modern laparoscopic and laser appendectomy techniques ensure minimal pain, tiny scars, and a faster recovery compared to traditional methods.",
  },
  {
    id: "seven",
    question: "Can appendicitis heal without surgery?",
    answer:
      "In rare cases, antibiotics may temporarily reduce inflammation, but surgery is the only permanent cure to prevent future infection or appendix rupture.",
  },
  {
    id: "eight",
    question: "Are there risks involved in appendectomy surgery?",
    answer:
      "Minor risks such as infection or bleeding can occur, but these are rare and minimized through PureCheckup’s advanced surgical technology and expert care.",
  },
  {
    id: "nine",
    question: "When should I see a doctor for appendicitis?",
    answer:
      "If you experience sudden pain in the lower right abdomen, nausea, vomiting, or fever, consult a PureCheckup surgeon immediately to avoid serious complications.",
  },
  {
    id: "ten",
    question: "Why choose PureCheckup for appendicitis surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <ul className="list-disc list-inside space-y-1">
          <li>Expert laparoscopic & laser surgeons</li>
          <li>Affordable surgery cost with full insurance support</li>
          <li>Fast admission, discharge & 24×7 assistance</li>
          <li>100% patient satisfaction & personalized care</li>
        </ul>
        <p>
          PureCheckup ensures safe, painless, and affordable appendicitis surgery at NABH-accredited hospitals across India.
        </p>
      </div>
    ),
  },
]

const appendectomyData = {
  title1: "Appendectomy",
  title2: "Treatment & Information",
  description:
    "Appendectomy is a surgical procedure performed to remove the appendix, a small, finger-shaped pouch attached to the large intestine. It’s typically required when a person develops appendicitis — an inflammation of the appendix caused by infection or blockage. At PureCheckup, our expert surgeons use advanced laparoscopic and laser-assisted techniques to ensure a painless, scar-free, and quick recovery experience for patients suffering from appendicitis.",

  tabsData: [
    {
      value: "what-is-appendectomy",
      label: "What is an Appendectomy?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div>
          <p>
            Appendectomy is the surgical removal of the appendix — a small pouch attached to the large intestine. This surgery becomes necessary when the appendix becomes inflamed or infected, a condition known as <strong>appendicitis</strong>.
          </p>
          <p className="mt-2">
            At PureCheckup, our skilled surgeons use minimally invasive laparoscopic and laser-assisted methods to provide a painless, scar-free, and quick recovery experience for patients.
          </p>
        </div>
      ),
    },
    {
      value: "types",
      label: "Types",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div className="space-y-4">
          <p>
            Depending on the severity of the appendicitis and the patient's condition, doctors recommend one of the following types of appendectomy:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Laparoscopic Appendectomy:</strong> A minimally invasive surgery using small incisions and a camera-guided approach for quick recovery, minimal scarring, and less postoperative pain.
            </li>

            <li>
              <strong>Open Appendectomy:</strong> A traditional surgery performed through a larger abdominal incision, usually in complicated or ruptured cases.
            </li>

            <li>
              <strong>Laser Appendectomy (Advanced Option at PureCheckup):</strong> A high-precision, modern surgery using laser technology that ensures minimal bleeding, less pain, and faster healing.
            </li>
          </ul>
        </div>
      ),
    },
    {
      value: "causes",
      label: "Causes",
      icon: <Pill className="text-purple-600" />,
      content: (
        <div>
          <p className="mb-4">
            Appendicitis develops when the appendix becomes blocked, which can occur due to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fecal matter or intestinal parasites</li>
            <li>Bacterial or viral infections</li>
            <li>Swelling of lymph nodes in the intestines</li>
            <li>Abdominal trauma or inflammation</li>
          </ul>
          <p className="mt-2">
            If untreated, the appendix can rupture, leading to peritonitis — a life-threatening infection — making timely surgery essential.
          </p>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Symptoms",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div>
          <p className="mb-4">
            Recognizing appendicitis early can prevent complications. Common symptoms include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sudden sharp pain in the lower right abdomen</li>
            <li>Loss of appetite and nausea</li>
            <li>Fever or chills</li>
            <li>Abdominal bloating or gas pain</li>
            <li>Vomiting or constipation</li>
          </ul>
          <p className="mt-2">
            If you experience these symptoms, consult PureCheckup’s surgical experts immediately for a safe diagnosis and timely treatment.
          </p>
        </div>
      ),
    },
    {
      value: "benefits",
      label: "Benefits",
      icon: <Stethoscope className="text-red-600" />,
      content: (
        <div>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent relief from abdominal pain and infection</li>
            <li>Prevents appendix rupture and peritonitis</li>
            <li>Quick discharge — most patients go home within 24 hours</li>
            <li>Advanced laparoscopic and laser techniques for faster healing</li>
            <li>Insurance-covered and affordable packages</li>
            <li>24x7 support and postoperative care from PureCheckup experts</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Appendectomy Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, we combine cutting-edge surgical technology with highly experienced laparoscopic and laser surgeons to provide the best outcomes for appendicitis patients.
      </p>
      <p>
        Our NABH-accredited partner hospitals ensure safety, hygiene, and a patient-friendly environment. From consultation to recovery, we make your journey smooth and worry-free.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Free doctor consultation</li>
        <li>Hassle-free insurance approval</li>
        <li>Same-day admission and discharge</li>
        <li>Post-surgery follow-up and 24x7 support</li>
      </ul>
      <p>
        Choose PureCheckup for a safe, painless, and affordable appendectomy surgery with expert care and faster recovery.
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
    title: "Laser Appendicitis Surgery (Recommended)",
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
 
const AppendicitisTreatment = () => {

    return (
        <>
            <ConditionHeroSection
            title="Appendicitis Surgery  – Cost, Symptoms, Types & Expert Appendectomy"
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
                title2="Appendectomy?"
                description={appendectomyData.description}
                tabsData={appendectomyData.tabsData}
                expertHeading= "Expert Appendectomy Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={appendectomyData.doctorDescription}
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
                treatmentName="Appendicitis"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Appendicitis",
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

export default AppendicitisTreatment;