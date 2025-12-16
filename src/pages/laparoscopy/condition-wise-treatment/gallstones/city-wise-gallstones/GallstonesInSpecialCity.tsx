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

const GallstonesInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of gallstone surgery in ${city}?`,
            answer: `The cost of gallstone surgery in ${city} varies depending on the hospital, surgical method, surgeon’s experience, and insurance coverage. PureCheckup helps you find the most affordable and transparent treatment options.`,
        },
        {
            id: "two",
            question: `Is laparoscopic gallstone surgery painful?`,
            answer:
                "No. Laparoscopic gallstone surgery is a minimally invasive procedure performed under anesthesia, ensuring minimal pain and faster recovery compared to traditional open surgery.",
        },
        {
            id: "three",
            question: "How long does it take to recover after gallstone surgery?",
            answer:
                "Most patients can resume light activities within a few days and fully recover within a week, based on their doctor’s guidance.",
        },
        {
            id: "four",
            question: "Can gallstones be treated without surgery?",
            answer:
                "In mild cases, medications or lifestyle changes may help, but surgery remains the most effective and permanent solution to prevent repeated gallstone attacks.",
        },
        {
            id: "five",
            question: `Does PureCheckup provide insurance support in ${city}?`,
            answer: `Yes, PureCheckup offers cashless insurance assistance and No-Cost EMI options at trusted hospitals across ${city}.`,
        },
        {
            id: "six",
            question: "How do I know if I need gallstone surgery?",
            answer:
                "You may need surgery if you experience intense abdominal pain, nausea, or vomiting. An ultrasound scan or medical evaluation will confirm whether surgery is required.",
        },
        {
            id: "seven",
            question: "Is gallbladder removal safe for long-term health?",
            answer:
                "Yes. Gallbladder removal (cholecystectomy) is a very safe and common procedure. After recovery, your body digests food normally without long-term issues.",
        },
        {
            id: "eight",
            question: "How long does gallstone surgery take?",
            answer:
                "Laparoscopic gallstone surgery usually takes less than an hour. Most patients return home the same day or the following day.",
        },
        {
            id: "nine",
            question: "What are the benefits of laparoscopic gallstone surgery?",
            answer:
                "It offers smaller incisions, less pain, faster healing, minimal scarring, and shorter hospital stays compared to open surgery.",
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for gallstone treatment in ${city}?`,
            answer: `PureCheckup provides expert surgeons, modern hospitals, transparent processes, insurance assistance, and personalized support — ensuring a smooth and stress-free treatment journey in ${city}.`,
        },
    ];

    const benefits = [
        { title: "USFDA-Approved Procedure", img: usfda, bg: bg1 },
        { title: "Support in Insurance Claim", img: insurance, bg: bg2 },
        { title: "No-Cost EMI", img: ncemi, bg: bg3 },
        { title: "1-day Hospitalization", img: hsptl, bg: bg4 },
    ];

    const treatments = [
        {
            title: "Laparoscopic Cholecystectomy (Keyhole Surgery)",
            description:
                "Minimally invasive procedure to remove the gallbladder through small incisions. Quick recovery, minimal pain, and no major scarring.",
            downtime: "2–5 days",
        },
        {
            title: "Open Gallbladder Surgery",
            description:
                "Recommended for patients with large stones or complications. Involves a single larger incision for complete gallbladder removal.",
            downtime: "2–3 weeks",
        },
        {
            title: "Non-Surgical Gallstone Management",
            description:
                "Used for patients unfit for surgery. Involves medications, dietary control, and ultrasound monitoring to manage symptoms.",
            downtime: "Not applicable",
        },
        {
            title: "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
            description:
                "A specialized endoscopic technique used to remove stones from the bile duct or relieve blockage before surgery.",
            downtime: "1–3 days",
        },
        {
            title: "Post-Surgery Recovery & Diet Consultation",
            description:
                "Customized diet and lifestyle plans by experts to ensure faster healing, prevent recurrence, and improve digestive health.",
            downtime: "1–2 days",
        },
    ];



    if (!city) {
        return <div>Loading...</div>;
    }
    const seoData = {
        title: `Gallstone Surgery in ${city} | Call 9211930749 | PureCheckup`,
        description: `Get affordable gallstone surgery in ${city} with expert laparoscopic surgeons. Book your free consultation and No-Cost EMI option today at PureCheckup.`,
        keywords: [
            `Free doctor consultation ${city}`,
            `gallstone treatment ${city}`,
            `gallbladder surgery ${city}`,
            `laparoscopic gallstone removal ${city}`,
            `PureCheckup ${city}`,
        ].join(", "),
        canonical: `https://purecheckup.com/treatment/gallstone/${city.toLowerCase()}`,
    }

    return (
        <>
            <SEO {...seoData} />
            <ConditionHeroSection
                title={`Gallbladder Stone Treatment in ${city} – Advanced Laparoscopic Surgery at PureCheckup`}
                description={`Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across City .`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["✅ NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
                cities={constantData.cities}
                selectedCity={city}
                consultations={["Clinic", "Online"]}
            />

            <StatsBar />

            <section className="py-20 mx-auto px-4 max-w-7xl">
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
                    treatmentName="Gallstone"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Gallstone",
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

export default GallstonesInSpecialCity;
