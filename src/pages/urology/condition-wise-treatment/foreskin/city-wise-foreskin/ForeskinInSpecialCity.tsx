
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
        title: "Foreskin Infection Surgery",
        description:
            "Minimally invasive procedure to remove infected tissue, reduce swelling, and prevent recurrence.",
        downtime: "3–5 days",
    },
    {
        title: "Circumcision Surgery",
        description:
            "Effective treatment for chronic or recurrent foreskin infections. Improves hygiene and prevents future complications.",
        downtime: "5–7 days",
    },
    {
        title: "Medication & Topical Treatment",
        description:
            "Antibiotic creams, antifungal medicine, and anti-inflammatory treatment for mild to moderate infections.",
        downtime: "None",
    },
    {
        title: "Laser Treatment for Foreskin Infection",
        description:
            "Laser-assisted cleaning and infection removal, ensuring faster healing and reduced pain.",
        downtime: "2–4 days",
    },
    {
        title: "Post-Treatment Care & Infection Prevention",
        description:
            "Guidance on hygiene, recovery, and follow-up to prevent recurrence of foreskin infection.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "I had recurring infections and was very uncomfortable. The doctor suggested circumcision and it solved the problem permanently.",
        name: "Vikram Rathore",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Quick and effective treatment. The medicines worked for me initially, but I opted for surgery later for a permanent fix.",
        name: "Sameer Khan",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Very hygienic clinic and professional staff. I felt safe throughout the process.",
        name: "Ravi Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Affordable packages and good consultation. The doctor explained everything clearly.",
        name: "Ankit Jain",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Recovery was faster than I expected. Laser treatment is definitely worth it.",
        name: "Suresh Reddy",
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

const ForeskinInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What causes foreskin infection in ${formattedCity}?`,
            answer: `Foreskin infection in ${formattedCity} is commonly caused by poor hygiene, fungal or bacterial infections, tight foreskin, or untreated balanitis. Early treatment prevents complications.`,
        },
        {
            id: "two",
            question: `What are the symptoms of foreskin infection in ${formattedCity}?`,
            answer: `Symptoms include redness, swelling, discharge, foul smell, pain while urinating, and itching. If symptoms persist, consult a PureCheckup specialist immediately.`,
        },
        {
            id: "three",
            question: `How is foreskin infection treated in ${formattedCity}?`,
            answer: `Treatment in ${formattedCity} includes antibiotics, antifungal creams, laser cleaning, or minor surgery, depending on severity. PureCheckup experts recommend the best option after diagnosis.`,
        },
        {
            id: "four",
            question: `Is foreskin infection surgery painful?`,
            answer: `Most patients experience mild discomfort only. Modern minimally invasive techniques used by PureCheckup reduce pain and recovery time significantly.`,
        },
        {
            id: "five",
            question: `How long does it take to recover from foreskin infection surgery?`,
            answer: `Recovery typically takes 3–7 days, depending on the procedure. Patients can resume normal activities after medical approval.`,
        },
        {
            id: "six",
            question: `When should I see a doctor for a foreskin infection in ${formattedCity}?`,
            answer: `Visit a doctor if you notice swelling, redness, foul smell, or persistent pain. Delaying treatment can worsen the infection.`,
        },
        {
            id: "seven",
            question: `Is circumcision necessary for foreskin infection?`,
            answer: `Circumcision is recommended only for severe or recurring infections. PureCheckup doctors will advise based on your condition.`,
        },
        {
            id: "eight",
            question: `What is the cost of foreskin infection treatment in ${formattedCity}?`,
            answer: `The cost varies depending on the treatment type. PureCheckup offers affordable plans and free consultations to help you choose the best option.`,
        },
        {
            id: "nine",
            question: `Can foreskin infection be treated without surgery?`,
            answer: `Yes, mild cases can be treated with medication and hygiene care. Surgery is required only for chronic or recurring infections.`,
        },
        {
            id: "ten",
            question: `How do I book a free consultation for foreskin infection treatment in ${formattedCity}?`,
            answer: `You can book a free consultation via PureCheckup’s website or call 9211930749 for instant appointment scheduling.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Foreskin Infection Surgery ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Expert foreskin infection treatment in ${formattedCity}. We offer free consultation, safe care, and no-cost EMI. Call 9211930749 to book now | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`foreskin infection treatment in ${formattedCity}, foreskin infection surgery in ${formattedCity}, foreskin infection doctor in ${formattedCity}, foreskin infection specialist in ${formattedCity}, foreskin infection symptoms in ${formattedCity}, Causes of foreskin infection in ${formattedCity},foreskin infection treatment cost in ${formattedCity}, recovery after foreskin infection surgery in ${formattedCity}, online consultation for foreskin infection in ${formattedCity}foreskin infection clinic in ${formattedCity}, best foreskin infection doctor in ${formattedCity}, affordable foreskin infection surgery in ${formattedCity}, foreskin swelling treatment in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/foreskin-infection/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Foreskin Infection Surgery in ${formattedCity} - Expert Doctors, Safe, Advanced & Affordable`}
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
                <Heading text1="FAQs on Foreskin Infection Surgery in" text2={formattedCity} />
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
                    treatmentName="Foreskin Infection"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Infection severity",
                        "Treatment type (Medical/Surgical)",
                        "Hospital charges",
                        "Follow-up care",
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

export default ForeskinInSpecialCity;
