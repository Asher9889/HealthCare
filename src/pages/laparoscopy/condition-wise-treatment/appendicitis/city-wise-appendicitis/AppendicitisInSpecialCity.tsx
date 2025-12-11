import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { TreatmentCard, TreatmentProcess, BenefitCard } from "@/components";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";
import { FAQ } from "@/components";

const treatments = [
  {
    title: "Laparoscopic Appendectomy",
    description:
      "Minimally invasive appendix removal with small cuts, less pain, and a short 1–2 day hospital stay.",
    downtime: "2–5 days",
  },
  {
    title: "Open Appendectomy",
    description:
      "Traditional surgery recommended for ruptured or complex appendicitis cases.",
    downtime: "2–3 weeks",
  },
  {
    title: "Emergency Appendicitis Management",
    description:
      "Immediate diagnosis and stabilization for severe abdominal pain or infection before surgery.",
    downtime: "1–3 days",
  },
  {
    title: "Laparoscopic Revision Surgery",
    description:
      "Advanced corrective surgery for recurrent appendicitis issues or post-surgical complications.",
    downtime: "3–7 days",
  },
  {
    title: "Post-Surgery Diet & Recovery Care",
    description:
      "Tailored diet plans and recovery guidelines to restore digestion and prevent post-surgery complications.",
    downtime: "1–2 days",
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

const AppendicitisInSpecialCity = () => {
  let { city } = useParams();

  // Capitalize first letter of city name
  city = city && city.charAt(0).toUpperCase() + city.slice(1);

  if (!city) {
    return <div>Loading...</div>;
  }

  const faqs = [
    {
      id: "one",
      question: "What are the common symptoms of appendicitis?",
      answer:
        "Severe lower-right abdominal pain, nausea, vomiting, fever, and loss of appetite are common warning signs.",
    },
    {
      id: "two",
      question: "How is appendicitis diagnosed?",
      answer:
        "Doctors perform a physical examination, ultrasound, or CT scan to confirm appendix inflammation or infection.",
    },
    {
      id: "three",
      question: "When is surgery required for appendicitis?",
      answer:
        "Surgery is recommended immediately when the appendix is inflamed or at risk of bursting.",
    },
    {
      id: "four",
      question: "What is laparoscopic appendectomy?",
      answer:
        "It is a minimally invasive surgery performed using tiny incisions, offering faster healing and minimal scarring.",
    },
    {
      id: "five",
      question: "Is laparoscopic surgery safe for children or elderly patients?",
      answer:
        "Yes, laparoscopic appendectomy is considered safe for both children and elderly patients when performed by experienced surgeons.",
    },
    {
      id: "six",
      question: "How long does recovery take after appendectomy?",
      answer:
        "Most patients resume normal activities within a week with minor restrictions.",
    },
    {
      id: "seven",
      question: "Can appendicitis be treated without surgery?",
      answer:
        "Mild cases may be temporarily managed with antibiotics, but surgery is the only permanent cure for appendicitis.",
    },
    {
      id: "eight",
      question: `Does PureCheckup offer cashless insurance in ${city}?`,
      answer:
        `Yes, PureCheckup provides cashless insurance claim assistance and 0% EMI options at partner hospitals in ${city}.`,
    },
    {
      id: "nine",
      question: "Are there dietary restrictions after appendectomy?",
      answer:
        "A soft, fiber-rich diet is recommended for 1–2 weeks to support smooth digestion and healing.",
    },
    {
      id: "ten",
      question: `Why choose PureCheckup for appendicitis treatment in ${city}?`,
      answer:
        `PureCheckup offers trusted surgeons, modern hospitals, transparent treatment processes, and 24×7 support to ensure a safe and smooth recovery in ${city}.`,
    },
  ];


  const seoData = {
    title: `Appendicitis Surgery in ${city} | Call 9211930749 | PureCheckup`,
    description: `Get expert and safe laparoscopic appendicitis surgery in ${city}. Book a free consultation with No-Cost EMI support at PureCheckup today.`,
    keywords: [
      `appendicitis treatment in ${city}`,
      `appendicitis surgery in ${city}`,
      `laparoscopic appendicitis surgery in ${city}`,
      `best hospital for appendicitis in ${city}`,
      `appendicitis specialist doctor in ${city}`,
      `appendix removal surgery in ${city}`,
      `appendectomy in ${city}`,
      `appendix surgery near me`,
      `appendix operation in ${city}`,
      `appendix treatment hospital in ${city}`,
    ].join(", "),
    canonical: `https://purecheckup.com/treatment/appendicitis/${city.toLowerCase()}`,
  }


  return (
    <div className="min-h-screen">
      <SEO {...seoData} />
      <ConditionHeroSection
        title={`Advanced Appendicitis Treatment in ${city} – Laparoscopic Surgery | PureCheckup`}
        description="Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across City"
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
        <Heading text1="Top 10 FAQs on Appendicitis Surgery in" text2={city} />
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
          treatmentName="Appendicitis"
          costSubtitle="Pricing varies by case severity, city, and insurance coverage."
          paymentOptions="Payment Options: EMI Available | Cashless Insurance"
          costFactors={[
            "Grade and type of appendicitis",
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

export default AppendicitisInSpecialCity;