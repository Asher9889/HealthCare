
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
        title: "Epididymal Cyst Surgery (Minimally Invasive)",
        description:
            "Safe, minimally invasive procedure to remove cysts causing swelling, discomfort, or pain in the scrotum. Ensures long-term relief with fast recovery.",
        downtime: "3–5 days",
    },
    {
        title: "Microsurgical Epididymal Cyst Removal",
        description:
            "Precision surgery using microsurgical techniques to preserve fertility and avoid damage to surrounding structures. Ideal for complex or large cysts.",
        downtime: "5–7 days",
    },
    {
        title: "Conservative Management (Small Cysts)",
        description:
            "For small asymptomatic cysts, expert monitoring and symptom-based care are provided with guidance from experienced urologists.",
        downtime: "None",
    },
    {
        title: "Aspiration & Sclerotherapy (Selective Cases)",
        description:
            "Non-surgical fluid drainage for selected patients not suitable for surgery. Provides temporary relief.",
        downtime: "1–2 days",
    },
    {
        title: "Post-Treatment Care & Follow-Up",
        description:
            "Professional follow-up care ensures smooth healing, prevents recurrence, and reduces complications.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "I had a lump for months. The doctor at PureCheckup diagnosed it quickly as a cyst. Surgery was smooth.",
        name: "Suresh Menon",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Minimal pain and fast recovery. I was back to my routine in a few days.",
        name: "Karan Johar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The microsurgery option was great. No complications at all.",
        name: "Vikram Rathore",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Very supportive staff and clean hospital. Insurance claim was easy.",
        name: "Anil Kapoor",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Thank you PureCheckup for the excellent service. Highly recommend.",
        name: "Rajeev Singh",
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

const EpididymalCystInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the best treatment for an epididymal cyst in ${formattedCity}?`,
            answer: `The best treatment for an epididymal cyst in ${formattedCity} depends on its size and symptoms. PureCheckup offers minimally invasive surgery for symptomatic cysts and conservative monitoring for smaller ones, ensuring safe and effective relief.`,
        },
        {
            id: "two",
            question: `When is epididymal cyst surgery needed?`,
            answer: `Surgery is required when the cyst causes pain, swelling, discomfort, sexual issues, or affects daily activities. PureCheckup specialists evaluate the cyst and recommend the safest approach.`,
        },
        {
            id: "three",
            question: `How much does epididymal cyst surgery cost in ${formattedCity}?`,
            answer: `The cost varies based on severity and procedure type. PureCheckup provides transparent pricing, free consultation, and no-cost EMI options for affordable treatment in ${formattedCity}.`,
        },
        {
            id: "four",
            question: `Is epididymal cyst surgery safe?`,
            answer: `Yes. Epididymal cyst surgery is a safe, minimally invasive procedure performed by trained urologists. PureCheckup ensures sterile environments, expert care, and fast recovery.`,
        },
        {
            id: "five",
            question: `How long does recovery take after epididymal cyst surgery?`,
            answer: `Most patients recover within 3–7 days. Full healing may take 2–3 weeks. PureCheckup provides complete guidance for safe and quick recovery.`,
        },
        {
            id: "six",
            question: `Can an epididymal cyst cause fertility problems?`,
            answer: `Most cysts do not affect fertility, but very large cysts or untreated inflammation may cause complications. Early evaluation at PureCheckup helps prevent fertility-related issues.`,
        },
        {
            id: "seven",
            question: `Are epididymal cysts cancerous?`,
            answer: `No. Epididymal cysts are benign fluid-filled sacs and are not cancerous. However, diagnosis by an expert in ${formattedCity} is recommended to rule out other conditions.`,
        },
        {
            id: "eight",
            question: `What symptoms indicate the need for epididymal cyst treatment?`,
            answer: `Pain, swelling, heaviness in the scrotum, discomfort while walking, or visible lumps indicate that treatment may be required.`,
        },
        {
            id: "nine",
            question: `How do I book a free consultation for epididymal cyst treatment in ${formattedCity}?`,
            answer: `You can book through the PureCheckup website by selecting your city and treatment. Free consultations are available with no-cost EMI support.`,
        },
        {
            id: "ten",
            question: `Can epididymal cysts go away on their own?`,
            answer: `Small cysts may remain stable and symptom-free. Large or painful cysts usually require medical or surgical treatment for long-term relief.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Epididymal Cyst Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Advanced Epididymal cyst removal in ${formattedCity} by PureCheckup. Free consultation, minimal downtime, expert surgeons, and no-cost EMI available.`}
                />
                <meta
                    name="keywords"
                    content={`epididymal cyst treatment in ${formattedCity}, epididymal cyst surgery in ${formattedCity}, epididymal cyst removal in ${formattedCity}, best epididymal cyst doctor in ${formattedCity}, epididymal cyst symptoms in ${formattedCity}, epididymal cyst causes in ${formattedCity}, epididymal cyst treatment cost in ${formattedCity}, recovery after epididymal cyst surgery in ${formattedCity}, online consultation for epididymal cyst in ${formattedCity}, epididymal cyst specialist in ${formattedCity}, epididymal cyst clinic in ${formattedCity}, affordable epididymal cyst treatment in ${formattedCity}, epididymal cyst surgeon near me in ${formattedCity}, minimally invasive epididymal cyst surgery in ${formattedCity}, top epididymal cyst hospital in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/epididymal-cyst/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Affordable Epididymal Cyst Surgery in ${formattedCity}- Expert Surgeons, Fast Recovery`}
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
                <Heading text1="FAQs on Epididymal Cyst Surgery in" text2={formattedCity} />
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
                    treatmentName="Epididymal Cyst"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Surgery type (Standard/Microsurgery)",
                        "Cyst size & complexity",
                        "Hospital charges",
                        "Follow-up care",
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

export default EpididymalCystInSpecialCity;
