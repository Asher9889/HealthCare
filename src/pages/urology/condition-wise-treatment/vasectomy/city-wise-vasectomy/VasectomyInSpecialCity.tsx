
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
        title: "Vasectomy (No-Scalpel Vasectomy)",
        description:
            "A minimally invasive, safe, and permanent male sterilization procedure performed by expert urologists to prevent pregnancy. Quick, painless, and highly effective with minimal downtime.",
        downtime: "2–3 days",
    },
    {
        title: "Online Consultation & Follow-Up",
        description:
            "Expert consultation and remote monitoring for safe corn removal recovery.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "I was hesitant, but the procedure was so simple and quick. The doctor explained everything well.",
        name: "Rajiv Malhotra",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "No scalar vasectomy is truly painless. I was back to work in 2 days. Highly recommend PureCheckup.",
        name: "Sameer Joshi",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Professional and discreet service. The staff was very supportive.",
        name: "Amit Kumar",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Affordable and transparent pricing. No hidden costs at all.",
        name: "Vikram Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Thank you for the excellent care. The recovery was smooth as promised.",
        name: "Nikhil Gupta",
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

const VasectomyInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the safest vasectomy option available in ${formattedCity}?`,
            answer: `The no-scalpel vasectomy offered by PureCheckup in ${formattedCity} is one of the safest methods. It uses a small puncture instead of cuts, reducing pain, bleeding, and recovery time.`,
        },
        {
            id: "two",
            question: `Is vasectomy painful and how long does it take to recover?`,
            answer: `Vasectomy is a minimally painful procedure performed under local anesthesia. Most patients recover fully within 2–3 days and resume normal activities soon after.`,
        },
        {
            id: "three",
            question: `How effective is a vasectomy performed in ${formattedCity}?`,
            answer: `A vasectomy at PureCheckup in ${formattedCity} is more than 99% effective as a permanent birth control method, making it one of the most reliable sterilization procedures.`,
        },
        {
            id: "four",
            question: `What is the cost of vasectomy in ${formattedCity}?`,
            answer: `The cost of vasectomy in ${formattedCity} depends on the technique used. PureCheckup provides transparent pricing with free consultation and no-cost EMI for affordability.`,
        },
        {
            id: "five",
            question: `Can I get a vasectomy without hospitalization in ${formattedCity}?`,
            answer: `Yes, vasectomy at PureCheckup in ${formattedCity} is an outpatient procedure. You can go home the same day and resume light activities within a day.`,
        },
        {
            id: "six",
            question: `Who performs vasectomy surgery at PureCheckup in ${formattedCity}?`,
            answer: `Experienced urologists with advanced training perform vasectomy procedures at PureCheckup in ${formattedCity}. They specialize in minimally invasive male sterilization.`,
        },
        {
            id: "seven",
            question: `Does vasectomy affect sexual performance or hormones?`,
            answer: `No. Vasectomy does not impact sexual performance, testosterone levels, or libido. It only blocks sperm, not ejaculation or hormone production.`,
        },
        {
            id: "eight",
            question: `How do I book a free consultation for vasectomy in ${formattedCity}?`,
            answer: `You can book a free consultation through PureCheckup’s online platform by selecting your city and treatment. Instant scheduling is available for all patients.`,
        },
        {
            id: "nine",
            question: `What should I avoid after vasectomy surgery?`,
            answer: `For 48–72 hours, avoid heavy lifting, strenuous exercise, and sexual activity. Follow your surgeon’s aftercare instructions for a smooth recovery.`,
        },
        {
            id: "ten",
            question: `How soon can I resume sexual activity after vasectomy?`,
            answer: `Most patients resume sexual activity within 7–10 days. However, follow-up testing is required to confirm zero sperm count before stopping other contraception.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Vasectomy Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Safe and painless vasectomy in ${formattedCity} with free consultation and no-cost EMI at PureCheckup. Expert surgeons ensure fast recovery and reliable outcomes.`}
                />
                <meta
                    name="keywords"
                    content={`vasectomy in ${formattedCity}, vasectomy surgery in ${formattedCity}, no-scalpel vasectomy in ${formattedCity}, vasectomy doctor near me in ${formattedCity}, vasectomy cost in ${formattedCity}, recovery after vasectomy in ${formattedCity}, vasectomy side effects in ${formattedCity}, vasectomy consultation in ${formattedCity}, vasectomy appointment online in ${formattedCity}, vasectomy specialist in ${formattedCity}, vasectomy clinic in ${formattedCity}, best vasectomy surgeon in ${formattedCity}, vasectomy hospital in ${formattedCity}, affordable vasectomy in ${formattedCity}, vasectomy procedure in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/vasectomy/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Vasectomy Surgery in ${formattedCity} – Permanent Birth Control Made Safer and Fast Recovery, Trusted Specialists`}
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
                <Heading text1="FAQs on Vasectomy Surgery in" text2={formattedCity} />
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
                    treatmentName="Vasectomy"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Technique used (No-Scalpel/Conventional)",
                        "Hospital charges",
                        "Anesthesia",
                        "Follow-up tests",
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

export default VasectomyInSpecialCity;
