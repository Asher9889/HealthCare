import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar, TreatmentBenefits, TreatmentCard } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const UmbilicalHerniaInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

   const faqs = [
  {
    id: "one",
    question: `Which is the best hospital for umbilical hernia surgery in ${city}?`,
    answer: `PureCheckup connects you with top NABH-accredited hospitals in ${city} offering advanced laparoscopic and open hernia repair treatments.`,
  },
  {
    id: "two",
    question: `How much does umbilical hernia surgery cost in ${city}?`,
    answer:
      `The cost of umbilical hernia surgery in ${city} varies based on the hospital, doctor’s experience, and type of treatment. PureCheckup also provides No-Cost EMI and insurance assistance for easy payment.`,
  },
  {
    id: "three",
    question: `Who is the best doctor for umbilical hernia treatment in ${city}?`,
    answer:
      `PureCheckup’s partner laparoscopic surgeons in ${city} specialize in minimally invasive hernia repair procedures that ensure faster recovery and minimal discomfort.`,
  },
  {
    id: "four",
    question: `Is umbilical hernia surgery available near me in ${city}?`,
    answer:
      `Yes. PureCheckup provides Umbilical Hernia Treatment near you in ${city}, offering free consultation, expert care, and complete treatment support.`,
  },
  {
    id: "five",
    question: `How long does it take to recover after hernia surgery in ${city}?`,
    answer:
      `Most patients recover within a few days and can return to normal activities soon after undergoing laparoscopic umbilical hernia repair in ${city}.`,
  },
  {
    id: "six",
    question: "Is umbilical hernia surgery painful?",
    answer:
      "No. The surgery is performed under anesthesia. With laparoscopic techniques, pain is minimal and healing is much faster compared to open surgery.",
  },
  {
    id: "seven",
    question: `Can an umbilical hernia be treated without surgery in ${city}?`,
    answer:
      "In adults, umbilical hernias typically require surgical repair for complete recovery. Non-surgical approaches offer only temporary relief.",
  },
  {
    id: "eight",
    question: `Does PureCheckup offer insurance and EMI for hernia surgery in ${city}?`,
    answer:
      `Yes. PureCheckup provides insurance support and 0% EMI options to make umbilical hernia treatment in ${city} affordable and hassle-free.`,
  },
  {
    id: "nine",
    question: `How do I book a free consultation for umbilical hernia in ${city}?`,
    answer:
      `You can call 9211930749 or visit PureCheckup.com to schedule a free doctor consultation in ${city}.`,
  },
  {
    id: "ten",
    question: `Why choose PureCheckup for Umbilical Hernia Treatment in ${city}?`,
    answer: (
      <div className="text-(--text-primary) font-medium space-y-2">
        <ul className="list-disc list-inside space-y-1">
          <li>Free Doctor Consultation</li>
          <li>0% EMI & Insurance Assistance</li>
          <li>Top Laparoscopic Surgeons</li>
          <li>Day-Care Surgery Options</li>
          <li>24×7 Medical Coordination</li>
        </ul>
      </div>
    ),
  },
];


    const umbilicalHerniaData = {
        title1: "Umbilical Hernia",
        title2: "Treatment & Information",
        description:
            "An umbilical hernia occurs when part of the intestine or fatty tissue pushes through the abdominal wall near the navel (belly button). It can affect infants, adults, and pregnant women. While small hernias may close naturally in infants, adults usually require surgical repair to prevent pain, infection, or bowel obstruction. At PureCheckup, we connect you with top hernia surgeons and NABH-accredited hospitals for safe, affordable, and advanced umbilical hernia treatment.",

        tabsData: [
            {
                value: "what-is-umbilical-hernia",
                label: "What is Umbilical Hernia?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div>
                        <p>
                            An umbilical hernia occurs when intestinal tissue or fat pushes through a weak spot in the abdominal wall near the belly button. It creates a noticeable bulge and may cause discomfort or pain, especially while lifting or bending.
                        </p>
                        <p className="mt-2">
                            It commonly affects infants, adults, and pregnant women. In most adults, surgery is recommended to avoid complications like strangulation or bowel obstruction.
                        </p>
                        <p className="mt-2">
                            At PureCheckup, we offer both open and laparoscopic hernia repair options using the latest mesh techniques to ensure safety, minimal pain, and quick recovery.
                        </p>
                    </div>
                ),
            },
            {
                value: "types",
                label: "Types",
                icon: <Syringe className="text-green-600" />,
                content: (
                    <div className="space-y-4">
                        <p>
                            There are two main types of umbilical hernia surgeries performed in India:
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Open Umbilical Hernia Repair:</strong> Involves a small incision near the navel to push back the herniated tissue and strengthen the wall using stitches or mesh. Ideal for large or recurrent hernias.
                            </li>

                            <li>
                                <strong>Laparoscopic Umbilical Hernia Repair:</strong> A minimally invasive technique using small incisions and a camera-guided tool, ensuring faster recovery, minimal scarring, and less pain. Preferred for working professionals and fitness enthusiasts.
                            </li>
                        </ul>

                        <p>
                            At PureCheckup, our partner hospitals offer both procedures with advanced technology and expert surgeons for long-term, recurrence-free results.
                        </p>
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
                            Umbilical hernias develop due to increased pressure or weakness in the abdominal wall. Common causes include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Obesity or sudden weight gain</li>
                            <li>Multiple pregnancies</li>
                            <li>Chronic coughing or constipation</li>
                            <li>Heavy lifting or strain</li>
                            <li>Previous abdominal surgery</li>
                            <li>Weak abdominal muscles since birth</li>
                        </ul>
                        <p className="mt-2">
                            Identifying the underlying cause is crucial to prevent recurrence after surgical repair.
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
                        <p className="mb-4">
                            Common symptoms of umbilical hernia include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Visible bulge or swelling near the belly button</li>
                            <li>Pain or discomfort when coughing, bending, or lifting</li>
                            <li>Pressure or fullness around the navel area</li>
                            <li>Vomiting, redness, or tenderness in severe cases (may indicate strangulated hernia)</li>
                        </ul>
                        <p className="mt-2">
                            If you experience persistent pain or swelling, contact PureCheckup’s hernia specialists for prompt evaluation and treatment.
                        </p>
                    </div>
                ),
            },
            {
                value: "benefits",
                label: "Benefit",
                icon: <Stethoscope className="text-red-600" />,
                content: (
                    <div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Permanent hernia repair and prevention of complications</li>
                            <li>Relief from pain and abdominal pressure</li>
                            <li>Faster recovery with laparoscopic surgery</li>
                            <li>Improved abdominal strength and stability</li>
                            <li>Better appearance near the navel</li>
                            <li>Same-day discharge and insurance support</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Umbilical Hernia Surgeons – PureCheckup Healthcare",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    PureCheckup is India’s most trusted platform for modern hernia treatments. We connect patients with experienced surgeons and NABH-accredited hospitals for advanced umbilical hernia repair.
                </p>
                <p>
                    Our network hospitals in cities like Ahmedabad, Jaipur, Indore, Delhi, Gurgaon, Lucknow, and Mumbai provide high-quality care with the latest mesh and laparoscopic techniques.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>NABH-accredited hospitals</li>
                    <li>Free consultation and cost transparency</li>
                    <li>Cashless insurance and easy EMI options</li>
                    <li>24×7 assistance and end-to-end care coordination</li>
                    <li>Free pickup, admission, and discharge support</li>
                </ul>
                <p>
                    Experience a seamless and stress-free surgery journey with PureCheckup — from consultation to complete recovery.
                </p>
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

    const treatments = [
  {
    title: "Laparoscopic Umbilical Hernia Repair",
    description:
      "Minimally invasive procedure using small incisions and a laparoscope. Offers faster recovery, minimal pain, and no large scars.",
    downtime: "2–4 days",
  },
  {
    title: "Open Umbilical Hernia Repair",
    description:
      "Traditional surgical method used for larger hernias or cases with complications. Involves a small incision at the navel with mesh reinforcement.",
    downtime: "1–2 weeks",
  },
  {
    title: "Mesh Hernioplasty",
    description:
      "An advanced technique where a synthetic mesh is placed to strengthen the abdominal wall and prevent recurrence. Ideal for adult hernia repair.",
    downtime: "2–5 days",
  },
  {
    title: "Tension-Free Hernia Repair",
    description:
      "A modern technique that avoids muscle tension, reducing post-surgery discomfort and speeding up overall healing.",
    downtime: "3–5 days",
  },
  {
    title: "Day-Care Umbilical Hernia Surgery",
    description:
      "Ideal for small hernias. Patients can go home the same day after surgery with minimal pain and very quick recovery.",
    downtime: "24–48 hours",
  },
];


    if (!city) {
        return <div>Loading...</div>;
    }

    const seoData = {
        title: `Umbilical Hernia Surgery in ${city} | Call 9211930749 | PureCheckup`,
        description: `Get expert Umbilical Hernia treatment in ${city} with experienced surgeons, insurance support, and No-Cost EMI. Book your free consultation today at PureCheckup.`,
        keywords: `
    Umbilical Hernia Treatment in ${city},
    Umbilical Hernia Surgery in ${city},
    Best Umbilical Hernia Doctor in ${city},
    Umbilical Hernia Hospital near me,
    Laparoscopic Hernia Surgery ${city},
    Affordable Hernia Treatment ${city},
    Umbilical Hernia Surgeon ${city},
    Hernia Repair Surgery in ${city},
    PureCheckup ${city}
  `,
        canonical: `https://purecheckup.com/treatment/umbilical-hernia/${city}`,
    }

    return (
        <>
            <SEO {...seoData} />
            <ConditionHeroSection
                title={`Umbilical Hernia Surgery in ${city} – Cost, Procedure, Recovery & Expert Care`}
                description={`Pain-free, advanced laser treatment in ${city} with same-day discharge and full insurance support.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["✅ NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
                cities={constantData.cities}
                selectedCity={city}
                consultations={["Clinic", "Online"]}
            />

            <section className="py-10">
                <Heading text1="Quick" text2="Benefits" />
                <TreatmentBenefits benefits={benefits} />
            </section>

            <StatsBar />
            <section className="py-20 mx-auto px-4 max-w-7xl">
                <Heading text1="Meet Our" text2="Specialist" className="mb-10" />
                {constantData.specialists.map((doc) => (
                    <SpecialistCard key={doc.id} specialist={doc} />
                ))}
            </section>

            <WhyPristynCare />

            <ConditionInfo
                title1="What is"
                title2={umbilicalHerniaData.title1}
                description={umbilicalHerniaData.description}
                tabsData={umbilicalHerniaData.tabsData}
                expertHeading={umbilicalHerniaData.doctorName}
                doctorName=""
                doctorDescription={umbilicalHerniaData.doctorDescription}
                doctorLink="https://purecheckup.com"
                ctaText="Book Free Appointment"
            />

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
            

            <section className="py-20 px-4">
                <Heading text1="Frequently Asked Questions in " text2={`${city}`} className="mb-10" />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-3xl mx-auto">
                <ConditionTreatmentForm cities={constantData.cities} selectedCity={city} />
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Umbilical Hernia"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Umbilical Hernia",
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

export default UmbilicalHerniaInSpecialCity;
