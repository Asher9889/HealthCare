import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const FissureInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of fissure surgery in ${city}?`,
            answer:
                `The cost varies based on the procedure type and hospital in ${city}. Laser fissure surgery typically ranges from ₹55,000 to ₹91,800, while open surgery costs between ₹30,000 and ₹45,000.`,
        },
        {
            id: "two",
            question: "Does insurance cover fissure surgery treatment?",
            answer:
                "Yes, most health insurance policies in India cover fissure surgery, including pre- and post-hospitalization expenses. PureCheckup assists patients with insurance verification and cashless hospitalization.",
        },
        {
            id: "three",
            question:
                `Which healthcare service provider offers the best fissure treatment in ${city}?`,
            answer:
                `PureCheckup collaborates with ${city}’s leading hospitals and experienced proctologists to provide affordable, high-quality fissure treatment with complete care support.`,
        },
        {
            id: "four",
            question: "How to book fissure surgery with PureCheckup?",
            answer: (
                <div className="space-y-2 text-(--text-primary) font-medium">
                    <p>Booking your fissure surgery with PureCheckup is quick and easy:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>Visit our official website – PureCheckup.com</li>
                        <li>Fill out the consultation or callback form</li>
                        <li>Our care team will contact you to schedule an appointment</li>
                        <li>We assist with consultation, insurance, and hospital coordination</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for an anal fissure?",
            answer:
                "For chronic fissures, advanced options like Laser Fissurectomy and Lateral Internal Sphincterotomy (LIS) are commonly recommended. PureCheckup doctors tailor the treatment plan based on your diagnosis.",
        },
        {
            id: "six",
            question: "What are the first signs of a fissure?",
            answer:
                "Common early signs include sharp pain during bowel movements, bright red blood on toilet paper, and visible cracks or tears near the anus.",
        },
        {
            id: "seven",
            question: "How painful is fissure surgery?",
            answer:
                "Modern fissure surgeries, especially laser-based ones, are minimally invasive and nearly painless. Patients usually experience only mild discomfort with faster recovery times.",
        },
        {
            id: "eight",
            question: "Is hospitalization required for fissure surgery?",
            answer:
                "Most fissure surgeries are daycare procedures, meaning you can go home the same day after the surgery, with minimal downtime.",
        },
        {
            id: "nine",
            question: "How long does it take to recover from fissure surgery?",
            answer:
                "Recovery varies depending on the procedure. Laser surgery patients often resume daily activities within 1–2 weeks, while recovery from open procedures may take slightly longer.",
        },
        {
            id: "ten",
            question: "Are there any dietary restrictions after fissure surgery?",
            answer: (
                <div className="space-y-2 text-(--text-primary) font-medium">
                    <p>
                        Yes, maintaining a high-fiber diet and good hydration is essential for smooth
                        recovery. Here are the general recommendations:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Eat fiber-rich foods such as fruits, vegetables, and whole grains</li>
                        <li>Drink plenty of water to prevent constipation</li>
                        <li>Avoid spicy, oily, or heavily processed foods</li>
                        <li>Do not strain during bowel movements</li>
                    </ul>
                </div>
            ),
        },
    ];

    const analFissureData = {
        title1: "Anal Fissure Surgery ?",
        title2: "Fast Relief with Advanced Treatment Options",
        description:
            "An anal fissure is a small tear or crack in the lining of the anus that causes sharp pain and bleeding during bowel movements. Chronic fissures often require surgical treatment for lasting relief and faster healing.",

        tabsData: [
            {
                value: "what-is-anal-fissure",
                label: "What is Anal Fissure?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div className="space-y-3">
                        <p>
                            An anal fissure is a small tear or crack in the skin lining the anus, often
                            causing sharp pain during or after bowel movements. These fissures can be
                            acute (lasting less than six weeks) or chronic (persisting longer than six
                            weeks).
                        </p>
                        <p>Common symptoms include:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Intense pain during bowel movements</li>
                            <li>Bright red blood on toilet paper or stool</li>
                            <li>A visible tear or crack near the anal opening</li>
                            <li>A small lump or skin tag near the fissure</li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "types",
                label: "Types of Surgery",
                icon: <Syringe className="text-green-600" />,
                content: (
                    <div className="space-y-3">
                        <p>
                            India offers several advanced and minimally invasive surgical options for
                            treating anal fissures:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Laser Fissurectomy:</strong> Uses precision laser technology for
                                minimal tissue damage, faster healing, and reduced post-surgery pain.
                            </li>
                            <li>
                                <strong>Lateral Internal Sphincterotomy (LIS):</strong> Gold-standard
                                procedure for chronic fissures involving a small cut in the sphincter
                                muscle to relieve spasms and promote healing.
                            </li>
                            <li>
                                <strong>Fissurectomy with Anoplasty:</strong> Excision of the fissure and
                                scar tissue followed by reconstruction using healthy tissue – ideal for
                                severe or recurrent cases.
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
                    <div className="space-y-3">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Passing large or hard stools</li>
                            <li>Chronic constipation or diarrhea</li>
                            <li>Childbirth or anal intercourse</li>
                            <li>Inflammatory bowel diseases</li>
                            <li>Poor blood flow to the anal region</li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "symptoms",
                label: "Symptoms / Signs",
                icon: <HeartPulse className="text-pink-600" />,
                content: (
                    <div className="space-y-3">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Sharp pain during bowel movements</li>
                            <li>Pain that continues for hours after defecation</li>
                            <li>Bright red blood on stool or toilet paper</li>
                            <li>Visible tear or crack near the anus</li>
                            <li>Small skin tag near the fissure</li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "benefits",
                label: "Benefits of Surgery",
                icon: <Stethoscope className="text-red-600" />,
                content: (
                    <div className="space-y-3">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Rapid and long-lasting pain relief</li>
                            <li>High success rate in healing chronic fissures</li>
                            <li>Minimally invasive with fast recovery</li>
                            <li>Reduced recurrence risk</li>
                            <li>Safe and effective under expert supervision</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Fissure Surgery – PureCheckup",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    At <strong>PureCheckup</strong>, we specialize in delivering expert fissure surgery
                    with world-class precision and care. Our mission is to provide fast, safe, and
                    lasting relief through advanced surgical techniques.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Advanced procedures: Laser Fissurectomy, LIS, and Anoplasty</li>
                    <li>Minimally invasive methods for faster healing</li>
                    <li>Experienced proctologists and specialized surgeons</li>
                    <li>Affordable, transparent pricing and insurance support</li>
                    <li>Comprehensive post-operative care and recovery support</li>
                </ul>
            </div>
        ),
        doctorLink: "https://purecheckup.com/treatment/anal-fissure-surgery",
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
            title: "Advanced Fissure Treatment (Recommended)",
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

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ConditionHeroSection
                title={`Expert Anal Fissure Treatment & Surgery in ${city} – Safe, Advanced & Affordable`}
                description={`Pain-free, advanced laser treatment in ${city} with same-day discharge and full insurance support.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["🏥 NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
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
                title2={analFissureData.title1}
                description={analFissureData.description}
                tabsData={analFissureData.tabsData}
                expertHeading={analFissureData.doctorName}
                doctorName=""
                doctorDescription={analFissureData.doctorDescription}
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
                    treatmentName="Fissure Treatment"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Fissure Treatment",
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

export default FissureInSpecialCity;
