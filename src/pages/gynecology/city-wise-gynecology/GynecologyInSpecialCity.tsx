import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SpecialistCard, StatsBar, BenefitCard, TreatmentCard, FAQ, TreatmentProcess, SEO } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda, gynoImg } from "@/assets";

const treatments = [
    {
        title: "Hysterectomy",
        description:
            "Surgical removal of the uterus. Performed via laparoscopic (minimally invasive) or open surgery for fibroids, cancer, or prolapse.",
        downtime: "2–6 weeks",
    },
    {
        title: "Ovarian Cyst Removal",
        description:
            "Laparoscopic cystectomy to remove fluid-filled sacs from ovaries while preserving fertility.",
        downtime: "1–2 weeks",
    },
    {
        title: "Fibroid Removal (Myomectomy)",
        description:
            "Surgical removal of uterine fibroids. Can be done laparoscopically or hysteroscopically.",
        downtime: "2–4 weeks",
    },
    {
        title: "PCOS Treatment",
        description:
            "Comprehensive management of Polycystic Ovary Syndrome through medication, lifestyle changes, and surgery if needed.",
        downtime: "None",
    },
    {
        title: "Infertility Treatment",
        description:
            "Advanced fertility evaluation and treatments including IUI and IVF support.",
        downtime: "Varies",
    },
    {
        title: "Pregnancy Care",
        description:
            "Complete antenatal and postnatal care for a healthy pregnancy journey.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "I was suffering from severe fibroid pain. The laparoscopic surgery at PureCheckup was a lifesaver. Recovery was so fast.",
        name: "Priya Sharma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Best gynecologist in the city. Very supportive during my pregnancy. Highly recommended.",
        name: "Neha Gupta",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I consulted for PCOD issues. The doctor explained everything clearly and the treatment is working wonders.",
        name: "Suman Verma",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Professional and caring staff. The hospital facilities were excellent for my delivery.",
        name: "Kavita Singh",
        designation: "New Mom",
        stars: 5,
    },
    {
        quote:
            "Thank you PureCheckup for the smooth insurance process for my surgery.",
        name: "Anjali Mehta",
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

const GynecologyInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What gynecology services are available in ${formattedCity}?`,
            answer: `PureCheckup offers complete gynecology services in ${formattedCity}, including PCOS treatment, pregnancy care, infertility evaluation, menstrual disorder treatment, fibroid care, and women’s health checkups.`,
        },
        {
            id: "two",
            question: `How can I book a gynecologist appointment in ${formattedCity}?`,
            answer: `You can book a gynecologist appointment in ${formattedCity} through the PureCheckup website by selecting your city and preferred consultation slot. Free consultation options are available.`,
        },
        {
            id: "three",
            question: `Are female gynecologists available in ${formattedCity}?`,
            answer: `Yes, PureCheckup connects patients in ${formattedCity} with experienced female gynecologists for consultations, diagnostics, and treatment, ensuring comfort and privacy.`,
        },
        {
            id: "four",
            question: `What are common gynecology problems treated in ${formattedCity}?`,
            answer: `Common gynecology issues treated in ${formattedCity} include irregular periods, PCOS, vaginal infections, pelvic pain, infertility, fibroids, ovarian cysts, and menopause-related concerns.`,
        },
        {
            id: "five",
            question: `Is online gynecology consultation available in ${formattedCity}?`,
            answer: `Yes, PureCheckup offers online gynecology consultations in ${formattedCity} for initial diagnosis, second opinions, follow-ups, and treatment guidance from qualified specialists.`,
        },
        {
            id: "six",
            question: `When should I consult a gynecologist in ${formattedCity}?`,
            answer: `You should consult a gynecologist in ${formattedCity} if you experience irregular periods, pelvic pain, abnormal discharge, fertility concerns, pregnancy-related issues, or hormonal imbalance symptoms.`,
        },
        {
            id: "seven",
            question: `Are gynecology treatments safe at PureCheckup in ${formattedCity}?`,
            answer: `All gynecology treatments at PureCheckup in ${formattedCity} are provided by qualified doctors following standard medical protocols, ensuring safety, confidentiality, and patient-centric care.`,
        },
        {
            id: "eight",
            question: `What tests are recommended by gynecologists in ${formattedCity}?`,
            answer: `Depending on symptoms, gynecologists in ${formattedCity} may recommend an ultrasound, blood tests, hormone panels, pap smear, pregnancy tests, or fertility-related investigations.`,
        },
        {
            id: "nine",
            question: `How much does a gynecology consultation cost in ${formattedCity}?`,
            answer: `Gynecology consultation cost in ${formattedCity} depends on the doctor and treatment type. PureCheckup provides free consultation options and transparent pricing with no-cost EMI on procedures.`,
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for gynecology care in ${formattedCity}?`,
            answer: `PureCheckup offers trusted gynecology care in ${formattedCity} with experienced doctors, easy online booking, free consultation, advanced diagnostics, and complete women’s health support.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title={`Genecology Surgery in ${formattedCity} | PureCheckup`}
                description={`Get Genecology Surgery in ${formattedCity} for expert women’s health care, pregnancy support, infertility evaluation & treatment. Book Free appointments | PureCheckup`}
                keywords={`gynaecologist in ${formattedCity}, ladies doctor ${formattedCity}, women’s health specialist ${formattedCity}, pregnancy doctor ${formattedCity}, infertility specialist ${formattedCity}, gynaecologist in ${formattedCity}, ladies doctor ${formattedCity}, women’s health specialist ${formattedCity}`}
                canonical={`https://purecheckup.com/c/gynaecology/city`}
            />

            <ConditionHeroSection
                title={`Expert Gynecology Care & Surgery in ${formattedCity}`}
                description={`Comprehensive women's health solutions from trusted specialists. Pregnancy care, infertility treatment, and advanced surgeries in ${formattedCity}.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Expert Female Gynecologists", "Advanced Fertility Treatments", "Painless Laparoscopic Surgery", "Complete Pregnancy Care", "Privacy & Confidentiality Assured"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]}
            />
            <StatsBar />

            <section className="py-20 mx-auto max-w-7xl px-4">
                <Heading text1="Meet Our" text2="Gynecology Specialists" className="mb-10" />
                {constantData.specialists.map((doc) => (
                    <SpecialistCard key={doc.id} specialist={doc} />
                ))}
            </section>

            <section className="px-4 py-8 max-w-7xl mx-auto">
                <Heading text1="Treatments Available in" text2={formattedCity || ""} className="mb-6 text-center" />
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
                <Heading text1="FAQs for Gynaecology" text2={`(${formattedCity})`} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Prioritize Your Health" subtitle="Book your gynecology consultation today" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(${gynoImg})` }}
                    />

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Gynecology"
                    costSubtitle="Transparent pricing for all treatments and surgeries."
                    paymentOptions="EMI Available | Cashless Insurance Accepted"
                    costFactors={[
                        "Type of Procedure (Hysterectomy/Laparoscopy/Delivery)",
                        "Hospital Class and Room Choice",
                        "Insurance Coverage",
                        "Diagnostic Tests Required",
                    ]}
                    cities={constantData.cities}
                    mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                    primaryButtonText="Get Cost Estimate"
                    secondaryButtonText="Find Clinics Near Me"
                />
            </section>

        </div>
    )
}

export default GynecologyInSpecialCity;
