
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
        title: "Standard PCNL (Percutaneous Nephrolithotomy)",
        description:
            "A keyhole surgical procedure for large or complex kidney stones (>2 cm). A small incision is made in the back to directly access and remove stones. High success rate and ideal for hard, dense stones.",
        downtime: "7–10 days",
    },
    {
        title: "Mini-PCNL (Minimally Invasive PCNL)",
        description:
            "A smaller, advanced version of PCNL using miniature instruments. Reduces bleeding, pain, and hospital stay. Best for medium to large stones requiring precision removal.",
        downtime: "3–6 days",
    },
    {
        title: "Ultra Mini-PCNL",
        description:
            "Uses ultra-small instruments for reduced tissue damage and faster recovery. Suitable for stones up to 1.5–2 cm. Offers quicker healing compared to standard PCNL.",
        downtime: "2–4 days",
    },
    {
        title: "Micro-PCNL (Microchannel PCNL)",
        description:
            "The least invasive PCNL technique using a microchannel to access the kidney. Ideal for small to moderate stones requiring surgical removal without major cuts.",
        downtime: "1–3 days",
    },
];

const testimonials = [
    {
        quote:
            "I had a huge staghorn stone. Doctors said open surgery, but PureCheckup suggested PCNL. It was done with just a small hole and I am stone-free now.",
        name: "Vikram Rathore",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "My father underwent Mini-PCNL. He is diabetic but the procedure was safe and recovery was smooth. Very tankful to the team.",
        name: "Neeraj Gupta",
        designation: "Son of Patient",
        stars: 5,
    },
    {
        quote:
            "Experienced doctors and good hospital facilities. The surgery went exactly as planned.",
        name: "Sanjay Mishra",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Recovery took about a week but the pain was manageable. The stone clearance was 100%.",
        name: "Ankit Jain",
        designation: "Patient",
        stars: 4,
    },
    {
        quote:
            "insurance claim was handled by their team seamlessly. I focused only on my health.",
        name: "Rahul Khanna",
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

const PCNLInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is PCNL surgery, and who needs it in ${formattedCity}?`,
            answer: `Percutaneous Nephrolithotomy (PCNL) is a minimally invasive surgical procedure to remove large or complex kidney stones. It is recommended for patients in ${formattedCity} with stones larger than 2 cm, staghorn stones, or stones that cannot be treated with ESWL or RIRS. PCNL ensures high stone clearance with minimal recovery time.`,
        },
        {
            id: "two",
            question: `Why choose PureCheckup for PCNL surgery in ${formattedCity}?`,
            answer: `PureCheckup offers expert PCNL surgery in ${formattedCity} using state-of-the-art hospitals and experienced urologists. We provide complete patient support, including pre-surgery evaluation, free consultation, flexible appointments, and post-surgery follow-up. Our focus on safety, precision, and local accessibility makes us a trusted choice.`,
        },
        {
            id: "three",
            question: `What is the cost of PCNL treatment in ${formattedCity}?`,
            answer: `The cost of PCNL surgery in ${formattedCity} varies depending on the stone size, hospital facilities, and pre-surgery tests. PureCheckup provides transparent pricing, offers free consultation, and No-Cost EMI options, ensuring affordable and hassle-free treatment.`,
        },
        {
            id: "four",
            question: `How do I book a PCNL consultation in ${formattedCity}?`,
            answer: `Booking a PCNL consultation in ${formattedCity} is easy with PureCheckup. You can call 9211930749, fill out our online form, or chat via WhatsApp. Our coordinators will schedule a free consultation with the best urologists in your area.`,
        },
        {
            id: "five",
            question: `Is PCNL safe for large kidney stones in ${formattedCity}?`,
            answer: `Yes. PCNL is a safe and effective procedure for large kidney stones in ${formattedCity}. Performed under expert supervision, it uses a small keyhole incision to remove stones with minimal risk and faster recovery compared to open surgery.`,
        },
        {
            id: "six",
            question: `How long is the recovery after PCNL in ${formattedCity}?`,
            answer: `Patients undergoing PCNL in ${formattedCity} typically recover within 5–10 days, depending on stone size and overall health. Most patients can resume normal activities gradually while following post-surgery care instructions from our urologists.`,
        },
        {
            id: "seven",
            question: `Who performs PCNL surgery at PureCheckup in ${formattedCity}?`,
            answer: `PCNL surgeries in ${formattedCity} are performed by board-certified and experienced urologists. Our specialists are trained in minimally invasive techniques, ensuring high success rates and safe, precise stone removal.`,
        },
        {
            id: "eight",
            question: `Do I need hospitalization after PCNL in ${formattedCity}?`,
            answer: `Yes, a short hospital stay of 1–3 days is typically required after PCNL in ${formattedCity} to monitor recovery and ensure proper healing. PureCheckup coordinates hospital admission, post-operative care, and discharge efficiently.`,
        },
        {
            id: "nine",
            question: `Is PCNL better than RIRS or ESWL for stone removal in ${formattedCity}?`,
            answer: `PCNL is preferred in ${formattedCity} for large, complex, or hard kidney stones, while RIRS or ESWL are better for smaller stones. PCNL offers higher stone clearance in a single session, making it ideal when other procedures are insufficient.`,
        },
        {
            id: "ten",
            question: `What tests are needed before PCNL surgery in ${formattedCity}?`,
            answer: `Before PCNL in ${formattedCity}, patients undergo routine blood tests, urine analysis, ultrasound, and CT scans to evaluate stone size and location. PureCheckup ensures all necessary investigations are completed locally for accurate and safe treatment planning.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Safe PCNL Surgery ${formattedCity} | PureCheckup | 9211930749`}</title>
                <meta
                    name="description"
                    content={`Get the best PCNL treatment in ${formattedCity} with PureCheckup. Minimally invasive stone removal by expert surgeons. Free consultation & No-cost EMI available.`}
                />
                <meta
                    name="keywords"
                    content={`pcnl surgery in ${formattedCity}, pcnl treatment in ${formattedCity}, pcnl procedure in ${formattedCity}, pcnl surgeon in ${formattedCity}, pcnl for kidney stones in ${formattedCity}, percutaneous nephrolithotomy in ${formattedCity}, minimally invasive pcnl in ${formattedCity}, laser pcnl treatment in ${formattedCity}, micro pcnl surgery in ${formattedCity}, ultra mini pcnl in ${formattedCity}, kidney stone removal pcnl in ${formattedCity}, pcnl specialist in ${formattedCity} ,best pcnl hospital in ${formattedCity}, pcnl cost in ${formattedCity}, mini pcnl surgery in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/pcnl/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`PCNL Surgery in ${formattedCity} – Advanced Kidney Stone Removal by Expert Urologists`}
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
                <Heading text1="FAQs on PCNL Treatment in" text2={formattedCity} />
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
                    treatmentName="PCNL"
                    costSubtitle="Pricing varies by case severity, stone complexity, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Stone size and type (Staghorn/Simple)",
                        "Technique used (Standard/Mini/Micro)",
                        "Hospital room category",
                        "Length of hospital stay",
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

export default PCNLInSpecialCity;
