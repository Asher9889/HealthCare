import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const cornRemovalData = {
    title1: "Corn Removal Surgery ?",
    title2: "Advanced Foot Care Treatment",
    description:
        "Corn removal surgery is a minimally invasive procedure that eliminates painful corns and calluses caused by friction, pressure, or footwear issues. PureCheckup offers laser and surgical techniques ensuring scar-free recovery, minimal discomfort, and lasting results.",

    tabsData: [
        {
            value: "what-is-corn-removal-surgery",
            label: "What is Corn Removal Surgery?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Corn removal surgery treats hardened skin layers (corns/calluses) on the feet or toes that fail to heal with medications or home remedies.
                    </p>
                    <p>
                        PureCheckup offers advanced laser and surgical techniques for painless, scar-free, and fast recovery.
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
                    <p>Types of corn removal surgery in India:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Laser Corn Removal:</strong> Painless, precise, vaporizes hardened tissue.</li>
                        <li><strong>Surgical Excision:</strong> Removes deep or recurrent corns including the core.</li>
                        <li><strong>Cryotherapy:</strong> Freezes corn cells using cold therapy without affecting nearby skin.</li>
                        <li><strong>Chemical Peeling:</strong> Medicated solutions remove superficial corns non-surgically.</li>
                        <li><strong>Orthopedic Correction Surgery:</strong> Corrects underlying bone deformities causing recurring corns.</li>
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
                    <p>Common causes of corn formation:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Tight or ill-fitting footwear</li>
                        <li>Prolonged standing or walking</li>
                        <li>Foot deformities or misalignment</li>
                        <li>Poor foot hygiene</li>
                        <li>Medical conditions like diabetes or obesity</li>
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
                    <p>Symptoms indicating the need for corn removal surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Thick, rough, or hardened skin patches</li>
                        <li>Pain or tenderness under the skin</li>
                        <li>Burning or itching sensation</li>
                        <li>Dry, flaky, or inflamed skin</li>
                        <li>Discomfort while walking or wearing shoes</li>
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
                    <p>Benefits of corn removal surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Complete elimination of corns without recurrence</li>
                        <li>Quick recovery and minimal downtime</li>
                        <li>Painless, stitch-free procedure (laser option)</li>
                        <li>Improved foot appearance and comfort</li>
                        <li>Prevention of infection and skin damage</li>
                        <li>Enhanced mobility and daily activity</li>
                    </ul>
                </div>
            ),
        },
    ],

    doctorName: "Expert Corn Removal Surgery – PureCheckup",
    doctorDescription: (
        <div className="space-y-4">
            <p>
                At PureCheckup, patients benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Highly qualified foot and orthopedic surgeons</li>
                <li>100% hygienic, pain-free treatment</li>
                <li>Cashless hospitalization and insurance support</li>
                <li>Dedicated post-surgery care and recovery guidance</li>
                <li>24x7 patient coordination and free consultation</li>
            </ul>
            <p>
                Our team ensures personalized diagnosis, safe procedures, and faster healing using modern laser and surgical equipment.
            </p>
        </div>
    ),
    doctorLink: "https://purecheckup.com/treatment/corn-removal",
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
        title: "Advanced Corn Removal Surgery (Recommended)",
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

const CornRemovalInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of corn removal surgery treatment in ${city}?`,
            answer:
                `The cost in ${city} depends on the type of surgery and severity. PureCheckup provides an estimated quote after a free consultation.`,
        },
        {
            id: "two",
            question: "Does insurance cover corn removal surgery treatment?",
            answer:
                "Yes, insurance may cover corn removal surgery if medically necessary. PureCheckup assists with cashless or reimbursement claims.",
        },
        {
            id: "three",
            question: `Which healthcare service provider offers the best treatment at the best price in ${city}?`,
            answer:
                `PureCheckup partners with top hospitals and certified foot surgeons in ${city} to provide safe, affordable, and advanced corn removal treatments.`,
        },
        {
            id: "four",
            question: "How to book a corn removal surgery treatment with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking is easy:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>Visit PureCheckup.com</li>
                        <li>Select “Corn Removal Surgery”</li>
                        <li>Fill out the consultation form</li>
                        <li>Our care team will contact you for scheduling</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for corn removal surgery?",
            answer:
                "Laser corn removal is highly precise, painless, and provides quick recovery with minimal recurrence risk.",
        },
        {
            id: "six",
            question: "What are the first signs of a corn requiring surgery?",
            answer:
                "Persistent thickened skin, deep pain while walking, or failure of creams/home remedies indicate the need for surgical evaluation.",
        },
        {
            id: "seven",
            question: "How painful is corn removal surgery treatment?",
            answer:
                "Modern procedures are minimally painful or completely painless, with local anesthesia ensuring maximum comfort.",
        },
        {
            id: "eight",
            question: "How long does it take to recover from corn removal surgery?",
            answer:
                "Recovery typically takes 3–7 days, with laser treatment offering the fastest healing and minimal downtime.",
        },
        {
            id: "nine",
            question: "Can corns come back after surgery?",
            answer:
                "Recurrence is rare if proper footwear and foot hygiene are maintained. Preventive guidance is provided post-surgery.",
        },
        {
            id: "ten",
            question: "Is corn removal surgery safe for diabetic patients?",
            answer:
                "Yes, under medical supervision, corn removal surgery is safe for diabetic patients and prevents complications.",
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`Advanced Corn Removal Surgery in ${city} – Safe, Painless & Permanent Solution`}
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
                title2={cornRemovalData.title1}
                description={cornRemovalData.description}
                tabsData={cornRemovalData.tabsData}
                expertHeading={`Expert Corn Removal Surgery in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={cornRemovalData.doctorDescription}
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
                    treatmentName={`Corn Removal in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Corn",
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

export default CornRemovalInSpecialCity;
