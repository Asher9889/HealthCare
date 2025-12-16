
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
        title: "Laser Hydrocele Surgery",
        description:
            "Minimally invasive laser procedure for hydrocele. Safe, precise, and offers faster recovery with minimal discomfort.",
        downtime: "2–4 days",
    },
    {
        title: "Hydrocelectomy (Open Surgery)",
        description:
            "Traditional surgical option for larger or long-standing hydroceles. Performed by expert surgeons with high success rates.",
        downtime: "5–7 days",
    },
    {
        title: "Needle Aspiration for Hydrocele",
        description:
            "A quick outpatient procedure for temporary relief by removing accumulated fluid. Best for patients avoiding surgery.",
        downtime: "1–2 days",
    },
    {
        title: "Sclerotherapy for Hydrocele",
        description:
            "Non-surgical treatment where fluid is drained, and medication is used to prevent recurrence. Suitable for selected cases.",
        downtime: "2–3 days",
    },
    {
        title: "Post-Surgery Care & Dressing",
        description:
            "Comprehensive post-treatment care to ensure proper healing, prevent infections, and support long-term comfort.",
        downtime: "None",
    },
    {
        title: "Follow-up Consultation & Recovery Guidance",
        description:
            "Scheduled follow-ups to monitor healing, guide activity restrictions, and provide lifestyle tips for a smooth recovery.",
        downtime: "None",
    },
];

const testimonials = [
    {
        quote:
            "I was suffering from hydrocele for years. The laser surgery was a life changer. Minimal pain and I was back to work in 3 days.",
        name: "Manoj Tiwari",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very experienced doctors. They explained the procedure well. Surgery was quick and recovery was smooth.",
        name: "Ravi Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Clean facility and caring staff. The cost was reasonable and insurance process was hassle-free.",
        name: "Suresh Patel",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "I was scarce of surgery but the team made me comfortable. Laser hydrocelectomy is definitely recommended.",
        name: "Amit Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Good post-op care. The swelling went down quickly and I had no complications.",
        name: "Vijay Das",
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

const HydroceleInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for hydrocele treatment in ${formattedCity}?`,
            answer: `PureCheckup provides expert surgeons, advanced technology, and safe procedures for hydrocele treatment in ${formattedCity}, ensuring reliable and effective results.`,
        },
        {
            id: "two",
            question: `How do I book a free consultation for hydrocele treatment in ${formattedCity}?`,
            answer: `You can book a free consultation for hydrocele treatment in ${formattedCity} through PureCheckup’s online platform or by calling our support team.`,
        },
        {
            id: "three",
            question: `What is the online platform to book a hydrocele treatment in ${formattedCity}?`,
            answer: `PureCheckup offers a secure online booking system where patients in ${formattedCity} can schedule hydrocele treatment consultations with specialist surgeons.`,
        },
        {
            id: "four",
            question: `Is hydrocele treatment at PureCheckup safe in ${formattedCity}?`,
            answer: `Yes, PureCheckup in ${formattedCity} follows strict medical protocols and uses modern techniques to ensure safe and effective hydrocele treatment.`,
        },
        {
            id: "five",
            question: `How long does recovery take after hydrocele treatment in ${formattedCity}?`,
            answer: `Recovery varies by treatment type, but most patients in ${formattedCity} experience quick healing and minimal downtime with PureCheckup’s advanced procedures.`,
        },
        {
            id: "six",
            question: `What types of hydrocele treatments are available in ${formattedCity}?`,
            answer: `PureCheckup in ${formattedCity} offers Laser Hydrocele Surgery, Hydrocelectomy, Needle Aspiration, Sclerotherapy, and complete post-surgery care.`,
        },
        {
            id: "seven",
            question: `Can I consult a surgeon online for hydrocele treatment in ${formattedCity}?`,
            answer: `Yes, PureCheckup provides online consultations in ${formattedCity} where you can discuss symptoms, treatment options, and pricing with expert surgeons.`,
        },
        {
            id: "eight",
            question: `How much does hydrocele treatment cost in ${formattedCity}?`,
            answer: `The cost of hydrocele treatment in ${formattedCity} depends on the procedure type. PureCheckup offers free consultations and No-Cost EMI options.`,
        },
        {
            id: "nine",
            question: `Are hydrocele treatments at PureCheckup painless in ${formattedCity}?`,
            answer: `PureCheckup in ${formattedCity} uses minimally invasive and laser-based techniques to ensure the treatment is as painless and comfortable as possible.`,
        },
        {
            id: "ten",
            question: `How can I care for myself after hydrocele treatment in ${formattedCity}?`,
            answer: `PureCheckup in ${formattedCity} provides detailed post-care instructions, follow-up visits, and recovery guidance to ensure smooth and fast healing.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Hydrocele Laser Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get safe and advanced Hydrocele Laser Surgery in ${formattedCity} with expert surgeons quick recovery, minimal pain, free consultation, no-cost EMI | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`hydrocele treatment in ${formattedCity}, hydrocele surgery in ${formattedCity}, laser hydrocele surgery in ${formattedCity}, hydrocele operation in ${formattedCity}, hydrocele doctor in ${formattedCity}, hydrocele specialist in ${formattedCity}, hydrocele treatment near me in ${formattedCity}, best hydrocele surgeon in ${formattedCity}, hydrocele laser treatment cost in ${formattedCity}, painless hydrocele surgery in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/hydrocele/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Get Safe & Advanced Hydrocele Treatment and Laser Surgery in ${formattedCity} – Experienced Surgeons, 24/7 Support, Fast & Painless Recovery`}
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
                <Heading text1="FAQs on Hydrocele Treatment in" text2={formattedCity} />
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
                    treatmentName="Hydrocele"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Type of procedure (Laser/Open)",
                        "Unilateral or Bilateral Hydrocele",
                        "Hospital category",
                        "Anesthesia charges",
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

export default HydroceleInSpecialCity;
