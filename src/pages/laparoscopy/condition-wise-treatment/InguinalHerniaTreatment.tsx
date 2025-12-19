import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits, SEO } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is the cost of inguinal hernia surgery in India?",
    answer:
      "The inguinal hernia surgery cost in India ranges between ₹35,000 and ₹95,000, depending on the city, hospital, surgeon’s expertise, and the type of procedure (open, laparoscopic, or laser).",
  },
  {
    id: "two",
    question: "Does insurance cover inguinal hernia surgery treatment?",
    answer:
      "Yes, most health insurance plans cover inguinal hernia surgery since it’s a medically necessary procedure. PureCheckup also provides cashless insurance assistance for eligible patients.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best treatment at the best price?",
    answer:
      "PureCheckup partners with top-rated hospitals and expert surgeons across India to offer affordable, advanced, and safe hernia treatments with EMI and insurance support.",
  },
  {
    id: "four",
    question: "How to book inguinal hernia surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking your inguinal hernia surgery with PureCheckup is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/hernia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/hernia
            </a>
          </li>
          <li>Fill out the consultation form</li>
          <li>Or call our 24×7 helpline to schedule a free consultation and same-day diagnosis</li>
        </ul>
        <p>Our team helps with insurance, hospital admission, and post-surgery care for a smooth experience.</p>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for an inguinal hernia?",
    answer:
      "The best treatment for an inguinal hernia is laparoscopic or laser surgery, which ensures quick recovery, minimal pain, and very small scars compared to open surgery.",
  },
  {
    id: "six",
    question: "What are the first signs of an inguinal hernia?",
    answer:
      "The early signs include a visible bulge in the groin area, discomfort while standing or walking, and pain while coughing or lifting heavy objects.",
  },
  {
    id: "seven",
    question: "How painful is inguinal hernia surgery?",
    answer:
      "Modern laser and laparoscopic hernia surgeries are almost painless. You may experience mild discomfort for a few days, but most patients resume normal activities within a week.",
  },
  {
    id: "eight",
    question: "How long does it take to recover from inguinal hernia surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Recovery depends on the type of surgery performed:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Laparoscopic or laser surgery:</strong> 7–10 days
          </li>
          <li>
            <strong>Open surgery:</strong> 2–3 weeks
          </li>
        </ul>
        <p>Most patients return to daily activities quickly under medical supervision.</p>
      </div>
    ),
  },
  {
    id: "nine",
    question: "Can an inguinal hernia recur after surgery?",
    answer:
      "If the surgery is performed by an experienced surgeon and proper post-operative care is followed, the chances of recurrence are extremely low (less than 1%).",
  },
  {
    id: "ten",
    question: "Why choose PureCheckup for inguinal hernia treatment?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <ul className="list-disc list-inside space-y-1">
          <li>Expert and experienced surgeons</li>
          <li>Laser and laparoscopic technology</li>
          <li>Cashless insurance and EMI options</li>
          <li>24×7 dedicated patient support</li>
          <li>Free doctor consultation</li>
        </ul>
        <p>
          PureCheckup ensures advanced, safe, and affordable inguinal hernia surgery with end-to-end assistance and a
          smooth recovery journey.
        </p>
      </div>
    ),
  },
];


const inguinalHerniaData = {
  title1: "Inguinal Hernia",
  title2: "Treatment & Information",
  description:
    "An inguinal hernia occurs when a portion of tissue, such as the intestine or fat, pushes through a weak spot in the lower abdominal wall near the groin. It appears as a visible bulge, especially when coughing, bending, or lifting heavy objects. At PureCheckup, our expert surgeons offer advanced laparoscopic, robotic, and laser-assisted hernia repair for quick recovery, minimal pain, and no visible scars.",

  tabsData: [
    {
      value: "what-is-inguinal-hernia",
      label: "What is Inguinal Hernia?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div>
          <p>
            An inguinal hernia happens when a part of the intestine or abdominal tissue pushes through a weak spot in the lower abdominal wall near the groin. It often appears as a visible bulge that becomes more prominent while coughing, lifting, or bending.
          </p>
          <p className="mt-2">
            This condition is more common in men but can also occur in women due to muscle weakness or pregnancy. Early diagnosis and surgery are important to prevent complications such as hernia strangulation.
          </p>
          <p className="mt-2">
            At PureCheckup, our skilled surgeons use laparoscopic, robotic, and laser-assisted methods to provide safe, painless, and scar-free hernia repair.
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
            Depending on the severity and size of the hernia, one of the following surgical procedures may be recommended:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Open Inguinal Hernia Surgery:</strong> The surgeon makes an incision in the groin to push the bulging tissue back into the abdomen and reinforces the wall with surgical mesh. This traditional method is reliable for larger or recurrent hernias.
            </li>

            <li>
              <strong>Laparoscopic (Keyhole) Surgery:</strong> A minimally invasive approach using small incisions and a camera-guided tool for faster healing, minimal pain, and reduced scarring.
            </li>

            <li>
              <strong>Robotic Hernia Surgery:</strong> The most advanced method that uses robotic precision for better accuracy, reduced pain, and enhanced recovery.
            </li>

            <li>
              <strong>Laser-Assisted Hernia Repair (PureCheckup Special):</strong> A cutting-edge, painless option ensuring no stitches, minimal bleeding, and same-day discharge.
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
            Inguinal hernias develop due to pressure combined with weakness in the abdominal muscles. Common causes include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Weak abdominal muscles (by birth or due to aging)</li>
            <li>Heavy lifting or strenuous work</li>
            <li>Chronic cough or constipation</li>
            <li>Obesity or sudden weight gain</li>
            <li>Pregnancy or abdominal strain</li>
            <li>Previous abdominal surgeries</li>
          </ul>
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
            Watch for the following symptoms to identify an inguinal hernia early:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Visible bulge in the groin or scrotum area</li>
            <li>Pain or discomfort while bending or lifting</li>
            <li>Burning or aching sensation in the groin</li>
            <li>Heaviness or weakness in the lower abdomen</li>
            <li>Swelling around the testicles (in men)</li>
          </ul>
          <p className="mt-2">
            If untreated, an inguinal hernia can grow larger and lead to serious issues like bowel obstruction or strangulation. Seek immediate medical attention if pain increases suddenly.
          </p>
        </div>
      ),
    },
    {
      value: "benefits",
      label: "Benefit",
      icon: <Stethoscope className="text-red-600" />,
      content: (
        <div>
          <ul className="list-disc list-inside space-y-2">
            <li>Permanent solution with no recurrence</li>
            <li>Faster recovery and minimal discomfort</li>
            <li>Painless laparoscopic or laser-assisted procedure</li>
            <li>No long hospital stay – same-day discharge</li>
            <li>Restores mobility and improves quality of life</li>
            <li>100% insurance support and postoperative care</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Inguinal Hernia Surgeons – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, we provide world-class treatment for inguinal hernia using the latest laparoscopic, laser, and robotic surgical technologies. Our highly qualified surgeons ensure maximum precision and safety.
      </p>
      <p>
        Our partner hospitals are NABH-accredited, maintaining high hygiene and patient care standards. From free consultation to discharge, we provide complete end-to-end support.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Free consultation with hernia specialists</li>
        <li>Cashless insurance and EMI options</li>
        <li>Same-day admission and discharge</li>
        <li>24×7 assistance and postoperative follow-up</li>
      </ul>
      <p>
        Choose PureCheckup for a painless, safe, and affordable hernia repair surgery with top surgeons and modern facilities.
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
    title: "Laser Inguinal Hernia Surgery (Recommended)",
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

const InguinalHerniaTreatment = () => {

  const seoData = {
    title: "Book Free Appointment Inguinal Hernia @9211930749 | PureCheckup",
    description: "Get expert inguinal hernia surgery at PureCheckup. Safe laparoscopic or open repair by top doctors. Call @9211930749 for advanced hernia care today.",
    keywords: "inguinal hernia surgery, hernia repair inguinal, laparoscopic inguinal hernia, inguinal hernia doctor, best inguinal hernia hospital, hernia operation near me, safe hernia surgery, inguinal hernia treatment india, minimally invasive hernia surgery, advanced hernia care",
    canonical: "https://purecheckup.com/treatment/inguinal-hernia/",
  }

  return (
    <>
      <SEO {...seoData} />
      <ConditionHeroSection
        title="Inguinal Hernia Surgery in India – Cost, Types, Symptoms & Best Treatment "
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
        <Heading text1="Meet Our" text2="Specialist" className="mb-10" />
        {constantData.specialists.map((doc) => (
          <SpecialistCard key={doc.id} specialist={doc} />
        ))}
      </section>

      <WhyPristynCare />

      <ConditionInfo
        title1="What is"
        title2="Inguinal Hernia?"
        description={inguinalHerniaData.description}
        tabsData={inguinalHerniaData.tabsData}
        expertHeading="Expert Inguinal Hernia Surgery – PureCheckup"
        doctorName=""
        doctorDescription={inguinalHerniaData.doctorDescription}
        doctorLink="https://purecheckup.com"
        ctaText="Book Free Appointment"
      />

      <section className="py-20 px-4">
        <Heading text1="Treatment" text2="Options" className="mb-10" />
        <ConditionTreatmentOptions treatmentOptions={treatmentOptions} />
      </section>

      <section className="py-20 px-4">
        <Heading text1="Frequently" text2="Asked Questions" className="mb-10" />
        <FAQ faqs={faqs} />
      </section>

      <section className="px-4">
        <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
      </section>

      <section className="py-20 px-4 max-w-3xl mx-auto">
        <ConditionTreatmentForm cities={constantData.cities} />
      </section>

      <section className="py-20">
        <ConditionCityWiseTreatment
          treatmentName="Inguinal Hernia"
          costSubtitle="Pricing varies by case severity, city, and insurance coverage."
          paymentOptions="Payment Options: EMI Available | Cashless Insurance"
          costFactors={[
            "Grade and type of Inguinal Hernia",
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

export default InguinalHerniaTreatment;