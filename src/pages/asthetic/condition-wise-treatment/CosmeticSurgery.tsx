import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading,  StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";

const faqs = [
  {
    id: "one",
    question: "What is the cost of cosmetic surgery treatment in India?",
    answer:
      "The cost varies depending on the procedure type, surgeon expertise, clinic location, and medical complexity. PureCheckup provides transparent pricing and connects you with specialists offering competitive rates.",
  },
  {
    id: "two",
    question: "Does insurance cover cosmetic surgery treatment?",
    answer:
      "Cosmetic surgeries for appearance enhancement are generally not covered. Reconstructive surgeries like burn correction or post-trauma repair may be partially or fully covered. PureCheckup helps you check insurance eligibility.",
  },
  {
    id: "three",
    question: "Which healthcare service provider offers the best treatment in India?",
    answer:
      "PureCheckup partners with top-rated cosmetic and plastic surgery hospitals and board-certified specialists across India to ensure safety, quality, and best-in-class care.",
  },
  {
    id: "four",
    question: "How to book a cosmetic surgery consultation with PureCheckup?",
    answer: (
      <div className="space-y-2 text-(--text-primary) font-medium">
        <p>Booking is simple:</p>
        <ul className="list-decimal list-inside space-y-1">
          <li>Visit PureCheckup.com</li>
          <li>Choose “Cosmetic Surgery”</li>
          <li>Fill out the consultation form</li>
          <li>Our care team will connect you with the right surgeon</li>
        </ul>
      </div>
    ),
  },
  {
    id: "five",
    question: "What is the best treatment for cosmetic surgery?",
    answer:
      "It depends on your goals and medical evaluation. Popular options include facelift, liposuction, rhinoplasty, breast augmentation, and tummy tuck, performed using advanced minimally invasive techniques.",
  },
  {
    id: "six",
    question: "What are the first signs you may need cosmetic surgery?",
    answer:
      "Dissatisfaction with facial or body features, visible aging signs, scars, or deformities are indicators to consult a cosmetic surgeon.",
  },
  {
    id: "seven",
    question: "How painful is cosmetic surgery treatment?",
    answer:
      "Modern laser-assisted and minimally invasive techniques ensure minimal discomfort. Patients often return to normal activities within a few days depending on the procedure.",
  },
  {
    id: "eight",
    question: "What are the risks associated with cosmetic surgery?",
    answer:
      "Risks are minimal when performed by qualified surgeons under sterile conditions. Swelling or mild bruising may occur but typically subsides within days.",
  },
  {
    id: "nine",
    question: "How long does recovery take after cosmetic surgery?",
    answer:
      "Recovery varies from a few days to a couple of weeks depending on procedure type and individual healing. Experts guide you through every step.",
  },
  {
    id: "ten",
    question: "Why choose India for cosmetic surgery?",
    answer:
      "India offers affordable, high-quality cosmetic procedures with world-class surgeons, advanced medical facilities, and cost-effective packages, making it a trusted destination for national and international patients.",
  },
];


const cosmeticSurgeryData = {
  title1: "Cosmetic Surgery ?",
  title2: "Enhancing Aesthetics & Confidence",
  description:
    "Cosmetic surgery focuses on improving appearance, reshaping facial and body features, and restoring confidence. Both surgical and non-surgical treatments are available, ensuring safe, natural, and long-lasting results.",
  tabsData: [
    {
      value: "what-is-cosmetic-surgery",
      label: "What is Cosmetic Surgery?",
      icon: <Activity className="text-blue-600" />,
      content: (
        <div className="space-y-3">
          <p>
            Cosmetic surgery is a branch of plastic surgery that enhances aesthetics and restores confidence. Procedures include facial, body, breast, and skin treatments using advanced surgical and non-surgical techniques.
          </p>
          <p>
            At PureCheckup, board-certified surgeons ensure safe, natural-looking results with minimal downtime and personalized care.
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
            <li><strong>Facial Cosmetic Surgeries:</strong> Rhinoplasty, facelift, blepharoplasty, chin/jawline contouring, lip augmentation.</li>
            <li><strong>Body Contouring Surgeries:</strong> Liposuction, tummy tuck, body lift, thigh lift, arm lift.</li>
            <li><strong>Breast Cosmetic Surgeries:</strong> Breast augmentation, reduction, lift, gynecomastia surgery.</li>
            <li><strong>Skin & Aesthetic Procedures:</strong> Botox, fillers, chemical peels, laser skin resurfacing, scar and stretch mark removal.</li>
            <li><strong>Reconstructive & Restorative Surgeries:</strong> Post-trauma facial reconstruction, burn scar revision, cleft lip & palate repair.</li>
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
            <li>Enhancing physical appearance or correcting asymmetry</li>
            <li>Restoring youthfulness and confidence</li>
            <li>Correcting birth defects or post-injury deformities</li>
            <li>Body transformation after major weight loss or pregnancy</li>
            <li>Professional appearance enhancement</li>
            <li>Improving emotional well-being and self-esteem</li>
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
            <li>Dissatisfaction with certain facial or body features</li>
            <li>Uneven or disproportionate body shape</li>
            <li>Visible scars, wrinkles, or sagging skin</li>
            <li>Nose deformity or breathing issues</li>
            <li>Post-burn or post-accident marks</li>
            <li>Body contour concerns after weight loss or childbirth</li>
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
            <li>Enhanced confidence and self-esteem</li>
            <li>Restored youthful appearance</li>
            <li>Improved physical health (e.g., breathing post-rhinoplasty)</li>
            <li>Correction of deformities or scars</li>
            <li>Safe, long-lasting, and natural results</li>
            <li>Minimally invasive options available</li>
          </ul>
        </div>
      ),
    },
  ],

  doctorName: "Expert Cosmetic Surgery Treatment – PureCheckup",
  doctorDescription: (
    <div className="space-y-4">
      <p>PureCheckup provides end-to-end cosmetic surgery care:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Experienced board-certified cosmetic and reconstructive surgeons</li>
        <li>Latest equipment and hygienic operation theatres</li>
        <li>Patient-centric, confidential approach</li>
        <li>Personalized pre- and post-surgery care</li>
        <li>EMI & cashless payment options</li>
        <li>Assistance with insurance and hospitalization</li>
      </ul>
    </div>
  ),
  doctorLink: "https://purecheckup.com/treatment/cosmetic-surgery",
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
    title: "Advanced Cosmetic Surgery (Recommended)",
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
   
const CosmeticSurgery = () => {
    return (
        <>
            <ConditionHeroSection
            title="Discover a New You with Safe & Advanced Cosmetic Surgery in India"
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

            {/* <section className="py-20 mx-auto px-4 max-w-7xl">
              <Heading text1="Meet Our" text2="Specialist" className="mb-10"   />
              {constantData.specialists.map((doc) => (
                <SpecialistCard key={doc.id} specialist={doc} />
              ))}
            </section> */}

            <WhyPristynCare />

            <ConditionInfo
                title1="What is"
                title2={cosmeticSurgeryData.title1}
                description={cosmeticSurgeryData.description}
                tabsData={cosmeticSurgeryData.tabsData}
                expertHeading= {cosmeticSurgeryData.doctorName}
                doctorName="" 
                doctorDescription={cosmeticSurgeryData.doctorDescription}
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
                treatmentName="Cosmetic Surgery"
                costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                costFactors={[
                  "Grade and type of Cosmetic Surgery",
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

export default CosmeticSurgery;