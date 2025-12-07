import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const eswlData = {
    title1: "ESWL Treatment ?",
    title2: "Extracorporeal Shock Wave Lithotripsy",
    description:
        "Extracorporeal Shock Wave Lithotripsy (ESWL) is a non-invasive kidney stone treatment that uses high-energy shock waves to break stones into tiny fragments. These fragments pass naturally through the urinary tract, eliminating the need for surgery. At PureCheckup, we offer expert ESWL treatment using cutting-edge technology and experienced specialists, ensuring minimal pain and faster recovery.",

    tabsData: [
        {
            value: "what-is-eswl",
            label: "What is ESWL?",
            icon: <Activity className="text-blue-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        Extracorporeal Shock Wave Lithotripsy (ESWL) is a modern, non-surgical
                        treatment used to break kidney stones into smaller fragments using
                        focused sound waves. These fragments are then passed out naturally
                        through urine.
                    </p>
                    <p>
                        ESWL is one of the safest and most effective methods for removing small
                        to medium-sized kidney stones without the need for cuts or invasive
                        procedures.
                    </p>
                    <p>
                        At PureCheckup.com, our ESWL specialists use advanced shockwave
                        technology to ensure precise targeting, minimal discomfort, and a quick
                        return to normal activities.
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
                    <p>ESWL can be performed using different imaging and targeting techniques:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Standard ESWL:</strong> Ideal for small to medium-sized kidney
                            stones, widely used for its effectiveness and safety.
                        </li>
                        <li>
                            <strong>Ultrasound-Guided ESWL:</strong> Uses real-time ultrasound
                            imaging to accurately locate and fragment stones with high precision.
                        </li>
                        <li>
                            <strong>X-Ray Guided ESWL:</strong> Employs fluoroscopy to visualize
                            stones and break them into smaller pieces, suitable for complex or deep
                            stones.
                        </li>
                    </ul>
                    <p>
                        Our advanced imaging and shockwave systems at PureCheckup enhance accuracy
                        and ensure minimal side effects during the procedure.
                    </p>
                </div>
            ),
        },
        {
            value: "causes",
            label: "When is ESWL Recommended?",
            icon: <Pill className="text-purple-600" />,
            content: (
                <div className="space-y-3">
                    <p>
                        ESWL is recommended for patients when kidney stones cause the following
                        conditions or symptoms:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Severe pain in the back or sides</li>
                        <li>Blood in urine (hematuria)</li>
                        <li>Frequent urinary tract infections</li>
                        <li>Obstruction in urinary flow</li>
                    </ul>
                    <p>
                        It’s typically advised when stones are too large to pass naturally but small
                        enough to be treated without surgery.
                    </p>
                </div>
            ),
        },
        {
            value: "symptoms",
            label: "Symptoms Indicating Need for ESWL",
            icon: <HeartPulse className="text-pink-600" />,
            content: (
                <div className="space-y-3">
                    <p>Patients may require ESWL if they experience:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Intense lower back or abdominal pain</li>
                        <li>Painful urination</li>
                        <li>Nausea and vomiting</li>
                        <li>Urgent or blocked urination</li>
                    </ul>
                    <p>
                        Persistent pain or urinary issues should not be ignored — consult a
                        PureCheckup urologist to determine if ESWL is the right treatment for you.
                    </p>
                </div>
            ),
        },
        {
            value: "benefits",
            label: "Benefits of ESWL",
            icon: <Stethoscope className="text-red-600" />,
            content: (
                <div className="space-y-3">
                    <p>ESWL offers multiple advantages for patients seeking non-invasive treatment:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>No surgical cuts or stitches required</li>
                        <li>Quick recovery with minimal downtime</li>
                        <li>Short hospital stay or same-day discharge</li>
                        <li>High success rate in kidney stone removal</li>
                        <li>Ability to treat multiple stones simultaneously</li>
                        <li>Safe for patients with various health conditions</li>
                    </ul>
                    <p>
                        PureCheckup’s ESWL specialists ensure a pain-free experience, fast healing,
                        and complete medical support throughout your recovery.
                    </p>
                </div>
            ),
        },
    ],

    doctorName: "Expert ESWL Specialists – PureCheckup Healthcare",
    doctorDescription: (
        <div className="space-y-4">
            <p>
                At PureCheckup.com, we provide expert ESWL treatment using advanced
                shockwave machines and experienced urologists across India.
            </p>
            <p>
                Our network includes top NABH-accredited hospitals offering affordable,
                insurance-covered ESWL procedures with superior results.
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>Latest-generation ESWL machines for precise stone targeting</li>
                <li>Zero incision and minimal pain</li>
                <li>Highly trained urologists and medical staff</li>
                <li>Cashless insurance and EMI options</li>
                <li>Available across major Indian cities — Delhi, Mumbai, Jaipur, Bangalore, and more</li>
            </ul>
            <p>
                Book your ESWL surgery at PureCheckup and experience safe, painless, and
                effective kidney stone removal under expert care.
            </p>
        </div>
    ),
    doctorLink: "https://purecheckup.com",
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
        title: "Advanced ESWL Surgery (Recommended)",
        points: [
            "Minimally invasive, less pain and bleeding",
            "Safe and effective with minimal scarring",
            "Quick recovery with same-day discharge",
        ],
        highlight: false,
    },
    {
        id: 2,
        icon: <Leaf className="w-7 h-7 text-green-600" />,
        title: "Non-Surgical Treatments",
        points: ["Medicines", "Lifestyle and support"],
        highlight: false,
    },
    {
        id: 3,
        icon: <Hospital className="w-7 h-7 text-purple-600" />,
        title: "Conventional (Open) Hydrocelectomy",
        points: ["Recommended based on case severity"],
        highlight: false,
    },
];

const ESWLInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of ESWL treatment surgery in ${city}?`,
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        The cost of ESWL surgery in {city} varies depending on the hospital, type of
                        ESWL procedure, and city. On average, it ranges from ₹40,000 to ₹1,50,000.
                    </p>
                    <p>
                        <strong>PureCheckup.com</strong> provides transparent pricing and helps you
                        choose the most affordable and effective treatment option.
                    </p>
                </div>
            ),
        },
        {
            id: "two",
            question: "Does insurance cover ESWL treatment surgery?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        Yes, most major insurance plans — including private and government schemes —
                        cover ESWL treatment.
                    </p>
                    <p>
                        <strong>PureCheckup.com</strong> assists in verifying your insurance coverage
                        and supports cashless claim processing for a hassle-free experience.
                    </p>
                </div>
            ),
        },
        {
            id: "three",
            question: `Which healthcare provider offers the best ESWL treatment at the best price in ${city}?`,
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        <strong>PureCheckup.com</strong> connects you with top kidney specialists and
                        NABH-accredited hospitals across {city}, offering high-quality ESWL treatments
                        at affordable prices.
                    </p>
                    <p>
                        Our network ensures expert care, advanced technology, and patient-focused
                        service in every city.
                    </p>
                </div>
            ),
        },
        {
            id: "four",
            question: "How can I book an ESWL treatment surgery with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <ul className="list-decimal list-inside space-y-1">
                        <li>
                            Visit{" "}
                            <a
                                href="https://purecheckup.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                PureCheckup.com
                            </a>
                        </li>
                        <li>Select <strong>ESWL Treatment</strong> and your preferred hospital</li>
                        <li>Schedule an appointment or request a free consultation</li>
                        <li>
                            For instant help, call our 24×7 helpline at{" "}
                            <strong>+91-9211930749</strong>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for kidney stones: ESWL or surgery?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        For small to medium-sized kidney stones, <strong>ESWL</strong> is preferred due
                        to its non-invasive nature, quick recovery, and high success rate.
                    </p>
                    <p>
                        Surgery is recommended only for larger or complex stones. Specialists at{" "}
                        <strong>PureCheckup.com</strong> evaluate each case to recommend the best
                        option.
                    </p>
                </div>
            ),
        },
        {
            id: "six",
            question: "What are the first signs indicating the need for ESWL treatment?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        Common early signs include intense lower back or abdominal pain, blood in urine,
                        urinary urgency, and nausea or vomiting.
                    </p>
                    <p>
                        If you experience these symptoms, consult a urologist at{" "}
                        <strong>PureCheckup.com</strong> immediately for diagnosis and treatment.
                    </p>
                </div>
            ),
        },
        {
            id: "seven",
            question: "How painful is ESWL treatment surgery?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        ESWL is minimally painful and performed under mild sedation or local anesthesia.
                    </p>
                    <p>
                        Most patients experience only mild discomfort during the procedure and slight
                        soreness afterward, which resolves quickly.
                    </p>
                </div>
            ),
        },
        {
            id: "eight",
            question: "What is the recovery time after ESWL treatment?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        Most patients recover within 1–3 days and can resume normal activities soon
                        after the procedure.
                    </p>
                    <p>
                        Complete stone passage may take a few weeks. Regular follow-ups at{" "}
                        <strong>PureCheckup.com</strong> ensure smooth recovery.
                    </p>
                </div>
            ),
        },
        {
            id: "nine",
            question: "Are there any side effects of ESWL treatment?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        Side effects are usually mild and temporary, such as minor pain, blood in urine,
                        or bruising at the treatment site.
                    </p>
                    <p>
                        Serious complications are rare when ESWL is performed by experienced specialists
                        at <strong>PureCheckup.com</strong>.
                    </p>
                </div>
            ),
        },
        {
            id: "ten",
            question: "Can ESWL treatment prevent future kidney stones?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>
                        ESWL effectively removes existing kidney stones but does not prevent new ones
                        from forming.
                    </p>
                    <p>
                        Doctors at <strong>PureCheckup.com</strong> provide personalized diet and
                        lifestyle guidance to help reduce recurrence risk.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <ConditionHeroSection
                title={`Advanced ESWL Treatment in ${city} – Expert Kidney Stone Removal Surgery`}
                description={`Minimally invasive hydrocelectomy in ${city} with faster recovery, same-day discharge, and full insurance support.`}
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
                title2={eswlData.title1}
                description={eswlData.description}
                tabsData={eswlData.tabsData}
                expertHeading={`Expert ESWL Treatment Surgery in ${city} – PureCheckup`}
                doctorName=""
                doctorDescription={eswlData.doctorDescription}
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
                    treatmentName={`ESWL in ${city}`}
                    costSubtitle="Pricing varies by case severity, city, and insurance coverage."
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "City and hospital location",
                        "Hospital category and room",
                        "Insurance coverage and approvals",
                        "Type of surgery (open or laparoscopic)",
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

export default ESWLInSpecialCity;
