import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of plastic surgery treatment in India?",
    answer:
      "The cost depends on the type of procedure, hospital, and surgeon’s experience. Personalized estimates are recommended after consultation.",
  },
  {
    id: "two",
    question: "Does insurance cover plastic surgery treatment?",
    answer:
      "Reconstructive plastic surgeries caused by burns, trauma, or congenital issues are often covered. Cosmetic enhancements are usually not covered.",
  },
  {
    id: "three",
    question: "Which healthcare provider offers the best plastic surgery in India?",
    answer:
      "PureCheckup partners with top-tier surgeons and NABH-accredited hospitals offering safe, affordable plastic surgery across major Indian cities.",
  },
  {
    id: "four",
    question: "How to book a plastic surgery treatment with PureCheckup?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>Booking is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit PureCheckup.com</li>
          <li>Choose “Plastic Surgery”</li>
          <li>Fill out the consultation form</li>
          <li>Our care team will guide you through scheduling and treatment</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for plastic surgery?",
    answer:
      "It depends on your concern — rhinoplasty for nasal correction, liposuction for fat reduction, breast reconstruction for post-surgery restoration, etc.",
  },
  {
    id: "six",
    question: "What are the first signs that I might need plastic surgery?",
    answer:
      "Visible deformities, scars, asymmetry, or loss of facial/body proportion affecting confidence or comfort are signs to consult a specialist.",
  },
  {
    id: "seven",
    question: "How painful is plastic surgery treatment?",
    answer:
      "Modern minimally invasive and laser-assisted techniques ensure the procedure is safe, nearly painless, and allows faster recovery.",
  },
  {
    id: "eight",
    question: "Is plastic surgery safe in India?",
    answer:
      "Yes. India has world-class hospitals and board-certified surgeons performing thousands of safe, successful procedures annually.",
  },
  {
    id: "nine",
    question: "How long does it take to recover after plastic surgery?",
    answer:
      "Recovery varies by procedure, from a few days for minor treatments to a few weeks for major surgeries.",
  },
  {
    id: "ten",
    question: "Are the results of plastic surgery permanent?",
    answer:
      "Most results are long-lasting, provided you maintain a healthy lifestyle and follow post-treatment care guidelines.",
  },
];

const plasticSurgeryData = {
  title1: "Plastic Surgery ?",
  title2: "Advanced Reconstructive & Cosmetic Procedures",
  description:
    "Plastic surgery focuses on reconstructing, reshaping, and enhancing the human body to restore both function and aesthetics. Modern techniques in India allow natural-looking results with minimal downtime.",
  tabsData: [
    {
      value: "what-is-plastic-surgery",
      label: "What is Plastic Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Plastic surgery addresses congenital deformities, trauma, burn injuries, and cosmetic enhancement. Procedures are tailored to restore appearance and functionality while boosting confidence.
          </p>
          <p>
            With minimally invasive and advanced laser-assisted techniques, patients experience safe treatments, faster recovery, and natural results.
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
            <li><strong>Facial Plastic Surgery:</strong> Rhinoplasty, facelift, eyelid surgery, lip or chin enhancement.</li>
            <li><strong>Body Contouring:</strong> Liposuction, tummy tuck, arm lift, thigh lift.</li>
            <li><strong>Breast Surgery:</strong> Augmentation, reduction, reconstruction, and lift.</li>
            <li><strong>Reconstructive Surgery:</strong> Burn reconstruction, scar revision, cleft lip/palate repair, hand surgery.</li>
            <li><strong>Hair Restoration:</strong> FUE and FUT transplantation techniques.</li>
            <li><strong>Post-Weight Loss Surgery:</strong> Excess skin removal and full-body sculpting.</li>
            <li><strong>Intimate Aesthetic Surgery:</strong> Labiaplasty, vaginal tightening, genital reconstruction.</li>
          </ul>
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
            <li>Congenital deformities (e.g., cleft lip, ear deformities)</li>
            <li>Trauma or burn injury repair</li>
            <li>Improving appearance and self-esteem</li>
            <li>Reversing aging effects</li>
            <li>Enhancing body proportion and symmetry</li>
            <li>Post-cancer or post-surgery reconstruction</li>
          </ul>
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
            <li>Physical deformity or scars causing discomfort</li>
            <li>Breathing difficulties due to nasal structure</li>
            <li>Asymmetrical features affecting confidence</li>
            <li>Sagging or loose skin post-weight loss</li>
            <li>Post-trauma or burn scars</li>
            <li>Functional issues from birth defects or injury</li>
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
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced physical appearance and confidence</li>
            <li>Correction of birth or trauma-related deformities</li>
            <li>Long-lasting aesthetic improvement</li>
            <li>Improved functional ability (breathing, movement, etc.)</li>
            <li>Quick recovery with minimally invasive techniques</li>
            <li>Affordable cost compared to global standards</li>
            <li>Access to highly qualified, certified surgeons</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Plastic Surgery Treatment – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>PureCheckup provides end-to-end care with:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Personalized consultation with leading cosmetic surgeons</li>
        <li>Advanced surgical techniques using FDA-approved equipment</li>
        <li>100% transparent process with no hidden charges</li>
        <li>End-to-end support from consultation to recovery</li>
        <li>Cashless treatment options across hospitals</li>
      </ul>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/plastic-surgery",
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
    title: "Advanced Plastic Surgery (Recommended)",
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
   
const PlasticSurgery = () => {
    return (
        <>
            <ConditionHeroSection
            title="Transform Your Look Safely with Advanced Plastic Surgery Treatments in India"
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
                title2={plasticSurgeryData.title1}
                description={plasticSurgeryData.description}
                tabsData={plasticSurgeryData.tabsData}
                expertHeading= {plasticSurgeryData.doctorName}
                doctorName="" 
                doctorDescription={plasticSurgeryData.doctorDescription}
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
                treatmentName="Plastic Surgery"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Plastic Surgery",
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

export default PlasticSurgery;