
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
        title: "Balanitis Surgery",
        description:
            "Minimally invasive procedure to treat inflammation or infection of the glans, restoring comfort and preventing recurrence.",
        downtime: "3–5 days",
    },
    {
        title: "Circumcision Surgery",
        description:
            "Surgical removal of the foreskin to treat chronic balanitis, prevent infections, and improve hygiene.",
        downtime: "5–7 days",
    },
    {
        title: "Penile Frenulectomy",
        description:
            "Minor procedure to release a tight frenulum that may contribute to balanitis or discomfort during activity.",
        downtime: "2–4 days",
    },
    {
        title: "Urethroplasty Surgery",
        description:
            "Corrective surgery for urethral strictures or complications that may exacerbate balanitis symptoms.",
        downtime: "5–7 days",
    },
    {
        title: "Topical & Laser Balanitis Treatment",
        description:
            "Non-surgical or minimally invasive laser treatment to reduce inflammation and prevent recurrence.",
        downtime: "1–2 days",
    },
    {
        title: "Hypospadias Repair Surgery",
        description:
            "Surgical correction of congenital urethral opening issues that may contribute to recurring balanitis.",
        downtime: "7–10 days",
    },
];

const testimonials = [
    {
        quote:
            "I suffered from recurrent infections. Circumcision surgery at PureCheckup was the best decision. No more pain or itching.",
        name: "Rohan Das",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very clean clinic and experienced doctor. The surgery was quick and I healed within a week.",
        name: "Vikrant Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I was embarrassed but the doctor was very understanding. The laser treatment was effective.",
        name: "Anil Kumar",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Great service and affordable rates. They handled my insurance paperwork smoothly.",
        name: "Suresh Menon",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Thank you PureCheckup for solving my problem. I feel much better now.",
        name: "Rajeev Gupta",
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

const BalanitisInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `How do I book a Balanitis Surgery in ${formattedCity}?`,
            answer: `You can book a Balanitis Surgery in ${formattedCity} easily through PureCheckup’s online platform. Select your city, choose a preferred date, and schedule a consultation with an experienced surgeon. You can also call our helpline for instant booking.`,
        },
        {
            id: "two",
            question: `What is the online platform to book a Balanitis Surgery in ${formattedCity}?`,
            answer: `PureCheckup provides a secure and user-friendly online booking system for Balanitis Surgery in ${formattedCity}. Patients can browse doctors, read treatment details, compare costs, and schedule appointments conveniently.`,
        },
        {
            id: "three",
            question: `How much does Balanitis Surgery cost in ${formattedCity}?`,
            answer: `The cost of Balanitis Surgery in ${formattedCity} depends on the complexity and type of procedure. At PureCheckup, you get transparent pricing, with a free consultation to discuss exact costs before scheduling your surgery.`,
        },
        {
            id: "four",
            question: `What is the recovery time after Balanitis Surgery in ${formattedCity}?`,
            answer: `Recovery time typically ranges from 3–5 days, depending on the procedure. Following post-surgery instructions carefully ensures quick healing and minimal discomfort.`,
        },
        {
            id: "five",
            question: `Are there any side effects of Balanitis Surgery in ${formattedCity}?`,
            answer: `Balanitis Surgery is generally safe. Mild swelling, redness, or discomfort may occur temporarily. Serious complications are rare, and our surgeons in ${formattedCity} follow strict protocols for safe and smooth recovery.`,
        },
        {
            id: "six",
            question: `How experienced are the surgeons performing Balanitis Surgery in ${formattedCity}?`,
            answer: `All surgeons at PureCheckup in ${formattedCity} are highly qualified and experienced, having successfully treated numerous cases with excellent outcomes. They prioritize patient safety and comfort.`,
        },
        {
            id: "seven",
            question: `Can I get a consultation before the Balanitis Surgery in ${formattedCity}?`,
            answer: `Yes, PureCheckup offers free online or in-person consultations in ${formattedCity}. Surgeons evaluate your condition, explain the procedure, and provide guidance on costs, recovery, and post-surgery care.`,
        },
        {
            id: "eight",
            question: `Is Balanitis Surgery painful in ${formattedCity}?`,
            answer: `Balanitis Surgery is minimally invasive and performed under local or general anesthesia. Most patients experience minimal discomfort, which is manageable with prescribed medications. Recovery is usually quick.`,
        },
        {
            id: "nine",
            question: `Why choose PureCheckup for Balanitis Surgery in ${formattedCity}?`,
            answer: `PureCheckup is a trusted platform for Balanitis Surgery in ${formattedCity}, offering: Experienced surgeons, Safe minimally invasive procedures, Transparent pricing, and Fast recovery support.`,
        },
        {
            id: "ten",
            question: `What precautions should I take after Balanitis Surgery in ${formattedCity}?`,
            answer: `After Balanitis Surgery in ${formattedCity}, patients should: Keep the area clean and dry, Follow prescribed medications, Avoid strenuous activity for a few days, and Attend follow-up consultations.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Balanitis Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Book your  Balanitis Surgery in ${formattedCity} with top surgeons. Safe, fast, and affordable, Free online consultation available with no-cost EMI  | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`balanitis surgery ${formattedCity}, best balanitis surgery ${formattedCity}, balanitis procedure ${formattedCity}, balanitis treatment ${formattedCity}, balanitis surgeon ${formattedCity}, affordable balanitis surgery ${formattedCity}, expert balanitis doctors ${formattedCity}, safe balanitis surgery ${formattedCity}, balanitis surgery cost in ${formattedCity}, balanitis recovery time ${formattedCity}, balanitis surgery near me ${formattedCity}, online balanitis surgery consultation ${formattedCity}, quick balanitis surgery in ${formattedCity}, minimally invasive balanitis surgery ${formattedCity}, balanitis surgery hospital ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/balanitis/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Get Safe & Advanced Balanitis Surgery in ${formattedCity} – Safe, Quick & Expert Care`}
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
                <Heading text1="FAQs on Balanitis Surgery in" text2={formattedCity} />
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
                    treatmentName="Balanitis"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Type of procedure (Circumcision/Laser)",
                        "Severity of infection",
                        "Hospital room choice",
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

export default BalanitisInSpecialCity;
