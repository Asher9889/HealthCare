import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";


const faqs = [
    {
      id: "one",
      question: "What is the most effective treatment for anal fistula?",
      answer:
        "The most effective and modern treatment for anal fistula is Laser Anal Fistula Surgery (FiLaC or DLPL technique). This minimally invasive procedure removes the fistula tract precisely, ensuring faster healing, minimal pain, and a very low recurrence rate compared to traditional surgery.",
    },
    {
      id: "two",
      question: "Is laser surgery good for anal fistula?",
      answer:
        "Yes. Laser surgery for anal fistula is considered the safest and most effective option. It is a painless, bloodless, and stitch-free procedure that helps seal the fistula tract using laser energy, allowing faster recovery and reducing infection or recurrence chances.",
    },
    {
      id: "three",
      question: "How long does it take to recover from laser anal fistula surgery?",
      answer:
        "Patients usually recover within 5–7 days after Laser Anal Fistula Surgery. Most can resume daily activities within a week, with complete internal healing taking 3–4 weeks depending on the fistula’s complexity and post-surgery care.",
    },
    {
      id: "four",
      question: "What is the cost of laser anal fistula surgery in India?",
      answer:
        "The cost of laser anal fistula surgery in India ranges between ₹35,000 to ₹70,000, based on the type of fistula, hospital, and doctor’s experience. PureCheckup ensures transparent pricing with expert surgeons and advanced laser technology for the best outcomes.",
    },
    {
      id: "five",
      question: "What is the cost via PureCheckup for Anal Fistula?",
      answer:
        "At PureCheckup, the Laser Anal Fistula Surgery cost starts at ₹35,000, which includes consultation, diagnosis, laser treatment, and complete post-surgery care. Prices may vary depending on the case complexity and city. For an exact quote, you can connect with our 24/7 care team.",
    },
    {
      id: "six",
      question: "What are the symptoms of anal fistula that need immediate treatment?",
      answer:
        "Key symptoms include pain, swelling, or redness around the anus, pus or blood discharge, irritation, or a foul-smelling infection. If these symptoms persist, consult the best fistula doctor near you for diagnosis and Laser Anal Fistula Treatment immediately.",
    },
    {
      id: "seven",
      question: "Can anal fistula heal without surgery?",
      answer:
        "No, an anal fistula rarely heals without surgery. While antibiotics can reduce infection temporarily, only laser surgery or fistulotomy can permanently close the tract. Laser Anal Fistula Surgery ensures complete healing with minimal recurrence.",
    },
    {
      id: "eight",
      question: "Is laser anal fistula surgery painful?",
      answer:
        "No. Laser Anal Fistula Surgery is virtually painless and bloodless, performed under local or spinal anesthesia. There are no stitches or large wounds, and patients experience very little discomfort post-surgery.",
    },
    {
      id: "nine",
      question: "Does insurance cover Fistula treatment?",
      answer:
        "Yes, most insurance policies in India cover piles and anal fistula treatments, including Laser Anal Fistula Surgery. PureCheckup provides cashless insurance assistance and helps patients complete the claim process for a stress-free experience.",
    },
    {
      id: "ten",
      question: "Which healthcare service provider provides the best treatment at the best price?",
      answer:
        "PureCheckup.com is one of the best healthcare service providers in India for Laser Anal Fistula and Piles Treatment. It connects patients with expert surgeons, modern hospitals, and affordable treatment packages with complete insurance support and post-surgery care.",
    },
    {
      id: "eleven",
      question: "How to search for the best piles or anal fistula doctor?",
      answer:
        "You can find the best piles or anal fistula doctor by checking their experience, hospital affiliation, patient reviews, and specialization in laser proctology. PureCheckup makes it easy — simply visit our website, select your city, and choose from verified, experienced doctors near you.",
    },
    {
      id: "twelve",
      question: "How to book Laser Anal Fistula Surgery with PureCheckup?",
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>Booking Laser Anal Fistula Surgery with PureCheckup.com is simple:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Visit our website</li>
            <li>Select your city</li>
            <li>Choose your preferred doctor</li>
            <li>Book your appointment hassle-free</li>
          </ul>
          <p>
            👉 Our care team is available 24/7 to assist with consultation, treatment booking, and insurance support.
          </p>
          <p>
            PureCheckup ensures quality treatment at the best price across India.
          </p>
        </div>
      ),
    },
];
  
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

export const analFistulaData = {
  title1: "Anal Fistula",
  title2: "Treatment & Information",
  description:
    "An anal fistula is a small tunnel that develops between the end of the rectum and the skin around the anus, usually after an anal abscess. It causes repeated infections, pain, and pus discharge. If left untreated, a fistula can worsen and affect daily comfort. At PureCheckup, our specialists diagnose and treat fistula in ano using advanced laser technology that ensures safe, quick, and lasting relief.",

  tabsData: [
    {
      value: "types",
      label: "Types",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div>
          <p className="mb-4">
            Medical experts classify anal fistulas based on their connection with the anal sphincter muscles.
            The main types include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li> <strong>Intersphincteric Fistula</strong> – runs between the internal and external sphincter.</li>
            <li> <strong>Transsphincteric Fistula</strong> – passes through both sphincters.</li>
            <li> <strong>Suprasphincteric Fistula</strong> – extends above the sphincter muscles.</li>
            <li> <strong>Extrasphincteric Fistula</strong> – runs from the rectum to the skin outside the anal region.</li>
          </ul>
          <p className="mt-4">
            Each type requires a personalized approach for laser fistula treatment, ensuring minimal damage to surrounding tissues.
          </p>
        </div>
      ),
    },
    {
      value: "causes",
      label: "Causes",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div>
          <p className="mb-4">Common medical causes of anal fistula include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Untreated anal abscess or infection</li>
            <li>Chronic inflammatory bowel disease (IBD)</li>
            <li>Trauma or injury to the anal region</li>
            <li>Tuberculosis or post-surgical complications</li>
            <li>Poor hygiene or prolonged constipation</li>
          </ul>
          <p className="mt-4">
            Understanding the cause helps doctors decide whether fistula surgery or laser fistula treatment is the best option for long-term relief.
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
            Recognizing early fistula symptoms can prevent complications. Common signs include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Pain, swelling, and redness near the anus</li>
            <li>Recurrent pus or blood discharge</li>
            <li>Persistent itching or irritation</li>
            <li>Foul-smelling discharge</li>
            <li>Fever and fatigue (in severe cases)</li>
          </ul>
          <p className="mt-4">
            If you notice these symptoms, it’s essential to consult the best fistula doctor near you for accurate diagnosis and treatment.
          </p>
        </div>
      ),
    },
    {
      value: "treatment",
      label: "Treatment",
      icon: <Pill className="text-purple-600" />,
      content: (
        <div>
          <p className="mb-4">
            Modern fistula treatments focus on complete healing with minimal recurrence. At PureCheckup, treatment plans are customized after thorough clinical evaluation. Common options include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Medication and antibiotics (for minor infections)</li>
            <li>Fistulotomy – traditional open surgery</li>
            <li>Seton placement – used for complex fistulas</li>
            <li>Laser Fistula Surgery (FiLaC or DLPL technique) – a cutting-edge, minimally invasive procedure.</li>
          </ul>
          <p className="mt-4">
            Laser Fistula Surgery ensures precision removal of the fistula tract without cutting sphincter muscles, leading to faster recovery, less pain, and almost no recurrence.
          </p>
        </div>
      ),
    },
    {
      value: "benefits",
      label: "Benefits",
      icon: <Stethoscope className="text-orange-600" />,
      content: (
        <div>
          <p className="mb-4">Laser treatment for anal fistula offers several proven benefits:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Painless and bloodless procedure</li>
            <li>No stitches or large cuts</li>
            <li>Daycare procedure with same-day discharge</li>
            <li>Quick healing and reduced infection risk</li>
            <li>Minimal recurrence rates</li>
            <li>Safe for patients of all age groups</li>
          </ul>
          <p className="mt-4">
            Thousands of patients now prefer laser fistula surgery in India for its comfort, safety, and reliability.
          </p>
        </div>
      ),
    },
  ],

  doctorName: "Expert Laser Fistula Surgeon – PureCheckup Healthcare",
  doctorDescription:
    "PureCheckup Healthcare provides specialist surgeons who lead the anal fistula treatment program with advanced expertise. They have extensive experience in performing laser fistula surgeries, ensuring high success rates and minimal recurrence. Patients trust PureCheckup Healthcare for its personalized treatment approach, ethical care, and long-term results. 📅 For a consultation or to book your laser fistula surgery, visit PureCheckup.com or contact our team to schedule an appointment with our specialist surgeons today.",
  doctorLink: "https://purecheckup.com",
};


const FistulaTreatment = () => {
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
      title: "Laser Anal Fistula Surgery (Recommended)",
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

    return (
        <>
            <ConditionHeroSection
            title="Anal Fistula Treatment – Laser Surgery Procedure, Operation Cost & Recovery Benefits"
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
							title2="Anal Fistula?"
							description="An anal fistula is a small tunnel that develops between the end of the rectum and the skin around the anus, usually after an anal abscess. It causes repeated infections, pain, and pus discharge.
								If left untreated, a fistula can worsen and affect daily comfort.
								At PureCheckup, our specialists diagnose and treat fistula in ano using advanced laser technology that ensures safe, quick, and lasting relief.
								"
							tabsData={analFistulaData.tabsData}
							doctorName="Dr. Tanmay Jain"
							doctorDescription="specializes in laser piles treatment, providing advanced care options for effective and lasting relief."
							doctorLink="https://PureCheckup.com"
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
                treatmentName="Piles"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of fistula",
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

export default FistulaTreatment;