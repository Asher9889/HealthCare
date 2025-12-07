import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const CircumcisionInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of circumcision surgery in ${city}?`,
            answer:
                `The cost of circumcision in ${city} ranges between ₹25,000 and ₹60,000, depending on the technique used (ZSR Stapler, Laser, or Open Surgery) and the hospital choice.`,
        },
        {
            id: "two",
            question: `Is circumcision covered by insurance in ${city}?`,
            answer:
                "Yes, circumcision is covered by insurance if it is medically necessary (e.g., for phimosis, paraphimosis, or balanitis). PureCheckup provides assistance with cashless claims.",
        },
        {
            id: "three",
            question: `Which is the best clinic for circumcision in ${city}?`,
            answer:
                `PureCheckup partners with top-rated clinics and hospitals in ${city} that specialize in ZSR Stapler and Laser Circumcision, ensuring a safe and hygienic procedure.`,
        },
        {
            id: "four",
            question: "How to book a circumcision appointment with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking is simple:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>
                            Visit{" "}
                            <a
                                href="https://purecheckup.com/treatment/circumcision"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                purecheckup.com/treatment/circumcision
                            </a>
                        </li>
                        <li>Enter your details in the form</li>
                        <li>Our medical coordinator will call you to schedule a free consultation</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "five",
            question: "Which circumcision method is the best?",
            answer:
                "ZSR Stapler Circumcision and Laser Circumcision are considered the best methods as they are painless, bloodless, and offer faster recovery compared to traditional open surgery.",
        },
        {
            id: "six",
            question: "Is circumcision painful?",
            answer:
                "No, modern circumcision techniques like ZSR and Laser are performed under local anesthesia, making the procedure virtually painless. Post-surgery discomfort is minimal and manageable with medication.",
        },
        {
            id: "seven",
            question: "How long does the recovery take?",
            answer:
                "Patients can usually return to work or daily activities within 2–3 days. Complete healing of the wound takes about 1–2 weeks.",
        },
        {
            id: "eight",
            question: "Are there any side effects of circumcision?",
            answer:
                "Circumcision is a safe procedure with minimal risks. Rare complications may include minor bleeding or infection, which can be easily treated. It does not affect fertility or sexual function.",
        },
        {
            id: "nine",
            question: `Why choose PureCheckup for circumcision in ${city}?`,
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Experienced surgeons specializing in male sexual health</li>
                        <li>Advanced ZSR Stapler and Laser technology</li>
                        <li>100% privacy and confidentiality</li>
                        <li>Cashless insurance and EMI options</li>
                        <li>Free post-surgery follow-up</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "ten",
            question: "What conditions does circumcision treat?",
            answer:
                "Circumcision is effective for treating phimosis (tight foreskin), paraphimosis (trapped foreskin), balanitis (infection), and frenulum breve (short frenulum).",
        },
    ];

    const circumcisionData = {
        title1: "Circumcision",
        title2: "Treatment & Information",
        description:
            "Circumcision is the surgical removal of the foreskin covering the head of the penis. It is a common procedure performed for medical, hygienic, or religious reasons. At PureCheckup, we specialize in advanced ZSR Stapler and Laser Circumcision techniques that ensure a painless experience, cosmetic finish, and rapid recovery.",

        tabsData: [
            {
                value: "what-is-circumcision",
                label: "What is Circumcision?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div>
                        <p>
                            Circumcision is a simple surgical procedure to remove the foreskin—the hood of skin covering the glans (head) of the penis.
                        </p>
                        <p className="mt-2">
                            It is often recommended for medical conditions like phimosis (inability to retract foreskin), paraphimosis, and recurrent infections (balanitis). It also improves hygiene and reduces the risk of urinary tract infections and sexually transmitted diseases.
                        </p>
                        <p className="mt-2">
                            PureCheckup offers modern, painless circumcision options that are far superior to traditional open surgery.
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
                            We offer the most advanced circumcision techniques:
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>ZSR Stapler Circumcision:</strong> A revolutionary technique that uses a disposable stapler device to cut and seal the skin simultaneously. It is quick (10-15 mins), bloodless, and leaves a smooth cosmetic finish.
                            </li>
                            <li>
                                <strong>Laser Circumcision:</strong> Uses a high-precision laser beam to remove the foreskin. It causes minimal tissue damage, less swelling, and faster healing than open surgery.
                            </li>
                            <li>
                                <strong>Open Circumcision:</strong> The traditional method involving scalpel and stitches. It is generally reserved for complex cases where other methods are not suitable.
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                value: "causes",
                label: "Medical Reasons",
                icon: <Pill className="text-purple-600" />,
                content: (
                    <div>
                        <p className="mb-4">
                            Circumcision is medically advised for:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Phimosis:</strong> Tight foreskin that cannot be pulled back.</li>
                            <li><strong>Paraphimosis:</strong> Foreskin gets stuck behind the glans and cuts off blood flow (emergency).</li>
                            <li><strong>Balanitis:</strong> Recurrent infection or inflammation of the glans.</li>
                            <li><strong>Balanoposthitis:</strong> Inflammation of both the glans and foreskin.</li>
                            <li><strong>Frenulum Breve:</strong> Short frenulum causing pain during erection.</li>
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
                            Symptoms indicating the need for circumcision include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Difficulty retracting the foreskin</li>
                            <li>Pain, swelling, or redness around the penis head</li>
                            <li>Pain during urination or sexual intercourse</li>
                            <li>Foul-smelling discharge under the foreskin</li>
                            <li>Recurrent urinary tract infections</li>
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
                            <li>Improved hygiene and easier cleaning</li>
                            <li>Reduced risk of UTIs and STDs (including HIV)</li>
                            <li>Prevention of penile cancer</li>
                            <li>Resolution of phimosis and related pain</li>
                            <li>Enhanced sexual satisfaction (in some cases)</li>
                            <li>Cosmetically pleasing results with ZSR/Laser</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Circumcision Surgeons – PureCheckup Healthcare",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    PureCheckup is a leader in men's sexual health treatments. We work with highly skilled surgeons who have performed thousands of successful circumcisions.
                </p>
                <p>
                    We prioritize patient comfort and privacy. Our clinics provide a judgment-free environment with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Confidential consultations</li>
                    <li>Fast-track admission and discharge</li>
                    <li>Dedicated male care coordinators</li>
                    <li>Post-surgery care kit and guidance</li>
                </ul>
            </div>
        ),
        doctorLink: "https://purecheckup.com",
    };

    const benefits = [
        {
            icon: Scissors,
            title: "ZSR Stapler / Laser",
            description: "Advanced, painless techniques.",
        },
        {
            icon: Clock,
            title: "10-Min Procedure",
            description: "Quick and effective treatment.",
        },
        {
            icon: ShieldCheck,
            title: "100% Private",
            description: "Confidential and judgment-free.",
        },
        {
            icon: Headphones,
            title: "Fast Recovery",
            description: "Back to work in 2 days.",
        },
    ];

    const treatmentOptions = [
        {
            id: 1,
            icon: <Scissors className="w-7 h-7 text-blue-600" />,
            title: "ZSR Stapler Circumcision",
            points: [
                "Most advanced method",
                "Silicon ring falls off automatically",
                "Best cosmetic result",
            ],
            highlight: false,
        },
        {
            id: 2,
            icon: <Leaf className="w-7 h-7 text-green-600" />,
            title: "Laser Circumcision",
            points: ["Precision cutting", "Minimal bleeding", "Faster healing"],
            highlight: false,
        },
        {
            id: 3,
            icon: <Hospital className="w-7 h-7 text-purple-600" />,
            title: "Frenuloplasty",
            points: ["For short frenulum", "Preserves foreskin", "Quick relief"],
            highlight: false,
        },
    ];

    if (!city) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ConditionHeroSection
                title={`Circumcision Surgery in ${city} – Painless ZSR & Laser Treatment`}
                description={`Advanced, bloodless circumcision in ${city} for Phimosis & Balanitis. 100% private & safe.`}
                primaryBtn={{ label: "Book Free Consultation" }}
                secondaryBtn={{ label: "Call Now: +91 9211930749" }}
                features={["✅ ZSR Stapler", "👥 Expert Surgeons", "🛡️ 100% Confidential"]}
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
                title2="Circumcision?"
                description={circumcisionData.description}
                tabsData={circumcisionData.tabsData}
                expertHeading={circumcisionData.doctorName}
                doctorName=""
                doctorDescription={circumcisionData.doctorDescription}
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
                    treatmentName="Circumcision"
                    costSubtitle={`Pricing varies by technique (ZSR/Laser), city (${city}), and insurance.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Technique used (ZSR Stapler, Laser, Open)",
                        "Hospital category and room choice",
                        "Anesthesia type (Local/General)",
                        "Post-surgery medication and kit",
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

export default CircumcisionInSpecialCity;
