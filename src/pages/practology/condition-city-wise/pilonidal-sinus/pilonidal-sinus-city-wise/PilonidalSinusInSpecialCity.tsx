import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { TreatmentCard } from "../../piles/common/treatment-card/TreatmentCard";
import BenefitCard from "../../piles/common/benefit-card/BenefitCard";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";
import { FAQ } from "@/components";
import TreatmentProcess from "../../piles/common/treatment-process/TreatmentProcess";


const treatments = [
  {
    title: "Laser Pilonidal Sinus Surgery (FiLaC) – Most Preferred",
    description:
      "A minimally invasive laser technique that closes the sinus tract from inside. Causes minimal pain, almost no bleeding, and ensures faster healing with low recurrence. Suitable for Grade II–III pilonidal sinus.",
    downtime: "1–3 days",
  },
  {
    title: "Endoscopic Pilonidal Sinus Treatment (EPSiT)",
    description:
      "An advanced endoscopic procedure where a tiny camera is used to directly visualize, clean, and destroy the sinus tract. Leaves very small scars and promotes rapid recovery.",
    downtime: "2–5 days",
  },
  {
    title: "Laser Ablation + Sinus Tract Cleaning",
    description:
      "Combination therapy where the sinus tract is thoroughly cleaned followed by controlled laser ablation. Helps reduce infection risk and recurrence, ideal for moderate sinus cases.",
    downtime: "24–48 hours",
  },
  {
    title: "Minimally Invasive Pit Picking Surgery",
    description:
      "A small-incision technique where infected pits are removed using micro-cuts. Causes minimal tissue damage and is an excellent option for early-stage or recurrent pilonidal sinus.",
    downtime: "2–4 days",
  },
  {
    title: "Traditional Open Excision Surgery",
    description:
      "A conventional surgical method where the entire infected sinus tract is excised. Recommended for large, complex, or repeatedly infected pilonidal sinuses. Healing time is longer compared to minimally invasive methods.",
    downtime: "2–4 weeks",
  },
];


const testimonials = [
  {
    quote:
      "I was suffering from piles for years. After the treatment, my pain and bleeding stopped completely. I feel like I got my life back.",
    name: "Preeti Sharma",
    designation: "Patient from Jaipur",
    // src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3540&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote:
      "The doctors were very patient and explained everything in detail. The laser treatment was painless and I was able to return to work within two days.",
    name: "Priya Verma",
    designation: "Patient from Delhi",
    // src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3540&auto=format&fit=crop",
    stars: 4.5,
  },
  {
    quote:
      "I was really scared before the procedure, but the staff made me comfortable. The recovery was quick and much easier than I expected.",
    name: "Amit Patel",
    designation: "Patient from Ahmedabad",
    // src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3540&auto=format&fit=crop",
    stars: 4,
  },
  {
    quote:
      "I had tried many home remedies but nothing worked. After consulting here, my piles problem was solved without any complications.",
    name: "Sanjeev Gupta",
    designation: "Patient from Lucknow",
    // src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=3540&auto=format&fit=crop",
    stars: 5,
  },
  {
    quote:
      "Excellent treatment and modern facilities. The doctor’s approach was very reassuring and I am completely cured now.",
    name: "Vikram Singh",
    designation: "Patient from Mumbai",
    // src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2592&auto=format&fit=crop",
    stars: 5,
  },
];

const benefits = [
  { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
  { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
  { title: "No-Cost EMI", img: ncemi, bg: bg3 },
  { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
];





const PilonidalSinusInSpecialCity = () => {
  let { city } = useParams();

  // Capitalize first letter of city name
  city = city && city.charAt(0).toUpperCase() + city.slice(1);


  if (!city) {
    return <div>Loading...</div>;
  }
  const faqs = [
    {
      id: "one",
      question: "What is the best treatment for pilonidal sinus?",
      answer:
        "The most effective treatment is minimally invasive laser pilonidal sinus surgery, which offers faster healing, minimal pain, and reduced recurrence.",
    },
    {
      id: "two",
      question: "Does pilonidal sinus require surgery?",
      answer:
        "In most cases, yes. Surgery is recommended to remove the sinus tract and prevent repeated infections and abscess formation.",
    },
    {
      id: "three",
      question: "Is laser surgery for pilonidal sinus painful?",
      answer:
        "Laser surgery is almost painless, bloodless, and allows much quicker recovery compared to traditional open excision surgery.",
    },
    {
      id: "four",
      question: "How long does pilonidal sinus laser surgery take?",
      answer:
        "The laser procedure typically takes only 20–30 minutes and is done as a daycare treatment, allowing the patient to go home the same day.",
    },
    {
      id: "five",
      question: "What is the recovery time after pilonidal sinus surgery?",
      answer:
        "Recovery usually takes 2–5 days depending on the severity of the sinus and the treatment method used.",
    },
    {
      id: "six",
      question: "Can pilonidal sinus return after treatment?",
      answer:
        "Recurrence is significantly lower with laser surgery compared to traditional open surgery, thanks to better tract sealing and minimal tissue damage.",
    },
    {
      id: "seven",
      question: "Are pilonidal sinus surgeries covered under insurance?",
      answer:
        "Yes, most insurance plans cover pilonidal sinus surgery. PureCheckup provides full support for cashless approval and reimbursement.",
    },
    {
      id: "eight",
      question: "What are the symptoms of a pilonidal sinus?",
      answer:
        "Common symptoms include pain, swelling, redness, pus discharge, fever, and a small dimple or opening near the tailbone.",
    },
    {
      id: "nine",
      question: `Why choose PureCheckup for pilonidal sinus treatment${city ? " in " + city : ""}?`,
      answer:
        `PureCheckup offers expert surgeons, advanced laser technology, free consultation, personalized care assistance, and a seamless treatment experience${city ? " across " + city : ""}.`,
    },
    {
      id: "ten",
      question: "Can I return to work after laser surgery?",
      answer:
        "Yes, most patients return to work within 2–3 days, depending on comfort and healing progress.",
    },
  ];

  const seoData = {
    title: `Pilonidal Sinus Surgery in ${city} | Call 9211930749 | PureCheckup`,
    description: `Get advanced Pilonidal Sinus Laser Surgery in ${city} with expert surgeons. No-Cost EMI available. Book a free consultation today at PureCheckup.`,
    keywords: [
      `Anal Fissure Treatment in ${city}`,
      `Fissure Surgery in ${city}`,
      `Laser Fissure Treatment in ${city}`,
      `Best Fissure Doctor in ${city}`,
      `Fissure Specialist in ${city}`,
      `Fissure Hospital near me`,
      `Fissure Treatment Hospital ${city}`,
      `PureCheckup ${city}`,
      `Painless Fissure Treatment ${city}`,
    ].join(", "),
    canonical: `https://purecheckup.com/treatment/pilonidal-sinus/${city.toLowerCase().replace(/\s+/g, "-")}`,
  };



  return (
    <div className="min-h-screen">
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} canonical={seoData.canonical} />
      <ConditionHeroSection
        title={`Pilonidal Sinus Treatment in ${city} — Fast, Minimally-Invasive Care by Specialists`}
        description="Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across Jaipur."
        primaryBtn={{ label: "Book Free Consultation" }}
        secondaryBtn={{ label: "Call Now" }}
        features={["Expert Doctors", "Quick Recovery", "Top proctologists & gastroenterologists", "Same-week return to work"]}
        cities={constantData.cities}
        selectedCity={city}
        consultations={["Clinic", "Online"]}
      />
      <StatsBar />
      <section className="py-20 mx-auto max-w-7xl px-4">
        <Heading text1="Meet Our" text2="Specialist" className="mb-10" />
        {constantData.specialists.map((doc) => (
          <SpecialistCard key={doc.id} specialist={doc} />
        ))}
      </section>

      <section className="px-4 py-8 max-w-7xl mx-auto">
        <Heading text1="Treatment Options Available in" text2={city || ""} className="mb-6 text-center" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t, idx) => (
            <TreatmentCard
              key={idx}
              title={t.title}
              description={t.description}
              downtime={t.downtime}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => (
            <BenefitCard key={idx} title={b.title} image={b.img} bgImage={b.bg} />
          ))}
        </div>
      </section>
      <section className="">
        <Heading text1="Patient Stories" text2={city} />
        <AnimatedTestimonial testimonials={testimonials} />
      </section>
      <TreatmentProcess />
      <section className="pb-20 px-4">
        <Heading text1="FAQs on Anal Pilonidal Sinus in" text2={city} />
        <FAQ faqs={faqs} />
      </section>

      <section className="px-4">
        <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
      </section>



      <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Image */}
          <div
            className="hidden md:block bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
          />

          <ConditionTreatmentForm selectedCity={city} cities={constantData.cities} />
        </div>
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

    </div>
  )
}

export default PilonidalSinusInSpecialCity;