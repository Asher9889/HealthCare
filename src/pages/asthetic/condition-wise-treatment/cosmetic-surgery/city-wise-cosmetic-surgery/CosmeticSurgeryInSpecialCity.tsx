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
        title: "Liposuction Surgery",
        description:
            "A body contouring procedure that removes stubborn fat deposits to achieve a slimmer, well-defined body shape.",
        downtime: "7–10 days",
    },
    {
        title: "Gynecomastia Surgery",
        description:
            "Permanent surgical solution for male breast enlargement using minimally invasive cosmetic techniques.",
        downtime: "5–7 days",
    },
    {
        title: "Hair Transplant Surgery (FUE/FUT)",
        description:
            "Advanced hair restoration procedure to treat hair loss and achieve natural-looking, permanent results.",
        downtime: "3–7 days",
    },
    {
        title: "Scar & Mole Removal Surgery",
        description:
            "Laser-assisted cosmetic procedure to safely remove scars, moles, and skin lesions with minimal marks.",
        downtime: "3–5 days",
    },
    {
        title: "Laser Circumcision Surgery",
        description:
            "Minimally invasive laser procedure offering faster healing, reduced pain, and improved cosmetic outcomes.",
        downtime: "3–5 days",
    },
];

const testimonials = [
    {
        quote:
            "My nose job (Rhinoplasty) result is perfect. I feel so much more confident now.",
        name: "Sanya Roy",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I had liposuction for my abdomen. The recovery was quick and I am back to my routine with a better shape.",
        name: "Vikram Das",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Got hair transplant done 6 months ago. The results are amazing and look completely natural.",
        name: "Rahul Verma",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Very happy with the scar removal treatment. The skin looks smooth and clear now.",
        name: "Pooja Malhotra",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Professional doctors and good hospital facility. The cost was also reasonable.",
        name: "Amit Kumar",
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

const CosmeticSurgeryInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `Why choose PureCheckup for cosmetic surgery in ${formattedCity}?`,
            answer: `PureCheckup connects you with certified cosmetic surgeons, NABH-approved hospitals, transparent pricing, and free consultation. We ensure safe procedures, advanced technology, and complete patient support from booking to recovery in ${formattedCity}.`,
        },
        {
            id: "two",
            question: `How do I book a free consultation for cosmetic surgery in ${formattedCity}?`,
            answer: `You can book a free cosmetic surgery consultation in ${formattedCity} by visiting PureCheckup.com, selecting your treatment, choosing your city, and submitting your details. Our medical team will contact you to schedule the consultation.`,
        },
        {
            id: "three",
            question: `What is the best online platform to book cosmetic surgery in ${formattedCity}?`,
            answer: `PureCheckup is one of the most trusted online platforms to book cosmetic surgery in ${formattedCity}. It allows patients to compare doctors, hospitals, treatment costs, and book consultations digitally with verified specialists.`,
        },
        {
            id: "four",
            question: `Is cosmetic surgery safe in ${formattedCity}?`,
            answer: `Yes, cosmetic surgery in ${formattedCity} is safe when performed by certified surgeons in accredited hospitals. PureCheckup ensures all procedures follow medical safety standards and use modern surgical techniques.`,
        },
        {
            id: "five",
            question: `What is the cost of cosmetic surgery in ${formattedCity}?`,
            answer: `The cost of cosmetic surgery in ${formattedCity} depends on the procedure, doctor expertise, hospital facilities, and technology used. PureCheckup provides transparent pricing and cost comparison before booking.`,
        },
        {
            id: "six",
            question: `Which cosmetic surgery doctor is best in ${formattedCity}?`,
            answer: `The best cosmetic surgery doctors in ${formattedCity} are board-certified, experienced, and work with accredited hospitals. PureCheckup helps you choose top-rated surgeons based on experience and patient reviews.`,
        },
        {
            id: "seven",
            question: `How long is the recovery after cosmetic surgery?`,
            answer: `Recovery time after cosmetic surgery varies by procedure. Minor surgeries may take a few days, while advanced procedures may require 1–3 weeks. Doctors at PureCheckup guide patients through safe recovery plans.`,
        },
        {
            id: "eight",
            question: `Is cosmetic surgery painful?`,
            answer: `Most cosmetic surgeries are minimally invasive and performed under anesthesia, making them painless. Mild discomfort during recovery is manageable with medication and proper post-surgery care.`,
        },
        {
            id: "nine",
            question: `Can I consult a cosmetic surgeon online in ${formattedCity}?`,
            answer: `Yes, PureCheckup offers online consultations with cosmetic surgeons in ${formattedCity}. Patients can discuss treatment options, costs, and recovery before visiting the hospital.`,
        },
        {
            id: "ten",
            question: `How soon can cosmetic surgery be scheduled in ${formattedCity}?`,
            answer: `Cosmetic surgery in ${formattedCity} can often be scheduled within a few days after consultation, depending on medical evaluation and hospital availability through PureCheckup.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title={`Cosmetic Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}
                description={`Book cosmetic surgery in ${formattedCity} with expert doctors. Safe procedures, modern hospitals & free consultation with and no-cost EMI | PureCheckup.`}
                keywords={`cosmetic surgery in ${formattedCity}, best cosmetic surgery in ${formattedCity}, cosmetic surgery doctors in ${formattedCity}, cosmetic surgery hospital in ${formattedCity}, affordable cosmetic surgery in ${formattedCity}, cosmetic surgery near me, laser cosmetic surgery in ${formattedCity}, book cosmetic surgery online, cosmetic surgery consultation in ${formattedCity}, cosmetic surgery cost in ${formattedCity}, best cosmetic surgeon near me, cosmetic surgery platform India, safe cosmetic surgery in ${formattedCity}, PureCheckup cosmetic surgery, cosmetic surgery treatment in ${formattedCity}`}
                canonical={`https://purecheckup.com/aesthetics/cosmetic-surgery/city`}
            />

            <ConditionHeroSection
                title={`Best Cosmetic Surgery in ${formattedCity} | Safe, Certified & Affordable Treatments by Expert Surgeons`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across the City.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Top Cosmetic Surgeons", "Latest Aesthetic Techniques", "Affordable Packages", "Confidential Consultations", "EMI & Insurance Support"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]}
            />
            <StatsBar />

            <section className="py-20 mx-auto max-w-7xl px-4">
                <Heading text1="Meet Our" text2="Cosmetic Surgeons" className="mb-10" />
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
                <Heading text1="Frequently Asked Questions – Cosmetic Surgery in" text2={formattedCity} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Rediscover You" subtitle="Book your cosmetic surgery consultation today" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Cosmetic Surgery"
                    costSubtitle="Competitive pricing with no hidden charges."
                    paymentOptions="0% EMI | Cashless Insurance"
                    costFactors={[
                        "Type of Cosmetic Procedure",
                        "Technology used (Laser/Surgical)",
                        "Hospital category",
                        "Medication and Consumables",
                    ]}
                    cities={constantData.cities}
                    mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                    primaryButtonText="Check Package Cost"
                    secondaryButtonText="Locate Clinics"
                />
            </section>

        </div>
    )
}

export default CosmeticSurgeryInSpecialCity;
