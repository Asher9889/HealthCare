
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
        title: "Laser Kidney Stones Removal",
        description:
            "Minimal pain, precise laser treatment for kidney stones. Quick recovery with advanced technology.",
        downtime: "1–3 days",
    },
    {
        title: "Shock Wave Lithotripsy (SWL)",
        description:
            "Non-invasive procedure to break kidney stones using shock waves. Safe and effective for most stones.",
        downtime: "1–2 days",
    },
    {
        title: "Ureteroscopy for Kidney Stones",
        description:
            "Endoscopic procedure for stones in ureters or kidneys. High precision, minimal discomfort.",
        downtime: "2–4 days",
    },
    {
        title: "Percutaneous Nephrolithotomy (PCNL)",
        description:
            "For large or complex kidney stones. Small incision with guided stone removal.",
        downtime: "4–7 days",
    },
    {
        title: "Preventive Kidney Care & Medications",
        description:
            "Customized care and medications to prevent recurrence of kidney stones. Long-term kidney protection.",
        downtime: "None",
    },
    {
        title: "Follow-up & Diet Consultation",
        description:
            "Post-treatment follow-up and dietary guidance to maintain kidney health and prevent stones.",
        downtime: "None",
    },
];

const testimonials = [
    {
        quote:
            "I had a large kidney stone and was in severe pain. The laser treatment at PureCheckup gave me instant relief. I was discharged the next day.",
        name: "Sandeep Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very professional service. The lithotripsy procedure was quick and painless. I didn't need any cuts or stitches.",
        name: "Pooja Sharma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The doctors explained everything clearly. Post-surgery care was excellent. Highly recommend for kidney stone issues.",
        name: "Anil Gupta",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Advanced technology and hygienic hospital. My recovery was smooth and the staff was very supportive.",
        name: "Ramesh Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Affordable cost and good insurance support. Thank you PureCheckup for making the process easy.",
        name: "Vikram Singh",
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

const KidneyStonesInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for kidney stones treatment in ${formattedCity}?`,
            answer: `PureCheckup offers expert urologists, advanced technology, and personalized care for kidney stone treatment in ${formattedCity}, ensuring safe and effective results.`,
        },
        {
            id: "two",
            question: `How do I book a free consultation for kidney stone treatment in ${formattedCity}?`,
            answer: `You can easily book a free consultation for kidney stone treatment in ${formattedCity} through PureCheckup’s online platform or by calling our expert support team.`,
        },
        {
            id: "three",
            question: `What is the online platform to book a kidney stone treatment in ${formattedCity}?`,
            answer: `PureCheckup provides a secure online booking platform where patients in ${formattedCity} can schedule kidney stones treatment consultations with certified specialists.`,
        },
        {
            id: "four",
            question: `Is kidney stone treatment at PureCheckup safe in ${formattedCity}?`,
            answer: `Yes, PureCheckup in ${formattedCity} uses state-of-the-art equipment and follows strict safety protocols to ensure kidney stone treatment is safe and effective.`,
        },
        {
            id: "five",
            question: `How long does recovery take after kidney stone treatment in ${formattedCity}?`,
            answer: `Recovery times vary by treatment type, but most patients in ${formattedCity} experience minimal downtime and a quick return to daily activities with PureCheckup.`,
        },
        {
            id: "six",
            question: `What types of kidney stone treatments are available in ${formattedCity}?`,
            answer: `PureCheckup in ${formattedCity} offers Laser Kidney Stones Removal, Shock Wave Lithotripsy (SWL), Ureteroscopy, Percutaneous Nephrolithotomy (PCNL), preventive care, and follow-up consultations.`,
        },
        {
            id: "seven",
            question: `Can I consult urologists online for kidney stone treatment in ${formattedCity}?`,
            answer: `Yes, PureCheckup in ${formattedCity} offers online consultations with expert urologists, allowing patients to discuss treatment options and book procedures remotely.`,
        },
        {
            id: "eight",
            question: `How much does kidney stone treatment cost in ${formattedCity}?`,
            answer: `The cost of kidney stone treatment in ${formattedCity} at PureCheckup depends on the procedure type. You can get a detailed estimate during a free consultation.`,
        },
        {
            id: "nine",
            question: `Are the procedures at PureCheckup painless for kidney stones in ${formattedCity}?`,
            answer: `PureCheckup in ${formattedCity} uses minimally invasive and laser-based techniques to ensure kidney stone treatments are as painless and comfortable as possible.`,
        },
        {
            id: "ten",
            question: `How can I prevent kidney stones after treatment in ${formattedCity}?`,
            answer: `PureCheckup in ${formattedCity} provides follow-up care, dietary guidance, and preventive medications to reduce the risk of kidney stone recurrence.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Kidney Stones Treatment in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get advanced kidney stones treatment in ${formattedCity} . Safe, quick, and expert care. Book your free consultation  today with no-cost EMI | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`kidney stones in ${formattedCity}, kidney stone treatment in ${formattedCity}, kidney stone surgery in ${formattedCity}, kidney stone symptoms in ${formattedCity}, kidney stone treatment near me in ${formattedCity}, laser kidney stone removal in ${formattedCity}, kidney stone removal in ${formattedCity}, ureteroscopy for kidney stones in ${formattedCity}, shock wave lithotripsy in ${formattedCity}, prevent kidney stones in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/kidney-stones-treatment/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Get Safe & Advanced Kidney Stones Laser Treatment in ${formattedCity} – Experienced Surgeons, 24/7 Support, Fast & Painless Recovery`}
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
                <Heading text1="FAQs on Kidney Stones Treatment in" text2={formattedCity} />
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
                    treatmentName="Kidney Stones"
                    costSubtitle="Pricing varies by case severity, stone size, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Size and location of stones",
                        "Procedure type (Laser/SWL/PCNL)",
                        "Hospital category",
                        "Stent requirement",
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

export default KidneyStonesInSpecialCity;
