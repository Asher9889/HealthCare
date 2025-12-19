import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits, SEO } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is gallstone surgery?",
    answer:
      "Gallstone surgery, also known as cholecystectomy, is a medical procedure to remove the gallbladder that contains stones (gallstones). It can be performed using laparoscopic, open, or laser-assisted techniques for safe and permanent relief.",
  },
  {
    id: "two",
    question: "Which is the best type of surgery for gallstones?",
    answer:
      "The best surgery for gallstones is usually laparoscopic or laser gallstone surgery, as both are minimally invasive, painless, and allow quick recovery with minimal scarring.",
  },
  {
    id: "three",
    question: "What is the cost of gallstone surgery in India?",
    answer:
      "The average cost of gallstone surgery in India ranges from ₹45,000 to ₹95,000, depending on the city, hospital type, and whether it’s laparoscopic, open, or laser surgery. PureCheckup offers affordable packages with cashless insurance options.",
  },
  {
    id: "four",
    question: "Does insurance cover gallstone surgery in India?",
    answer:
      "Yes, most health insurance plans cover gallstone surgery, including hospitalization, anesthesia, and doctor’s fees. At PureCheckup, our team provides end-to-end insurance assistance for a hassle-free experience.",
  },
  {
    id: "five",
    question: "How long does it take to recover from gallstone surgery?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Recovery depends on the type of surgery:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Laparoscopic / Laser surgery:</strong> 1–3 days
          </li>
          <li>
            <strong>Open surgery:</strong> 7–10 days
          </li>
        </ul>
        <p>
          Most patients at PureCheckup are discharged on the same day or the next day.
        </p>
      </div>
    ),
  },
  {
    id: "six",
    question: "Is gallstone surgery painful?",
    answer:
      "No, gallstone surgery is not painful because it is performed under anesthesia. Laser and laparoscopic surgeries cause minimal post-surgery discomfort, allowing patients to resume normal activities quickly.",
  },
  {
    id: "seven",
    question: "Can gallstones come back after surgery?",
    answer:
      "Once the gallbladder is removed, gallstones do not return. However, maintaining a healthy diet and active lifestyle helps avoid other digestive issues.",
  },
  {
    id: "eight",
    question: "What happens if gallstones are not treated?",
    answer:
      "If left untreated, gallstones can lead to severe pain, infection, inflammation, or pancreatitis, which can become life-threatening. Early diagnosis and surgery are strongly recommended.",
  },
  {
    id: "nine",
    question: "Why choose PureCheckup for gallstone surgery?",
    answer:
      "PureCheckup offers advanced laparoscopic and laser gallstone surgeries performed by expert surgeons across India. We provide cashless insurance, free consultations, same-day discharge, and full post-surgery care — making us one of the most trusted healthcare providers.",
  },
  {
    id: "ten",
    question: "How can I book gallstone surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking your gallstone surgery is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>
            Visit{" "}
            <a
              href="https://purecheckup.com/treatment/gallstone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              purecheckup.com/treatment/gallstone
            </a>
          </li>
          <li>Fill out the consultation form</li>
          <li>Or call our 24×7 patient helpline to schedule your free consultation and surgery appointment</li>
        </ul>
        <p>👉 Our team provides complete insurance and post-surgery support for a smooth experience.</p>
      </div>
    ),
  },
];

const gallstoneData = {
  title1: "Gallstone",
  title2: "Treatment & Information",
  description:
    "Gallstones are hardened deposits of digestive fluid that form in the gallbladder, a small organ located beneath the liver. They can range in size and may block bile ducts, causing severe pain, nausea, or infection. At PureCheckup, we specialize in advanced laparoscopic and laser gallstone removal surgeries for minimal pain, faster recovery, and expert care.",

  tabsData: [
    {
      value: "what-is-gallstone",
      label: "What Is a Gallstone?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div>
          <p>
            Gallstones are hardened deposits of digestive fluid that form in your gallbladder — a small organ located beneath your liver. These stones can vary in size from tiny grains to large stones and can block bile ducts, leading to severe pain, nausea, or infection.
          </p>
          <p className="mt-2">
            At PureCheckup, we offer advanced laparoscopic and laser gallstone removal surgery with minimal pain, faster recovery, and expert surgeons across India.
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
            There are three main types of gallstone surgeries commonly performed in India depending on the severity, number, and size of gallstones:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Laparoscopic Cholecystectomy (Keyhole Surgery):</strong> The most common and minimally invasive procedure for gallbladder removal. It involves small incisions through which a laparoscope and surgical tools are inserted to safely remove the gallbladder.
              <br />
              <span className="block mt-1">Benefits: Minimal pain and scarring, faster recovery (2–3 days), and same-day discharge.</span>
            </li>

            <li>
              <strong>Open Cholecystectomy:</strong> Recommended in complex or advanced cases where gallstones are large or the gallbladder is severely inflamed. The surgeon makes a larger abdominal incision to remove the gallbladder directly.
              <br />
              <span className="block mt-1">Benefits: Suitable for complicated cases, performed under full medical supervision.</span>
            </li>

            <li>
              <strong>Laser Surgery for Gallstones:</strong> An advanced and modern procedure that uses laser technology to remove the gallbladder or dissolve stones safely. It ensures minimal bleeding, no stitches, and rapid healing.
              <br />
              <span className="block mt-1">
                Benefits: No visible scars, minimal pain, 100% safe, and same-day discharge.
              </span>
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
            Gallstones can form due to several reasons, including:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>High cholesterol or bilirubin levels in bile</li>
            <li>Obesity or rapid weight loss</li>
            <li>Diabetes or liver disorders</li>
            <li>Sedentary lifestyle and unhealthy diet</li>
            <li>Genetic factors and hormonal imbalance (especially in women)</li>
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
          <p className="mb-4">Common symptoms include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sudden and severe pain in the upper right abdomen</li>
            <li>Back pain or shoulder pain</li>
            <li>Nausea, vomiting, or bloating after meals</li>
            <li>Indigestion or jaundice (in advanced cases)</li>
          </ul>
          <p className="mt-2">
            If you experience these symptoms, book a free consultation with a PureCheckup expert for diagnosis and treatment.
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
            <li>Pain-Free & Safe: Advanced laparoscopic or laser techniques ensure minimal discomfort.</li>
            <li>Quick Recovery: Most patients resume normal activities within 2–3 days.</li>
            <li>No Recurrence: Permanent solution by removing the gallbladder.</li>
            <li>Same-Day Discharge: No long hospital stay required.</li>
            <li>Insurance Support: End-to-end claim assistance for patients.</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Gallstone Surgeon – PureCheckup Healthcare",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        At PureCheckup, we partner with India’s top laparoscopic and laser surgeons to deliver affordable and high-quality gallstone treatment. Our dedicated care team ensures a smooth experience from consultation to recovery.
      </p>
      <p>Our services include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Free doctor consultation</li>
        <li>Insurance assistance</li>
        <li>Same-day admission and discharge</li>
        <li>Post-surgery follow-up</li>
      </ul>
      <p>
        Choose PureCheckup for a safe, cost-effective, and painless gallstone removal surgery in India.
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
    title: "Laser Gallstone Surgery (Recommended)",
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

const GallstonesTreatment = () => {

  const seoData = {
    title: "Get Free Gallstone Expert Consult @9211930749 | PureCheckup",
    description: "Get advanced gallstone treatment at PureCheckup. Safe laparoscopic & open surgery by top surgeons. Call @9211930749 for gallbladder care today.",
    keywords: "gallstone treatment, gallbladder surgery, laparoscopic gallstone surgery, gallstone removal near me, gallbladder stone doctor, gallstone surgery cost india,minimally invasive gallbladder surgery, gallstone operation safely, best gallstone hospital, gallbladder treatment expert",
    canonical: "https://purecheckup.com/treatment/gallstone/",
  }

  return (
    <>
      <SEO {...seoData} />
      <ConditionHeroSection
        title="Gallstone Surgery by Expert Surgeons – Painless, Quick & Cost-Effective Treatment"
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
        title2="Gallstone?"
        description={gallstoneData.description}
        tabsData={gallstoneData.tabsData}
        expertHeading="Expert Gallstone Surgery – PureCheckup"
        doctorName=""
        doctorDescription={gallstoneData.doctorDescription}
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
          treatmentName="Gallstone"
          costSubtitle="Pricing varies by case severity, city, and insurance coverage."
          paymentOptions="Payment Options: EMI Available | Cashless Insurance"
          costFactors={[
            "Grade and type of Laparoscopic Hernia",
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

export default GallstonesTreatment;