
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
        title: "Corn Removal Surgery",
        description:
            "Surgical removal of corns from the foot or toes to relieve pain and prevent recurrence.",
        downtime: "2–3 days",
    },
    {
        title: "Cryotherapy for Corns",
        description:
            "Freeze treatment to remove corns quickly with minimal pain and fast recovery.",
        downtime: "1–2 days",
    },
    {
        title: "Laser Corn Removal",
        description:
            "Precision laser treatment to remove stubborn corns with minimal discomfort.",
        downtime: "1–2 days",
    },
    {
        title: "Chemical Corn Removal",
        description:
            "Topical chemical treatment to dissolve corns and prevent recurrence.",
        downtime: "0–1 days",
    },
    {
        title: "Home Care & Post-Treatment Support",
        description:
            "Guidance on foot care, padding, and footwear to prevent future corns.",
        downtime: "N/A",
    },
    {
        title: "Online Consultation & Follow-Up",
        description:
            "Expert consultation and remote monitoring for safe corn removal recovery.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "I had painful corns for years. The laser removal was quick and painless. I can walk comfortably now.",
        name: "Meera Patel",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Very professional service. The doctor explained the cause and how to prevent it. Highly recommended.",
        name: "Rajesh Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Affordable and effective. The clinic was clean and the staff was helpful.",
        name: "Suman Gupta",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "I was worried about surgery but it was just a small procedure. Recovery was fast.",
        name: "Anil Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Thank you PureCheckup for helping me get rid of my foot corns. Great experience.",
        name: "Priya Sharma",
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

const CornRemovalInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is the best treatment for corn removal in ${formattedCity}?`,
            answer: `The best treatment for corns in ${formattedCity} depends on their severity. Most patients benefit from professional corn removal, which may include surgical excision, laser treatment, or cryotherapy. PureCheckup specialists assess the root cause of friction, pressure, or footwear—and recommend the safest, most effective option for lasting relief.`,
        },
        {
            id: "two",
            question: `How do I book a corn removal consultation in ${formattedCity}?`,
            answer: `You can easily book a corn removal consultation in ${formattedCity} through PureCheckup’s online appointment form. Choose your city, select “Corn Removal,” and schedule a free consultation. You can also connect with our care team for instant booking support.`,
        },
        {
            id: "three",
            question: `Is corn removal surgery painful in ${formattedCity}?`,
            answer: `Corn removal surgery in ${formattedCity} is typically painless because local anesthesia is used. Patients usually feel only mild pressure during the procedure. Post-treatment discomfort is minimal and subsides within 1–2 days with proper care.`,
        },
        {
            id: "four",
            question: `How long does it take to recover after corn removal in ${formattedCity}?`,
            answer: `Recovery after corn removal in ${formattedCity} usually takes 2–5 days, depending on the method used. Most patients can walk immediately after the procedure and resume normal routine within a few days. Advanced techniques like laser or cryotherapy offer faster healing.`,
        },
        {
            id: "five",
            question: `Are there non-surgical options for corn removal in ${formattedCity}?`,
            answer: `Yes. Non-surgical options in ${formattedCity} include medicated pads, chemical treatments, salicylic acid creams, and footwear modifications. These are ideal for mild corns. However, recurring or deep corns often require professional removal to prevent complications.`,
        },
        {
            id: "six",
            question: `What is the cost of corn removal in ${formattedCity}?`,
            answer: `The cost of corn removal in ${formattedCity} varies based on the treatment method, clinic location, and severity of the corn. PureCheckup offers affordable treatment with transparent pricing and no-cost EMI options to ensure accessible care for all patients.`,
        },
        {
            id: "seven",
            question: `Can I remove corns at home safely in ${formattedCity}?`,
            answer: `Mild corns can be managed at home with warm water soaking, pumice stone use, and proper footwear. However, cutting or shaving corns at home is unsafe and can lead to infection. Professional treatment in ${formattedCity} is recommended for quick and safe removal.`,
        },
        {
            id: "eight",
            question: `How experienced are the corn removal doctors in ${formattedCity}?`,
            answer: `PureCheckup’s doctors in ${formattedCity} are experienced foot specialists who perform advanced corn removal procedures daily. They are trained in minimally invasive techniques, ensuring safe removal, reduced pain, and quick recovery.`,
        },
        {
            id: "nine",
            question: `What causes corns on feet and toes in ${formattedCity}?`,
            answer: `Corns in ${formattedCity} commonly occur due to constant pressure, friction, standing for long periods, tight footwear, high heels, or foot deformities. Identifying and treating the root cause helps prevent recurrence.`,
        },
        {
            id: "ten",
            question: `How soon can I resume normal activities after corn removal in ${formattedCity}?`,
            answer: `Most patients in ${formattedCity} resume normal walking the same day and return to daily activities within 2–3 days. strenuous activities or long walks are usually resumed after a few days, depending on the treatment method and doctor’s advice.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Corn Removal Surgery in ${formattedCity} Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get corn removal Surgery in ${formattedCity} with PureCheckup: expert care, no-cost EMI, and free consultation. Book online or call for safe treatment today.`}
                />
                <meta
                    name="keywords"
                    content={`Corn Removal Treatment, Painless Corn Removal. Corn Treatment Near Me, Best Corn Removal Clinic ${formattedCity}, Non-Surgical Corn Removal, Specialist for Corn Removal ${formattedCity}, PureCheckup Corn Removal, How to Get Rid of Corns Permanently, Corn Removal Clinic in [Area], Laser Corn Removal Cost, Callus and Corn Removal Specialist, Affordable Corn Removal ${formattedCity}, Best Foot Corn Specialist, PureCheckup Corn Treatment, Corn Removal Price ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/corn-removal/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Permanent Corn Removal Surgery in ${formattedCity} : Advanced Laser & Non-Surgical Options`}
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
                <Heading text1="FAQs on Corn Removal Surgery in" text2={formattedCity} />
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
                    treatmentName="Corn Removal"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Procedure type (Laser/Surgical/Cryo)",
                        "Number of corns",
                        "Hospital charges",
                        "Medications",
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

export default CornRemovalInSpecialCity;
