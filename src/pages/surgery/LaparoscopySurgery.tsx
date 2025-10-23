import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of Laparoscopy Surgery treatment in India?",
    answer:
      "The cost of laparoscopy surgery in India varies depending on the procedure type, hospital, and surgeon. PureCheckup ensures access to top-quality treatment at competitive prices.",
  },
  {
    id: "two",
    question: "Does insurance cover Laparoscopy Surgery treatment?",
    answer:
      "Yes, most major insurance providers cover laparoscopic procedures. PureCheckup helps with insurance verification and cashless treatment options for patient convenience.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best laparoscopy treatment at the best price?",
    answer:
      "PureCheckup partners with leading hospitals and certified surgeons to deliver high-quality, cost-effective laparoscopic surgery across India.",
  },
  {
    id: "four",
    question: "How to book a Laparoscopy Surgery with PureCheckup?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>Booking a laparoscopy surgery through PureCheckup is easy:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit our website – PureCheckup.com</li>
          <li>Select your procedure and preferred city</li>
          <li>Schedule a free consultation with our experts</li>
          <li>Our team assists with doctor selection and insurance support</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for Laparoscopy Surgery?",
    answer:
      "At PureCheckup, expert surgeons recommend personalized treatment plans based on each patient’s diagnosis, ensuring minimal pain and faster recovery.",
  },
  {
    id: "six",
    question: "What are the first signs that Laparoscopy Surgery may be needed?",
    answer:
      "Persistent abdominal or pelvic pain, bloating, and irregular digestion may indicate the need for diagnostic laparoscopy. PureCheckup provides expert evaluation and guidance.",
  },
  {
    id: "seven",
    question: "How painful is Laparoscopy Surgery treatment?",
    answer:
      "Laparoscopy is performed under anesthesia and is generally painless. PureCheckup ensures complete comfort and professional pain management during recovery.",
  },
  {
    id: "eight",
    question: "Is Laparoscopy Surgery safe?",
    answer:
      "Yes. When performed by experienced surgeons, laparoscopy is one of the safest minimally invasive surgeries. PureCheckup ensures advanced facilities and strict safety standards.",
  },
  {
    id: "nine",
    question: "How long does it take to recover from Laparoscopy Surgery?",
    answer:
      "Most patients recover within a few days after laparoscopy. The recovery period depends on the specific procedure and health condition. PureCheckup offers full post-surgery care and guidance.",
  },
  {
    id: "ten",
    question: "Why choose PureCheckup for Laparoscopy Surgery?",
    answer:
      "PureCheckup offers top surgeons, advanced hospitals, personalized treatment, insurance assistance, and 24/7 care — making it the most trusted choice for laparoscopy surgery in India.",
  },
];

const laparoscopySurgeryData = {
  title1: "Laparoscopy Surgery?",
  title2: "Minimally Invasive Abdominal & Pelvic Procedures",
  description:
    "Laparoscopy Surgery is a modern, minimally invasive surgical technique that allows doctors to diagnose and treat abdominal and pelvic conditions through small incisions. A laparoscope — a thin tube with a camera and light — provides clear visuals of internal organs, enabling precise and safe procedures with faster healing and minimal pain. At PureCheckup, we connect patients with expert laparoscopic surgeons across India for advanced, trusted care.",

  tabsData: [
    {
      value: "what-is-laparoscopy-surgery",
      label: "What is Laparoscopy Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Laparoscopy Surgery is a minimally invasive technique that uses a
            laparoscope — a thin, flexible tube with a camera — to allow
            surgeons to view and operate on internal organs through tiny
            incisions. This method replaces large open cuts, ensuring less pain
            and quicker recovery.
          </p>
          <p>
            At PureCheckup, our partnered surgeons use state-of-the-art
            laparoscopic systems to perform complex abdominal and pelvic
            surgeries with exceptional accuracy and safety.
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
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Diagnostic Laparoscopy:</strong> To visually examine
              abdominal or pelvic organs for accurate diagnosis.
            </li>
            <li>
              <strong>Laparoscopic Cholecystectomy:</strong> Gallbladder removal
              due to stones or infection.
            </li>
            <li>
              <strong>Laparoscopic Appendectomy:</strong> Safe and quick removal
              of the appendix.
            </li>
            <li>
              <strong>Laparoscopic Hernia Repair:</strong> Minimally invasive
              correction of hernias.
            </li>
            <li>
              <strong>Laparoscopic Hysterectomy:</strong> Uterus removal with
              minimal blood loss.
            </li>
            <li>
              <strong>Laparoscopic Ovarian Cyst Removal:</strong> Preserves
              fertility while removing cysts.
            </li>
            <li>
              <strong>Laparoscopic Bariatric Surgery:</strong> Weight-loss
              surgery for obesity management.
            </li>
            <li>
              <strong>Laparoscopic Endometriosis Treatment:</strong> Relief from
              chronic pelvic pain and inflammation.
            </li>
          </ul>
          <p>
            All procedures are conducted by certified laparoscopic surgeons in
            PureCheckup-partnered hospitals equipped with cutting-edge
            technology.
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
          <ul className="list-disc list-inside space-y-2">
            <li>Gallstones or gallbladder inflammation</li>
            <li>Appendicitis or unexplained abdominal pain</li>
            <li>Hernia complications or bowel blockages</li>
            <li>Ovarian cysts or endometriosis</li>
            <li>Pelvic inflammatory disease (PID)</li>
            <li>Abnormal growths or tumors</li>
            <li>Chronic infections or adhesions</li>
          </ul>
          <p>
            Doctors recommend laparoscopy for both diagnosis and treatment to
            identify internal issues accurately and treat them with minimal
            trauma.
          </p>
        </div>
      ),
    },
    {
      value: "symptoms",
      label: "Symptoms / Signs",
      icon: <HeartPulse className="text-pink-600" />,
      content: (
        <div className="space-y-3">
          <ul className="list-disc list-inside space-y-2">
            <li>Persistent abdominal or pelvic pain</li>
            <li>Bloating or abdominal swelling</li>
            <li>Digestive problems or bowel irregularities</li>
            <li>Recurrent urinary or reproductive issues</li>
            <li>Irregular menstrual bleeding (in women)</li>
            <li>Unexplained nausea or discomfort</li>
          </ul>
          <p>
            If you experience these symptoms, consult a laparoscopic specialist
            via PureCheckup to identify the root cause and receive timely
            treatment.
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
          <ul className="list-disc list-inside space-y-2">
            <li>Smaller incisions — faster healing</li>
            <li>Minimal post-surgery pain and scarring</li>
            <li>Reduced hospital stay and downtime</li>
            <li>Lower infection risk and complications</li>
            <li>Day-care or short-stay options available</li>
            <li>High diagnostic accuracy using HD visuals</li>
            <li>Improved cosmetic outcomes and comfort</li>
          </ul>
          <p>
            Laparoscopy ensures precision, safety, and rapid recovery —
            empowering patients to return to normal life quickly.
          </p>
        </div>
      ),
    },
  ],

  doctorName: "Expert Laparoscopy Surgery Treatment – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>
        PureCheckup connects patients with India’s leading laparoscopic surgeons
        and NABH-accredited hospitals for world-class surgical care.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Advanced 3D and HD laparoscopic systems</li>
        <li>Experienced surgeons with 15+ years of expertise</li>
        <li>Personalized pre- and post-operative support</li>
        <li>Cashless insurance and EMI options available</li>
        <li>Free online consultation and same-day appointment booking</li>
      </ul>
      <p>
        From diagnosis to recovery, PureCheckup ensures a smooth, safe, and
        stress-free surgical experience with trusted specialists.
      </p>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/laparoscopy-surgery",
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
    title: "Advanced Laparoscopy Surgery (Recommended)",
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
   
const LaparoscopySurgery = () => {
    return (
        <>
            <ConditionHeroSection
            title="Safe, Precise & Painless Laparoscopy Surgery in India for Quick Recovery"
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
                title2={laparoscopySurgeryData.title1}
                description={laparoscopySurgeryData.description}
                tabsData={laparoscopySurgeryData.tabsData}
                expertHeading= {laparoscopySurgeryData.doctorName}
                doctorName="" 
                doctorDescription={laparoscopySurgeryData.doctorDescription}
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
                treatmentName="Laparoscopy Surgery"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Laparoscopy Surgery",
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

export default LaparoscopySurgery;
