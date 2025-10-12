import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";


const faqs = [
  {
    id: "one",
    question: "What is pilonidal sinus and how does it develop?",
    answer:
      "A pilonidal sinus is a small tunnel or cavity under the skin near the tailbone, often containing hair and debris. It develops due to hair penetration, poor hygiene, friction, or prolonged sitting, and can become painful or infected.",
  },
  {
    id: "two",
    question: "How can I tell if my pilonidal sinus is infected?",
    answer:
      "Signs of infection include swelling, redness, pain, foul-smelling discharge, pus, and sometimes fever. Early medical consultation is essential to prevent complications.",
  },
  {
    id: "three",
    question: "What are the common causes of pilonidal sinus?",
    answer:
      "Common causes include ingrown hair, excessive sweating, prolonged sitting, poor hygiene, obesity, and repeated trauma to the tailbone area.",
  },
  {
    id: "four",
    question: "Is laser surgery the best treatment for pilonidal sinus?",
    answer:
      "Yes. Laser pilonidal sinus surgery is minimally invasive, less painful, and offers faster recovery compared to traditional surgery. It also has a lower recurrence rate.",
  },
  {
    id: "five",
    question: "How long does it take to recover from laser pilonidal sinus surgery?",
    answer:
      "Most patients recover within 2–3 days for daily activities and achieve full healing within 4–6 weeks, depending on individual health and severity of the condition.",
  },
  {
    id: "six",
    question: "Can pilonidal sinus be prevented?",
    answer:
      "Yes. Preventive measures include maintaining good hygiene, removing excess hair in the area, avoiding prolonged sitting, wearing loose clothing, and maintaining a healthy weight.",
  },
  {
    id: "seven",
    question: "How much does laser pilonidal sinus surgery cost in India?",
    answer:
      "On average, the cost ranges from ₹50,000 to ₹1,20,000, depending on the hospital, surgeon, and complexity of the procedure.",
  },
  {
    id: "eight",
    question: "Does insurance cover pilonidal sinus surgery in India?",
    answer:
      "Coverage varies by policy. Many insurance plans cover medically necessary surgeries, but patients should confirm with their insurer and hospital before booking.",
  },
  {
    id: "nine",
    question: "Who is the best surgeon for pilonidal sinus surgery in India?",
    answer:
      "PureCheckup works with India’s top proctology and laser surgery specialists, offering advanced treatment for pilonidal sinus with high success rates and minimal recovery time. Their network of expert doctors ensures safe, effective, and patient-focused care.",
  },
  {
    id: "ten",
    question: "How can I book laser pilonidal sinus surgery with PureCheckup?",
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <p>Booking Laser Pilonidal Sinus Surgery with PureCheckup is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit the PureCheckup website</li>
          <li>Go to the Pilonidal Sinus Treatment page</li>
          <li>Select your preferred date and fill out the appointment form</li>
          <li>Alternatively, call the PureCheckup helpline for direct scheduling</li>
        </ul>
        <p>
          👉 Our care team is available 24/7 to assist with consultation, treatment booking, and insurance support.
        </p>
      </div>
    ),
  },
];

  

const pilonidalSinusData = {
  title1: "Pilonidal Sinus",
  title2: "Treatment & Information",
  description:
    "Pilonidal sinus is a chronic skin condition where a small tunnel or cavity forms under the skin, usually near the tailbone at the top of the buttocks. This cavity often contains hair, skin debris, and dirt, leading to pain, swelling, and infection. It is more common in young adults, especially males, and can affect daily activities and quality of life if untreated. Pilonidal sinus can be painful, recurrent, and impact mobility, but with modern laser surgery, it can be treated effectively with minimal discomfort and faster recovery.",

  tabsData: [
    {
      value: "types",
      label: "Types",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div>
          <p className="mb-4">
            Understanding the type of pilonidal sinus helps in determining the correct treatment plan. Common types include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Congenital Pilonidal Sinus</strong> – Present from birth due to developmental skin defects.
            </li>
            <li>
              <strong>Acquired Pilonidal Sinus</strong> – Develops over time, usually due to hair penetration and chronic irritation.
            </li>
            <li>
              <strong>Pilonidal Abscess</strong> – An infected sinus causing pus discharge, redness, and swelling.
            </li>
            <li>
              <strong>Chronic Pilonidal Sinus</strong> – Recurring sinus with multiple openings and long-term discomfort.
            </li>
          </ul>
        </div>
      ),
    },
    {
      value: "causes",
      label: "Causes",
      icon: <Syringe className="text-green-600" />,
      content: (
        <div>
          <p className="mb-4">Pilonidal sinus develops due to a combination of factors:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Ingrown hair penetrating the skin</li>
            <li>Prolonged sitting which increases pressure on the tailbone area</li>
            <li>Poor hygiene and accumulation of sweat and dirt</li>
            <li>Excess body hair and friction from clothing</li>
            <li>Obesity increasing pressure on the sacral area</li>
            <li>Trauma or irritation near the tailbone</li>
          </ul>
          <p className="mt-4">
            Lifestyle habits and genetics both play a role in increasing the risk of developing pilonidal sinus.
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
          <p className="mb-4">Common signs and symptoms include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Persistent pain or discomfort near the tailbone</li>
            <li>Swelling or tenderness in the affected area</li>
            <li>Redness or inflammation</li>
            <li>Pus or blood discharge with a foul odor</li>
            <li>Fever in case of severe infection</li>
            <li>Visible sinus openings or pits near the crease of the buttocks</li>
          </ul>
          <p className="mt-4">
            Early detection and treatment prevent worsening and recurrence.
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
            Treatment depends on the severity and type of pilonidal sinus. The main options include:
          </p>
          <h4 className="font-semibold mb-2">1. Conservative Treatment</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Proper hygiene and hair removal</li>
            <li>Antibiotics for infection control</li>
            <li>Sitz baths to relieve discomfort</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">2. Surgical Treatments</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Excision Surgery – Removing the sinus tract with stitches or flap techniques</li>
            <li>Laser Pilonidal Sinus Treatment – Modern, minimally invasive procedure with faster recovery</li>
          </ul>
          <p className="mt-4">
            Laser treatment is becoming the most preferred option because it is less painful, less invasive, and offers a low recurrence rate compared to traditional surgery.
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
          <p className="mb-4">Laser treatment offers numerous advantages over conventional surgery:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Minimal pain and discomfort</li>
            <li>No large cuts or wounds</li>
            <li>Faster recovery — patients can resume normal activities within days</li>
            <li>Low recurrence rate due to precise removal of sinus tissue</li>
            <li>Reduced hospital stay — often done as a daycare procedure</li>
            <li>Better cosmetic results with minimal scarring</li>
          </ul>
          <p className="mt-4">
            Laser treatment is an advanced, safe option for patients looking for a long-term solution with quick recovery.
          </p>
        </div>
      ),
    },
  ],

  doctorName: "Expert Laser Pilonidal Sinus Surgeon – PureCheckup Healthcare",
  doctorDescription:
   (  <div className="space-y-4">
    <p>
    PureCheckup Health Care provides specialist surgeons with extensive expertise in treating pilonidal sinus cases. Using advanced laser technology, they deliver painless, safe, and permanent treatment solutions.
    </p>

    <p>With a patient-first approach, PureCheckup ensures:</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Accurate diagnosis using advanced imaging.</li>
      <li>Personalized treatment plans based on individual needs.</li>
      <li>Post-treatment care guidance to prevent recurrence.</li>
      <li>High success rates and minimal downtime.</li>
      <li>Long-term relief for patients.</li>
    </ul>
  </div>
 ),
  doctorLink: "https://purecheckup.com",
};



const RectalProlapseTreatment = () => {

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
      title: "Laser Pilonidal Sinus Surgery (Recommended)",
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
            title="Pilonidal Sinus Laser Treatment – Painless, Permanent Cure with Fast Recovery & No Recurrence"
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
							title2="Pilonidal Sinus?"
							description={pilonidalSinusData.description}
							tabsData={pilonidalSinusData.tabsData}
              expertHeading= "Expert Laser Pilonidal Sinus Surgeon – PureCheckup Healthcare" 
							doctorName="" 
							doctorDescription={pilonidalSinusData.doctorDescription}
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
                treatmentName="Pilonidal Sinus"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of piles",
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

export default RectalProlapseTreatment;