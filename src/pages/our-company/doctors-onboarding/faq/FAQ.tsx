import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { constantData } from "@/constants";

const faqs = [
    {
        q: "What is PureCheckup.com, and how does it help doctors?",
        a: "PureCheckup.com is a trusted healthcare platform that connects patients with certified doctors for advanced treatments and consultations. By joining PureCheckup, doctors can expand their reach, increase patient appointments, and grow their medical practice online.",
    },
    {
        q: "How can I register as a doctor on PureCheckup.com?",
        a: "You can register by visiting the “Join as Doctor” section, filling out your details, uploading the required documents (medical registration, degree, ID proof), and submitting the form for verification.",
    },
    {
        q: "Is there any registration fee for doctors to join PureCheckup?",
        a: "No, registering on PureCheckup.com is completely free. Our aim is to help doctors connect with more patients without any upfront cost.",
    },
    {
        q: "What kind of doctors can join PureCheckup?",
        a: "PureCheckup welcomes specialists across multiple departments including Proctology, Urology, Laparoscopy, Gynecology, Plastic Surgery, and General Surgery.",
    },
    {
        q: "How does PureCheckup verify doctors before listing them?",
        a: "Every doctor undergoes a strict verification process where our medical team validates credentials, experience, and registration with the Medical Council of India (MCI) or State Medical Council.",
    },
    {
        q: "How do doctors receive patient leads and appointments?",
        a: "Once approved, doctors get access to our doctor dashboard where they can view and manage real-time patient leads, appointment requests, and consultation bookings.",
    },
    {
        q: "Can I offer both online and offline consultations through PureCheckup?",
        a: "Yes, you can offer both in-clinic and online consultations. Patients can choose the preferred mode, and you can manage both through your dashboard.",
    },
    {
        q: "How will I get paid for consultations or treatments?",
        a: "PureCheckup ensures secure and transparent payments. All confirmed appointments and procedures are billed directly to your account after patient confirmation.",
    },
    {
        q: "Can hospitals or clinics also partner with PureCheckup?",
        a: "Yes, multi-specialty hospitals and clinics can collaborate with PureCheckup to list their doctors, increase brand visibility, and attract new patients.",
    },
    {
        q: "Who should I contact for support or partnership queries?",
        a: "For registration or partnership support, you can contact our Doctor Support Team at 📞 9211930749 or email us at health@purecheckup.com.",
    },
];

export default function FAQ() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">

            {/* Header */}
            <div className="text-center space-y-2 mb-10">
                <div className="flex items-center justify-center gap-2">
                    <HelpCircle className="text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-800">FAQs for Doctors</h2>
                </div>
                <p className="text-gray-600">
                    Find quick answers to common questions about joining PureCheckup.
                </p>
            </div>

            {/* FAQ LIST */}
            <Accordion type="single" collapsible>
                {faqs.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="w-full px-4 mb-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all 
                                   shadow-sm overflow-hidden border border-blue-100"
                    >
                        <AccordionTrigger className="font-semibold text-gray-800">
                            {item.q}
                        </AccordionTrigger>

                        <AccordionContent className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <Separator className="my-10" />

            {/* SUPPORT FOOTER */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-gray-600 text-sm"
            >
                Still have questions?{" "}
                <a href={`tel:+91${constantData.supportNumber}`} className="text-blue-600 font-medium cursor-pointer hover:underline">
                    Contact our support team →
                </a>
            </motion.div>
        </section>
    );
}
