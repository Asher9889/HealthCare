import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
    {
      id: "one",
      question: "What is the cost of Laparoscopic hernia surgery in India?",
      answer:
        "The cost varies based on factors like the type of hernia, hospital, and surgeon's expertise. On average, laparoscopic hernia surgery in India ranges from ₹45,000 to ₹2,50,000.",
    },
    {
      id: "two",
      question: "Does insurance cover Laparoscopic hernia surgery treatment?",
      answer:
        "Yes, most comprehensive health insurance plans in India cover hernia surgery. However, coverage specifics may vary, and some policies may have waiting periods for pre-existing conditions.",
    },
    {
      id: "three",
      question: "Which healthcare service provider provides the best treatment at the best price?",
      answer:
        "While many hospitals offer hernia surgery, it's essential to consider factors like surgeon expertise, hospital facilities, and patient reviews. PureCheckup is known for its experienced team and competitive pricing.",
    },
    {
      id: "four",
      question: "How to book Laparoscopic hernia surgery with PureCheckup?",
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>Booking Laparoscopic Hernia Surgery with PureCheckup is simple:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>
              Visit our official website at{" "}
              <a
                href="https://purecheckup.com/treatment/hernia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                purecheckup.com/treatment/hernia
              </a>
            </li>
            <li>Fill out the consultation or booking form</li>
            <li>Alternatively, contact our support team for direct scheduling</li>
          </ul>
          <p>👉 Our care team is available 24/7 to assist with consultation, surgery booking, and insurance support.</p>
        </div>
      ),
    },
    {
      id: "five",
      question: "What is the recovery time after Laparoscopic hernia surgery?",
      answer:
        "Most patients can return to normal activities within 1–2 weeks, with complete recovery taking about 4–6 weeks.",
    },
    {
      id: "six",
      question: "Are there any risks associated with Laparoscopic hernia surgery?",
      answer:
        "As with any surgery, risks include infection, bleeding, and injury to surrounding organs. However, these risks are minimal with experienced surgeons and proper postoperative care.",
    },
    {
      id: "seven",
      question: "Can hernias recur after surgery?",
      answer:
        "While rare, hernias can recur. Factors like infection, strain on the surgical site, or improper healing can contribute to recurrence. Regular follow-up with your surgeon helps minimize this risk.",
    },
    {
      id: "eight",
      question: "Is Laparoscopic surgery suitable for all types of hernias?",
      answer:
        "Laparoscopic surgery is effective for most hernia types but may not be suitable for large or complex cases. Your surgeon will evaluate and recommend the best surgical approach based on your condition.",
    },
    {
      id: "nine",
      question: "Will I need a hospital stay after surgery?",
      answer:
        "Most patients undergoing laparoscopic hernia surgery can go home the same day or after a short observation period, depending on recovery speed and overall health.",
    },
    {
      id: "ten",
      question: "How can I prepare for Laparoscopic hernia surgery?",
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>To prepare effectively for laparoscopic hernia surgery, follow your surgeon’s preoperative instructions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fast for at least 6–8 hours before surgery (if advised)</li>
            <li>Inform your doctor about ongoing medications or allergies</li>
            <li>Arrange for someone to accompany you and drive you home post-surgery</li>
            <li>Avoid smoking or alcohol for a few days prior to the procedure</li>
          </ul>
        </div>
      ),
    },
];
  
const herniaData = {
    title1: "Hernia",
    title2: "Treatment & Information",
    description:
      "A hernia occurs when an internal organ or tissue pushes through a weak spot in the surrounding muscle or connective tissue. It commonly appears as a bulge in the abdomen or groin area and may cause discomfort, pain, or complications if left untreated. Hernias can be effectively treated through modern laparoscopic surgery, which ensures quicker recovery and minimal scarring.",
  
    tabsData: [
      {
        value: "what-is-hernia",
        label: "What Is a Hernia?",
        icon: <Activity className="text-blue-600" />,
        content: (
          <div>
            <p>
              A hernia occurs when an internal organ or tissue pushes through a weak spot in the surrounding muscle or connective tissue. Commonly, hernias manifest as a bulge in the abdomen or groin area. While some hernias may not cause immediate symptoms, they can lead to discomfort, pain, or more serious complications if left untreated.
            </p>
          </div>
        ),
      },
      {
        value: "laparoscopic-surgery",
        label: "Laparoscopic Surgery",
        icon: <Syringe className="text-green-600" />,
        content: (
          <div>
            <p>
              Laparoscopic hernia surgery is a minimally invasive procedure where surgeons use small incisions and a camera (laparoscope) to repair the hernia. This technique offers several advantages over traditional open surgery, including reduced pain, shorter recovery time, and minimal scarring.
            </p>
          </div>
        ),
      },
      {
        value: "types",
        label: "Types of Hernia",
        icon: <HeartPulse className="text-pink-600" />,
        content: (
          <div>
            <p className="mb-4">
              Hernias can occur in various parts of the body, each with distinct characteristics:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Inguinal Hernia:</strong> Occurs in the groin area; more common in men.
              </li>
              <li>
                <strong>Femoral Hernia:</strong> Occurs in the lower groin; more common in women.
              </li>
              <li>
                <strong>Umbilical Hernia:</strong> Near the belly button; common in infants but can affect adults.
              </li>
              <li>
                <strong>Incisional Hernia:</strong> Occurs at the site of a previous surgical incision.
              </li>
              <li>
                <strong>Hiatal Hernia:</strong> Part of the stomach pushes through the diaphragm into the chest cavity.
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
              Hernias can result from a combination of pressure and an opening or weakness in the muscle or connective tissue. Factors contributing to hernia formation include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Chronic coughing or sneezing</li>
              <li>Heavy lifting or straining</li>
              <li>Obesity</li>
              <li>Pregnancy</li>
              <li>Previous surgical incisions</li>
              <li>Congenital defects</li>
            </ul>
          </div>
        ),
      },
      {
        value: "symptoms",
        label: "Symptoms",
        icon: <Activity className="text-orange-600" />,
        content: (
          <div>
            <p className="mb-4">Common symptoms of hernia include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Visible bulge or lump in the affected area</li>
              <li>Pain or tenderness, especially when bending or lifting</li>
              <li>A feeling of heaviness or pressure</li>
              <li>Nausea or vomiting (especially if the hernia is strangulated)</li>
            </ul>
          </div>
        ),
      },
      {
        value: "treatment",
        label: "Treatment Options",
        icon: <Stethoscope className="text-red-600" />,
        content: (
          <div>
            <p className="mb-4">
              Treatment depends on the type, size, and symptoms of the hernia:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Watchful Waiting:</strong> For small, asymptomatic hernias.
              </li>
              <li>
                <strong>Surgical Repair:</strong> The definitive treatment, which includes:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Open Surgery – Traditional method with larger incisions.</li>
                  <li>Laparoscopic Surgery – Minimally invasive with smaller incisions and quicker recovery.</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
      },
      {
        value: "benefits",
        label: "Benefits of Laparoscopic Surgery",
        icon: <Stethoscope className="text-teal-600" />,
        content: (
          <div>
            <p className="mb-4">Opting for laparoscopic hernia surgery offers several advantages:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Reduced postoperative pain</li>
              <li>Shorter hospital stay</li>
              <li>Faster return to daily activities</li>
              <li>Minimal scarring</li>
              <li>Lower risk of infection</li>
            </ul>
          </div>
        ),
      },
    ],
  
    doctorName: "Expert Laparoscopic Hernia Surgeon – PureCheckup Healthcare",
    doctorDescription: (
      <div className="space-y-4">
        <p>
          At PureCheckup, our team of experienced laparoscopic surgeons specializes in hernia repair using the latest techniques and equipment. We are committed to providing personalized care to ensure the best outcomes for our patients.
        </p>
        <p>With our expert team, you can expect:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Comprehensive diagnosis and evaluation.</li>
          <li>Customized treatment plans for each patient.</li>
          <li>Use of advanced laparoscopic tools for precision repair.</li>
          <li>Fast recovery and minimal downtime.</li>
          <li>Dedicated post-surgery follow-up care.</li>
        </ul>
      </div>
    ),
    doctorLink: "https://purecheckup.com",
};
 
const HerniaTreatment = () => {

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
      title: "Laser Laparoscopic Hernia Surgery (Recommended)",
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
            title="Safe & Affordable Hernia Surgery in India – Laparoscopic Repair by PureCheckup"
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
                title2="Hernia?"
                description={herniaData.description}
                tabsData={herniaData.tabsData}
                expertHeading= "Expert Laparoscopic Hernia Surgeon – PureCheckup" 
                doctorName="" 
                doctorDescription={herniaData.doctorDescription}
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
                treatmentName="Laparoscopic Hernia"
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

export default HerniaTreatment;