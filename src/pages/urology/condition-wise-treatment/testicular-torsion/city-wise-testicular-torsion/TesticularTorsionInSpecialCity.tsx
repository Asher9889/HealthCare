
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
        title: "Testicular Torsion Surgery",
        description:
            "Emergency surgical procedure to untwist the spermatic cord and restore blood flow to prevent permanent testicular damage.",
        downtime: "7–10 days",
    },
    {
        title: "Detorsion & Orchiopexy (Emergency Fixation)",
        description:
            "Immediate procedure to correct torsion and fix the testicle to prevent future recurrence.",
        downtime: "5–7 days",
    },
    {
        title: "Bilateral Orchiopexy",
        description:
            "Preventive surgery where both testicles are fixed to avoid future torsion episodes.",
        downtime: "7–10 days",
    },
    {
        title: "Pediatric Testicular Torsion Surgery",
        description:
            "Specialized procedure for children experiencing acute torsion, ensuring safe and fast healing.",
        downtime: "7–14 days",
    },
    {
        title: "Testicular Viability Assessment Surgery",
        description:
            "Surgical assessment to determine salvage vs removal when torsion is prolonged.",
        downtime: "10–14 days",
    },
    {
        title: "Online Consultation & Emergency Coordination",
        description:
            "Immediate online guidance and fast hospital coordination for emergency torsion management.",
        downtime: "Not applicable",
    },
];

const testimonials = [
    {
        quote:
            "It was a scary situation, my son was in severe pain. PureCheckup arranged surgery within an hour. He is fine now.",
        name: "Neeraj Gupta",
        designation: "Father of Patient",
        stars: 5,
    },
    {
        quote:
            "Emergency service was excellent. Doctors knew exactly what to do. Saved my testicle.",
        name: "Rohit Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very professional and quick. They understood the urgency. Highly recommended for emergencies.",
        name: "Siddharth Jain",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The surgery went well and recovery was smooth. The doctor was very reassuring.",
        name: "Manish Kumar",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Thank you for the prompt action. The insurance process was also handled efficiently.",
        name: "Ajay Singh",
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

const TesticularTorsionInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is testicular torsion and why is it an emergency?`,
            answer: `Testicular torsion occurs when the spermatic cord twists and cuts off blood supply to the testicle. It is a medical emergency requiring immediate surgery to prevent permanent damage.`,
        },
        {
            id: "two",
            question: `Why choose PureCheckup for testicular torsion surgery in ${formattedCity}?`,
            answer: `PureCheckup offers emergency surgical care, expert urologists, quick diagnosis, and no-cost EMI options. Patients in ${formattedCity} also receive free consultation and fast hospital coordination.`,
        },
        {
            id: "three",
            question: `What are the symptoms of testicular torsion in ${formattedCity}?`,
            answer: `Common symptoms include sudden severe testicular pain, swelling, abdominal pain, nausea, and high-riding testicle. Immediate medical help is required in ${formattedCity}.`,
        },
        {
            id: "four",
            question: `How is testicular torsion diagnosed by doctors in ${formattedCity}?`,
            answer: `Doctors perform a physical examination, Doppler ultrasound, and urgent evaluation to confirm reduced blood flow. Rapid assessment helps prevent testicular loss.`,
        },
        {
            id: "five",
            question: `Can testicular torsion be treated without surgery?`,
            answer: `No. Surgery is the only definitive treatment. Delayed treatment may cause permanent damage or require removal of the testicle.`,
        },
        {
            id: "six",
            question: `What is the recovery time after testicular torsion surgery in ${formattedCity}?`,
            answer: `Most patients recover within 7–10 days, resuming routine activities gradually. Complete healing usually occurs within 2–3 weeks.`,
        },
        {
            id: "seven",
            question: `What causes testicular torsion in males?`,
            answer: `The main cause is loose testicular attachment, known as the “bell-clapper deformity,” making the testicle more prone to twisting. Sudden movement or injury may trigger torsion.`,
        },
        {
            id: "eight",
            question: `Is testicular torsion surgery safe for children and adults in ${formattedCity}?`,
            answer: `Yes. PureCheckup surgeons in ${formattedCity} are trained in pediatric and adult urological emergencies, ensuring safe, fast, and effective treatment.`,
        },
        {
            id: "nine",
            question: `What is the cost of testicular torsion surgery in ${formattedCity}?`,
            answer: `The cost varies based on the hospital, urgency, and procedure type. PureCheckup provides transparent pricing, free consultations, and no-cost EMI options.`,
        },
        {
            id: "ten",
            question: `How do I book a free consultation for testicular torsion treatment in ${formattedCity}?`,
            answer: `Patients can book easily through PureCheckup’s website by selecting ${formattedCity} and choosing the treatment. Free consultation and emergency support are available instantly.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Testicular Torsion Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get urgent testicular torsion treatment in ${formattedCity} with PureCheckup. Expert surgeons, fast recovery, free consultation, and no-cost EMI available for patients.`}
                />
                <meta
                    name="keywords"
                    content={`testicular torsion treatment in ${formattedCity}, testicular torsion surgery in ${formattedCity}, emergency testicular torsion care in ${formattedCity}, testicular torsion doctor near me in ${formattedCity}, best testicular torsion surgeon in ${formattedCity}, testicular torsion hospital in ${formattedCity}, testicular torsion specialist in ${formattedCity}, affordable testicular torsion surgery in ${formattedCity}, urgent testicular torsion treatment in ${formattedCity}, testicular torsion clinic in ${formattedCity}, symptoms of testicular torsion in ${formattedCity}, causes of testicular torsion in ${formattedCity}, recovery after testicular torsion surgery in ${formattedCity}, testicular torsion surgery cost in ${formattedCity}, online consultation for testicular torsion in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/testicular-torsion/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Testicular Torsion Treatment in ${formattedCity} – Emergency Surgery & Care`}
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
                <Heading text1="FAQs on Testicular Torsion Surgery in" text2={formattedCity} />
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
                    treatmentName="Testicular Torsion"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Surgery complexity (Orchiopexy/Removal)",
                        "Urgency/Emergency charges",
                        "Hospital room & Stay",
                        "Post-op medications",
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

export default TesticularTorsionInSpecialCity;
