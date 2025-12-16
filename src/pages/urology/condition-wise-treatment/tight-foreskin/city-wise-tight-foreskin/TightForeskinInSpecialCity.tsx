
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
        title: "Phimosis Surgery (Circumcision)",
        description:
            "Safe, minimally invasive surgery to permanently treat tight foreskin and prevent recurrent infections.",
        downtime: "3–5 days",
    },
    {
        title: "Preputioplasty (Foreskin Loosening Surgery)",
        description:
            "A foreskin-preserving procedure for patients who want to avoid full circumcision.",
        downtime: "4–6 days",
    },
    {
        title: "Laser Circumcision",
        description:
            "Advanced laser technique for tight foreskin removal with minimal pain and faster healing.",
        downtime: "2–4 days",
    },
    {
        title: "Infection-Based Tight Foreskin Treatment",
        description:
            "Topical and oral medication to treat phimosis caused by fungal or bacterial infection.",
        downtime: "None",
    },
    {
        title: "Balloon Dilation Treatment",
        description:
            "Non-surgical foreskin stretching method for mild cases of phimosis.",
        downtime: "None",
    },
    {
        title: "Post-Surgery Care & Hygiene Guidance",
        description:
            "Personalized care plan ensuring safe healing and prevention of recurrence.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "Startling results after laser circumcision. I was back to work in 3 days. No pain at all.",
        name: "Aakash Gupta",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I was hesitant about surgery, but the doctor suggested preputioplasty. It worked perfectly for me.",
        name: "Manish Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "PureCheckup made the process very easy. From booking to discharge, everything was smooth.",
        name: "Ritesh Singh",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "The cost was transparent and affordable. I used the EMI option which was very helpful.",
        name: "Vikas Sharma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Highly recommended for tight foreskin treatment. Expert doctors and great care.",
        name: "Arjun Das",
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

const TightForeskinInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the best treatment for a tight foreskin in ${formattedCity}?`,
            answer: `The best treatment for a tight foreskin in ${formattedCity} is minimally invasive circumcision or preputioplasty, depending on the severity. PureCheckup provides expert evaluation and fast recovery options.`,
        },
        {
            id: "two",
            question: `Is tight foreskin surgery painful in ${formattedCity}?`,
            answer: `Tight foreskin surgery in ${formattedCity} is not painful because local anesthesia is used. Most patients experience mild discomfort for 1–2 days with quick recovery.`,
        },
        {
            id: "three",
            question: `How much does tight foreskin surgery cost in ${formattedCity}?`,
            answer: `The cost of tight foreskin surgery in ${formattedCity} varies based on technique and surgeon expertise. PureCheckup offers transparent pricing and no-cost EMI options.`,
        },
        {
            id: "four",
            question: `How long does recovery take after tight foreskin surgery?`,
            answer: `Most patients recover within 3–7 days, depending on the type of surgery. Laser circumcision generally allows the fastest healing.`,
        },
        {
            id: "five",
            question: `Can a tight foreskin be treated without surgery in ${formattedCity}?`,
            answer: `Yes, mild cases can be treated with medication, stretching, or topical therapy. Severe or recurrent cases usually require surgery for complete relief.`,
        },
        {
            id: "six",
            question: `Who is the best doctor for tight foreskin treatment in ${formattedCity}?`,
            answer: `PureCheckup connects you with top urologists and surgeons in ${formattedCity} who specialize in phimosis and tight foreskin treatments.`,
        },
        {
            id: "seven",
            question: `What are the symptoms of a tight foreskin in ${formattedCity}?`,
            answer: `Symptoms include difficulty retracting the foreskin, pain, swelling, infection, and discomfort during urination or sex. Early treatment is recommended.`,
        },
        {
            id: "eight",
            question: `Does a tight foreskin cause infection?`,
            answer: `Yes, an untreated tight foreskin can trap moisture and bacteria, leading to infections like balanitis or UTIs.`,
        },
        {
            id: "nine",
            question: `Is circumcision necessary for tight foreskin in adults?`,
            answer: `Circumcision is the most effective treatment for severe phimosis, but alternatives like preputioplasty are available for foreskin preservation.`,
        },
        {
            id: "ten",
            question: `How can I book a free consultation for tight foreskin treatment in ${formattedCity}?`,
            answer: `You can book a free consultation through PureCheckup’s online platform or request a callback for same-day appointment scheduling.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Tight Foreskin Surgery ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`PureCheckup offers safe, tight foreskin treatment in ${formattedCity}. Book a free consultation today with quick recovery and no-cost EMI support.`}
                />
                <meta
                    name="keywords"
                    content={`tight foreskin treatment in ${formattedCity}, tight foreskin surgery in ${formattedCity}, phimosis treatment in ${formattedCity}, phimosis surgery in ${formattedCity}, symptoms of tight foreskin in ${formattedCity}, tight foreskin treatment cost in ${formattedCity}, recovery after phimosis surgery in ${formattedCity}, causes of tight foreskin in ${formattedCity}, online consultation for tight foreskin in ${formattedCity}, tight foreskin doctor near me in ${formattedCity}, best phimosis specialist in ${formattedCity}, tight foreskin clinic in ${formattedCity}, circumcision for tight foreskin in ${formattedCity}, affordable phimosis surgery in ${formattedCity}, tight foreskin surgeon in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/tight-foreskin/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Advanced Tight Foreskin Treatment in ${formattedCity} – Safe, Fast & Expert Care, Free Consultation`}
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
                <Heading text1="FAQs on Tight Foreskin Treatment in" text2={formattedCity} />
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
                    treatmentName="Tight Foreskin"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Surgery type (Circumcision/Preputioplasty)",
                        "Severity of phimosis",
                        "Hospital charges",
                        "Anesthesia usage",
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

export default TightForeskinInSpecialCity;
