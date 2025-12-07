import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const rirsData = {
    title1: "RIRS ?",
    title2: "Surgery & Information",
    description:
        "Retrograde Intrarenal Surgery (RIRS) is a minimally invasive procedure for treating kidney stones. It requires no external incisions and uses a flexible ureteroscope to access and fragment kidney stones using laser technology. RIRS offers a faster recovery, minimal discomfort, and high success rates, making it one of the preferred treatments for kidney stones in India.",

    tabsData: [
        {
            value: "what-is-rirs",
            label: "What is RIRS?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Retrograde Intrarenal Surgery (RIRS) is a modern, minimally invasive method used to treat kidney stones located in the renal pelvis, calyces, or complex areas.
                    </p>
                    <p>
                        During RIRS, a flexible ureteroscope is inserted through the urinary tract to visualize the kidney stones. Laser energy is then used to fragment and remove the stones without any external cuts.
                    </p>
                    <p>
                        It is highly effective, especially for patients with stones that are difficult to reach using other methods, ensuring safe and precise removal.
                    </p>
                </div>
            ),
        },
        {
            value: "types",
            label: "Types of RIRS Surgery",
            icon: <Syringe className="text-green-600" />,
            content: (
                <div className="space-y-3">
                    <p>PureCheckup provides different types of advanced RIRS procedures in India:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Standard RIRS:</strong> Used for single or small-to-medium stones.</li>
                        <li><strong>Bilateral RIRS:</strong> Treats stones in both kidneys in one session.</li>
                        <li><strong>RIRS with Stenting:</strong> Includes temporary stent placement to support healing.</li>
                        <li><strong>Laser RIRS:</strong> Uses high-precision laser energy for safe and effective stone fragmentation.</li>
                    </ul>
                    <p>These procedures are performed by expert urologists across major Indian cities such as Delhi, Mumbai, Bengaluru, and Kanpur.</p>
                </div>
            ),
        },
        {
            value: "causes",
            label: "Causes",
            icon: <Pill className="text-purple-600" />,
            content: (
                <div className="space-y-3">
                    <p>RIRS is recommended for kidney stones caused by several factors, including:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Dehydration:</strong> Insufficient water intake leading to concentrated urine.</li>
                        <li><strong>Poor diet:</strong> High salt, sugar, or protein intake contributing to stone formation.</li>
                        <li><strong>Medical conditions:</strong> Diabetes, obesity, or hyperparathyroidism.</li>
                        <li><strong>Genetic factors:</strong> Family history of kidney stones.</li>
                        <li><strong>Urinary infections:</strong> Certain UTIs that encourage stone formation.</li>
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
                    <p>You may need RIRS if you experience any of the following symptoms:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Severe back or side pain</li>
                        <li>Blood in urine (hematuria)</li>
                        <li>Frequent or painful urination</li>
                        <li>Nausea and vomiting</li>
                        <li>Fever or chills</li>
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
                    <p>RIRS surgery offers multiple benefits compared to traditional stone removal procedures:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Minimally invasive – no external cuts</li>
                        <li>High precision using laser technology</li>
                        <li>Short recovery period</li>
                        <li>Outpatient or day-care procedure</li>
                        <li>Low complication rates with advanced methods</li>
                    </ul>
                </div>
            ),
        },
    ],

    doctorName: "Expert RIRS Surgeons – PureCheckup Healthcare",
    doctorDescription: (
        <div className="space-y-4">
            <p>
                At PureCheckup, RIRS surgeries are performed by experienced urologists using state-of-the-art laser and endoscopic equipment.
            </p>
            <p>
                Our medical network spans top hospitals across India, providing complete pre-surgery, surgery, and post-operative care under one platform.
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Performed by leading urologists and stone specialists</li>
                <li>Advanced laser and flexible ureteroscope technology</li>
                <li>Minimal downtime and same-day discharge</li>
                <li>Full insurance and EMI assistance</li>
                <li>Available in all major metro and tier-2 cities</li>
            </ul>
            <p>
                Choose PureCheckup for a painless, precise, and successful RIRS experience with India’s best urology experts.
            </p>
        </div>
    ),
    doctorLink: "https://purecheckup.com/treatment/rirs",
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
        title: "Laser RIRS Surgery (Recommended)",
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

const RIRSInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of RIRS surgery in ${city}?`,
            answer:
                `The cost of RIRS surgery in ${city} typically ranges between ₹80,000 and ₹1,00,000, depending on the hospital, city, and complexity of kidney stones. PureCheckup offers transparent pricing and helps patients choose affordable, high-quality treatment options.`,
        },
        {
            id: "two",
            question: "Does insurance cover RIRS treatment?",
            answer:
                "Yes, most major health insurance providers cover RIRS surgery, making it both accessible and affordable. PureCheckup assists patients with insurance verification, cashless approval, and reimbursement support.",
        },
        {
            id: "three",
            question: `Which healthcare provider offers the best RIRS treatment in ${city}?`,
            answer:
                `PureCheckup connects patients with ${city}’s top hospitals and urologists specializing in RIRS. Our partnered healthcare centers provide advanced laser technology, expert surgeons, and complete insurance support at competitive prices.`,
        },
        {
            id: "four",
            question: "How to book RIRS surgery with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking RIRS surgery with PureCheckup is simple and convenient:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>
                            Visit{" "}
                            <a
                                href="https://purecheckup.com/treatment/rirs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                purecheckup.com/treatment/rirs
                            </a>
                        </li>
                        <li>Fill in your details to request a free consultation</li>
                        <li>Or call our 24×7 helpline at +91-9211930749 for same-day assistance</li>
                    </ul>
                    <p>
                        Our care team will guide you through doctor selection, insurance verification, and pre-surgery preparation.
                    </p>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for kidney stones?",
            answer:
                "RIRS is one of the most effective and minimally invasive treatments for kidney stones, especially those located in complex or hard-to-reach areas. It provides excellent stone clearance and faster recovery compared to traditional surgery.",
        },
        {
            id: "six",
            question: "What are the first signs of kidney stones that may need RIRS treatment?",
            answer:
                "Early signs include severe back or side pain, blood in urine (hematuria), frequent urination, nausea, vomiting, and pain during urination. If you experience these symptoms, consult a urologist for timely diagnosis and RIRS evaluation.",
        },
        {
            id: "seven",
            question: "Is RIRS surgery painful?",
            answer:
                "RIRS is a minimally invasive and nearly painless procedure performed under anesthesia. Patients may experience mild discomfort or soreness post-surgery, which resolves within a few days with proper care.",
        },
        {
            id: "eight",
            question: "What is the recovery time after RIRS surgery?",
            answer:
                "Most patients recover within 5–7 days and resume normal activities soon after. Complete recovery and stone clearance may take a few weeks, depending on the size and number of stones.",
        },
        {
            id: "nine",
            question: "Are there any risks associated with RIRS surgery?",
            answer:
                "RIRS is a safe procedure with minimal complications. Rare risks may include mild bleeding, temporary urinary discomfort, or infection—all of which are easily managed under medical supervision.",
        },
        {
            id: "ten",
            question: "Is RIRS suitable for all kidney stone patients?",
            answer:
                "RIRS is suitable for most patients with small to moderately sized stones, or stones located in complex kidney regions. A detailed evaluation by a PureCheckup urologist helps determine the most suitable treatment plan.",
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`RIRS Surgery in ${city} – Advanced Kidney Stone Treatment`}
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
                title2={rirsData.title1}
                description={rirsData.description}
                tabsData={rirsData.tabsData}
                expertHeading={`Expert RIRS Surgery in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={rirsData.doctorDescription}
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
                    treatmentName={`RIRS in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of RIRS",
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

export default RIRSInSpecialCity;
