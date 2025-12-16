
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
        title: "Standard URSL (Ureteroscopic Stone Removal)",
        description:
            "Minimally invasive procedure where a thin ureteroscope is inserted through the urinary tract to locate and remove stones. No cuts, no stitches, and high stone clearance in a single session.",
        downtime: "1–2 days",
    },
    {
        title: "Laser URSL (Holmium Laser Lithotripsy)",
        description:
            "Advanced laser technique used to fragment ureteral stones precisely. Suitable for hard or large stones and ensures complete removal with minimal discomfort.",
        downtime: "1–2 days",
    },
    {
        title: "Flexible URSL (FURS) for Lower Ureter Stones",
        description:
            "Uses a flexible ureteroscope to reach stones in the lower ureter or challenging locations. Provides accurate stone removal with minimal risk and fast recovery.",
        downtime: "1–2 days",
    },
    {
        title: "URSL with Stent Placement",
        description:
            "Performed when ureter narrowing or large stones require additional support. A temporary stent maintains urine flow and aids healing after stone removal.",
        downtime: "1–3 days",
    },
];

const testimonials = [
    {
        quote:
            "Severe back pain due to stone was gone instantly after URSL. I am very happy with the treatment at PureCheckup.",
        name: "Sunil Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Quick, painless and effective. The doctor was very reassuring. I was back to office in 2 days.",
        name: "Prakash Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Hospital staff took good care of me. The laser URSL procedure is amazing. No cuts on my body.",
        name: "Rohit Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Cost was transparent and reasonable. They helped with cashless insurance claim too.",
        name: "Amitabh Roy",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "I highly recommend PureCheckup for stone problems. Expert doctors and great service.",
        name: "Vikas Sharma",
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

const URSLInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why should I choose PureCheckup for URSL surgery in ${formattedCity}?`,
            answer: `PureCheckup offers expert, board-certified urologists and utilizes the latest minimally invasive URSL technology to safely and effectively treat kidney stones in ${formattedCity}. Our advanced equipment and personalized care ensure a smooth procedure and faster recovery.`,
        },
        {
            id: "two",
            question: `How can I book a URSL consultation in ${formattedCity}?`,
            answer: `Booking a URSL consultation in ${formattedCity} is easy and convenient. Simply visit PureCheckup’s website to book online or call us directly at 9211930749 for immediate assistance from our friendly support team.`,
        },
        {
            id: "three",
            question: `What is the cost of URSL surgery in ${formattedCity}?`,
            answer: `The cost of URSL surgery at PureCheckup in ${formattedCity} varies based on the size and location of the kidney stone as well as the hospital’s facilities. We pride ourselves on transparent, competitive pricing with no hidden charges.`,
        },
        {
            id: "four",
            question: `Is URSL surgery safe for removing kidney stones?`,
            answer: `Yes, URSL is a highly safe and minimally invasive procedure for kidney stone removal. It involves no external cuts or stitches, offers a quick recovery, and boasts a success rate of over 90%, making it a preferred choice in ${formattedCity}.`,
        },
        {
            id: "five",
            question: `How long does URSL surgery take?`,
            answer: `Typically, URSL surgery takes between 30 to 60 minutes, depending on the stone’s size and location. Your urologist at PureCheckup will provide a detailed timeline during your consultation.`,
        },
        {
            id: "six",
            question: `What is the recovery time after URSL surgery?`,
            answer: `Most patients in ${formattedCity} recover quickly, resuming normal activities within 1 to 3 days post-surgery. Our team ensures you receive clear post-operative care instructions to support a smooth recovery.`,
        },
        {
            id: "seven",
            question: `Do I need to be hospitalized for URSL surgery in ${formattedCity}?`,
            answer: `URSL is usually performed as a day-care procedure at PureCheckup, allowing you to return home the same day with minimal disruption to your routine.`,
        },
        {
            id: "eight",
            question: `Who performs the URSL surgery at PureCheckup in ${formattedCity}?`,
            answer: `All URSL surgeries at PureCheckup in ${formattedCity} are performed by experienced, board-certified urologists who specialize in kidney stone treatment and use cutting-edge technology for best results.`,
        },
        {
            id: "nine",
            question: `Can kidney stones recur after URSL surgery?`,
            answer: `Yes, kidney stones can recur. That’s why PureCheckup offers comprehensive post-surgery guidance and lifestyle recommendations to help minimize the risk of recurrence in ${formattedCity}.`,
        },
        {
            id: "ten",
            question: `What are the alternative treatments if URSL is not suitable?`,
            answer: `If URSL is not recommended, alternatives include Extracorporeal Shock Wave Lithotripsy (ESWL), Percutaneous Nephrolithotomy (PCNL), and laser lithotripsy. Our specialists will advise the best treatment based on your specific case.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Painless URSL Surgery in ${formattedCity} - Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Quick, safe URSL surgery in ${formattedCity} by Expert urologists No cuts, No Pain. Free consultation & no-cost EMI. Call 9211930749 | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`urs surgery in ${formattedCity}, urs treatment in ${formattedCity}, urs procedure in ${formattedCity}, urs specialist in ${formattedCity}, urs kidney stone surgery in ${formattedCity}, ureter stone removal in ${formattedCity}, laser urs procedure in ${formattedCity}, endoscopic ureter stone surgery in ${formattedCity}, minimally invasive urs in ${formattedCity}, flexible ureteroscopy in ${formattedCity}, advanced ureter stone treatment in ${formattedCity}, urs surgeon in ${formattedCity}, best urs hospital in ${formattedCity}, urs cost in ${formattedCity}, ureteroscopy surgery in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/ursl/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Ureteroscopy (URS) Surgery in ${formattedCity} – Expert Laser Stone Removal by Expert Urologists & Fast Recovery`}
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
                <Heading text1="FAQs on URSL Treatment in" text2={formattedCity} />
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
                    treatmentName="URSL"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Location of stone (Lower/Mid Ureter)",
                        "Laser fiber usage",
                        "Stent requirement",
                        "Hospital charges",
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

export default URSLInSpecialCity;
