import { ConditionCityWiseTreatment, ConditionHeroSection, ConditionInfo, ConditionTreatmentForm, ConditionTreatmentOptions, CtaBanner, Heading, SpecialistCard, StatsBar, TreatmentBenefits } from "@/components"
import { Scissors, Clock, ShieldCheck, Headphones, Leaf, Hospital } from "lucide-react";
import { constantData } from "@/constants";
import WhyPristynCare from "@/pages/home/WhyPristineCare.tsx/WhyPristineCare";
import FAQ from "@/components/faq/FAQ";
import { Activity, Stethoscope, HeartPulse, Syringe, Pill } from "lucide-react";
import { useParams } from "react-router-dom";

const UmbilicalHerniaInSpecialCity = () => {
    let { city } = useParams();
    city = city ? city.charAt(0).toUpperCase() + city.slice(1) : "";

    const faqs = [
        {
            id: "one",
            question: `What is the cost of Umbilical Hernia surgery in ${city}?`,
            answer:
                `The cost of umbilical hernia surgery in ${city} varies depending on the hospital, surgeon’s expertise, and whether it’s an open or laparoscopic procedure. PureCheckup’s experts provide a personalized cost plan based on your needs and location.`,
        },
        {
            id: "two",
            question: `Does insurance cover Umbilical Hernia surgery treatment in ${city}?`,
            answer:
                "Yes, most health insurance plans cover umbilical hernia surgery, including hospital and procedure charges. PureCheckup offers cashless and reimbursement support for patients with active health insurance.",
        },
        {
            id: "three",
            question: `Which healthcare provider offers the best treatment at the best price in ${city}?`,
            answer:
                `PureCheckup partners with ${city}’s top hospitals and expert hernia surgeons to provide affordable and advanced umbilical hernia treatment with transparent pricing, EMI options, and insurance support.`,
        },
        {
            id: "four",
            question: "How to book Umbilical Hernia surgery with PureCheckup?",
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <p>Booking your Umbilical Hernia surgery with PureCheckup is quick and easy:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        <li>
                            Visit{" "}
                            <a
                                href="https://purecheckup.com/treatment/umbilical-hernia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                purecheckup.com/treatment/umbilical-hernia
                            </a>
                        </li>
                        <li>Search for Umbilical Hernia Surgery</li>
                        <li>Fill in your details or call our 24×7 care helpline</li>
                    </ul>
                    <p>
                        Our team will schedule your consultation and surgery with the nearest qualified specialist and assist with
                        insurance and postoperative support.
                    </p>
                </div>
            ),
        },
        {
            id: "five",
            question: "What is the best treatment for an Umbilical Hernia?",
            answer:
                "Laparoscopic mesh repair is the most preferred treatment for umbilical hernia due to minimal pain, faster recovery, smaller scars, and a very low recurrence rate.",
        },
        {
            id: "six",
            question: "What are the first signs of an Umbilical Hernia?",
            answer:
                "A small lump or bulge near the belly button that becomes more visible when coughing, bending, or standing is the first sign of an umbilical hernia. You may also experience pain or pressure around the navel area.",
        },
        {
            id: "seven",
            question: "How painful is Umbilical Hernia surgery?",
            answer:
                "Modern laparoscopic and mesh repair techniques make umbilical hernia surgery virtually painless. Most patients experience mild discomfort and recover within 3–5 days.",
        },
        {
            id: "eight",
            question: "How long does Umbilical Hernia surgery take?",
            answer:
                "The procedure usually takes between 30 and 60 minutes, and most patients can return home the same day after observation.",
        },
        {
            id: "nine",
            question: "Can an Umbilical Hernia come back after surgery?",
            answer:
                "Recurrence is extremely rare when the surgery is performed by an experienced surgeon using mesh reinforcement. Maintaining a healthy weight and avoiding heavy lifting helps prevent recurrence.",
        },
        {
            id: "ten",
            question: `Why choose PureCheckup for Umbilical Hernia Surgery in ${city}?`,
            answer: (
                <div className="text-(--text-primary) font-medium space-y-2">
                    <ul className="list-disc list-inside space-y-1">
                        <li>Network of expert surgeons & NABH-accredited hospitals in {city}</li>
                        <li>Affordable pricing with cashless insurance support</li>
                        <li>Personalized care manager for every patient</li>
                        <li>Zero-cost EMI options</li>
                        <li>Free consultation and doorstep pickup support</li>
                    </ul>
                    <p>
                        PureCheckup ensures a safe, painless, and affordable umbilical hernia treatment experience with end-to-end
                        guidance from consultation to recovery.
                    </p>
                </div>
            ),
        },
    ];

    const umbilicalHerniaData = {
        title1: "Umbilical Hernia",
        title2: "Treatment & Information",
        description:
            "An umbilical hernia occurs when part of the intestine or fatty tissue pushes through the abdominal wall near the navel (belly button). It can affect infants, adults, and pregnant women. While small hernias may close naturally in infants, adults usually require surgical repair to prevent pain, infection, or bowel obstruction. At PureCheckup, we connect you with top hernia surgeons and NABH-accredited hospitals for safe, affordable, and advanced umbilical hernia treatment.",

        tabsData: [
            {
                value: "what-is-umbilical-hernia",
                label: "What is Umbilical Hernia?",
                icon: <Activity className="text-blue-600" />,
                content: (
                    <div>
                        <p>
                            An umbilical hernia occurs when intestinal tissue or fat pushes through a weak spot in the abdominal wall near the belly button. It creates a noticeable bulge and may cause discomfort or pain, especially while lifting or bending.
                        </p>
                        <p className="mt-2">
                            It commonly affects infants, adults, and pregnant women. In most adults, surgery is recommended to avoid complications like strangulation or bowel obstruction.
                        </p>
                        <p className="mt-2">
                            At PureCheckup, we offer both open and laparoscopic hernia repair options using the latest mesh techniques to ensure safety, minimal pain, and quick recovery.
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
                            There are two main types of umbilical hernia surgeries performed in India:
                        </p>

                        <ul className="list-disc list-inside space-y-3">
                            <li>
                                <strong>Open Umbilical Hernia Repair:</strong> Involves a small incision near the navel to push back the herniated tissue and strengthen the wall using stitches or mesh. Ideal for large or recurrent hernias.
                            </li>

                            <li>
                                <strong>Laparoscopic Umbilical Hernia Repair:</strong> A minimally invasive technique using small incisions and a camera-guided tool, ensuring faster recovery, minimal scarring, and less pain. Preferred for working professionals and fitness enthusiasts.
                            </li>
                        </ul>

                        <p>
                            At PureCheckup, our partner hospitals offer both procedures with advanced technology and expert surgeons for long-term, recurrence-free results.
                        </p>
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
                            Umbilical hernias develop due to increased pressure or weakness in the abdominal wall. Common causes include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Obesity or sudden weight gain</li>
                            <li>Multiple pregnancies</li>
                            <li>Chronic coughing or constipation</li>
                            <li>Heavy lifting or strain</li>
                            <li>Previous abdominal surgery</li>
                            <li>Weak abdominal muscles since birth</li>
                        </ul>
                        <p className="mt-2">
                            Identifying the underlying cause is crucial to prevent recurrence after surgical repair.
                        </p>
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
                            Common symptoms of umbilical hernia include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Visible bulge or swelling near the belly button</li>
                            <li>Pain or discomfort when coughing, bending, or lifting</li>
                            <li>Pressure or fullness around the navel area</li>
                            <li>Vomiting, redness, or tenderness in severe cases (may indicate strangulated hernia)</li>
                        </ul>
                        <p className="mt-2">
                            If you experience persistent pain or swelling, contact PureCheckup’s hernia specialists for prompt evaluation and treatment.
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
                            <li>Permanent hernia repair and prevention of complications</li>
                            <li>Relief from pain and abdominal pressure</li>
                            <li>Faster recovery with laparoscopic surgery</li>
                            <li>Improved abdominal strength and stability</li>
                            <li>Better appearance near the navel</li>
                            <li>Same-day discharge and insurance support</li>
                        </ul>
                    </div>
                ),
            },
        ],

        doctorName: "Expert Umbilical Hernia Surgeons – PureCheckup Healthcare",
        doctorDescription: (
            <div className="space-y-4">
                <p>
                    PureCheckup is India’s most trusted platform for modern hernia treatments. We connect patients with experienced surgeons and NABH-accredited hospitals for advanced umbilical hernia repair.
                </p>
                <p>
                    Our network hospitals in cities like Ahmedabad, Jaipur, Indore, Delhi, Gurgaon, Lucknow, and Mumbai provide high-quality care with the latest mesh and laparoscopic techniques.
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>NABH-accredited hospitals</li>
                    <li>Free consultation and cost transparency</li>
                    <li>Cashless insurance and easy EMI options</li>
                    <li>24×7 assistance and end-to-end care coordination</li>
                    <li>Free pickup, admission, and discharge support</li>
                </ul>
                <p>
                    Experience a seamless and stress-free surgery journey with PureCheckup — from consultation to complete recovery.
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
            title: "Laser Umbilical Hernia Surgery (Recommended)",
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
                title={`Umbilical Hernia Surgery in ${city} – Cost, Procedure, Recovery & Expert Care`}
                description={`Pain-free, advanced laser treatment in ${city} with same-day discharge and full insurance support.`}
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
                title2={umbilicalHerniaData.title1}
                description={umbilicalHerniaData.description}
                tabsData={umbilicalHerniaData.tabsData}
                expertHeading={umbilicalHerniaData.doctorName}
                doctorName=""
                doctorDescription={umbilicalHerniaData.doctorDescription}
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
                    treatmentName="Umbilical Hernia"
                    costSubtitle={`Pricing varies by case severity, city (${city}), and insurance coverage.`}
                    paymentOptions="Payment Options: EMI Available | Cashless Insurance"
                    costFactors={[
                        "Grade and type of Umbilical Hernia",
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

export default UmbilicalHerniaInSpecialCity;
