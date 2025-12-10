"use client";

import { motion } from "framer-motion";
import {
    HeartPulse,
    CalendarCheck,
    CreditCard,
    Stethoscope
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const WhyJoin = () => {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-([var(--primary-bg-color)]) to-white">
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-extrabold text-(--text-primary)">
                        Why join <span className="text-(--orange-button-color)">PureCheckup</span>
                    </h2>
                    <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
                        Powerful tools to help clinicians grow while keeping care quality front and center.
                    </p>
                </motion.div>


                {/* BENEFITS GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <BenefitCard
                        icon={<HeartPulse className="text-blue-600 h-8 w-8" />}
                        title="Reach new patients"
                        text="Appear in specialty searches and get matched to high-intent patients in your area."
                    />

                    <BenefitCard
                        icon={<CalendarCheck className="text-blue-600 h-8 w-8" />}
                        title="Smarter scheduling"
                        text="Built-in reminders, calendar sync, and no-show protection reduce admin effort."
                    />

                    <BenefitCard
                        icon={<CreditCard className="text-blue-600 h-8 w-8" />}
                        title="Fast payouts"
                        text="Transparent rates, next-business-day payouts, and simple billing workflows."
                    />

                    <BenefitCard
                        icon={<Stethoscope className="text-blue-600 h-8 w-8" />}
                        title="Clinical-grade tools"
                        text="E-prescriptions, secure messaging, smart notes & telehealth built around your workflow."
                    />
                </div>


                {/* SPECIALIZATION SECTION */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="mt-20"
                >
                    <h3 className="text-3xl font-bold text-gray-900">
                        Specializations offered
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Choose from popular specialties. Filter to see details.
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-3 mt-5">
                        {["Primary Care", "Dermatology", "Psychiatry", "Pediatrics", "OB/GYN", "Cardiology"]
                            .map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 bg-white border shadow-sm rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-400 transition"
                                >
                                    {item}
                                </span>
                            ))
                        }
                    </div>

                    {/* SPECIALIZATION CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <SpecCard title="Virtual & in-person visits" text="Hybrid appointment types to match your availability." />
                        <SpecCard title="Insurance support" text="Credentialing assistance for major payers." />
                        <SpecCard title="Care protocols" text="Guidelines and templates per specialty." />
                        <SpecCard title="Marketing boost" text="Premium placement for top-rated clinicians." />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyJoin;


/* Subcomponents */

const BenefitCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <motion.div
        variants={fadeUp}
        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-100"
    >
        <div className="mb-4">{icon}</div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed">{text}</p>
    </motion.div>
);

const SpecCard = ({ title, text }: { title: string, text: string }) => (
    <motion.div
        variants={fadeUp}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
    >
        <h5 className="font-semibold text-gray-900">{title}</h5>
        <p className="text-gray-600 text-sm mt-2">{text}</p>
    </motion.div>
);
