import { AnimatedTestimonial, BenefitCard, ConditionCityWiseTreatment, ConditionHeroSection, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar, TreatmentCard, TreatmentProcess } from "@/components"
import { constantData } from "@/constants";
import FAQ from "@/components/faq/FAQ";
import { useParams } from "react-router-dom";
import { bg1, bg2, bg3, bg4, hsptl, insurance, ncemi, usfda } from "@/assets";
import { testimonials } from "@/constants/data";


const benefits = [
    { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
    { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
    { title: "No-Cost EMI", img: ncemi, bg: bg3 },
    { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
];
const UmbilicalHerniaInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!city) {
        return <div>Loading...</div>;
    }


    const faqs = [
        {
            id: "one",
            question: `Which is the best hospital for umbilical hernia surgery in ${city}?`,
            answer: `PureCheckup connects you with top NABH-accredited hospitals in ${city} offering advanced laparoscopic and open hernia repair treatments.`,
        },
        {
            id: "two",
            question: `How much does umbilical hernia surgery cost in ${city}?`,
            answer:
                `The cost of umbilical hernia surgery in ${city} varies based on the hospital, doctor’s experience, and type of treatment. PureCheckup also provides No-Cost EMI and insurance assistance for easy payment.`,
        },
        {
            id: "three",
            question: `Who is the best doctor for umbilical hernia treatment in ${city}?`,
            answer:
                `PureCheckup’s partner laparoscopic surgeons in ${city} specialize in minimally invasive hernia repair procedures that ensure faster recovery and minimal discomfort.`,
        },
        {
            id: "four",
            question: `Is umbilical hernia surgery available near me in ${city}?`,
            answer:
                `Yes. PureCheckup provides Umbilical Hernia Treatment near you in ${city}, offering free consultation, expert care, and complete treatment support.`,
        },
        {
            id: "five",
            question: `How long does it take to recover after hernia surgery in ${city}?`,
            answer:
                `Most patients recover within a few days and can return to normal activities soon after undergoing laparoscopic umbilical hernia repair in ${city}.`,
        },
        {
            id: "six",
            question: "Is umbilical hernia surgery painful?",
            answer:
                "No. The surgery is performed under anesthesia. With laparoscopic techniques, pain is minimal and healing is much faster compared to open surgery.",
        },
        {
            id: "seven",
            question: `Can an umbilical hernia be treated without surgery in ${city}?`,
            answer:
                "In adults, umbilical hernias typically require surgical repair for complete recovery. Non-surgical approaches offer only temporary relief.",
        },
        {
            id: "eight",
            question: `Does PureCheckup offer insurance and EMI for hernia surgery in ${city}?`,
            answer:
                `Yes. PureCheckup provides insurance support and 0% EMI options to make umbilical hernia treatment in ${city} affordable and hassle-free.`,
        },
        {
            id: "nine",
            question: `How do I book a free consultation for umbilical hernia in ${city}?`,
            answer:
                `You can call 9211930749 or visit PureCheckup.com to schedule a free doctor consultation in ${city}.`,
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for Umbilical Hernia Treatment in ${city}?`,
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Free Doctor Consultation</li>
                        <li>0% EMI & Insurance Assistance</li>
                        <li>Top Laparoscopic Surgeons</li>
                        <li>Day-Care Surgery Options</li>
                        <li>24×7 Medical Coordination</li>
                    </ul>
                </div>
            ),
        },
    ];

    const treatments = [
        {
            title: "Laparoscopic Umbilical Hernia Repair",
            description:
                "Minimally invasive procedure using small incisions and a laparoscope. Offers faster recovery, minimal pain, and no large scars.",
            downtime: "2–4 days",
        },
        {
            title: "Open Umbilical Hernia Repair",
            description:
                "Traditional surgical method used for larger hernias or cases with complications. Involves a small incision at the navel with mesh reinforcement.",
            downtime: "1–2 weeks",
        },
        {
            title: "Mesh Hernioplasty",
            description:
                "An advanced technique where a synthetic mesh is placed to strengthen the abdominal wall and prevent recurrence. Ideal for adult hernia repair.",
            downtime: "2–5 days",
        },
        {
            title: "Tension-Free Hernia Repair",
            description:
                "A modern technique that avoids muscle tension, reducing post-surgery discomfort and speeding up overall healing.",
            downtime: "3–5 days",
        },
        {
            title: "Day-Care Umbilical Hernia Surgery",
            description:
                "Ideal for small hernias. Patients can go home the same day after surgery with minimal pain and very quick recovery.",
            downtime: "24–48 hours",
        },
    ];



    const seoData = {
        title: `Umbilical Hernia Surgery in ${city} | Call 9211930749 | PureCheckup`,
        description: `Get expert Umbilical Hernia treatment in ${city} with experienced surgeons, insurance support, and No-Cost EMI. Book your free consultation today at PureCheckup.`,
        keywords: `
            Umbilical Hernia Treatment in ${city},
            Umbilical Hernia Surgery in ${city},
            Best Umbilical Hernia Doctor in ${city},
            Umbilical Hernia Hospital near me,
            Laparoscopic Hernia Surgery ${city},
            Affordable Hernia Treatment ${city},
            Umbilical Hernia Surgeon ${city},
            Hernia Repair Surgery in ${city},
            PureCheckup ${city}
        `,
        canonical: `https://purecheckup.com/treatment/umbilical-hernia/${city}`,
    }

    return (
        <>
            <SEO {...seoData} />
            <ConditionHeroSection
                title={`Umbilical Hernia Surgery in ${city} – Cost, Procedure, Recovery & Expert Care`}
                description={`Pain-free, advanced laser treatment in ${city} with same-day discharge and full insurance support.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["✅ NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
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
                <Heading text1="Frequently Asked Questions in " text2={`${city}`} className="mb-10" />
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
                    treatmentName="Umbilical Hernia"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Umbilical Hernia",
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

export default UmbilicalHerniaInSpecialCity;
