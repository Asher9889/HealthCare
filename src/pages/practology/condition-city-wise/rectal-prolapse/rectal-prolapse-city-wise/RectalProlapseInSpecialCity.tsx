import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { TreatmentCard } from "../../piles/common/treatment-card/TreatmentCard";
import BenefitCard from "../../piles/common/benefit-card/BenefitCard";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";
import FAQ from "../common/FAQ";
import TreatmentProcess from "../../piles/common/treatment-process/TreatmentProcess";

const treatments = [
  {
    title: "Laparoscopic Rectopexy",
    description:
      "A minimally invasive surgery where the rectum is lifted and secured in place to prevent prolapse. Offers faster recovery, minimal pain, and small incisions.",
    downtime: "5–7 days",
  },
  {
    title: "Suture Rectopexy",
    description:
      "A mesh-free procedure where the rectum is fixed using sutures. Suitable for younger patients or those who prefer non-mesh treatment with low complication rates.",
    downtime: "5–7 days",
  },
  {
    title: "Mesh Rectopexy",
    description:
      "Uses a surgical mesh to provide strong support and long-term stability to prevent recurrence. Recommended for moderate to severe prolapse cases.",
    downtime: "7–10 days",
  },
  {
    title: "Delorme Procedure",
    description:
      "A specialized technique for smaller prolapse cases, involving removal of the mucosa and tightening of the rectal muscle layers to restore rectal structure.",
    downtime: "3–5 days",
  },
  {
    title: "Altemeier Procedure",
    description:
      "A perineal rectosigmoidectomy performed through the perineum, ideal for elderly or high-risk patients. Reduces hospital stay and avoids major abdominal surgery.",
    downtime: "2–4 weeks",
  },
  {
    title: "Pelvic Floor Therapy",
    description:
      "Non-surgical rehabilitation focused on strengthening pelvic floor muscles, helping reduce symptoms in mild prolapse and preventing progression.",
    downtime: "None",
  },
  {
    title: "Constipation Management",
    description:
      "A structured diet and medication plan designed to reduce strain during bowel movements, which helps control and prevent worsening of prolapse.",
    downtime: "None",
  },
  {
    title: "Symptom Relief Care",
    description:
      "Includes safe manual reduction techniques, flare-up management, and medical guidance to improve comfort while planning definitive treatment.",
    downtime: "None",
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

const RectalProlapseInSpecialCity = () => {
  let { city } = useParams();

  // Capitalize first letter of city name
  city = city && city.charAt(0).toUpperCase() + city.slice(1);

  if (!city) {
    return <div>Loading...</div>;
  }

  const seoData = {
    title: `Rectal Prolapse Surgery in ${city} – PureCheckup`,
    description: `Get rectal prolapse treatment in ${city} with expert surgeons, insurance support, and free consultation. Call 9211930749 for No-Cost EMI.`,
    keywords: [
      `rectal prolapse treatment in ${city}`,
      `rectal prolapse surgery in ${city}`,
      `laser rectal treatment in ${city}`,
      `best rectal prolapse doctor in ${city}`,
      `rectal prolapse specialist in ${city}`,
      `rectal prolapse hospital near me`,
      `rectal prolapse hospital ${city}`,
      `PureCheckup ${city}`,
      `painless rectal prolapse treatment ${city}`,
    ].join(", "),
    canonical: `https://purecheckup.com/treatment/rectal-prolapse/${city}`,
  }


  return (
    <div className="min-h-screen">
      <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} canonical={seoData.canonical} />
      <ConditionHeroSection
        title={`Rectal Prolapse Treatment in ${city} — Fast, Minimally-Invasive Care by Specialists`}
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
        <Heading text1="FAQs on Rectal Prolapse Surgery in" text2={city} />
        <FAQ city={city} />
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
          treatmentName="Rectal Prolapse"
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

export default RectalProlapseInSpecialCity;