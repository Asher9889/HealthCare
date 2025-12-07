import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const foreskinInfectionData = {
    title1: "Foreskin Infection Surgery ?",
    title2: "Treatment & Information",
    description:
        "Foreskin infection surgery, including laser or conventional circumcision and preputioplasty, treats recurring infections, phimosis, or inflammation. PureCheckup ensures safe, minimally invasive surgery with fast recovery and expert care.",

    tabsData: [
        {
            value: "what-is-foreskin-infection-surgery",
            label: "What is Foreskin Infection Surgery?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Foreskin infection surgery manages infections, inflammation, or complications of the foreskin. It restores comfort, prevents recurrence, and ensures proper hygiene.
                    </p>
                    <p>
                        PureCheckup provides advanced, safe, and minimally invasive procedures tailored to each patient’s needs.
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
                    <p>Types of foreskin infection surgery in India:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Conventional Circumcision:</strong> Removes foreskin for recurring infections or phimosis.</li>
                        <li><strong>Laser Circumcision:</strong> Minimally invasive, stitch-free, faster recovery.</li>
                        <li><strong>Preputioplasty:</strong> Preserves foreskin while relieving tightness and infection.</li>
                        <li><strong>Debridement Surgery:</strong> Cleans affected tissue in severe infections.</li>
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
                    <p>Causes of foreskin infections requiring surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Poor hygiene and smegma buildup</li>
                        <li>Bacterial or fungal infections</li>
                        <li>Phimosis or tight foreskin</li>
                        <li>Recurring urinary tract infections</li>
                        <li>Diabetes or compromised immunity</li>
                        <li>Untreated balanitis or posthitis</li>
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
                    <p>Symptoms indicating need for foreskin infection surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Painful urination or difficulty retracting foreskin</li>
                        <li>Redness, swelling, or persistent inflammation</li>
                        <li>Recurrent infections despite medications</li>
                        <li>Discharge or foul odor</li>
                        <li>Ulcers, sores, or bleeding</li>
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
                    <p>Benefits of foreskin infection surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Permanent relief from recurring infections</li>
                        <li>Improved hygiene and comfort</li>
                        <li>Minimally invasive procedures with quick recovery</li>
                        <li>Pain-free, modern surgical techniques</li>
                        <li>Reduced risk of scarring or urinary issues</li>
                        <li>Insurance coverage for major providers</li>
                    </ul>
                </div>
            ),
        },
    ],

    doctorName: "Expert Surgeons for Foreskin Infection Surgery – PureCheckup",
    doctorDescription: (
        <div className="space-y-4">
            <p>
                PureCheckup offers advanced foreskin infection surgery performed by certified urologists using modern surgical techniques for safe and effective outcomes.
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Experienced surgeons specialized in foreskin infections</li>
                <li>Laser and conventional surgical options</li>
                <li>Fast recovery with post-operative care</li>
                <li>Insurance and cashless treatment options available</li>
                <li>Available across major cities in India</li>
            </ul>
            <p>
                Trust PureCheckup for confidential, high-quality, and personalized foreskin infection treatment.
            </p>
        </div>
    ),
    doctorLink: "https://purecheckup.com/treatment/foreskin-infection",
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
        title: "Foreskin Infection Surgery (Recommended)",
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

const ForeskinInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of foreskin infection surgery treatment in ${city}?`,
            answer:
                `Costs in ${city} vary depending on the procedure type, hospital, and patient requirements. PureCheckup provides personalized quotes after consultation.`,
        },
        {
            id: "two",
            question: "Does insurance cover foreskin infection surgery treatment?",
            answer:
                "Yes, most major health insurance plans cover foreskin infection surgeries. PureCheckup assists with insurance approval and claims processing.",
        },
        {
            id: "three",
            question: `Which healthcare service provider offers the best foreskin infection treatment in ${city}?`,
            answer:
                `PureCheckup is recognized across ${city} for safe, cost-effective, and advanced foreskin infection treatment performed by expert surgeons.`,
        },
        {
            id: "four",
            question: "How to book a foreskin infection treatment surgery with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking your surgery is simple:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>Visit{" "}
                            <a
                                href="https://purecheckup.com/treatment/foreskin-infection"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                PureCheckup.com
                            </a>
                        </li>
                        <li>Fill in your details or call the helpline</li>
                        <li>Schedule a consultation with an expert surgeon</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for a foreskin infection surgery?",
            answer:
                "Laser circumcision is increasingly preferred for minimal pain, faster recovery, and low complication risk. Other options include conventional circumcision, preputioplasty, and debridement surgery.",
        },
        {
            id: "six",
            question: "What are the first signs that indicate foreskin infection surgery?",
            answer:
                "Early signs include redness, swelling, painful urination, discharge, foul odor, or ulcers on the foreskin. Prompt evaluation ensures effective treatment.",
        },
        {
            id: "seven",
            question: "How painful is foreskin infection surgery treatment?",
            answer:
                "Modern anesthesia and minimally invasive techniques ensure minimal pain. Most patients resume normal activities within a few days.",
        },
        {
            id: "eight",
            question: "Is foreskin infection surgery safe for adults and children?",
            answer:
                "Yes, the procedure is safe across age groups, with tailored anesthesia and surgical technique for each patient.",
        },
        {
            id: "nine",
            question: "What precautions should I take after foreskin infection surgery?",
            answer:
                "Follow your surgeon’s instructions on hygiene, medications, and wound care. Avoid strenuous activity until fully healed.",
        },
        {
            id: "ten",
            question: "How long is the recovery period after foreskin infection surgery?",
            answer:
                "Recovery typically takes 7–14 days, depending on the procedure and patient’s health, with minimal pain and quick resumption of daily activities.",
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`Expert Foreskin Infection Surgery in ${city} – Quick & Comfortable`}
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
                title2={foreskinInfectionData.title1}
                description={foreskinInfectionData.description}
                tabsData={foreskinInfectionData.tabsData}
                expertHeading={`Expert Surgeons for Foreskin Infection in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={foreskinInfectionData.doctorDescription}
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
                    treatmentName={`Foreskin Infection in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Foreskin Infection",
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

export default ForeskinInSpecialCity;
