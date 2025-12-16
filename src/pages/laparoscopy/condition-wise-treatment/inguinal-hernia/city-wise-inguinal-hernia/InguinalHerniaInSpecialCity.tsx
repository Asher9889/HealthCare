import { AnimatedTestimonial, BenefitCard, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar, TreatmentCard, TreatmentProcess } from "@/components"
import { constantData } from "@/constants";
import FAQ from "@/components/faq/FAQ";
import { useParams } from "react-router-dom";
import { bg1, bg2, bg3, bg4, hsptl, insurance, ncemi, usfda } from "@/assets";


const testimonials = [
    {
        quote:
            "I was suffering from piles for years. After the treatment, my pain and bleeding stopped completely. I feel like I got my life back.",
        name: "Preeti Sharma",
        designation: "Patient from Jaipur",
        // src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3540&auto=format&fit=crop",
        stars: 5,
    },
    {
        quote:
            "The doctors were very patient and explained everything in detail. The laser treatment was painless and I was able to return to work within two days.",
        name: "Priya Verma",
        designation: "Patient from Delhi",
        // src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3540&auto=format&fit=crop",
        stars: 4.5,
    },
    {
        quote:
            "I was really scared before the procedure, but the staff made me comfortable. The recovery was quick and much easier than I expected.",
        name: "Amit Patel",
        designation: "Patient from Ahmedabad",
        // src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=3540&auto=format&fit=crop",
        stars: 4,
    },
    {
        quote:
            "I had tried many home remedies but nothing worked. After consulting here, my piles problem was solved without any complications.",
        name: "Sanjeev Gupta",
        designation: "Patient from Lucknow",
        // src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=3540&auto=format&fit=crop",
        stars: 5,
    },
    {
        quote:
            "Excellent treatment and modern facilities. The doctor’s approach was very reassuring and I am completely cured now.",
        name: "Vikram Singh",
        designation: "Patient from Mumbai",
        // src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2592&auto=format&fit=crop",
        stars: 5,
    },
];
const InguinalHerniaInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const benefits = [
        { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
        { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
        { title: "No-Cost EMI", img: ncemi, bg: bg3 },
        { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
    ];

    const treatments = [
        {
            title: "Laparoscopic Inguinal Hernia Repair",
            description:
                "Minimally invasive surgery using small incisions and a camera for faster recovery and reduced pain. Ideal for patients seeking quick recovery and minimal scarring.",
            downtime: "2–5 days",
        },
        {
            title: "Open Hernia Repair (Herniorrhaphy)",
            description:
                "Traditional surgery recommended for large or complicated hernias, offering highly effective and long-lasting results. Ideal for recurrent or complex hernias.",
            downtime: "2–3 weeks",
        },
        {
            title: "Mesh Hernioplasty (Tension-Free Repair)",
            description:
                "A surgical mesh is placed to strengthen the abdominal wall and significantly reduce recurrence. Ideal for weak abdominal walls or frequent hernia recurrence.",
            downtime: "4–7 days",
        },
        {
            title: "Laparoscopic Bilateral Hernia Repair",
            description:
                "Minimally invasive laparoscopic procedure designed to treat hernias on both sides of the groin simultaneously. Ideal for bilateral inguinal hernia patients.",
            downtime: "5–7 days",
        },
        {
            title: "Recurrent Hernia Surgery",
            description:
                "A specialized corrective procedure for patients who have had previous hernia repairs that failed or recurred. Ideal for recurrent or post-surgical hernias.",
            downtime: "7–10 days",
        },
        {
            title: "3D Mesh Laparoscopic Repair (Latest Technique)",
            description:
                "Advanced procedure using 3D mesh technology for superior abdominal wall reinforcement and long-term durability. Ideal for patients seeking modern, safe, and durable hernia treatment.",
            downtime: "3–5 days",
        },
    ];


    if (!city) {
        return <div>Loading...</div>;
    }

    const seoData = {
        title: `Inguinal Hernia Surgery in ${city} | Call 9211930749 | PureCheckup`,
        description: `Get advanced Inguinal Hernia treatment in ${city} with expert laparoscopic surgeons, affordable cost, and 0% EMI support. Book your free consultation at PureCheckup today.`,
        keywords: `
                Inguinal Hernia treatment in ${city},
                Best hernia doctor in ${city},
                Laparoscopic hernia surgery in ${city},
                Hernia specialist near me,
                Inguinal hernia hospital ${city},
                Hernia surgery cost in ${city},
                Hernia repair doctor ${city},
                PureCheckup ${city}
            `,
        canonical: `https://purecheckup.com/treatment/inguinal-hernia/${city}`,
    }

    const faqs = [
        {
            id: "one",
            question: `What is the best treatment for an inguinal hernia in ${city}?`,
            answer:
                `The best option depends on the case, but laparoscopic hernia repair is often preferred for faster recovery and less pain. PureCheckup connects you with top hernia specialists in ${city} who’ll recommend the ideal approach.`,
        },
        {
            id: "two",
            question: `How is the cost of Inguinal Hernia surgery determined in ${city}?`,
            answer:
                "Costs vary based on the type of procedure, hospital choice, and patient condition. For an exact estimate, you can request a free consultation through PureCheckup.",
        },
        {
            id: "three",
            question: "Is Inguinal Hernia surgery painful?",
            answer:
                "Surgery is performed under anesthesia. With laparoscopic techniques, most patients experience minimal post-operative pain and faster recovery compared to open surgery.",
        },
        {
            id: "four",
            question: `Who are the best hernia surgeons in ${city}?`,
            answer:
                `PureCheckup partners with experienced hernia surgeons in ${city} and accredited hospitals. We match you with specialists based on your medical needs and location.`,
        },
        {
            id: "five",
            question: `Does insurance cover Inguinal Hernia surgery in ${city}?`,
            answer:
                "Many health insurance plans cover hernia surgery. PureCheckup assists with cashless claims and helps verify your specific policy coverage.",
        },
        {
            id: "six",
            question: "What is the typical recovery time after Inguinal Hernia surgery?",
            answer:
                "Recovery depends on the procedure. With laparoscopic repair, patients usually resume light activities within a few days and full activity within a few weeks, as advised by their surgeon.",
        },
        {
            id: "seven",
            question: "Can a hernia heal without surgery?",
            answer:
                "No, an inguinal hernia does not heal on its own. Surgical repair is the only reliable treatment to prevent complications and recurrence.",
        },
        {
            id: "eight",
            question: `Which hospitals offer the best hernia treatment in ${city}?`,
            answer:
                `PureCheckup works with leading hospitals across ${city} that specialize in hernia repair and minimally invasive surgery. We recommend the best hospital options based on your condition and preferences.`,
        },
        {
            id: "nine",
            question: `What is the success rate of hernia surgery in ${city}?`,
            answer:
                "When performed by experienced surgeons using modern laparoscopic techniques, success rates are very high with excellent patient outcomes.",
        },
        {
            id: "ten",
            question: `How can I book an appointment for hernia surgery in ${city}?`,
            answer:
                `Call 9211930749 or visit PureCheckup.com to book a free consultation. Our care coordinators will connect you with an expert hernia specialist in ${city} and guide you through the next steps.`,
        },
    ];


    return (
        <>
            <SEO {...seoData} />
            <ConditionHeroSection
                title={`Best Inguinal Hernia Surgery in ${city} – 100% Safe & Painless Treatment`}
                description={`Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across City`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
                cities={constantData.cities}
                selectedCity={city}
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
                <Heading text1="Treatment Options Available in" text2={city || ""} className="mb-6 text-center" />
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
                <Heading text1="Patient Stories" text2={city} />
                <AnimatedTestimonial testimonials={testimonials} />
            </section>

            <TreatmentProcess />


            <section className="py-20 px-4">
                <Heading text1="FAQs on Inguinal Hernia Treatment in" text2={`${city}`} className="mb-10" />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />

                    <ConditionTreatmentForm selectedCity={city} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Inguinal Hernia"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Inguinal Hernia",
                        "Hospital category and room",
                        "Insurance coverage and approvals",
                        "Additional diagnostics if needed",
                    ]}
                    cities={constantData.cities}
                    mapImage="https://cdn.pixabay.com/photo/2024/02/03/02/16/earth-8549451_1280.png"
                    primaryButtonText="Get Free Cost Estimate Now"
                    secondaryButtonText="View Nearby Clinics"
                />
            </section>
        </>
    )
}

export default InguinalHerniaInSpecialCity;
