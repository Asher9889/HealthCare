import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of laser circumcision surgery in India?",
    answer:
      "The cost of laser circumcision surgery in India varies depending on factors like hospital type, surgeon experience, and technology used. At PureCheckup, you get transparent pricing and full cost guidance during consultation.",
  },
  {
    id: "two",
    question: "Does insurance cover laser circumcision surgery treatment?",
    answer:
      "Yes, most health insurance providers cover circumcision surgery if it's medically necessary (such as phimosis or infection). However, cosmetic or elective cases may not be covered.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best laser circumcision at the best price?",
    answer:
      "PureCheckup provides India’s leading laser circumcision treatments performed by expert urologists using advanced technology, with affordable all-inclusive packages and complete post-surgery care.",
  },
  {
    id: "four",
    question: "How to book a laser circumcision surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking your laser circumcision surgery with PureCheckup is quick and simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/laser-circumcision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/laser-circumcision
            </a>
          </li>
          <li>Choose “Laser Circumcision” treatment</li>
          <li>Fill in your details or call our helpline at +91-9211930749</li>
        </ul>
        <p>Our team will schedule your consultation and guide you through diagnosis, insurance, and surgery planning.</p>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for circumcision?",
    answer:
      "Laser circumcision is considered the safest and most effective procedure, offering precision cutting, minimal bleeding, no stitches, and faster recovery compared to traditional methods.",
  },
  {
    id: "six",
    question: "What are the first signs that indicate circumcision is needed?",
    answer:
      "Signs that circumcision may be required include painful foreskin retraction, tight foreskin (phimosis), recurrent infections, redness, or pain during urination or sexual activity.",
  },
  {
    id: "seven",
    question: "How painful is laser circumcision surgery?",
    answer:
      "Laser circumcision is a painless, bloodless procedure performed under local anesthesia. Mild soreness may occur for 1–2 days but subsides quickly with proper care.",
  },
  {
    id: "eight",
    question: "How long does it take to recover after laser circumcision?",
    answer:
      "Most patients recover within 7–10 days and can resume normal activities within 1–2 days after surgery. Healing is quick and smooth with minimal downtime.",
  },
  {
    id: "nine",
    question: "Is laser circumcision safe for adults and children?",
    answer:
      "Yes, laser circumcision is a completely safe and advanced technique suitable for both adults and children. It involves minimal bleeding, no stitches, and quick recovery.",
  },
  {
    id: "ten",
    question: "Why choose PureCheckup for laser circumcision?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>PureCheckup is India’s trusted healthcare provider for laser circumcision, offering:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Expert urologists with years of experience</li>
          <li>Advanced, safe laser equipment</li>
          <li>Affordable all-inclusive packages</li>
          <li>Free consultations and post-surgery follow-ups</li>
          <li>Pan-India presence with NABH-accredited hospitals</li>
        </ul>
        <p>
          Book your surgery today at{" "}
          <a
            href="https://purecheckup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            purecheckup.com
          </a>{" "}
          or call +91-9211930749.
        </p>
      </div>
    ),
  },
];


const laserCircumcisionData = {
  title1: "Laser Circumcision ?",
  title2: "Treatment & Information",
  description:
    "Laser circumcision is a modern, minimally invasive surgery that removes the foreskin of the penis using advanced laser technology. Unlike traditional circumcision, it is bloodless, stitch-free, and ensures faster healing with minimal discomfort. At PureCheckup, we provide safe and effective laser circumcision performed by experienced urologists across India.",

  tabsData: [
    {
      value: "what-is-laser-circumcision",
      label: "What is Laser Circumcision ?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-2">
          <p>
            Laser Circumcision is a modern surgical method that removes the foreskin using precise laser energy instead of a blade. It is performed under local anesthesia and causes minimal pain or bleeding.
          </p>
          <p>
            The laser seals blood vessels instantly, making the procedure bloodless and stitch-free. Patients experience faster recovery and reduced risk of infection.
          </p>
          <p>
            At <strong>PureCheckup</strong>, our expert urologists use advanced laser equipment to perform circumcision safely and efficiently with same-day discharge.
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
          <p>In India, the following laser circumcision techniques are commonly performed:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>CO₂ Laser Circumcision:</strong> Uses a carbon dioxide laser for precise cutting with minimal tissue damage.
            </li>
            <li>
              <strong>Diode Laser Circumcision:</strong> Popular for its quick healing, minimal bleeding, and shorter downtime.
            </li>
            <li>
              <strong>Stapler Circumcision (Laser-Assisted):</strong> Combines laser and stapler technology for faster recovery and better cosmetic results.
            </li>
          </ul>
          <p>
            The choice of method depends on your medical condition, age, and surgeon’s recommendation. PureCheckup ensures personalized consultation to select the most suitable option.
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
          <p>Laser circumcision is usually recommended for the following medical and personal reasons:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phimosis:</strong> Tight foreskin that cannot be retracted over the glans.</li>
            <li><strong>Paraphimosis:</strong> Foreskin trapped behind the glans causing pain and swelling.</li>
            <li><strong>Recurrent infections:</strong> Such as balanitis or frequent urinary infections.</li>
            <li><strong>Cosmetic or hygiene reasons:</strong> For easier cleaning and improved appearance.</li>
            <li><strong>Religious or cultural reasons:</strong> Performed as part of traditional practices.</li>
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
          <p>Consult a urologist if you experience any of the following symptoms:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pain or discomfort while urinating</li>
            <li>Swelling or redness of the foreskin</li>
            <li>Difficulty retracting the foreskin</li>
            <li>Recurrent infections or foul odor</li>
            <li>Pain during sexual activity</li>
          </ul>
          <p>
            These symptoms may indicate medical conditions like phimosis or balanitis that can be effectively treated through laser circumcision.
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
          <p>Laser circumcision offers several advantages over conventional surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Painless and bloodless procedure</li>
            <li>No stitches or visible scars</li>
            <li>Quick recovery (7–10 days)</li>
            <li>Same-day discharge</li>
            <li>Minimal risk of infection</li>
            <li>Improved genital hygiene and appearance</li>
            <li>Permanent relief from foreskin problems</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Laser Circumcision Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At <strong>PureCheckup</strong>, we offer advanced laser circumcision treatments performed by expert urologists using the latest laser equipment.
      </p>
      <p>
        Our focus is on delivering a comfortable, confidential, and safe experience with personalized pre- and post-surgery care.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Free consultation with experienced urologists</li>
        <li>Modern laser and ZSR stapler technology</li>
        <li>100% safe, daycare procedures</li>
        <li>Affordable packages with insurance assistance</li>
        <li>Post-surgery follow-ups and quick recovery</li>
        <li>Available in all major Indian cities – Delhi, Mumbai, Jaipur, and more</li>
      </ul>
      <p>
        Book your <strong>Laser Circumcision Surgery</strong> today at{" "}
        <a
          href="https://purecheckup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          purecheckup.com
        </a>{" "}
        or call <strong>+91-9211930749</strong>.
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
   
const LaserCircumcision = () => {
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
                title2={laserCircumcisionData.title1}
                description={laserCircumcisionData.description}
                tabsData={laserCircumcisionData.tabsData}
                expertHeading= "Expert Laser Circumcision Surgery – PureCheckup" 
                doctorName="" 
                doctorDescription={laserCircumcisionData.doctorDescription}
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
                treatmentName="Laser Circumcision"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Laser Circumcision",
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

export default LaserCircumcision;