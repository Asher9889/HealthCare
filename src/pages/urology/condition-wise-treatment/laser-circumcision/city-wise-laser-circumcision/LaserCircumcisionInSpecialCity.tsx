
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
        title: "Adult Laser Circumcision",
        description:
            "Minimally invasive, safe, and precise procedure for adults with quick recovery. Day-care surgery under local anesthesia.",
        downtime: "3–5 days",
    },
    {
        title: "Child Laser Circumcision",
        description:
            "Gentle, safe laser circumcision for children. Performed with local or general anesthesia based on age. Quick recovery with minimal discomfort.",
        downtime: "3–5 days",
    },
    {
        title: "Stapler-Assisted Laser Circumcision",
        description:
            "Combines stapler and laser technology for precise, fast, and less painful circumcision. Ideal for adults and children.",
        downtime: "3–5 days",
    },
    {
        title: "Pain-Free Laser Circumcision (Adult)",
        description:
            "Advanced laser technology for a virtually painless circumcision. Quick procedure with minimal bleeding.",
        downtime: "3–5 days",
    },
    {
        title: "Infant Laser Circumcision",
        description:
            "Safe and quick procedure for newborns and infants with minimal anesthesia and faster healing.",
        downtime: "2–3 days",
    },
];

const testimonials = [
    {
        quote:
            "The laser circumcision was incredibly smooth. I felt almost no pain and recovered within days. Highly professional team.",
        name: "Arjun Mehta",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "We chose laser circumcision for our son. The doctors were very caring and the procedure was quick. He was playing normally in 3 days.",
        name: "Sonia Reddy",
        designation: "Parent",
        stars: 5,
    },
    {
        quote:
            "I was worried about surgery but the laser method is fantastic. No stitches, no bleeding, and very fast healing.",
        name: "Deepak Kumar",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "PureCheckup arranged everything perfectly. The laser treatment was affordable and the hospital was top-notch.",
        name: "Mohit Bansal",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Best decision to go for laser. It's clean, precise and hassle-free. Thank you PureCheckup for the guidance.",
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

const LaserCircumcisionInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for laser circumcision treatment in ${formattedCity}?`,
            answer: `PureCheckup provides expert doctors, safe procedures, and a comfortable experience for laser circumcision in ${formattedCity}.`,
        },
        {
            id: "two",
            question: `How do I book a free consultation for laser circumcision in ${formattedCity}?`,
            answer: `You can book through PureCheckup’s website, WhatsApp, or helpline to get your free consultation.`,
        },
        {
            id: "three",
            question: `What is the online platform to book laser circumcision in ${formattedCity}?`,
            answer: `You can book circumcision treatment online at PureCheckup.com.`,
        },
        {
            id: "four",
            question: `How much does laser circumcision cost in ${formattedCity}?`,
            answer: `The cost varies based on the clinic and doctor. PureCheckup offers transparent pricing and packages.`,
        },
        {
            id: "five",
            question: `Is laser circumcision safe in ${formattedCity}?`,
            answer: `Yes, laser circumcision is a safe, minimally invasive procedure performed by experienced doctors.`,
        },
        {
            id: "six",
            question: `How long is the recovery after laser circumcision in ${formattedCity}?`,
            answer: `Recovery is quick, usually within 7–10 days, with minimal pain or discomfort.`,
        },
        {
            id: "seven",
            question: `Are there any side effects of laser circumcision in ${formattedCity}?`,
            answer: `Side effects are rare. Some mild swelling or redness may occur, which resolves quickly.`,
        },
        {
            id: "eight",
            question: `Can I get laser circumcision for children in ${formattedCity}?`,
            answer: `Yes, PureCheckup provides laser circumcision for both adults and children with utmost care.`,
        },
        {
            id: "nine",
            question: `Do I need to fast or prepare before laser circumcision in ${formattedCity}?`,
            answer: `No special preparation is needed, but your doctor will provide specific pre-treatment instructions.`,
        },
        {
            id: "ten",
            question: `Can I consult online before laser circumcision in ${formattedCity}?`,
            answer: `Yes, PureCheckup offers online consultations to discuss your treatment and procedure details.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Laser Circumcision in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get advanced laser circumcision in ${formattedCity} – quick, safe, and effective. Book your free consultation with zero-cost EMI at PureCheckup today`}
                />
                <meta
                    name="keywords"
                    content={`laser circumcision in ${formattedCity}, laser circumcision surgery in ${formattedCity}, laser circumcision treatment in ${formattedCity}, laser male circumcision in ${formattedCity}, laser phimosis treatment in ${formattedCity}, laser circumcision doctors in ${formattedCity}, laser circumcision clinic in ${formattedCity}, laser adult circumcision in ${formattedCity}, laser child circumcision in ${formattedCity}, best laser circumcision surgeon in ${formattedCity}, laser circumcision cost in ${formattedCity}, laser painless circumcision in ${formattedCity}, laser circumcision hospital near me in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/laser-circumcision/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Get Safe & Advanced Pain-Free Laser Circumcision in ${formattedCity} – Expert Surgeons with 24x7 Support`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across ${formattedCity}.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Free Doctor Consultation", "No-Cost EMI & Insurance Assistance", "Top Laparoscopic Surgeons", "Day-Care Surgery Options", "24x7 Medical Coordination"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]} // Getting Prop structure assumed same
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
                <Heading text1="FAQs on Laser Circumcision in" text2={formattedCity} />
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
                    treatmentName="Laser Circumcision"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Laser technology used",
                        "Hospital category and room",
                        "Insurance coverage and approvals",
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

export default LaserCircumcisionInSpecialCity;
