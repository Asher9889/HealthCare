
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
        q: "What is No Cost EMI for surgery?",
        a: "It’s a 0% interest payment plan that allows you to pay your surgery cost in monthly installments without extra charges.",
    },
    {
        q: "Do I need a credit card for EMI?",
        a: "Not necessarily. We offer both credit card and non-card EMI options through partners.",
    },
    {
        q: "How long does EMI approval take?",
        a: "Usually within 10 minutes with minimal documentation.",
    },
    {
        q: "Which surgeries are covered?",
        a: "All minor and major surgeries including piles, hernia, gallbladder, kidney stone, and more.",
    },
    {
        q: "Can I get EMI even if I don’t have health insurance?",
        a: "Yes, our EMI plans are available for both insured and uninsured patients.",
    },
];

export default function EmiFaqs() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center space-y-2 mb-10">
                <div className="flex items-center justify-center gap-2">
                    <HelpCircle className="text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-800">EMI FAQs</h2>
                </div>
                <p className="text-gray-600">
                    Find quick answers to common questions about our EMI plans.
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
                                <AccordionTrigger className="font-semibold text-gray-800">
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
