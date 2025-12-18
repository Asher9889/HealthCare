import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SpecialistCard, StatsBar, BenefitCard, TreatmentCard, FAQ, TreatmentProcess, SEO } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";

const treatments = [
    {
        title: "Laser Eye Surgery (LASIK, PRK)",
        description:
            "Precision vision correction procedures to improve eyesight, reduce dependency on glasses or contact lenses, and enhance visual clarity.",
        downtime: "1–3 days",
    },
    {
        title: "Laser Dermatology Treatments",
        description:
            "Advanced skin treatments for acne scars, pigmentation, skin resurfacing, and overall skin rejuvenation with minimal discomfort.",
        downtime: "3–7 days",
    },
    {
        title: "Laser Hair Removal",
        description:
            "Long-term hair reduction using precise laser technology for smooth, hair-free skin on face, arms, legs, and other areas.",
        downtime: "Minimal (1–2 days for redness)",
    },
    {
        title: "Laser Dental Procedures",
        description:
            "Minimally invasive treatments for gum surgery, cavity removal, periodontal care, and enhanced oral health with faster recovery.",
        downtime: "1–2 days",
    },
    {
        title: "Laser ENT Treatments",
        description:
            "Specialized procedures for sinus correction, snoring solutions, and airway improvements with quick recovery and minimal pain.",
        downtime: "2–5 days",
    },
    {
        title: "Laser Cosmetic Surgeries",
        description:
            "Procedures for tattoo removal, scar revision, skin tightening, and other aesthetic enhancements with precise laser technology.",
        downtime: "3–7 days",
    },
];

const testimonials = [
    {
        quote:
            "I got LASIK done through PureCheckup. The process was seamless and my vision is perfect now.",
        name: "Rohan Gupta",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Laser hair removal at the partner clinic was very effective. Great results after just a few sessions.",
        name: "Sneha Reddy",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I underwent laser gum surgery. It was painless and the recovery was super fast.",
        name: "Amit Sharma",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Highly professional doctors for laser scar removal. My skin looks much better now.",
        name: "Priya Malhotra",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The laser treatment for snoring really helped. I sleep much better now.",
        name: "Vikram Singh",
        designation: "Patient",
        stars: 4,
    },
];

const benefits = [
    { title: "USFDA-Approved Procedures", img: usfda, bg: bg1 },
    { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
    { title: "No-Cost EMI", img: ncemi, bg: bg3 },
    { title: "Day Care / Hospitalization", img: hsptl, bg: bg4 },
];

const LaserSurgeryInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is laser surgery, and how does it work in ${formattedCity}?`,
            answer: `Laser surgery uses precise light energy for minimally invasive treatments. In ${formattedCity}, top clinics offer tailored laser procedures with advanced technology.`,
        },
        {
            id: "two",
            question: `Who is the best candidate for laser surgery in ${formattedCity}?`,
            answer: `Ideal candidates have specific conditions suited for laser treatment, good health, and realistic recovery expectations. A specialist in ${formattedCity} will determine eligibility.`,
        },
        {
            id: "three",
            question: `What types of laser surgery are offered in ${formattedCity}?`,
            answer: `${formattedCity} clinics provide laser eye surgery, laser dermatology, laser dental surgery, laser hair removal, and more, based on your needs.`,
        },
        {
            id: "four",
            question: `How much does laser surgery cost in ${formattedCity}?`,
            answer: `Cost varies by procedure type, clinic, and surgeon experience. Many ${formattedCity} providers offer transparent pricing and flexible payment options.`,
        },
        {
            id: "five",
            question: `What are the benefits of laser surgery in ${formattedCity}?`,
            answer: `Benefits include minimal scarring, shorter recovery, precision treatment, and less pain — all available from certified specialists in ${formattedCity}.`,
        },
        {
            id: "six",
            question: `Is laser surgery safe in ${formattedCity}?`,
            answer: `Yes. Reputable ${formattedCity} clinics use approved technology, experienced surgeons, and safety protocols to ensure effective and secure procedures.`,
        },
        {
            id: "seven",
            question: `How long is the recovery after laser surgery in ${formattedCity}?`,
            answer: `Recovery time depends on the laser procedure type. Most patients in ${formattedCity} resume daily activities within days to weeks with proper follow‑up care.`,
        },
        {
            id: "eight",
            question: `How do I choose the right laser surgery specialist in ${formattedCity}?`,
            answer: `Look for board‑certified surgeons, positive reviews, transparent pricing, and personalized treatment plans offered in ${formattedCity}.`,
        },
        {
            id: "nine",
            question: `Do ${formattedCity} laser surgery clinics offer financing or EMI options?`,
            answer: `Many clinics in ${formattedCity} provide financing, EMI plans, and cost estimates before treatment — ask your provider during consultation.`,
        },
        {
            id: "ten",
            question: `How do I book a free consultation for laser surgery in ${formattedCity}?`,
            answer: `You can book online through PureCheckup, call the clinic, or request a callback. Most ${formattedCity} clinics offer free or no‑obligation consultations.`,
        },
        {
            id: "eleven",
            question: `What preparation is required before laser surgery in ${formattedCity}?`,
            answer: `Your ${formattedCity} surgeon will advise specific steps like fasting, medication adjustments, and pre‑surgery diagnostics to ensure safety.`,
        },
        {
            id: "twelve",
            question: `How long does laser surgery take in ${formattedCity}?`,
            answer: `Laser procedures usually take 15 minutes to a few hours depending on the treatment type at ${formattedCity} clinics.`,
        },
        {
            id: "thirteen",
            question: `What is the online platform to book laser surgery in ${formattedCity}?`,
            answer: `PureCheckup is the recommended platform to search, compare, and book laser surgery appointments with certified surgeons in ${formattedCity}.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title={`Expert Laser Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}
                description={`Top laser surgery services in ${formattedCity}. Trusted clinics, transparent pricing & expert guidance. Book your free consultation with and no-cost EMI | PureCheckup.`}
                keywords={`laser surgery in ${formattedCity}, best laser surgery ${formattedCity}, laser surgery clinics ${formattedCity}, laser surgery near me ${formattedCity}, top laser surgeons ${formattedCity}, laser treatment cost ${formattedCity}, laser surgery doctors ${formattedCity}, advanced laser procedures ${formattedCity}, laser surgery reviews ${formattedCity}, laser surgery benefits ${formattedCity}, laser surgery consultation ${formattedCity}, certified laser surgeon ${formattedCity}, safe laser surgery ${formattedCity}, laser surgery recovery time ${formattedCity}, book laser surgery online ${formattedCity}`}
                canonical={`https://purecheckup.com/surgery/laser-surgery/city`}
            />

            <ConditionHeroSection
                title={`Advanced Laser Surgery Services in ${formattedCity} – Safe, Effective & Personalized Care by Certified Specialists`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across the City.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Precision Laser Technology", "Minimally Invasive", "Faster Recovery", "Expert Surgeons", "Affordable EMI Plans"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]}
            />
            <StatsBar />

            <section className="py-20 mx-auto max-w-7xl px-4">
                <Heading text1="Meet Our" text2="Laser Specialists" className="mb-10" />
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
                <Heading text1="Frequently Asked Questions – Laser Surgery in" text2={formattedCity} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Advanced Care, Better Results" subtitle="Book your laser surgery consultation today" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Laser Surgery"
                    costSubtitle="Advanced laser treatments at affordable rates."
                    paymentOptions="EMI Options | Insurance Support"
                    costFactors={[
                        "Type of Laser Procedure",
                        "Technology used",
                        "Number of Sessions",
                        "Clinic/Hospital Charges",
                    ]}
                    cities={constantData.cities}
                    mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                    primaryButtonText="Check Cost Now"
                    secondaryButtonText="Find Laser Clinics"
                />
            </section>

        </div>
    )
}

export default LaserSurgeryInSpecialCity;
