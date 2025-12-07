import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const KidneyStonesInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of kidney stone surgery in ${city}?`,
            answer:
                `The cost of kidney stone surgery in ${city} ranges from ₹30,000 to ₹1,05,000, depending on the stone size, location, and procedure type (RIRS, PCNL, ESWL, or URSL).`,
        },
        {
            id: "two",
            question: `Does insurance cover kidney stone treatment in ${city}?`,
            answer:
                "Yes, most health insurance policies cover kidney stone removal surgeries as they are medically necessary. PureCheckup offers cashless insurance support to make the process hassle-free.",
        },
        {
            id: "three",
            question: `Which is the best hospital for kidney stone treatment in ${city}?`,
            answer:
                `PureCheckup partners with the best urology hospitals in ${city}, equipped with advanced laser technology and expert surgeons for safe and effective stone removal.`,
        },
        {
            id: "four",
            question: "How to book a kidney stone consultation with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking an appointment is easy:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>
                            Visit{" "}
                            <a
                                href="https://purecheckup.com/treatment/kidney-stones-treatment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                purecheckup.com/treatment/kidney-stones-treatment
                            </a>
                        </li>
                        <li>Fill out the form or call our 24×7 helpline</li>
                        <li>Get a free consultation with a top urologist near you</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What are the different types of kidney stone surgeries?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Common procedures include:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <strong>RIRS (Retrograde Intrarenal Surgery):</strong> No-cut laser surgery for kidney stones.
                        </li>
                        <li>
                            <strong>PCNL (Percutaneous Nephrolithotomy):</strong> For large kidney stones.
                        </li>
                        <li>
                            <strong>URSL (Ureteroscopic Lithotripsy):</strong> For stones in the ureter.
                        </li>
                        <li>
                            <strong>ESWL (Shock Wave Lithotripsy):</strong> Non-invasive shock waves to break stones.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "six",
            question: "Is kidney stone removal surgery painful?",
            answer:
                "Modern laser surgeries like RIRS and URSL are minimally invasive and performed under anesthesia, ensuring a painless experience and quick recovery.",
        },
        {
            id: "seven",
            question: "How long does it take to recover from kidney stone surgery?",
            answer:
                "Most patients are discharged within 24 hours and can resume normal activities in 2–3 days. Complete recovery takes about a week.",
        },
        {
            id: "eight",
            question: "Can kidney stones come back after surgery?",
            answer:
                "There is a chance of recurrence if proper hydration and dietary habits are not followed. Our doctors provide a personalized diet plan to prevent future stones.",
        },
        {
            id: "nine",
            question: `Why choose PureCheckup for kidney stone treatment in ${city}?`,
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Expert urologists with 10+ years of experience</li>
                        <li>Advanced laser treatments (RIRS, URSL, ESWL)</li>
                        <li>Cashless insurance and 0% EMI options</li>
                        <li>Free doctor consultation and follow-up</li>
                        <li>24×7 patient care support</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "ten",
            question: "What are the symptoms of kidney stones?",
            answer:
                "Common symptoms include severe pain in the back or side, pain while urinating, blood in urine, nausea, and frequent urge to urinate.",
        },
    ];

    const kidneyStoneData = {
        title1: "Kidney Stone",
        title2: "Treatment & Information",
        description:
            "Kidney stones (renal calculi) are hard deposits made of minerals and salts that form inside your kidneys. They can cause severe pain, urinary tract infections, and kidney damage if left untreated. At PureCheckup, we offer advanced laser treatments like RIRS, URSL, PCNL, and ESWL for painless and effective stone removal.",

        tabsData: [
            {
                value: "what-is-kidney-stone",
                label: "What is Kidney Stone?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div>
                        <p>
                            Kidney stones are hard deposits of minerals and acid salts that stick together in concentrated urine. They can be painful when passing through the urinary tract but usually cause no permanent damage if treated early.
                        </p>
                        <p className="mt-2">
                            Stones can vary in size from a grain of sand to a golf ball. While small stones may pass on their own, larger stones often require medical intervention.
                        </p>
                        <p className="mt-2">
                            PureCheckup provides the latest minimally invasive procedures to remove kidney stones safely and effectively.
                        </p>
                    </div>
                ),
            },
            {
                value: "types",
                label: "Types",
                icon: <Syringe className="text-green-600" />,
                content: (
                    <div className="space-y-4">
                        <p>
                            The type of treatment depends on the size, location, and type of stone:
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Calcium Stones:</strong> Most common type, usually in the form of calcium oxalate.
                            </li>
                            <li>
                                <strong>Struvite Stones:</strong> Form in response to a urinary tract infection.
                            </li>
                            <li>
                                <strong>Uric Acid Stones:</strong> Form in people who don't drink enough fluids or eat a high-protein diet.
                            </li>
                            <li>
                                <strong>Cystine Stones:</strong> Form in people with a hereditary disorder.
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "causes",
                label: "Causes",
                icon: <Pill className="text-purple-600" />,
                content: (
                    <div>
                        <p className="mb-4">
                            Several factors can increase the risk of developing kidney stones:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Dehydration (not drinking enough water)</li>
                            <li>Diet high in protein, salt, and sugar</li>
                            <li>Obesity</li>
                            <li>Digestive diseases and surgery</li>
                            <li>Family or personal history of kidney stones</li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "symptoms",
                label: "Symptoms",
                icon: <HeartPulse className="text-pink-600" />,
                content: (
                    <div>
                        <p className="mb-4">
                            Signs that you might have a kidney stone include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Severe, sharp pain in the side and back, below the ribs</li>
                            <li>Pain that radiates to the lower abdomen and groin</li>
                            <li>Pain that comes in waves and fluctuates in intensity</li>
                            <li>Pain or burning sensation while urinating</li>
                            <li>Pink, red, or brown urine</li>
                            <li>Nausea and vomiting</li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "benefits",
                label: "Benefit",
                icon: <Stethoscope className="text-red-600" />,
                content: (
                    <div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Painless and scarless removal of stones</li>
                            <li>Quick relief from severe pain</li>
                            <li>Preservation of kidney function</li>
                            <li>Minimal hospital stay (often same-day discharge)</li>
                            <li>Faster recovery compared to open surgery</li>
                            <li>Reduced risk of infection and complications</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Urologists – PureCheckup Healthcare",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    PureCheckup connects you with top urologists and kidney stone specialists in your city. Our partner hospitals are equipped with state-of-the-art technology for accurate diagnosis and effective treatment.
                </p>
                <p>
                    We ensure a seamless patient experience with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Free consultation and second opinion</li>
                    <li>Transparent pricing and cost estimates</li>
                    <li>Insurance claim assistance</li>
                    <li>Dedicated care coordinator</li>
                </ul>
            </div>
        ),
        doctorLink: "https://purecheckup.com",
    };

    const benefits = [
        {
            icon: Scissors,
            title: "Advanced Laser Treatment",
            description: "Precision removal with no cuts.",
        },
        {
            icon: Clock,
            title: "24-Hour Discharge",
            description: "Quick recovery and return to work.",
        },
        {
            icon: ShieldCheck,
            title: "Insurance Support",
            description: "Hassle-free cashless claims.",
        },
        {
            icon: Headphones,
            title: "Expert Care",
            description: "Experienced urologists and support staff.",
        },
    ];

    const treatmentOptions = [
        {
            id: 1,
            icon: <Scissors className="w-7 h-7 text-blue-600" />,
            title: "RIRS (Laser Surgery)",
            points: [
                "No cuts, no stitches",
                "Best for kidney stones < 20mm",
                "Next-day discharge",
            ],
            highlight: false,
        },
        {
            id: 2,
            icon: <Leaf className="w-7 h-7 text-green-600" />,
            title: "ESWL (Shock Wave)",
            points: ["Non-invasive", "Breaks stones into sand", "No hospitalization"],
            highlight: false,
        },
        {
            id: 3,
            icon: <Hospital className="w-7 h-7 text-purple-600" />,
            title: "PCNL (Keyhole Surgery)",
            points: ["For large stones > 20mm", "Small incision", "High success rate"],
            highlight: false,
        },
    ];

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ConditionHeroSection
                title={`Kidney Stone Treatment in ${city} – Advanced Laser & Shockwave Therapy`}
                description={`Painless, scarless kidney stone removal in ${city} with same-day discharge and insurance support.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["✅ NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
                cities={constantData.cities}
                selectedCity={city}
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
                title2="Kidney Stone?"
                description={kidneyStoneData.description}
                tabsData={kidneyStoneData.tabsData}
                expertHeading={kidneyStoneData.doctorName}
                doctorName=""
                doctorDescription={kidneyStoneData.doctorDescription}
                doctorLink="https://purecheckup.com"
                ctaText="Book Free Appointment"
            />

            <section className="py-20 px-4">
                <Heading text1="Treatment" text2="Options" className="mb-10" />
                <ConditionTreatmentOptions treatmentOptions={treatmentOptions} />
            </section>

            <section className="py-20 px-4">
                <Heading text1="Frequently" text2={`Asked Questions in ${city}`} className="mb-10" />
                <FAQ faqs={faqs} />
            </section>

            <section className="px-4">
                <CtaBanner title="Book Your Appointment" subtitle="Book your appointment now" buttonText="Book Appointment" phone="+91 9211930749" />
            </section>

            <section className="py-20 px-4 max-w-3xl mx-auto">
                <ConditionTreatmentForm cities={constantData.cities} selectedCity={city} />
            </section>

            <section className="py-20">
                <ConditionCityWiseTreatment
                    treatmentName="Kidney Stone"
                    costSubtitle={`Pricing varies by stone size, procedure, city (${city}), and insurance.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Size and location of the stone",
                        "Type of procedure (RIRS, PCNL, ESWL)",
                        "Hospital category and room choice",
                        "Stent requirement (if any)",
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

export default KidneyStonesInSpecialCity;
