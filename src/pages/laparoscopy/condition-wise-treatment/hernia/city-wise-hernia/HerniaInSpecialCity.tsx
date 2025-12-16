import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SpecialistCard, StatsBar } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { TreatmentCard } from "@/components";
import { BenefitCard } from "@/components";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";
import { FAQ } from "@/components";
import { TreatmentProcess } from "@/components";

const treatments = [
  {
    title: "Laparoscopic Hernia Repair",
    description:
      "A minimally invasive procedure performed through tiny incisions using a laparoscope. Ensures faster recovery, minimal pain, and almost no visible scarring.",
    downtime: "2–5 days",
  },
  {
    title: "Open Hernia Surgery",
    description:
      "A traditional method involving a single larger incision to repair the hernia using mesh or sutures. Effective for large, recurrent, or complex hernias.",
    downtime: "1–2 weeks",
  },
  {
    title: "Mesh Repair Technique",
    description:
      "Reinforces the weakened abdominal wall using a surgical mesh to reduce recurrence. Commonly used in both open and laparoscopic repairs.",
    downtime: "3–6 days",
  },
  {
    title: "Emergency Hernia Repair",
    description:
      "Performed when the hernia becomes strangulated or obstructed. Immediate surgery is required to prevent severe complications and restore blood flow.",
    downtime: "Varies per condition",
  },
  {
    title: "Non-Surgical Management (Watchful Waiting)",
    description:
      "Recommended for small, painless hernias. Involves regular monitoring and lifestyle adjustments until surgery is necessary.",
    downtime: "No downtime",
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

const HerniaInSpecialCity = () => {
  let { city } = useParams();

  // Capitalize first letter of city name
  city = city && city.charAt(0).toUpperCase() + city.slice(1);

  if (!city) {
    return <div>Loading...</div>;
  }

  const faqs = [
    {
      id: "one",
      question: `What is the best treatment for hernia in ${city}?`,
      answer: `The most preferred and effective treatment for hernia in ${city} is laparoscopic hernia repair. It is minimally invasive, offers faster recovery, minimal pain, and very small scars. It is suitable for inguinal, umbilical, and incisional hernias.`,
    },
    {
      id: "two",
      question: "How long does it take to recover after hernia surgery?",
      answer:
        "Recovery time depends on the surgical technique. Laparoscopic repair typically requires 2–5 days, while open repair takes 1–2 weeks. Most patients resume normal activities within a few days under medical guidance.",
    },
    {
      id: "three",
      question: `Is hernia surgery painful in ${city}?`,
      answer:
        `No. Hernia surgery at PureCheckup in ${city} is performed under anesthesia, so there is no pain during the procedure. After surgery, discomfort is minimal and easily managed with prescribed medicines.`,
    },
    {
      id: "four",
      question: "Can a hernia heal without surgery?",
      answer:
        "A hernia cannot heal on its own. Small, painless hernias may be managed temporarily through watchful waiting, but surgery is the only permanent solution once symptoms appear or the hernia enlarges.",
    },
    {
      id: "five",
      question: `Is hernia surgery covered under insurance in ${city}?`,
      answer:
        `Yes. Most major health insurance plans cover hernia surgery in ${city}. PureCheckup assists with complete documentation, cashless approval, and reimbursement support for a smooth experience.`,
    },
    {
      id: "six",
      question: "What happens if a hernia is left untreated?",
      answer:
        "If untreated, a hernia may grow larger and can become strangulated, cutting off blood supply to the trapped tissue. This is a medical emergency requiring immediate surgery.",
    },
    {
      id: "seven",
      question: `How do I choose the best hernia surgeon in ${city}?`,
      answer: `Choose a qualified general or laparoscopic surgeon with strong experience, good hospital facilities, and positive patient outcomes. PureCheckup connects you with verified and experienced hernia specialists in ${city}.`,
    },
    {
      id: "eight",
      question: "What precautions should I take after hernia surgery?",
      answer:
        "Avoid lifting heavy objects for 4–6 weeks, eat fiber-rich foods to prevent constipation, keep the incision area clean and dry, and attend all follow-up appointments for proper healing.",
    },
    {
      id: "nine",
      question: "Are there any risks in hernia surgery?",
      answer:
        "Hernia surgery is generally safe. Rarely, mild swelling or discomfort may occur, which settles with medication. At PureCheckup, all procedures are performed by certified surgeons in sterile conditions to ensure safety.",
    },
    {
      id: "ten",
      question: `How can I book a hernia consultation in ${city}?`,
      answer: `You can book a free consultation by calling 9211930749, visiting PureCheckup.com/treatment/hernia/${city}, or chatting with our team on WhatsApp for instant assistance.`,
    },
  ];



  return (
    <div className="min-h-screen">
      <ConditionHeroSection
        title={`Best Hernia Treatment & Surgery in ${city} – Safe, Affordable & Advanced Care at PureCheckup`}
        description={`Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across ${city?.toLocaleLowerCase()}`}
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
        <Heading text1="FAQs on Hernia Treatment in" text2={city} />
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
          treatmentName="Hernia"
          costSubtitle="Pricing varies by case severity, city, and insurance coverage."
          paymentOptions="Payment Options: EMI Available | Cashless Insurance"
          costFactors={[
            "Grade and type of Hernia",
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

export default HerniaInSpecialCity;