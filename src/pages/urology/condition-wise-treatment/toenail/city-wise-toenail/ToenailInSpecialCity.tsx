
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
        title: "Toenail Removal Surgery",
        description:
            "Safe and minimally invasive procedure to remove an infected or ingrown toenail, relieve pain, and prevent recurrence.",
        downtime: "2–4 days",
    },
    {
        title: "Partial Toenail Removal (PNA)",
        description:
            "Removal of the affected portion of the nail to reduce inflammation and avoid complete nail extraction.",
        downtime: "2–3 days",
    },
    {
        title: "Complete Toenail Extraction",
        description:
            "Recommended for severe infection or repeated ingrown nails; ensures complete relief and long-term prevention.",
        downtime: "3–5 days",
    },
    {
        title: "Laser Toenail Removal",
        description:
            "Laser-based removal for fungal or chronic toenail issues ensuring precision and faster healing.",
        downtime: "1–3 days",
    },
    {
        title: "Ingrown Toenail Correction",
        description:
            "Corrective procedure to fix nail curvature and prevent repeated inward growth.",
        downtime: "2–4 days",
    },
    {
        title: "Toenail Infection Debridement",
        description:
            "Cleaning and removing infected tissue to stop infection spread and promote healthy nail regrowth.",
        downtime: "1–2 days",
    },
];

const testimonials = [
    {
        quote:
            "I suffered from ingrown toenails for years. The surgery at PureCheckup was quick and I haven't had issues since.",
        name: "Sunita Reddy",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The pain was gone instantly. The laser treatment is amazing.",
        name: "Raghav Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very friendly doctor and hygiene was top-notch. Affordable too.",
        name: "Kavita Sharma",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "They explained the aftercare properly. Healing was fast.",
        name: "Anuj Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Good experience. No waiting time.",
        name: "Mohit Jain",
        designation: "Patient",
        stars: 4,
    },
];

const benefits = [
    { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
    { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
    { title: "No-Cost EMI", img: ncemi, bg: bg3 },
    { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
];

const ToenailInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the safest toenail removal method in ${formattedCity}?`,
            answer: `The safest toenail removal method in ${formattedCity} depends on the severity of infection or ingrowth. PureCheckup uses minimally invasive surgical and laser options to ensure fast healing and minimal pain.`,
        },
        {
            id: "two",
            question: `How painful is toenail removal surgery in ${formattedCity}?`,
            answer: `Toenail removal at PureCheckup in ${formattedCity} is performed under local anesthesia, making the procedure almost painless. Patients may feel mild discomfort for 1–2 days post-surgery.`,
        },
        {
            id: "three",
            question: `How long does it take to recover after toenail removal in ${formattedCity}?`,
            answer: `Most patients recover within 2–4 days after toenail removal in ${formattedCity}. Complete healing of the nail bed may take a few weeks depending on the procedure.`,
        },
        {
            id: "four",
            question: `When should I consider toenail removal in ${formattedCity}?`,
            answer: `You should consider toenail removal if you have severe pain, frequent ingrown nails, recurrent infection, swelling, discharge, or nail deformity that doesn’t improve with home care.`,
        },
        {
            id: "five",
            question: `Is toenail removal safe for diabetic patients in ${formattedCity}?`,
            answer: `Yes, toenail removal at PureCheckup in ${formattedCity} is safe for diabetic patients when done under medical supervision. Special care is taken to prevent complications.`,
        },
        {
            id: "six",
            question: `What is the cost of toenail removal in ${formattedCity}?`,
            answer: `Toenail removal cost in ${formattedCity} varies based on procedure type, infection severity, and doctor expertise. PureCheckup offers transparent pricing with no-cost EMI.`,
        },
        {
            id: "seven",
            question: `Can an ingrown toenail be treated without surgery in ${formattedCity}?`,
            answer: `Mild ingrown nails can be treated without surgery using trimming, antibiotics, and warm soaks. Severe or repeated cases in ${formattedCity} require surgical correction for lasting relief.`,
        },
        {
            id: "eight",
            question: `How do I book a free consultation for toenail removal in ${formattedCity}?`,
            answer: `You can book a free consultation through the PureCheckup website by selecting your city and treatment type. Instant online booking is available.`,
        },
        {
            id: "nine",
            question: `Does the toenail grow back after removal?`,
            answer: `If only part of the nail is removed, it usually grows back. After complete removal or matrix removal, regrowth may be partial or not occur at all.`,
        },
        {
            id: "ten",
            question: `How soon can I walk after toenail removal in ${formattedCity}?`,
            answer: `Most patients in ${formattedCity} can walk immediately after the procedure. However, reducing pressure on the toe for 24–48 hours helps speed recovery.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Safe Toenail Removal in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Looking for toenail removal in ${formattedCity}? PureCheckup provides advanced treatment, free consultation, and no-cost EMI for safe and hassle-free care.`}
                />
                <meta
                    name="keywords"
                    content={`toenail removal in ${formattedCity}, toenail removal surgery in ${formattedCity}, ingrown toenail removal in ${formattedCity}, toenail removal doctor near me in ${formattedCity}, toenail removal clinic in ${formattedCity}, best toenail removal surgeon in ${formattedCity}, toenail removal specialist in ${formattedCity}, toenail removal treatment in ${formattedCity}, affordable toenail removal in ${formattedCity}, top toenail removal hospital in ${formattedCity}, toenail infection treatment in ${formattedCity}, recovery after toenail removal in ${formattedCity}, causes of toenail pain in ${formattedCity}, toenail removal cost in ${formattedCity}, online consultation for toenail removal in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/toenail-removal/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Safe & Effective Toenail Removal Treatment in ${formattedCity} – Expert Care for Fast Relief`}
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
                <Heading text1="FAQs on Toenail Removal in" text2={formattedCity} />
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
                    treatmentName="Toenail Removal"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Procedure type (Partial/Complete extraction)",
                        "Technique (Laser/Surgical)",
                        "Hospital charges",
                        "Anesthesia",
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

export default ToenailInSpecialCity;
