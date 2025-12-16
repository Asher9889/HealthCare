
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
        title: "Laser RIRS for Kidney Stone Removal",
        description:
            "Minimally invasive endoscopic procedure using a flexible scope and laser to break kidney stones into fine dust. Best for stones located in the kidney or upper ureter. No external cuts or stitches.",
        downtime: "1–3 days",
    },
    {
        title: "Flexible Ureteroscopy (FURS) with Laser",
        description:
            "A precise stone-breaking technique is performed using a flexible ureteroscope that reaches challenging locations inside the kidney. Ideal when ESWL fails, or stones are hard in nature.",
        downtime: "1–2 days",
    },
    {
        title: "Dusting & Fragmentation RIRS Technique",
        description:
            "An advanced laser technique that turns stones into fine dust for natural passage. Suitable for multiple small stones or stones in the lower pole of the kidney. Minimally invasive and highly effective.",
        downtime: "1–2 days",
    },
    {
        title: "RIRS with Stent Placement",
        description:
            "Used when stones are large or the ureter is tight. A temporary stent helps maintain urine flow and aids healing after laser stone removal. Enhances success rate and reduces discomfort.",
        downtime: "1–3 days",
    },
];

const testimonials = [
    {
        quote:
            "I had multiple kidney stones and was afraid of cuts. RIRS was magical. No cuts, no pain, and I was discharged the next day. Thank you PureCheckup!",
        name: "Ravi Shankar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The advanced laser technology they use is impressive. My stone was dusted completely. Recovery was super fast.",
        name: "Aman Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Professional doctors and transparent billing. They explained the RIRS procedure very well. Highly recommended for kidney stones.",
        name: "Kavita Singh",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Excellent care coordination. From admission to discharge, everything was smooth. The stent removal later was also painless.",
        name: "Gaurav Malhotra",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Best place for RIRS treatment. The cost was affordable compared to big hospitals and the service was premium.",
        name: "Deepak Joshi",
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

const RIRSInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for RIRS surgery in ${formattedCity}?`,
            answer: `PureCheckup provides advanced laser-based RIRS surgery in ${formattedCity} through top urologists, modern hospitals, transparent pricing, and complete patient care from consultation to recovery.`,
        },
        {
            id: "two",
            question: `How do I book a free consultation for RIRS surgery in ${formattedCity}?`,
            answer: `You can book a free consultation through PureCheckup by filling out the online form, calling the helpline, or sending a WhatsApp request. You will get an instant callback.`,
        },
        {
            id: "three",
            question: `What is the online platform to book an RIRS surgery?`,
            answer: `PureCheckup is a trusted online platform to book RIRS surgery with expert urologists, updated cost details, and fully-assisted hospital support.`,
        },
        {
            id: "four",
            question: `What is the cost of RIRS surgery in ${formattedCity}?`,
            answer: `RIRS surgery cost in ${formattedCity} depends on stone size, hospital choice, and tests required. PureCheckup provides transparent pricing with affordable package options.`,
        },
        {
            id: "five",
            question: `Is RIRS a safe procedure for kidney stone removal?`,
            answer: `Yes. RIRS is one of the safest and most advanced laser procedures for kidney stones, performed without cuts, stitches, or major risks.`,
        },
        {
            id: "six",
            question: `How long does RIRS surgery take?`,
            answer: `The RIRS procedure typically takes 45–60 minutes, depending on the stone size and location.`,
        },
        {
            id: "seven",
            question: `What is the recovery time after RIRS surgery?`,
            answer: `Most patients can resume normal activities within 24–48 hours after the RIRS procedure because it is minimally invasive.`,
        },
        {
            id: "eight",
            question: `Do I need to be hospitalized for RIRS surgery in ${formattedCity}?`,
            answer: `Usually, RIRS is done as a day-care procedure. Patients are often discharged within a few hours unless the surgeon advises otherwise.`,
        },
        {
            id: "nine",
            question: `Who performs RIRS surgery at PureCheckup in ${formattedCity}?`,
            answer: `Board-certified and highly experienced urologists perform RIRS surgery at partnering hospitals with advanced laser technology.`,
        },
        {
            id: "ten",
            question: `Can kidney stones return after RIRS surgery?`,
            answer: `Kidney stones may recur depending on diet, lifestyle, or medical history. PureCheckup provides post-surgery guidance to help prevent recurrence.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`RIRS Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get advanced RIRS surgery in ${formattedCity} by expert urologists. Painless, scar-free laser treatment for kidney stones. Book your free consultation.`}
                />
                <meta
                    name="keywords"
                    content={`rirs surgery in ${formattedCity}, rirs treatment in ${formattedCity}, rirs procedure in ${formattedCity}, rirs specialist in ${formattedCity}, rirs kidney stone surgery in ${formattedCity}, flexible ureteroscopy rirs in ${formattedCity}, laser stone removal in ${formattedCity}, endoscopic kidney stone surgery in ${formattedCity}, rirs for kidney stones in ${formattedCity}, minimally invasive rirs in ${formattedCity}, advanced laser stone treatment in ${formattedCity}, rirs surgeon in ${formattedCity}, best rirs hospital in ${formattedCity}, rirs cost in ${formattedCity}, laser rirs in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/rirs/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Get Safe& Advanced RIRS Laser Surgery in ${formattedCity} Experienced Surgeons, 24/7 Assistance, Quick and Comfortable Recovery`}
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
                <Heading text1="FAQs on RIRS Treatment in" text2={formattedCity} />
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
                    treatmentName="RIRS"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Stone size and position",
                        "Hospital room category",
                        "Stent usage",
                        "Diagnostic charges",
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

export default RIRSInSpecialCity;
