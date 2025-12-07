import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const paraphimosisData = {
    title1: "Paraphimosis Surgery",
    title2: "Treatment & Information",
    description:
        "Paraphimosis surgery treats a condition where the foreskin is trapped behind the glans, causing pain, swelling, and restricted blood flow. PureCheckup offers safe, minimally invasive surgery for immediate relief and prevention of recurrence.",

    tabsData: [
        {
            value: "what-is-paraphimosis",
            label: "What is Paraphimosis Surgery?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Paraphimosis surgery is performed when the foreskin becomes trapped behind the glans penis and cannot return to its normal position, causing pain, swelling, and risk of complications.
                    </p>
                    <p>
                        The surgery ensures effective relief, proper healing, and prevention of recurrence using advanced, minimally invasive techniques.
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
                    <p>Types of paraphimosis surgery performed in India:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Dorsal Slit Procedure:</strong> Small incision to relieve constriction and restore foreskin position.</li>
                        <li><strong>Circumcision Surgery:</strong> Complete foreskin removal for recurrent paraphimosis.</li>
                        <li><strong>Frenuloplasty or Preputioplasty:</strong> Minor corrections to prevent future paraphimosis while preserving foreskin.</li>
                        <li><strong>Minimally Invasive Laser Surgery:</strong> Faster recovery, minimal pain, and reduced infection risk.</li>
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
                    <p>Common causes of paraphimosis requiring surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Forceful retraction of the foreskin</li>
                        <li>Poor hygiene leading to inflammation or infection</li>
                        <li>Untreated phimosis</li>
                        <li>Post-catheterization or medical procedures</li>
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
                    <p>Signs that indicate paraphimosis surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Swelling of the foreskin or glans</li>
                        <li>Severe penile pain</li>
                        <li>Difficulty urinating</li>
                        <li>Bluish discoloration of the glans</li>
                        <li>Persistent discomfort during sexual activity</li>
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
                    <p>Benefits of paraphimosis surgery:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Immediate relief from pain and swelling</li>
                        <li>Prevention of tissue damage and infections</li>
                        <li>Minimally invasive options with faster recovery</li>
                        <li>Personalized care with expert urologists</li>
                        <li>Safe, sterile, and advanced surgical environment</li>
                        <li>Insurance coverage for eligible patients</li>
                    </ul>
                </div>
            ),
        },
    ],

    doctorName: "Expert Paraphimosis Surgeons – PureCheckup Healthcare",
    doctorDescription: (
        <div className="space-y-4">
            <p>
                PureCheckup provides top-tier paraphimosis surgery in India, performed by certified urologists using advanced surgical technology for precise, safe, and fast recovery.
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Experienced surgeons with specialized expertise</li>
                <li>Minimally invasive procedures for minimal pain</li>
                <li>Fast recovery and post-operative care</li>
                <li>Insurance and cashless options available</li>
                <li>Available in major cities across India</li>
            </ul>
            <p>
                Trust PureCheckup for professional, confidential, and high-quality paraphimosis treatment tailored to each patient’s needs.
            </p>
        </div>
    ),
    doctorLink: "https://purecheckup.com/treatment/paraphimosis",
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
        title: "Advance Paraphimosis Surgery (Recommended)",
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

const ParaphimosisInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of paraphimosis surgery treatment in ${city}?`,
            answer:
                `Costs in ${city} vary depending on the procedure type, hospital, and complexity. Contact PureCheckup for a detailed consultation and personalized estimate.`,
        },
        {
            id: "two",
            question: "Does insurance cover paraphimosis surgery treatment?",
            answer:
                "Yes, most major health insurance plans cover paraphimosis surgery. PureCheckup assists with insurance verification and claims processing.",
        },
        {
            id: "three",
            question: `Which healthcare service provider offers the best paraphimosis treatment in ${city}?`,
            answer:
                `PureCheckup provides expert paraphimosis surgery in ${city} with advanced technology, skilled surgeons, and comprehensive insurance support.`,
        },
        {
            id: "four",
            question: "How to book a paraphimosis treatment surgery with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking paraphimosis surgery with PureCheckup is easy:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>
                            Visit{" "}
                            <a
                                href="https://purecheckup.com/treatment/paraphimosis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                purecheckup.com/treatment/paraphimosis
                            </a>
                        </li>
                        <li>Fill in your details or call our 24×7 helpline</li>
                        <li>Schedule a consultation with an expert urologist</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for paraphimosis surgery?",
            answer:
                "The treatment depends on severity. Options include dorsal slit, circumcision, preputioplasty, or minimally invasive laser surgery, all available at PureCheckup.",
        },
        {
            id: "six",
            question: "What are the first signs of a paraphimosis condition?",
            answer:
                "Initial signs include foreskin swelling, severe pain, difficulty retracting the foreskin, or difficulty urinating. Early intervention prevents complications.",
        },
        {
            id: "seven",
            question: "How painful is paraphimosis surgery treatment?",
            answer:
                "Most procedures are minimally invasive, performed under local or general anesthesia, ensuring minimal pain during and after surgery.",
        },
        {
            id: "eight",
            question: "How long does recovery take after paraphimosis surgery?",
            answer:
                "Recovery typically takes 1–2 weeks for minor procedures and slightly longer for circumcision, depending on individual healing and procedure type.",
        },
        {
            id: "nine",
            question: "Can paraphimosis recur after surgery?",
            answer:
                "Recurrence is rare after proper surgical intervention, especially when corrective procedures like circumcision or preputioplasty are performed.",
        },
        {
            id: "ten",
            question: "Is paraphimosis surgery safe for all age groups?",
            answer:
                "Yes, PureCheckup provides age-appropriate care with advanced surgical techniques suitable for both adults and pediatric patients.",
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`Expert Paraphimosis Surgery in ${city} – Quick Relief, Complete Care`}
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
                title2={paraphimosisData.title1}
                description={paraphimosisData.description}
                tabsData={paraphimosisData.tabsData}
                expertHeading={`Expert Paraphimosis Surgeons in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={paraphimosisData.doctorDescription}
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
                    treatmentName={`Paraphimosis in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Paraphimosis",
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

export default ParaphimosisInSpecialCity;
