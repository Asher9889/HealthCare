import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SpecialistCard, StatsBar, BenefitCard, TreatmentCard, FAQ, TreatmentProcess, SEO } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";

const treatments = [
    {
        title: "Rhinoplasty (Nose Surgery)",
        description:
            "Advanced nose reshaping procedure to improve facial harmony, breathing, and overall appearance.",
        downtime: "7–14 days",
    },
    {
        title: "Liposuction & Body Contouring",
        description:
            "Targeted fat removal using modern liposuction techniques for a sculpted and proportionate body.",
        downtime: "5–10 days",
    },
    {
        title: "Breast Augmentation & Reduction",
        description:
            "Customized breast surgery to enhance size, shape, or reduce discomfort under expert medical care.",
        downtime: "7–14 days",
    },
    {
        title: "Facelift & Anti-Aging Surgery",
        description:
            "Surgical facial rejuvenation to reduce wrinkles, sagging skin, and visible signs of aging.",
        downtime: "10–21 days",
    },
    {
        title: "Hair Transplant & Scalp Restoration",
        description:
            "Permanent hair loss treatment using advanced transplant techniques for natural-looking results.",
        downtime: "3–7 days",
    },
    {
        title: "Gynecomastia (Male Breast Reduction)",
        description:
            "Effective surgical correction for male chest fat and gland enlargement with minimal scarring.",
        downtime: "5–7 days",
    },
];

const testimonials = [
    {
        quote:
            "I underwent Rhinoplasty at PureCheckup and the results are amazing. My breathing improved and I love my new look.",
        name: "Ritika Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Liposuction was a smooth process. The doctors were very professional and the results were visible within weeks.",
        name: "Arjun Khanna",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Highly recommend for Gynecomastia surgery. The recovery was fast and the scar is barely visible.",
        name: "Karan Mehta",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Excellent care for my Facelift surgery. I look 10 years younger! Thank you PureCheckup.",
        name: "Meera Joshi",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The hair transplant results are fantastic. Natural hairline and great density.",
        name: "Suresh Patel",
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

const PlasticSurgeryInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why Choose PureCheckup for Plastic Surgery in ${formattedCity}?`,
            answer: `PureCheckup connects you with verified plastic surgeons, modern hospitals, transparent pricing, and free consultations in ${formattedCity}.`,
        },
        {
            id: "two",
            question: `Is plastic surgery safe in ${formattedCity}?`,
            answer: `Yes, when performed by certified surgeons in accredited clinics, plastic surgery in ${formattedCity} is safe and effective.`,
        },
        {
            id: "three",
            question: `How much does plastic surgery cost in ${formattedCity}?`,
            answer: `The cost depends on the procedure, the surgeon's expertise, and the clinic. PureCheckup helps you compare the best options.`,
        },
        {
            id: "four",
            question: `Who are the best plastic surgeons in ${formattedCity}?`,
            answer: `PureCheckup lists experienced, board-certified plastic surgeons practicing in leading hospitals across ${formattedCity}.`,
        },
        {
            id: "five",
            question: `What are the most common plastic surgery treatments in ${formattedCity}?`,
            answer: `Rhinoplasty, liposuction, hair transplant, gynecomastia, breast surgery, and facelifts are most popular.`,
        },
        {
            id: "six",
            question: `Is there any recovery time after plastic surgery?`,
            answer: `Recovery varies by procedure. Most patients resume normal activities within a few days to weeks.`,
        },
        {
            id: "seven",
            question: `Can I get a free plastic surgery consultation in ${formattedCity}?`,
            answer: `Yes, PureCheckup offers a free online and in-clinic consultation with top surgeons in ${formattedCity}.`,
        },
        {
            id: "eight",
            question: `Are cosmetic surgeries permanent?`,
            answer: `Most plastic surgery results are long-lasting when combined with a healthy lifestyle and proper aftercare.`,
        },
        {
            id: "nine",
            question: `Which hospitals provide plastic surgery in ${formattedCity}?`,
            answer: `PureCheckup partners with multi-specialty hospitals and cosmetic clinics across ${formattedCity}.`,
        },
        {
            id: "ten",
            question: `How do I choose the right plastic surgeon in ${formattedCity}?`,
            answer: `Compare doctor experience, patient reviews, treatment approach, and hospital infrastructure on PureCheckup.`,
        },
        {
            id: "eleven",
            question: `How do I book a free consultation for plastic surgery in ${formattedCity}?`,
            answer: `You can book a free consultation by visiting PureCheckup.com, selecting ${formattedCity}, and choosing your preferred treatment.`,
        },
        {
            id: "twelve",
            question: `What is the online platform to book plastic surgery in ${formattedCity}?`,
            answer: `PureCheckup is a trusted online platform for comparing doctors, clinics, costs, and booking plastic surgery in ${formattedCity}.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title={`Best Plastic Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}
                description={`Get safe & advanced plastic surgery in ${formattedCity}. Consult top cosmetic surgeons, compare costs & book a free appointment with PureCheckup.`}
                keywords={`plastic surgery ${formattedCity}, cosmetic surgery ${formattedCity}, plastic surgeon ${formattedCity}, cosmetic surgeon ${formattedCity}, plastic surgery clinic ${formattedCity}, cosmetic clinic ${formattedCity}, rhinoplasty ${formattedCity}, liposuction ${formattedCity}, hair transplant ${formattedCity}, gynecomastia surgery ${formattedCity}, breast augmentation ${formattedCity}, facelift surgery ${formattedCity}, body contouring ${formattedCity}, male breast reduction ${formattedCity}, aesthetic surgery ${formattedCity}`}
                canonical={`https://purecheckup.com/aesthetics/plastic-surgeries/city`}
            />

            <ConditionHeroSection
                title={`Advanced Plastic Surgery Treatments in ${formattedCity} by Verified Doctors`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across the City.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Verified Plastic Surgeons", "Advanced Technologies", "Transparent Pricing", "Complete Privacy", "0% EMI Options"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]}
            />
            <StatsBar />

            <section className="py-20 mx-auto max-w-7xl px-4">
                <Heading text1="Meet Our" text2="Plastic Surgeons" className="mb-10" />
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
                <Heading text1="Frequently Asked Questions – Plastic Surgery in" text2={formattedCity} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Transform Your Life" subtitle="Book your plastic surgery consultation today" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Plastic Surgery"
                    costSubtitle="Affordable and transparent pricing for all procedures."
                    paymentOptions="No-Cost EMI | Insurance Assistance"
                    costFactors={[
                        "Procedure Complexity",
                        "Surgeon's Experience",
                        "Hospital Facilities",
                        "Implants or Materials Used (if any)",
                    ]}
                    cities={constantData.cities}
                    mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                    primaryButtonText="Get Cost Estimate"
                    secondaryButtonText="Find Surgeons Near Me"
                />
            </section>

        </div>
    )
}

export default PlasticSurgeryInSpecialCity;
