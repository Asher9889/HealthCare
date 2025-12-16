
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
        title: "Balanoposthitis Surgery",
        description:
            "Minimally invasive procedure to treat inflammation or infection of the glans, restoring comfort and preventing recurrence.",
        downtime: "3–5 days",
    },
    {
        title: "Circumcision Surgery",
        description:
            "Surgical removal of the foreskin to treat chronic balanoposthitis, prevent infections, and improve hygiene.",
        downtime: "5–7 days",
    },
    {
        title: "Medical Therapy for Balanoposthitis",
        description:
            "Topical creams or oral medications to manage mild infections or inflammation without surgery.",
        downtime: "None",
    },
    {
        title: "Laser-Assisted Balanoposthitis Surgery",
        description:
            "Precision laser surgery to remove affected tissue, reduce pain, and speed up recovery.",
        downtime: "2–4 days",
    },
    {
        title: "Home Care & Post-Surgery Support",
        description:
            "Guidance for wound care, hygiene, and recovery to prevent recurrence of balanoposthitis.",
        downtime: "N/A (supportive care)",
    },
    {
        title: "Online Consultation & Remote Follow-Up",
        description:
            "Expert consultation and follow-up via PureCheckup’s online platform, ensuring safe recovery from home.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "I was suffering in silence but PureCheckup helped me. The doctor was very patient and the treatment worked.",
        name: "Akash Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Clean hospital and great staff. The surgery was done efficiently. I recovered well.",
        name: "Raghavendra",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Affordable and transparent pricing. No unnecessary tests were prescribed.",
        name: "Mahesh Babu",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "The online consultation option is great. I got a second opinion from home.",
        name: "Sourabh Jain",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Thank you for the quick appointment. The pain is gone now.",
        name: "Nitin Sharma",
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

const BalanoposthitisInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the online platform to book a Balanoposthitis surgery?`,
            answer: `PureCheckup’s online platform allows patients in ${formattedCity} to book Balanoposthitis surgery with top surgeons. It provides real-time availability, consultation scheduling, and pre-surgery guidance, making the process convenient and hassle-free.`,
        },
        {
            id: "two",
            question: `What is the cost of Balanoposthitis surgery in ${formattedCity}?`,
            answer: `The cost of Balanoposthitis surgery in ${formattedCity} varies depending on the procedure type, severity, and surgeon experience. PureCheckup offers transparent pricing, free consultation, and customized treatment plans to ensure value without hidden charges.`,
        },
        {
            id: "three",
            question: `How long does it take to recover after Balanoposthitis surgery?`,
            answer: `Recovery time depends on the treatment method and the patient's health. Most patients in ${formattedCity} experience full recovery within 7–14 days after minimally invasive procedures, while more extensive surgeries may take 2–3 weeks. Post-operative care guidance ensures a smooth recovery.`,
        },
        {
            id: "four",
            question: `Is Balanoposthitis surgery safe for adults and children in ${formattedCity}?`,
            answer: `Yes, Balanoposthitis surgery at PureCheckup is safe for both adults and children in ${formattedCity}. Our experienced pediatric and adult urologists use modern techniques that minimize risk and promote faster healing, making the procedure safe across all age groups.`,
        },
        {
            id: "five",
            question: `Can I get Balanoposthitis surgery without hospitalization in ${formattedCity}?`,
            answer: `Many Balanoposthitis procedures at PureCheckup are outpatient or minimally invasive, allowing patients in ${formattedCity} to return home the same day. Our team ensures safety, monitoring, and post-surgery instructions for a smooth recovery without a hospital stay.`,
        },
        {
            id: "six",
            question: `What are the symptoms that require Balanoposthitis treatment in ${formattedCity}?`,
            answer: `Common symptoms include redness, swelling, pain in the foreskin, discharge, and difficulty retracting the foreskin. If you experience any of these in ${formattedCity}, early consultation at PureCheckup ensures timely treatment and prevents complications.`,
        },
        {
            id: "seven",
            question: `How experienced are the surgeons for Balanoposthitis treatment in ${formattedCity}?`,
            answer: `PureCheckup surgeons in ${formattedCity} have years of experience in urological procedures, including Balanoposthitis. They are trained in advanced surgical techniques, ensuring safe, effective treatment with high patient satisfaction and minimal recovery time.`,
        },
        {
            id: "eight",
            question: `How soon can I resume normal activities after Balanoposthitis surgery in ${formattedCity}?`,
            answer: `Most patients in ${formattedCity} can resume light daily activities within 3–5 days after minimally invasive surgery. Full physical activity, including sports, is usually allowed after 2–3 weeks, depending on the procedure and the doctor’s advice. Post-surgery guidelines ensure safe recovery.`,
        },
        {
            id: "nine",
            question: `Why choose PureCheckup for Balanoposthitis surgery in ${formattedCity}?`,
            answer: `PureCheckup offers expert Balanoposthitis treatment in ${formattedCity} with certified urologists and advanced surgical techniques. Patients benefit from fast recovery, minimal discomfort, and personalized care. Trusted by hundreds in ${formattedCity}, PureCheckup ensures safe, effective, and reliable treatment.`,
        },
        {
            id: "ten",
            question: `How do I book a free consultation for Balanoposthitis surgery in ${formattedCity}?`,
            answer: `Booking a free consultation in ${formattedCity} is simple. Visit the PureCheckup website, select your city, choose Balanoposthitis treatment, and schedule an appointment. Alternatively, call our helpline for instant booking and expert guidance.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Balanoposthitis Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get fast, safe Balanoposthitis surgery in ${formattedCity} with expert surgeons. Book a Free online consultation with No-cost EMI | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`balanoposthitis treatment in ${formattedCity}, balanoposthitis surgery in ${formattedCity}, balanitis treatment in ${formattedCity}, circumcision for balanoposthitis in ${formattedCity}, balanoposthitis doctor near me in ${formattedCity}, balanoposthitis clinic in ${formattedCity}, best balanoposthitis surgeon in ${formattedCity}, balanoposthitis specialist in ${formattedCity}, affordable balanoposthitis surgery in ${formattedCity}, top balanoposthitis hospital in ${formattedCity}, symptoms of balanoposthitis in ${formattedCity}, recovery after balanoposthitis surgery in ${formattedCity}, causes of balanoposthitis in ${formattedCity}, balanoposthitis treatment cost in ${formattedCity}, online consultation for balanoposthitis in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/balanoposthitis/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Balanoposthitis Treatment in ${formattedCity} – Expert Surgeons, Fast Recovery & Safe Procedure`}
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
                <Heading text1="FAQs on Balanoposthitis Surgery in" text2={formattedCity} />
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
                    treatmentName="Balanoposthitis"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Infection severity",
                        "Type of procedure required",
                        "Hospital charges",
                        "Medication costs",
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

export default BalanoposthitisInSpecialCity;
