
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        q: "Can I use any health insurance policy for surgery?",
        a:
            "Yes, we support all major health insurance plans including private and corporate ones.",
    },
    {
        q: "Is the surgery completely cashless?",
        a:
            "Yes, for eligible plans. Our team handles your claim pre-authorization and hospital coordination.",
    },
    {
        q: "How long does approval take?",
        a:
            "Most insurance approvals are completed within a few hours once documents are submitted.",
    },
    {
        q: "Do you offer EMI if insurance doesn’t cover?",
        a:
            "Yes, we provide discounted hospital rates and flexible EMI options.",
    },
];

export default function PatientHelpFaqs() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center space-y-2 mb-10">
                <div className="flex items-center justify-center gap-2">
                    <HelpCircle className="text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-800">FAQs</h2>
                </div>
                <p className="text-gray-600">
                    Find quick answers to common questions.
                </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
                <Accordion
                    type="single"
                    collapsible
                // className="w-full px-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow-sm overflow-hidden border border-blue-100"
                >
                    {faqs.map((item, index) => {
                        return (
                            <AccordionItem className="w-full px-4 mb-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow-sm overflow-hidden border border-blue-100"
                                value={index.toString() + "-item"}>
                                <AccordionTrigger className="font-semibold text-md text-gray-800">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent

                                    className="px-5 pb-4 text-gray-700 text-sm leading-relaxed"
                                >
                                    <li>{item.a}</li>
                                </AccordionContent>
                            </AccordionItem>

                        );
                    })}
                </Accordion>
            </div>

            <Separator className="my-10" />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center text-gray-600 text-sm"
            >
                Still have questions?{" "}
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                    Contact our support team →
                </span>
            </motion.div>
        </section>
    );
}
