import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Syringe, HeartPulse, Pill, Stethoscope } from "lucide-react";


const faqs = [
    {
      id: "one",
      question: "What is rectal prolapse?",
      answer:
        "Rectal prolapse is a medical condition where the rectum slips out of its normal position and protrudes through the anus due to weakened pelvic muscles and supporting tissues.",
    },
    {
      id: "two",
      question: "What causes rectal prolapse?",
      answer:
        "Common causes include chronic constipation, prolonged straining during bowel movements, aging, childbirth-related pelvic floor weakness, and certain neurological disorders.",
    },
    {
      id: "three",
      question: "How is rectal prolapse diagnosed?",
      answer:
        "Diagnosis typically involves a physical examination, detailed medical history, imaging tests such as defecography or MRI, and sometimes endoscopic evaluation to confirm the extent of prolapse.",
    },
    {
      id: "four",
      question: "Can rectal prolapse resolve without surgery?",
      answer:
        "Mild cases may improve with dietary changes, stool softeners, and pelvic floor exercises. However, moderate to severe rectal prolapse usually requires surgical intervention for long-term relief and prevention of recurrence.",
    },
    {
      id: "five",
      question: "What are the risks of untreated rectal prolapse?",
      answer:
        "Untreated rectal prolapse can lead to chronic pain, fecal incontinence, rectal bleeding, ulceration, and permanent damage to the anal sphincter muscles, significantly impacting quality of life.",
    },
    {
      id: "six",
      question: "Is laparoscopic surgery safe for rectal prolapse?",
      answer:
        "Yes. Laparoscopic rectal prolapse surgery is a safe, minimally invasive procedure that offers faster recovery, reduced postoperative pain, and lower complication rates compared to open surgery.",
    },
    {
      id: "seven",
      question: "What is the recovery time after laparoscopic rectal prolapse surgery?",
      answer:
        "Recovery generally involves a short hospital stay of 2–4 days, with most patients resuming normal activities within 2–4 weeks depending on their overall health and postoperative care.",
    },
    {
      id: "eight",
      question: "Are there any long-term effects after rectal prolapse surgery?",
      answer:
        "Most patients experience significant improvement with minimal recurrence when they follow proper postoperative care, maintain a healthy diet, and perform pelvic floor strengthening exercises.",
    },
    {
      id: "nine",
      question: "How can I prevent rectal prolapse?",
      answer:
        "Preventive measures include maintaining a high-fiber diet, drinking adequate water, avoiding prolonged straining during bowel movements, managing constipation, and performing regular pelvic floor exercises.",
    },
    {
      id: "ten",
      question: "Does insurance cover laparoscopic rectal prolapse surgery?",
      answer:
        "Insurance coverage depends on your policy and provider. Many health plans cover laparoscopic rectal prolapse surgery if it is deemed medically necessary. It’s advisable to confirm coverage with your insurer and hospital before scheduling surgery.",
    },
    {
      id: "eleven",
      question: "Which healthcare provider offers the best rectal prolapse treatment at the best price?",
      answer:
        "PureCheckup Healthcare offers expert laparoscopic rectal prolapse surgery at affordable prices. Their specialist surgeons use advanced technology to provide safe, effective, and long-lasting results for patients across India.",
    },
    {
      id: "twelve",
      question: "How do I book laparoscopic rectal prolapse surgery with PureCheckup?",
      answer: (
        <div className="text-(--text-primary) font-medium space-y-2">
          <p>Booking laparoscopic rectal prolapse surgery with PureCheckup is simple:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Visit the official PureCheckup website</li>
            <li>Go to the Rectal Prolapse Treatment page</li>
            <li>Fill out the appointment or consultation form</li>
            <li>Alternatively, contact the PureCheckup helpline directly for assistance</li>
          </ul>
          <p>
            👉 The PureCheckup support team is available 24/7 to assist with consultation, treatment booking, and insurance-related queries.
          </p>
        </div>
      ),
    },
];

const rectalProlapseData = {
    title1: "Rectal Prolapse?",
    title2: "Treatment & Information",
    description:
      "Rectal prolapse occurs when the rectum — the final portion of the large intestine — slips down and protrudes through the anus. This condition can affect individuals of all ages but is more common in older adults and women. Symptoms may range from mild discomfort to severe complications that impact daily life and bowel function. With the right diagnosis and treatment, most patients can achieve full recovery and symptom relief.",
  
    tabsData: [
      {
        value: "types",
        label: "Types",
        icon: <Activity className="text-blue-600" />,
        content: (
          <div>
            <p className="mb-4">
              Understanding the different types of rectal prolapse is essential for selecting the right treatment approach:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Internal Prolapse (Intussusception)</strong> – The rectum folds into itself without visibly protruding through the anus.
              </li>
              <li>
                <strong>Mucosal Prolapse</strong> – Only the mucosal lining of the rectum protrudes through the anus.
              </li>
              <li>
                <strong>Complete (Full-thickness) Prolapse</strong> – The entire wall of the rectum slips out through the anus, often requiring surgical correction.
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
            <p className="mb-4">
              Several factors can contribute to the development of rectal prolapse:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Chronic Constipation or Diarrhea</strong> – Persistent straining weakens the pelvic floor muscles.
              </li>
              <li>
                <strong>Aging</strong> – Natural weakening of supporting tissues and muscles with age.
              </li>
              <li>
                <strong>Childbirth</strong> – Multiple vaginal deliveries can stretch and damage pelvic structures.
              </li>
              <li>
                <strong>Neurological Conditions</strong> – Disorders that affect nerve function can reduce rectal control.
              </li>
              <li>
                <strong>Previous Pelvic Surgery</strong> – May compromise rectal support structures.
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
          <div>
            <p className="mb-4">Common symptoms of rectal prolapse include:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>A visible bulge or mass protruding from the anus</li>
              <li>A sensation of incomplete bowel evacuation</li>
              <li>Anal incontinence or stool leakage</li>
              <li>Rectal bleeding or mucus discharge</li>
              <li>Pelvic pain or discomfort</li>
            </ul>
            <p className="mt-4">
              If left untreated, the condition can worsen over time, leading to chronic discomfort and complications.
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
              The treatment for rectal prolapse depends on its severity, type, and the patient’s overall health. It can be managed through non-surgical and surgical methods:
            </p>
  
            <h4 className="font-semibold mb-2">1. Non-Surgical Treatments</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dietary Modifications</strong> – Increase fiber intake to prevent constipation.
              </li>
              <li>
                <strong>Medications</strong> – Use stool softeners or laxatives for easier bowel movements.
              </li>
              <li>
                <strong>Pelvic Floor Exercises</strong> – Strengthen the muscles that support the rectum and anus.
              </li>
            </ul>
  
            <h4 className="font-semibold mt-4 mb-2">2. Surgical Treatments</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Laparoscopic Rectopexy</strong> – A minimally invasive procedure to secure the rectum to the sacrum using sutures or mesh.
              </li>
              <li>
                <strong>Perineal Procedures</strong> – Removal of the prolapsed rectum through the perineum, ideal for elderly or high-risk patients.
              </li>
              <li>
                <strong>Abdominal Resection</strong> – Removal of the affected portion of the rectum, often combined with rectopexy for long-term results.
              </li>
            </ul>
            <p className="mt-4">
              Surgical options aim to restore normal anatomy, strengthen support tissues, and reduce recurrence rates.
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
            <p className="mb-4">
              Laparoscopic rectal prolapse surgery offers several benefits compared to open surgery:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Smaller incisions with minimal scarring</li>
              <li>Less postoperative pain and faster healing</li>
              <li>Shorter hospital stays and quicker recovery</li>
              <li>Lower risk of complications such as infections</li>
              <li>Faster return to normal bowel function and activities</li>
            </ul>
            <p className="mt-4">
              With modern laparoscopic techniques, rectal prolapse can be corrected safely and effectively with minimal downtime.
            </p>
          </div>
        ),
      },
    ],
  
    expertHeading: "Expert Laparoscopic Rectal Prolapse Surgeon – PureCheckup Healthcare",
    doctorDescription: (
      <div className="space-y-4">
        <p>
          PureCheckup Health Care offers access to experienced laparoscopic surgeons who specialize in the treatment of rectal prolapse. Our team uses advanced, minimally invasive techniques to ensure safe, effective, and comfortable procedures.
        </p>
        <p>With PureCheckup, patients benefit from:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Comprehensive diagnosis and evaluation of rectal prolapse severity</li>
          <li>Personalized treatment plans tailored to each patient’s condition</li>
          <li>State-of-the-art laparoscopic facilities for precise surgical care</li>
          <li>Dedicated postoperative support for faster recovery</li>
          <li>High success rates and long-lasting symptom relief</li>
        </ul>
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
      title: "Laser Laparoscopy Rectal Prolapse Surgery (Recommended)",
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

const RectalProlapseTreatment = () => {
    return (
        <>
            <ConditionHeroSection
            title="Rectal Prolapse Treatment – Diagnosis, Laparoscopic Surgery & Recovery"
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
                title2={rectalProlapseData.title1}
                description={rectalProlapseData.description}
                tabsData={rectalProlapseData.tabsData}
                expertHeading={rectalProlapseData.expertHeading} 
                doctorName="" 
                doctorDescription={rectalProlapseData.doctorDescription}
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
                treatmentName="Laparoscopy Rectal Prolapse"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of rectal prolapse",
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