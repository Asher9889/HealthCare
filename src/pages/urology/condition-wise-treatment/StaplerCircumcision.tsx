import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of Stapler Circumcision surgery in India?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          The cost of stapler circumcision surgery in India depends on factors like hospital facilities,
          surgeon expertise, and city. Typically, it ranges from ₹20,000 to ₹60,000.
        </p>
        <p>
          <strong>PureCheckup.com</strong> ensures affordable stapler circumcision treatment with
          experienced surgeons, transparent pricing, and top-quality care across India.
        </p>
      </div>
    ),
  },
  {
    id: "two",
    question: "Does insurance cover Stapler Circumcision surgery treatment?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Yes, stapler circumcision surgery is often covered by health insurance, especially when performed for
          medical conditions like phimosis, pain, or recurrent infections.
        </p>
        <p>
          <strong>PureCheckup</strong> assists patients with insurance verification, eligibility checks,
          and smooth cashless claims.
        </p>
      </div>
    ),
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best Stapler Circumcision surgery in India?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          <strong>PureCheckup.com</strong> is India’s leading healthcare platform for stapler circumcision
          surgery. We provide access to experienced urologists, advanced ZSR stapler technology, and
          personalized post-surgery care.
        </p>
        <p>Our success rates, modern equipment, and patient-first approach make us a trusted choice nationwide.</p>
      </div>
    ),
  },
  {
    id: "four",
    question: "How to book a Stapler Circumcision surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking a stapler circumcision surgery with PureCheckup is simple and quick:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/stapler-circumcision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/stapler-circumcision
            </a>
          </li>
          <li>Fill in your details or select “Book Appointment.”</li>
          <li>Or call our 24×7 helpline at <strong>+91-9211930749</strong> for a free consultation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment method for Stapler Circumcision?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          The <strong>ZSR stapler technique</strong> is currently the most effective and safe circumcision method.
          It ensures minimal bleeding, faster healing, and precise results.
        </p>
        <p>
          PureCheckup’s surgeons specialize in this technique to deliver a painless and aesthetically
          superior outcome.
        </p>
      </div>
    ),
  },
  {
    id: "six",
    question: "What are the first signs that indicate a need for Stapler Circumcision?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <ul className="list-disc list-inside space-y-1">
          <li>Tight foreskin that cannot retract (Phimosis)</li>
          <li>Pain during urination or sexual activity</li>
          <li>Recurrent infections or inflammation (Balanitis)</li>
          <li>Swelling, redness, or poor hygiene due to tight foreskin</li>
        </ul>
        <p>
          If you experience these, consult PureCheckup’s doctors for accurate diagnosis and treatment.
        </p>
      </div>
    ),
  },
  {
    id: "seven",
    question: "How painful is Stapler Circumcision surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Stapler circumcision is a <strong>nearly painless procedure</strong> performed under local anesthesia.
          Patients may feel mild discomfort for a day or two, which quickly subsides.
        </p>
        <p>
          PureCheckup surgeons ensure a comfortable, smooth recovery experience for every patient.
        </p>
      </div>
    ),
  },
  {
    id: "eight",
    question: "What is the recovery time after Stapler Circumcision surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Most patients recover within <strong>7–10 days</strong> and can return to normal activities soon after.
          Proper hygiene and following post-surgery care instructions ensure optimal healing.
        </p>
        <p>
          PureCheckup offers <strong>24/7 patient support</strong> for post-surgery guidance and follow-ups.
        </p>
      </div>
    ),
  },
  {
    id: "nine",
    question: "Are there any risks or side effects of Stapler Circumcision?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Stapler circumcision is a safe, minimally invasive procedure when performed by trained surgeons.
          Minor swelling or redness may occur but heals quickly with proper care.
        </p>
        <p>
          Choosing <strong>PureCheckup</strong> ensures advanced facilities, expert doctors, and minimal
          complications.
        </p>
      </div>
    ),
  },
  {
    id: "ten",
    question: "Is Stapler Circumcision suitable for all age groups?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>
          Yes, stapler circumcision is safe for both <strong>children and adults</strong>. Each procedure is done
          after a thorough medical evaluation to ensure maximum safety and comfort.
        </p>
        <p>
          PureCheckup doctors customize treatment according to patient age and condition for best outcomes.
        </p>
      </div>
    ),
  },
];


const staplerCircumcisionData = {
  title1: "Stapler Circumcision ?",
  title2: "Surgery & Information",
  description:
    "Stapler circumcision is a modern, minimally invasive surgical technique that utilizes a specialized stapling device, such as the ZSR stapler, to remove the foreskin. This method offers several advantages over traditional circumcision, including reduced bleeding, shorter recovery time, and minimal discomfort. The procedure is performed under local anesthesia, ensuring patient comfort and safety.",

  tabsData: [
    {
      value: "what-is-stapler-circumcision",
      label: "What is Stapler Circumcision ?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-2">
          <p>
            Stapler circumcision is an advanced surgical procedure that removes the foreskin using a specialized
            stapling device, such as the ZSR stapler. It is a quick, precise, and minimally invasive technique designed
            to reduce pain, bleeding, and recovery time.
          </p>
          <p>
            The stapler simultaneously cuts and seals the tissue, minimizing blood loss and ensuring a uniform, clean
            finish. The procedure is typically performed under local anesthesia for maximum comfort.
          </p>
          <p>
            At PureCheckup, our expert urologists perform stapler circumcision using the latest medical technology in
            safe, sterile environments to ensure excellent results and patient satisfaction.
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
          <p>In India, stapler circumcision is primarily performed using the ZSR stapler method:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>ZSR Stapler Circumcision:</strong> A modern and efficient procedure that removes the foreskin with
              a circular stapling device. It offers high precision, minimal bleeding, and faster recovery compared to
              conventional methods.
            </li>
          </ul>
          <p>
            This method is suitable for both adults and children and is preferred for its quick procedure time,
            excellent cosmetic outcomes, and low complication rates.
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
          <p>Stapler circumcision is recommended for patients experiencing any of the following conditions:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Phimosis:</strong> When the foreskin is too tight to retract over the glans.
            </li>
            <li>
              <strong>Paraphimosis:</strong> A condition where the retracted foreskin cannot return to its normal
              position, requiring urgent medical attention.
            </li>
            <li>
              <strong>Recurrent Infections:</strong> Frequent infections such as balanitis or posthitis that do not
              respond to medication.
            </li>
            <li>
              <strong>Poor Hygiene:</strong> Difficulty maintaining cleanliness due to tight foreskin.
            </li>
            <li>
              <strong>Sexual Health Concerns:</strong> Conditions like premature ejaculation or erectile dysfunction
              associated with foreskin problems.
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
          <p>You may consider stapler circumcision if you notice the following symptoms:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pain or difficulty retracting the foreskin</li>
            <li>Swelling or redness around the penis head</li>
            <li>Frequent urinary tract infections</li>
            <li>Discomfort during sexual activity</li>
            <li>Recurrent inflammation or infection of the foreskin</li>
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
          <p>Stapler circumcision offers several key advantages over traditional methods:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimal blood loss due to simultaneous cutting and sealing</li>
            <li>Quick recovery – resume daily activities within a few days</li>
            <li>Reduced postoperative pain and swelling</li>
            <li>Clean, aesthetic, and uniform surgical results</li>
            <li>Lower risk of infection or complications</li>
            <li>Shorter surgery time and same-day discharge</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Stapler Circumcision Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, we specialize in stapler circumcision surgery using advanced ZSR stapler technology for
        precision and comfort. Our experienced urologists ensure safe, painless, and hygienic procedures in modern
        healthcare facilities across India.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Performed by board-certified urologists and surgeons</li>
        <li>Advanced ZSR stapler technology for minimal discomfort</li>
        <li>Same-day discharge and quick healing time</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Available across major Indian cities</li>
      </ul>
      <p>
        Choose PureCheckup for a seamless, safe, and professional stapler circumcision experience tailored to your
        medical needs.
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
   
const StaplerCircumcision = () => {
    return (
        <>
            <ConditionHeroSection
            title="Stapler Circumcision in India – Safe, Quick & Expert Care at PureCheckup"
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
                title2={staplerCircumcisionData.title1}
                description={staplerCircumcisionData.description}
                tabsData={staplerCircumcisionData.tabsData}
                expertHeading= "Expert Stapler Circumcision Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={staplerCircumcisionData.doctorDescription}
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
                treatmentName="Stapler Circumcision"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Stapler Circumcision",
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

export default StaplerCircumcision;