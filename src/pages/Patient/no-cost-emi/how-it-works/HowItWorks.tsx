import { Heading } from "@/components";
import { motion } from "framer-motion";
import { Stethoscope, BadgeCheck, CalendarCheck2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Surgery",
    description:
      "Select your required surgery or treatment — we'll guide you with options.",
    icon: <Stethoscope className="w-6 h-6 text-[var(--dark-blue-color)]" />,
  },
  {
    id: 2,
    title: "Get EMI Approval Instantly",
    description:
      "Our finance partners approve your EMI within minutes — no heavy documents required.",
    icon: <BadgeCheck className="w-6 h-6 text-[var(--dark-blue-color)]" />,
  },
  {
    id: 3,
    title: "Get Surgery Done Hassle-Free",
    description:
      "Your surgery is scheduled at top hospitals while you pay later in easy installments.",
    icon: <CalendarCheck2 className="w-6 h-6 text-[var(--dark-blue-color)]" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fcff] via-[#f5faff] to-white py-20 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-10 right-10 w-64 h-64 bg-[var(--primary-bg-color)] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--orange-button-color)] opacity-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
            <Heading text1="How It" text2="Works" />
          <p className="text-[var(--text-secondary)] mt-2 text-base">
            Three simple steps to get <strong>No Cost EMI</strong> for your surgery.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-6 flex flex-col items-start text-left hover:-translate-y-1"
            >
              {/* Step number */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary-bg-color)]/10 text-[var(--dark-blue-color)] font-semibold mb-4">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[var(--dark-blue-color)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-bg-color)] to-[var(--orange-button-color)] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
