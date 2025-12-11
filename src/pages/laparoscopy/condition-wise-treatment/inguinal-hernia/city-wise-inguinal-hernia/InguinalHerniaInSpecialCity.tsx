import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, CtaBanner, Heading, SEO, SpecialistCard, StatsBar, TreatmentBenefits, TreatmentCard } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const InguinalHerniaInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: "What is the best treatment for an inguinal hernia in Jaipur?",
            answer:
                "The best option depends on the case, but laparoscopic hernia repair is often preferred for faster recovery and less pain. PureCheckup connects you with top hernia specialists in Jaipur who’ll recommend the ideal approach.",
        },
        {
            id: "two",
            question: "How is the cost of Inguinal Hernia surgery determined in Jaipur?",
            answer:
                "Costs vary based on the type of procedure, hospital choice, and patient condition. For an exact estimate, you can request a free consultation through PureCheckup.",
        },
        {
            id: "three",
            question: "Is Inguinal Hernia surgery painful?",
            answer:
                "Surgery is performed under anesthesia. With laparoscopic techniques, most patients experience minimal post-operative pain and faster recovery compared to open surgery.",
        },
        {
            id: "four",
            question: "Who are the best hernia surgeons in Jaipur?",
            answer:
                "PureCheckup partners with experienced hernia surgeons in Jaipur and accredited hospitals. We match you with specialists based on your medical needs and location.",
        },
        {
            id: "five",
            question: "Does insurance cover Inguinal Hernia surgery in Jaipur?",
            answer:
                "Many health insurance plans cover hernia surgery. PureCheckup assists with cashless claims and helps verify your specific policy coverage.",
        },
        {
            id: "six",
            question: "What is the typical recovery time after Inguinal Hernia surgery?",
            answer:
                "Recovery depends on the procedure. With laparoscopic repair, patients usually resume light activities within a few days and full activity within a few weeks, as advised by their surgeon.",
        },
        {
            id: "seven",
            question: "Can a hernia heal without surgery?",
            answer:
                "No, an inguinal hernia does not heal on its own. Surgical repair is the only reliable treatment to prevent complications and recurrence.",
        },
        {
            id: "eight",
            question: "Which hospitals offer the best hernia treatment in Jaipur?",
            answer:
                "PureCheckup works with leading hospitals across Jaipur that specialize in hernia repair and minimally invasive surgery. We recommend the best hospital options based on your condition and preferences.",
        },
        {
            id: "nine",
            question: "What is the success rate of hernia surgery in Jaipur?",
            answer:
                "When performed by experienced surgeons using modern laparoscopic techniques, success rates are very high with excellent patient outcomes.",
        },
        {
            id: "ten",
            question: "How can I book an appointment for hernia surgery in Jaipur?",
            answer:
                "Call 9211930749 or visit PureCheckup.com to book a free consultation. Our care coordinators will connect you with an expert hernia specialist in Jaipur and guide you through the next steps.",
        },
    ];



    const inguinalHerniaData = {
        title1: "Inguinal Hernia",
        title2: "Treatment & Information",
        description:
            "An inguinal hernia occurs when a portion of tissue, such as the intestine or fat, pushes through a weak spot in the lower abdominal wall near the groin. It appears as a visible bulge, especially when coughing, bending, or lifting heavy objects. At PureCheckup, our expert surgeons offer advanced laparoscopic, robotic, and laser-assisted hernia repair for quick recovery, minimal pain, and no visible scars.",

        tabsData: [
            {
                value: "what-is-inguinal-hernia",
                label: "What is Inguinal Hernia?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div>
                        <p>
                            An inguinal hernia happens when a part of the intestine or abdominal tissue pushes through a weak spot in the lower abdominal wall near the groin. It often appears as a visible bulge that becomes more prominent while coughing, lifting, or bending.
                        </p>
                        <p className="mt-2">
                            This condition is more common in men but can also occur in women due to muscle weakness or pregnancy. Early diagnosis and surgery are important to prevent complications such as hernia strangulation.
                        </p>
                        <p className="mt-2">
                            At PureCheckup, our skilled surgeons use laparoscopic, robotic, and laser-assisted methods to provide safe, painless, and scar-free hernia repair.
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
                            Depending on the severity and size of the hernia, one of the following surgical procedures may be recommended:
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Open Inguinal Hernia Surgery:</strong> The surgeon makes an incision in the groin to push the bulging tissue back into the abdomen and reinforces the wall with surgical mesh. This traditional method is reliable for larger or recurrent hernias.
                            </li>

                            <li>
                                <strong>Laparoscopic (Keyhole) Surgery:</strong> A minimally invasive approach using small incisions and a camera-guided tool for faster healing, minimal pain, and reduced scarring.
                            </li>

                            <li>
                                <strong>Robotic Hernia Surgery:</strong> The most advanced method that uses robotic precision for better accuracy, reduced pain, and enhanced recovery.
                            </li>

                            <li>
                                <strong>Laser-Assisted Hernia Repair (PureCheckup Special):</strong> A cutting-edge, painless option ensuring no stitches, minimal bleeding, and same-day discharge.
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
                            Inguinal hernias develop due to pressure combined with weakness in the abdominal muscles. Common causes include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Weak abdominal muscles (by birth or due to aging)</li>
                            <li>Heavy lifting or strenuous work</li>
                            <li>Chronic cough or constipation</li>
                            <li>Obesity or sudden weight gain</li>
                            <li>Pregnancy or abdominal strain</li>
                            <li>Previous abdominal surgeries</li>
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
                            Watch for the following symptoms to identify an inguinal hernia early:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Visible bulge in the groin or scrotum area</li>
                            <li>Pain or discomfort while bending or lifting</li>
                            <li>Burning or aching sensation in the groin</li>
                            <li>Heaviness or weakness in the lower abdomen</li>
                            <li>Swelling around the testicles (in men)</li>
                        </ul>
                        <p className="mt-2">
                            If untreated, an inguinal hernia can grow larger and lead to serious issues like bowel obstruction or strangulation. Seek immediate medical attention if pain increases suddenly.
                        </p>
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
                            <li>Permanent solution with no recurrence</li>
                            <li>Faster recovery and minimal discomfort</li>
                            <li>Painless laparoscopic or laser-assisted procedure</li>
                            <li>No long hospital stay – same-day discharge</li>
                            <li>Restores mobility and improves quality of life</li>
                            <li>100% insurance support and postoperative care</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Inguinal Hernia Surgeons – PureCheckup Healthcare",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    At PureCheckup, we provide world-class treatment for inguinal hernia using the latest laparoscopic, laser, and robotic surgical technologies. Our highly qualified surgeons ensure maximum precision and safety.
                </p>
                <p>
                    Our partner hospitals are NABH-accredited, maintaining high hygiene and patient care standards. From free consultation to discharge, we provide complete end-to-end support.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Free consultation with hernia specialists</li>
                    <li>Cashless insurance and EMI options</li>
                    <li>Same-day admission and discharge</li>
                    <li>24×7 assistance and postoperative follow-up</li>
                </ul>
                <p>
                    Choose PureCheckup for a painless, safe, and affordable hernia repair surgery with top surgeons and modern facilities.
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
            title: "Laparoscopic Inguinal Hernia Repair",
            description:
                "Minimally invasive surgery using small incisions and a camera for faster recovery and reduced pain. Ideal for patients seeking quick recovery and minimal scarring.",
            downtime: "2–5 days",
        },
        {
            title: "Open Hernia Repair (Herniorrhaphy)",
            description:
                "Traditional surgery recommended for large or complicated hernias, offering highly effective and long-lasting results. Ideal for recurrent or complex hernias.",
            downtime: "2–3 weeks",
        },
        {
            title: "Mesh Hernioplasty (Tension-Free Repair)",
            description:
                "A surgical mesh is placed to strengthen the abdominal wall and significantly reduce recurrence. Ideal for weak abdominal walls or frequent hernia recurrence.",
            downtime: "4–7 days",
        },
        {
            title: "Laparoscopic Bilateral Hernia Repair",
            description:
                "Minimally invasive laparoscopic procedure designed to treat hernias on both sides of the groin simultaneously. Ideal for bilateral inguinal hernia patients.",
            downtime: "5–7 days",
        },
        {
            title: "Recurrent Hernia Surgery",
            description:
                "A specialized corrective procedure for patients who have had previous hernia repairs that failed or recurred. Ideal for recurrent or post-surgical hernias.",
            downtime: "7–10 days",
        },
        {
            title: "3D Mesh Laparoscopic Repair (Latest Technique)",
            description:
                "Advanced procedure using 3D mesh technology for superior abdominal wall reinforcement and long-term durability. Ideal for patients seeking modern, safe, and durable hernia treatment.",
            downtime: "3–5 days",
        },
    ];


    if (!city) {
        return <div>Loading...</div>;
    }

    const seoData = {
        title: `Inguinal Hernia Surgery in ${city} | Call 9211930749 | PureCheckup`,
        description: `Get advanced Inguinal Hernia treatment in ${city} with expert laparoscopic surgeons, affordable cost, and 0% EMI support. Book your free consultation at PureCheckup today.`,
        keywords: `
    Inguinal Hernia treatment in ${city},
    Best hernia doctor in ${city},
    Laparoscopic hernia surgery in ${city},
    Hernia specialist near me,
    Inguinal hernia hospital ${city},
    Hernia surgery cost in ${city},
    Hernia repair doctor ${city},
    PureCheckup ${city}
  `,
        canonical: `https://purecheckup.com/treatment/inguinal-hernia/${city}`,
    }

    return (
        <>
            <SEO {...seoData} />
            <ConditionHeroSection
                title={`Best Inguinal Hernia Surgery in ${city} – 100% Safe & Painless Treatment`}
                description={`Pain-free laser, Rafaelo & advanced procedures for lasting relief. Same-day consults, NABH partner hospitals across City`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["NABH Hospitals", "👥 10,000+ Patients Treated", "🛡️ Insurance Accepted"]}
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
                title2="Inguinal Hernia?"
                description={inguinalHerniaData.description}
                tabsData={inguinalHerniaData.tabsData}
                expertHeading={inguinalHerniaData.doctorName}
                doctorName=""
                doctorDescription={inguinalHerniaData.doctorDescription}
                doctorLink="https://purecheckup.com"
                ctaText="Book Free Appointment"
            />

            <section className="px-4 py-8 max-w-7xl mx-auto">
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
                    treatmentName="Inguinal Hernia"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Inguinal Hernia",
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

export default InguinalHerniaInSpecialCity;
