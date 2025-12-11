import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar, TreatmentBenefits, TreatmentOptionsCityWise } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";
import { Zap, Crosshair, Layers, Droplet, ToolCase, RefreshCw, Heart, Database, Clipboard, } from "lucide-react";


const FissureInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const seoData = {
        title: `Anal Fissure Surgery in ${city} Call 9211930749 | PureCheckup`,
        description:
            `Trusted Anal Fissure Treatment in ${city} by expert surgeons. Safe, painless & effective care. No-Cost EMI. Book free consultation at PureCheckup`,
        keywords:
            `Anal Fissure Treatment in ${city}, Fissure Surgery in ${city}, Laser Fissure Treatment in ${city}, Best Fissure Doctor in ${city}, Fissure Specialist in ${city}, Fissure Hospital near me, Fissure Treatment Hospital ${city}, PureCheckup ${city}, Painless Fissure Treatment ${city}`,
        canonical: `https://purecheckup.com/treatment/fissure/${city}`,
    }

    const faqs = [
        {
            id: "one",
            question: `Which is the best hospital for anal fissure treatment in ${city}?`,
            answer: `PureCheckup partners with top NABH-accredited hospitals in ${city} to offer painless fissure surgery and advanced laser-based treatments.`,
        },
        {
            id: "two",
            question: "How is an anal fissure treated at PureCheckup?",
            answer:
                "PureCheckup provides Laser Treatment, Botox Therapy, and LIS Surgery to ensure effective and fast recovery for fissure patients.",
        },
        {
            id: "three",
            question: `Who are the best doctors for fissure treatment in ${city}?`,
            answer: `PureCheckup’s experienced proctologists and colorectal surgeons specialize in fissure care across ${city}.`,
        },
        {
            id: "four",
            question: `Is laser fissure treatment available in ${city}?`,
            answer: `Yes, PureCheckup offers Laser Fissure Treatment in ${city} with minimal downtime, reduced pain, and faster healing.`,
        },
        {
            id: "five",
            question: "Can a fissure heal without surgery?",
            answer:
                "Yes, mild fissures can heal with medicines, hydration, and dietary changes. However, chronic fissures usually require medical procedures such as Laser or LIS.",
        },
        {
            id: "six",
            question: "How long does fissure surgery take to heal?",
            answer:
                "Laser and LIS surgeries typically heal within 3–10 days depending on the severity and patient health.",
        },
        {
            id: "seven",
            question: "Is fissure treatment painful?",
            answer:
                "No, modern fissure treatments like Laser Surgery and Botox Therapy are nearly painless and highly safe.",
        },
        {
            id: "eight",
            question: `What is the cost of fissure treatment in ${city}?`,
            answer:
                "PureCheckup offers affordable fissure treatment in India with 0% EMI options, insurance assistance, and transparent pricing.",
        },
        {
            id: "nine",
            question: `Does PureCheckup offer same-day consultation in ${city}?`,
            answer:
                `Yes, PureCheckup provides free same-day consultation with fissure specialists across ${city}.`,
        },
        {
            id: "ten",
            question: `How can I book a free consultation in ${city}?`,
            answer:
                "Simply call 9211930749 or visit PureCheckup.com to book your appointment instantly.",
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

    const treatments = [
        {
            id: 1,
            title: "Laser Fissure Surgery",
            description:
                "Advanced laser technique for fissure removal with minimal pain and bleeding.",
            downtime: "1–3 days",
            highlight: true,
            icon: <Zap className="w-6 h-6 text-red-600" />,
        },
        {
            id: 2,
            title: "Lateral Internal Sphincterotomy (LIS)",
            description:
                "A precise surgical method to relax anal muscles and promote quick healing for chronic fissures.",
            downtime: "1–2 weeks",
            icon: <Scissors className="w-6 h-6 text-blue-600" />,
        },
        {
            id: 3,
            title: "Fissurectomy Surgery",
            description:
                "Excision of the fissure tissue to allow regeneration of healthy tissue and relieve discomfort.",
            downtime: "2–4 weeks",
            icon: <Crosshair className="w-6 h-6 text-purple-600" />,
        },
        {
            id: 4,
            title: "Laser-Assisted Fissurectomy",
            description:
                "Combines fissure removal with laser sealing for reduced recurrence and faster healing.",
            downtime: "2–5 days",
            icon: <Layers className="w-6 h-6 text-indigo-600" />,
        },
        {
            id: 5,
            title: "Botox Injection Procedure",
            description:
                "Minimally invasive technique using Botox to relax anal muscles and promote healing without major surgery.",
            downtime: "1–3 days",
            icon: <Droplet className="w-6 h-6 text-pink-600" />,
        },
        {
            id: 6,
            title: "Combined Laser + LIS Treatment",
            description:
                "For chronic or complex fissures, combining laser precision with sphincterotomy provides lasting relief.",
            downtime: "3–5 days",
            icon: <ToolCase className="w-6 h-6 text-yellow-600" />,
        },
        {
            id: 7,
            title: "Anal Dilatation (Minimally Invasive Surgery)",
            description:
                "Gentle widening of the anal canal under anesthesia to relieve spasm and pain.",
            downtime: "2–3 days",
            icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
        },
        {
            id: 8,
            title: "Advanced Laser Fissure Repair",
            description:
                "Modern-day care laser surgery with almost no blood loss and same-day discharge.",
            downtime: "1–2 days",
            icon: <Heart className="w-6 h-6 text-red-500" />,
        },
        {
            id: 9,
            title: "Reconstructive Anal Surgery (for Chronic Cases)",
            description:
                "Performed for severe fissures with scar tissue or complications from previous surgery.",
            downtime: "2–4 weeks",
            icon: <Database className="w-6 h-6 text-slate-600" />,
        },
        {
            id: 10,
            title: "Post-Surgical Care & Follow-up",
            description:
                "Includes pain management, wound healing support, and recurrence prevention guidance.",
            downtime: "Ongoing",
            icon: <Clipboard className="w-6 h-6 text-neutral-700" />,
        },
    ];

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <SEO title={seoData.title} description={seoData.description} keywords={seoData.keywords} canonical={seoData.canonical} />
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
                <Heading text1="Treatment Options Available in" text2={city} className="mb-10" />
                <TreatmentOptionsCityWise treatments={treatments} />
                {/* <ConditionTreatmentOptions treatmentOptions={treatmentOptions} /> */}
            </section>

            <section className="py-20 px-4">
                <Heading text1="Top 10 FAQs on Anal Fissure Treatment in" text2={city} className="mb-10" />
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
