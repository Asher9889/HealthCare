
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
        title: "Adult Stapler Circumcision",
        description:
            "Minimally invasive, safe, and precise procedure for adults with quick recovery in 3–5 days. Day-care surgery with local anesthesia.",
        downtime: "3–5 days",
    },
    {
        title: "Child Stapler Circumcision",
        description:
            "Performed by expert pediatric surgeons, this stapler circumcision is fast, painless, and ensures minimal scarring with quick healing.",
        downtime: "3–5 days",
    },
    {
        title: "Painless Stapler Circumcision",
        description:
            "Local anesthesia ensures a pain-free procedure with minimal discomfort afterward; suitable for both adults and children.",
        downtime: "3–5 days",
    },
    {
        title: "Day-Care Stapler Circumcision",
        description:
            "Complete stapler circumcision in a single visit, no hospitalization required, including post-operative care and support.",
        downtime: "3–5 days",
    },
    {
        title: "Stapler Circumcision for Phimosis",
        description:
            "Effective for tight foreskin or phimosis, this minimally invasive stapler procedure reduces infection risk and discomfort.",
        downtime: "3–5 days",
    },
    {
        title: "Insurance & EMI Supported Stapler Circumcision",
        description:
            "Transparent pricing with assistance for insurance and EMI options; complete post-operative follow-up included for patient convenience.",
        downtime: "3–5 days",
    },
];

// Reusing testimonials from Circumcision but can be customized if new ones provided. 
// Using the same structure as established.
const testimonials = [
    {
        quote:
            "I was hesitant about adult circumcision, but the stapler method was so quick and clean. The recovery was much faster than I expected.",
        name: "Rohan Das",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "The best decision for my son's phimosis. The stapler circumcision left a perfect cosmetic finish and he healed in just 4 days.",
        name: "Meera Iyer",
        designation: "Parent",
        stars: 5,
    },
    {
        quote:
            "Highly professional doctors. The stapler technique is truly advanced and painless. I was back to work in 3 days.",
        name: "Karan Singh",
        designation: "Patient",
        stars: 5,
    },
    {
        quote:
            "Clean clinic, helpful staff, and affordable EMI options. Stapler circumcision is definitely the way to go.",
        name: "Amitabh Verma",
        designation: "Patient",
        stars: 4.5,
    },
    {
        quote:
            "No pain, no bleeding. The stapler ring fell off automatically as promised. Very satisfied with the result.",
        name: "Vikas Malhotra",
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

const StaplerCircumcisionInSpecialCity = () => {
    let { city } = useParams();

    // Capitalize first letter of city name
    const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    if (!formattedCity) {
        return <div>Loading...</div>;
    }

    const faqs = [
        {
            id: "one",
            question: `What is stapler circumcision in ${formattedCity}?`,
            answer: `Stapler circumcision is a minimally invasive procedure where a surgical stapler is used to remove the foreskin safely and quickly. It reduces bleeding and recovery time.`,
        },
        {
            id: "two",
            question: `How is a stapler circumcision performed in ${formattedCity}?`,
            answer: `A specialized stapler device is used to excise the foreskin precisely under local anesthesia. The procedure is quick, minimally invasive, and usually done as day-care surgery.`,
        },
        {
            id: "three",
            question: `Is stapler circumcision safe in ${formattedCity}?`,
            answer: `Yes, stapler circumcision is highly safe when performed by experienced surgeons. It minimizes bleeding, reduces infection risk, and promotes faster healing.`,
        },
        {
            id: "four",
            question: `What is the recovery time after a stapler circumcision in ${formattedCity}?`,
            answer: `Most patients can resume normal activities within 3–5 days. Full recovery typically takes 7–10 days with proper post-operative care.`,
        },
        {
            id: "five",
            question: `Does a stapler circumcision hurt in ${formattedCity}?`,
            answer: `No, local anesthesia is used to ensure the procedure is painless. Patients may experience minor discomfort during the first few days of recovery.`,
        },
        {
            id: "six",
            question: `Who can perform a stapler circumcision in ${formattedCity}?`,
            answer: `Only trained and experienced urologists or surgeons specializing in minimally invasive procedures should perform stapler circumcision.`,
        },
        {
            id: "seven",
            question: `How much does a stapler circumcision cost in ${formattedCity}?`,
            answer: `The cost varies by clinic and surgeon. PureCheckup provides transparent pricing, EMI options, and assistance with insurance claims.`,
        },
        {
            id: "eight",
            question: `Is stapler circumcision suitable for children and adults in ${formattedCity}?`,
            answer: `Yes, stapler circumcision is suitable for both children and adults. The minimally invasive technique ensures safety and faster recovery for all ages.`,
        },
        {
            id: "nine",
            question: `What are the advantages of stapler circumcision in ${formattedCity}?`,
            answer: `Advantages include less bleeding, shorter procedure time, minimal pain, faster recovery, and lower risk of complications compared to traditional circumcision.`,
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for circumcision treatment in ${formattedCity}?`,
            answer: `PureCheckup offers expert surgeons, advanced procedures, affordable pricing, and complete post-operative support.`,
        },
        {
            id: "eleven",
            question: `How can I book a stapler circumcision in ${formattedCity}?`,
            answer: `You can book a consultation and procedure through PureCheckup’s website, WhatsApp, or helpline, with free online consultation and EMI options available.`,
        },
    ];

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>{`Stapler Circumcision in ${formattedCity}  Call 9211930749 | PureCheckup`}</title>
                <meta
                    name="description"
                    content={`Get expert stapler circumcision in ${formattedCity} at PureCheckup. Affordable, safe, and daycare surgery with free consultation & EMI options.`}
                />
                <meta
                    name="keywords"
                    content={`stapler circumcision in ${formattedCity}, stapler circumcision surgery in ${formattedCity} ,stapler circumcision treatment in ${formattedCity}, stapler male circumcision in ${formattedCity}, stapler phimosis treatment in ${formattedCity}, stapler circumcision doctors in ${formattedCity}, stapler circumcision clinic in ${formattedCity}, stapler adult circumcision in ${formattedCity}, stapler child circumcision in ${formattedCity}, stapler best circumcision surgeon in ${formattedCity}, stapler circumcision cost in ${formattedCity}, stapler painless circumcision in ${formattedCity}, stapler circumcision hospital near me in ${formattedCity}`}
                />
                <link rel="canonical" href={`https://purecheckup.com/treatment/stapler-circumcision/${city}`} />
            </Helmet>

            <ConditionHeroSection
                title={`Get Safe & Advanced Stapler Circumcision in ${formattedCity} – Expert Surgeons with 24x7 Support`}
                description={`Pain-free Surgery, with advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across ${formattedCity}.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now" }}
                features={["Free Doctor Consultation", "No-Cost EMI & Insurance Assistance", "Top Laparoscopic Surgeons", "Day-Care Surgery Options", "24x7 Medical Coordination"]}
                cities={constantData.cities}
                selectedCity={formattedCity}
                consultations={["Clinic", "Online"]} // Assuming this prop structure is same as Hernia
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
                <Heading text1="FAQs on Stapler Circumcision in" text2={formattedCity} />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-7xl mx-auto h-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Side Image - Using generic image */}
                    <div
                        className="hidden md:block bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
                    />

                    <ConditionTreatmentForm selectedCity={formattedCity} cities={constantData.cities} />
                </div>
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Stapler Circumcision"
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Hospital category and room",
                        "Insurance coverage and approvals",
                        "Additional diagnostics if needed",
                        "Surgeon's expertise"
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

export default StaplerCircumcisionInSpecialCity;
