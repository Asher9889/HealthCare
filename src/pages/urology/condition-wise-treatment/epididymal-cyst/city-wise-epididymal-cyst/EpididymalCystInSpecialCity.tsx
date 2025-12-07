import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const epididymalCystData = {
    title1: "Epididymal Cyst Surgery ?",
    title2: "Minimally Invasive Urological Procedure",
    description:
        "Epididymal cyst surgery (spermatocelectomy) is performed to remove fluid-filled cysts in the epididymis. Minimally invasive techniques ensure less pain, faster recovery, and minimal scarring, preserving fertility and comfort.",
    tabsData: [
        {
            value: "what-is-cyst",
            label: "What is Epididymal Cyst Surgery?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        The surgery removes cysts from the epididymis using open, microsurgical, or laser-assisted techniques. It typically takes 30–45 minutes, with most patients returning home the same day.
                    </p>
                    <p>
                        The procedure relieves discomfort, protects fertility, and prevents recurrence.
                    </p>
                </div>
            ),
        },
        {
            value: "types",
            label: "Types",
            icon: <Syringe className="text-green-600" />,
            content: (
                <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Conventional Excision:</strong> Standard open surgery for larger cysts.</li>
                        <li><strong>Microsurgical Removal:</strong> Fertility-preserving method with reduced complications.</li>
                        <li><strong>Laser-Assisted Removal:</strong> Minimally invasive, reduces bleeding and recovery time.</li>
                    </ul>
                </div>
            ),
        },
        {
            value: "causes",
            label: "Causes",
            icon: <Pill className="text-purple-600" />,
            content: (
                <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Blockage in epididymal ducts</li>
                        <li>Prior infection or inflammation</li>
                        <li>Hormonal changes</li>
                        <li>Age-related factors (common above 40)</li>
                        <li>Scrotal trauma or injury</li>
                    </ul>
                </div>
            ),
        },
        {
            value: "symptoms",
            label: "Symptoms",
            icon: <HeartPulse className="text-pink-600" />,
            content: (
                <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Painless lump or swelling near the testicle</li>
                        <li>Heaviness or dragging sensation in the scrotum</li>
                        <li>Mild discomfort during activity</li>
                        <li>Occasional pain or tenderness</li>
                        <li>Persistent swelling</li>
                    </ul>
                </div>
            ),
        },
        {
            value: "benefits",
            label: "Benefits",
            icon: <Stethoscope className="text-red-600" />,
            content: (
                <div className="space-y-3">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Permanent cyst removal</li>
                        <li>Relief from pain and discomfort</li>
                        <li>Improved fertility in select cases</li>
                        <li>Quick recovery and minimal downtime</li>
                        <li>Enhanced confidence and quality of life</li>
                    </ul>
                </div>
            ),
        },
    ],

    doctorName: "Expert Epididymal Cyst Surgery – PureCheckup",
    doctorDescription: (
        <div className="space-y-4">
            <p>PureCheckup connects patients with top urologists and advanced hospitals offering:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Experienced surgeons specializing in minimally invasive cyst removal</li>
                <li>Personalized treatment plans</li>
                <li>24/7 medical assistance and guidance</li>
                <li>Hassle-free documentation and insurance support</li>
                <li>Post-surgery follow-up and recovery support</li>
            </ul>
        </div>
    ),
    doctorLink: "https://purecheckup.com/treatment/epididymal-cyst",
};


const benefits = [
    {
        icon: Scissors,
        title: "Pain-Free Laser Surgery",
        description: "No cuts, no stitches — minimal discomfort.",
    },
    {
        icon: Clock,
        title: "Same-Day Discharge",
        description: "Be back home within hours.",
    },
    {
        icon: ShieldCheck,
        title: "Insurance Assistance",
        description: "Cashless and paperwork support.",
    },
    {
        icon: Headphones,
        title: "24x7 Patient Support",
        description: "We’re here throughout your recovery.",
    },
];

const treatmentOptions = [
    {
        id: 1,
        icon: <Scissors className="w-7 h-7 text-blue-600" />,
        title: "Advanced Epididymal Cyst Surgery (Recommended)",
        points: [
            "No cuts, stitches, or pain",
            "Safe and effective",
            "Quick recovery",
        ],
        highlight: false,
    },
    {
        id: 2,
        icon: <Leaf className="w-7 h-7 text-green-600" />,
        title: "Non-Surgical Treatments",
        points: ["Medicines", "Lifestyle and diet corrections"],
        highlight: false,
    },
    {
        id: 3,
        icon: <Hospital className="w-7 h-7 text-purple-600" />,
        title: "Conventional Surgery (For Severe Cases)",
        points: ["Recommended in advanced stages"],
        highlight: false,
    },
];

const EpididymalCystInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of epididymal cyst surgery treatment in ${city}?`,
            answer:
                `The cost in ${city} varies depending on hospital and surgical type. PureCheckup provides affordable, transparent pricing without compromising quality.`,
        },
        {
            id: "two",
            question: "Does insurance cover epididymal cyst surgery treatment?",
            answer:
                "Yes, most health insurance plans cover epididymal cyst surgery as it is medically necessary. PureCheckup assists with claim support and cashless approval.",
        },
        {
            id: "three",
            question: `Which healthcare service provider offers the best treatment at a reasonable price in ${city}?`,
            answer:
                `PureCheckup partners with top-rated urologists and multi-specialty hospitals across ${city} to deliver expert care at the best value.`,
        },
        {
            id: "four",
            question: "How can I book an epididymal cyst treatment surgery with PureCheckup?",
            answer: (
                <div className="space-y-2 text-(--text-primary) font-medium">
                    <p>Booking is simple:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>Visit PureCheckup.com</li>
                        <li>Fill out the online consultation form</li>
                        <li>Call the helpline for same-day appointment scheduling</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for an epididymal cyst?",
            answer:
                "Surgical removal, known as epididymal cyst excision or spermatocelectomy, is the most effective and permanent treatment for large or symptomatic cysts.",
        },
        {
            id: "six",
            question: "What are the first signs of an epididymal cyst?",
            answer:
                "Early signs include a painless lump or swelling near the testicle and a heaviness or dragging sensation in the scrotum.",
        },
        {
            id: "seven",
            question: "How painful is epididymal cyst surgery treatment?",
            answer:
                "The surgery is virtually painless, performed under local or general anesthesia. Post-surgery discomfort is minimal and manageable.",
        },
        {
            id: "eight",
            question: "How long does recovery take after epididymal cyst surgery?",
            answer:
                "Most patients return to normal activities within 3–5 days and achieve full recovery within two weeks.",
        },
        {
            id: "nine",
            question: "Is epididymal cyst surgery safe?",
            answer:
                "Yes. When performed by experienced urologists, the procedure is highly safe and effective, with very low risk of complications.",
        },
        {
            id: "ten",
            question: "Can epididymal cysts come back after surgery?",
            answer:
                "Recurrence is rare, especially when the entire cyst and its lining are completely removed. Regular follow-ups ensure long-term results.",
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`Advanced & Painless Epididymal Cyst Surgery in ${city} | Quick Recovery & Expert Urologists`}
                description={`Pain-free, advanced laser treatment in ${city} with same-day discharge and full insurance support.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["✅ NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
                cities={constantData.cities}
                consultations={["Clinic", "Online"]}
            />

            <section className="py-10">
                <Heading text1="Quick" text2="Benefits" />
                <TreatmentBenefits benefits={benefits} />
            </section>

            <StatsBar />
            <section className="py-20 mx-auto px-4 max-w-7xl">
                <Heading text1="Meet Our" text2="Specialist" className="mb-10" />
                {constantData.specialists.map((doc) => (
                    <SpecialistCard key={doc.id} specialist={doc} />
                ))}
            </section>

            <WhyPristynCare />

            <ConditionInfo
                title1="What is"
                title2={epididymalCystData.title1}
                description={epididymalCystData.description}
                tabsData={epididymalCystData.tabsData}
                expertHeading={`Expert Epididymal Cyst Surgery in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={epididymalCystData.doctorDescription}
                doctorLink="https://purecheckup.com"
                ctaText="Book Free Appointment"
            />

            <section className="py-20 px-4">
                <Heading text1="Treatment" text2="Options" className="mb-10" />
                <ConditionTreatmentOptions treatmentOptions={treatmentOptions} />
            </section>

            <section className="py-20 px-4">
                <Heading text1="Frequently" text2="Asked Questions" className="mb-10" />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-3xl mx-auto">
                <ConditionTreatmentForm cities={constantData.cities} />
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName={`Epididymal Cyst in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Epididymal Cyst",
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

export default EpididymalCystInSpecialCity;
