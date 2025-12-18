import { AnimatedTestimonial, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SpecialistCard, StatsBar, BenefitCard, TreatmentCard, FAQ, TreatmentProcess, SEO } from "@/components";
import { constantData } from "@/constants";
import { useParams } from "react-router-dom";
import { bg1, bg2, bg3, bg4, ncemi, hsptl, insurance, usfda } from "@/assets";

const treatments = [
    {
        title: "Laparoscopic Gallbladder Removal (Cholecystectomy)",
        description:
            "Minimally invasive surgery to remove the gallbladder, reduce pain from gallstones, and support faster recovery.",
        downtime: "1–3 days",
    },
    {
        title: "Laparoscopic Hernia Repair",
        description:
            "Keyhole surgery to repair a hernia with mesh placement, minimal discomfort, and quick return to daily activities.",
        downtime: "3–5 days",
    },
    {
        title: "Laparoscopic Appendectomy",
        description:
            "Safe keyhole procedure to remove inflamed appendix and prevent complications like peritonitis.",
        downtime: "2–4 days",
    },
    {
        title: "Diagnostic Laparoscopy",
        description:
            "Camera‑assisted procedure to diagnose unexplained abdominal or pelvic pain with minimal incisions.",
        downtime: "1–2 days",
    },
    {
        title: "Laparoscopic Hernia & Abdominal Procedures",
        description:
            "Includes umbilical, incisional and complex hernia repairs with advanced minimal‑access techniques.",
        downtime: "3–6 days",
    },
    {
        title: "Laparoscopic Gynecological Procedures",
        description:
            "Minimally invasive treatments for fibroids, ovarian cysts, endometriosis, and PCOS‑related issues.",
        downtime: "2–5 days",
    },
];

const testimonials = [
    {
        title: "Gallbladder Surgery Success",
        quote:
            "I was worried about surgery, but the laparoscopic gallbladder removal at PureCheckup was smooth. I went home the next day!",
        name: "Anil Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        title: "Hernia Repair",
        quote:
            "Got my hernia repaired laparoscopically. Minimal pain and the scar is tiny. Highly professional team.",
        name: "Rajesh Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        title: "Appendix Removal",
        quote:
            "Emergency appendix surgery was handled perfectly. The staff was very supportive and recovery was quick.",
        name: "Suman Das",
        designation: "Patient",
        stars: 4.5,
    },
    {
        title: "Diagnostic Procedure",
        quote:
            "The doctors explained everything clearly. The diagnostic laparoscopy helped identify my issue correctly.",
        name: "Priya Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        title: "Excellent Service",
        quote:
            "Affordable pricing and insurance was processed without hassle. Thank you PureCheckup.",
        name: "Vikram Malhotra",
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

const LaparoscopicSurgeryInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is laparoscopic surgery in ${formattedCity}?`,
            answer: `Laparoscopic surgery in ${formattedCity} is a minimally invasive procedure using small incisions and a camera to treat various abdominal or pelvic conditions. It reduces pain, shortens hospital stays, and speeds up recovery compared to traditional open surgery.`,
        },
        {
            id: "two",
            question: `How long does recovery take after laparoscopic surgery in ${formattedCity}?`,
            answer: `Most patients recover within 1–5 days, depending on the type of procedure. Minor discomfort may last a few days, but normal activities can often resume quickly with proper post-operative care.`,
        },
        {
            id: "three",
            question: `Which conditions can be treated with laparoscopic surgery?`,
            answer: `Laparoscopic surgery treats gallbladder issues, hernia, appendicitis, ovarian cysts, fibroids, endometriosis, and other abdominal problems. It is ideal for both diagnostic and therapeutic purposes.`,
        },
        {
            id: "four",
            question: `What are the risks of laparoscopic surgery?`,
            answer: `Risks are minimal but may include bleeding, infection, injury to surrounding organs, or reactions to anesthesia. Surgeons in ${formattedCity} follow strict safety protocols to minimize complications.`,
        },
        {
            id: "five",
            question: `Is laparoscopic surgery better than open surgery?`,
            answer: `Yes, laparoscopic surgery offers smaller incisions, a faster recovery, less pain, a lower risk of infection, and shorter hospital stays, making it a preferred choice for most eligible patients.`,
        },
        {
            id: "six",
            question: `How much does laparoscopic surgery cost in ${formattedCity}?`,
            answer: `The cost of laparoscopic surgery in ${formattedCity} depends on the procedure type and hospital. Call PureCheckup today to know your exact price and get a personalized consultation.`,
        },
        {
            id: "seven",
            question: `What should I expect before laparoscopic surgery?`,
            answer: `Before surgery, you will undergo medical evaluation, imaging tests, and fasting instructions. Your surgeon will explain the procedure, recovery, and any preparation required for safe outcomes.`,
        },
        {
            id: "eight",
            question: `Are laparoscopic procedures safe for all ages?`,
            answer: `Yes, laparoscopic surgery is generally safe for adults and older children. However, the suitability depends on the patient’s medical condition and the surgeon’s assessment.`,
        },
        {
            id: "nine",
            question: `How soon can I resume normal activities after laparoscopic surgery?`,
            answer: `Most patients can resume light activities within 1–3 days and normal daily routines within a week. Strenuous activities should be avoided until the surgeon confirms complete recovery.`,
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for laparoscopic surgery in ${formattedCity}?`,
            answer: `PureCheckup offers top surgeons, advanced equipment, transparent pricing, and seamless online consultation. Patients receive personalized care, fast recovery guidance, and trusted medical support.`,
        },
        {
            id: "eleven",
            question: `How do I book a consultation for laparoscopic surgery in ${formattedCity}?`,
            answer: `You can book a consultation by visiting PureCheckup.com, selecting your city, and scheduling an appointment with expert surgeons online or via phone.`,
        },
        {
            id: "twelve",
            question: `How do I book a free consultation for laparoscopic surgery in ${formattedCity}?`,
            answer: `PureCheckup allows free online consultation. Simply visit your city-specific page, select the treatment, fill out the form, and a medical expert will contact you to discuss the next steps.`,
        },
        {
            id: "thirteen",
            question: `What is the online platform to book a laparoscopic surgery?`,
            answer: `The online platform is PureCheckup.com, where you can compare surgeons, schedule appointments, and access treatment details for laparoscopic surgery in any city.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <SEO
                title={`Laparoscopic Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}
                description={`Laparoscopic surgery treatments in ${formattedCity} for hernia, gallbladder, appendix & more . Book your free consultation with and no-cost EMI | PureCheckup.`}
                keywords={`laparoscopic surgery in ${formattedCity}, laparoscopic surgery near me, best laparoscopic surgeon in ${formattedCity}, keyhole surgery ${formattedCity}, laparoscopic hernia repair ${formattedCity}, laparoscopic gallbladder removal ${formattedCity}, laparoscopic appendectomy ${formattedCity}, diagnostic laparoscopy ${formattedCity}, laparoscopic gynecological surgery ${formattedCity}, recovery time laparoscopic surgery, laparoscopic surgery cost ${formattedCity}, advanced laparoscopic procedures, laparoscopic surgery benefits, laparoscopic treatment options ${formattedCity}`}
                canonical={`https://purecheckup.com/surgery/laparoscopic-surgery/city`}
            />

            <ConditionHeroSection
                title={`Affordable Laparoscopic Surgery in ${formattedCity} – Expert Surgeons & Quick Healing`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across the City.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Minimally Invasive", "Faster Recovery", "Less Pain", "Tiny Incisions", "Insurance Supported"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]}
            />
            <StatsBar />

            <section className="py-20 mx-auto max-w-7xl px-4">
                <Heading text1="Meet Our" text2="Laparoscopic Surgeons" className="mb-10" />
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
                <Heading text1="Frequently Asked Questions – Laparoscopic Surgery in" text2={formattedCity} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Minimal Pain, Maximum Care" subtitle="Book your laparoscopic surgery consultation today" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Laparoscopic Surgery"
                    costSubtitle="Transparent estimation for all laparoscopic procedures."
                    paymentOptions="Cashless Insurance | No-Cost EMI"
                    costFactors={[
                        "Type of Surgery (Gallbladder/Hernia/Appendix)",
                        "Hospital Class",
                        "Surgeon's Fees",
                        "Consumables and Mesh (if used)",
                    ]}
                    cities={constantData.cities}
                    mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                    primaryButtonText="Get Surgety Cost"
                    secondaryButtonText="Find Hospitals"
                />
            </section>

        </div>
    )
}

export default LaparoscopicSurgeryInSpecialCity;
