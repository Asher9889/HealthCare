
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
        title: "Phimosis Surgery",
        description:
            "Minimally invasive procedure to correct tight foreskin, restore comfort, and prevent infections.",
        downtime: "3–5 days",
    },
    {
        title: "Circumcision Surgery",
        description:
            "Surgical removal of the foreskin for chronic or severe phimosis, ensuring hygiene and long-term relief.",
        downtime: "5–7 days",
    },
    {
        title: "Preputioplasty for Phimosis",
        description:
            "Advanced foreskin-preserving surgery to widen the tight foreskin, reducing discomfort and recovery time.",
        downtime: "2–4 days",
    },
    {
        title: "Laser-Assisted Phimosis Surgery",
        description:
            "Precision laser surgery for safe, bloodless correction of phimosis with minimal pain.",
        downtime: "2–3 days",
    },
    {
        title: "Home Care & Post-Surgery Guidance",
        description:
            "Personalized recovery plan and hygiene instructions to prevent recurrence of phimosis.",
        downtime: "N/A",
    },
    {
        title: "Online Consultation & Follow-Up",
        description:
            "Remote consultation and follow-up care to ensure safe recovery from home.",
        downtime: "N/A",
    },
];

const testimonials = [
    {
        quote:
            "My phimosis was severe, but the laser surgery was painless. Highly recommend PureCheckup.",
        name: "Rohan Kumar",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The preputioplasty option was great, I didn't want full circumcision. Thank you for the advice.",
        name: "Sandeep Verma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Excellent care and support. The team helped me with insurance approval.",
        name: "Amit Singh",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "Fast recovery and no hidden charges. Very professional service.",
        name: "Vivek Sharma",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "I was nervous, but the doctor made me feel very comfortable. The procedure was quick.",
        name: "Rajesh Joshi",
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

const PhimosisInSpecialCity = () => {
    let { city } = useParams();
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is phimosis, and how is it treated in ${formattedCity}?`,
            answer: `Phimosis is a condition where the foreskin is too tight to retract over the glans penis, causing discomfort or infections. In ${formattedCity}, phimosis is treated with minimally invasive surgery, circumcision, or preputioplasty by expert urologists at PureCheckup, ensuring fast recovery and safe outcomes.`,
        },
        {
            id: "two",
            question: `How do I book a phimosis surgery consultation in ${formattedCity}?`,
            answer: `Booking a consultation in ${formattedCity} is simple. Visit the PureCheckup website, select your city, choose phimosis treatment, and schedule a free consultation. You can also contact PureCheckup directly for personalized guidance.`,
        },
        {
            id: "three",
            question: `Is phimosis surgery safe for children and adults in ${formattedCity}?`,
            answer: `Yes. Phimosis surgery at PureCheckup is safe for both children and adults in ${formattedCity}. Our experienced surgeons use modern, minimally invasive techniques that minimize risk, reduce pain, and promote faster recovery.`,
        },
        {
            id: "four",
            question: `What is the cost of phimosis surgery in ${formattedCity}?`,
            answer: `The cost of phimosis surgery in ${formattedCity} depends on the procedure type and severity. PureCheckup offers transparent pricing, free consultation, and flexible options like no-cost EMI to make the treatment affordable for everyone.`,
        },
        {
            id: "five",
            question: `How long does it take to recover from phimosis surgery in ${formattedCity}?`,
            answer: `Recovery time usually ranges from 3 to 7 days for minimally invasive procedures. Circumcision or extensive surgeries may take up to 2 weeks. PureCheckup provides detailed post-surgery care instructions to ensure a safe and fast recovery.`,
        },
        {
            id: "six",
            question: `Can phimosis be treated without surgery in ${formattedCity}?`,
            answer: `Yes, mild cases of phimosis can be managed with topical steroid creams, gentle foreskin stretching exercises, and good hygiene. However, persistent or severe cases typically require surgical intervention for long-term relief.`,
        },
        {
            id: "seven",
            question: `What are the symptoms of phimosis that require surgery in ${formattedCity}?`,
            answer: `Symptoms include tight foreskin, pain during urination or sexual activity, recurrent infections, swelling, redness, or difficulty retracting the foreskin. In ${formattedCity}, early consultation at PureCheckup ensures timely surgical intervention if needed.`,
        },
        {
            id: "eight",
            question: `How experienced are the phimosis surgeons in ${formattedCity}?`,
            answer: `PureCheckup surgeons in ${formattedCity} are certified urologists with years of experience performing phimosis surgery and circumcision. They specialize in advanced techniques, ensuring safe, effective treatment and high patient satisfaction.`,
        },
        {
            id: "nine",
            question: `Can I get a no-cost EMI option for phimosis surgery in ${formattedCity}?`,
            answer: `Yes, PureCheckup offers flexible payment options, including no-cost EMI for phimosis surgery in ${formattedCity}. This allows patients to undergo treatment without financial stress while receiving expert care.`,
        },
        {
            id: "ten",
            question: `How soon can I resume normal activities after phimosis surgery in ${formattedCity}?`,
            answer: `Most patients in ${formattedCity} can resume light daily activities within 3–5 days after minimally invasive surgery. Full physical activity or sports is usually allowed after 2–3 weeks, depending on the procedure and the doctor’s guidance.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Phimosis Surgery in ${formattedCity} – Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Looking for phimosis treatment in ${formattedCity}? Get free consultation, modern procedures, and no-cost EMI for safe, stress-free care | PureCheckup`}
                />
                <meta
                    name="keywords"
                    content={`phimosis treatment in ${formattedCity}, phimosis surgery in ${formattedCity}, phimosis doctor near me in ${formattedCity}, phimosis specialist in ${formattedCity}, best phimosis surgeon in ${formattedCity}, circumcision for phimosis in ${formattedCity}, phimosis clinic in ${formattedCity}, affordable phimosis surgery in ${formattedCity}, phimosis hospital in ${formattedCity}, top phimosis center in ${formattedCity}, phimosis symptoms in ${formattedCity}, phimosis causes in ${formattedCity}, phimosis recovery time in ${formattedCity}, phimosis surgery cost in ${formattedCity}, online consultation for phimosis in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/phimosis/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Phimosis Surgery in ${formattedCity} – Expert Surgeons, Fast Recovery`}
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
                <Heading text1="FAQs on Phimosis Surgery in" text2={formattedCity} />
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
                    treatmentName="Phimosis"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Surgery type (Circumcision/Laser/Open)",
                        "Severity of fibrosis",
                        "Hospital & Room Selection",
                        "Post-op medications",
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

export default PhimosisInSpecialCity;
