
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
        title: "Frenuloplasty Surgery",
        description:
            "Minimally invasive procedure to release a tight frenulum, improving function and comfort. Safe, quick, and performed by expert surgeons.",
        downtime: "3–5 days",
    },
    {
        title: "Circumcision Surgery",
        description:
            "Surgical removal of the foreskin to treat tight foreskin or recurrent infections. Quick recovery with minimal pain.",
        downtime: "5–7 days",
    },
    {
        title: "Penile Frenulectomy",
        description:
            "Minor surgical procedure to release a short frenulum, restoring normal movement and reducing pain during activity.",
        downtime: "2–4 days",
    },
    {
        title: "Hypospadias Repair Surgery",
        description:
            "Corrective surgery to fix congenital urethral opening issues, improving urinary function and appearance.",
        downtime: "7–10 days",
    },
    {
        title: "Urethroplasty Surgery",
        description:
            "Surgical correction of urethral strictures to restore normal urine flow. Performed with minimal incision and a high success rate.",
        downtime: "5–7 days",
    },
    {
        title: "Varicocele Surgery",
        description:
            "Surgical treatment for enlarged veins in the scrotum improves fertility and reduces discomfort.",
        downtime: "4–6 days",
    },
];

const testimonials = [
    {
        quote:
            "I had pain for a long time due to tight frenulum. Frenuloplasty at PureCheckup solved it in 20 minutes. Very happy.",
        name: "Mohan Das",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Discreet and professional service. The doctor made me feel comfortable. Healing was quick.",
        name: "Siddharth Malhotra",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I was worried about pain but laser frenuloplasty was almost painless. I went home the same day.",
        name: "Arun Kumar",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Affordable procedure with no hidden costs. The support team was very helpful.",
        name: "Rajesh Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Good follow-up care. The swelling subsided in 2 days. Highly recommend PureCheckup.",
        name: "Vinay Gupta",
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

const FrenuloplastyInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `PureCheckup offers minimally invasive frenuloplasty surgery in ${formattedCity}, focusing on precise frenulum release to improve comfort, sexual function, and mobility. Expert urologists, modern OT setup, transparent pricing, and day-care discharge make it a safe and convenient choice for patients in ${formattedCity}.`,
        },
        {
            id: "two",
            question: `How do I book a Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `You can book a frenuloplasty surgery in ${formattedCity} by filling out the online appointment form or requesting a callback for same-day assistance. A dedicated care coordinator will confirm your slot, explain the process, and guide you on pre-surgery requirements.`,
        },
        {
            id: "three",
            question: `What is the online platform to book a Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `Frenuloplasty surgery in ${formattedCity} can be booked directly through PureCheckup’s official website or mobile-friendly booking page. The platform lets you choose a preferred time, upload reports, and receive confirmation and reminders digitally.`,
        },
        {
            id: "four",
            question: `How much does Frenuloplasty Surgery cost in ${formattedCity}?`,
            answer: `The cost of frenuloplasty surgery in ${formattedCity} generally depends on hospital category, surgeon’s experience, and anesthesia type. PureCheckup maintains clear, upfront pricing with package-based estimates shared before admission so you know the approximate total cost in advance.`,
        },
        {
            id: "five",
            question: `What is the recovery time after Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `Most patients in ${formattedCity} can walk and resume routine light activities within 1–2 days after frenuloplasty surgery. Complete healing usually takes about 3–5 days for basic comfort, with advice to avoid sexual activity and strenuous exercise for a few weeks.`,
        },
        {
            id: "six",
            question: `Are there any side effects of Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `Common, short-term side effects after frenuloplasty surgery in ${formattedCity} can include mild pain, swelling, bruising, or temporary sensitivity around the surgical area. Serious complications are rare when the procedure is done by experienced surgeons and post-operative instructions are followed correctly.`,
        },
        {
            id: "seven",
            question: `How experienced are the surgeons performing Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `Frenuloplasty surgery at PureCheckup in ${formattedCity} is performed by trained and board-certified surgeons with extensive experience in men’s intimate surgeries. Their focus on minimally invasive techniques helps reduce complications and support faster recovery.`,
        },
        {
            id: "eight",
            question: `Can I get a consultation before the Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `Yes, you can always schedule a detailed consultation in ${formattedCity} before frenuloplasty surgery to discuss symptoms, expectations, and treatment options. During this visit, the surgeon examines the frenulum, explains the procedure, and addresses all questions about recovery, cost, and outcomes.`,
        },
        {
            id: "nine",
            question: `Is Frenuloplasty Surgery painful in ${formattedCity}?`,
            answer: `Frenuloplasty surgery in ${formattedCity} is usually performed under local or short-acting anesthesia, so you should not feel pain during the procedure. After surgery, most patients report only mild discomfort, which is manageable with prescribed pain medicines and proper hygiene.`,
        },
        {
            id: "ten",
            question: `What precautions should I take after Frenuloplasty Surgery in ${formattedCity}?`,
            answer: `After frenuloplasty surgery in ${formattedCity}, keep the area clean and dry, use prescribed ointments, and wear loose, comfortable undergarments. Avoid sexual activity, masturbation, heavy exercise, and any pressure on the area until your surgeon confirms complete healing in follow-up.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Expert Frenuloplasty Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Book your Frenuloplasty Surgery in ${formattedCity} with top surgeons. Safe, fast, and affordable, Free online consultation available with no-cost EMI  | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`frenuloplasty surgery ${formattedCity}, best frenuloplasty surgery ${formattedCity}, frenuloplasty procedure ${formattedCity}, frenuloplasty treatment ${formattedCity}, frenuloplasty surgeon ${formattedCity}, affordable frenuloplasty surgery ${formattedCity}, expert frenuloplasty doctors ${formattedCity}, safe frenuloplasty surgery ${formattedCity}, frenuloplasty surgery cost in ${formattedCity}, frenuloplasty recovery time ${formattedCity}, frenuloplasty surgery near me ${formattedCity}, online frenuloplasty surgery consultation ${formattedCity}, quick frenuloplasty surgery in ${formattedCity}, minimally invasive frenuloplasty surgery ${formattedCity}, frenuloplasty surgery hospital ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/frenuloplasty-surgery/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Expert Frenuloplasty Surgery in ${formattedCity} – Safe, Quick & Expert Care`}
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
                <Heading text1="FAQs on Frenuloplasty Surgery in" text2={formattedCity} />
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
                    treatmentName="Frenuloplasty"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Technique used (Laser/Frenulectomy)",
                        "Anesthesia type",
                        "Hospital charges",
                        "Post-op care requirements",
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

export default FrenuloplastyInSpecialCity;
