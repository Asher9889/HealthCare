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
        title: "Laser Circumcision",
        description:
            "Minimally invasive, bloodless, and quick procedure using advanced laser technology. Ideal for adults and children; faster healing.",
        downtime: "24–48 hours",
    },
    {
        title: "Stapler Circumcision",
        description:
            "Modern, device-assisted procedure ensuring uniform cuts, less pain, and reduced bleeding. Suitable for phimosis and recurrent infections.",
        downtime: "2–5 days",
    },
    {
        title: "ZSR Circumcision",
        description:
            "Latest stapler-based circumcision offering precise tissue removal, minimal discomfort, and rapid recovery.",
        downtime: "24–72 hours",
    },
    {
        title: "Conventional Circumcision",
        description:
            "Traditional surgical approach. Recommended in complex cases or when advanced methods are not suitable.",
        downtime: "1–2 weeks",
    },
    {
        title: "Dorsal Slit Procedure",
        description:
            "Quick outpatient method for severe phimosis, infections, or emergency cases.",
        downtime: "3–7 days",
    },
];

const testimonials = [
    {
        quote:
            "I was suffering from phimosis and it was very painful. The laser circumcision at PureCheckup was quick and painless. Recovered in just 2 days.",
        name: "Rahul Sharma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "My son needed circumcision. The doctors were very gentle and explained everything. The stapler method was very clean and healed fast.",
        name: "Anjali Gupta",
        designation: "Parent",
        stars: 5,
    },
    {
        quote:
            "Excellent service. From consultation to surgery, everything was smooth. Highly recommend for adult circumcision.",
        name: "Vikram Singh",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Very professional team. I was worried about pain but the ZSR procedure was comfortable. Good post-op care.",
        name: "Amit Patel",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Clean hospital and experienced doctor. The cost was affordable and insurance was handled smoothly.",
        name: "Suresh Kumar",
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

const CircumcisionInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the best circumcision method available in ${formattedCity}?`,
            answer: `Most patients prefer modern options like laser, stapler, or ZSR circumcision due to minimal pain and faster recovery.`,
        },
        {
            id: "two",
            question: `How much does circumcision cost in ${formattedCity}?`,
            answer: `Costs vary based on technique, surgeon expertise, and diagnostic requirements.`,
        },
        {
            id: "three",
            question: "Is circumcision painful?",
            answer: "The procedure is performed under anesthesia, ensuring minimal discomfort.",
        },
        {
            id: "four",
            question: "How long does circumcision surgery take?",
            answer: "Typically 10–20 minutes, depending on the method and case.",
        },
        {
            id: "five",
            question: `What is the recovery time after circumcision in ${formattedCity}?`,
            answer: "Advanced procedures heal in 2–5 days; conventional surgery may require 1–2 weeks.",
        },
        {
            id: "six",
            question: `Is circumcision safe for adults and children in ${formattedCity}?`,
            answer: "Yes, circumcision is safe for all age groups when performed by trained surgeons.",
        },
        {
            id: "seven",
            question: `Which doctor performs circumcision in ${formattedCity}?`,
            answer: "Urologists, general surgeons, and specialized circumcision doctors.",
        },
        {
            id: "eight",
            question: `Does PureCheckup offer insurance and EMI for circumcision surgery in ${formattedCity}?`,
            answer: "Yes, PureCheckup provides insurance assistance and No-Cost EMI options.",
        },
        {
            id: "nine",
            question: "Are stitches required after circumcision?",
            answer: "Laser and ZSR methods typically require minimal or no stitches.",
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for circumcision treatment in ${formattedCity}?`,
            answer: "PureCheckup offers expert surgeons, advanced procedures, affordable pricing, and complete post-operative support.",
        },
        {
            id: "eleven",
            question: "When can I return to work after circumcision?",
            answer: "Most patients resume light work within 24–48 hours.",
        },
        {
            id: "twelve",
            question: `How do I book a free consultation for circumcision in ${formattedCity}?`,
            answer: "You can book through PureCheckup’s website, WhatsApp, or helpline.",
        },
        {
            id: "thirteen",
            question: "What is the online platform to book a circumcision?",
            answer: "You can book circumcision treatment online at PureCheckup.com.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Circumcision Treatment in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get safe, painless circumcision in ${formattedCity} from experienced surgeons. Affordable cost, quick recovery, free consultation, and No-Cost EMI support available.`}
                />
                <meta
                    name="keywords"
                    content={`circumcision in ${formattedCity}, circumcision surgery ${formattedCity}, circumcision treatment ${formattedCity}, male circumcision ${formattedCity}, phimosis treatment in ${formattedCity}, circumcision doctors in ${formattedCity}, circumcision clinic ${formattedCity}, adult circumcision ${formattedCity}, child circumcision ${formattedCity}, best circumcision surgeon in ${formattedCity}, circumcision cost in ${formattedCity}, painless circumcision ${formattedCity}, circumcision hospital near me`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/circumcision/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Circumcision for Adults & Children in ${formattedCity} – Fast Recovery with Expert Surgeons`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across ${formattedCity}`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Free Doctor Consultation", "0% EMI & Insurance Assistance", "Top Laparoscopic Surgeons", "Day-Care Surgery Options", "24x7 Medical Coordination"]}
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
                <Heading text1="FAQs on Circumcision Treatment in" text2={formattedCity} />
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

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Circumcision"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Type of Procedure (Laser/Stapler/ZSR)",
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

export default CircumcisionInSpecialCity;
