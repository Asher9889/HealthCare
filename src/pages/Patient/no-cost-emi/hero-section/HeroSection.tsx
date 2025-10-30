import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { QuickEmiCheck } from "@/components";
import { motion } from "framer-motion";
import img from "@/assets/no-cost-emi/emi-hero-illustration.webp";

export default function EmiEligibilitySection() {
  return (
    <section className="w-full bg-gradient-to-br from-[var(--primary-bg-light-blue)] via-[#f6fbff] to-white py-16 relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-[var(--primary-bg-color)] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--orange-button-color)] opacity-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        {/* LEFT HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--primary-bg-color)]/10 text-[var(--dark-blue-color)] px-4 py-2 rounded-full text-sm font-medium">
            💙 Easy Medical Financing
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark-blue-color)] leading-snug">
            Get Surgery at{" "}
            <span className="text-[var(--orange-button-color)]">0% Interest</span> —
            Pay Later with No Cost EMI
          </h1>

          <p className="text-[var(--text-secondary)] text-base max-w-lg leading-relaxed">
            PureCheckup helps you afford your treatment or surgery with instant EMI
            approval. No paperwork, no stress — just fast, trusted medical financing
            from top healthcare partners.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-[var(--orange-button-color)] text-white font-medium px-6 transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
            >
              Check EMI Eligibility
            </Button>

            <a href="tel:9211930749">
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--primary-bg-color)] text-[var(--dark-blue-color)] bg-white hover:bg-[var(--primary-bg-color)]/10 font-medium flex items-center gap-2 px-6"
              >
                <Phone className="h-4 w-4" />
                Call Now: 9211930749
              </Button>
            </a>
          </div>

          <p className="text-sm text-[var(--text-light)]">
            💡 Pay for your surgery in easy monthly installments — 0% interest.
          </p>

          {/* Optional decorative illustration */}
          <div className="absolute bottom-0 right-[-3rem] hidden md:block opacity-50">
            <img
              src={img}
              alt="Medical finance"
              className="w-56"
            />
          </div>
        </motion.div>

        {/* RIGHT FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <QuickEmiCheck heading="Quick EMI Check"/>
        </motion.div>
      </div>
    </section>
  );
}
