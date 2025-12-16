
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
        title: "Manual Reduction Procedure",
        description:
            "A non-surgical technique where the urologist gently reduces the trapped foreskin to restore normal positioning. Best for early or mild cases.",
        downtime: "1–2 days",
    },
    {
        title: "Dorsal Slit Procedure",
        description:
            "A minor surgical cut made on the foreskin to relieve pressure and free the trapped glans. Provides instant relief and prevents tissue damage.",
        downtime: "3–5 days",
    },
    {
        title: "Circumcision Surgery",
        description:
            "Complete removal of the foreskin to prevent recurrence of paraphimosis and improve long-term hygiene. Recommended for repeated or severe episodes.",
        downtime: "5–7 days",
    },
    {
        title: "Emergency Paraphimosis Release",
        description:
            "Immediate intervention for severe or painful cases to prevent complications like swelling or tissue injury. Performed by senior urologists.",
        downtime: "2–4 days",
    },
    {
        title: "Laser Circumcision",
        description:
            "A minimally invasive laser procedure that ensures less pain, reduced bleeding, and faster healing compared to traditional methods.",
        downtime: "3–5 days",
    },
    {
        title: "Post-Treatment Care & Follow-Up",
        description:
            "Comprehensive care including hygiene guidance, medications, dressing, and online follow-up to prevent recurrence of paraphimosis.",
        downtime: "N/A (supportive care)",
    },
];

const testimonials = [
    {
        quote:
            "I was in severe pain due to paraphimosis. PureCheckup arranged an emergency appointment. The doctor was very skilled and relief was immediate.",
        name: "Sunil Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The swelling was scary. Manual reduction worked for me. Thank you for the quick response.",
        name: "Rahul Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I opted for circumcision to avoid future issues. The laser procedure was quick and healing was smooth.",
        name: "Amit Patel",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very professional team. They handled my case with urgency and care.",
        name: "Deepak Sharma",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Good hospital and affordable treatment. Insurance claim was processed quickly.",
        name: "Sanjay Kumar",
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

const ParaphimosisInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the online platform to book a paraphimosis surgery?`,
            answer: `You can book paraphimosis surgery directly on PureCheckup.com, where you can access consultation, treatment options, surgeon profiles, and EMI plans in one place.`,
        },
        {
            id: "two",
            question: `What is the cost of paraphimosis surgery in ${formattedCity}?`,
            answer: `Paraphimosis surgery in ${formattedCity} typically ranges based on the procedure type, surgeon expertise, and hospital selection. PureCheckup offers transparent pricing, no-cost EMI, and a free consultation.`,
        },
        {
            id: "three",
            question: `How long does it take to recover after paraphimosis surgery?`,
            answer: `Recovery usually takes 3–7 days, depending on the treatment method. Minimal-invasive procedures or laser options provide faster healing with less discomfort.`,
        },
        {
            id: "four",
            question: `Is paraphimosis surgery safe for adults in ${formattedCity}?`,
            answer: `Yes, paraphimosis surgery is considered safe for adults when performed by trained urologists. PureCheckup partners with certified surgeons and NABH-accredited hospitals in ${formattedCity}.`,
        },
        {
            id: "five",
            question: `Can paraphimosis be treated without surgery in ${formattedCity}?`,
            answer: `Mild cases can be managed with manual reduction or medications, but recurrent or severe paraphimosis often requires surgical intervention. PureCheckup doctors guide you on the best treatment option.`,
        },
        {
            id: "six",
            question: `What are the symptoms that require paraphimosis treatment in ${formattedCity}?`,
            answer: `Symptoms include severe swelling, pain, difficulty retracting the foreskin, tight foreskin trapping, redness, and restricted blood flow. Immediate treatment is necessary to avoid complications.`,
        },
        {
            id: "seven",
            question: `How experienced are the surgeons for paraphimosis treatment in ${formattedCity}?`,
            answer: `PureCheckup works with highly experienced urologists in ${formattedCity} who specialize in foreskin-related conditions, emergency release procedures, and advanced circumcision surgery.`,
        },
        {
            id: "eight",
            question: `How soon can I resume normal activities after paraphimosis surgery in ${formattedCity}?`,
            answer: `Most patients return to normal work within 2–5 days, depending on the procedure and healing speed. Doctors provide personalized recovery guidance and follow-up care.`,
        },
        {
            id: "nine",
            question: `Why choose PureCheckup for paraphimosis surgery in ${formattedCity}?`,
            answer: `PureCheckup offers advanced paraphimosis surgery performed by expert urologists in ${formattedCity}, with same-day procedures, free consultation, and no-cost EMI options. Patients receive complete care from diagnosis to recovery.`,
        },
        {
            id: "ten",
            question: `How do I book a free consultation for paraphimosis surgery in ${formattedCity}?`,
            answer: `You can book your free consultation online through the PureCheckup platform, call the helpline, or fill out the quick appointment form. A care coordinator connects you within minutes.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Paraphimosis Surgery in ${formattedCity} Call 9211930749  | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Book your free consultation today in ${formattedCity} and choose no-cost EMI to make your Paraphimosis surgery affordable and hassle-free | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`paraphimosis treatment in ${formattedCity}, paraphimosis surgery in ${formattedCity}, balanoposthitis treatment in ${formattedCity}, balanitis treatment in ${formattedCity}, circumcision surgery in ${formattedCity}, urologist for paraphimosis in ${formattedCity}, paraphimosis specialist near me in ${formattedCity}, best urology clinic in ${formattedCity}, emergency paraphimosis treatment in ${formattedCity}, paraphimosis surgery cost in ${formattedCity}, symptoms of paraphimosis in ${formattedCity}, causes of paraphimosis in ${formattedCity}, recovery time after paraphimosis surgery, is paraphimosis surgery safe in ${formattedCity}, online consultation for paraphimosis in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/paraphimosis/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Paraphimosis Surgery in ${formattedCity} – Safe, Advanced & Same-Day Procedure with Free Consultation & No-Cost EMI`}
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
                <Heading text1="FAQs on Paraphimosis Surgery in" text2={formattedCity} />
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
                    treatmentName="Paraphimosis"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Procedure type (Manual/Surgical)",
                        "Urgency of treatment",
                        "Hospital charges",
                        "Post-op care",
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

export default ParaphimosisInSpecialCity;
