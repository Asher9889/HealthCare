import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar, TreatmentBenefits, TreatmentCard } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const GallstonesInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of gallstone surgery in ${city}?`,
            answer: `The cost of gallstone surgery in ${city} varies depending on the hospital, surgical method, surgeon’s experience, and insurance coverage. PureCheckup helps you find the most affordable and transparent treatment options.`,
        },
        {
            id: "two",
            question: `Is laparoscopic gallstone surgery painful?`,
            answer:
                "No. Laparoscopic gallstone surgery is a minimally invasive procedure performed under anesthesia, ensuring minimal pain and faster recovery compared to traditional open surgery.",
        },
        {
            id: "three",
            question: "How long does it take to recover after gallstone surgery?",
            answer:
                "Most patients can resume light activities within a few days and fully recover within a week, based on their doctor’s guidance.",
        },
        {
            id: "four",
            question: "Can gallstones be treated without surgery?",
            answer:
                "In mild cases, medications or lifestyle changes may help, but surgery remains the most effective and permanent solution to prevent repeated gallstone attacks.",
        },
        {
            id: "five",
            question: `Does PureCheckup provide insurance support in ${city}?`,
            answer: `Yes, PureCheckup offers cashless insurance assistance and No-Cost EMI options at trusted hospitals across ${city}.`,
        },
        {
            id: "six",
            question: "How do I know if I need gallstone surgery?",
            answer:
                "You may need surgery if you experience intense abdominal pain, nausea, or vomiting. An ultrasound scan or medical evaluation will confirm whether surgery is required.",
        },
        {
            id: "seven",
            question: "Is gallbladder removal safe for long-term health?",
            answer:
                "Yes. Gallbladder removal (cholecystectomy) is a very safe and common procedure. After recovery, your body digests food normally without long-term issues.",
        },
        {
            id: "eight",
            question: "How long does gallstone surgery take?",
            answer:
                "Laparoscopic gallstone surgery usually takes less than an hour. Most patients return home the same day or the following day.",
        },
        {
            id: "nine",
            question: "What are the benefits of laparoscopic gallstone surgery?",
            answer:
                "It offers smaller incisions, less pain, faster healing, minimal scarring, and shorter hospital stays compared to open surgery.",
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for gallstone treatment in ${city}?`,
            answer: `PureCheckup provides expert surgeons, modern hospitals, transparent processes, insurance assistance, and personalized support — ensuring a smooth and stress-free treatment journey in ${city}.`,
        },
    ];


    const gallstoneData = {
        title1: "Gallstone",
        title2: "Treatment & Information",
        description:
            "Gallstones are hardened deposits of digestive fluid that form in the gallbladder, a small organ located beneath the liver. They can range in size and may block bile ducts, causing severe pain, nausea, or infection. At PureCheckup, we specialize in advanced laparoscopic and laser gallstone removal surgeries for minimal pain, faster recovery, and expert care.",

        tabsData: [
            {
                value: "what-is-gallstone",
                label: "What Is a Gallstone?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div>
                        <p>
                            Gallstones are hardened deposits of digestive fluid that form in your gallbladder — a small organ located beneath your liver. These stones can vary in size from tiny grains to large stones and can block bile ducts, leading to severe pain, nausea, or infection.
                        </p>
                        <p className="mt-2">
                            At PureCheckup, we offer advanced laparoscopic and laser gallstone removal surgery with minimal pain, faster recovery, and expert surgeons across India.
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
                            There are three main types of gallstone surgeries commonly performed in India depending on the severity, number, and size of gallstones:
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Laparoscopic Cholecystectomy (Keyhole Surgery):</strong> The most common and minimally invasive procedure for gallbladder removal. It involves small incisions through which a laparoscope and surgical tools are inserted to safely remove the gallbladder.
                                <br />
                                <span className="block mt-1">Benefits: Minimal pain and scarring, faster recovery (2–3 days), and same-day discharge.</span>
                            </li>

                            <li>
                                <strong>Open Cholecystectomy:</strong> Recommended in complex or advanced cases where gallstones are large or the gallbladder is severely inflamed. The surgeon makes a larger abdominal incision to remove the gallbladder directly.
                                <br />
                                <span className="block mt-1">Benefits: Suitable for complicated cases, performed under full medical supervision.</span>
                            </li>

                            <li>
                                <strong>Laser Surgery for Gallstones:</strong> An advanced and modern procedure that uses laser technology to remove the gallbladder or dissolve stones safely. It ensures minimal bleeding, no stitches, and rapid healing.
                                <br />
                                <span className="block mt-1">
                                    Benefits: No visible scars, minimal pain, 100% safe, and same-day discharge.
                                </span>
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
                            Gallstones can form due to several reasons, including:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>High cholesterol or bilirubin levels in bile</li>
                            <li>Obesity or rapid weight loss</li>
                            <li>Diabetes or liver disorders</li>
                            <li>Sedentary lifestyle and unhealthy diet</li>
                            <li>Genetic factors and hormonal imbalance (especially in women)</li>
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
                        <p className="mb-4">Common symptoms include:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Sudden and severe pain in the upper right abdomen</li>
                            <li>Back pain or shoulder pain</li>
                            <li>Nausea, vomiting, or bloating after meals</li>
                            <li>Indigestion or jaundice (in advanced cases)</li>
                        </ul>
                        <p className="mt-2">
                            If you experience these symptoms, book a free consultation with a PureCheckup expert for diagnosis and treatment.
                        </p>
                    </div>
                ),
            },
            {
                value: "benefits",
                label: "Benefits",
                icon: <Stethoscope className="text-red-600" />,
                content: (
                    <div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Pain-Free & Safe: Advanced laparoscopic or laser techniques ensure minimal discomfort.</li>
                            <li>Quick Recovery: Most patients resume normal activities within 2–3 days.</li>
                            <li>No Recurrence: Permanent solution by removing the gallbladder.</li>
                            <li>Same-Day Discharge: No long hospital stay required.</li>
                            <li>Insurance Support: End-to-end claim assistance for patients.</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Gallstone Surgeon – PureCheckup Healthcare",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    At PureCheckup, we partner with India’s top laparoscopic and laser surgeons to deliver affordable and high-quality gallstone treatment. Our dedicated care team ensures a smooth experience from consultation to recovery.
                </p>
                <p>Our services include:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Free doctor consultation</li>
                    <li>Insurance assistance</li>
                    <li>Same-day admission and discharge</li>
                    <li>Post-surgery follow-up</li>
                </ul>
                <p>
                    Choose PureCheckup for a safe, cost-effective, and painless gallstone removal surgery in India.
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

    const treatments = [
        {
            title: "Laparoscopic Cholecystectomy (Keyhole Surgery)",
            description:
                "Minimally invasive procedure to remove the gallbladder through small incisions. Quick recovery, minimal pain, and no major scarring.",
            downtime: "2–5 days",
        },
        {
            title: "Open Gallbladder Surgery",
            description:
                "Recommended for patients with large stones or complications. Involves a single larger incision for complete gallbladder removal.",
            downtime: "2–3 weeks",
        },
        {
            title: "Non-Surgical Gallstone Management",
            description:
                "Used for patients unfit for surgery. Involves medications, dietary control, and ultrasound monitoring to manage symptoms.",
            downtime: "Not applicable",
        },
        {
            title: "Endoscopic Retrograde Cholangiopancreatography (ERCP)",
            description:
                "A specialized endoscopic technique used to remove stones from the bile duct or relieve blockage before surgery.",
            downtime: "1–3 days",
        },
        {
            title: "Post-Surgery Recovery & Diet Consultation",
            description:
                "Customized diet and lifestyle plans by experts to ensure faster healing, prevent recurrence, and improve digestive health.",
            downtime: "1–2 days",
        },
    ];


    if (!city) {
        return <div>Loading...</div>;
    }
    const seoData = {
        title: `Gallstone Surgery in ${city} | Call 9211930749 | PureCheckup`,
        description: `Get affordable gallstone surgery in ${city} with expert laparoscopic surgeons. Book your free consultation and No-Cost EMI option today at PureCheckup.`,
        keywords: [
            `Free doctor consultation ${city}`,
            `gallstone treatment ${city}`,
            `gallbladder surgery ${city}`,
            `laparoscopic gallstone removal ${city}`,
            `PureCheckup ${city}`,
        ].join(", "),
        canonical: `https://purecheckup.com/treatment/gallstone/${city.toLowerCase()}`,
    }

    return (
        <>
            <SEO {...seoData} />
            <ConditionHeroSection
                title={`Gallbladder Stone Treatment in ${city} – Advanced Laparoscopic Surgery at PureCheckup`}
                description={`Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across City .`}
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
                title2="Gallstone?"
                description={gallstoneData.description}
                tabsData={gallstoneData.tabsData}
                expertHeading={gallstoneData.doctorName}
                doctorName=""
                doctorDescription={gallstoneData.doctorDescription}
                doctorLink="https://purecheckup.com"
                ctaText="Book Free Appointment"
            />

            <section className="px-4 py-8 max-w-7xl mx-auto mt-16">
                <Heading text1="Treatment Options Available in" text2={city || ""} className="mb-6 text-center" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {treatments.map((t, idx) => (
                        <TreatmentCard
                            key={idx}
                            title={t.title}
                            description={t.description}
                            downtime={t.downtime}
                        />
                    ))}
                </div>
            </section>

            <section className="py-20 px-4">
                <Heading text1="Frequently Asked Questions in " text2={`${city}`} className="mb-10" />
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
                    treatmentName="Gallstone"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Gallstone",
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

export default GallstonesInSpecialCity;
