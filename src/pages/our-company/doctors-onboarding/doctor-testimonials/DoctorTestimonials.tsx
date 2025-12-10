import { amit, ashish, tanmay } from "@/assets";
import { motion } from "framer-motion";

const testimonials = [
    {
        message:
            "PureCheckup helped me expand my telehealth reach without adding overhead. The onboarding was smooth and patients love the seamless experience.",
        name: "Dr. Tanmay Jain",
        specialty: "Proctology, Laproscopy, Urologist, General Surgeon, Jaipur",
        image: tanmay
        // image:
        //     "https://images.unsplash.com/photo-1645066928295-2506defde470?q=80&w=758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with actual hosted URL or local image path
    },
    {
        message:
            "The platform saves so much admin time. Appointment reminders and smart follow-ups have drastically reduced no-shows.",
        name: "Dr. Amit Kumar Gupta",
        specialty: "Proctology, Laproscopy, Urologist, General Surgeon, Lucknow",
        image: amit
        // image: "https://plus.unsplash.com/premium_photo-1664475543697-229156438e1e?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        message:
            "PureCheckup’s tools are intuitive and well-designed. My team uses it daily for online and in-person consultations.",
        name: "Dr. Rahul Sharma",
        specialty: "Proctology, Laproscopy, Urologist, General Surgeon, Meerut",
        image: "https://images.unsplash.com/photo-1659353887488-b3c443982a57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        message: "PureCheckup has made patient management incredibly smooth. The automated workflow lets me focus more on diagnosis and care, not admin tasks.",
        name: "Dr. Aashish Vohra",
        specialty: "Proctology, Laproscopy, Urologist, General Surgeon, Indore",
        image: ashish
        // image: "https://images.unsplash.com/photo-1659353887488-b3c443982a57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
};

export default function DoctorTestimonials() {
    return (
        <section className="w-full py-20  bg-gradient-to-b from-([var(--primary-bg-color)]) to-white">
            <div className="container mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-extrabold ">
                        What <span className="text-(--orange-button-color)">Doctors Say</span>
                    </h2>
                    <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
                        Trusted by top clinicians across India for modern, reliable patient care.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((doc, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: index * 0.15 }}
                            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition"
                        >
                            {/* Testimonial */}
                            <p className="text-gray-700 leading-relaxed text-[15px]">
                                {doc.message}
                            </p>

                            {/* DOCTOR INFO */}
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-12 h-12 rounded-full object-cover object-top border border-gray-200"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                                    <p className="text-gray-500 text-sm">{doc.specialty}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
