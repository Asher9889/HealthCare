import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of vasectomy surgery treatment in India?",
    answer:
      "The cost depends on the hospital, city, surgeon’s expertise, and procedure type (conventional, no-scalpel, or laser). Contact PureCheckup for a personalized estimate.",
  },
  {
    id: "two",
    question: "Does insurance cover vasectomy surgery treatment?",
    answer:
      "Most insurance plans may not cover vasectomy as it is elective. PureCheckup can verify if partial coverage or related medical consultations are included.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best vasectomy treatment in India?",
    answer:
      "PureCheckup partners with top-rated hospitals and certified urologists to ensure safe, advanced surgical care with expert post-operative support.",
  },
  {
    id: "four",
    question: "How to book a vasectomy surgery treatment with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit PureCheckup.com</li>
          <li>Choose “Vasectomy Surgery”</li>
          <li>Fill the consultation form</li>
          <li>Our care team schedules your specialist appointment</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment method for vasectomy surgery?",
    answer:
      "No-Scalpel Vasectomy (NSV) and Laser Vasectomy are advanced, minimally invasive, painless methods with faster recovery.",
  },
  {
    id: "six",
    question: "What are the first signs of recovery after vasectomy surgery?",
    answer:
      "Mild swelling, tenderness, or slight bruising is normal and usually subsides within a few days with rest and prescribed medication.",
  },
  {
    id: "seven",
    question: "How painful is vasectomy surgery treatment?",
    answer:
      "Modern vasectomy procedures are virtually painless due to local anesthesia and minimally invasive techniques. Mild discomfort resolves quickly.",
  },
  {
    id: "eight",
    question: "How long does it take to recover from vasectomy surgery?",
    answer:
      "Most men resume work within 1–2 days. Full healing and confirmation of sterility usually take 8–12 weeks.",
  },
  {
    id: "nine",
    question: "Can vasectomy surgery be reversed?",
    answer:
      "Vasectomy reversal (vasovasostomy) is possible in some cases, but success rates vary. Discuss options with a urology specialist before proceeding.",
  },
  {
    id: "ten",
    question: "What precautions should be taken after vasectomy surgery?",
    answer:
      "Avoid heavy lifting, sexual activity, or strenuous exercise for a few days and follow your doctor’s instructions for optimal recovery.",
  },
];

const vasectomyData = {
  title1: "Vasectomy Surgery ?",
  title2: "Permanent Male Birth Control",
  description:
    "Vasectomy surgery is a safe, simple, and permanent male contraceptive procedure that prevents sperm from mixing with semen. PureCheckup offers advanced conventional, no-scalpel, and laser vasectomy methods for minimal pain, quick recovery, and effective family planning.",

  tabsData: [
    {
      value: "what-is-vasectomy",
      label: "What is Vasectomy Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Vasectomy involves cutting or sealing the vas deferens, preventing sperm from mixing with semen. Sexual performance, hormone levels, and drive remain unaffected.
          </p>
          <p>
            Modern procedures are minimally invasive, painless, and completed in 15–30 minutes under local anesthesia.
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
          <p>Types of vasectomy surgery in India:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Conventional Vasectomy:</strong> Small scrotal incision to access and seal the vas deferens.</li>
            <li><strong>No-Scalpel Vasectomy (NSV):</strong> Minimally invasive puncture technique; faster recovery, no stitches.</li>
            <li><strong>Laser Vasectomy:</strong> Latest laser technology for precise sealing with minimal bleeding and rapid healing.</li>
          </ul>
        </div>
      ),
    },
    {
      value: "causes",
      label: "Reasons for Vasectomy",
      icon: <Pill className="text-purple-600" />,
      content: (
        <div className="space-y-3">
          <p>Common reasons men choose vasectomy:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent contraception</li>
            <li>Completion of family goals</li>
            <li>Partner unable to use or tolerate female birth control</li>
            <li>Health conditions making pregnancy risky</li>
            <li>Preference for one-time, long-term solution</li>
          </ul>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Indications for Surgery",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div className="space-y-3">
          <p>Situations indicating vasectomy suitability:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Decision for no more children</li>
            <li>Medical recommendation to avoid further pregnancies</li>
            <li>Repeated failure or side effects from temporary birth control</li>
            <li>Personal choice for stress-free family planning</li>
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
          <p>Benefits of vasectomy surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent & reliable contraception (99.9% effective)</li>
            <li>Quick recovery (1–2 days)</li>
            <li>No impact on hormones or sexual function</li>
            <li>Minimally invasive with reduced pain and swelling</li>
            <li>Cost-effective, one-time procedure</li>
            <li>Peace of mind and stress-free family planning</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Vasectomy Surgery – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup connects patients to top urologists and advanced surgical centers across India:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Experienced board-certified urologists</li>
        <li>Hassle-free booking and online consultation</li>
        <li>Post-surgery guidance and follow-ups</li>
        <li>Insurance support and cashless assistance</li>
        <li>Confidential and safe treatment</li>
      </ul>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/vasectomy",
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
    title: "Advanced Vasectomy Surgery (Recommended)",
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
   
const Vasectomy = () => {
    return (
        <>
            <ConditionHeroSection
            title="Vasectomy Surgery for Men (Male Sterilization): Modern, Quick & Effective Birth Control"
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
                title2={vasectomyData.title1}
                description={vasectomyData.description}
                tabsData={vasectomyData.tabsData}
                expertHeading= {vasectomyData.doctorName}
                doctorName="" 
                doctorDescription={vasectomyData.doctorDescription}
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
                treatmentName="Vasectomy"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Vasectomy",
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

export default Vasectomy;