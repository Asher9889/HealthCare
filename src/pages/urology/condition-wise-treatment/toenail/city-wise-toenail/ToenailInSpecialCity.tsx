import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const toenailRemovalData = {
    title1: "Toenail Removal Surgery",
    title2: "Minimally Invasive Foot & Nail Procedure",
    description:
        "Toenail removal surgery treats severe nail infections, ingrown toenails, or chronic nail damage when conservative treatments fail. Performed under local anesthesia, the procedure relieves pain, infection, and inflammation, allowing patients to resume walking comfortably within days.",
    tabsData: [
        {
            value: "what-is-toenail",
            label: "What is Toenail Removal Surgery?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        This minor procedure removes part or all of the toenail safely under local anesthesia to treat infections, ingrown nails, or trauma. Most patients return home the same day.
                    </p>
                    <p>
                        Modern techniques, including laser and minimally invasive surgery, reduce pain, improve recovery, and prevent recurrence.
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
                        <li><strong>Partial Nail Avulsion:</strong> Removes only the affected portion, often for ingrown nails.</li>
                        <li><strong>Total Nail Avulsion:</strong> Entire nail removed for severe infection or trauma.</li>
                        <li><strong>Chemical Matrixectomy:</strong> Phenol application to prevent regrowth in chronic cases.</li>
                        <li><strong>Surgical Matrixectomy:</strong> Nail root destroyed surgically for permanent relief.</li>
                        <li><strong>Laser Toenail Removal:</strong> Minimally invasive laser technique targeting infected tissue without cutting.</li>
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
                        <li>Chronic fungal infection</li>
                        <li>Ingrown toenail causing severe pain</li>
                        <li>Injury or trauma to the nail bed</li>
                        <li>Thickened or deformed toenail</li>
                        <li>Severe bacterial infection</li>
                        <li>Painful nail growth due to shoe friction</li>
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
                        <li>Pain, redness, or swelling around the nail</li>
                        <li>Pus or discharge from nail edges</li>
                        <li>Discoloration (yellow, brown, or black)</li>
                        <li>Skin overgrowth near the nail</li>
                        <li>Difficulty walking or wearing shoes</li>
                        <li>Recurrent infection despite medication</li>
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
                        <li>Instant pain relief</li>
                        <li>Permanent solution for recurring or fungal nails</li>
                        <li>Improved nail appearance</li>
                        <li>Quick and safe recovery</li>
                        <li>Reduced infection risk</li>
                        <li>Better mobility and daily activity comfort</li>
                    </ul>
                </div>
            ),
        },
    ],

    doctorName: "Expert Toenail Removal Surgery – PureCheckup",
    doctorDescription: (
        <div className="space-y-4">
            <p>PureCheckup ensures expert foot and nail care with:</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Precise diagnosis before treatment</li>
                <li>Painless surgery under local anesthesia</li>
                <li>Same-day discharge and quick recovery</li>
                <li>Hygienic, infection-free environment</li>
                <li>Personalized post-surgery care for faster healing</li>
            </ul>
        </div>
    ),
    doctorLink: "https://purecheckup.com/treatment/toenail-removal",
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
        title: "Advanced Toenail Removal Surgery (Recommended)",
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

const ToenailInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of toenail removal surgery treatment in ${city}?`,
            answer:
                `The cost in ${city} varies depending on the type of surgery, hospital, and location. PureCheckup helps you find the most affordable and expert care in your city.`,
        },
        {
            id: "two",
            question: "Does insurance cover toenail removal surgery treatment?",
            answer:
                "Yes, most health insurance plans cover toenail removal surgery when medically necessary due to infection, injury, or chronic pain.",
        },
        {
            id: "three",
            question: `Which healthcare service provider offers the best toenail removal treatment in ${city}?`,
            answer:
                `PureCheckup partners with top-rated hospitals and certified surgeons across ${city} for safe, reliable, and affordable toenail removal surgery.`,
        },
        {
            id: "four",
            question: "How to book a toenail removal surgery with PureCheckup?",
            answer: (
                <div className="space-y-2 text-(--text-primary) font-medium">
                    <p>Booking is simple:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>Visit PureCheckup.com</li>
                        <li>Select your city</li>
                        <li>Fill out the quick appointment form</li>
                        <li>Our care team will connect you with the best specialist near you</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for toenail removal surgery?",
            answer:
                "Laser or partial nail avulsion is ideal for mild cases, while surgical or chemical matrixectomy suits chronic or severe infections.",
        },
        {
            id: "six",
            question: "What are the first signs that you might need toenail removal surgery?",
            answer:
                "Early signs include pain, swelling, redness, pus formation, or thickened nails that do not heal with medicines or home remedies.",
        },
        {
            id: "seven",
            question: "How painful is toenail removal surgery treatment?",
            answer:
                "The procedure is virtually painless, performed under local anesthesia. Mild soreness may occur post-surgery but subsides within a few days.",
        },
        {
            id: "eight",
            question: "How long does it take to recover from toenail removal surgery?",
            answer:
                "Recovery typically takes 7–14 days for partial removal and 3–6 weeks for total nail removal, depending on aftercare.",
        },
        {
            id: "nine",
            question: "Will the toenail grow back after surgery?",
            answer:
                "In partial removal, the nail grows back normally. In matrixectomy, nail regrowth is prevented to stop recurring infections.",
        },
        {
            id: "ten",
            question: "How can I prevent future toenail infections or ingrown nails?",
            answer:
                "Maintain good foot hygiene, wear comfortable shoes, trim nails straight, and seek early medical help if pain or redness develops.",
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`Expert Toenail Removal Surgery in ${city} for Ingrown, Fungal & Damaged Nails`}
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
                title2={toenailRemovalData.title1}
                description={toenailRemovalData.description}
                tabsData={toenailRemovalData.tabsData}
                expertHeading={`Expert Toenail Removal Surgery in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={toenailRemovalData.doctorDescription}
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
                    treatmentName={`Toenail Removal in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Toenail Removal",
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

export default ToenailInSpecialCity;
