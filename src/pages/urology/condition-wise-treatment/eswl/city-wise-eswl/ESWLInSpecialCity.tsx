
import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SpecialistCard, StatsBar } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { TreatmentCard } from "@/components";
import { BenefitCard } from "@/components";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";
import { FAQ } from "@/components";
import { TreatmentProcess } from "@/components";
import { Helmet } from "react-helmet-async";

const treatments = [
    {
        title: "Standard ESWL (Shock Wave Lithotripsy)",
        description:
            "Non-invasive stone-breaking procedure using focused shockwaves to fragment kidney stones into passable particles. Ideal for 4–20 mm stones with minimal discomfort.",
        downtime: "0–2 days",
    },
    {
        title: "Ultrasound-Guided ESWL",
        description:
            "A more precise ESWL procedure performed under real-time ultrasound imaging. Ensures accurate targeting, reduced complications, and higher success rates for moderate-sized stones.",
        downtime: "0–1 day",
    },
    {
        title: "Low-Energy ESWL for Sensitive Patients",
        description:
            "Gentle shockwave therapy designed for elderly patients, those with low pain tolerance, or individuals requiring a softer approach. Provides safe and gradual stone fragmentation.",
        downtime: "No downtime",
    },
    {
        title: "High-Energy ESWL for Hard Stones",
        description:
            "Used for hard, dense, or resistant stones requiring stronger shockwave power. Helps achieve complete stone fragmentation, often in fewer sessions, without surgery.",
        downtime: "1–2 days",
    },
];

const testimonials = [
    {
        quote:
            "I was terrified of surgery. ESWL was a blessing. Just sound waves and the stone was gone. Painless and quick.",
        name: "Naveen Singhal",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The process was simple. I went in the morning and was back home by afternoon. The stone passed easily in a few days.",
        name: "Priya Menon",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Affordable and effective. The doctor explained everything about shockwave therapy. Highly recommended.",
        name: "Tarun Gupta",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "State-of-the-art equipment. I felt no discomfort during the procedure. Recovery was immediate.",
        name: "Alok Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Thank you PureCheckup for arranging everything. ESWL saved me from invasive surgery.",
        name: "Sneha Roy",
        designation: "Patient",
        stars: 5,
    },
];

const benefits = [
    { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
    { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
    { title: "No-Cost EMI", img: ncemi, bg: bg3 },
    { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
];

const ESWLInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for ESWL surgery in ${formattedCity}?`,
            answer: `PureCheckup offers advanced ESWL technology, experienced urologists, transparent pricing, and complete pre- and post-procedure support in ${formattedCity}.`,
        },
        {
            id: "two",
            question: `How do I book a free consultation for ESWL surgery in ${formattedCity}?`,
            answer: `You can book a free consultation through our website or by speaking with our care coordinator. Appointments are available 7 days a week in ${formattedCity}.`,
        },
        {
            id: "three",
            question: `What is the online platform to book ESWL surgery?`,
            answer: `You can book ESWL surgery through the PureCheckup online platform, offering quick registrations, document support, and instant appointment confirmation.`,
        },
        {
            id: "four",
            question: `Is ESWL safe for kidney stone removal in ${formattedCity}?`,
            answer: `Yes. ESWL is a non-invasive, safe, and widely recommended procedure for stones between 4–20 mm.`,
        },
        {
            id: "five",
            question: `What is the ESWL surgery cost in ${formattedCity}?`,
            answer: `Pricing depends on stone size, diagnostic needs, and hospital selection. PureCheckup provides cost-effective packages in ${formattedCity}.`,
        },
        {
            id: "six",
            question: `How long does the ESWL procedure take?`,
            answer: `The procedure usually takes 30–45 minutes and does not require an overnight hospital stay.`,
        },
        {
            id: "seven",
            question: `What is the recovery time after ESWL in ${formattedCity}?`,
            answer: `Most patients return to normal activity within 24–48 hours after ESWL in ${formattedCity}.`,
        },
        {
            id: "eight",
            question: `Does ESWL require anesthesia?`,
            answer: `Mild sedation or light anesthesia may be used for patient comfort.`,
        },
        {
            id: "nine",
            question: `What size kidney stones can be treated with ESWL?`,
            answer: `ESWL is effective for stones between 4 mm and 20 mm, depending on location.`,
        },
        {
            id: "ten",
            question: `Are multiple ESWL sessions required?`,
            answer: `In some cases, large or hard stones may require 1–2 additional sessions for complete clearance.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Best  ESWL Surgery in  ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get safe, painless ESWL surgery in ${formattedCity}. Experienced urologists, affordable cost, and free consultation with no-cost EMI | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`eswl treatment in ${formattedCity}, eswl surgery in ${formattedCity}, shock wave lithotripsy in ${formattedCity}, kidney stone eswl in ${formattedCity}, best eswl doctor in ${formattedCity}, eswl cost in ${formattedCity}, eswl hospital in ${formattedCity}, non-surgical kidney stone treatment in ${formattedCity}, eswl specialist in ${formattedCity}, kidney stone removal treatment in ${formattedCity}, laser stone removal in ${formattedCity}, kidney stone clinic in ${formattedCity}, stone fragmentation treatment in ${formattedCity}, urology specialist in ${formattedCity}, kidney stone surgeon in ${formattedCity}, best kidney stone hospital in ${formattedCity}, affordable eswl in ${formattedCity}, shock wave stone treatment in ${formattedCity}, book eswl appointment in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/eswl/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Advanced ESWL Laser Surgery in ${formattedCity} – Experienced Surgeons, 24/7 Assistance, Quick and Comfortable Recovery`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across ${formattedCity}.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Free Doctor Consultation", "No-Cost EMI & Insurance Assistance", "Top Urologists", "Day-Care Surgery Options", "24x7 Medical Coordination"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
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
                <Heading text1="Treatment Options Available in" text2={formattedCity || ""} className="mb-6 text-center" />
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
                <Heading text1="Patient Stories" text2={formattedCity} />
                <AnimatedTestimonial testimonials={testimonials} />
            </section>

            <TreatmentProcess />
            <section className="pb-20 px-4">
                <Heading text1="FAQs on ESWL Treatment in" text2={formattedCity} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />
                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="ESWL"
                    costSubtitle="Pricing varies by stone size, number of sessions, and insurance."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Stone size and density",
                        "Number of shockwave sessions",
                        "Hospital category",
                        "Diagnostic tests required",
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

export default ESWLInSpecialCity;
